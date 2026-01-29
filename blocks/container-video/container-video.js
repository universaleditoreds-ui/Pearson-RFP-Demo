/**
 * EDS block: container-video
 * Input HTML (authoring) contains:
 * - richtext: video-title
 * - richtext: video-desc
 * - text: video-id (YouTube ID)
 * - text: video-transcript-title
 * - link: transcript URL (anchor in last row)
 *
 * This decorator:
 * - builds a semantic structure
 * - embeds YouTube iframe using the ID
 * - renders transcript link at bottom-right under the video
 */
function getText(el) {
  return (el?.textContent || '').trim();
}

function getFirstLink(el) {
  return el?.querySelector('a[href]') || null;
}

function createEl(tag, className, attrs = {}) {
  const el = document.createElement(tag);
  if (className) el.className = className;
  Object.entries(attrs).forEach(([k, v]) => {
    if (v !== undefined && v !== null && v !== '') el.setAttribute(k, v);
  });
  return el;
}

export default function decorate(block) {
  // Find authored fields (by data-aue-prop)
  const titleEl = block.querySelector('[data-aue-prop="video-title"]');
  const descEl = block.querySelector('[data-aue-prop="video-desc"]');
  const videoIdEl = block.querySelector('[data-aue-prop="video-id"]');
  const transcriptTitleEl = block.querySelector('[data-aue-prop="video-transcript-title"]');

  // Transcript URL is in the last row as an <a>
  const transcriptAnchor = getFirstLink(block);

  const videoId = getText(videoIdEl);
  const transcriptTitle = getText(transcriptTitleEl) || 'View Transcript';
  const transcriptHref = transcriptAnchor?.getAttribute('href') || '';

  // Build new structure
  const container = createEl('div', 'container-video__inner');
  const header = createEl('div', 'container-video__header');
  const media = createEl('div', 'container-video__media');
  const frame = createEl('div', 'container-video__frame');

  // Title
  if (titleEl) {
    const h2 = createEl('h2', 'container-video__title');
    // keep richtext inline HTML if present
    h2.innerHTML = titleEl.innerHTML;
    header.appendChild(h2);
  }

  // Description
  if (descEl) {
    const p = createEl('div', 'container-video__desc');
    p.innerHTML = descEl.innerHTML;
    header.appendChild(p);
  }

  // Video iframe (YouTube)
  if (videoId) {
    const iframe = createEl('iframe', 'container-video__iframe', {
      src: `https://www.youtube.com/embed/${encodeURIComponent(videoId)}?rel=0&modestbranding=1`,
      title: 'Video',
      loading: 'lazy',
      allow:
        'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share',
      allowfullscreen: '',
    });
    frame.appendChild(iframe);
  } else {
    // Fallback (if no ID provided)
    const placeholder = createEl('div', 'container-video__placeholder');
    placeholder.textContent = 'Video unavailable';
    frame.appendChild(placeholder);
  }

  media.appendChild(frame);

  // Transcript link (bottom-right under video)
  if (transcriptHref) {
    const transcriptWrap = createEl('div', 'container-video__transcript');
    const a = createEl('a', 'container-video__transcript-link', {
      href: transcriptHref,
      title: transcriptHref,
      target: '_blank',
      rel: 'noopener noreferrer',
    });
    a.textContent = transcriptTitle;
    transcriptWrap.appendChild(a);
    media.appendChild(transcriptWrap);
  }

  // Assemble
  container.appendChild(header);
  container.appendChild(media);

  // Replace block content with new structure
  block.textContent = '';
  block.appendChild(container);
}
