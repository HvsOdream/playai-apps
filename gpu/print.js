/* 신청서 PDF/인쇄 양식 — 관리 페이지(index.html)와 신청 페이지(apply/)에서 공용.
   printApplication(app, opts) : app = {no, who, kind, server(id 또는 이름), gpu, start, end, status, note, _submittedAt}
   note 첫 줄 "[신청서] 담당(정) … / 담당(부) … / 연계교수: … / 목적: … / 희망시간대: …", 이후 줄은 처리 이력 */
(function(){
  const SV = { h200:"H200 GPU 서버 (NVIDIA H200 141GB ×4)", poseidon:"Poseidon AI 서버 (RTX 4090 ×3)", threadripper:"ThreadRipper GPU 서버 (RTX 4090 ×2)" };
  const esc = v => String(v==null?'':v).replace(/[&<>"]/g, c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
  function parse(note){
    const lines = String(note||'').split('\n'); let first = lines[0]||''; const hist = lines.slice(1).filter(Boolean);
    const f = {}; const w = first.match(/^\[⚠ ([^\]]+)\]\s*/); if(w){ f['주의']=w[1]; first=first.slice(w[0].length); }
    if(first.startsWith('[신청서]')) first.replace('[신청서]','').split(' / ').map(x=>x.trim()).filter(Boolean).forEach(x=>{
      const m = x.match(/^(담당\(정\)|담당\(부\)|연계교수|목적|희망시간대)\s*:?\s*(.*)$/); if(m) f[m[1]]=m[2]; else f['비고']=(f['비고']?f['비고']+' / ':'')+x; });
    else if(first) f['비고']=first;
    return {f, hist};
  }
  function fmtDT(iso){ if(!iso) return ''; const d=new Date(iso); if(isNaN(d)) return String(iso); return d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')+'-'+String(d.getDate()).padStart(2,'0')+' '+String(d.getHours()).padStart(2,'0')+':'+String(d.getMinutes()).padStart(2,'0'); }
  function today(){ const d=new Date(); return d.getFullYear()+'년 '+(d.getMonth()+1)+'월 '+d.getDate()+'일'; }
  function slotsTable(str){
    const days=['월','화','수','목','금','토','일'], bands=[['오전','09~13'],['오후','13~18'],['야간','18~24']];
    const set=new Set(String(str||'').split(',').map(x=>x.trim()).map(x=>{const m=x.match(/^([월화수목금토일])\s*(오전|오후|야간)/);return m?m[1]+m[2]:null;}).filter(Boolean));
    if(!set.size) return '<div class="muted">—</div>';
    return '<table class="slots"><tr><th></th>'+bands.map(b=>'<th>'+b[0]+'<br><small>'+b[1]+'</small></th>').join('')+'</tr>'+
      days.map(d=>'<tr><th class="'+(d==='토'||d==='일'?'we':'')+'">'+d+'</th>'+bands.map(b=>'<td>'+(set.has(d+b[0])?'<span class="on">●</span>':'<span class="off">·</span>')+'</td>').join('')+'</tr>').join('')+'</table>';
  }
  window.buildApplicationHTML = function(a){
    const {f, hist} = parse(a.note);
    const sv = SV[a.server] || a.server || '—';
    const apv = hist.find(h=>/담당자 승인/.test(h)); const rej = hist.find(h=>/담당자 반려/.test(h));
    const apvDate = apv ? (apv.match(/(\d{4}-\d{2}-\d{2})/)||[])[1] : '';
    const statusLine = rej ? '반려' : (apv ? '승인 ('+apvDate+')' + (/^배정/.test(a.status)?' · 배정 완료':'') : (a.status||'접수'));
    const row = (k,v,cls)=>`<tr><th>${esc(k)}</th><td class="${cls||''}">${v||'<span class="muted">—</span>'}</td></tr>`;
    return `<!doctype html><html lang="ko"><head><meta charset="utf-8"><title>GPU 서버 이용 신청서 · ${esc(a.who)}</title>
<style>
  @page{size:A4;margin:12mm 14mm}
  *{box-sizing:border-box} body{font-family:"KoPubWorldDotum","KoPub Dotum","Malgun Gothic","Apple SD Gothic Neo",sans-serif;color:#111;margin:0;font-size:11.5pt;line-height:1.5}
  .wrap{max-width:182mm;margin:0 auto;padding:4mm 0 0}
  .hd{display:flex;justify-content:space-between;align-items:flex-end;border-bottom:2.5px solid #1f3f7a;padding-bottom:8px;margin-bottom:14px}
  .hd .org{font-size:10pt;color:#2E5AAC;font-weight:700;letter-spacing:.5px} .hd h1{margin:2px 0 0;font-size:19pt;letter-spacing:1px}
  .hd .meta{text-align:right;font-size:9.5pt;color:#444;line-height:1.6}
  .sec{font-size:10.5pt;font-weight:800;color:#1f3f7a;margin:11px 0 4px;padding-left:8px;border-left:4px solid #1f3f7a}
  table.f{width:100%;border-collapse:collapse;font-size:10.5pt}
  table.f th,table.f td{border:1px solid #9aa4b2;padding:6px 9px;vertical-align:top;text-align:left}
  table.f th{width:34mm;background:#eef2fb;font-weight:700;color:#223;white-space:nowrap}
  td.big{font-size:12pt;font-weight:700}
  .muted{color:#888}
  table.slots{border-collapse:collapse;font-size:9.5pt;margin:2px 0}
  table.slots th,table.slots td{border:1px solid #c7d0de;padding:2px 10px;text-align:center}
  table.slots th{background:#f3f6fb;font-weight:700} table.slots th.we{color:#a3495a} table.slots small{font-weight:400;color:#777}
  .on{color:#1f3f7a;font-weight:900} .off{color:#ccc}
  .hist{font-family:inherit;font-size:9.5pt;color:#333;white-space:pre-wrap;margin:0;padding:6px 9px;border:1px solid #c7d0de;background:#fafbfd}
  .sign{display:flex;gap:10mm;margin-top:16px}
  .sign div{flex:1;border:1px solid #9aa4b2;padding:8px 10px;height:24mm;font-size:9.5pt;color:#333;position:relative}
  .sign div b{display:block;font-size:10pt;color:#1f3f7a} .sign div span{position:absolute;right:10px;bottom:8px;color:#999}
  .ft{margin-top:10px;font-size:8.5pt;color:#777;display:flex;justify-content:space-between;border-top:1px solid #ccc;padding-top:6px}
  .warn{color:#b5482f;font-weight:700}
  .nop{position:fixed;top:10px;right:10px;background:#2E5AAC;color:#fff;border:0;border-radius:8px;padding:10px 16px;font:inherit;font-weight:700;cursor:pointer;box-shadow:0 4px 12px rgba(0,0,0,.2)}
  @media print{.nop{display:none}}
</style></head><body>
<button class="nop" onclick="window.print()">🖨 인쇄 / PDF 저장</button>
<div class="wrap">
  <div class="hd">
    <div><div class="org">서일대학교 · AI게임융합학과</div><h1>고사양 GPU 서버 이용 신청서</h1></div>
    <div class="meta">접수번호 <b>${esc(a.no||'—')}</b><br>접수일시 ${esc(fmtDT(a._submittedAt))||'—'}<br>처리상태 <b>${esc(statusLine)}</b></div>
  </div>
  <div class="sec">1. 신청 기관</div>
  <table class="f">
    ${row('기관/연구회명', '<span class="big">'+esc(a.who)+'</span>')}
    ${row('구분', esc(a.kind))}
    ${row('담당자(정)', esc(f['담당(정)']))}
    ${row('담당자(부)', esc(f['담당(부)']))}
    ${row('산학연계 교수', esc(f['연계교수']))}
  </table>
  <div class="sec">2. 이용 내용</div>
  <table class="f">
    ${row('희망 서버', esc(sv))}
    ${row('GPU 요청 수량', esc(a.gpu)?esc(a.gpu)+' 기':'')}
    ${row('이용 기간', esc(a.start)+' ~ '+esc(a.end))}
    ${row('프로젝트 / 이용 목적', esc(f['목적']))}
    ${row('희망 이용시간대', slotsTable(f['희망시간대']))}
    ${f['주의']?row('비고', '<span class="warn">⚠ '+esc(f['주의'])+'</span>'):''}
    ${f['비고']?row('기타', esc(f['비고'])):''}
  </table>
  <div class="sec">3. 처리 내역</div>
  <pre class="hist">${esc(hist.join('\n'))||'<span class="muted">처리 이력 없음</span>'}</pre>
  <div class="sign">
    <div><b>신청 기관</b>${esc(a.who)}<span>(서명/인)</span></div>
    <div><b>산학연계 교수</b>${esc(f['연계교수']||'')}<span>(서명/인)</span></div>
    <div><b>AI게임융합학과장</b>${apvDate?'승인 '+esc(apvDate):''}<span>(서명/인)</span></div>
  </div>
  <div class="ft"><span>본 문서는 고사양 서버 이용관리 시스템(apps.playai.kr/gpu)에서 출력되었습니다 · 운영규정 제7조(1회 배정 2개월 이내)</span><span>출력일 ${today()}</span></div>
</div>
</body></html>`;
  };
  window.printApplication = function(a){
    const w = window.open('', '_blank'); if(!w){ alert('팝업이 차단되었습니다. 이 사이트의 팝업을 허용해 주세요.'); return; }
    w.document.open(); w.document.write(buildApplicationHTML(a)); w.document.close();
    w.focus(); setTimeout(()=>{ try{ w.print(); }catch(e){} }, 400);
  };
})();
