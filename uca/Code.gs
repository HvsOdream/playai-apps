/*************************************************************
 * UCA 퀴즈 — 개인화/리더보드 백엔드 (Google Apps Script)
 * -----------------------------------------------------------
 * 읽기/쓰기 모두 GET+JSONP (교차도메인 CORS·POST 리다이렉트 회피).
 * apps.playai.kr(GitHub Pages) → script.google.com 호출이 교차도메인이라
 * fetch GET은 CORS로 막히고 no-cors POST는 본문이 유실된다. 반드시 JSONP.
 *
 * action: ping | me(sid) | board | admin(key) | submit(payload)
 *
 * ▶ 설치
 *   1) script.google.com → 새 프로젝트 → 이 코드 전체 붙여넣기
 *   2) ADMIN_KEY 값을 원하는 비밀번호로 변경
 *   3) testSetup 실행 → 권한 승인(자동으로 Drive 폴더 생성)
 *   4) 배포 → 새 배포 → 웹 앱 / 실행: 나 / 액세스: 모든 사용자 → URL 복사
 *   5) 학생·교수 HTML의 CONFIG.SYNC_URL 에 그 URL 붙여넣기
 * ▶ 코드 교체 후: 배포 관리 > (연필) > 버전: 새 버전 > 배포 (URL 유지)
 *************************************************************/

const FOLDER_NAME = 'UCA퀴즈-DB';
const FILE_NAME   = 'uca_progress.json';
const ADMIN_KEY   = 'SET-IN-DEPLOYMENT'; /* ⚠공개 레포: 실제 비밀번호는 배포된 스크립트에만 설정(현재 적용됨). 이 파일엔 노출 금지 */

const DOMAINS = ["EDITOR","PROG","PHYS","ANIM","ASSET","UI","LIGHT","AUDIO",
  "MAT","SVC","GDES","PMGT","GART","NAV","EMP","IND"];

/* ============ 저장소 ============ */
function getFolder(){
  const it = DriveApp.getFoldersByName(FOLDER_NAME);
  return it.hasNext() ? it.next() : DriveApp.createFolder(FOLDER_NAME);
}
function findFile(name){
  const files = getFolder().getFilesByName(name);
  return files.hasNext() ? files.next() : null;
}
function readDB(){
  const f = findFile(FILE_NAME);
  if (!f) return {students:{}};
  try { return JSON.parse(f.getBlob().getDataAsString()); }
  catch(e){ return {students:{}}; }
}
function saveDB(db){
  db._synced = new Date().toISOString();
  const content = JSON.stringify(db, null, 2);
  const ex = findFile(FILE_NAME);
  if (ex) ex.setContent(content);
  else getFolder().createFile(FILE_NAME, content, 'application/json');
}
function out(obj, callback){
  if (callback){
    return ContentService.createTextOutput(callback + '(' + JSON.stringify(obj) + ')')
      .setMimeType(ContentService.MimeType.JAVASCRIPT);
  }
  return ContentService.createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}
function blankStudent(){
  return {name:'', team:'', sessions:[], domAgg:{}, weakQ:[],
          totalSessions:0, totalQ:0, totalC:0, lastSeen:''};
}

/* ============ 라우팅 ============ */
function handle(p){
  const action = p.action || 'ping';

  if (action === 'ping') return {status:'ok', ts:new Date().toISOString()};

  if (action === 'me'){
    const db = readDB();
    const sid = String(p.sid || '').trim();
    return {status:'ok', student: (sid && db.students[sid]) ? db.students[sid] : null};
  }

  if (action === 'board'){
    return {status:'ok', board: leaderboard(readDB())};
  }

  if (action === 'admin'){
    if (String(p.key) !== String(ADMIN_KEY)) return {status:'error', message:'unauthorized'};
    return {status:'ok', data: adminData(readDB())};
  }

  if (action === 'submit'){
    let payload;
    try { payload = JSON.parse(p.payload || '{}'); }
    catch(e){ return {status:'error', message:'bad payload'}; }
    return {status:'ok', student: submitSession(payload)};
  }

  return {status:'error', message:'unknown action'};
}

