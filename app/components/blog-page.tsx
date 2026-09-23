import Link from 'next/link';

const siteUrl = 'https://www.revupmedia.co';
const bookingUrl = 'https://calendly.com/agha-abdulqadir2005/30min';

type Post = { slug: string; title: string; description: string; label: string; readTime: string; intro: string; sections: Array<{ heading: string; body: string }> };

export const posts: Record<string, Post> = {
  'blog/ecommerce-email-automation-audit': {
    slug: 'ecommerce-email-automation-audit', label: 'Lifecycle automation', readTime: '5 min read',
    title: 'How to audit ecommerce email automation without rebuilding everything',
    description: 'A practical way for ecommerce teams to review welcome, cart, post-purchase and win-back email automation before deciding what to improve.',
    intro: 'An automation audit is not a hunt for the biggest flow library. It is a way to find the few customer moments where the current experience is unclear, late or missing.',
    sections: [
      { heading: 'Start with the journey a customer actually takes', body: 'Write down the moments that lead from first visit to repeat purchase: sign-up, product discovery, cart, purchase, delivery, use and return. Then place your current messages against those moments. A flow is only useful when it helps a customer make the next decision.' },
      { heading: 'Review the promise, trigger and next action', body: 'For every automation, check three things: what the customer was promised, what action or timing starts the message, and what the message asks them to do next. If any one of these is vague, improve the message before adding more steps.' },
      { heading: 'Prioritise gaps by customer value, not by flow count', body: 'Welcome, cart, browse, post-purchase and win-back journeys are common starting points because they map to meaningful customer stages. The best priority for a specific store depends on its product, purchase cycle and the evidence in its account.' },
    ],
  },
  'blog/ecommerce-email-segmentation': {
    slug: 'ecommerce-email-segmentation', label: 'Email segmentation', readTime: '6 min read',
    title: 'A practical ecommerce email segmentation strategy for more relevant sends',
    description: 'Build an ecommerce email segmentation strategy around customer context, purchase stage and product interest—not endless audience fragments.',
    intro: 'Segmentation should make an email feel more useful. If it only creates dozens of tiny lists with no clear message difference, it adds complexity without improving the customer experience.',
    sections: [
      { heading: 'Choose one commercial question first', body: 'Begin with a single purpose: help new buyers return, reduce discount dependence, introduce a complementary product or reconnect with customers who have gone quiet. A segment becomes valuable when it has a clear job and a message designed for that job.' },
      { heading: 'Use context customers have already given you', body: 'Purchase history, product interest, lifecycle stage and engagement can help shape more relevant communication. Use only the data that changes what a customer sees, when they see it or why it is useful to them.' },
      { heading: 'Compare the segment against a sensible baseline', body: 'Treat a segment as a learning tool. Compare its engagement, conversion and downstream customer behaviour against an appropriate broad audience, then keep the approach only when it improves the experience and commercial result.' },
    ],
  },
  'blog/ecommerce-retention-email-calendar': {
    slug: 'ecommerce-retention-email-calendar', label: 'Retention marketing', readTime: '5 min read',
    title: 'How to plan an ecommerce retention email calendar customers will want to receive',
    description: 'A simple framework for ecommerce retention email planning that connects launches, campaigns, lifecycle messaging and customer attention.',
    intro: 'A retention calendar is more than a schedule of promotions. It is a shared view of what customers need to hear, what the brand needs to say and when a message would genuinely be timely.',
    sections: [
      { heading: 'Separate planned campaigns from customer-triggered messages', body: 'Campaigns are useful for launches, seasonal moments, product stories and offers. Automations respond to a customer action or stage. Planning them together prevents the customer from receiving two competing messages at the same moment.' },
      { heading: 'Give each campaign one clear reason to exist', body: 'Before drafting, name the audience, customer benefit, primary message and desired next action. This makes it easier to decide whether a campaign deserves an email, an SMS reminder, both, or neither.' },
      { heading: 'Leave room to learn', body: 'A useful calendar includes review points. After a campaign or important lifecycle sequence, capture what resonated, what created friction and what should change before the next message. Retention becomes stronger through this cycle, not through a fuller calendar alone.' },
    ],
  },
};

function Header() { return <header className="site-header"><div className="container nav-shell"><Link className="brand" href="/"><img src="/assets/revup-logo.png" alt="RevUp Media" /><span>REVUP <span>MEDIA</span></span></Link><nav className="desktop-nav" aria-label="Primary navigation"><Link href="/">Home</Link><Link href="/services">Services</Link><Link href="/case-studies">Case Studies</Link><Link href="/about">About</Link></nav><a className="btn btn-primary btn-small nav-action" href={bookingUrl} target="_blank" rel="noopener">Book Free Audit <span className="arrow">→</span></a></div></header>; }

export function BlogIndex() {
  const blogSchema = { '@context': 'https://schema.org', '@type': 'Blog', name: 'RevUp Media Journal', url: `${siteUrl}/blog`, publisher: { '@id': `${siteUrl}/#organization` } };
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }} /><Header /><main className="service-page"><section className="service-hero"><div className="container"><p className="eyebrow">RevUp Media journal</p><h1>Practical ideas for stronger ecommerce retention.</h1><p className="service-lead">Original strategy notes for teams improving email marketing, lifecycle automation, segmentation and customer retention.</p></div></section><section className="section service-section"><div className="container"><div className="section-heading"><p className="eyebrow">Latest articles</p><h2>Useful thinking for the next message.</h2></div><div className="service-cards">{Object.values(posts).map((post) => <Link className="service-card" href={`/blog/${post.slug}`} key={post.slug}><p className="eyebrow">{post.label} · {post.readTime}</p><h2>{post.title}</h2><p>{post.description}</p><span>Read article →</span></Link>)}</div></div></section></main></>;
}

export function BlogPost({ post }: { post: Post }) {
  const url = `${siteUrl}/blog/${post.slug}`;
  const articleSchema = { '@context': 'https://schema.org', '@type': 'Article', headline: post.title, description: post.description, mainEntityOfPage: url, author: { '@type': 'Organization', name: 'RevUp Media' }, publisher: { '@id': `${siteUrl}/#organization` }, datePublished: '2026-09-23', dateModified: '2026-09-23' };
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} /><Header /><main className="service-page"><article><section className="service-hero"><div className="container"><p className="eyebrow">{post.label} · {post.readTime}</p><h1>{post.title}</h1><p className="service-lead">{post.intro}</p><p className="byline">By RevUp Media · Updated September 23, 2026</p></div></section><section className="section service-section"><div className="container guide-copy">{post.sections.map((section) => <section className="blog-section" key={section.heading}><h2>{section.heading}</h2><p>{section.body}</p></section>)}<p className="eyebrow">Need a tailored plan?</p><h2>Turn the ideas into a retention program that fits your brand.</h2><p>Every store has different products, purchase cycles and customer expectations. A focused audit is the quickest way to find the work worth doing first.</p><a className="btn btn-primary" href={bookingUrl} target="_blank" rel="noopener">Book Your Free Audit <span className="arrow">→</span></a></div></section></article></main></>;
}
