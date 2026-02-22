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
        // Account for sticky nav height (72px)
        const navHeight = block.closest('.section')?.offsetHeight || 72;
        const top = target.getBoundingClientRect().top + window.scrollY - navHeight;
        window.scrollTo({ top, behavior: 'smooth' });
      }
      setActive(index);
    });
  });

  // ============================================================
  // INTERSECTION OBSERVER — highlight on scroll
  // ============================================================
  const observerOptions = {
    root: null,
    // Top margin accounts for sticky nav (72px)
    // Trigger when section hits ~30% from top
    rootMargin: '-72px 0px -60% 0px',
    threshold: 0,
  };

  const observer = new IntersectionObserver((entries) => {
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
