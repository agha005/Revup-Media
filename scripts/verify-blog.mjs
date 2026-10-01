import fs from 'node:fs/promises';
import assert from 'node:assert/strict';
import { growthArticles } from '../app/content/growth-articles.ts';

const origin = process.argv[2] ?? 'http://localhost:3097';
const canonicalOrigin = 'https://www.revupmedia.co';
const problems = [];
const report = [];
const fetchPage = async (url) => {
  const response = await fetch(url);
  return { response, html: await response.text() };
};
const decode = (text) => text.replaceAll('&amp;', '&').replaceAll('&quot;', '"').replaceAll('&#x27;', "'");
const attr = (html, name, value, wanted) => {
  const tag = [...html.matchAll(/<(?:meta|link)\b[^>]*>/g)].find(([entry]) => entry.includes(`${name}="${value}"`))?.[0] ?? '';
  return decode(tag.match(new RegExp(`${wanted}="([^"]*)"`))?.[1] ?? '');
};
const { response: indexResponse, html: index } = await fetchPage(`${origin}/blog`);
assert.equal(indexResponse.status, 200, 'Blog index must load');
assert.equal(attr(index, 'property', 'og:url', 'content'), `${canonicalOrigin}/blog`, 'Blog sharing URL');
const { html: sitemap, response: sitemapResponse } = await fetchPage(`${origin}/sitemap.xml`);
assert.equal(sitemapResponse.status, 200, 'Sitemap must load');
assert.equal(growthArticles.length, 11, 'Expected eleven new articles');

for (const post of growthArticles) {
  try {
    const pathname = `/blog/${post.slug}`;
    const { response, html } = await fetchPage(`${origin}${pathname}`);
    assert.equal(response.status, 200, `${pathname} must load`);
    assert.equal([...html.matchAll(/<h1(?:\s[^>]*)?>/g)].length, 1, 'Exactly one H1');
    assert.equal(attr(html, 'rel', 'canonical', 'href'), `${canonicalOrigin}${pathname}`, 'Article canonical');
    assert.equal(attr(html, 'name', 'description', 'content'), post.description, 'Description');
    assert.equal(attr(html, 'property', 'og:type', 'content'), 'article', 'Article sharing type');
    assert.equal(attr(html, 'property', 'og:url', 'content'), `${canonicalOrigin}${pathname}`, 'Article sharing URL');
    assert.equal(attr(html, 'property', 'og:image', 'content'), `${canonicalOrigin}${post.image}`, 'Unique social image');
    assert.equal(attr(html, 'name', 'twitter:title', 'content'), post.title, 'Twitter article title');
    const schemas = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].map(([, value]) => JSON.parse(value));
    const article = schemas.find((entry) => entry['@type'] === 'BlogPosting');
    assert(article, 'Article schema exists');
    assert.equal(article.headline, post.title);
    assert.equal(article.datePublished, '2026-10-01');
    assert.equal(article.image[0], `${canonicalOrigin}${post.image}`);
    assert(schemas.find((entry) => entry['@type'] === 'BreadcrumbList'), 'Breadcrumb schema exists');
    for (let i = 0; i < post.sections.length; i++) assert(html.includes(`id="section-${i + 1}"`), 'TOC destination exists');
    for (const slug of post.related) assert(html.includes(`href="/blog/${slug}"`), 'Related article linked');
    assert(html.includes(`href="${post.service.href}"`), 'Relevant service linked');
    assert(index.includes(`href="${pathname}"`), 'Article discoverable from blog');
    assert(sitemap.includes(`<loc>${canonicalOrigin}${pathname}</loc>`), 'Article in sitemap');
    const graphic = await fetch(`${origin}${post.image}`);
    assert.equal(graphic.status, 200, 'Image exists');
    assert(graphic.headers.get('content-type')?.includes('image/png'), 'Image is PNG');
    const imageBytes = (await graphic.arrayBuffer()).byteLength;
    const copy = [post.intro, ...post.sections.flatMap((section) => [section.heading, section.body, ...(section.bullets ?? []), ...(section.table?.rows.flat() ?? [])]), ...post.faqs.flatMap((faq) => [faq.question, faq.answer])].join(' ');
    const wordCount = copy.split(/\s+/).length;
    assert(wordCount >= 700, 'Substantive article copy');
    report.push({ slug: post.slug, words: wordCount, imageBytes, status: 'pass' });
  } catch (error) { problems.push({ slug: post.slug, error: error.message }); }
}

const allLinks = [...index.matchAll(/href="(\/[^"#?]*)"/g)].map(([, href]) => href);
for (const route of new Set([...allLinks, '/services/klaviyo-email-marketing', '/services/shopify-email-marketing', '/services/email-automation-flows', '/services/email-list-growth', '/services/email-campaign-management', '/case-studies/linen-tales', '/not-a-real-revup-page'])) {
  const response = await fetch(`${origin}${route}`);
  const expected = route === '/not-a-real-revup-page' ? 404 : 200;
  if (response.status !== expected) problems.push({ route, error: `Expected ${expected}, got ${response.status}` });
}
const robots = await fetchPage(`${origin}/robots.txt`);
assert(robots.html.includes(`Sitemap: ${canonicalOrigin}/sitemap.xml`), 'Robots points to sitemap');
const result = { checkedAt: new Date().toISOString(), origin, newArticles: report.length, totalNewWords: report.reduce((sum, entry) => sum + entry.words, 0), report, problems };
await fs.mkdir('audit', { recursive: true });
await fs.writeFile(origin.includes('localhost') ? 'audit/local-verification.json' : 'audit/live-verification.json', JSON.stringify(result, null, 2));
console.log(JSON.stringify(result, null, 2));
if (problems.length) process.exitCode = 1;
