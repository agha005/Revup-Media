import Link from 'next/link';

const bookingUrl = 'https://calendly.com/agha-abdulqadir2005/30min';
const pages = [['/', 'Home'], ['/services', 'Services'], ['/blog', 'Blog'], ['/case-studies', 'Case Studies'], ['/about', 'About']];

export function SiteHeader({ active }: { active?: string }) {
  const links = pages.map(([href, label]) => <Link key={href} href={href} aria-current={active === href ? 'page' : undefined}>{label}</Link>);
  return <header className="site-header blog-header"><div className="container nav-shell">
    <Link className="brand" href="/" aria-label="RevUp Media home"><img src="/assets/revup-logo.webp" alt="" width="42" height="42" /><span>REVUP <span>MEDIA</span></span></Link>
    <nav className="desktop-nav" aria-label="Primary navigation">{links}</nav>
    <a className="btn btn-primary btn-small nav-action" href={bookingUrl} target="_blank" rel="noopener">Book Free Audit <span className="arrow">→</span></a>
    <details className="blog-mobile-menu"><summary>Menu</summary><nav aria-label="Mobile navigation">{links}<a href={bookingUrl} target="_blank" rel="noopener">Book a free audit ↗</a></nav></details>
  </div></header>;
}

export function SiteFooter() {
  return <footer className="blog-footer site-footer"><div className="container"><Link href="/">REVUP MEDIA</Link><p>Email strategy, automation and campaign creative for ecommerce brands worldwide.</p><nav aria-label="Footer navigation"><Link href="/services">Services</Link><Link href="/services/klaviyo-email-marketing">Klaviyo agency</Link><Link href="/services/shopify-email-marketing">Shopify email marketing</Link><Link href="/services/email-automation-flows">Email automation</Link><Link href="/blog">Journal</Link><Link href="/guides/ecommerce-email-marketing-strategy">Email marketing strategy guide</Link><Link href="/case-studies">Case studies</Link><Link href="/about">About</Link><a href={bookingUrl} target="_blank" rel="noopener">Book a free audit ↗</a></nav><small>© 2026 RevUp Media</small></div></footer>;
}
