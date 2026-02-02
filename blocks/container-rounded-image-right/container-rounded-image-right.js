export default function decorate(block) {
  const containerimgrightbase = `<div>
    <div>
      <div data-aue-prop="Title" data-aue-label="Title" data-aue-filter="text" data-aue-type="richtext">
        <h2><strong>Transform careers &amp; workplaces</strong></h2>
      </div>
    </div>

  </div>
  <div>
    <div>
      <div data-aue-prop="Description" data-aue-label="Description" data-aue-filter="text" data-aue-type="richtext">
        <p>Build smarter, future-ready teams with AI-driven data and insights from Credly<sup>®</sup> by Pearson.</p>
        <p class="button-container"><a href="https://info.credly.com/" title="Get more info" class="button">Get more
            info</a></p>
      </div>
    </div>

  </div>
  <div>

    <div>
      <div data-aue-prop="Button text" data-aue-label="ButtonText" data-aue-filter="text" data-aue-type="richtext">
        <p class="button-container"><a href="https://info.credly.com/" title="Get more info" class="button">Get more
            info</a></p>
      </div>
    </div>

  </div>
  <div>

    <div>
      <picture><img
          src="/adobe/dynamicmedia/deliver/dm-aid--14185dd8-8e56-41c0-a43b-b2dd1a8b1e4d/img2.webp?preferwebp=true&amp;width=1280&amp;quality=85"
          data-aue-prop="image" data-aue-label="Image" data-aue-type="media"></picture>
    </div>
  </div>`;
  block.innerHTML = containerimgrightbase;
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
    `<img loading="lazy" src="https://www.pearson.com/content/dam/global/shared/brand/evolution/images/2400x800-GettyImages-1162052022.jpg.transform/big-size-xl/img.jpeg" alt="" role="presentation">`,
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

