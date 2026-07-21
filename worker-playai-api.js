/**
 * playai-api — Apps Script 중계 Worker (Cloudflare Workers 무료 플랜)
 * ------------------------------------------------------------------
 * 목적: 학교 PC 보안 프로그램 등이 script.google.com 직접 호출을 막는 문제 우회.
 * 브라우저 → 이 Worker → script.google.com → (리다이렉트 따라감) → 응답에 CORS 헤더 부착.
 *
 * 경로 규칙:  /uca?action=...   → UCA 퀴즈 백엔드
 *            /gpu?action=...   → 고사양 서버 이용관리 백엔드
 * GET/POST 모두 통과. 응답은 JSON 그대로 (JSONP callback 파라미터도 그대로 통과).
 */
const TARGETS = {
  uca: "https://script.google.com/macros/s/AKfycbzmQ6xG9QSw_NPq4zdKXuvNPa6TjaB0qJG45Y-lICrK-gIt8CzPICN3cZpkk2xkX2GO/exec",
  gpu: "https://script.google.com/macros/s/AKfycbxkobPk9_Cg5589mlR5f6yF2M5evXuROoh3NwmIELGL1sjqfXE5ACEnLuqdoksj3XWNDg/exec",
};

const CORS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
  "Cache-Control": "no-store",
};

export default {
  async fetch(req) {
    if (req.method === "OPTIONS") return new Response(null, { headers: CORS });

    const url = new URL(req.url);
    const app = url.pathname.replace(/^\/+|\/+$/g, "").split("/")[0];
    const target = TARGETS[app];
    if (!target) {
      return new Response(JSON.stringify({ status: "error", message: "unknown app: " + app }),
        { status: 404, headers: { "Content-Type": "application/json", ...CORS } });
    }

    const dest = target + url.search;
    const init = { method: req.method, redirect: "follow" };
    if (req.method === "POST") {
      init.body = await req.text();
      init.headers = { "Content-Type": "text/plain;charset=utf-8" };
    }

    try {
      const r = await fetch(dest, init);
      const body = await r.text();
      return new Response(body, {
        status: 200,
        headers: {
          "Content-Type": r.headers.get("content-type") || "application/json; charset=utf-8",
          ...CORS,
        },
      });
    } catch (e) {
      return new Response(JSON.stringify({ status: "error", message: "proxy fetch failed" }),
        { status: 502, headers: { "Content-Type": "application/json", ...CORS } });
    }
  },
};
