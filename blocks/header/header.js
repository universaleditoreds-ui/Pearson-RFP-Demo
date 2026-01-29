import { getMetadata } from '../../scripts/aem.js';
import { loadFragment } from '../fragment/fragment.js';

// media query match that indicates mobile/tablet width
const isDesktop = window.matchMedia('(min-width: 900px)');

function closeOnEscape(e) {
  if (e.code === 'Escape') {
    const nav = document.getElementById('nav');
    const navSections = nav.querySelector('.nav-sections');
    const navSectionExpanded = navSections.querySelector('[aria-expanded="true"]');
    if (navSectionExpanded && isDesktop.matches) {
      // eslint-disable-next-line no-use-before-define
      toggleAllNavSections(navSections);
      navSectionExpanded.focus();
    } else if (!isDesktop.matches) {
      // eslint-disable-next-line no-use-before-define
      toggleMenu(nav, navSections);
      nav.querySelector('button').focus();
    }
  }
}

function closeOnFocusLost(e) {
  const nav = e.currentTarget;
  if (!nav.contains(e.relatedTarget)) {
    const navSections = nav.querySelector('.nav-sections');
    const navSectionExpanded = navSections.querySelector('[aria-expanded="true"]');
    if (navSectionExpanded && isDesktop.matches) {
      // eslint-disable-next-line no-use-before-define
      toggleAllNavSections(navSections, false);
    } else if (!isDesktop.matches) {
      // eslint-disable-next-line no-use-before-define
      toggleMenu(nav, navSections, false);
    }
  }
}

function openOnKeydown(e) {
  const focused = document.activeElement;
  const isNavDrop = focused.className === 'nav-drop';
  if (isNavDrop && (e.code === 'Enter' || e.code === 'Space')) {
    const dropExpanded = focused.getAttribute('aria-expanded') === 'true';
    // eslint-disable-next-line no-use-before-define
    toggleAllNavSections(focused.closest('.nav-sections'));
    focused.setAttribute('aria-expanded', dropExpanded ? 'false' : 'true');
  }
}

function focusNavSection() {
  document.activeElement.addEventListener('keydown', openOnKeydown);
}

/**
 * Toggles all nav sections
 * @param {Element} sections The container element
 * @param {Boolean} expanded Whether the element should be expanded or collapsed
 */
function toggleAllNavSections(sections, expanded = false) {
  sections.querySelectorAll('.nav-sections .default-content-wrapper > ul > li').forEach((section) => {
    section.setAttribute('aria-expanded', expanded);
  });
}

/**
 * Toggles the entire nav
 * @param {Element} nav The container element
 * @param {Element} navSections The nav sections within the container element
 * @param {*} forceExpanded Optional param to force nav expand behavior when not null
 */
function toggleMenu(nav, navSections, forceExpanded = null) {
  const expanded = forceExpanded !== null ? !forceExpanded : nav.getAttribute('aria-expanded') === 'true';
  const button = nav.querySelector('.nav-hamburger button');
  document.body.style.overflowY = (expanded || isDesktop.matches) ? '' : 'hidden';
  nav.setAttribute('aria-expanded', expanded ? 'false' : 'true');
  toggleAllNavSections(navSections, expanded || isDesktop.matches ? 'false' : 'true');
  button.setAttribute('aria-label', expanded ? 'Open navigation' : 'Close navigation');
  // enable nav dropdown keyboard accessibility
  const navDrops = navSections.querySelectorAll('.nav-drop');
  if (isDesktop.matches) {
    navDrops.forEach((drop) => {
      if (!drop.hasAttribute('tabindex')) {
        drop.setAttribute('tabindex', 0);
        drop.addEventListener('focus', focusNavSection);
      }
    });
  } else {
    navDrops.forEach((drop) => {
      drop.removeAttribute('tabindex');
      drop.removeEventListener('focus', focusNavSection);
    });
  }

  // enable menu collapse on escape keypress
  if (!expanded || isDesktop.matches) {
    // collapse menu on escape press
    window.addEventListener('keydown', closeOnEscape);
    // collapse menu on focus lost
    nav.addEventListener('focusout', closeOnFocusLost);
  } else {
    window.removeEventListener('keydown', closeOnEscape);
    nav.removeEventListener('focusout', closeOnFocusLost);
  }
}

/**
 * loads and decorates the header, mainly the nav
 * @param {Element} block The header block element
 */
