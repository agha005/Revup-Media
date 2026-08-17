'use client';

import { useEffect } from 'react';

export function LegacyEnhancements({ page }: { page: string }) {
  useEffect(() => {
    document.body.dataset.page = page;
    document.querySelector('[data-legacy-site-script]')?.remove();

    const script = document.createElement('script');
    script.src = '/assets/site.js';
    script.async = true;
    script.dataset.legacySiteScript = 'true';
    document.body.appendChild(script);

    return () => script.remove();
  }, [page]);

  return null;
}
