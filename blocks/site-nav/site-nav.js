export default function decorate(block) {
  const rows = [...block.querySelectorAll(':scope > div')];

  const getValue = (index) =>
    rows[index]?.querySelector('div')?.textContent?.trim() || '';

  const logoImg   = rows[0]?.querySelector('img');
  const logoSrc   = logoImg ? logoImg.src : '';
  const logoAlt   = logoImg ? logoImg.alt : 'Pearson';

  const nav1Label  = getValue(1) || 'Virtual Schools';
  const nav2Label  = getValue(2) || 'College & Career Readiness';
  const nav3Label  = getValue(3) || 'Browse by Subject';
  const searchText = getValue(4) || 'What can we help you find?';
  const ctaLabel   = getValue(5) || 'Sign in';
  const ctaLink    = getValue(6) || '#';

  // Breadcrumb items — read from row 7 as comma separated
  const breadcrumbRaw   = getValue(7) || 'Home,Schools,Products and services,Pearson Virtual Schools';
  const breadcrumbLinks = getValue(8) || '#,#,#,#';
  const breadcrumbItems = breadcrumbRaw.split(',').map(b => b.trim());
  const breadcrumbHrefs = breadcrumbLinks.split(',').map(h => h.trim());

  // Build breadcrumb HTML
  const breadcrumbHTML = breadcrumbItems.map((item, i) => {
    const href = breadcrumbHrefs[i] || '#';
    const isLast = i === breadcrumbItems.length - 1;
    if (isLast) {
      return `<span class="sn-bc-item sn-bc-current">${item}</span>`;
    }
    return `
      <a href="${href}" class="sn-bc-item sn-bc-link">${item}</a>
      <span class="sn-bc-sep" aria-hidden="true">›</span>
    `;
  }).join('');

  // ============================================================
  // Build nav HTML
  // ============================================================
  const nav = document.createElement('nav');
  nav.className = 'sn-nav';
  nav.setAttribute('aria-label', 'Main navigation');

  nav.innerHTML = `
    <div class="sn-main-row">
      <div class="sn-inner">

        <!-- LOGO -->
        <a href="/" class="sn-logo" aria-label="Pearson Home">
          ${logoSrc
            ? `<img src="${logoSrc}" alt="${logoAlt}" class="sn-logo-img">`
            : `<span class="sn-logo-text">Pearson</span>`
          }
        </a>

        <!-- NAV LINKS -->
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

          <!-- CTA -->
          <a href="${ctaLink}" class="sn-cta">${ctaLabel}</a>

          <!-- HAMBURGER -->
          <button class="sn-hamburger" aria-label="Toggle menu" aria-expanded="false">
            <span></span><span></span><span></span>
          </button>

        </div>
      </div>
    </div>

    <!-- BREADCRUMB ROW -->
    <div class="sn-breadcrumb-row" aria-label="Breadcrumb">
      <div class="sn-breadcrumb-inner">
        <nav class="sn-breadcrumb" aria-label="breadcrumb">
          ${breadcrumbHTML}
        </nav>
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
  // FIX GAP: collapse navigation-container section above
  // ============================================================
  const navContainerSection = document.querySelector('.section.navigation-container');
  if (navContainerSection) {
    navContainerSection.style.cssText = 'display:none !important; height:0 !important; margin:0 !important; padding:0 !important; overflow:hidden !important;';
  }

  // ============================================================
  // FIX GAP: zero out any margin/padding on header-wrapper
  // ============================================================
  const headerWrapper = document.querySelector('header.header-wrapper');
  if (headerWrapper) {
    headerWrapper.style.marginBottom = '0';
    headerWrapper.style.paddingBottom = '0';
  }

  // ============================================================
  // FIX GAP: zero out main element top spacing
  // ============================================================
  const mainEl = document.querySelector('main');
  if (mainEl) {
    mainEl.style.marginTop = '0';
    mainEl.style.paddingTop = '0';
  }

  // ============================================================
  // Section sticky — attach flush to header
  // ============================================================
  const section = block.closest('.section');
  if (section) {
    section.style.cssText = 'padding: 0 !important; margin: 0 !important; position: sticky; top: 0; z-index: 1000;';
  }

  const wrapper = block.closest('.site-nav-wrapper');
  if (wrapper) {
    wrapper.style.cssText = 'padding: 0; margin: 0; max-width: 100%;';
  }

  // ============================================================
  // SCROLL — hide breadcrumb, add shadow
  // Also updates content-title-link top dynamically
  // ============================================================
  const navEl         = block.querySelector('.sn-nav');
  const breadcrumbRow = block.querySelector('.sn-breadcrumb-row');
  let lastScrollY     = window.scrollY;
  let ticking         = false;

  function updateTitleNavTop() {
    const titleSection = document.querySelector('.section.content-title-link-container');
    if (titleSection) {
      const siteNavH = section ? section.offsetHeight : 116;
      titleSection.style.top = `${siteNavH}px`;
    }
  }

  function onScroll() {
    lastScrollY = window.scrollY;
    if (!ticking) {
      window.requestAnimationFrame(() => {
        if (lastScrollY > 10) {
          navEl.classList.add('is-scrolled');
          breadcrumbRow.classList.add('is-hidden');
        } else {
          navEl.classList.remove('is-scrolled');
          breadcrumbRow.classList.remove('is-hidden');
        }
        // Always sync title nav top to current site-nav height
        updateTitleNavTop();
        ticking = false;
      });
      ticking = true;
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', updateTitleNavTop, { passive: true });

  // Set correct top on load (after a tick to ensure layout is painted)
  requestAnimationFrame(updateTitleNavTop);

  // ============================================================
  // HAMBURGER
  // ============================================================
  const hamburger  = block.querySelector('.sn-hamburger');
  const mobileMenu = block.querySelector('.sn-mobile-menu');

  hamburger.addEventListener('click', () => {
    const isOpen = hamburger.getAttribute('aria-expanded') === 'true';
    hamburger.setAttribute('aria-expanded', String(!isOpen));
    mobileMenu.setAttribute('aria-hidden', String(isOpen));
    mobileMenu.classList.toggle('is-open', !isOpen);
    hamburger.classList.toggle('is-open', !isOpen);
  });

  // ============================================================
  // SEARCH
  // ============================================================
  const searchInput = block.querySelector('.sn-search-input');
  const searchWrap  = block.querySelector('.sn-search-wrap');

  searchInput.addEventListener('focus', () => searchWrap.classList.add('is-focused'));
  searchInput.addEventListener('blur',  () => searchWrap.classList.remove('is-focused'));

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
