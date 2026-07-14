/*************************************************************
 * AI게임융합학과 고사양 서버 이용관리 — Apps Script 백엔드
 * 자동 폴더 생성판 + JSONP 읽기 지원(교차도메인 CORS 우회).
 *
 * ▶ 코드 교체 후 반드시: 배포 관리 > (연필) 편집 > 버전: 새 버전 > 배포
 *   (URL 유지된 채 최신 코드로 갱신)
 *************************************************************/

const FOLDER_NAME = '서버이용관리-DB';
const FILE_NAME   = 'server_data.json';
const WRITE_PIN   = '7399';   // 웹앱 ADMIN_PIN 과 동일.

function getFolder() {
  const it = DriveApp.getFoldersByName(FOLDER_NAME);
  return it.hasNext() ? it.next() : DriveApp.createFolder(FOLDER_NAME);
}
function findFile(name) {
  const files = getFolder().getFilesByName(name);
  return files.hasNext() ? files.next() : null;
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

function doGet(e) {
  const p = (e && e.parameter) || {};
  const action = p.action || 'read';
  let obj;
  if (action === 'ping') {
    obj = { status: 'ok', timestamp: new Date().toISOString() };
  } else {
    const file = findFile(FILE_NAME);
    obj = file ? { status: 'ok', data: JSON.parse(file.getBlob().getDataAsString()) }
               : { status: 'empty' };
  }
  return out(obj, p.callback);
}

function doPost(e) {
  let body;
  try { body = JSON.parse(e.postData.contents); }
  catch (err) { return out({ status: 'error', message: 'bad json' }); }

  if (body.action === 'save') {
    if (String(body.pin) !== String(WRITE_PIN)) return out({ status: 'error', message: 'unauthorized' });
    const data = body.data || {};
    data._synced = new Date().toISOString();
    data._source = body.source || 'web-admin';
    saveFile(FILE_NAME, JSON.stringify(data, null, 2));
    return out({ status: 'ok', synced: data._synced });
  }

  if (body.action === 'apply') {
    const file = findFile(FILE_NAME);
    let data = file ? JSON.parse(file.getBlob().getDataAsString()) : { applications: [], assignments: {} };
    if (!Array.isArray(data.applications)) data.applications = [];
    const app = body.data || {};
    app.status = app.status || '접수';
    app.no = app.no || ('접수-' + Utilities.formatDate(new Date(), 'Asia/Seoul', 'yyyyMMdd-HHmmss'));
    app._submittedAt = new Date().toISOString();
    data.applications.push(app);
    data._synced = new Date().toISOString();
    saveFile(FILE_NAME, JSON.stringify(data, null, 2));
    return out({ status: 'ok', no: app.no });
  }

  return out({ status: 'error', message: 'unknown action' });
}

function testSetup() {
  const f = getFolder();
  Logger.log('폴더 OK: ' + f.getName() + ' / id=' + f.getId());
}
