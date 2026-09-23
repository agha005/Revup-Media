import Link from 'next/link';

const siteUrl = 'https://www.revupmedia.co';
const bookingUrl = 'https://calendly.com/agha-abdulqadir2005/30min';

type Service = { title: string; eyebrow: string; description: string; intro: string; outcomes: string[]; process: string[]; faqs: Array<{ question: string; answer: string }> };

export const servicePages: Record<string, Service> = {
  'services/klaviyo-email-marketing': {
    title: 'Klaviyo Agency & Email Marketing Services', eyebrow: 'Klaviyo agency',
    description: 'Klaviyo agency services for ecommerce brands: lifecycle strategy, campaign planning, email design, segmentation and testing.',
    intro: 'RevUp Media is a Klaviyo agency for ecommerce brands that want a stronger retention channel. We connect strategy, copy, design and performance review so each send has a clear job to do.',
    outcomes: ['A clear campaign rhythm built around your product calendar', 'Segmentation that makes messages more relevant', 'On-brand email design and copy direction', 'A practical testing and reporting framework'],
    process: ['Review the account, customer journey and current performance', 'Prioritise the highest-value lifecycle and campaign opportunities', 'Plan, create and review the work as one connected channel'],
    faqs: [
      { question: 'What does a Klaviyo email marketing agency do?', answer: 'A Klaviyo agency helps plan, build and improve the emails that support ecommerce retention, including campaigns, automations, segmentation, design and reporting.' },
      { question: 'Can you work with an existing Klaviyo account?', answer: 'Yes. We begin with the account and customer journey you have, then identify the most useful opportunities to improve first.' },
      { question: 'Do you create both strategy and email design?', answer: 'Yes. Strategy, campaign planning and creative are developed together so the final email feels consistent with the brand and the customer moment.' },
    ],
  },
  'services/shopify-email-marketing': {
    title: 'Shopify Email Marketing Agency', eyebrow: 'Shopify email marketing',
    description: 'Shopify email marketing services for ecommerce brands, including Klaviyo strategy, lifecycle automation, campaigns, segmentation and SMS planning.',
    intro: 'RevUp Media helps Shopify brands build a more connected email and SMS retention program. We turn customer, product and purchase data into useful campaigns and lifecycle messages.',
    outcomes: ['A Shopify and Klaviyo retention strategy built around your store', 'Lifecycle flows for acquisition, conversion and post-purchase moments', 'Campaign direction aligned with launches, offers and inventory', 'Email and SMS planning that respects customer consent and attention'],
    process: ['Review the Shopify customer journey, products and existing retention setup', 'Prioritise the highest-value gaps across capture, flows and campaigns', 'Create a practical email and SMS plan that can improve over time'],
    faqs: [
      { question: 'What does a Shopify email marketing agency do?', answer: 'A Shopify email marketing agency develops the campaigns, automations, customer segments and retention strategy that help a store communicate with customers after they visit or buy.' },
      { question: 'Do I need Klaviyo for Shopify email marketing?', answer: 'Klaviyo is a common choice for ecommerce retention because it connects customer and store data with campaigns and automations. The right setup depends on your store, existing tools and goals.' },
      { question: 'Can email and SMS work together for a Shopify store?', answer: 'Yes. Email carries more detail and story, while permission-based SMS can support time-sensitive moments. The important part is planning both channels as one customer experience.' },
    ],
  },
  'services/email-automation-flows': {
    title: 'Ecommerce Email Automation Flows', eyebrow: 'Lifecycle email automation',
    description: 'Ecommerce email automation flow strategy and design for welcome, abandoned cart, post-purchase, win-back and customer retention journeys.',
    intro: 'Lifecycle flows should make the next message feel useful, timely and unmistakably on-brand. RevUp Media maps the customer journey, then creates the email automation that supports each meaningful moment.',
    outcomes: ['Prioritised lifecycle map for your customer journey', 'Welcome, cart, post-purchase and win-back flow direction', 'Messaging that reflects the product, offer and customer context', 'A review plan for improving live automations over time'],
    process: ['Audit existing flows and locate gaps in the customer journey', 'Define each flow’s audience, trigger, message and success measure', 'Create and launch the highest-priority automations first'],
    faqs: [
      { question: 'Which ecommerce email flows should be built first?', answer: 'The answer depends on the account, but welcome, abandoned cart, browse abandonment, post-purchase and win-back flows are commonly high-priority lifecycle journeys.' },
      { question: 'Do you improve existing automations?', answer: 'Yes. We can audit the current journey, identify gaps and improve the strategy, message, creative and sequence of existing flows.' },
      { question: 'How do you measure an email automation?', answer: 'We define the intended customer action and review the relevant engagement, conversion and attributed-revenue signals available in the account.' },
    ],
  },
  'services/email-campaign-management': {
    title: 'Ecommerce Email Campaign Management', eyebrow: 'Email campaigns',
    description: 'Ecommerce email campaign management combining campaign strategy, content planning, copy direction and custom email design for retention teams.',
    intro: 'Campaigns work best when they are part of a considered brand and product calendar, not disconnected promotions. RevUp Media helps teams plan, create and learn from the sends that keep customers engaged.',
    outcomes: ['A campaign calendar tied to launches, offers and customer needs', 'Custom creative direction for each send', 'Clear message hierarchy and CTA direction', 'Testing ideas grounded in the current program'],
    process: ['Understand the calendar, brand voice and commercial priorities', 'Turn priority moments into a campaign plan', 'Create, send, review and use the learning in the next campaign'],
    faqs: [
      { question: 'What is included in ecommerce email campaign management?', answer: 'It can include campaign planning, creative direction, email design, copy direction, segmentation support and performance review.' },
      { question: 'How often should an ecommerce brand send campaigns?', answer: 'There is no universal frequency. The right rhythm depends on product launches, audience expectations, list health and the value of each message.' },
      { question: 'Can campaigns match our existing brand?', answer: 'Yes. The goal is for each email to feel like a natural extension of the brand, product and customer experience.' },
    ],
  },
  'services/ecommerce-sms-marketing': {
    title: 'Ecommerce SMS Marketing Strategy', eyebrow: 'SMS marketing',
    description: 'Ecommerce SMS marketing strategy that connects opt-in capture, lifecycle messaging and campaign planning with your broader retention program.',
    intro: 'SMS should complement email, not duplicate it. RevUp Media helps ecommerce teams use permission-based SMS for the moments where a short, timely message gives customers useful context.',
    outcomes: ['An SMS role that complements your email program', 'Lifecycle and campaign opportunities mapped by customer moment', 'Clear message direction that respects subscriber attention', 'Capture and consent touchpoints considered alongside retention'],
    process: ['Review current capture, consent and message strategy', 'Identify moments where SMS adds distinct value', 'Plan email and SMS together so customers receive a coherent experience'],
    faqs: [
      { question: 'How should ecommerce brands use SMS with email?', answer: 'Use each channel for what it does best. Email can carry more story and detail; SMS can add timely, concise support when subscribers have given permission.' },
      { question: 'Do you build SMS flows?', answer: 'We develop lifecycle and campaign direction that fits the brand, customer journey and consent model in use.' },
      { question: 'Will SMS replace our email campaigns?', answer: 'No. A healthy retention program uses channels together, with each message chosen for the audience and moment rather than duplicated by default.' },
    ],
  },
  'services/email-list-growth': {
    title: 'Ecommerce Email List Growth', eyebrow: 'Email list growth',
    description: 'Ecommerce email list growth strategy for higher-quality subscriber capture, welcome experiences and retention-focused conversion paths.',
    intro: 'A larger list only helps when it brings the right people into a useful relationship with the brand. RevUp Media improves the capture journey and welcome experience so growth supports retention from the start.',
    outcomes: ['Capture opportunities reviewed across the customer journey', 'Offer and message direction that fits the brand', 'Welcome experience connected to the opt-in promise', 'A quality-first view of subscriber growth and engagement'],
    process: ['Review current capture points, offer and welcome path', 'Identify friction, unclear value and high-intent opportunities', 'Test and improve the journey from sign-up to first purchase'],
    faqs: [
      { question: 'What is ecommerce email list growth?', answer: 'It is the practice of earning permission to communicate with prospective customers, then giving those subscribers a relevant, valuable first experience.' },
      { question: 'How do you grow an email list without hurting quality?', answer: 'Focus on a clear opt-in value, accurate expectations, relevant capture placement and a welcome experience that delivers on the promise.' },
      { question: 'Can list growth be connected to lifecycle email?', answer: 'Yes. Capture, consent and the welcome flow should be planned as one journey so the first messages make sense for why someone subscribed.' },
    ],
  },
};

