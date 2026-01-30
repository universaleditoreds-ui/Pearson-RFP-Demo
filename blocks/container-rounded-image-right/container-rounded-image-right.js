export default function decorate(block) {
  /* extract UE content */
  const titleEl = block.querySelector('[data-aue-prop="Title"]');
  const descEl = block.querySelector('[data-aue-prop="Description"]');
  const buttonEl = block.querySelector('[data-aue-prop="ButtonText"]');
  const imageEl = block.querySelector('[data-aue-prop="image"]');

  const titleHTML = titleEl ? titleEl.innerHTML : '';
  const descHTML = descEl ? descEl.innerHTML : '';
  const buttonHTML = buttonEl ? buttonEl.innerHTML : '';
  const imgSrc = imageEl ? imageEl.getAttribute('src') : '';

  /* build final HTML */
  block.innerHTML = [
    '<section class="column-control aem-GridColumn aem-GridColumn--default--12">',
    '<div class="container">',
    '<div class="row">',
    '<div class="col-12">',

    '<div class="content-tile content-tile-color-block--half-img ',
    'bgcolor--background-light use-button-secondary section">',
    '<div class="content-tile-container">',
    '<div class="content-tile__figure">',

    '<picture>',
    `<img loading="lazy" src="${imgSrc}" alt="" role="presentation">`,
    '</picture>',

    '<div class="content-tile__figcaption">',
    `<h2 class="content-tile__title">${titleHTML}</h2>`,
    '<div class="content-tile-text rte-container">',
    descHTML,
    buttonHTML,
    '</div>',
    '</div>',

    '</div>',
    '</div>',
    '</div>',

    '</div>',
    '</div>',
    '</div>',
    '</section>',
  ].join('');
}

