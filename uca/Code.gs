/*************************************************************
 * UCA 퀴즈 — 개인화/리더보드 백엔드 (Google Apps Script)
 * -----------------------------------------------------------
 * 읽기/쓰기 모두 GET+JSONP (교차도메인 CORS·POST 리다이렉트 회피).
 * action: ping | me(sid) | check(sid,name) | board | admin(key) | submit(payload)
 *
 * mode 버킷: 'exam' → 시험 점수, 그 외('practice'/'mock') → 연습 점수
 * ▶ 코드 교체 후: 배포 관리 > (연필) > 버전: 새 버전 > 배포 (URL 유지)
 *************************************************************/

const FOLDER_NAME = 'UCA퀴즈-DB';
const FILE_NAME   = 'uca_progress.json';
const ADMIN_KEY   = 'SET-IN-DEPLOYMENT'; /* 실제 비번은 배포된 스크립트에만 */

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
  return {name:'', sessions:[], domAgg:{}, weakQ:[],
          pracSessions:0, pracQ:0, pracC:0,
          examSessions:0, examQ:0, examC:0,
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

  if (action === 'check'){          /* 중복 로그인 확인 */
    const db = readDB();
    const sid  = String(p.sid  || '').trim();
    const name = String(p.name || '').trim();
    const rec = db.students[sid] || null;
    let nameOtherSid = false;
    Object.keys(db.students||{}).forEach(function(k){
      if (k !== sid && String(db.students[k].name||'').trim() === name && name) nameOtherSid = true;
    });
    return {status:'ok', sidExists:!!rec, sidName: rec ? (rec.name||'') : '', nameOtherSid: nameOtherSid};
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

  const sess = body.session || {};
  const isExam = (sess.mode === 'exam');
  s.sessions = s.sessions || [];
  s.sessions.push({
    t: new Date().toISOString(),
    mode: sess.mode || 'practice',
    total: sess.total|0, got: sess.got|0, pct: sess.pct|0
  });
  if (s.sessions.length > 30) s.sessions = s.sessions.slice(-30);

  // 도메인 누적 (연습·시험 공통 — 약점 학습 신호)
  s.domAgg = s.domAgg || {};
  const byDom = sess.byDom || {};
  DOMAINS.forEach(function(d){
    if (byDom[d]){
      s.domAgg[d] = s.domAgg[d] || {n:0,c:0};
      s.domAgg[d].n += byDom[d].n|0;
      s.domAgg[d].c += byDom[d].c|0;
    }
  });

  // 연습/시험 분리 집계
  if (isExam){
    s.examSessions = (s.examSessions|0) + 1;
    s.examQ = (s.examQ|0) + (sess.total|0);
    s.examC = (s.examC|0) + (sess.got|0);
  } else {
    s.pracSessions = (s.pracSessions|0) + 1;
    s.pracQ = (s.pracQ|0) + (sess.total|0);
    s.pracC = (s.pracC|0) + (sess.got|0);
  }
  s.totalSessions = (s.totalSessions|0) + 1;
  s.totalQ = (s.totalQ|0) + (sess.total|0);
  s.totalC = (s.totalC|0) + (sess.got|0);

  // 문항 단위 오답셋
  s.weakQ = s.weakQ || [];
  (sess.wq || []).forEach(function(q){ if (s.weakQ.indexOf(q) < 0) s.weakQ.push(q); });
  (sess.rq || []).forEach(function(q){ var i = s.weakQ.indexOf(q); if (i >= 0) s.weakQ.splice(i,1); });

  s.lastSeen = new Date().toISOString();
  saveDB(db);
  return s;
}

/* ============ 집계 ============ */
function pct(c,q){ return q ? Math.round(c/q*100) : 0; }

function leaderboard(db){
  const players = [];
  Object.keys(db.students||{}).forEach(function(sid){
    const s = db.students[sid];
    players.push({sid:sid, name:s.name||sid,
      pracQ:s.pracQ|0, pracC:s.pracC|0, pracPct:pct(s.pracC|0,s.pracQ|0),
      examQ:s.examQ|0, examC:s.examC|0, examPct:pct(s.examC|0,s.examQ|0),
      examSessions:s.examSessions|0, sessions:s.totalSessions|0});
  });
  // 시험 응시자 우선, 시험 정답률 순 → 연습 정답률 순
  players.sort(function(a,b){
    if ((b.examQ>0)!==(a.examQ>0)) return (b.examQ>0?1:0)-(a.examQ>0?1:0);
    return b.examPct - a.examPct || b.examC - a.examC || b.pracPct - a.pracPct;
  });
  return {players:players, updated:new Date().toISOString()};
}

function adminData(db){
  const students = [], classDom = {};
  Object.keys(db.students||{}).forEach(function(sid){
    const s = db.students[sid];
    students.push({sid:sid, name:s.name||sid,
      pracSessions:s.pracSessions|0, pracQ:s.pracQ|0, pracC:s.pracC|0, pracPct:pct(s.pracC|0,s.pracQ|0),
      examSessions:s.examSessions|0, examQ:s.examQ|0, examC:s.examC|0, examPct:pct(s.examC|0,s.examQ|0),
      sessions:s.totalSessions|0, lastSeen:s.lastSeen||'', domAgg:s.domAgg||{}});
    DOMAINS.forEach(function(dd){
      if (s.domAgg && s.domAgg[dd]){
        classDom[dd] = classDom[dd] || {n:0, c:0};
        classDom[dd].n += s.domAgg[dd].n|0; classDom[dd].c += s.domAgg[dd].c|0;
      }
    });
  });
  students.sort(function(a,b){ return b.examPct - a.examPct || b.pracPct - a.pracPct; });
  return {students:students, classDom:classDom,
          count:students.length, updated:new Date().toISOString()};
}

/* ============ 엔드포인트 ============ */
function doGet(e){
  const p = (e && e.parameter) || {};
  return out(handle(p), p.callback);
}
function doPost(e){
  let p = {};
  try { p = JSON.parse(e.postData.contents); } catch(err){}
  return out(handle(p), null);
}

/* ============ 설치 확인 ============ */
function testSetup(){
  const f = getFolder();
  Logger.log('폴더 OK: ' + f.getName());
  const s = submitSession({sid:'TEST0000', name:'테스트',
    session:{mode:'exam', total:2, got:1, pct:50, byDom:{EDITOR:{n:2,c:1}}, wq:['qX'], rq:[]}});
  Logger.log('제출 OK: ' + JSON.stringify(s));
  const db = readDB(); delete db.students['TEST0000']; saveDB(db);
  Logger.log('테스트 정리 완료. 배포 준비 끝.');
}
