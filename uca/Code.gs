/*************************************************************
 * UCA 퀴즈 — 개인화/리더보드 백엔드 (Google Apps Script)
 * -----------------------------------------------------------
 * 읽기/쓰기 모두 GET+JSONP (교차도메인 CORS·POST 리다이렉트 회피).
 * action: ping | me(sid) | check(sid,name) | board | admin(key) | submit(payload)
 *       | rounds(sid) | roundCreate(key,title,len) | roundSet(key,id,open)
 *       | roundDelete(key,id) | adminRounds(key) | adminRound(key,id)
 *
 * mode 버킷: 'exam' → 시험 점수, 그 외('practice'/'mock') → 연습 점수
 * v4: 시험 회차(round) — 전원 동일 문항·문항별 답안 저장·관리자 열람
 * v6: LockService 잠금 — 동시 제출 시 기록 유실 방지
 * v8: 일일 자동 백업 · 회차 제한시간(limitMin) · rounds에 확정 문제지 포함
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
  if (ex){
    /* v8: 일일 자동 백업 — 덮어쓰기 전 하루 1회 스냅샷 보관 (삭제 실수 대비) */
    try{
      const bname = 'backup_' + new Date().toISOString().slice(0,10) + '.json';
      if (!findFile(bname)) getFolder().createFile(bname, ex.getBlob().getDataAsString(), 'application/json');
    }catch(e){}
    ex.setContent(content);
  }
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
/* v6: 쓰기 액션은 스크립트 잠금으로 직렬화 — 동시 제출 시 마지막 저장이
   앞 저장을 덮어써 기록이 유실되는 문제(치명) 방지 */
