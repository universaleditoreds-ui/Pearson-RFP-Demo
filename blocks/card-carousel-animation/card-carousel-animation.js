export default function decorate(block) {
    // ---------------------------
    // HERO CONTENT
    // ---------------------------

    const bodyHtml = `<header class="header-wrapper">
  <div class="header block" data-block-name="header" data-block-status="loaded">
    <section class="column-control aem-GridColumn aem-GridColumn--default--12 he-navigation-topnav">
      <div class="container">
        <div class="row">
          <div class="col-sm-9 col-xs-12">
            <div role="navigation" class="mega-nav navbar navbar-default section">
              <div class="navbar-header">
                <button aria-label="items" data-toggle="collapse" data-target="#navbar-collapse-grid" class="navbar-toggle" aria-expanded="false">
                  <span class="fa fa-bars"></span>
                </button>
              </div>
              <div id="navbar-collapse-grid" class="navbar-collapse collapse">
                <ul class="nav navbar-nav"></ul>
              </div>
            </div>
          </div>
          <div class="col-sm-3 col-xs-12">
            <div class="locale-selection section">
              <div>
                <button class="locale-selection__button selected_en-US" aria-haspopup="true" aria-expanded="false">United States <svg class="ls-chevron" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="column-control he-pr-nav__wrapper has-padding-top--none has-padding-bottom--none ls-search-enabled aem-GridColumn nav-content-selector aem-GridColumn--default--12 isAuthenticated">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="logo-v2 header__logo section">
              <a id="logo" href="https://www.pearson.com/en-us.html" aria-label="Pearson Logo">
                <svg xmlns="http://www.w3.org/2000/svg" width="120" height="24" viewBox="0 0 120 24" fill="none">
                  <path d="M6.67175 2.11133V2.11512C6.67175 2.11512 7.13831 5.68646 7.13831 11.7824C7.13831 17.8784 6.67175 21.4535 6.67175 21.4491V21.4529C9.05632 18.9219 10.5191 15.523 10.5191 11.7831V11.7812C10.5191 8.04126 9.05632 4.64226 6.67175 2.11133Z" fill="white"></path>
                  <path d="M6.75595 8.51326C6.25593 6.62311 5.31966 4.84218 4.02289 3.22412C2.91047 1.97475 1.56004 0.88447 0.029673 0C1.51395 2.34596 2.51273 6.73359 2.51273 11.7595C2.51273 16.7854 1.51584 21.1629 0.0347248 23.5114C0.0233607 23.5379 0.0113641 23.5644 0 23.5909C0.85357 23.0998 1.65158 22.5448 2.3833 21.9337C4.90929 19.5297 6.57097 16.6446 7.03753 13.5063C7.10445 12.947 7.13918 12.3775 7.13918 11.7999C7.13918 10.6679 7.00659 9.56819 6.75658 8.51263L6.75595 8.51326Z" fill="white"></path>
                  <path d="M95.5237 7.20117C90.7741 7.20117 86.9899 10.9215 86.9899 15.6033C86.9899 20.2851 90.7621 23.9903 95.5117 23.9903C100.261 23.9903 104.033 20.2814 104.033 15.6002C104.033 10.919 100.273 7.2018 95.523 7.2018L95.5237 7.20117ZM95.5123 20.2182C92.783 20.2182 91.0999 18.0964 91.0999 15.6033C91.0999 13.1103 92.7837 10.9853 95.5123 10.9853C98.241 10.9853 99.9247 13.1071 99.9247 15.6002C99.9247 18.0932 98.241 20.2182 95.5123 20.2182Z" fill="white"></path>
                  <path d="M35.7884 7.20312C31.0779 7.20312 27.6725 11.0062 27.6719 15.6274C27.6719 20.1488 30.9308 24.0005 35.6627 24.0005C39.077 24.0005 42.1851 21.9531 43.3594 18.7644H39.2153C38.5732 19.6179 37.3156 20.3427 35.6886 20.3427C33.0957 20.3427 31.917 18.4916 31.7806 17.0781H43.6321C43.7016 16.623 43.7394 15.8673 43.7394 15.342C43.7394 10.4474 40.1383 7.20312 35.7884 7.20312ZM31.7901 13.9929C31.7901 12.241 33.5174 10.8218 35.6476 10.8218C37.7777 10.8218 39.5063 12.2416 39.5063 13.9929H31.7895H31.7901Z" fill="white"></path>
                  <path d="M112.226 7.20312C108.226 7.20312 104.993 10.4342 104.993 14.4355V23.5908H109.049L109.05 14.4411C109.05 12.3736 110.518 11.056 112.22 11.056C113.92 11.056 115.38 12.3837 115.378 14.4519L115.37 23.5908H119.461V14.438C119.461 10.4367 116.227 7.20312 112.226 7.20312Z" fill="white"></path>
                  <path d="M73.9591 7.71386C73.5115 7.50426 72.5399 7.20312 71.4306 7.20312C68.2329 7.20312 66.9898 9.66398 66.8521 9.93671V7.61221H63.0123L63.0016 23.5889L67.0548 23.5908V13.1368C67.1659 12.9209 68.3036 10.9803 70.6591 10.9803C71.5398 10.9803 72.3416 11.2517 72.5449 11.3509L73.9597 7.71323L73.9591 7.71386Z" fill="white"></path>
                  <path d="M53.0912 7.20117C48.3757 7.20117 44.5416 10.8805 44.5416 15.6734C44.5416 20.1614 47.9035 24.0086 52.4472 23.9992C54.7346 23.9947 56.539 23.0143 57.4771 21.5932V23.5907H61.5834L61.5802 15.3925C61.5783 10.7731 57.7385 7.20117 53.0918 7.20117H53.0912ZM53.0634 20.2719C50.3342 20.2719 48.6504 18.1185 48.6504 15.6254C48.6504 13.1324 50.3348 10.979 53.0634 10.979C55.7921 10.979 57.4765 13.1324 57.4765 15.6254C57.4765 18.1185 55.7921 20.2719 53.0634 20.2719Z" fill="white"></path>
                  <path d="M81.2729 14.0529C78.5784 13.4796 77.5007 13.2435 77.5007 12.3275C77.5007 11.2909 78.8821 10.7511 80.3398 10.7511C82.5533 10.7511 84.1897 11.9942 84.3715 12.1324L86.3918 9.16777C85.3577 8.47459 83.3911 7.20312 80.3032 7.20312C76.0164 7.20312 73.5239 9.64378 73.5239 12.3654C73.5239 15.2303 76.2847 16.5838 79.4528 17.2511C81.8765 17.7618 82.619 17.9582 82.619 18.8136C82.619 19.9803 81.2376 20.4512 79.8316 20.4512C77.6629 20.4512 75.8636 19.3307 74.7714 18.1621L72.515 21.092C73.4563 21.9872 75.8933 23.9992 79.7628 23.9992C83.6323 23.9992 86.6961 21.7985 86.6961 19.0699C86.6961 15.7694 84.4391 14.7252 81.2729 14.0516V14.0529Z" fill="white"></path>
                  <path d="M20.924 0H12.9211L12.9186 23.5909H16.9459L16.949 15.0909H20.924C25.606 15.0909 28.738 11.858 28.738 7.54546C28.738 3.23296 25.606 0 20.924 0ZM20.4183 11.2506H16.949V3.84028H20.4183C23.1804 3.84028 24.6293 5.32261 24.6293 7.54546C24.6293 9.76832 23.1804 11.2506 20.4183 11.2506Z" fill="white"></path>
                </svg>
              </a>
            </div>
            <div role="navigation" class="mega-nav navbar navbar-default section he-header-desktop-nav"></div>
            <div class="function-panel section function-panel educator-nav__search c-nav__search aem-GridColumn aem-GridColumn--default--12">
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
                      <button id="expander" class="selected-option" data-value="" aria-expanded="false">View All <svg class="ls-chevron" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                          <polyline points="6 9 12 15 18 9"></polyline>
                        </svg>
                      </button>
                      <div class="search-ls-options">
                        <button class="option" data-value=""> View All </button>
                        <button class="option" data-value="ccrProductCatalog"> For School </button>
                        <button class="option" data-value="learnerProductCatalog"> For College </button>
                        <button class="option" data-value="workProductCatalog"> For Work </button>
                      </div>
                    </div>
                  </div>
                  <form role="search" class="ais-SearchBox-form headerSearch">
                    <input class="ais-SearchBox-input search-box-input" type="search" placeholder="What can we help you find?">
                    <button class="ais-SearchBox-submit search-box-icon" type="submit"></button>
                  </form>
                  <button class="close-recents-btn hide" aria-label="Close recent searches"></button>
                </div>
                <button class="userNav__search" aria-label="Search"></button>
              </div>
            </div>
            <section class="column-control has-padding-top--none has-padding-bottom--none he-header-icon-navigation section">
              <div class="row">
                <div class="col-12">
                  <div class="parsys section">
                    <div class="he-header-desktop-cart section">
                      <a href="/store/en-us/cart" class="cart-link">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                          <circle cx="9" cy="21" r="1"></circle>
                          <circle cx="20" cy="21" r="1"></circle>
                          <path d="M1 1h4l2.6 13.4a2 2 0 0 0 2 1.6h9.4a2 2 0 0 0 2-1.6L23 6H6"></path>
                        </svg>
                        <span class="cart-products-indicator">0</span>
                      </a>
                    </div>
                    <div role="navigation" class="mega-nav navbar navbar-default he-header-help-nav he-icon-dropdown he-drop-down-nav on-left section" aria-label="Support">
                      <div class="navbar-header">
                        <button aria-label="Support items" title="Support" data-toggle="collapse" data-target="#Support" class="navbar-toggle" aria-expanded="false">
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <circle cx="12" cy="12" r="10"></circle>
                            <path d="M9.09 9a3 3 0 0 1 5.82 1c0 2-3 3-3 3"></path>
                            <line x1="12" y1="17" x2="12.01" y2="17"></line>
                          </svg>
                        </button>
                      </div>
                      <div id="Support" class="navbar-collapse collapse"></div>
                    </div>
                    <div class="custom-header he-user-navigation section">
                      <div class="custom-header__container container">
                        <div id="custom-header" class="row">
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
    </section>
  </div>
</header>
<main>
  <div class="section navigation-container" data-section-status="loaded" style="">
    <div class="navigation-wrapper">
      <div class="navigation block" data-block-name="navigation" data-block-status="loaded">
        <div>
          <div>
            <p>For School</p>
          </div>
        </div>
        <div>
          <div>
            <p>For College</p>
          </div>
        </div>
        <div>
          <div>
            <p>For work</p>
          </div>
        </div>
        <div>
          <div>
            <p>Explore Pearson</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="section card-carousel-animation-container" data-section-status="loaded" style="">
    <div class="card-carousel-animation-wrapper">
      <div class="card-carousel-animation block" data-block-name="card-carousel-animation" data-block-status="loaded">
        <section class="column-control has-padding-bottom--90 min-height--ideal-hero background-video--waves aem-GridColumn aem-GridColumn--default--12">
          <div class="background-video__container min-height--default">
            <div class="background-video__wrap-outer background-video--light-controls">
              <div class="background-video__wrap-inner">
                <video class="background-video__media" loop="loop" autoplay="autoplay" poster="/content/dam/global/shared/brand/evolution/video/waves-fucsia-3-pearsonpurple-slow-16x9-l2r/waves-fucsia-3-pearsonpurple-slow-16x9-l2r-hires-v01.png" muted="" playsinline="" data-source="/content/dam/global/shared/brand/evolution/video/waves-fucsia-3-pearsonpurple-slow-16x9-l2r/waves-fucsia-3-pearsonpurple-slow-16x9-l2r-hires-v01.mp4" src="/content/dam/waves-fucsia-3-pearsonpurple-slow-16x9-l2r-hires-v01.mp4"></video>
                <button type="button" aria-label="Pause background video" class="background-video__control pause is-visible"></button>
                <img loading="lazy" src="/content/dam/caraousel-bg-img.webp" alt="" role="presentation" class="background-video__fallback-image">
              </div>
            </div>
            <div class="container">
              <div class="row">
                <div class="col-12">
                  <section class="column-control d1-ccr-learner section">
                    <div class="row">
                      <div class="col-md-6 col-12">
                        <div class="content-tile vertically-centered section">
                          <div class="content-tile-container">
                            <div class="content-tile__figure">
                              <div class="content-tile__figcaption">
                                <h1 class="content-tile__title"></h1>
                                <div class="content-tile-text rte-container"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-6 col-12"></div>
                    </div>
                  </section>
                  <div class="carousel-v2 carousel section">
                    <div class="carousel__row" role="region">
                      <div class="slick-track" style="display: flex; transition: transform 200ms; transform: translateX(0%);">
                        <div class="slick-slide slick-active" style="flex: 0 0 100%;"></div>
                        <div class="slick-slide" style="flex: 0 0 100%;"></div>
                      </div>
                    </div>
                    <div class="slider-controls-dots">
                      <ul class="slick-dots">
                        <li class="slick-active">
                          <button></button>
                        </li>
                        <li>
                          <button></button>
                        </li>
                      </ul>
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
  <div class="section containerimageleft container-video-container" data-section-status="loaded" style="">
    <div class="container-video-wrapper">
      <div class="container-video block" data-block-name="container-video" data-block-status="loaded">
        <div class="col-80pct col-12">
          <div class="content-tile pad-top--0__pad-bottom--45__caption use-heading-align-center subtitle-typesize--h5 subtitle-typeweight--medium section">
            <div class="content-tile-container">
              <div class="content-tile__figure">
                <div class="content-tile__figcaption"></div>
              </div>
            </div>
          </div>
          <div class="youtube-video section">
            <iframe class="youtube-video-iframe" id="youtube-video-580907" data-related-videos="true" data-youtube-lazy-loading-enabled="true" data-js-api-enabled="true" title="Video" allow="autoplay"></iframe>
            <button class="youtube-video-play-button" type="button" aria-label="Play video">
              <img class="youtube-video-inline-img" alt="Video" loading="lazy">
              <span class="youtube-video-play-img"></span>
            </button>
          </div>
          <div class="text section">
            <p style="text-align: right;">
              <span class="minor">
                <a class="new-window" href="https://www.pearson.com/en-us/transcripts/born-to-learn.html" target="_blank" rel="noreferrer" aria-label="View transcript. Opens new tab.">View transcript</a>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="section container-image-left containerimageleft-container" data-section-status="loaded" style="">
    <div class="containerimageleft-wrapper">
      <div class="containerimageleft block" data-block-name="containerimageleft" data-block-status="loaded">
        <div>
          <div>
            <h2 id="learn-anytime-with-study-prep">
              <strong>Learn anytime with Study Prep</strong>
            </h2>
          </div>
        </div>
        <div>
          <div>
            <p>Video lessons that break down concepts, practice&nbsp;exams, and personalized tools to help students get the&nbsp;grades they want.</p>
            <p>Find all this and more in <strong>Study Prep</strong>, available in&nbsp;Pearson+ </p>
          </div>
        </div>
        <div>
          <div>
            <p class="button-container">
              <a href="https://www.pearson.com/channels?CEP=pearsonHP" title="Get started" class="button">Get started</a>
            </p>
          </div>
        </div>
        <div>
          <div>
            <picture>
              <source type="image/webp" srcset="./media_1c950d86056d4f0f35e21422c5a5591f048f98335.png?width=2000&amp;format=webply&amp;optimize=medium" media="(min-width: 600px)">
              <source type="image/webp" srcset="./media_1c950d86056d4f0f35e21422c5a5591f048f98335.png?width=750&amp;format=webply&amp;optimize=medium">
              <source type="image/png" srcset="./media_1c950d86056d4f0f35e21422c5a5591f048f98335.png?width=2000&amp;format=png&amp;optimize=medium" media="(min-width: 600px)">
              <img loading="lazy" alt="" src="./media_1c950d86056d4f0f35e21422c5a5591f048f98335.png?width=750&amp;format=png&amp;optimize=medium" width="2000" height="2000">
            </picture>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="section container-image-right-container" data-section-status="loaded" style="">
    <div class="container-image-right-wrapper">
      <div class="container-image-right block" data-block-name="container-image-right" data-block-status="loaded">
        <div>
          <div>
            <h2 id="college--career-readiness">
              <strong>College &amp; Career Readiness</strong>
            </h2>
          </div>
        </div>
        <div>
          <div>
            <h5 id="the-future-starts-here">
              <strong>The future starts here.</strong>
            </h5>
            <p>Today’s students are tomorrow’s leaders. With engaging, future-ready content, we help educators prepare students for college, careers, and beyond.</p>
          </div>
        </div>
        <div>
          <div>
            <p class="button-container">
              <a href="https://www.pearson.com/en-us/schools/college-readiness-career-education.html" title="Explore K-12 solutions" class="button">Explore K-12 solutions</a>
            </p>
          </div>
        </div>
        <div>
          <div>
            <picture>
              <source type="image/webp" srcset="./media_1fcd91c1021de80297ef4efc25be4b29ddf34b20c.avif?width=2000&amp;format=webply&amp;optimize=medium" media="(min-width: 600px)">
              <source type="image/webp" srcset="./media_1fcd91c1021de80297ef4efc25be4b29ddf34b20c.avif?width=750&amp;format=webply&amp;optimize=medium">
              <source type="image/avif" srcset="./media_1fcd91c1021de80297ef4efc25be4b29ddf34b20c.avif?width=2000&amp;format=avif&amp;optimize=medium" media="(min-width: 600px)">
              <img loading="lazy" alt="" src="./media_1fcd91c1021de80297ef4efc25be4b29ddf34b20c.avif?width=750&amp;format=avif&amp;optimize=medium" width="2400" height="800">
            </picture>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="section container-image-left-buttons-container" data-section-status="loaded" style="">
    <div class="container-image-left-buttons-wrapper">
      <div class="container-image-left-buttons block" data-block-name="container-image-left-buttons" data-block-status="loaded">
        <div>
          <div>
            <h2 id="flexible-mobile-learning">
              <strong>Flexible, mobile learning</strong>
            </h2>
          </div>
        </div>
        <div>
          <div>
            <p>
              <strong>Get interactive content, customizable experiences, and data-driven insights that enhance learning outcomes.</strong>
            </p>
          </div>
        </div>
        <div class="button-wrapper">
          <div>
            <div>
              <p class="button-container">
                <a href="https://www.pearson.com/en-us/schools/college-readiness-career-education/platforms-overview.html" title="Explore K-12 platform" class="button">Explore K-12 platform</a>
              </p>
            </div>
          </div>
          <div>
            <div>
              <p class="button-container">
                <a href="https://www.pearson.com/en-us/higher-education/educators/digital-learning-platforms.html" title="Explore college platforms" class="button">Explore college platforms</a>
              </p>
            </div>
          </div>
        </div>
        <div>
          <div>
            <picture>
              <source type="image/webp" srcset="./media_1b444ba4d429a2f91b0c61f64065aba6323560603.avif?width=2000&amp;format=webply&amp;optimize=medium" media="(min-width: 600px)">
              <source type="image/webp" srcset="./media_1b444ba4d429a2f91b0c61f64065aba6323560603.avif?width=750&amp;format=webply&amp;optimize=medium">
              <source type="image/avif" srcset="./media_1b444ba4d429a2f91b0c61f64065aba6323560603.avif?width=2000&amp;format=avif&amp;optimize=medium" media="(min-width: 600px)">
              <img loading="lazy" alt="" src="./media_1b444ba4d429a2f91b0c61f64065aba6323560603.avif?width=750&amp;format=avif&amp;optimize=medium" width="1493" height="786">
            </picture>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="section container-rounded-image-right-container" data-section-status="loaded" style="">
    <div class="container-rounded-image-right-wrapper">
      <div class="container-rounded-image-right block" data-block-name="container-rounded-image-right" data-block-status="loaded">
        <section class="column-control aem-GridColumn aem-GridColumn--default--12">
          <div class="container">
            <div class="row">
              <div class="col-12">
                <div class="content-tile content-tile-color-block--half-img bgcolor--background-light use-button-secondary section">
                  <div class="content-tile-container">
                    <div class="content-tile__figure">
                      <picture>
                        <img loading="lazy" src="" alt="" role="presentation">
                      </picture>
                      <div class="content-tile__figcaption">
                        <h2 class="content-tile__title"></h2>
                        <div class="content-tile-text rte-container"></div>
                      </div>
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
  <div class="section container-bgimage-right-container" data-section-status="loaded" style="">
    <div class="container-bgimage-right-wrapper">
      <div class="container-bgimage-right block" data-block-name="container-bgimage-right" data-block-status="loaded">
        <section class="column-control bgcolor--background-medium-gray has-padding-top--none has-padding-bottom--none aem-GridColumn aem-GridColumn--default--12">
          <div class="container">
            <div class="row">
              <div class="col-10pct col-12"></div>
              <div class="col-80pct col-12">
                <div class="content-tile content-tile-landscape--60-40 vertically-centered image-behavior--mobile-hidden pad-eq-vertical--60__caption pad-eq-horizontal--30__caption color--text-secondary-inverse title-typesize--h1 title-typeweight--bold title-color--text-brand-03 subtitle-typesize--h5 subtitle-typeweight--semibold subtitle-color--text-secondary-inverse section">
                  <div class="content-tile-container">
                    <div class="content-tile__figure">
                      <picture style="--original-image-ratio: 1">
                        <img loading="lazy" src="" alt="" role="presentation">
                      </picture>
                      <div class="content-tile__figcaption">
                        <h2 class="content-tile__title"></h2>
                        <p class="content-tile-subtitle"></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-10pct col-12"></div>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
  <div class="section columns-container-container" data-section-status="loaded" style="">
    <div class="columns-container-wrapper">
      <div class="columns-container block" data-block-name="columns-container" data-block-status="loaded">
        <div>
          <div>
            <h2 id="about-pearson">
              <strong>About Pearson</strong>
            </h2>
          </div>
        </div>
        <div>
          <div>
            <p>
              <strong>We create meaningful learning experiences for people of all ages. Our mission? To help students, educators, and businesses make progress toward their personal and professional goals.</strong>
            </p>
          </div>
        </div>
        <div>
          <div>
            <picture>
              <source type="image/webp" srcset="./media_1b1eeac38c737fa519e78cd32b924079d825d468a.avif?width=2000&amp;format=webply&amp;optimize=medium" media="(min-width: 600px)">
              <source type="image/webp" srcset="./media_1b1eeac38c737fa519e78cd32b924079d825d468a.avif?width=750&amp;format=webply&amp;optimize=medium">
              <source type="image/avif" srcset="./media_1b1eeac38c737fa519e78cd32b924079d825d468a.avif?width=2000&amp;format=avif&amp;optimize=medium" media="(min-width: 600px)">
              <img loading="lazy" alt="" src="./media_1b1eeac38c737fa519e78cd32b924079d825d468a.avif?width=750&amp;format=avif&amp;optimize=medium" width="800" height="800">
            </picture>
          </div>
        </div>
        <div>
          <div>
            <h3 id="purpose-driven">
              <strong>Purpose driven</strong>
            </h3>
          </div>
        </div>
        <div>
          <div>
            <p>The right learning solutions make a big difference at every age. We help people realize the lives they imagine through learning.</p>
          </div>
        </div>
        <div>
          <div>
            <p class="button-container">
              <strong>
                <a href="https://plc.pearson.com/en-GB" title="Get to know Pearson" class="button primary">
                  <u>Get to know Pearson</u>
                </a>
              </strong>
            </p>
          </div>
        </div>
        <div>
          <div>
            <h3 id="digital-first">
              <strong>Digital first</strong>
            </h3>
          </div>
        </div>
        <div>
          <div>
            <p>Flexible, affordable tech solutions fit the way you live and learn. That's why we focus on adaptability and innovation.</p>
          </div>
        </div>
        <div>
          <div>
            <p class="button-container">
              <strong>
                <a href="https://plc.pearson.com/en-GB/sustainability/products" title="Learn how we’re growing" class="button primary">Learn how we’re growing</a>
              </strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="section" data-section-status="loaded" style=""></div>
</main>
<footer class="footer-wrapper">
  <div class="footer block" data-block-name="footer" data-block-status="loaded">
    <div>
      <div class="section" data-section-status="loaded" style="">
        <div class="default-content-wrapper">
          <h3 id="explore">
            <strong>Explore</strong>
          </h3>
          <ul>
            <li>
              <a href="https://www.pearson.com/en-us/schools.html" title="School">School</a>
            </li>
            <li>
              <a href="https://www.pearson.com/en-us/higher-education.html" title="College">College</a>
            </li>
            <li>
              <a href="https://www.pearson.com/en-us/work.html" title="Work">Work</a>
            </li>
          </ul>
          <h3 id="support">
            <strong>Support</strong>
          </h3>
          <ul>
            <li>
              <a href="https://www.pearson.com/en-us/schools/support.html" title="School Support">School Support</a>
            </li>
            <li>
              <a href="https://www.pearson.com/en-us/higher-education/support.html" title="College Support">College Support</a>
            </li>
            <li>
              <a href="https://www.pearson.com/en-us/work/support.html" title="Work Support">Work Support</a>
            </li>
            <li>
              <a href="https://www.pearson.com/en-us/global-permission-granting.html" title="Global Permissions">Global Permissions</a>
            </li>
            <li>
              <a href="https://www.pearson.com/en-us/legal-information/global-rights-licensing.html" title="Global Rights Licensing​">Global Rights Licensing​</a>
            </li>
            <li>
              <a href="https://www.pearson.com/en-us/report-piracy.html" title="Report Piracy">Report Piracy</a>
            </li>
          </ul>
          <h3 id="insights">
            <strong>Insights</strong>
          </h3>
          <ul>
            <li>
              <a href="https://www.pearson.com/en-us/schools/insights-and-events.html" title="PreK-12 Blog &amp; Events">PreK-12 Blog &amp; Events</a>
            </li>
            <li>
              <a href="https://www.pearson.com/en-us/higher-education/insights-and-events/teaching-and-learning-blog.html" title="Teaching &amp; Learning Blog">Teaching &amp; Learning Blog</a>
            </li>
            <li>
              <a href="https://www.pearson.com/en-us/higher-education/insights-and-events/students-blog.html" title="College Student Blog">College Student Blog</a>
            </li>
            <li>
              <a href="https://www.pearson.com/en-us/higher-education/insights-and-events/webinars-events.html" title="College Events">College Events</a>
            </li>
            <li>
              <a href="https://www.pearson.com/en-us/work/insights-and-events.html" title="Work Blog &amp; Events">Work Blog &amp; Events</a>
            </li>
            <li>
              <a href="https://www.pearson.com/en-us/efficacy/product-evidence.html" title="Product Evidence">Product Evidence</a>
            </li>
          </ul>
          <h3 id="major-businesses">
            <strong>Major Businesses</strong>
          </h3>
          <ul>
            <li>
              <a href="https://www.pearsonassessments.com/" title="Assessments">Assessments</a>
            </li>
            <li>
              <a href="https://www.pearson.com/en-us/higher-education.html" title="Higher Education">Higher Education</a>
            </li>
            <li>
              <a href="https://www.pearson.com/international-schools" title="International Schools">International Schools</a>
            </li>
            <li>
              <a href="https://www.pearson.com/languages" title="Languages">Languages</a>
            </li>
            <li>
              <a href="https://home.pearsonvue.com/" title="Pearson VUE">Pearson VUE</a>
            </li>
            <li>
              <a href="http://www.connectionseducation.com/" title="Virtual Schools">Virtual Schools</a>
            </li>
            <li>
              <a href="https://www.pearson.com/en-us/work.html" title="Workforce &amp; Career Development">Workforce &amp; Career Development</a>
            </li>
          </ul>
          <h3 id="about-pearson">
            <strong>About Pearson</strong>
          </h3>
          <ul>
            <li>
              <a href="https://plc.pearson.com/en-GB/company" title="Our Company">Our Company</a>
            </li>
            <li>
              <a href="https://plc.pearson.com/en-GB/investors" title="Investor Relations">Investor Relations</a>
            </li>
            <li>
              <a href="https://pearson.jobs/" title="Careers">Careers</a>
            </li>
            <li>
              <a href="https://plc.pearson.com/en-GB/careers/our-employee-experience" title="Our Employee Experience">Our Employee Experience</a>
            </li>
            <li>
              <a href="https://www.pearson.com/en-us/efficacy.html" title="Efficacy &amp; Research">Efficacy &amp; Research</a>
            </li>
            <li>
              <a href="https://www.pearson.com/en-us/power-of-learning.html" title="Power of Learning">Power of Learning</a>
            </li>
          </ul>
          <p>
            <picture>
              <source type="image/webp" srcset="https://main--pearson-rfp-demo--universaleditoreds-ui.aem.live/media_11fce71e48ff51a1020ded351a153583428896a21.png?width=2000&amp;format=webply&amp;optimize=medium" media="(min-width: 600px)">
              <source type="image/webp" srcset="https://main--pearson-rfp-demo--universaleditoreds-ui.aem.live/media_11fce71e48ff51a1020ded351a153583428896a21.png?width=750&amp;format=webply&amp;optimize=medium">
              <source type="image/png" srcset="https://main--pearson-rfp-demo--universaleditoreds-ui.aem.live/media_11fce71e48ff51a1020ded351a153583428896a21.png?width=2000&amp;format=png&amp;optimize=medium" media="(min-width: 600px)">
              <img loading="lazy" alt="" src="https://main--pearson-rfp-demo--universaleditoreds-ui.aem.live/media_11fce71e48ff51a1020ded351a153583428896a21.png?width=750&amp;format=png&amp;optimize=medium" width="212" height="77">
            </picture>
          </p>
          <p>
            <picture>
              <source type="image/webp" srcset="https://main--pearson-rfp-demo--universaleditoreds-ui.aem.live/media_104f7d3fd97b5583720389844d92942d9766eadcc.png?width=2000&amp;format=webply&amp;optimize=medium" media="(min-width: 600px)">
              <source type="image/webp" srcset="https://main--pearson-rfp-demo--universaleditoreds-ui.aem.live/media_104f7d3fd97b5583720389844d92942d9766eadcc.png?width=750&amp;format=webply&amp;optimize=medium">
              <source type="image/png" srcset="https://main--pearson-rfp-demo--universaleditoreds-ui.aem.live/media_104f7d3fd97b5583720389844d92942d9766eadcc.png?width=2000&amp;format=png&amp;optimize=medium" media="(min-width: 600px)">
              <img loading="lazy" alt="" src="https://main--pearson-rfp-demo--universaleditoreds-ui.aem.live/media_104f7d3fd97b5583720389844d92942d9766eadcc.png?width=750&amp;format=png&amp;optimize=medium" width="301" height="52">
            </picture>
          </p>
        </div>
      </div>
    </div>
  </div>
</footer>`;
    const bodyEle = document.querySelector('body');
    bodyEle.innerHTML = bodyHtml;
    const heroTitle =
        block.querySelector('[data-aue-prop="heroTitle"]')?.textContent.trim() || '';

    const heroDescription =
        block.querySelector('[data-aue-prop="heroDescription"]')?.innerHTML || '';

    // ---------------------------
    // CARDS (fixed 6)
    // ---------------------------
    const cards = [];

    for (let i = 1; i <= 6; i += 1) {
        const titleEl = block.querySelector(`[data-aue-prop="card${i}Title"]`);
        if (!titleEl) continue;

        cards.push({
            eyebrow: block.querySelector(
                `[data-aue-prop="card${i}Eyebrow"]`,
            )?.textContent.trim(),
            title: titleEl.textContent.trim(),
            description: block.querySelector(
                `[data-aue-prop="card${i}Description"]`,
            )?.innerHTML,
            ctaLabel: block.querySelector(
                `[data-aue-prop="card${i}CtaLabel"]`,
            )?.textContent.trim(),
        });
    }

    // ---------------------------
    // BUILD CARD HTML
    // ---------------------------
    const buildCard = (card, theme = 'dark') => `
    <div class="carousel__item carousel__item--extend-1">
      <div class="content-tile promocard--${theme}-theme">
        <div class="content-tile-container">
          <div class="content-tile__figure">
            <div class="content-tile__figcaption">
              <p class="content-tile__eyebrow">${card.eyebrow || ''}</p>
              <h2 class="content-tile__title">${card.title}</h2>
              <div class="content-tile-text rte-container">
                ${card.description || ''}
                ${card.ctaLabel
            ? `<p><a href="#">${card.ctaLabel}</a></p>`
            : ''
        }
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;

    const slide1 = cards.slice(0, 3).map((c) => buildCard(c, 'medium')).join('');
    const slide2 = cards.slice(3, 6).map((c) => buildCard(c)).join('');

    // ---------------------------
    // FINAL HTML
    // ---------------------------
    block.innerHTML = `
<section class="column-control has-padding-bottom--90 min-height--ideal-hero background-video--waves aem-GridColumn aem-GridColumn--default--12">

  <div class="background-video__container min-height--default">
    <div class="background-video__wrap-outer background-video--light-controls">
      <div class="background-video__wrap-inner">
        <video class="background-video__media" loop="loop" autoplay="autoplay" poster="/content/dam/global/shared/brand/evolution/video/waves-fucsia-3-pearsonpurple-slow-16x9-l2r/waves-fucsia-3-pearsonpurple-slow-16x9-l2r-hires-v01.png" muted="" playsinline="" data-source="/content/dam/global/shared/brand/evolution/video/waves-fucsia-3-pearsonpurple-slow-16x9-l2r/waves-fucsia-3-pearsonpurple-slow-16x9-l2r-hires-v01.mp4" src="/content/dam/waves-fucsia-3-pearsonpurple-slow-16x9-l2r-hires-v01.mp4"></video>
        <button type="button" aria-label="Pause background video"
          class="background-video__control pause is-visible"></button>
    
      </div>
    </div>

    <div class="container">
      <div class="row">
        <div class="col-12">

          <section class="column-control d1-ccr-learner section">
            <div class="row">
              <div class="col-md-6 col-12">
                <div class="content-tile vertically-centered section">
                  <div class="content-tile-container">
                    <div class="content-tile__figure">
                      <div class="content-tile__figcaption">
                        <h1 class="content-tile__title">${heroTitle}</h1>
                        <div class="content-tile-text rte-container">
                          ${heroDescription}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-6 col-12"></div>
            </div>
          </section>

          <div class="carousel-v2 carousel section">
            <div class="carousel__row" role="region">
              <div class="slick-track">

                <div class="slick-slide slick-active">
                  ${slide1}
                </div>

                <div class="slick-slide">
                  ${slide2}
                </div>

              </div>
            </div>

            <div class="slider-controls-dots">
              <ul class="slick-dots">
                <li class="slick-active"><button></button></li>
                <li><button></button></li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</section>
`;

    function initCarousel(root) {
        if (!root) return;

        const track = root.querySelector('.slick-track');
        const slides = root.querySelectorAll('.slick-slide');
        const dots = root.querySelectorAll('.slick-dots li');

        if (!track || slides.length === 0 || dots.length === 0) {
            console.warn('Carousel init skipped – missing elements');
            return;
        }

        let currentIndex = 0;
        const slideCount = slides.length;
        const speed = 200; // matches slick speed

        // -------------------------
        // SETUP TRACK
        // -------------------------
        track.style.display = 'flex';
        track.style.transition = `transform ${speed}ms ease`;

        slides.forEach((slide) => {
            slide.style.flex = '0 0 100%';
        });

        // -------------------------
        // NAVIGATION
        // -------------------------
        function goToSlide(index) {
            if (index < 0 || index >= slideCount) return;

            track.style.transform = `translateX(-${index * 100}%)`;

            dots.forEach((dot) => dot.classList.remove('slick-active'));
            dots[index].classList.add('slick-active');

            currentIndex = index;
        }

        // -------------------------
        // DOT CLICK HANDLERS
        // -------------------------
        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                goToSlide(index);
            });
        });

        // -------------------------
        // INIT
        // -------------------------
        goToSlide(0);
    }

    const carousel = block.querySelector('.carousel-v2');
    initCarousel(carousel);


}
