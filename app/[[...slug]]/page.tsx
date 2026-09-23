import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { LegacyPage } from '../components/legacy-page';
import { ServiceIndex, ServicePage, servicePages } from '../components/service-page';
import { EcommerceEmailMarketingGuide } from '../components/guide-page';
import { BlogIndex, BlogPost, posts } from '../components/blog-page';

const files: Record<string, string> = {
  '': 'index.html', about: 'about.html', 'case-studies': 'case-studies.html',
  'case-studies/aussies-merch': 'case-study-aussies-merch.html', 'case-studies/hardbody': 'case-study-hardbody.html',
  'case-studies/linen-tales': 'case-study-linen-tales.html', 'case-studies/popuptee': 'case-study-popuptee.html',
  'case-studies/moments-with-him': 'case-study-moments-with-him.html',
  'case-studies/twinky': 'case-study-twinky.html', 'case-studies/us-boot': 'case-study-us-boot.html', 'case-studies/vape-at-door': 'case-study-vape-at-door.html',
};


const pageMetadata: Record<string, Metadata> = {
  '': { title: 'Ecommerce Email Marketing Agency', description: 'Ecommerce email marketing for brands that want stronger retention: lifecycle strategy, Klaviyo flows, campaign creative, list growth and email design.', alternates: { canonical: '/' } },
  about: { title: 'About Our Ecommerce Email Marketing Team', description: 'Learn how RevUp Media helps ecommerce brands bring strategy, email design, campaigns and lifecycle automation together.', alternates: { canonical: '/about' } },
  'case-studies': { title: 'Ecommerce Email Marketing Case Studies', description: 'Explore ecommerce email marketing case studies, including campaign creative, lifecycle flows and supporting results evidence.', alternates: { canonical: '/case-studies' } },
  'case-studies/aussies-merch': { title: 'Aussies Merch Email Marketing Case Study', description: 'See the lifecycle email work, campaign creative and supporting results for Aussies Merch.', alternates: { canonical: '/case-studies/aussies-merch' } },
  'case-studies/hardbody': { title: 'HardBody Email Marketing Case Study', description: 'See email campaign creative, lifecycle marketing work and supporting results for HardBody.', alternates: { canonical: '/case-studies/hardbody' } },
  'case-studies/linen-tales': { title: 'Linen Tales Email Marketing Case Study', description: 'See ecommerce email strategy, creative and supporting results for Linen Tales.', alternates: { canonical: '/case-studies/linen-tales' } },
  'case-studies/popuptee': { title: 'PopUpTee Email Marketing Case Study', description: 'See lifecycle email marketing and campaign creative work for PopUpTee.', alternates: { canonical: '/case-studies/popuptee' } },
  'case-studies/moments-with-him': { title: 'Moments With Him Email & SMS Case Study', description: 'See lifecycle email, SMS, campaign and capture work for Moments With Him, with supporting attributed-revenue evidence.', alternates: { canonical: '/case-studies/moments-with-him' } },
  'case-studies/twinky': { title: 'Twinky Email Marketing Case Study', description: 'See ecommerce email flows, campaign creative and lifecycle work for Twinky.', alternates: { canonical: '/case-studies/twinky' } },
  'case-studies/us-boot': { title: 'US Boot Email Marketing Case Study', description: 'See ecommerce email flows, campaign creative and lifecycle work for US Boot.', alternates: { canonical: '/case-studies/us-boot' } },
  'case-studies/vape-at-door': { title: 'Vape At Door Email Marketing Case Study', description: 'See ecommerce email campaign creative and lifecycle marketing work for Vape At Door.', alternates: { canonical: '/case-studies/vape-at-door' } },
};

export async function generateMetadata({ params }: { params: Promise<{ slug?: string[] }> }): Promise<Metadata> {
  const { slug = [] } = await params;
  const key = slug.join('/');
  if (key === 'guides/ecommerce-email-marketing-strategy') return { title: 'Ecommerce Email Marketing Strategy Guide', description: 'A practical ecommerce email marketing strategy guide covering automation, campaigns, segmentation, list growth and retention.', alternates: { canonical: '/guides/ecommerce-email-marketing-strategy' } };
  if (key === 'blog') return { title: 'Ecommerce Email Marketing Blog', description: 'Original ecommerce email marketing, lifecycle automation, segmentation and retention strategy notes from RevUp Media.', alternates: { canonical: '/blog' } };
  const post = posts[key];
  if (post) return { title: post.title, description: post.description, alternates: { canonical: `/${key}` }, openGraph: { title: post.title, description: post.description, url: `/${key}` } };
  if (key === 'services') return { title: 'Ecommerce Email Marketing Services', description: 'Ecommerce email marketing services for Klaviyo strategy, lifecycle automation, campaigns, SMS and list growth.', alternates: { canonical: '/services' } };
  const service = servicePages[key];
  if (service) return { title: service.title, description: service.description, alternates: { canonical: `/${key}` }, openGraph: { title: service.title, description: service.description, url: `/${key}` } };
  return pageMetadata[key] ?? {};
}

export default async function Page({ params }: { params: Promise<{ slug?: string[] }> }) {
  const { slug = [] } = await params;
  const key = slug.join('/');
  if (key === 'guides/ecommerce-email-marketing-strategy') return <EcommerceEmailMarketingGuide />;
  if (key === 'blog') return <BlogIndex />;
  const post = posts[key];
  if (post) return <BlogPost post={post} />;
  if (key === 'services') return <ServiceIndex />;
  const service = servicePages[key];
  if (service) return <ServicePage service={service} />;
  const source = files[key];
  if (!source) notFound();
  return <LegacyPage source={source} page={slug.length === 0 ? 'home' : slug[0]} />;
}
