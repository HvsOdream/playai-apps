/*************************************************************
 * AI게임융합학과 고사양 서버 이용관리 — Apps Script 백엔드
 * 읽기/쓰기 모두 GET+JSONP (교차도메인 CORS·POST리다이렉트 문제 회피).
 * action: read | ping | apply(payload) | save(pin,payload)
 *
 * ▶ 코드 교체 후: 배포 관리 > (연필) > 버전: 새 버전 > 배포
 *************************************************************/

const FOLDER_NAME = '서버이용관리-DB';
const FILE_NAME   = 'server_data.json';
const WRITE_PIN   = '7399';
const NOTIFY_EMAIL = 'withsky0@gmail.com';   // 신청서 접수 시 알림을 받을 메일 (비우면 알림 끔)
const ADMIN_URL    = 'https://apps.playai.kr/gpu';

function getFolder() {
  const it = DriveApp.getFoldersByName(FOLDER_NAME);
  return it.hasNext() ? it.next() : DriveApp.createFolder(FOLDER_NAME);
}
function findFile(name) {
  const files = getFolder().getFilesByName(name);
  return files.hasNext() ? files.next() : null;
}
function readData() {
  const file = findFile(FILE_NAME);
  return file ? JSON.parse(file.getBlob().getDataAsString()) : null;
}
function saveFile(name, content) {
  const ex = findFile(name);
  if (ex) ex.setContent(content);
  else getFolder().createFile(name, content, 'application/json');
}
function out(obj, callback) {
  if (callback) {
    return ContentService.createTextOutput(callback + '(' + JSON.stringify(obj) + ')')
      .setMimeType(ContentService.MimeType.JAVASCRIPT);
  }
  return ContentService.createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}

function handle(p) {
  const action = p.action || 'read';

  if (action === 'ping') return { status: 'ok', timestamp: new Date().toISOString() };

  if (action === 'apply') {
    let app;
    try { app = JSON.parse(p.payload || '{}'); }
    catch (e) { return { status: 'error', message: 'bad payload' }; }
    let data = readData() || { applications: [], assignments: {} };
    if (!Array.isArray(data.applications)) data.applications = [];
    app.status = app.status || '접수';
    app.no = app.no || ('접수-' + Utilities.formatDate(new Date(), 'Asia/Seoul', 'yyyyMMdd-HHmmss'));
    app._submittedAt = new Date().toISOString();
    data.applications.push(app);
    data._synced = new Date().toISOString();
    saveFile(FILE_NAME, JSON.stringify(data, null, 2));
    notifyApply(app);   // 저장 성공 후 알림 메일 (실패해도 접수는 유지)
    return { status: 'ok', no: app.no };
  }

  if (action === 'save') {
    if (String(p.pin) !== String(WRITE_PIN)) return { status: 'error', message: 'unauthorized' };
    let data;
    try { data = JSON.parse(p.payload || '{}'); }
    catch (e) { return { status: 'error', message: 'bad payload' }; }
    data._synced = new Date().toISOString();
    data._source = 'web-admin';
    saveFile(FILE_NAME, JSON.stringify(data, null, 2));
    return { status: 'ok', synced: data._synced };
  }

  // read
  const data = readData();
  return data ? { status: 'ok', data: data } : { status: 'empty' };
}

function doGet(e) {
  const p = (e && e.parameter) || {};
  return out(handle(p), p.callback);
}
// POST도 지원(본문 payload). 브라우저 교차도메인은 GET 사용.
function doPost(e) {
  let p = {};
  try { p = JSON.parse(e.postData.contents); } catch (err) {}
  return out(handle(p), null);
}

/* ---------------- 신청 접수 알림 메일 ---------------- */
function notifyApply(app) {
  if (!NOTIFY_EMAIL) return;
  try {
    const v = function (x) { return (x === undefined || x === null || x === '') ? '-' : String(x); };
    const subject = '[GPU 서버 신청] ' + v(app.who) + ' · ' + v(app.server) + ' ' + v(app.gpu) + 'GPU · ' + v(app.start) + '~' + v(app.end);
    const lines = [
      '고사양 서버 이용 신청서가 접수되었습니다.',
      '',
      '접수번호  : ' + v(app.no),
      '접수시각  : ' + Utilities.formatDate(new Date(), 'Asia/Seoul', 'yyyy-MM-dd HH:mm'),
      '신청주체  : ' + v(app.who) + ' (' + v(app.kind) + ')',
      '희망서버  : ' + v(app.server),
      'GPU 수량  : ' + v(app.gpu),
      '이용기간  : ' + v(app.start) + ' ~ ' + v(app.end),
      '비고      : ' + v(app.note),
      '',
      '승인/배정 → ' + ADMIN_URL,
    ];
    const opts = { name: 'GPU 서버 이용관리' };
    const m = String(app.note || '').match(/[\w.+-]+@[\w-]+\.[\w.-]+/);   // 신청자 회신 메일 추출
    if (m) opts.replyTo = m[0];
    MailApp.sendEmail(NOTIFY_EMAIL, subject, lines.join('\n'), opts);
  } catch (e) {
    Logger.log('notifyApply failed: ' + e);
  }
}

/* 테스트: 에디터에서 ▶ 실행하면 메일 1통 발송 + Mail 권한 승인 */
function testNotify() {
  notifyApply({ no: '접수-TEST', who: '테스트기관', kind: '교내 연구실', server: 'S1', gpu: 2,
    start: '2026-11-01', end: '2026-11-30', note: '[신청서] 담당(정) 김민철 010-0000-0000 withsky0@gmail.com / 목적: 테스트' });
  Logger.log('잔여 일일 발송 한도: ' + MailApp.getRemainingDailyQuota());
}

function testSetup() {
  const f = getFolder();
  Logger.log('폴더 OK: ' + f.getName() + ' / id=' + f.getId());
}
