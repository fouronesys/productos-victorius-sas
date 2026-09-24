import { readFile, writeFile } from 'node:fs/promises';

const configuredUrl = process.env.SITE_URL?.trim();

if (!configuredUrl) {
  console.log('SITE_URL no configurada: se omiten URL canónica y sitemap.');
  process.exit(0);
}

let url;
try {
  url = new URL(configuredUrl);
} catch {
  throw new Error('SITE_URL debe ser una URL HTTPS válida.');
}
if (url.protocol !== 'https:' || url.search || url.hash || url.username || url.password) {
  throw new Error('SITE_URL debe ser una URL HTTPS pública, sin credenciales, query ni fragmento.');
}

const basePath = process.env.BASE_PATH || '/';
const normalizedBase = `/${basePath.replace(/^\/+|\/+$/g, '')}${basePath === '/' ? '' : '/'}`;
if (url.pathname !== normalizedBase && url.pathname !== normalizedBase.slice(0, -1)) {
  throw new Error(`SITE_URL debe terminar en la misma ruta que BASE_PATH (${normalizedBase}).`);
}

url.pathname = normalizedBase;
const siteUrl = url.toString();
const imageUrl = new URL('og-image.jpg', siteUrl).toString();
const escapeHtml = (value) =>
  value.replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;').replaceAll('>', '&gt;');

const seoTags = `
    <link rel="canonical" href="${escapeHtml(siteUrl)}" />
    <meta property="og:url" content="${escapeHtml(siteUrl)}" />
    <meta property="og:image" content="${escapeHtml(imageUrl)}" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta property="og:image:alt" content="Productos Victorius S.A.S. — soluciones solares y redes eléctricas" />
    <meta name="twitter:image" content="${escapeHtml(imageUrl)}" />
    <script type="application/ld+json">${JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'Productos Victorius S.A.S.',
      url: siteUrl,
      inLanguage: 'es-CO',
    })}</script>`;

const html = await readFile('dist/index.html', 'utf8');
if (!html.includes('</head>')) throw new Error('No se encontró </head> en dist/index.html.');
await writeFile('dist/index.html', html.replace('</head>', `${seoTags}\n  </head>`));

const robots = await readFile('dist/robots.txt', 'utf8');
await writeFile('dist/robots.txt', `${robots.trimEnd()}\nSitemap: ${siteUrl}sitemap.xml\n`);
await writeFile(
  'dist/sitemap.xml',
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"><url><loc>${escapeHtml(siteUrl)}</loc></url></urlset>\n`,
);
console.log(`SEO configurado para ${siteUrl}`);