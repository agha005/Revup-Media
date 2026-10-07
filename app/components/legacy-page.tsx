import { readFileSync } from 'node:fs';
import path from 'node:path';
import { caseStudyOverviews } from '../content/case-overviews';
import imageSizes from '../content/image-sizes.json';
import { SiteHeader, SiteFooter } from './site-navigation';
import { LegacyEnhancements } from './legacy-enhancements';
import { WhatsAppChat } from './whatsapp-chat';

const routeMap: Record<string, string> = {
  'index.html': '/', 'about.html': '/about', 'case-studies.html': '/case-studies',
  'case-study-aussies-merch.html': '/case-studies/aussies-merch', 'case-study-hardbody.html': '/case-studies/hardbody',
  'case-study-linen-tales.html': '/case-studies/linen-tales', 'case-study-popuptee.html': '/case-studies/popuptee',
  'case-study-moments-with-him.html': '/case-studies/moments-with-him',
  'case-study-twinky.html': '/case-studies/twinky', 'case-study-us-boot.html': '/case-studies/us-boot', 'case-study-vape-at-door.html': '/case-studies/vape-at-door',
};

function getBodyMarkup(source: string) {
  const html = readFileSync(path.join(process.cwd(), 'public', 'legacy', source), 'utf8');
  const body = html.match(/<body[^>]*>([\s\S]*)<\/body>/i)?.[1] ?? html;
  let markup = body.replaceAll('src="assets/', 'src="/assets/').replaceAll("src='assets/", "src='/assets/");

  for (const [legacy, route] of Object.entries(routeMap)) {
    markup = markup.replaceAll(`href="${legacy}"`, `href="${route}"`).replaceAll(`href='${legacy}'`, `href='${route}'`);
  }

  markup = markup
    .replace(/(<nav class="desktop-nav"[^>]*>[\s\S]*?<a[^>]*href="(?:\/|index\.html)"[^>]*>Home<\/a>)/i, '$1<a href="/services">Services</a><a href="/blog">Blog</a>')
    .replace(/(<nav class="mobile-menu"[^>]*>[\s\S]*?<a[^>]*href="(?:\/|index\.html)"[^>]*>Home<\/a>)/i, '$1<a href="/services">Services</a><a href="/blog">Blog</a><a href="/guides/ecommerce-email-marketing-strategy">Strategy guide</a>')
    .replace(/(<div class="footer-col"><h3>Pages<\/h3>)/i, '$1<a href="/services">Services</a><a href="/blog">Blog</a><a href="/guides/ecommerce-email-marketing-strategy">Strategy guide</a>')
    .replace(/(<div class="footer-col"><h3>Start a project<\/h3>)/i, '<div class="footer-col"><h3>Email &amp; SMS services</h3><a href="/services/klaviyo-email-marketing">Klaviyo email marketing</a><a href="/services/shopify-email-marketing">Shopify email marketing</a><a href="/services/email-campaign-management">Email campaigns</a><a href="/services/ecommerce-sms-marketing">SMS strategy</a></div>$1')
    .replace(/(<div class="footer-col"><h3>Start a project<\/h3>)/i, '$1<a href="https://www.linkedin.com/company/revupmedia26/" target="_blank" rel="noopener">RevUp Media on LinkedIn</a><a href="https://www.facebook.com/profile.php?id=61591764788520" target="_blank" rel="noopener">RevUp Media on Facebook</a><a href="https://www.linkedin.com/in/abdul-qadir005" target="_blank" rel="noopener">Abdul Qadir on LinkedIn</a>');

  const heading = markup.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i)?.[1].replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim();
  const overview = heading ? caseStudyOverviews[heading] : undefined;
  if (overview && !markup.includes('class="case-overview')) {
    const labels = ['Brand Background', 'Mission &amp; Challenges', 'Results &amp; Achievements'];
    const cards = overview.map((text, index) => `<article><span>${labels[index]}</span><p>${text}</p></article>`).join('');
    markup = markup.replace('<div class="container case-story">', `<div class="container case-story"><section class="case-overview" aria-label="Case study summary">${cards}</section>`);
  }

  return markup
    .replace(/<header\b[^>]*>[\s\S]*?<\/header>/i, '')
    .replace(/src=(['\"])\/assets\/([^'\"]+)\.(?:png|jpe?g)\1/gi, 'src=$1/assets/$2.webp$1')
    .replace(/<img\b[^>]*>/gi, (tag) => {
      const src = tag.match(/src=["']([^"']+)["']/i)?.[1];
      const size = src ? (imageSizes as Record<string, { width: number; height: number }>)[src] : undefined;
      let attributes = ' decoding="async"';
      if (!/\bloading=/.test(tag)) attributes += src?.includes('revup-logo') ? ' loading="eager"' : ' loading="lazy"';
      if (size && !/\bwidth=/.test(tag)) attributes += ` width="${size.width}"`;
      if (size && !/\bheight=/.test(tag)) attributes += ` height="${size.height}"`;
      return tag.replace('<img', `<img${attributes}`);
    });
}

export function LegacyPage({ source, page }: { source: string; page: string }) {
  const markup = getBodyMarkup(source);
  return <>
    <SiteHeader active={page === 'home' ? '/' : `/${page}`} />
    <LegacyEnhancements page={page} />
    <div dangerouslySetInnerHTML={{ __html: markup }} />
    {!markup.includes('class="site-footer') && <SiteFooter />}
    <WhatsAppChat />
  </>;
}
