export default function decorate(block) {
  // ============================================================
  // MAP: nav div index → section class selector
  // Mapped from your exact HTML DOM:
  // div:1 "Overview"        → .content-link-container
  // div:2 "How it works"    → .content-tile-container
  // div:3 "Benefits"        → .container-image-left.cards-container
  // div:4 "About us"        → .content-tile-bullets-container
  // div:5 "Partner success" → section_1211528795 (cards-container, not container-image-left)
  // div:6 "Student success" → .content-tile-bullets-link-container
  // ============================================================
  const sectionSelectors = [
    '.section.content-link-container',
    '.section.content-tile-container',
    '.section.container-image-left.cards-container',
    '.section.content-tile-bullets-container',
    '.section.cards-container:not(.container-image-left)',
    '.section.content-tile-bullets-link-container',
  ];

  // Get all nav items (the 6 direct div children)
  const navItems = [...block.querySelectorAll(':scope > div')];

  // Resolve section elements from selectors
  const sections = sectionSelectors.map((sel) => document.querySelector(sel));

  // ============================================================
  // HELPER — get current combined sticky height
  // (site-nav + this title nav)
  // ============================================================
  function getTotalStickyHeight() {
    const siteNavEl = document.querySelector('.site-nav-wrapper');
    const titleNavEl = block.closest('.section');
    const siteNavH = siteNavEl ? siteNavEl.offsetHeight : 116;
    const titleNavH = titleNavEl ? titleNavEl.offsetHeight : 72;
    return siteNavH + titleNavH;
  }

  // ============================================================
  // SET ACTIVE NAV ITEM
  // ============================================================
  function setActive(index) {
    navItems.forEach((item, i) => {
      item.classList.toggle('is-active', i === index);
    });
  }

  // Default: first item active on load
  setActive(0);

  // ============================================================
  // CLICK HANDLER — smooth scroll to section
  // ============================================================
  navItems.forEach((item, index) => {
    item.addEventListener('click', () => {
      const target = sections[index];
      if (target) {
        const totalOffset = getTotalStickyHeight();
        const top =
          target.getBoundingClientRect().top + window.scrollY - totalOffset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
      setActive(index);
    });
  });

  // ============================================================
  // INTERSECTION OBSERVER — highlight on scroll
  // Recalculates rootMargin dynamically on resize
  // ============================================================
  let observer = null;

  function buildObserver() {
    if (observer) observer.disconnect();

    const totalOffset = getTotalStickyHeight();
    const rootMarginTop = `-${totalOffset}px`;

    const observerOptions = {
      root: null,
      rootMargin: `${rootMarginTop} 0px -60% 0px`,
      threshold: 0,
    };

    observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = sections.indexOf(entry.target);
          if (index !== -1) {
            setActive(index);
          }
        }
      });
    }, observerOptions);

    // Observe all mapped sections
    sections.forEach((section) => {
      if (section) observer.observe(section);
    });
  }

  // Build observer on load
  buildObserver();

  // Rebuild on resize (handles breadcrumb show/hide changing site-nav height)
  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(buildObserver, 150);
  });

  // ============================================================
  // DYNAMIC TOP — update sticky top when site-nav height changes
  // (breadcrumb row collapses on scroll, reducing site-nav height)
  // ============================================================
  const titleSection = block.closest('.section');

  function updateStickyTop() {
    const siteNavEl = document.querySelector('.site-nav-wrapper');
    const siteNavH = siteNavEl ? siteNavEl.offsetHeight : 116;
    if (titleSection) {
      titleSection.style.top = `${siteNavH}px`;
    }
  }

  // Set on load
  updateStickyTop();

  // Update on scroll (breadcrumb collapse changes site-nav height)
  window.addEventListener('scroll', updateStickyTop, { passive: true });

  // Update on resize
  window.addEventListener('resize', updateStickyTop, { passive: true });
}
