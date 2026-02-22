export default function decorate(block) {
  // ============================================================
  // DOM rows written by UE richtext fields:
  // row 0  → heading
  // row 1  → description
  // row 2  → card1 image  (media)
  // row 3  → card1 title
  // row 4  → card1 paragraph
  // row 5  → card1 link
  // row 6  → card2 image  (media)
  // row 7  → card2 title
  // row 8  → card2 paragraph
  // row 9  → card2 link
  // ============================================================

  const rows = [...block.querySelectorAll(':scope > div')];

  const getText = (index) =>
    rows[index]?.querySelector('div')?.textContent?.trim() || '';

  const getHTML = (index) =>
    rows[index]?.querySelector('div')?.innerHTML?.trim() || '';

  const getImg = (index) => {
    const img = rows[index]?.querySelector('img');
    if (img) {
      return `<img src="${img.src}" alt="${img.alt || ''}" loading="lazy">`;
    }
    return '';
  };

  // Parse link — extract href and text from richtext anchor
  function parseLink(index) {
    const div = rows[index]?.querySelector('div');
    if (!div) return { href: '#', text: 'Read more' };
    const a = div.querySelector('a');
    if (a) return { href: a.href, text: a.textContent.trim() };
    return { href: '#', text: div.textContent.trim() || 'Read more' };
  }

  const heading     = getText(0);
  const description = getHTML(1);

  const card1img    = getImg(2);
  const card1title  = getText(3);
  const card1para   = getHTML(4);
  const card1link   = parseLink(5);

  const card2img    = getImg(6);
  const card2title  = getText(7);
  const card2para   = getHTML(8);
  const card2link   = parseLink(9);

  // Build clean DOM
  block.innerHTML = `
    <div class="psc-intro">
      <h2 class="psc-heading">${heading}</h2>
      <p class="psc-description">${description}</p>
    </div>

    <div class="psc-cards">

      <div class="psc-card">
        <div class="psc-card-image">
          ${card1img}
        </div>
        <div class="psc-card-content">
          <h3 class="psc-card-title">${card1title}</h3>
          <p class="psc-card-para">${card1para}</p>
          <div class="psc-card-divider"></div>
          <a href="${card1link.href}" class="psc-card-link" target="_blank" rel="noopener">
            ${card1link.text}
            <span class="psc-link-icon">&#x2197;</span>
          </a>
        </div>
      </div>

      <div class="psc-card">
        <div class="psc-card-image">
          ${card2img}
        </div>
        <div class="psc-card-content">
          <h3 class="psc-card-title">${card2title}</h3>
          <p class="psc-card-para">${card2para}</p>
          <div class="psc-card-divider"></div>
          <a href="${card2link.href}" class="psc-card-link" target="_blank" rel="noopener">
            ${card2link.text}
            <span class="psc-link-icon">&#x2197;</span>
          </a>
        </div>
      </div>

    </div>
  `;
}
