/* Portfolio-wide author-name emphasis.
   Applies only to rendered visible text; never changes metadata, URLs,
   bibliographic content, form inputs or other people's names. */
(() => {
  'use strict';

  const authorPattern = /\b(?:Md\.?\s+Razu\s+Ahmed|Razu\s+Ahmed|Ahmed,\s*M\.\s*R\.|M\.\s*R\.\s*Ahmed)(?![A-Za-z])/g;
  const candidates = /Razu|Ahmed/;
  const blocked = 'script,style,noscript,textarea,pre,code,svg,math,option,select,strong,b,[data-skip-author-emphasis]';
  let scheduled = false;

  function emphasize(root) {
    if (!root) return 0;
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
    const candidatesToUpdate = [];
    let node;
    while ((node = walker.nextNode())) {
      const parent = node.parentElement;
      if (!parent || parent.closest(blocked)) continue;
      if (!candidates.test(node.nodeValue || '')) continue;
      authorPattern.lastIndex = 0;
      if (authorPattern.test(node.nodeValue || '')) candidatesToUpdate.push(node);
    }

    let changes = 0;
    for (const textNode of candidatesToUpdate) {
      if (!textNode.isConnected || textNode.parentElement?.closest(blocked)) continue;
      const text = textNode.nodeValue || '';
      authorPattern.lastIndex = 0;
      const matches = [...text.matchAll(authorPattern)];
      if (!matches.length) continue;
      const fragment = document.createDocumentFragment();
      let cursor = 0;
      for (const match of matches) {
        const index = match.index;
        if (index > cursor) fragment.appendChild(document.createTextNode(text.slice(cursor, index)));
        const bold = document.createElement('strong');
        bold.className = 'portfolio-owner-emphasis';
        bold.textContent = match[0];
        fragment.appendChild(bold);
        cursor = index + match[0].length;
      }
      if (cursor < text.length) fragment.appendChild(document.createTextNode(text.slice(cursor)));
      textNode.replaceWith(fragment);
      changes += 1;
    }
    return changes;
  }

  function schedule() {
    if (scheduled) return;
    scheduled = true;
    requestAnimationFrame(() => {
      scheduled = false;
      emphasize(document.body);
    });
  }

  function initialize() {
    if (!document.body) return;
    emphasize(document.body);
    const observer = new MutationObserver(records => {
      // Ignore unrelated dynamic clocks, search counters, animations and filters.
      if (records.some(record => [...record.addedNodes]
        .some(node => candidates.test(node.textContent || '')))) schedule();
    });
    observer.observe(document.body, { childList: true, subtree: true });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initialize, { once: true });
  } else {
    initialize();
  }
})();
