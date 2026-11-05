/* Project portfolio: accessible DOI and GitHub identity icons.
   Uses existing verified local brand assets and never changes link destinations. */
(() => {
  'use strict';
  const sources = {
    doi: 'assets/academic/logos/vendor/doi.svg',
    github: 'assets/academic/logos/contact/github.svg'
  };

  function decorate(root = document) {
    const host = root.querySelector('#page-content');
    if (!host) return 0;
    let count = 0;
    for (const anchor of host.querySelectorAll('a[href]')) {
      if (anchor.dataset.projectLinkIcon || anchor.querySelector('img,svg,picture')) continue;
      if (anchor.closest('figure, .ckdx-image-card, .fastica-figure-link, .publication-authorship')) continue;
      const href = anchor.getAttribute('href') || '';
      let url;
      try { url = new URL(href, window.location.href); } catch (_) { continue; }
      const hostName = url.hostname.toLowerCase();
      const kind = (hostName === 'doi.org' || hostName === 'dx.doi.org') ? 'doi'
        : (hostName === 'github.com' || hostName === 'www.github.com') ? 'github'
        : null;
      if (!kind) continue;
      const icon = document.createElement('img');
      icon.className = 'project-link-icon project-link-icon--' + kind;
      icon.src = sources[kind];
      icon.alt = '';
      icon.width = kind === 'doi' ? 38 : 18;
      icon.height = 18;
      icon.setAttribute('aria-hidden', 'true');
      icon.decoding = 'async';
      anchor.prepend(icon);
      anchor.classList.add('project-link-with-icon','project-link-with-icon--'+kind);
      if (anchor.closest('p,li,figcaption,.dib-citation')) {
        anchor.classList.add('project-link-icon-inline');
      }
      anchor.dataset.projectLinkIcon = kind;
      count++;
    }
    return count;
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => decorate(), {once: true});
  } else {
    decorate();
  }
  // Optional explicit refresh hook for any future client-rendered project panels.
  window.refreshProjectResearchLinks = decorate;
})();
