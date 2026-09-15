import type { Metadata } from 'next';
import './globals.css';
import { SiteSchema } from './components/site-schema';

const siteUrl = 'https://www.revupmedia.co';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Ecommerce Email Marketing Agency | RevUp Media',
    template: '%s | RevUp Media',
  },
  description: 'Ecommerce email marketing for brands that want stronger retention: lifecycle strategy, Klaviyo flows, campaign creative, list growth and email design.',
  keywords: ['ecommerce email marketing', 'Klaviyo agency', 'email marketing agency', 'email flows', 'retention marketing', 'email campaign design'],
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName: 'RevUp Media',
    title: 'Ecommerce Email Marketing Agency | RevUp Media',
    description: 'Lifecycle strategy, email flows and campaign creative for ecommerce brands.',
    images: [{ url: '/assets/og-revup-media-v2.png', width: 1200, height: 630, alt: 'RevUp Media ecommerce email marketing' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ecommerce Email Marketing Agency | RevUp Media',
    description: 'Lifecycle strategy, email flows and campaign creative for ecommerce brands.',
    images: ['/assets/og-revup-media-v2.png'],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><SiteSchema />{children}</body></html>;
}
