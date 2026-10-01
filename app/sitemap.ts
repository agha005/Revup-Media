import type { MetadataRoute } from 'next';
import { posts } from './components/blog-page';

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
  '/services/shopify-email-marketing',
  '/guides/ecommerce-email-marketing-strategy',
  '/blog',
  ...Object.keys(posts).map((key) => `/${key}`),
];

export default function sitemap(): MetadataRoute.Sitemap {
  return paths.map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: posts[path.slice(1)]?.dateModified ?? (path === '/blog' ? '2026-10-01' : undefined),
    changeFrequency: path.startsWith('/case-studies/') ? 'monthly' : 'weekly',
    priority: path === '' ? 1 : path.startsWith('/services/') || path === '/case-studies' ? 0.9 : 0.7,
  }));
}
