export default function decorate(block) {
  const section = block.closest('.section.hero-container');
  if (!section) return;

  // ============================================================
  // STEP 1: Set hero height via JS — CSS height not picking up
  // ============================================================
  function setHeroHeight() {
    const headerEl = document.querySelector('header');
    const headerHeight = headerEl ? headerEl.offsetHeight : 120;
    const viewportHeight = window.innerHeight;
    const heroHeight = viewportHeight - headerHeight;

    block.style.height = `${heroHeight}px`;
    block.style.minHeight = '600px';
  }

  setHeroHeight();
  window.addEventListener('resize', setHeroHeight);

  // ============================================================
  // STEP 2: Force image to fill block
  // ============================================================
  const imgWrapper = block.querySelector(':scope > div:first-child');
  const picture = block.querySelector(':scope > div:first-child picture');
  const img = block.querySelector(':scope > div:first-child img');

  if (imgWrapper) {
    imgWrapper.style.cssText = `
      position: absolute;
      inset: 0;
      z-index: 0;
      padding: 0;
      margin: 0;
      width: 100%;
      height: 100%;
    `;
  }

  if (picture) {
    picture.style.cssText = `
      display: block;
      width: 100%;
      height: 100%;
    `;
  }

  if (img) {
    img.style.cssText = `
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center center;
      display: block;
    `;
  }

  // ============================================================
  // STEP 3: Apply block layout styles
  // ============================================================
  block.style.cssText = `
    position: relative;
    width: 100%;
    height: ${window.innerHeight - (document.querySelector('header')?.offsetHeight || 120)}px;
    min-height: 600px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  `;

  // ============================================================
  // STEP 4: Add overlay div (since ::after z-index may not work)
  // ============================================================
  const overlay = document.createElement('div');
  overlay.className = 'hero-overlay';
  overlay.style.cssText = `
    position: absolute;
    inset: 0;
    z-index: 1;
    background: linear-gradient(
      to right,
      rgba(10, 0, 60, 0.45) 0%,
      rgba(10, 0, 60, 0.35) 30%,
      rgba(10, 0, 60, 0.10) 60%,
      rgba(10, 0, 60, 0.00) 100%
    );
    pointer-events: none;
  `;
  block.appendChild(overlay);

  // ============================================================
  // STEP 5: Style text divs
  // ============================================================
  const titleDiv = block.querySelector(':scope > div:nth-child(2)');
  const descDiv  = block.querySelector(':scope > div:nth-child(3)');

  const textStyles = `
    position: relative;
    z-index: 2;
    padding-left: 64px;
    padding-right: 0;
    max-width: 600px;
  `;

  if (titleDiv) {
    titleDiv.style.cssText = textStyles + 'margin-bottom: 20px;';

    const h1 = titleDiv.querySelector('h1');
    if (h1) {
      h1.style.cssText = `
        font-size: clamp(2.8rem, 5vw, 4.5rem);
        font-weight: 800;
        color: #ffffff;
        margin: 0;
        line-height: 1.05;
        letter-spacing: -0.02em;
      `;
      const strong = h1.querySelector('strong');
      if (strong) {
        strong.style.color = '#ffffff';
        strong.style.fontWeight = '800';
      }
    }
  }

  if (descDiv) {
    descDiv.style.cssText = textStyles + 'margin-bottom: 0;';

    const h6 = descDiv.querySelector('h6');
    if (h6) {
      h6.style.cssText = `
        font-size: clamp(1.1rem, 1.8vw, 1.5rem);
        font-weight: 400;
        color: #cfcafc;
        margin: 0;
        line-height: 1.5;
        letter-spacing: 0;
      `;
      const strong = h6.querySelector('strong');
      if (strong) {
        strong.style.color = '#cfcafc';
        strong.style.fontWeight = '400';
      }
    }
  }

  // ============================================================
  // STEP 6: Section styles
  // ============================================================
  if (section) {
    section.style.cssText = `
      padding: 0;
      margin: 0;
      width: 100%;
    `;
  }

  const wrapper = block.closest('.hero-wrapper');
  if (wrapper) {
    wrapper.style.cssText = `
      max-width: 100%;
      margin: 0;
      padding: 0;
    `;
  }
}
