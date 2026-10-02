const siteUrl = 'https://www.revupmedia.co';

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': `${siteUrl}/#organization`,
      name: 'RevUp Media',
      url: siteUrl,
      sameAs: ['https://www.linkedin.com/company/revupmedia26/', 'https://www.facebook.com/profile.php?id=61591764788520'],
      founder: { '@id': `${siteUrl}/about#abdul-qadir` },
      logo: { '@type': 'ImageObject', url: `${siteUrl}/assets/revup-organization-logo.png`, width: 256, height: 256 },
      description: 'Ecommerce email marketing agency providing lifecycle strategy, email automation, campaign creative and retention marketing.',
    },
    {
      '@type': 'ProfessionalService',
      '@id': `${siteUrl}/#service`,
      name: 'RevUp Media',
      url: siteUrl,
      description: 'Ecommerce email marketing services: lifecycle strategy, email flows, campaign creative, list growth and retention marketing.',
      provider: { '@id': `${siteUrl}/#organization` },
      areaServed: 'Worldwide',
      serviceType: ['Ecommerce email marketing', 'Email automation', 'Email campaign design', 'Retention marketing'],
      hasOfferCatalog: {
        '@type': 'OfferCatalog', name: 'Ecommerce email marketing services',
        itemListElement: [
          ['Klaviyo email marketing', '/services/klaviyo-email-marketing'],
          ['Shopify email marketing', '/services/shopify-email-marketing'],
          ['Email campaign management', '/services/email-campaign-management'],
          ['Ecommerce SMS marketing', '/services/ecommerce-sms-marketing'],
        ].map(([name, route]) => ({ '@type': 'Offer', itemOffered: { '@type': 'Service', name, url: `${siteUrl}${route}`, provider: { '@id': `${siteUrl}/#organization` } } })),
      },
    },
    {
      '@type': 'Person',
      '@id': `${siteUrl}/about#abdul-qadir`,
      name: 'Abdul Qadir',
      jobTitle: 'Founder of RevUp Media',
      url: `${siteUrl}/about#abdul-qadir`,
      image: `${siteUrl}/assets/abdul-qadir-portrait.webp`,
      sameAs: ['https://www.linkedin.com/in/abdul-qadir005'],
      worksFor: { '@id': `${siteUrl}/#organization` },
    },
    {
      '@type': 'WebSite',
      '@id': `${siteUrl}/#website`,
      url: siteUrl,
      name: 'RevUp Media',
      publisher: { '@id': `${siteUrl}/#organization` },
      alternateName: 'RevUpMedia',
    },
  ],
};

export function SiteSchema() {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}
