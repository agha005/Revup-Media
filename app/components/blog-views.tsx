import Link from 'next/link';
import { SiteHeader, SiteFooter } from './site-navigation';
import type { BlogArticle } from '../content/article-types';
import { posts } from './blog-page';

const siteUrl = 'https://www.revupmedia.co';
const bookingUrl = 'https://calendly.com/agha-abdulqadir2005/30min';
const sectionId = (index: number) => `section-${index + 1}`;
const displayDate = (date: string) => new Date(`${date}T12:00:00Z`).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric', timeZone: 'UTC' });
const jsonLd = (data: unknown) => JSON.stringify(data).replaceAll('<', '\\u003c');

function Header() { return <SiteHeader active="/blog" />; }

function Footer() { return <SiteFooter />; }

function PostCard({ post }: { post: BlogArticle }) {
  return <Link className="service-card blog-card" href={`/blog/${post.slug}`}>
    {post.image && <img src={post.image} alt={post.imageAlt ?? post.title} width="1200" height="630" loading="lazy" decoding="async" />}
    <div className="blog-card-copy"><p className="eyebrow">{post.label} · {post.readTime}</p><h3>{post.title}</h3><p>{post.description}</p><span>Read article →</span></div>
  </Link>;
}

export function BlogIndex() {
  const all = Object.values(posts);
  const seasonal = all.filter((post) => post.slug.startsWith('black-friday-'));
  const evergreen = all.filter((post) => post.datePublished === '2026-10-01' && !post.slug.startsWith('black-friday-'));
  const buyers = all.filter((post) => post.label === 'Choosing an agency');
  const original = all.filter((post) => post.datePublished !== '2026-10-01' && post.label !== 'Choosing an agency');
  const blogSchema = { '@context': 'https://schema.org', '@type': 'Blog', name: 'RevUp Media Journal', url: `${siteUrl}/blog`, publisher: { '@id': `${siteUrl}/#organization` }, blogPost: all.map((post) => ({ '@type': 'BlogPosting', headline: post.title, url: `${siteUrl}/blog/${post.slug}`, datePublished: post.datePublished, image: post.image ? `${siteUrl}${post.image}` : undefined })) };
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(blogSchema) }} /><Header /><main className="service-page journal">
    <section className="service-hero journal-hero"><div className="container"><p className="eyebrow">The RevUp Media journal</p><h1>Better email starts<br />with <span className="accent">useful thinking.</span></h1><p className="service-lead">Practical Black Friday planning, Klaviyo automation and ecommerce retention guides. Built to help you make the next decision with confidence.</p><nav className="blog-topics" aria-label="Browse article topics"><a href="#black-friday">Black Friday 2026 ↓</a><a href="#klaviyo">Klaviyo & retention ↓</a><a href="#strategy">Strategy notes ↓</a></nav></div></section>
    <section className="section service-section" id="choosing-an-agency"><div className="container"><div className="section-heading"><p className="eyebrow">Choosing an agency</p><h2>Know what to ask before hiring.</h2><p className="blog-section-intro">Compare the scope, evidence and working relationship against what your store needs.</p></div><div className="service-cards">{buyers.map((post) => <PostCard post={post} key={post.slug} />)}</div></div></section>
    <section className="section service-section" id="black-friday"><div className="container"><div className="section-heading"><p className="eyebrow">Prepare before the peak</p><h2>Your Black Friday reading list.</h2><p className="blog-section-intro">Start with the strategy, then build your calendar, audiences and testing plan.</p></div><div className="service-cards">{seasonal.map((post) => <PostCard post={post} key={post.slug} />)}</div></div></section>
    <section className="section" id="klaviyo"><div className="container"><div className="section-heading"><p className="eyebrow">Build the everyday system</p><h2>Klaviyo, Shopify & customer retention.</h2><p className="blog-section-intro">Understand the setup, customer journey and evidence behind useful email marketing.</p></div><div className="service-cards">{evergreen.map((post) => <PostCard post={post} key={post.slug} />)}</div></div></section>
    <section className="section service-section" id="strategy"><div className="container"><div className="section-heading"><p className="eyebrow">From the journal</p><h2>Short strategy notes.</h2></div><div className="service-cards">{original.map((post) => <PostCard post={post} key={post.slug} />)}</div></div></section>
    <section className="section"><div className="container article-cta"><p className="eyebrow">Put the ideas to work</p><h2>Find the most useful next step for your store.</h2><p>Bring your campaigns, flows or list-growth challenge. We will help you see what is worth prioritising.</p><a className="btn btn-primary" href={bookingUrl} target="_blank" rel="noopener">Book Your Free Audit →</a></div></section>
  </main><Footer /></>;
}

