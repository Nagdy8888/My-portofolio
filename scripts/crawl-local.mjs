const origin = process.env.QA_ORIGIN ?? 'http://127.0.0.1:4321';
const queue = ['/', '/projects', '/projects/image-analysis-agent'];
const seen = new Set();
const failures = [];

while (queue.length > 0) {
  const pathname = queue.shift();
  if (!pathname || seen.has(pathname)) continue;
  seen.add(pathname);

  const response = await fetch(`${origin}${pathname}`);
  console.log(`${response.status} ${pathname}`);

  if (!response.ok) {
    failures.push(pathname);
    continue;
  }

  const contentType = response.headers.get('content-type') ?? '';
  if (!contentType.includes('text/html')) continue;

  const html = await response.text();
  if (html.includes('undefined')) failures.push(`${pathname} contains "undefined"`);

  for (const match of html.matchAll(/(?:href|src)="([^"#]+)"/g)) {
    const url = new URL(match[1], origin);
    const isRoute = url.pathname.startsWith('/projects');
    const isAsset = /\.(?:css|js|svg|webp|jpe?g|png|pdf|ico)$/.test(url.pathname);

    if (url.origin === origin && !seen.has(url.pathname) && (isRoute || isAsset)) {
      queue.push(url.pathname);
    }
  }
}

if (failures.length > 0) {
  console.error('\nLocal crawl failed:');
  failures.forEach((failure) => console.error(`- ${failure}`));
  process.exitCode = 1;
} else {
  console.log(`Local route and asset crawl passed: ${seen.size} URLs.`);
}