/* ============ 세션 제출 ============ */
function submitSession(body){
  const db = readDB();
  const sid = String(body.sid || '').trim();
  if (!sid) return null;

  const s = db.students[sid] || (db.students[sid] = blankStudent());
  if (body.name) s.name = String(body.name).trim();
  if (body.team) s.team = String(body.team).trim();

  const sess = body.session || {};
  s.sessions = s.sessions || [];
  s.sessions.push({
    t: new Date().toISOString(),
    mode: sess.mode || 'practice',
    total: sess.total|0, got: sess.got|0, pct: sess.pct|0
  });
  if (s.sessions.length > 30) s.sessions = s.sessions.slice(-30);

  // 도메인 누적
  s.domAgg = s.domAgg || {};
  const byDom = sess.byDom || {};
  DOMAINS.forEach(function(d){
    if (byDom[d]){
      s.domAgg[d] = s.domAgg[d] || {n:0,c:0};
      s.domAgg[d].n += byDom[d].n|0;
      s.domAgg[d].c += byDom[d].c|0;
    }
  });

  s.totalSessions = (s.totalSessions|0) + 1;
  s.totalQ = (s.totalQ|0) + (sess.total|0);
  s.totalC = (s.totalC|0) + (sess.got|0);

  // 문항 단위 오답셋 — wq(틀림) 추가, rq(맞음) 제거
  s.weakQ = s.weakQ || [];
  (sess.wq || []).forEach(function(q){ if (s.weakQ.indexOf(q) < 0) s.weakQ.push(q); });
  (sess.rq || []).forEach(function(q){ var i = s.weakQ.indexOf(q); if (i >= 0) s.weakQ.splice(i,1); });

  s.lastSeen = new Date().toISOString();
  saveDB(db);
  return s;
}

/* ============ 집계 ============ */
function leaderboard(db){
  const players = [], teams = {};
  Object.keys(db.students||{}).forEach(function(sid){
    const s = db.students[sid];
    const q = s.totalQ|0, c = s.totalC|0, pct = q ? Math.round(c/q*100) : 0;
    players.push({sid:sid, name:s.name||sid, team:s.team||'-',
                  totalQ:q, totalC:c, pct:pct, sessions:s.totalSessions|0});
    const tk = s.team || '-';
    teams[tk] = teams[tk] || {team:tk, totalQ:0, totalC:0, members:0};
    teams[tk].totalQ += q; teams[tk].totalC += c; teams[tk].members += 1;
  });
  players.sort(function(a,b){ return b.pct - a.pct || b.totalC - a.totalC; });
  const teamArr = Object.keys(teams).map(function(k){
    const t = teams[k]; t.pct = t.totalQ ? Math.round(t.totalC/t.totalQ*100) : 0; return t;
  }).sort(function(a,b){ return b.pct - a.pct || b.totalC - a.totalC; });
  return {players:players, teams:teamArr, updated:new Date().toISOString()};
}

function adminData(db){
  const students = [], teams = {}, classDom = {};
  Object.keys(db.students||{}).forEach(function(sid){
    const s = db.students[sid];
    const q = s.totalQ|0, c = s.totalC|0, pct = q ? Math.round(c/q*100) : 0;
    students.push({sid:sid, name:s.name||sid, team:s.team||'-', sessions:s.totalSessions|0,
                   totalQ:q, totalC:c, pct:pct, lastSeen:s.lastSeen||'', domAgg:s.domAgg||{}});
    const tk = s.team || '-';
    teams[tk] = teams[tk] || {team:tk, totalQ:0, totalC:0, members:0};
    teams[tk].totalQ += q; teams[tk].totalC += c; teams[tk].members += 1;
    DOMAINS.forEach(function(dd){
      if (s.domAgg && s.domAgg[dd]){
        classDom[dd] = classDom[dd] || {n:0, c:0};
        classDom[dd].n += s.domAgg[dd].n|0; classDom[dd].c += s.domAgg[dd].c|0;
      }
    });
  });
  students.sort(function(a,b){ return b.pct - a.pct || b.totalC - a.totalC; });
  const teamArr = Object.keys(teams).map(function(k){
    const t = teams[k]; t.pct = t.totalQ ? Math.round(t.totalC/t.totalQ*100) : 0; return t;
  }).sort(function(a,b){ return b.pct - a.pct; });
  return {students:students, teams:teamArr, classDom:classDom,
          count:students.length, updated:new Date().toISOString()};
}

/* ============ 엔드포인트 ============ */
function doGet(e){
  const p = (e && e.parameter) || {};
  return out(handle(p), p.callback);
}
function doPost(e){                       /* 예비: 브라우저 교차도메인은 GET 사용 */
  let p = {};
  try { p = JSON.parse(e.postData.contents); } catch(err){}
  return out(handle(p), null);
}

/* ============ 설치 확인 ============ */
function testSetup(){
  const f = getFolder();
  Logger.log('폴더 OK: ' + f.getName() + ' / id=' + f.getId());
  const s = submitSession({sid:'TEST0000', name:'테스트', team:'테스트조',
    session:{mode:'practice', total:2, got:1, pct:50, byDom:{EDITOR:{n:2,c:1}}, wq:['qX'], rq:[]}});
  Logger.log('제출 OK: ' + JSON.stringify(s));
  Logger.log('board: ' + JSON.stringify(leaderboard(readDB())));
  const db = readDB(); delete db.students['TEST0000']; saveDB(db);
  Logger.log('테스트 정리 완료. 배포 준비 끝.');
}
