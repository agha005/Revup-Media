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
