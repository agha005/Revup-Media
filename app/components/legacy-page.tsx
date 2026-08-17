import { readFileSync } from 'node:fs';
import path from 'node:path';
import { LegacyEnhancements } from './legacy-enhancements';

const routeMap: Record<string, string> = {
  'index.html': '/', 'about.html': '/about', 'case-studies.html': '/case-studies',
  'case-study-aussies-merch.html': '/case-studies/aussies-merch', 'case-study-hardbody.html': '/case-studies/hardbody',
  'case-study-linen-tales.html': '/case-studies/linen-tales', 'case-study-popuptee.html': '/case-studies/popuptee',
  'case-study-twinky.html': '/case-studies/twinky', 'case-study-us-boot.html': '/case-studies/us-boot', 'case-study-vape-at-door.html': '/case-studies/vape-at-door',
};

function getBodyMarkup(source: string) {
  const html = readFileSync(path.join(process.cwd(), 'public', 'legacy', source), 'utf8');
  const body = html.match(/<body[^>]*>([\s\S]*)<\/body>/i)?.[1] ?? html;
  let markup = body.replaceAll('src="assets/', 'src="/assets/').replaceAll("src='assets/", "src='/assets/");

  for (const [legacy, route] of Object.entries(routeMap)) {
    markup = markup.replaceAll(`href="${legacy}"`, `href="${route}"`).replaceAll(`href='${legacy}'`, `href='${route}'`);
  }

  return markup.replace(/<img\b/gi, '<img loading="lazy" decoding="async"');
}

export function LegacyPage({ source, page }: { source: string; page: string }) {
  return <>
    <LegacyEnhancements page={page} />
    <div dangerouslySetInnerHTML={{ __html: getBodyMarkup(source) }} />
  </>;
}
