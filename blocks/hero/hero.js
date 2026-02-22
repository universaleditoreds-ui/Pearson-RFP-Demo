export default function decorate(block) {
  const section = block.closest('.section.hero-container');

  // ============================================================
  // STEP 1: Fix section + wrapper
  // ============================================================
  if (section) {
    section.style.cssText = 'padding: 0 !important; margin: 0 !important; width: 100%;';
  }

  const wrapper = block.closest('.hero-wrapper');
  if (wrapper) {
    wrapper.style.cssText = 'max-width: 100%; margin: 0; padding: 0;';
  }

  // ============================================================
  // STEP 2: Set block layout
  // ============================================================
  block.style.position = 'relative';
  block.style.width = '100%';
  block.style.display = 'flex';
  block.style.flexDirection = 'column';
  block.style.justifyContent = 'center';
  block.style.overflow = 'hidden';

  // ============================================================
  // STEP 3: Height calculation — wait for full page load
  // so header renders completely before measuring
  // ============================================================
  function setHeight() {
    const header = document.querySelector('header');
    // Use getBoundingClientRect for accurate height
    const headerHeight = header ? header.getBoundingClientRect().height : 0;
    const vh = window.innerHeight;
    const heroHeight = Math.max(vh - headerHeight, 600);

    block.style.height = heroHeight + 'px';
    block.style.minHeight = '600px';
  }

  // Run after everything loads to get accurate header height
  if (document.readyState === 'complete') {
    setHeight();
  } else {
    window.addEventListener('load', setHeight);
  }

  // Also run on resize
  window.addEventListener('resize', setHeight);

  // ============================================================
  // STEP 4: Fix image — extra <div> wraps the <picture>
  // Structure: div:first-child > div > picture > img
  // ============================================================
  const imgOuterDiv = block.querySelector(':scope > div:first-child');
  const imgInnerDiv = block.querySelector(':scope > div:first-child > div');
  const picture     = block.querySelector(':scope > div:first-child picture');
  const img         = block.querySelector(':scope > div:first-child img');

  if (imgOuterDiv) {
    imgOuterDiv.style.cssText = `
      position: absolute !important;
      inset: 0 !important;
      z-index: 0 !important;
      width: 100% !important;
      height: 100% !important;
      padding: 0 !important;
      margin: 0 !important;
    `;
  }

  // THIS is the fix — the extra inner div must also be full size
  if (imgInnerDiv) {
    imgInnerDiv.style.cssText = `
      width: 100% !important;
      height: 100% !important;
      display: block !important;
      padding: 0 !important;
      margin: 0 !important;
    `;
  }

  if (picture) {
    picture.style.cssText = `
      display: block !important;
      width: 100% !important;
      height: 100% !important;
    `;
  }

  if (img) {
    img.style.cssText = `
      width: 100% !important;
      height: 100% !important;
      object-fit: cover !important;
      object-position: center center !important;
      display: block !important;
    `;
  }

  // ============================================================
  // STEP 5: Overlay div
  // ============================================================
  // Remove existing overlay if JS ran before
  const existingOverlay = block.querySelector('.hero-overlay');
  if (existingOverlay) existingOverlay.remove();

  const overlay = document.createElement('div');
  overlay.className = 'hero-overlay';
  overlay.style.cssText = `
    position: absolute;
    inset: 0;
    z-index: 1;
    pointer-events: none;
    background: linear-gradient(
      to right,
      rgba(10, 0, 60, 0.45) 0%,
      rgba(10, 0, 60, 0.35) 30%,
      rgba(10, 0, 60, 0.10) 60%,
      rgba(10, 0, 60, 0.00) 100%
    );
  `;
  block.appendChild(overlay);

  // ============================================================
  // STEP 6: Text divs
  // ============================================================
  const titleDiv = block.querySelector(':scope > div:nth-child(2)');
  const descDiv  = block.querySelector(':scope > div:nth-child(3)');

  const sharedTextStyle = `
    position: relative !important;
    z-index: 2 !important;
    padding-left: 64px !important;
    padding-right: 40px !important;
    max-width: 620px !important;
  `;

  if (titleDiv) {
    titleDiv.style.cssText = sharedTextStyle + 'margin-bottom: 16px !important;';

    const h1 = titleDiv.querySelector('h1');
    if (h1) {
      h1.style.cssText = `
        font-size: clamp(2.8rem, 5vw, 4.5rem) !important;
        font-weight: 800 !important;
        color: #ffffff !important;
        margin: 0 !important;
        line-height: 1.05 !important;
        letter-spacing: -0.02em !important;
      `;
      const strong = h1.querySelector('strong');
      if (strong) {
        strong.style.cssText = 'color: #ffffff !important; font-weight: 800 !important;';
      }
    }
  }

  if (descDiv) {
    descDiv.style.cssText = sharedTextStyle + 'margin-bottom: 0 !important;';

    const h6 = descDiv.querySelector('h6');
    if (h6) {
      h6.style.cssText = `
        font-size: clamp(1.1rem, 1.8vw, 1.5rem) !important;
        font-weight: 400 !important;
        color: #cfcafc !important;
        margin: 0 !important;
        line-height: 1.5 !important;
        letter-spacing: 0 !important;
      `;
      const strong = h6.querySelector('strong');
      if (strong) {
        strong.style.cssText = 'color: #cfcafc !important; font-weight: 400 !important;';
      }
    }
  }
}
