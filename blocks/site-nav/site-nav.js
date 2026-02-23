export default function decorate(block) {
  const rows = [...block.querySelectorAll(':scope > div')];

  const getValue = (index) =>
    rows[index]?.querySelector('div')?.textContent?.trim() || '';

  const getHTML = (index) =>
    rows[index]?.querySelector('div')?.innerHTML?.trim() || '';

  // ============================================================
  // Read fields from UE rows:
  // row 0 → logo image
  // row 1 → nav item 1 label
  // row 2 → nav item 2 label
  // row 3 → nav item 3 label
  // row 4 → search placeholder
  // row 5 → CTA button label
  // row 6 → CTA button link
  // ============================================================

  const logoImg    = rows[0]?.querySelector('img');
  const logoSrc    = logoImg ? logoImg.src : '';
  const logoAlt    = logoImg ? logoImg.alt : 'Pearson';

  const nav1Label  = getValue(1) || 'Virtual Schools';
  const nav2Label  = getValue(2) || 'College & Career Readiness';
  const nav3Label  = getValue(3) || 'Browse by Subject';
  const searchText = getValue(4) || 'What can we help you find?';
  const ctaLabel   = getValue(5) || 'Sign in';
  const ctaLink    = getValue(6) || '#';

  // ============================================================
  // Build nav HTML
  // ============================================================
  const nav = document.createElement('nav');
  nav.className = 'sn-nav';
  nav.setAttribute('aria-label', 'Main navigation');

  nav.innerHTML = `
    <div class="sn-inner">

      <!-- LOGO -->
      <a href="/" class="sn-logo" aria-label="Pearson Home">
        ${logoSrc
          ? `<img src="${logoSrc}" alt="${logoAlt}" class="sn-logo-img">`
          : `<span class="sn-logo-text">)Pearson</span>`
        }
      </a>

      <!-- NAV ITEMS -->
      <ul class="sn-links" role="list">
        <li class="sn-item">
          <button class="sn-link" aria-expanded="false" aria-haspopup="true">
            ${nav1Label}
            <svg class="sn-chevron" xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
          </button>
        </li>
        <li class="sn-item">
          <button class="sn-link" aria-expanded="false" aria-haspopup="true">
            ${nav2Label}
            <svg class="sn-chevron" xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
          </button>
        </li>
        <li class="sn-item">
          <button class="sn-link" aria-expanded="false" aria-haspopup="true">
            ${nav3Label}
            <svg class="sn-chevron" xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
          </button>
        </li>
      </ul>

      <!-- RIGHT SIDE -->
      <div class="sn-right">

        <!-- SEARCH BOX -->
        <div class="sn-search-wrap">
          <div class="sn-search-scope">
            <button class="sn-scope-btn" aria-label="Search scope">
              School
              <svg class="sn-chevron" xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
            </button>
            <span class="sn-scope-divider"></span>
          </div>
          <input
            type="text"
            class="sn-search-input"
            placeholder="${searchText}"
            aria-label="${searchText}"
          />
          <button class="sn-search-btn" aria-label="Search">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
          </button>
        </div>

        <!-- HELP ICON -->
        <button class="sn-icon-btn sn-help-btn" aria-label="Help">
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
        </button>

        <!-- CTA BUTTON -->
        <a href="${ctaLink}" class="sn-cta">${ctaLabel}</a>

        <!-- HAMBURGER (mobile) -->
        <button class="sn-hamburger" aria-label="Toggle menu" aria-expanded="false">
          <span></span>
          <span></span>
          <span></span>
        </button>

      </div>
    </div>

    <!-- MOBILE MENU -->
    <div class="sn-mobile-menu" aria-hidden="true">
      <ul class="sn-mobile-links" role="list">
        <li><button class="sn-mobile-link">${nav1Label}</button></li>
        <li><button class="sn-mobile-link">${nav2Label}</button></li>
        <li><button class="sn-mobile-link">${nav3Label}</button></li>
        <li><a href="${ctaLink}" class="sn-mobile-cta">${ctaLabel}</a></li>
      </ul>
    </div>
  `;

  // ============================================================
  // Replace block content
  // ============================================================
  block.innerHTML = '';
  block.appendChild(nav);

  // ============================================================
  // STICKY on scroll — add .is-scrolled class
  // ============================================================
  const section = block.closest('.section');
  if (section) {
    section.style.cssText = 'padding: 0; margin: 0; position: sticky; top: 0; z-index: 1000;';
  }

  const wrapper = block.closest('.site-nav-wrapper');
  if (wrapper) {
    wrapper.style.cssText = 'padding: 0; margin: 0;';
  }

  // Shadow appears after scrolling past nav
  const navEl = block.querySelector('.sn-nav');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 10) {
      navEl.classList.add('is-scrolled');
    } else {
      navEl.classList.remove('is-scrolled');
    }
  }, { passive: true });

  // ============================================================
  // HAMBURGER toggle
  // ============================================================
  const hamburger   = block.querySelector('.sn-hamburger');
  const mobileMenu  = block.querySelector('.sn-mobile-menu');

  hamburger.addEventListener('click', () => {
    const isOpen = hamburger.getAttribute('aria-expanded') === 'true';
    hamburger.setAttribute('aria-expanded', String(!isOpen));
    mobileMenu.setAttribute('aria-hidden', String(isOpen));
    mobileMenu.classList.toggle('is-open', !isOpen);
    hamburger.classList.toggle('is-open', !isOpen);
  });

  // ============================================================
  // SEARCH input — focus ring
  // ============================================================
  const searchInput = block.querySelector('.sn-search-input');
  const searchWrap  = block.querySelector('.sn-search-wrap');

  searchInput.addEventListener('focus', () => searchWrap.classList.add('is-focused'));
  searchInput.addEventListener('blur',  () => searchWrap.classList.remove('is-focused'));

  // Search on Enter
  searchInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && searchInput.value.trim()) {
      window.location.href = `/search?q=${encodeURIComponent(searchInput.value.trim())}`;
    }
  });

  block.querySelector('.sn-search-btn').addEventListener('click', () => {
    if (searchInput.value.trim()) {
      window.location.href = `/search?q=${encodeURIComponent(searchInput.value.trim())}`;
    } else {
      searchInput.focus();
    }
  });
}
