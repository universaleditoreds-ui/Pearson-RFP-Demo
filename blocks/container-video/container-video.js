/**
 * EDS block: container-video
 * Converts model-driven authoring HTML into semantic AEM-like structure:
 * - content-tile (title + subtitle)
 * - youtube-video (iframe + play button with thumbnail)
 * - transcript link (right aligned)
 */

function getText(el) {
  return (el?.textContent || '').trim();
}

function getFirstLink(el) {
  return el?.querySelector('a[href]') || null;
}

function createEl(tag, className, attrs = {}) {
  const el = document.createElement(tag);

  if (className) {
    el.className = className;
  }

  Object.entries(attrs).forEach(([k, v]) => {
    if (v === undefined || v === null || v === '') return;
    el.setAttribute(k, v);
  });

  return el;
}

function safeIdFromString(str) {
  // Create a stable-ish id from a string (no external deps)
  const base = (str || 'youtube-video')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');

  // Add small randomness to avoid duplicate ids in same page
  const rand = Math.floor(Math.random() * 1000000);
  return `${base}-${rand}`;
}

function buildYouTubeEmbedSrc(videoId, { related = true } = {}) {
  const params = new URLSearchParams({
    autoplay: '1',
    rel: related ? '1' : '0',
    modestbranding: '1',
    playsinline: '1',
    enablejsapi: '1',
  });

  return `https://www.youtube.com/embed/${encodeURIComponent(videoId)}?${params.toString()}`;
}

export default function decorate(block) {
  const vedeoBaseHTML = `<div class="col-80pct col-12">
    <div class="content-tile pad-top--0__pad-bottom--45__caption use-heading-align-center subtitle-typesize--h5 subtitle-typeweight--medium section">
      <div class="content-tile-container">
        <div class="content-tile__figure">
          <div class="content-tile__figcaption">
            <h2 class="content-tile__title">What if learning is more powerful than we realize?</h2>
            <p class="content-tile-subtitle">When we learn, the benefits extend far beyond what we might expect. Each new skill or insight can transform many parts of our lives.</p>
          </div>
        </div>
      </div>
    </div>
    <div class="youtube-video section">
      <iframe class="youtube-video-iframe" id="what-if-learning-is-more-powerful-than-we-realize-352922" data-video-id="TXj6aLD6muM" data-related-videos="true" data-youtube-lazy-loading-enabled="true" data-js-api-enabled="true" title="What if learning is more powerful than we realize?" allow="autoplay"></iframe>
      <button class="youtube-video-play-button" type="button" aria-label="Play What if learning is more powerful than we realize?">
        <img class="youtube-video-inline-img" src="https://img.youtube.com/vi/TXj6aLD6muM/maxresdefault.jpg" alt="What if learning is more powerful than we realize?" loading="lazy">
        <span class="youtube-video-play-img"></span>
      </button>
    </div>
    <div class="text section">
      <p style="text-align: right;">
        <span class="minor">
          <a class="new-window" href="https://www.pearson.com/en-us/transcripts/born-to-learn.html" target="_blank" rel="noreferrer" aria-label="View Transcript. Opens new tab.">View Transcript</a>
        </span>
      </p>
    </div>
  </div>`;
  block.innerHTML = vedeoBaseHTML;
  // Grab authored fields
  const titleEl = block.querySelector('[data-aue-prop="video-title"]');
  const descEl = block.querySelector('[data-aue-prop="video-desc"]');
  const videoIdEl = block.querySelector('[data-aue-prop="video-id"]');
  const transcriptTitleEl = block.querySelector('[data-aue-prop="video-transcript-title"]');

  const transcriptAnchor = getFirstLink(block);

  const titleText = getText(titleEl) || '';
  const descText = getText(descEl) || '';
  const videoId = getText(videoIdEl) || '';
  const transcriptText = getText(transcriptTitleEl) || 'View transcript';
  const transcriptHref = transcriptAnchor?.getAttribute('href') || '';

  // Root wrapper to match the target markup
  const root = createEl('div', 'col-80pct col-12');

  /**
   * 1) content-tile section
   */
  const contentTile = createEl(
    'div',
    'content-tile pad-top--0__pad-bottom--45__caption use-heading-align-center subtitle-typesize--h5 subtitle-typeweight--medium section',
  );

  const contentTileContainer = createEl('div', 'content-tile-container');
  const figure = createEl('div', 'content-tile__figure');
  const figcaption = createEl('div', 'content-tile__figcaption');

  if (titleText) {
    const h2 = createEl('h2', 'content-tile__title');
    h2.textContent = titleText;
    figcaption.appendChild(h2);
  }

  if (descText) {
    const p = createEl('p', 'content-tile-subtitle');
    p.textContent = descText;
    figcaption.appendChild(p);
  }

  figure.appendChild(figcaption);
  contentTileContainer.appendChild(figure);
  contentTile.appendChild(contentTileContainer);

  /**
   * 2) youtube-video section (iframe + button thumbnail overlay)
   */
  const ytSection = createEl('div', 'youtube-video section');

  // Create iframe with empty src initially (lazy until click)
  const iframeId = safeIdFromString(titleText || videoId);
  const iframe = createEl(
    'iframe',
    'youtube-video-iframe',
    {
      id: iframeId,
      'data-video-id': videoId,
      'data-related-videos': 'true',
      'data-youtube-lazy-loading-enabled': 'true',
      'data-js-api-enabled': 'true',
      src: '', // set on click
      title: titleText || 'Video',
      allowfullscreen: '',
      allow: 'autoplay',
    },
  );

  // Play button overlay
  const playBtn = createEl(
    'button',
    'youtube-video-play-button',
    {
      type: 'button',
      'aria-label': `Play ${titleText || 'video'}`,
    },
  );

  // Thumbnail image (maxresdefault; you can switch to hqdefault if needed)
  const poster = createEl(
    'img',
    'youtube-video-inline-img',
    {
      src: videoId ? `https://img.youtube.com/vi/${encodeURIComponent(videoId)}/maxresdefault.jpg` : '',
      alt: titleText || 'Video',
      loading: 'lazy',
    },
  );

  const playIcon = createEl('span', 'youtube-video-play-img');

  playBtn.appendChild(poster);
  playBtn.appendChild(playIcon);

  // Click-to-play handler: inject src & remove overlay
  playBtn.addEventListener('click', () => {
    if (!videoId) return;

    const src = buildYouTubeEmbedSrc(videoId, { related: true });
    iframe.setAttribute('src', src);

    playBtn.classList.add('is-hidden');
    iframe.classList.add('is-active');
  });

  ytSection.appendChild(iframe);
  ytSection.appendChild(playBtn);

  /**
   * 3) transcript section (right aligned link)
   */
  const transcriptSection = createEl('div', 'text section');

  if (transcriptHref) {
    const p = createEl('p', '');
    p.style.textAlign = 'right';

    const span = createEl('span', 'minor');

    const a = createEl(
      'a',
      'new-window',
      {
        href: transcriptHref,
        target: '_blank',
        rel: 'noreferrer',
        'aria-label': `${transcriptText}. Opens new tab.`,
      },
    );

    a.textContent = transcriptText;
    span.appendChild(a);
    p.appendChild(span);
    transcriptSection.appendChild(p);
  }

  // Assemble all into root
  root.appendChild(contentTile);
  root.appendChild(ytSection);
  root.appendChild(transcriptSection);

  // Replace block content
  block.textContent = '';
  block.appendChild(root);
}