export default async function decorate(block) {


const headerHTML = `<section class="column-control he-pr-nav__wrapper has-padding-top--none has-padding-bottom--none ls-search-enabled aem-GridColumn nav-content-selector aem-GridColumn--default--12 isAuthenticated">
  <div class="container">
    <div class="row">
      <div class="col-12">
        <div class="logo-v2 header__logo section">
          <a id="logo" href="https://www.pearson.com/en-us.html" aria-label="Pearson Logo">
            <picture>
              <source media="(max-width: 414px)" srcset="/content/dam/global/shared/brand/evolution/logos/logo-full-white.svg">
              <img src="/content/dam/global/shared/brand/evolution/logos/logo-full-white.svg" alt="Pearson">
            </picture>
          </a>
        </div>
        <div role="navigation" class="mega-nav navbar navbar-default section he-header-desktop-nav"></div>
        <div class="function-panel section function-panel educator-nav__search c-nav__search  aem-GridColumn aem-GridColumn--default--12">
          <div class="facet__auto_suggest search-box-input-active" data-fp-attributes="{&quot;productsTitle&quot;:&quot;PRODUCTS&quot;,&quot;suggestedTitle&quot;:&quot;SUGGESTED SEARCHES&quot;}" data-hide-tags="true" tabindex="0">
            <div class="ais-SearchBox search-box">
              <button class="closeBtn" title="Close search box"></button>
              <div id="search-learning-stages">
                <div class="search-label-container">
                  <span class="search-input-label">Search</span>
                </div>
                <div id="search-menu-radio" class="radio-ls-container">
                  <div class="ls-radio-input-group">
                    <input type="radio" value="" name="learning_stage" id="all" checked="">
                    <label for="all"> View All </label>
                  </div>
                  <div class="ls-radio-input-group">
                    <input type="radio" value="ccrProductCatalog" name="learning_stage" id="ccrProductCatalog">
                    <label for="ccrProductCatalog"> For School </label>
                  </div>
                  <div class="ls-radio-input-group">
                    <input type="radio" value="learnerProductCatalog" name="learning_stage" id="learnerProductCatalog">
                    <label for="learnerProductCatalog"> For College </label>
                  </div>
                  <div class="ls-radio-input-group">
                    <input type="radio" value="workProductCatalog" name="learning_stage" id="workProductCatalog">
                    <label for="workProductCatalog"> For Work </label>
                  </div>
                </div>
                <div id="search-menu-select" class="search-ls-menu">
                  <button id="expander" class="selected-option" data-value="">View All</button>
                  <div class="search-ls-options">
                    <button class="option" data-value=""> View All </button>
                    <button class="option" data-value="ccrProductCatalog"> For School </button>
                    <button class="option" data-value="learnerProductCatalog"> For College </button>
                    <button class="option" data-value="workProductCatalog"> For Work </button>
                  </div>
                </div>
              </div>
              <form action="" role="search" class="ais-SearchBox-form headerSearch" novalidate="">
                <input class="ais-SearchBox-input search-box-input" type="search" placeholder="What can we help you find?" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" maxlength="512" role="combobox" aria-label="What can we help you find?" aria-haspopup="listbox" aria-expanded="false" aria-autocomplete="list" aria-controls="algoliaAutosuggest" aria-activedescendant="" data-ais-min-length="3">
                <button class="ais-SearchBox-submit search-box-icon" type="submit" title="Submit the search query." aria-label="Submit the search query">
                  <svg class="ais-SearchBox-submitIcon" width="10" height="10" viewBox="0 0 40 40">
                    <path d="M26.804 29.01c-2.832 2.34-6.465 3.746-10.426 3.746C7.333 32.756 0 25.424 0 16.378 0 7.333 7.333 0 16.378 0c9.046 0 16.378 7.333 16.378 16.378 0 3.96-1.406 7.594-3.746 10.426l10.534 10.534c.607.607.61 1.59-.004 2.202-.61.61-1.597.61-2.202.004L26.804 29.01zm-10.426.627c7.323 0 13.26-5.936 13.26-13.26 0-7.32-5.937-13.257-13.26-13.257C9.056 3.12 3.12 9.056 3.12 16.378c0 7.323 5.936 13.26 13.258 13.26z"></path>
                  </svg>
                </button>
                <button class="ais-SearchBox-reset search-close-btn" type="reset" title="Clear the search query." hidden="">
                  <svg class="ais-SearchBox-resetIcon" viewBox="0 0 20 20" width="10" height="10">
                    <path d="M8.114 10L.944 2.83 0 1.885 1.886 0l.943.943L10 8.113l7.17-7.17.944-.943L20 1.886l-.943.943-7.17 7.17 7.17 7.17.943.944L18.114 20l-.943-.943-7.17-7.17-7.17 7.17-.944.943L0 18.114l.943-.943L8.113 10z"></path>
                  </svg>
                </button>
                <span class="ais-SearchBox-loadingIndicator" hidden="">
                  <svg class="ais-SearchBox-loadingIcon" width="16" height="16" viewBox="0 0 38 38" stroke="#444">
                    <g fill="none" fillrule="evenodd">
                      <g transform="translate(1 1)" strokewidth="2">
                        <circle strokeopacity=".5" cx="18" cy="18" r="18"></circle>
                        <path d="M36 18c0-9.94-8.06-18-18-18">
                          <animateTransform attributeName="transform" type="rotate" from="0 18 18" to="360 18 18" dur="1s" repeatCount="indefinite"></animateTransform>
                        </path>
                      </g>
                    </g>
                  </svg>
                </span>
              </form>
              <button class="close-recents-btn hide" aria-label="Close recent searches"></button>
            </div>
            <button class="userNav__search" aria-label="Search" aria-controls="headerSearch"></button>
          </div>
        </div>
        <section class="column-control has-padding-top--none has-padding-bottom--none he-header-icon-navigation section">
          <div class="row">
            <div class="col-12">
              <div class="parsys section">
                <div class="text text-default default-btn-type default-btn-width default-btn-size default-links default-color has-padding-top--none has-padding-bottom--none he-header-desktop-cart section">
                  <a href="/store/en-us/cart" title="Cart" class="cart-link">
                    <span class="cart-products-indicator "> 0 </span>
                  </a>
                </div>
                <div role="navigation" class="mega-nav navbar navbar-default he-header-help-nav he-icon-dropdown he-drop-down-nav on-left section" aria-label="Support">
                  <div class="navbar-header">
                    <button aria-label="Support items" title="Support" data-toggle="collapse" data-target="#Support" class="navbar-toggle" aria-expanded="false">
                      <span class="fa fa-bars"></span>
                    </button>
                  </div>
                  <div id="Support" class="navbar-collapse collapse">
                    <ul class="nav navbar-nav">
                      <li class="dropdown  mega-nav-full-width">
                        <a href="https://www.pearson.com/en-us/schools/support.html" role="link" target="_self" class="dropdown-toggle js-opacity-0"> School Support </a>
                      </li>
                      <li class="dropdown  mega-nav-full-width">
                        <a href="https://www.pearson.com/en-us/higher-education/support.html" role="link" target="_self" class="dropdown-toggle js-opacity-0"> College Support </a>
                      </li>
                      <li class="dropdown  mega-nav-full-width">
                        <a href="https://www.pearson.com/en-us/work/support.html" role="link" target="_self" class="dropdown-toggle js-opacity-0"> Work Support </a>
                      </li>
                      <li class="dropdown  mega-nav-full-width">
                        <a href="https://www.pearson.com/en-us/legal-information/global-rights-licensing.html" role="link" target="_self" class="dropdown-toggle js-opacity-0"> Global Rights Licensing </a>
                      </li>
                      <li class="dropdown  mega-nav-full-width">
                        <a href="https://www.pearson.com/en-us/global-permission-granting.html" role="link" target="_self" class="dropdown-toggle js-opacity-0"> Global Permissions </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="custom-header he-user-navigation section">
                  <div class="custom-header__container container">
                    <div id="custom-header" class="row" data-header-path="/store/en-us/commerce-header-v2">
                      <button class="usernav-signin-button">
                        <span>Sign in</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</section>`;

  block.insertAdjacentHTML('afterend', headerHTML);

  // load nav as fragment
  const navMeta = getMetadata('nav');
  const navPath = navMeta ? new URL(navMeta, window.location).pathname : '/nav';
  const fragment = await loadFragment(navPath);

  // decorate nav DOM
  block.textContent = '';
  const nav = document.createElement('nav');
  nav.id = 'nav';
  while (fragment.firstElementChild) nav.append(fragment.firstElementChild);

  const classes = ['brand', 'sections', 'tools'];
  classes.forEach((c, i) => {
    const section = nav.children[i];
    if (section) section.classList.add(`nav-${c}`);
  });

  const navBrand = nav.querySelector('.nav-brand');
  const brandLink = navBrand.querySelector('.button');
  if (brandLink) {
    brandLink.className = '';
    brandLink.closest('.button-container').className = '';
  }

  const navSections = nav.querySelector('.nav-sections');
  if (navSections) {
    navSections.querySelectorAll(':scope .default-content-wrapper > ul > li').forEach((navSection) => {
      if (navSection.querySelector('ul')) navSection.classList.add('nav-drop');
      navSection.addEventListener('click', () => {
        if (isDesktop.matches) {
          const expanded = navSection.getAttribute('aria-expanded') === 'true';
          toggleAllNavSections(navSections);
          navSection.setAttribute('aria-expanded', expanded ? 'false' : 'true');
        }
      });
    });
  }

  // hamburger for mobile
  const hamburger = document.createElement('div');
  hamburger.classList.add('nav-hamburger');
  hamburger.innerHTML = `<button type="button" aria-controls="nav" aria-label="Open navigation">
      <span class="nav-hamburger-icon"></span>
    </button>`;
  hamburger.addEventListener('click', () => toggleMenu(nav, navSections));
  nav.prepend(hamburger);
  nav.setAttribute('aria-expanded', 'false');
  // prevent mobile nav behavior on window resize
  toggleMenu(nav, navSections, isDesktop.matches);
  isDesktop.addEventListener('change', () => toggleMenu(nav, navSections, isDesktop.matches));

  const navWrapper = document.createElement('div');
  navWrapper.className = 'nav-wrapper';
  navWrapper.append(nav);
  block.append(navWrapper);
}
