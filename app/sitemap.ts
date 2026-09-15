import type { MetadataRoute } from 'next';

const siteUrl = 'https://www.revupmedia.co';

const paths = [
  '',
  '/about',
  '/case-studies',
  '/case-studies/aussies-merch',
  '/case-studies/hardbody',
  '/case-studies/linen-tales',
  '/case-studies/popuptee',
  '/case-studies/twinky',
  '/case-studies/us-boot',
  '/case-studies/vape-at-door',
];

export default function sitemap(): MetadataRoute.Sitemap {
  return paths.map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: path.startsWith('/case-studies/') ? 'monthly' : 'weekly',
    priority: path === '' ? 1 : path === '/case-studies' ? 0.9 : 0.7,
  }));
}
