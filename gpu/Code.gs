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

function testSetup() {
  const f = getFolder();
  Logger.log('폴더 OK: ' + f.getName() + ' / id=' + f.getId());
}
