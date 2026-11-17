// Takes the whole site offline: every request (pages, API routes, images,
// static assets) gets a bare "Site not found" page. Delete this file to
// restore the site.

const HTML = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="robots" content="noindex, nofollow">
<title>Site not found</title>
<style>
  html, body { height: 100%; margin: 0; }
  body {
    display: flex; align-items: center; justify-content: center;
    background: #fff; color: #111;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  }
  h1 { font-size: 1.25rem; font-weight: 500; margin: 0; }
</style>
</head>
<body>
<h1>Site not found</h1>
</body>
</html>`

export function middleware() {
  return new Response(HTML, {
    status: 404,
    headers: {
      'content-type': 'text/html; charset=utf-8',
      'cache-control': 'no-store',
      'x-robots-tag': 'noindex, nofollow',
    },
  })
}

export const config = {
  matcher: ['/', '/:path*'],
}
