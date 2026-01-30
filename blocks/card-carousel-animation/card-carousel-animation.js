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
        <video class="background-video__media" autoplay muted loop playsinline></video>
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
  const track = root.querySelector('.carousel__track');
  const slides = root.querySelectorAll('.carousel__slide');
  const dotsContainer = root.querySelector('.carousel__dots');

  let currentIndex = 0;
  const slideCount = slides.length;
  const speed = 200; // matches slick speed

  track.style.transitionDuration = `${speed}ms`;

  // -------------------------
  // CREATE DOTS
  // -------------------------
  slides.forEach((_, index) => {
    const dot = document.createElement('button');
    dot.className = 'carousel__dot';
    dot.type = 'button';

    if (index === 0) {
      dot.classList.add('is-active');
    }

    dot.addEventListener('click', () => {
      goToSlide(index);
    });

    dotsContainer.appendChild(dot);
  });

  const dots = dotsContainer.querySelectorAll('.carousel__dot');

  // -------------------------
  // NAVIGATION
  // -------------------------
  function goToSlide(index) {
    if (index < 0 || index >= slideCount) return;

    track.style.transform = `translateX(-${index * 100}%)`;

    dots.forEach((dot) => dot.classList.remove('is-active'));
    dots[index].classList.add('is-active');

    currentIndex = index;
  }

  // -------------------------
  // OPTIONAL AUTOPLAY (OFF)
  // -------------------------
  // Uncomment if needed later
  /*
  setInterval(() => {
    if (currentIndex < slideCount - 1) {
      goToSlide(currentIndex + 1);
    }
  }, 2000);
  */
}
const carousel = block.querySelector('.carousel-v2');
initCarousel(carousel);

}
