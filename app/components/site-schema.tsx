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
      logo: `${siteUrl}/assets/revup-logo.png`,
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
    },
  ],
};

export function SiteSchema() {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}
