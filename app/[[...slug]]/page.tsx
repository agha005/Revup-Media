import { notFound } from 'next/navigation';
import { LegacyPage } from '../components/legacy-page';

const files: Record<string, string> = {
  '': 'index.html', about: 'about.html', 'case-studies': 'case-studies.html',
  'case-studies/aussies-merch': 'case-study-aussies-merch.html', 'case-studies/hardbody': 'case-study-hardbody.html',
  'case-studies/linen-tales': 'case-study-linen-tales.html', 'case-studies/popuptee': 'case-study-popuptee.html',
  'case-studies/twinky': 'case-study-twinky.html', 'case-studies/us-boot': 'case-study-us-boot.html', 'case-studies/vape-at-door': 'case-study-vape-at-door.html',
};

export default async function Page({ params }: { params: Promise<{ slug?: string[] }> }) {
  const { slug = [] } = await params;
  const source = files[slug.join('/')];
  if (!source) notFound();
  return <LegacyPage source={source} />;
}
