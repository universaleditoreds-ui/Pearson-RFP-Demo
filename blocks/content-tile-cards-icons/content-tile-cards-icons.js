export default function decorate(block) {
  // Only run this logic for the content-tile-cards-icons variant
  // identified by its parent section having container-image-left class
  const section = block.closest('.section');
  if (!section || !section.classList.contains('container-image-left')) return;

  const ul = block.querySelector('ul');
  if (!ul) return;

  const firstLi = ul.querySelector('li:first-child');
  if (!firstLi) return;

  // ============================================================
  // STEP 1: Extract intro content from li:first-child
  // The first 3 .cards-card-body divs are intro content:
  //   nth-child(1) → h2 "Benefits"
  //   nth-child(2) → h3 "Take the lead..."
  //   nth-child(3) → p description
  // ============================================================
  const allBodyDivs = [...firstLi.querySelectorAll(':scope > .cards-card-body')];
  const introDiv1 = allBodyDivs[0]; // h2 Benefits
  const introDiv2 = allBodyDivs[1]; // h3 subtitle
  const introDiv3 = allBodyDivs[2]; // p description

  // ============================================================
  // STEP 2: Build intro wrapper and move into it
  // ============================================================
  const introWrapper = document.createElement('div');
  introWrapper.className = 'cards-intro-wrapper';

  if (introDiv1) introWrapper.appendChild(introDiv1);
  if (introDiv2) introWrapper.appendChild(introDiv2);
  if (introDiv3) introWrapper.appendChild(introDiv3);

  // Insert intro wrapper BEFORE the ul (inside the block)
  block.insertBefore(introWrapper, ul);

  // ============================================================
  // STEP 3: li:first-child now only has card content:
  //   .cards-card-image  → icon image
  //   .cards-card-body   → card title (Broaden opportunities)
  //   .cards-card-body   → card paragraph
  //   .cards-card-body   → Read more link
  // Add a class so CSS can treat it like cards 2 & 3
  // ============================================================
  firstLi.classList.add('cards-card-item');

  // Also add class to li:2 and li:3 for consistency
  [...ul.querySelectorAll('li')].forEach((li) => {
    li.classList.add('cards-card-item');
  });
}
