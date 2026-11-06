(() => {
  'use strict';
  if (document.body?.dataset.page !== 'projects') return;

  const bar = document.getElementById('project-index-bar');
  const nav = document.getElementById('projectPortfolioIndex');
  if (!bar || !nav) return;

  const previous = document.getElementById('projectIndexPrev');
  const next = document.getElementById('projectIndexNext');
  const siteHeader = document.querySelector('#site-header .topbar') || document.getElementById('site-header');
  const entries = [...nav.querySelectorAll('a[href^="#"]')].map(link => {
    const id = link.getAttribute('href').slice(1);
    return { link, id, target: document.getElementById(id) };
  }).filter(item => item.target);

  if (!entries.length) return;

  let selected = null;
  let raf = 0;
  let userNavigated = false;
  let userMoved = false;
  const reducedMotion = () => document.documentElement.dataset.motion === 'off' ||
    document.documentElement.dataset.motion === 'reduced' ||
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function measure() {
    const headerHeight = Math.ceil(siteHeader?.getBoundingClientRect().height || 75);
    bar.style.setProperty('--project-header-offset', headerHeight + 'px');
    document.body.style.setProperty('--project-header-offset', headerHeight + 'px');
    document.body.style.setProperty('--project-index-height', Math.ceil(bar.getBoundingClientRect().height) + 'px');
    return headerHeight + bar.getBoundingClientRect().height + 15;
  }

  function setActive(item, ensureVisible = false) {
    if (!item) return;
    const changed = selected !== item.id;
    selected = item.id;
    entries.forEach(entry => {
      if (entry === item) entry.link.setAttribute('aria-current', 'location');
      else entry.link.removeAttribute('aria-current');
    });
    if (ensureVisible && changed) {
      const itemRect = item.link.getBoundingClientRect();
      const navRect = nav.getBoundingClientRect();
      if (itemRect.left < navRect.left + 5 || itemRect.right > navRect.right - 5) {
        const center = nav.scrollLeft + (itemRect.left + itemRect.width / 2) -
          (navRect.left + navRect.width / 2);
        nav.scrollTo({ left: Math.max(0, center), behavior: reducedMotion() ? 'instant' : 'smooth' });
      }
    }
  }

  function updateArrows() {
    const maximum = Math.max(0, nav.scrollWidth - nav.clientWidth);
    if (previous) previous.disabled = maximum < 5 || nav.scrollLeft <= 4;
    if (next) next.disabled = maximum < 5 || nav.scrollLeft >= maximum - 4;
  }

  function jump(target) {
    if (!target) return;
    const offset = measure();
    const y = window.scrollY + target.getBoundingClientRect().top - offset;
    // An immediate, exact jump avoids intermediate scroll-spy selection
    // and remains stable when navigating to sections far down this page.
    window.scrollTo({ top: Math.max(0, Math.round(y)), behavior: 'instant' });
    requestAnimationFrame(() => {
      const correctedY = window.scrollY + target.getBoundingClientRect().top - measure();
      if (Math.abs(correctedY - window.scrollY) > 3) {
        window.scrollTo({ top: Math.max(0, Math.round(correctedY)), behavior: 'instant' });
      }
      updateActive();
    });
  }

  function updateActive() {
    raf = 0;
    const edge = measure() + 22;
    let current = entries[0];
    for (const entry of entries) {
      if (entry.target.getBoundingClientRect().top <= edge) current = entry;
      else break;
    }
    if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 4) {
      current = entries[entries.length - 1];
    }
    setActive(current, true);
    updateArrows();
  }

  function scheduleActive() {
    if (!raf) raf = requestAnimationFrame(updateActive);
  }

  function getHashElement() {
    if (!location.hash) return null;
    let id;
    try { id = decodeURIComponent(location.hash.slice(1)); }
    catch (_) { return null; }
    return document.getElementById(id);
  }

  function syncHash(scrollToTarget = true) {
    const target = getHashElement();
    if (!target) { scheduleActive(); return; }
    const entry = entries.find(item => item.target === target || item.target.contains(target));
    if (!entry) { scheduleActive(); return; }
    setActive(entry, true);
    if (scrollToTarget) jump(target);
  }

  entries.forEach(item => item.link.addEventListener('click', event => {
    if (event.defaultPrevented || event.button !== 0 ||
        event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    userNavigated = true;
    const hash = '#' + encodeURIComponent(item.id);
    if (location.hash !== hash) history.pushState(null, '', hash);
    setActive(item, true);
    jump(item.target);
  }));

  const shift = dir => nav.scrollBy({
    left: dir * Math.max(250, Math.round(nav.clientWidth * .76)),
    behavior: reducedMotion() ? 'instant' : 'smooth'
  });
  previous?.addEventListener('click', () => shift(-1));
  next?.addEventListener('click', () => shift(1));
  nav.addEventListener('keydown', event => {
    if (event.key === 'ArrowRight' && event.target === nav) {
      event.preventDefault(); shift(1);
    }
    if (event.key === 'ArrowLeft' && event.target === nav) {
      event.preventDefault(); shift(-1);
    }
  });
  nav.tabIndex = 0;

  nav.addEventListener('scroll', updateArrows, { passive: true });
  window.addEventListener('scroll', scheduleActive, { passive: true });
  window.addEventListener('resize', () => { measure(); updateArrows(); scheduleActive(); }, { passive: true });
  window.addEventListener('hashchange', () => syncHash(true));
  window.addEventListener('popstate', () => syncHash(true));

  for (const type of ['wheel', 'touchstart', 'pointerdown', 'keydown']) {
    window.addEventListener(type, () => { userMoved = true; }, { once: true, passive: true });
  }

  if (typeof ResizeObserver !== 'undefined') {
    const observer = new ResizeObserver(() => { measure(); scheduleActive(); });
    if (siteHeader) observer.observe(siteHeader);
  }

  requestAnimationFrame(() => {
    measure();
    updateArrows();
    if (location.hash) syncHash(true);
    else updateActive();
  });

  // Re-align direct deep links after late-loading images and fonts settle.
  window.addEventListener('load', () => {
    if (!userNavigated && !userMoved && location.hash) syncHash(true);
    else scheduleActive();
    updateArrows();
  }, { once: true });
})();
