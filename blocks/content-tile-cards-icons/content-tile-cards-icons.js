export default function decorate(block) {
  // ============================================================
  // AEM EDS writes each model field as a row:
  // div:nth-child(1)  → heading
  // div:nth-child(2)  → title
  // div:nth-child(3)  → paragraph
  // div:nth-child(4)  → card1 image
  // div:nth-child(5)  → card1 title
  // div:nth-child(6)  → card1 paragraph
  // div:nth-child(7)  → card1 link
  // div:nth-child(8)  → card2 image
  // div:nth-child(9)  → card2 title
  // div:nth-child(10) → card2 paragraph
  // div:nth-child(11) → card2 link
  // div:nth-child(12) → card3 image
  // div:nth-child(13) → card3 title
  // div:nth-child(14) → card3 paragraph
  // div:nth-child(15) → card3 link
  // ============================================================

  const rows = [...block.querySelectorAll(':scope > div')];

  const getHTML = (index) =>
    rows[index]?.querySelector('div')?.innerHTML?.trim() || '';

  const getText = (index) =>
    rows[index]?.querySelector('div')?.textContent?.trim() || '';

  const getImg = (index) => {
    const img = rows[index]?.querySelector('img');
    if (!img) return '';
    return `<img src="${img.src}" alt="${img.alt || ''}" loading="lazy">`;
  };

  // ── Read all fields ──
  const heading      = getText(0);
  const title        = getText(1);
  const paragraph    = getHTML(2);

  const card1img     = getImg(3);
  const card1title   = getText(4);
  const card1para    = getHTML(5);
  const card1link    = getHTML(6);

  const card2img     = getImg(7);
  const card2title   = getText(8);
  const card2para    = getHTML(9);
  const card2link    = getHTML(10);

  const card3img     = getImg(11);
  const card3title   = getText(12);
  const card3para    = getHTML(13);
  const card3link    = getHTML(14);

  // ── Extract link href and text from richtext ──
  function parseLink(html) {
    const temp = document.createElement('div');
    temp.innerHTML = html;
    const a = temp.querySelector('a');
    if (a) return { href: a.href, text: a.textContent.trim() };
    return { href: '#', text: temp.textContent.trim() || 'Read more' };
  }

  const link1 = parseLink(card1link);
  const link2 = parseLink(card2link);
  const link3 = parseLink(card3link);

  // ── Build HTML ──
  block.innerHTML = `
    <div class="ctci-intro">
      <p class="ctci-heading">${heading}</p>
      <h2 class="ctci-title">${title}</h2>
      <p class="ctci-paragraph">${paragraph}</p>
    </div>

    <div class="ctci-cards">

      <div class="ctci-card">
        <div class="ctci-card-image">${card1img}</div>
        <div class="ctci-card-content">
          <h3 class="ctci-card-title">${card1title}</h3>
          <p class="ctci-card-para">${card1para}</p>
          <div class="ctci-card-divider"></div>
          <a href="${link1.href}" class="ctci-card-link">
            ${link1.text} <span class="ctci-arrow">›</span>
          </a>
        </div>
      </div>

      <div class="ctci-card">
        <div class="ctci-card-image">${card2img}</div>
        <div class="ctci-card-content">
          <h3 class="ctci-card-title">${card2title}</h3>
          <p class="ctci-card-para">${card2para}</p>
          <div class="ctci-card-divider"></div>
          <a href="${link2.href}" class="ctci-card-link">
            ${link2.text} <span class="ctci-arrow">›</span>
          </a>
        </div>
      </div>

      <div class="ctci-card">
        <div class="ctci-card-image">${card3img}</div>
        <div class="ctci-card-content">
          <h3 class="ctci-card-title">${card3title}</h3>
          <p class="ctci-card-para">${card3para}</p>
          <div class="ctci-card-divider"></div>
          <a href="${link3.href}" class="ctci-card-link">
            ${link3.text} <span class="ctci-arrow">›</span>
          </a>
        </div>
      </div>

    </div>
  `;
}
