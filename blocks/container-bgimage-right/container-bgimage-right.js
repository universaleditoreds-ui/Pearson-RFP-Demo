export default function decorate(block) {
  /* extract authored content */
  const titleEl = block.querySelector('[data-aue-prop="Title"]');
  const descEl = block.querySelector('[data-aue-prop="Description"]');
  const imageEl = block.querySelector('[data-aue-prop="image"]');

  const titleText = titleEl
    ? titleEl.textContent.trim()
    : '';

  const descText = descEl
    ? descEl.textContent.trim()
    : '';

  const imageSrc = imageEl
    ? imageEl.getAttribute('src')
    : '';

  /* rebuild AEM-compatible markup */
  block.innerHTML = [
    '<section class="column-control ',
    'bgcolor--background-medium-gray ',
    'has-padding-top--none ',
    'has-padding-bottom--none ',
    'aem-GridColumn aem-GridColumn--default--12">',

    '<div class="container">',
    '<div class="row">',

    '<div class="col-10pct col-12"></div>',

    '<div class="col-80pct col-12">',
    '<div class="content-tile ',
    'content-tile-landscape--60-40 ',
    'vertically-centered ',
    'image-behavior--mobile-hidden ',
    'pad-eq-vertical--60__caption ',
    'pad-eq-horizontal--30__caption ',
    'color--text-secondary-inverse ',
    'title-typesize--h1 ',
    'title-typeweight--bold ',
    'title-color--text-brand-03 ',
    'subtitle-typesize--h5 ',
    'subtitle-typeweight--semibold ',
    'subtitle-color--text-secondary-inverse ',
    'section">',

    '<div class="content-tile-container">',
    '<div class="content-tile__figure">',

    '<picture style="--original-image-ratio: 1">',
    `<img loading="lazy" src="${imageSrc}" alt="" role="presentation">`,
    '</picture>',

    '<div class="content-tile__figcaption">',
    `<h2 class="content-tile__title">${titleText}</h2>`,
    `<p class="content-tile-subtitle">${descText}</p>`,
    '</div>',

    '</div>',
    '</div>',
    '</div>',
    '</div>',

    '<div class="col-10pct col-12"></div>',

    '</div>',
    '</div>',
    '</section>',
  ].join('');
}
