export default function decorate(block) {
  const rows = [...block.children];

  const title = rows[0]?.innerHTML || '';
  const description = rows[1]?.innerHTML || '';
  const button = rows[2]?.querySelector('a');
  const image = rows[3]?.querySelector('img');

  block.innerHTML = `
    <section class="image-right-hero">
      <div class="image-right-hero__content">
        ${title}
        ${description}
        ${button ? `<a class="cta-btn" href="${button.href}">${button.textContent}</a>` : ''}
      </div>
      <div class="image-right-hero__media">
        ${image ? image.outerHTML : ''}
      </div>
    </section>
  `;
}
