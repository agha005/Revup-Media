(() => {
  const header = document.querySelector("[data-header]");
  const menuButton = document.querySelector("[data-menu-toggle]");
  const mobileMenu = document.querySelector("[data-mobile-menu]");

  const updateHeader = () => {
    header?.classList.toggle("scrolled", window.scrollY > 18);
  };

  const closeMenu = () => {
    if (!menuButton || !mobileMenu) return;
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("aria-label", "Open menu");
    mobileMenu.classList.remove("open");
    header?.classList.remove("menu-active");
    document.body.classList.remove("menu-open");
  };

  const openMenu = () => {
    if (!menuButton || !mobileMenu) return;
    menuButton.setAttribute("aria-expanded", "true");
    menuButton.setAttribute("aria-label", "Close menu");
    mobileMenu.classList.add("open");
    header?.classList.add("menu-active");
    document.body.classList.add("menu-open");
  };

  menuButton?.addEventListener("click", () => {
    const isOpen = menuButton.getAttribute("aria-expanded") === "true";
    isOpen ? closeMenu() : openMenu();
  });

  mobileMenu?.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 900) closeMenu();
  });

  window.addEventListener("scroll", updateHeader, { passive: true });
  updateHeader();

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeMenu();
  });

  const currentPage = document.body.dataset.page;
  if (currentPage) {
    document.querySelectorAll(`[data-nav="${currentPage}"]`).forEach((link) => {
      link.setAttribute("aria-current", "page");
    });
  }

  document.querySelectorAll("[data-year]").forEach((element) => {
    element.textContent = new Date().getFullYear().toString();
  });

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const revealItems = document.querySelectorAll(".reveal");

  if (reduceMotion || !("IntersectionObserver" in window)) {
    revealItems.forEach((item) => item.classList.add("visible"));
  } else {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -30px" }
    );

    revealItems.forEach((item) => observer.observe(item));
  }

  document.querySelectorAll("[data-gallery-controls]").forEach((controls) => {
    const targetId = controls.getAttribute("data-gallery-controls");
    const gallery = document.getElementById(targetId);
    if (!gallery) return;

    controls.querySelectorAll("button[data-direction]").forEach((button) => {
      button.addEventListener("click", () => {
        const direction = Number(button.getAttribute("data-direction")) || 1;
        gallery.scrollBy({
          left: gallery.clientWidth * 0.72 * direction,
          behavior: reduceMotion ? "auto" : "smooth",
        });
      });
    });
  });
})();
