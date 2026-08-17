import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { LegacyPage } from '../components/legacy-page';

const files: Record<string, string> = {
  '': 'index.html', about: 'about.html', 'case-studies': 'case-studies.html',
  'case-studies/aussies-merch': 'case-study-aussies-merch.html', 'case-studies/hardbody': 'case-study-hardbody.html',
  'case-studies/linen-tales': 'case-study-linen-tales.html', 'case-studies/popuptee': 'case-study-popuptee.html',
  'case-studies/twinky': 'case-study-twinky.html', 'case-studies/us-boot': 'case-study-us-boot.html', 'case-studies/vape-at-door': 'case-study-vape-at-door.html',
};

const pageMetadata: Record<string, Metadata> = {
  '': { title: 'RevUp Media | Ecommerce Email Marketing', description: 'Email strategy, automation and campaign creative for ecommerce brands.' },
  about: { title: 'About RevUp Media', description: 'Learn about RevUp Media and its ecommerce email approach.' },
  'case-studies': { title: 'Case Studies | RevUp Media', description: 'Explore approved ecommerce email case studies from RevUp Media.' },
  'case-studies/aussies-merch': { title: 'Aussies Merch Case Study | RevUp Media', description: 'Lifecycle email work and results for Aussies Merch.' },
  'case-studies/hardbody': { title: 'HardBody Case Study | RevUp Media', description: 'Email campaign work and results for HardBody.' },
  'case-studies/linen-tales': { title: 'Linen Tales Case Study | RevUp Media', description: 'Email strategy, creative and results for Linen Tales.' },
  'case-studies/popuptee': { title: 'PopUpTee Case Study | RevUp Media', description: 'Lifecycle email and campaign work for PopUpTee.' },
  'case-studies/twinky': { title: 'Twinky Case Study | RevUp Media', description: 'Email flows and campaign work for Twinky.' },
  'case-studies/us-boot': { title: 'US Boot Case Study | RevUp Media', description: 'Email flows and campaign work for US Boot.' },
  'case-studies/vape-at-door': { title: 'Vape At Door Case Study | RevUp Media', description: 'Email campaign work for Vape At Door.' },
};

export async function generateMetadata({ params }: { params: Promise<{ slug?: string[] }> }): Promise<Metadata> {
  const { slug = [] } = await params;
  return pageMetadata[slug.join('/')] ?? {};
}

export default async function Page({ params }: { params: Promise<{ slug?: string[] }> }) {
  const { slug = [] } = await params;
  const source = files[slug.join('/')];
  if (!source) notFound();
  return <LegacyPage source={source} page={slug.length === 0 ? 'home' : slug[0]} />;
}
