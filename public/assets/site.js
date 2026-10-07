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
          <div class="email-wall-column email-wall-column--one"><div class="email-wall-track"><img loading="lazy" decoding="async" src="/assets/aussies-merch-email.webp" alt=""><img loading="lazy" decoding="async" src="/assets/linen-tales-new-arrivals.webp" alt=""><img loading="lazy" decoding="async" src="/assets/us-boot-stories-email.webp" alt=""><img loading="lazy" decoding="async" src="/assets/aussies-merch-email.webp" alt=""><img loading="lazy" decoding="async" src="/assets/linen-tales-new-arrivals.webp" alt=""><img loading="lazy" decoding="async" src="/assets/us-boot-stories-email.webp" alt=""></div></div>
          <div class="email-wall-column email-wall-column--two"><div class="email-wall-track"><img loading="lazy" decoding="async" src="/assets/hardbody-email.webp" alt=""><img loading="lazy" decoding="async" src="/assets/twinky-parent-reset.webp" alt=""><img loading="lazy" decoding="async" src="/assets/popuptee-undercover-email.webp" alt=""><img loading="lazy" decoding="async" src="/assets/hardbody-email.webp" alt=""><img loading="lazy" decoding="async" src="/assets/twinky-parent-reset.webp" alt=""><img loading="lazy" decoding="async" src="/assets/popuptee-undercover-email.webp" alt=""></div></div>
          <div class="email-wall-column email-wall-column--three"><div class="email-wall-track"><img loading="lazy" decoding="async" src="/assets/vape-at-door-spring-email.webp" alt=""><img loading="lazy" decoding="async" src="/assets/aussies-merch-winback-email.webp" alt=""><img loading="lazy" decoding="async" src="/assets/twinky-travel-collection.webp" alt=""><img loading="lazy" decoding="async" src="/assets/vape-at-door-spring-email.webp" alt=""><img loading="lazy" decoding="async" src="/assets/aussies-merch-winback-email.webp" alt=""><img loading="lazy" decoding="async" src="/assets/twinky-travel-collection.webp" alt=""></div></div>
          <div class="email-wall-column email-wall-column--four"><div class="email-wall-track"><img loading="lazy" decoding="async" src="/assets/us-boot-joe-email.webp" alt=""><img loading="lazy" decoding="async" src="/assets/popuptee-fall-anime-email.webp" alt=""><img loading="lazy" decoding="async" src="/assets/linen-tales-subscriber-sale.webp" alt=""><img loading="lazy" decoding="async" src="/assets/us-boot-joe-email.webp" alt=""><img loading="lazy" decoding="async" src="/assets/popuptee-fall-anime-email.webp" alt=""><img loading="lazy" decoding="async" src="/assets/linen-tales-subscriber-sale.webp" alt=""></div></div>
        </div>
      </section>`);

    if (!document.querySelector('.site-footer')) {
      main.insertAdjacentHTML('afterend', `<footer class="site-footer"><div class="container"><div class="footer-grid"><div class="footer-brand"><a class="brand" href="/"><img loading="lazy" decoding="async" src="/assets/revup-logo.webp" alt=""><span>REVUP <span>MEDIA</span></span></a><p>Email strategy, automation and campaign creative for ecommerce brands.</p></div><div class="footer-col"><h3>Pages</h3><a href="/">Home</a><a href="/case-studies">Case Studies</a><a href="/about">About</a></div><div class="footer-col"><h3>Start a project</h3><a href="https://calendly.com/agha-abdulqadir2005/30min" target="_blank" rel="noopener">Book a free audit</a></div></div><div class="footer-bottom"><span>&copy; <span data-year>2026</span> RevUp Media.</span><span>Verified work only.</span></div></div></footer>`);
    }
  }

  const legacyEndCta = !caseStudy && main && (activePage === 'about' || activePage === 'case-studies') ? main.querySelector(':scope > .cta-split') : null;
  if (legacyEndCta) {
    legacyEndCta.outerHTML = `
      <section class="closing-cta">
        <div class="closing-cta-copy reveal"><span class="cta-stars">&#9733; &#9733; &#9733; &#9733; &#9733;</span><span class="eyebrow">Limited project availability</span><h2>Make your next email<br><span class="accent">worth opening.</span></h2><p>Tell us what your email program needs to solve. We will review the current setup and identify the most useful place to start.</p><a class="btn btn-primary" href="https://calendly.com/agha-abdulqadir2005/30min" target="_blank" rel="noopener">Book Your Free Audit <span class="arrow">&#8594;</span></a></div>
        <div class="email-wall" aria-hidden="true">
          <div class="email-wall-column email-wall-column--one"><div class="email-wall-track"><img loading="lazy" decoding="async" src="/assets/aussies-merch-email.webp" alt=""><img loading="lazy" decoding="async" src="/assets/linen-tales-new-arrivals.webp" alt=""><img loading="lazy" decoding="async" src="/assets/us-boot-stories-email.webp" alt=""><img loading="lazy" decoding="async" src="/assets/aussies-merch-email.webp" alt=""><img loading="lazy" decoding="async" src="/assets/linen-tales-new-arrivals.webp" alt=""><img loading="lazy" decoding="async" src="/assets/us-boot-stories-email.webp" alt=""></div></div>
          <div class="email-wall-column email-wall-column--two"><div class="email-wall-track"><img loading="lazy" decoding="async" src="/assets/hardbody-email.webp" alt=""><img loading="lazy" decoding="async" src="/assets/twinky-parent-reset.webp" alt=""><img loading="lazy" decoding="async" src="/assets/popuptee-undercover-email.webp" alt=""><img loading="lazy" decoding="async" src="/assets/hardbody-email.webp" alt=""><img loading="lazy" decoding="async" src="/assets/twinky-parent-reset.webp" alt=""><img loading="lazy" decoding="async" src="/assets/popuptee-undercover-email.webp" alt=""></div></div>
          <div class="email-wall-column email-wall-column--three"><div class="email-wall-track"><img loading="lazy" decoding="async" src="/assets/vape-at-door-spring-email.webp" alt=""><img loading="lazy" decoding="async" src="/assets/aussies-merch-winback-email.webp" alt=""><img loading="lazy" decoding="async" src="/assets/twinky-travel-collection.webp" alt=""><img loading="lazy" decoding="async" src="/assets/vape-at-door-spring-email.webp" alt=""><img loading="lazy" decoding="async" src="/assets/aussies-merch-winback-email.webp" alt=""><img loading="lazy" decoding="async" src="/assets/twinky-travel-collection.webp" alt=""></div></div>
          <div class="email-wall-column email-wall-column--four"><div class="email-wall-track"><img loading="lazy" decoding="async" src="/assets/us-boot-joe-email.webp" alt=""><img loading="lazy" decoding="async" src="/assets/popuptee-fall-anime-email.webp" alt=""><img loading="lazy" decoding="async" src="/assets/linen-tales-subscriber-sale.webp" alt=""><img loading="lazy" decoding="async" src="/assets/us-boot-joe-email.webp" alt=""><img loading="lazy" decoding="async" src="/assets/popuptee-fall-anime-email.webp" alt=""><img loading="lazy" decoding="async" src="/assets/linen-tales-subscriber-sale.webp" alt=""></div></div>
        </div>
      </section>`;
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
