(() => {
  const body = document.body;
  const header = document.querySelector('[data-header]');
  const menuButton = document.querySelector('[data-menu-toggle]');
  const mobileMenu = document.querySelector('[data-mobile-menu]');

  const closeMenu = () => {
    if (!menuButton || !mobileMenu) return;
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', 'Open menu');
    mobileMenu.classList.remove('is-open');
    body.classList.remove('menu-open');
  };

  menuButton?.addEventListener('click', () => {
    const open = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', String(!open));
    menuButton.setAttribute('aria-label', open ? 'Open menu' : 'Close menu');
    mobileMenu?.classList.toggle('is-open', !open);
    body.classList.toggle('menu-open', !open);
  });

  mobileMenu?.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));
  window.addEventListener('resize', () => { if (window.innerWidth > 760) closeMenu(); });

  const updateHeader = () => header?.classList.toggle('is-scrolled', window.scrollY > 16);
  updateHeader();
  window.addEventListener('scroll', updateHeader, { passive: true });

  const activePage = body.dataset.page;
  if (activePage) {
    document.querySelectorAll(`[data-nav="${activePage}"]`).forEach((link) => link.setAttribute('aria-current', 'page'));
  }

  const caseStudy = document.querySelector('.case-hero');
  const main = document.querySelector('main');
  if (caseStudy && main && !document.querySelector('.closing-cta')) {
    main.querySelectorAll(':scope > .cta-split').forEach((section) => section.remove());
    main.insertAdjacentHTML('beforeend', `
      <section class="closing-cta case-closing-cta">
        <div class="closing-cta-copy reveal"><span class="cta-stars">&#9733; &#9733; &#9733; &#9733; &#9733;</span><span class="eyebrow">Limited project availability</span><h2>Make your next email<br><span class="accent">worth opening.</span></h2><p>Tell us what your email program needs to solve. We will review the current setup and identify the most useful place to start.</p><a class="btn btn-primary" href="https://calendly.com/agha-abdulqadir2005/30min" target="_blank" rel="noopener">Book Your Free Audit <span class="arrow">&#8594;</span></a></div>
        <div class="email-wall" aria-hidden="true">
          <div class="email-wall-column email-wall-column--one"><div class="email-wall-track"><img loading="lazy" decoding="async" src="/assets/aussies-merch-email.jpg" alt=""><img loading="lazy" decoding="async" src="/assets/linen-tales-new-arrivals.png" alt=""><img loading="lazy" decoding="async" src="/assets/us-boot-stories-email.png" alt=""><img loading="lazy" decoding="async" src="/assets/aussies-merch-email.jpg" alt=""><img loading="lazy" decoding="async" src="/assets/linen-tales-new-arrivals.png" alt=""><img loading="lazy" decoding="async" src="/assets/us-boot-stories-email.png" alt=""></div></div>
          <div class="email-wall-column email-wall-column--two"><div class="email-wall-track"><img loading="lazy" decoding="async" src="/assets/hardbody-email.jpg" alt=""><img loading="lazy" decoding="async" src="/assets/twinky-parent-reset.png" alt=""><img loading="lazy" decoding="async" src="/assets/popuptee-undercover-email.png" alt=""><img loading="lazy" decoding="async" src="/assets/hardbody-email.jpg" alt=""><img loading="lazy" decoding="async" src="/assets/twinky-parent-reset.png" alt=""><img loading="lazy" decoding="async" src="/assets/popuptee-undercover-email.png" alt=""></div></div>
          <div class="email-wall-column email-wall-column--three"><div class="email-wall-track"><img loading="lazy" decoding="async" src="/assets/vape-at-door-spring-email.png" alt=""><img loading="lazy" decoding="async" src="/assets/aussies-merch-winback-email.png" alt=""><img loading="lazy" decoding="async" src="/assets/twinky-travel-collection.png" alt=""><img loading="lazy" decoding="async" src="/assets/vape-at-door-spring-email.png" alt=""><img loading="lazy" decoding="async" src="/assets/aussies-merch-winback-email.png" alt=""><img loading="lazy" decoding="async" src="/assets/twinky-travel-collection.png" alt=""></div></div>
          <div class="email-wall-column email-wall-column--four"><div class="email-wall-track"><img loading="lazy" decoding="async" src="/assets/us-boot-joe-email.png" alt=""><img loading="lazy" decoding="async" src="/assets/popuptee-fall-anime-email.png" alt=""><img loading="lazy" decoding="async" src="/assets/linen-tales-subscriber-sale.jpg" alt=""><img loading="lazy" decoding="async" src="/assets/us-boot-joe-email.png" alt=""><img loading="lazy" decoding="async" src="/assets/popuptee-fall-anime-email.png" alt=""><img loading="lazy" decoding="async" src="/assets/linen-tales-subscriber-sale.jpg" alt=""></div></div>
        </div>
      </section>`);

    if (!document.querySelector('.site-footer')) {
      main.insertAdjacentHTML('afterend', `<footer class="site-footer"><div class="container"><div class="footer-grid"><div class="footer-brand"><a class="brand" href="/"><img loading="lazy" decoding="async" src="/assets/revup-logo.png" alt=""><span>REVUP <span>MEDIA</span></span></a><p>Email strategy, automation and campaign creative for ecommerce brands.</p></div><div class="footer-col"><h3>Pages</h3><a href="/">Home</a><a href="/case-studies">Case Studies</a><a href="/about">About</a></div><div class="footer-col"><h3>Start a project</h3><a href="https://calendly.com/agha-abdulqadir2005/30min" target="_blank" rel="noopener">Book a free audit</a></div></div><div class="footer-bottom"><span>&copy; <span data-year>2026</span> RevUp Media.</span><span>Verified work only.</span></div></div></footer>`);
    }
  }

  const legacyEndCta = !caseStudy && main && (activePage === 'about' || activePage === 'case-studies') ? main.querySelector(':scope > .cta-split') : null;
  if (legacyEndCta) {
    legacyEndCta.outerHTML = `
      <section class="closing-cta">
        <div class="closing-cta-copy reveal"><span class="cta-stars">&#9733; &#9733; &#9733; &#9733; &#9733;</span><span class="eyebrow">Limited project availability</span><h2>Make your next email<br><span class="accent">worth opening.</span></h2><p>Tell us what your email program needs to solve. We will review the current setup and identify the most useful place to start.</p><a class="btn btn-primary" href="https://calendly.com/agha-abdulqadir2005/30min" target="_blank" rel="noopener">Book Your Free Audit <span class="arrow">&#8594;</span></a></div>
        <div class="email-wall" aria-hidden="true">
          <div class="email-wall-column email-wall-column--one"><div class="email-wall-track"><img loading="lazy" decoding="async" src="/assets/aussies-merch-email.jpg" alt=""><img loading="lazy" decoding="async" src="/assets/linen-tales-new-arrivals.png" alt=""><img loading="lazy" decoding="async" src="/assets/us-boot-stories-email.png" alt=""><img loading="lazy" decoding="async" src="/assets/aussies-merch-email.jpg" alt=""><img loading="lazy" decoding="async" src="/assets/linen-tales-new-arrivals.png" alt=""><img loading="lazy" decoding="async" src="/assets/us-boot-stories-email.png" alt=""></div></div>
          <div class="email-wall-column email-wall-column--two"><div class="email-wall-track"><img loading="lazy" decoding="async" src="/assets/hardbody-email.jpg" alt=""><img loading="lazy" decoding="async" src="/assets/twinky-parent-reset.png" alt=""><img loading="lazy" decoding="async" src="/assets/popuptee-undercover-email.png" alt=""><img loading="lazy" decoding="async" src="/assets/hardbody-email.jpg" alt=""><img loading="lazy" decoding="async" src="/assets/twinky-parent-reset.png" alt=""><img loading="lazy" decoding="async" src="/assets/popuptee-undercover-email.png" alt=""></div></div>
          <div class="email-wall-column email-wall-column--three"><div class="email-wall-track"><img loading="lazy" decoding="async" src="/assets/vape-at-door-spring-email.png" alt=""><img loading="lazy" decoding="async" src="/assets/aussies-merch-winback-email.png" alt=""><img loading="lazy" decoding="async" src="/assets/twinky-travel-collection.png" alt=""><img loading="lazy" decoding="async" src="/assets/vape-at-door-spring-email.png" alt=""><img loading="lazy" decoding="async" src="/assets/aussies-merch-winback-email.png" alt=""><img loading="lazy" decoding="async" src="/assets/twinky-travel-collection.png" alt=""></div></div>
          <div class="email-wall-column email-wall-column--four"><div class="email-wall-track"><img loading="lazy" decoding="async" src="/assets/us-boot-joe-email.png" alt=""><img loading="lazy" decoding="async" src="/assets/popuptee-fall-anime-email.png" alt=""><img loading="lazy" decoding="async" src="/assets/linen-tales-subscriber-sale.jpg" alt=""><img loading="lazy" decoding="async" src="/assets/us-boot-joe-email.png" alt=""><img loading="lazy" decoding="async" src="/assets/popuptee-fall-anime-email.png" alt=""><img loading="lazy" decoding="async" src="/assets/linen-tales-subscriber-sale.jpg" alt=""></div></div>
        </div>
      </section>`;
  }

  const caseStudyContent = document.querySelector('.case-story');
  const caseStudyTitle = caseStudy?.querySelector('h1')?.textContent.replace(/\s+/g, ' ').trim();
  const caseStudyOverviews = {
    'Aussies Merch': ['Aussies Merch creates fan merchandise for Australian sports supporters, with a range built around team pride and match-day culture.', 'Build the essential lifecycle flows so new subscribers, shoppers and customers receive relevant follow-up without depending only on one-off sends.', 'The flow setup generated more than 13% of total revenue. Overall attributed email revenue reached 33.98% of total revenue.'],
    HardBody: ['HardBody is a fitness brand built for people who care about strength, training and performance-led gear.', 'Set up campaign emails that give product drops, offers and collections a clear story, while keeping the brand tone direct and high-impact.', 'Email campaigns generated 31.1% of total store revenue for the reporting period shown in the supplied Omnisend dashboard.'],
    'Linen Tales': ['Linen Tales is a home and lifestyle brand known for considered linen pieces across bedding, dining and everyday living.', 'Build the full email setup - lifecycle flows, campaigns and supporting creative - so every customer touchpoint feels connected to the brand.', 'The complete email program generated 36.9% of total revenue in the supplied Omnisend reporting period.'],
    Twinky: ['Twinky helps parents shop practical products for everyday family life, from newborn essentials to travel and feeding items.', 'Create both the lifecycle flows and campaign calendar so the brand can support customers at the right stage of their parenting journey.', 'Email generated 29.47% of total revenue. Flows contributed 90.11% of attributed email revenue, supported by campaign activity.'],
    'Vape At Door': ['Vape At Door is an ecommerce retailer offering vape kits, flavours and accessories to a fast-moving customer base.', 'Create campaign emails with clearer creative direction and stronger conversion focus for promotional moments and product launches.', 'Campaign email generated 30.23% of total revenue, with £34,862.58 in attributed revenue in the supplied Klaviyo report.'],
    'US Boot': ['US Boot makes American-made work boots for customers who value durable, practical footwear.', 'Build the flows, campaign support and capture system needed to turn attention from a major media feature into a lasting email channel.', 'After implementation, email generated 15.06% of total revenue, with $8,419.28 in attributed revenue for the shown period.'],
    PopUpTee: ['PopUpTee creates pop-culture apparel for fans who want bold, wearable references to the worlds they enjoy.', 'Set up the key lifecycle flows and campaign emails while keeping every send visually distinctive and easy to shop.', 'Email generated 14.15% of total revenue, with $1,284.60 in attributed revenue in the supplied Klaviyo report.']
  };

  if (caseStudyContent && caseStudyTitle && caseStudyOverviews[caseStudyTitle] && !caseStudyContent.querySelector('.case-overview')) {
    const [background, mission, result] = caseStudyOverviews[caseStudyTitle];
    caseStudyContent.insertAdjacentHTML('afterbegin', `<section class="case-overview reveal" aria-label="${caseStudyTitle} case study summary"><article><span>Brand Background</span><p>${background}</p></article><article><span>Mission &amp; Challenges</span><p>${mission}</p></article><article><span>Results &amp; Achievements</span><p>${result}</p></article></section>`);
  }

  document.querySelectorAll('[data-faq-button]').forEach((button) => {
    button.addEventListener('click', () => {
      const item = button.closest('.faq-item');
      const expanded = button.getAttribute('aria-expanded') === 'true';
      document.querySelectorAll('.faq-item.is-open').forEach((openItem) => {
        if (openItem !== item) {
          openItem.classList.remove('is-open');
          openItem.querySelector('[data-faq-button]')?.setAttribute('aria-expanded', 'false');
        }
      });
      item?.classList.toggle('is-open', !expanded);
      button.setAttribute('aria-expanded', String(!expanded));
    });
  });

  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const reveals = document.querySelectorAll('.reveal');
  if (reducedMotion || !('IntersectionObserver' in window)) {
    reveals.forEach((element) => element.classList.add('is-visible'));
  } else {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px' });
    reveals.forEach((element) => observer.observe(element));
  }

  document.querySelectorAll('[data-year]').forEach((element) => { element.textContent = String(new Date().getFullYear()); });
})();
