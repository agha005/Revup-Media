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
  '/case-studies/moments-with-him',
  '/case-studies/twinky',
  '/case-studies/us-boot',
  '/case-studies/vape-at-door',
  '/services',
  '/services/klaviyo-email-marketing',
  '/services/email-automation-flows',
  '/services/email-campaign-management',
  '/services/ecommerce-sms-marketing',
  '/services/email-list-growth',
];

export default function sitemap(): MetadataRoute.Sitemap {
  return paths.map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: path.startsWith('/case-studies/') ? 'monthly' : 'weekly',
    priority: path === '' ? 1 : path.startsWith('/services/') || path === '/case-studies' ? 0.9 : 0.7,
  }));
}
