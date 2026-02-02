export default function decorate(block) {
    // ---------------------------
    // HERO CONTENT
    // ---------------------------
  const carouselBase = `<div data-aue-resource="urn:aemconnection:/content/Pearson-RFP-Demo/index/jcr:content/root/section_963508404_301234203/card_carousel_animat" data-aue-type="component" data-aue-behavior="component" data-aue-model="card-carousel-animation" data-aue-label="card-carousel-animation" class="card-carousel-animation block" data-block-name="card-carousel-animation" data-block-status="loading">
  <div>
    <div>
      <p data-aue-prop="heroTitle" data-aue-label="Hero Title" data-aue-type="text">Where learning comes to life</p>
    </div>
  </div>
  <div>
    <div>
      <div data-aue-prop="heroDescription" data-aue-label="Hero Description" data-aue-filter="text" data-aue-type="richtext">
        <h4>
          <strong>Explore learning for every stage of life with Pearson.</strong>
        </h4>
      </div>
    </div>
  </div>
  <div>
    <div>
      <p data-aue-prop="card1Eyebrow" data-aue-label="Card 1 – Eyebrow" data-aue-type="text">Pearson+</p>
    </div>
  </div>
  <div>
    <div>
      <p data-aue-prop="card1Title" data-aue-label="Card 1 – Title" data-aue-type="text">eTextbooks &amp; study tools for quicker, simpler learning</p>
    </div>
  </div>
  <div>
    <div>
      <div data-aue-prop="card1Description" data-aue-label="Card 1 – Description" data-aue-filter="text" data-aue-type="richtext">
        <p>Join more than 1 million students who are getting&nbsp;more out of their study time.</p>
      </div>
    </div>
  </div>
  <div>
    <div>
      <p data-aue-prop="card1CtaLabel" data-aue-label="Card 1 – CTA Label" data-aue-type="text">Buy eTextbooks</p>
    </div>
  </div>
  <div>
    <div></div>
  </div>
  <div>
    <div>
      <p data-aue-prop="card2Eyebrow" data-aue-label="Card 2 – Eyebrow" data-aue-type="text">For Schools</p>
    </div>
  </div>
  <div>
    <div>
      <p data-aue-prop="card2Title" data-aue-label="Card 2 – Title" data-aue-type="text">Prepare K-12 students for what's next</p>
    </div>
  </div>
  <div>
    <div>
      <div data-aue-prop="card2Description" data-aue-label="Card 2 – Description" data-aue-filter="text" data-aue-type="richtext">
        <p>Set college students up for success</p>
      </div>
    </div>
  </div>
  <div>
    <div>
      <p data-aue-prop="card2CtaLabel" data-aue-label="Card 2 – CTA Label" data-aue-type="text">Check out K-12 programs</p>
    </div>
  </div>
  <div>
    <div></div>
  </div>
  <div>
    <div>
      <p data-aue-prop="card3Eyebrow" data-aue-label="Card 3 – Eyebrow" data-aue-type="text">Check out K-12 programs</p>
    </div>
  </div>
  <div>
    <div>
      <p data-aue-prop="card3Title" data-aue-label="Card 3 – Title" data-aue-type="text">Set college students up for success</p>
    </div>
  </div>
  <div>
    <div>
      <div data-aue-prop="card3Description" data-aue-label="Card 3 – Description" data-aue-filter="text" data-aue-type="richtext">
        <p>Set college students up for success</p>
      </div>
    </div>
  </div>
  <div>
    <div>
      <p data-aue-prop="card3CtaLabel" data-aue-label="Card 3 – CTA Label" data-aue-type="text">Explore college offerings</p>
    </div>
  </div>
  <div>
    <div></div>
  </div>
  <div>
    <div>
      <p data-aue-prop="card4Eyebrow" data-aue-label="Card 4 – Eyebrow" data-aue-type="text">For School</p>
    </div>
  </div>
  <div>
    <div>
      <p data-aue-prop="card4Title" data-aue-label="Card 4 – Title" data-aue-type="text">Prepare K-12 students for what's next</p>
    </div>
  </div>
  <div>
    <div>
      <div data-aue-prop="card4Description" data-aue-label="Card 4 – Description" data-aue-filter="text" data-aue-type="richtext">
        <p>Offer pathways for every student — from college prep to career readiness.</p>
      </div>
    </div>
  </div>
  <div>
    <div>
      <p data-aue-prop="card4CtaLabel" data-aue-label="Card 4 – CTA Label" data-aue-type="text">Check out K-12 programs</p>
    </div>
  </div>
  <div>
    <div></div>
  </div>
  <div>
    <div>
      <p data-aue-prop="card5Eyebrow" data-aue-label="Card 5 – Eyebrow" data-aue-type="text">For College</p>
    </div>
  </div>
  <div>
    <div>
      <p data-aue-prop="card5Title" data-aue-label="Card 5 – Title" data-aue-type="text">Set college students up for success</p>
    </div>
  </div>
  <div>
    <div>
      <div data-aue-prop="card5Description" data-aue-label="Card 5 – Description" data-aue-filter="text" data-aue-type="richtext">
        <p>Give them tools and resources that link what&nbsp;they're learning to real-life goals.</p>
      </div>
    </div>
  </div>
  <div>
    <div>
      <p data-aue-prop="card5CtaLabel" data-aue-label="Card 5 – CTA Label" data-aue-type="text">For College</p>
    </div>
  </div>
  <div>
    <div></div>
  </div>
  <div>
    <div>
      <p data-aue-prop="card6Eyebrow" data-aue-label="Card 6 – Eyebrow" data-aue-type="text">For College</p>
    </div>
  </div>
  <div>
    <div>
      <p data-aue-prop="card6Title" data-aue-label="Card 6 – Title" data-aue-type="text">Build employee skills &amp; expertise</p>
    </div>
  </div>
  <div>
    <div>
      <div data-aue-prop="card6Description" data-aue-label="Card 6 – Description" data-aue-filter="text" data-aue-type="richtext">
        <p>Transform careers, find new opportunities, and help people adapt to a changing economy.&nbsp;</p>
      </div>
    </div>
  </div>
  <div>
    <div></div>
  </div>
  <div>
    <div></div>
  </div>
</div>`;
  block.innerHTML = carouselBase;
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
        <video class="background-video__media" loop="loop" autoplay="autoplay" poster="/content/dam/global/shared/brand/evolution/video/waves-fucsia-3-pearsonpurple-slow-16x9-l2r/waves-fucsia-3-pearsonpurple-slow-16x9-l2r-hires-v01.png" muted="" playsinline="" data-source="/content/dam/global/shared/brand/evolution/video/waves-fucsia-3-pearsonpurple-slow-16x9-l2r/waves-fucsia-3-pearsonpurple-slow-16x9-l2r-hires-v01.mp4" src="https://www.pearson.com/content/dam/global/shared/brand/evolution/video/waves-fucsia-3-pearsonpurple-slow-16x9-l2r/waves-fucsia-3-pearsonpurple-slow-16x9-l2r-hires-v01.mp4"></video>
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