export function ServiceIndex() {
  const services = Object.entries(servicePages);
  return <>
    <header className="site-header"><div className="container nav-shell"><Link className="brand" href="/"><img src="/assets/revup-logo.png" alt="RevUp Media" /><span>REVUP <span>MEDIA</span></span></Link><nav className="desktop-nav" aria-label="Primary navigation"><Link href="/">Home</Link><Link href="/services">Services</Link><Link href="/blog">Blog</Link><Link href="/case-studies">Case Studies</Link><Link href="/about">About</Link></nav><a className="btn btn-primary btn-small nav-action" href={bookingUrl} target="_blank" rel="noopener">Book Free Audit <span className="arrow">→</span></a></div></header>
    <main className="service-page"><section className="service-hero"><div className="container"><p className="eyebrow">Ecommerce retention services</p><h1>Email marketing services built around your brand.</h1><p className="service-lead">Strategy, lifecycle automation, campaigns, SMS and list growth for ecommerce teams that want a more connected customer journey.</p></div></section><section className="section service-section"><div className="container"><div className="section-heading"><p className="eyebrow">What we do</p><h2>Choose the work that moves your retention program forward.</h2></div><div className="service-cards">{services.map(([path, service]) => <Link className="service-card" href={`/${path}`} key={path}><p className="eyebrow">{service.eyebrow}</p><h2>{service.title}</h2><p>{service.description}</p><span>Explore service →</span></Link>)}</div></div></section></main>
  </>;
}

