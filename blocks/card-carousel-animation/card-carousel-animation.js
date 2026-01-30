export default function decorate(block) {
    // ---------------------------
    // HERO CONTENT
    // ---------------------------
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