export function BlogPost({ post }: { post: BlogArticle }) {
  const url = `${siteUrl}/blog/${post.slug}`;
  const articleSchema = { '@context': 'https://schema.org', '@type': 'BlogPosting', '@id': `${url}#article`, headline: post.title, description: post.description, mainEntityOfPage: { '@type': 'WebPage', '@id': url }, url, image: post.image ? [`${siteUrl}${post.image}`] : undefined, author: { '@type': 'Organization', '@id': `${siteUrl}/#organization`, name: 'RevUp Media', url: siteUrl }, publisher: { '@id': `${siteUrl}/#organization` }, datePublished: post.datePublished, dateModified: post.dateModified, inLanguage: 'en', isAccessibleForFree: true };
  const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl }, { '@type': 'ListItem', position: 2, name: 'Journal', item: `${siteUrl}/blog` }, { '@type': 'ListItem', position: 3, name: post.title, item: url }] };
  const related = (post.related ?? ['black-friday-email-marketing-strategy', 'klaviyo-flows-for-shopify', 'ecommerce-email-marketing-metrics']).map((slug) => posts[`blog/${slug}`]).filter((entry) => entry && entry.slug !== post.slug);
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(articleSchema) }} /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(breadcrumbSchema) }} /><Header /><main className="service-page journal">
    <article><section className="service-hero article-hero"><div className="container"><nav className="article-breadcrumb" aria-label="Breadcrumb"><Link href="/">Home</Link><span aria-hidden="true">/</span><Link href="/blog">Journal</Link></nav><p className="eyebrow">{post.label} · {post.readTime}</p><h1>{post.title}</h1><p className="service-lead">{post.intro}</p><p className="byline">By <Link href="/about">RevUp Media</Link> · Updated <time dateTime={post.dateModified}>{displayDate(post.dateModified ?? '2026-09-23')}</time></p>
      {post.image && <figure className="article-figure"><img src={post.image} alt={post.imageAlt ?? post.title} width="1200" height="630" fetchPriority="high" /><figcaption>Original planning diagram by RevUp Media.</figcaption></figure>}
    </div></section><section className="section service-section article-reading"><div className="container article-layout">
      <aside className="article-toc"><nav aria-label="On this page"><p className="eyebrow">On this page</p><ol>{post.sections.map((section, index) => <li key={section.heading}><a href={`#${sectionId(index)}`}>{section.heading}</a></li>)}{post.faqs && <li><a href="#questions">Common questions</a></li>}</ol></nav><Link className="article-service" href={post.service?.href ?? '/services'}>{post.service?.title ?? 'Explore ecommerce email services'} →</Link></aside>
      <div className="article-copy">{post.takeaway && <div className="article-takeaway"><p className="eyebrow">Start here</p><p>{post.takeaway}</p></div>}
        {post.sections.map((section, index) => <section className="blog-section" id={sectionId(index)} key={section.heading}><h2>{section.heading}</h2>{section.body.split(/\n\s*\n/).map((paragraph, paragraphIndex) => <p key={paragraphIndex}>{paragraph}</p>)}
          {section.bullets && <ul>{section.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>}
          {section.table && <div className="article-table-wrap" role="region" aria-label={`${section.heading}: comparison table`} tabIndex={0}><table><caption>{section.heading}: practical reference</caption><thead><tr>{section.table.headers.map((header) => <th scope="col" key={header}>{header}</th>)}</tr></thead><tbody>{section.table.rows.map((row, rowIndex) => <tr key={rowIndex}>{row.map((cell, cellIndex) => cellIndex === 0 ? <th scope="row" key={cellIndex}>{cell}</th> : <td key={cellIndex}>{cell}</td>)}</tr>)}</tbody></table></div>}
          {section.source && <p className="article-source"><strong>Source and context:</strong> <a href={section.source.url} target="_blank" rel="noopener">{section.source.title} ↗</a>. {section.source.note}</p>}
        </section>)}
        {post.faqs && <section className="blog-section article-faq" id="questions"><h2>Common questions</h2>{post.faqs.map((faq) => <div key={faq.question}><h3>{faq.question}</h3><p>{faq.answer}</p></div>)}</section>}
        <div className="article-cta"><p className="eyebrow">Need a plan for your store?</p><h2>Turn the next useful idea into action.</h2><p>We review your campaigns, flows, signup experience and customer journey to identify the work worth doing first.</p><a className="btn btn-primary" href={bookingUrl} target="_blank" rel="noopener">Book Your Free Audit →</a>{post.service && <Link className="article-service-link" href={post.service.href}>{post.service.title} →</Link>}</div>
      </div>
    </div></section></article>
    <section className="section"><div className="container"><p className="eyebrow">Keep reading</p><h2>Related guides for your next decision.</h2><div className="service-cards">{related.map((entry) => <PostCard post={entry} key={entry.slug} />)}</div><Link className="article-back" href="/blog">← All journal articles</Link></div></section>
  </main><Footer /></>;
}