function handle(p){
  const action = p.action || 'ping';
  const MUTATING = {submit:1, roundCreate:1, roundSet:1, roundDelete:1, studentDelete:1};
  if (MUTATING[action]){
    const lock = LockService.getScriptLock();
    try { lock.waitLock(25000); }
    catch(e){ return {status:'error', message:'busy'}; }
    try { return handleAction(p, action); }
    finally { lock.releaseLock(); }
  }
  return handleAction(p, action);
}
function handleAction(p, action){

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

  /* ---- 시험 회차 (전원 동일 문항) ---- */
  if (action === 'rounds'){            /* 학생용: 열린 회차 목록 + 본인 응시 여부 */
    const db = readDB();
    const sid = String(p.sid || '').trim();
    const list = [];
    Object.keys(db.rounds || {}).forEach(function(id){
      const r = db.rounds[id];
      if (!r.open) return;
      list.push({id:id, title:r.title, len:r.len|0, seed:r.seed|0,
                 limitMin: r.limitMin|0,
                 paper: r.paper || null,   /* 확정 문제지 — 은행 변경과 무관하게 전원 동일 보장 */
                 done: !!(sid && r.responses && r.responses[sid])});
    });
    list.sort(function(a,b){ return a.id < b.id ? 1 : -1; });
    return {status:'ok', rounds:list};
  }

  if (action === 'roundCreate'){
    if (String(p.key) !== String(ADMIN_KEY)) return {status:'error', message:'unauthorized'};
    const db = readDB();
    db.rounds = db.rounds || {};
    const id = 'R' + new Date().getTime().toString(36);
    const seed = Math.floor(Math.random() * 2147483646) + 1;
    db.rounds[id] = {title: String(p.title || '시험 회차').slice(0,60),
                     len: Math.max(1, Math.min(179, parseInt(p.len,10) || 50)),
                     limitMin: Math.max(0, Math.min(300, parseInt(p.limit,10) || 0)),
                     seed: seed, open: true, created: new Date().toISOString(),
                     paper: null, responses: {}};
    saveDB(db);
    return {status:'ok', id:id, round:db.rounds[id]};
  }

  if (action === 'roundSet'){          /* 열기/마감 */
    if (String(p.key) !== String(ADMIN_KEY)) return {status:'error', message:'unauthorized'};
    const db = readDB();
    const r = (db.rounds || {})[String(p.id)];
    if (!r) return {status:'error', message:'no round'};
    r.open = (String(p.open) === 'true' || String(p.open) === '1');
    saveDB(db);
    return {status:'ok'};
  }

  if (action === 'roundDelete'){
    if (String(p.key) !== String(ADMIN_KEY)) return {status:'error', message:'unauthorized'};
    const db = readDB();
    if (db.rounds && db.rounds[String(p.id)]){ delete db.rounds[String(p.id)]; saveDB(db); }
    return {status:'ok'};
  }

  if (action === 'adminRounds'){       /* 회차 목록 + 응시 인원 */
    if (String(p.key) !== String(ADMIN_KEY)) return {status:'error', message:'unauthorized'};
    const db = readDB();
    const list = [];
    Object.keys(db.rounds || {}).forEach(function(id){
      const r = db.rounds[id];
      list.push({id:id, title:r.title, len:r.len|0, limitMin:r.limitMin|0, open:!!r.open, created:r.created||'',
                 taken: Object.keys(r.responses||{}).length});
    });
    list.sort(function(a,b){ return a.id < b.id ? 1 : -1; });
    return {status:'ok', rounds:list};
  }

  if (action === 'adminRound'){        /* 회차 상세: 답안지 + 문항별 정답률 */
    if (String(p.key) !== String(ADMIN_KEY)) return {status:'error', message:'unauthorized'};
    const db = readDB();
    const r = (db.rounds || {})[String(p.id)];
    if (!r) return {status:'error', message:'no round'};
    /* 문항별 정답률 (qid 기준 — 질문 텍스트는 admin.html이 bank.js로 조인) */
    const qstat = [];
    if (r.paper){
      r.paper.forEach(function(qid, i){
        let n = 0, c = 0;
        Object.keys(r.responses||{}).forEach(function(sid){
          const a = (r.responses[sid].answers||[])[i];
          if (a){ n++; if (a.ok) c++; }
        });
        qstat.push({n:i+1, qid:qid, taken:n, correct:c,
                    pct: n ? Math.round(c/n*100) : 0});
      });
    }
    return {status:'ok', round:{id:String(p.id), title:r.title, len:r.len|0, open:!!r.open,
            created:r.created||'', paper:r.paper||null, responses:r.responses||{}, qstat:qstat}};
  }

  if (action === 'admin'){
    if (String(p.key) !== String(ADMIN_KEY)) return {status:'error', message:'unauthorized'};
    return {status:'ok', data: adminData(readDB())};
  }

  if (action === 'studentDelete'){     /* 학생 계정 삭제 (오입력 정리용) */
    if (String(p.key) !== String(ADMIN_KEY)) return {status:'error', message:'unauthorized'};
    const db = readDB();
    const sid = String(p.sid || '').trim();
    if (!sid) return {status:'error', message:'no sid'};
    if (db.students && db.students[sid]) delete db.students[sid];
    Object.keys(db.rounds || {}).forEach(function(id){
      const r = db.rounds[id];
      if (r.responses && r.responses[sid]) delete r.responses[sid];
    });
    saveDB(db);
    return {status:'ok'};
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

  /* ---- 시험 회차 답안 저장 (전원 동일 문항) ---- */
  if (isExam && sess.round && db.rounds && db.rounds[sess.round]){
    const r = db.rounds[sess.round];
    r.responses = r.responses || {};
    if (r.responses[sid]){
      /* 재응시 차단: 첫 제출만 인정, 개인 누적에도 반영하지 않음 */
      return db.students[sid];
    }
    if (!r.paper && sess.paper){
      r.paper = String(sess.paper).split(',');   /* 문제지 = qid 목록 (전원 동일) */
    }
    r.responses[sid] = {
      name: s.name || String(body.name||'').trim(),
      t: new Date().toISOString(),
      total: sess.total|0, got: sess.got|0, pct: sess.pct|0,
      answers: (sess.answers||[]).map(function(a){
        return {ok: a.ok ? 1 : 0, a: String(a.a||'').slice(0,120)};
      })
    };
  }
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
