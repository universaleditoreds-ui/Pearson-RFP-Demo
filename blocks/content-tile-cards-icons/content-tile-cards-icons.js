export default function decorate(block) {
  const section = block.closest('.section');

  // ============================================================
  // VARIANT: content-tile-cards-icons
  // Only runs when section has container-image-left class
  // ============================================================
  if (section && section.classList.contains('container-image-left')) {
    decorateIconCards(block);
    return;
  }

  // ============================================================
  // DEFAULT: all other card blocks — do nothing extra
  // (your existing cards CSS handles them)
  // ============================================================
}

function decorateIconCards(block) {
  const ul = block.querySelector('ul');
  if (!ul) return;

  const firstLi = ul.querySelector('li:first-child');
  if (!firstLi) return;

  // ── STEP 1: Grab the first 3 .cards-card-body divs ──
  // These are the intro content divs:
  // [0] → .cards-card-body containing h2 "Benefits"
  // [1] → .cards-card-body containing h3 "Take the lead..."
  // [2] → .cards-card-body containing p description
  const cardBodyDivs = [
    ...firstLi.querySelectorAll(':scope > .cards-card-body'),
  ];

  const introBody1 = cardBodyDivs[0]; // h2
  const introBody2 = cardBodyDivs[1]; // h3
  const introBody3 = cardBodyDivs[2]; // p

  if (!introBody1 || !introBody2 || !introBody3) {
    console.warn('cards.js: could not find intro divs in li:first-child');
    return;
  }

  // ── STEP 2: Create intro wrapper ──
  const introWrapper = document.createElement('div');
  introWrapper.className = 'cards-intro-wrapper';
  introWrapper.appendChild(introBody1);
  introWrapper.appendChild(introBody2);
  introWrapper.appendChild(introBody3);

  // ── STEP 3: Insert intro wrapper BEFORE the ul ──
  block.insertBefore(introWrapper, ul);

  // ── STEP 4: Tag all li's as card items ──
  [...ul.querySelectorAll('li')].forEach((li) => {
    li.classList.add('cards-card-item');
  });

  // ── STEP 5: Hide empty .cards-card-body divs ──
  // Cards 2 & 3 have 3 empty divs at the top
  [...ul.querySelectorAll('.cards-card-body')].forEach((div) => {
    if (!div.textContent.trim() && !div.querySelector('img')) {
      div.style.display = 'none';
    }
  });

  // ── STEP 6: Log for debug ──
  console.log('cards.js: icon cards decorated', {
    introWrapper,
    cards: ul.querySelectorAll('li.cards-card-item').length,
  });
}
