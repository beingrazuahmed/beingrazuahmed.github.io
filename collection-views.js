(() => {
  'use strict';

  const page = document.body.dataset.page;
  const root = document.documentElement;
  const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
  const reducedMotion = () => motionQuery.matches || root.dataset.motion === 'reduced';
  const collections = {
    home: [
      ['.portfolio-compass-v3', 'compass', 'Portfolio Compass'],
      ['.selected-works-grid', 'selected-works', 'Selected Works']
    ],
    projects: [['#page-content .section.alt .grid', 'projects', 'Current projects']],
    recognition: [
      ['#page-content .recognition-awards-section .grid', 'awards', 'Honors and awards'],
      ['#page-content .recognition-training-section .grid', 'training', 'Training and certifications']
    ],
    gallery: [['#page-content .section .grid', 'gallery', 'Gallery and evidence']]
  };

  function install(selector, id, label) {
    const track = document.querySelector(selector);
    if (!track || !track.children.length) return;
    const items = [...track.children];
    const titleOf = item => item.querySelector('h3')?.textContent.trim() || label;
    const storageKey = 'mra-collection-view-' + id;
    let savedView;
    try { savedView = localStorage.getItem(storageKey); } catch (_) { /* Device storage is optional. */ }
    let view = !reducedMotion() && savedView === 'showcase' ? 'showcase' : 'grid';
    let current = items[0];

    const collection = document.createElement('div');
    collection.className = 'view-collection';
    collection.dataset.collection = id;
    collection.setAttribute('role', 'region');
    collection.setAttribute('aria-label', label);
    collection.innerHTML = `
      <div class="collection-toolbar">
        <div class="collection-view-switch" role="group" aria-label="Choose view">
          <button type="button" data-collection-view="grid" aria-pressed="true" title="Switch to Grid">
            <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/></svg>
            <span>Grid</span>
          </button>
          <button type="button" data-collection-view="showcase" aria-pressed="false" title="Switch to 3D Showcase">
            <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="m12 2 9 5v10l-9 5-9-5V7l9-5Zm0 10 9-5M12 12 3 7m9 5v10"/></svg>
            <span>3D Showcase</span>
          </button>
        </div>
        <span class="collection-count"></span>
      </div>
      <div class="showcase-navigation" hidden>
        <button type="button" class="showcase-step" data-showcase-step="-1" aria-label="Previous item" title="Previous item">←</button>
        <select class="showcase-picker"></select>
        <button type="button" class="showcase-step" data-showcase-step="1" aria-label="Next item" title="Next item">→</button>
      </div>
      <p class="showcase-announcement" role="status" aria-live="polite" aria-atomic="true"></p>`;
    track.before(collection);
    collection.querySelector('.collection-toolbar').after(track);
    track.classList.add('showcase-items');
    track.id = 'collection-' + id;
    items.forEach(item => item.classList.add('showcase-item'));

    const buttons = [...collection.querySelectorAll('[data-collection-view]')];
    const controls = collection.querySelector('.showcase-navigation');
    const picker = collection.querySelector('.showcase-picker');
    const count = collection.querySelector('.collection-count');
    const announcement = collection.querySelector('.showcase-announcement');
    picker.setAttribute('aria-label', 'Choose item in ' + label);
    buttons.forEach(button => button.setAttribute('aria-controls', track.id));
    collection.querySelectorAll('[data-showcase-step]').forEach(button => button.setAttribute('aria-controls', track.id));
    const visibleItems = () => items.filter(item => !item.hidden);

    function update(announce = false) {
      const visible = visibleItems();
      if (!visible.includes(current)) current = visible[0];
      const index = visible.indexOf(current);
      const showcase = view === 'showcase';
      collection.dataset.view = view;
      collection.dataset.reducedMotion = String(reducedMotion());
      buttons.forEach(button => button.setAttribute('aria-pressed', String(button.dataset.collectionView === view)));
      controls.hidden = !showcase || visible.length < 2;
      track.tabIndex = showcase ? 0 : -1;
      if (showcase) track.setAttribute('aria-label', label + ': use Left and Right arrow keys to browse');
      else track.removeAttribute('aria-label');
      count.textContent = showcase && visible.length ? `${index + 1} / ${visible.length}` : `${visible.length} items`;

      items.forEach(item => {
        let offset = visible.indexOf(item) - index;
        // Keep the neighbors adjacent when cycling between the first and last item.
        if (offset > visible.length / 2) offset -= visible.length;
        if (offset < -visible.length / 2) offset += visible.length;
        const active = item === current;
        item.inert = showcase && (!active || item.hidden);
        if (showcase && !active) item.setAttribute('aria-hidden', 'true');
        else item.removeAttribute('aria-hidden');
        item.dataset.showcasePosition = active ? 'active' : Math.abs(offset) === 1 ? 'neighbor' : 'away';
        item.style.setProperty('--showcase-offset', String(offset));
        item.style.setProperty('--showcase-distance', String(Math.abs(offset)));
      });

      picker.replaceChildren(...visible.map((item, i) => {
        const option = document.createElement('option');
        option.value = String(items.indexOf(item));
        option.textContent = `${i + 1}. ${titleOf(item)}`;
        option.selected = item === current;
        return option;
      }));
      if (announce) announcement.textContent = showcase && current
        ? `${titleOf(current)}, ${index + 1} of ${visible.length}`
        : `Grid view, ${visible.length} items`;
    }

    function setView(next, remember = true) {
      view = next === 'showcase' ? 'showcase' : 'grid';
      if (remember) {
        try { localStorage.setItem(storageKey, view); } catch (_) { /* Browsing still works without storage. */ }
      }
      update(true);
    }

    function move(step) {
      const visible = visibleItems();
      if (!visible.length) return;
      const hadCardFocus = items.some(item => item.contains(document.activeElement));
      current = visible[(visible.indexOf(current) + step + visible.length) % visible.length];
      if (hadCardFocus) track.focus({ preventScroll: true });
      update(true);
    }

    buttons.forEach(button => button.addEventListener('click', () => setView(button.dataset.collectionView)));
    collection.querySelectorAll('[data-showcase-step]').forEach(button => button.addEventListener('click', () => move(Number(button.dataset.showcaseStep))));
    picker.addEventListener('change', () => { current = items[Number(picker.value)]; update(true); });
    track.addEventListener('keydown', event => {
      if (view !== 'showcase' || event.altKey || event.ctrlKey || event.metaKey || /INPUT|SELECT|TEXTAREA/.test(event.target.tagName)) return;
      if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
        event.preventDefault();
        move(event.key === 'ArrowRight' ? 1 : -1);
      }
    });

    // Preserve the existing gallery categories and filter the same cards in either view.
    if (id === 'gallery') {
      const records = window.MRA_V2?.gallery || [];
      const filters = [...collection.parentElement.querySelectorAll('.filters .filter')];
      filters.forEach(button => {
        button.type = 'button';
        button.setAttribute('aria-pressed', String(button.classList.contains('active')));
        button.addEventListener('click', () => {
          const category = button.textContent.trim();
          filters.forEach(filter => {
            const active = filter === button;
            filter.classList.toggle('active', active);
            filter.setAttribute('aria-pressed', String(active));
          });
          items.forEach((item, i) => { item.hidden = category !== 'All' && records[i]?.category !== category; });
          update(true);
        });
      });
    }

    const motionChanged = () => {
      // Respect a new motion preference without discarding the visitor's saved view.
      if (reducedMotion() && view === 'showcase') setView('grid', false);
      else collection.dataset.reducedMotion = String(reducedMotion());
    };
    motionQuery.addEventListener('change', motionChanged);
    new MutationObserver(motionChanged).observe(root, { attributes: true, attributeFilter: ['data-motion'] });
    update();
  }

  (collections[page] || []).forEach(args => install(...args));
})();