export function ServicePage({ service }: { service: Service }) {
  const path = Object.entries(servicePages).find(([, item]) => item === service)?.[0] ?? '';
  const url = `${siteUrl}/${path}`;
  const schema = { '@context': 'https://schema.org', '@graph': [
    { '@type': 'Service', name: service.title, description: service.description, provider: { '@id': `${siteUrl}/#organization` }, areaServed: 'Worldwide', url },
    { '@type': 'FAQPage', mainEntity: service.faqs.map((faq) => ({ '@type': 'Question', name: faq.question, acceptedAnswer: { '@type': 'Answer', text: faq.answer } })) },
    { '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl }, { '@type': 'ListItem', position: 2, name: 'Services' }, { '@type': 'ListItem', position: 3, name: service.title, item: url }] },
  ] };
  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    <header className="site-header"><div className="container nav-shell"><Link className="brand" href="/"><img src="/assets/revup-logo.png" alt="RevUp Media" /><span>REVUP <span>MEDIA</span></span></Link><nav className="desktop-nav" aria-label="Primary navigation"><Link href="/">Home</Link><Link href="/services">Services</Link><Link href="/blog">Blog</Link><Link href="/case-studies">Case Studies</Link><Link href="/about">About</Link></nav><a className="btn btn-primary btn-small nav-action" href={bookingUrl} target="_blank" rel="noopener">Book Free Audit <span className="arrow">→</span></a></div></header>
    <main className="service-page"><section className="service-hero"><div className="container"><p className="eyebrow">{service.eyebrow}</p><h1>{service.title} for ecommerce brands</h1><p className="service-lead">{service.intro}</p><div className="hero-actions"><a className="btn btn-primary" href={bookingUrl} target="_blank" rel="noopener">Book Your Free Audit <span className="arrow">→</span></a><Link className="btn btn-secondary" href="/case-studies">View Case Studies <span className="arrow">↗</span></Link></div></div></section>
      <section className="section service-section"><div className="container service-grid"><div><p className="eyebrow">What this work supports</p><h2>A more connected retention channel</h2><p>{service.description}</p></div><ul className="service-list">{service.outcomes.map((outcome) => <li key={outcome}>{outcome}</li>)}</ul></div></section>
      <section className="section section-border"><div className="container"><div className="section-heading"><p className="eyebrow">How we approach it</p><h2>Clear priorities. Work that fits together.</h2></div><ol className="service-steps">{service.process.map((step, index) => <li key={step}><span>0{index + 1}</span><p>{step}</p></li>)}</ol></div></section>
      <section className="section faq-wrap"><div className="container"><div className="section-heading centered"><p className="eyebrow">Frequently asked questions</p><h2>Useful answers before the call.</h2></div><div className="service-faqs">{service.faqs.map((faq) => <article className="service-faq" key={faq.question}><h3>{faq.question}</h3><p>{faq.answer}</p></article>)}</div></div></section>
      <section className="closing-cta"><div className="closing-cta-copy"><p className="eyebrow">Start with the right next step</p><h2>Make your next email <span className="accent">worth opening.</span></h2><p>Tell us what your retention program needs to solve. We will help identify where to start.</p><a className="btn btn-primary" href={bookingUrl} target="_blank" rel="noopener">Book Your Free Audit <span className="arrow">→</span></a></div></section>
    </main>
  </>;
}
