'use client';

import { useEffect, useState } from 'react';

const routeMap: Record<string, string> = {
  'index.html': '/', 'about.html': '/about', 'case-studies.html': '/case-studies',
  'case-study-aussies-merch.html': '/case-studies/aussies-merch', 'case-study-hardbody.html': '/case-studies/hardbody',
  'case-study-linen-tales.html': '/case-studies/linen-tales', 'case-study-popuptee.html': '/case-studies/popuptee',
  'case-study-twinky.html': '/case-studies/twinky', 'case-study-us-boot.html': '/case-studies/us-boot', 'case-study-vape-at-door.html': '/case-studies/vape-at-door',
};

function adaptMarkup(markup: string) {
  const parsed = new DOMParser().parseFromString(markup, 'text/html');
  document.body.dataset.page = parsed.body.dataset.page ?? '';
  let body = parsed.body.innerHTML.replaceAll('src="assets/', 'src="/assets/').replaceAll("src='assets/", "src='/assets/");
  for (const [legacy, route] of Object.entries(routeMap)) body = body.replaceAll(`href="${legacy}"`, `href="${route}"`).replaceAll(`href='${legacy}'`, `href='${route}'`);
  return body;
}

export function LegacyPage({ source }: { source: string }) {
  const [markup, setMarkup] = useState('');
  useEffect(() => { let active = true; fetch(`/legacy/${source}`).then((response) => response.text()).then((html) => { if (active) setMarkup(adaptMarkup(html)); }); return () => { active = false; }; }, [source]);
  useEffect(() => { if (!markup) return; const script = document.createElement('script'); script.src = '/assets/site.js'; script.async = true; document.body.appendChild(script); return () => script.remove(); }, [markup]);
  return <div dangerouslySetInnerHTML={{ __html: markup }} />;
}
