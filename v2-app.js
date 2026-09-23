(() => {
  'use strict';
  const D = window.MRA_V2 || {};
  const $ = (s, r=document) => r.querySelector(s);
  const $$ = (s, r=document) => [...r.querySelectorAll(s)];
  const esc = (v='') => String(v).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[c]));
  const ext = (u,l) => `<a href="${esc(u)}" target="_blank" rel="noopener noreferrer">${esc(l)}</a>`;
  const verifiedEvidenceBadge = (label='Verified record') => `<span class="verified-evidence-badge" title="Documentary evidence linked to this portfolio record"><span class="verified-evidence-mark" aria-hidden="true">✓</span><span>${esc(label)}</span></span>`;
  const verifiedCornerRibbon = (label='VERIFIED') => `<span class="verified-corner-ribbon" aria-label="${esc(label)}"><span>${esc(label)}</span></span>`;
  const page = document.body.dataset.page || 'home';

  const nav = [
    ['home','Home','index.html'],['profile','Profile','profile.html'],['languages','Languages','languages.html'],['research','Research','research.html'],
    ['publications','Publications','publications.html'],['projects','Projects','projects.html'],['academic','Academic','academic.html?v=20260919-logosvg17'],
    ['experience','Experience','experience.html'],['conferences','Conferences','conferences.html?v=20260919-logosvg17'],['recognition','Recognition','recognition.html'],
    ['network','Network & Impact','network.html'],['resources','Resources','resources.html'],['gallery','Gallery','gallery.html'],['dashboard','Dashboard','dashboard-live.html?v=20260923-dashboardlive56']
  ];

  function header(){
    const el = $('#site-header'); if(!el) return;
    el.innerHTML = `<div class="topbar"><div class="container nav-shell">
      <a class="brand" href="index.html"><span class="monogram">MRA</span><span class="brand-name"><span class="brand-primary">Md. Razu</span><span class="brand-accent">Ahmed</span></span></a>
      <div class="nav-scroll-zone">
        <button class="nav-scroll-btn left" id="navScrollLeft" type="button" aria-label="Scroll navigation left">‹</button>
        <nav class="nav" id="primaryNav" aria-label="Primary">${nav.map(([k,l,h])=>`<a href="${h}" ${page===k?'aria-current="page"':''}>${l}</a>`).join('')}</nav>
        <button class="nav-scroll-btn right" id="navScrollRight" type="button" aria-label="Scroll navigation right">›</button>
      </div>
      <div class="nav-actions"><a class="btn ghost desktop-only" href="ask-razu.html">Ask Razu AI</a><button class="icon-btn" id="searchBtn" aria-label="Search">⌕</button><button class="icon-btn" id="settingsBtn" aria-label="Appearance settings">◐</button><button class="icon-btn menu-btn" id="menuBtn" aria-label="Menu">☰</button></div>
    </div></div><nav class="mobile-panel" id="mobilePanel" hidden>${nav.map(([k,l,h])=>`<a href="${h}">${l}</a>`).join('')}<a href="ask-razu.html">Ask Razu AI</a><a href="cv.html">CV</a></nav>`;

    const navEl = $('#primaryNav');
    const leftBtn = $('#navScrollLeft');
    const rightBtn = $('#navScrollRight');
    if(navEl && leftBtn && rightBtn){
      const step = () => Math.max(260, Math.round(navEl.clientWidth * 0.65));
      const updateNavControls = () => {
        const maxScroll = Math.max(0, navEl.scrollWidth - navEl.clientWidth);
        const overflowing = maxScroll > 4;
        leftBtn.disabled = !overflowing || navEl.scrollLeft <= 4;
        rightBtn.disabled = !overflowing || navEl.scrollLeft >= maxScroll - 4;
        leftBtn.setAttribute('aria-disabled', String(leftBtn.disabled));
        rightBtn.setAttribute('aria-disabled', String(rightBtn.disabled));
      };
      leftBtn.addEventListener('click', () => navEl.scrollBy({left:-step(), behavior:'smooth'}));
      rightBtn.addEventListener('click', () => navEl.scrollBy({left:step(), behavior:'smooth'}));
      navEl.addEventListener('scroll', updateNavControls, {passive:true});
      navEl.addEventListener('wheel', (e) => {
        if(navEl.scrollWidth <= navEl.clientWidth) return;
        if(Math.abs(e.deltaY) > Math.abs(e.deltaX)){
          e.preventDefault();
          navEl.scrollLeft += e.deltaY;
        }
      }, {passive:false});
      navEl.tabIndex = 0;
      navEl.addEventListener('keydown', (e) => {
        if(e.key === 'ArrowRight'){ e.preventDefault(); navEl.scrollBy({left:step(),behavior:'smooth'}); }
        if(e.key === 'ArrowLeft'){ e.preventDefault(); navEl.scrollBy({left:-step(),behavior:'smooth'}); }
      });
      window.addEventListener('resize', updateNavControls, {passive:true});
      const active = navEl.querySelector('[aria-current="page"]');
      requestAnimationFrame(() => {
        if(active) active.scrollIntoView({behavior:'auto', inline:'center', block:'nearest'});
        updateNavControls();
      });
    }
  }

  function settings(){
    document.body.insertAdjacentHTML('beforeend', `<aside class="settings appearance-panel" id="settings" hidden aria-label="Appearance settings">
      <div class="appearance-panel-head"><div><span class="appearance-eyebrow">Interface</span><strong>Appearance</strong><p>Choose a color system, display mode and motion level.</p></div><button class="appearance-close" id="appearanceClose" type="button" aria-label="Close appearance settings">×</button></div>
      <div class="appearance-group">
        <label for="themeSel">Color theme</label>
        <select id="themeSel"><option value="scientific">Scientific Horizon</option><option value="executive">Executive Intelligence</option><option value="quantum">Quantum Research</option><option value="mono">Minimal Monochrome</option></select>
      </div>
      <div class="appearance-group">
        <span class="appearance-label">Display mode</span>
        <div class="mode-segmented" id="modeSegmented" role="group" aria-label="Display mode">
          <button type="button" data-mode-choice="system" aria-pressed="false"><span class="mode-icon">◐</span><span>System</span></button>
          <button type="button" data-mode-choice="light" aria-pressed="false"><span class="mode-icon">☀</span><span>Light</span></button>
          <button type="button" data-mode-choice="dark" aria-pressed="false"><span class="mode-icon">◒</span><span>Dark</span></button>
        </div>
        <select id="modeSel" class="appearance-native-select" aria-label="Display mode fallback"><option value="system">System</option><option value="light">Light</option><option value="dark">Dark</option></select>
        <p class="appearance-mode-status" id="modeStatus" aria-live="polite"></p>
      </div>
      <div class="appearance-group appearance-grid-2">
        <div><label for="textSel">Text size</label><select id="textSel"><option value="90">90%</option><option value="100">100%</option><option value="110">110%</option><option value="120">120%</option></select></div>
        <div><label for="motionSel">Motion</label><select id="motionSel"><option value="balanced">Balanced</option><option value="reduced">Reduced</option></select></div>
      </div>
      <p class="tiny appearance-shortcuts">Shortcuts: <span class="kbd">/</span> search · <span class="kbd">H</span> home · <span class="kbd">T</span> appearance · <span class="kbd">Esc</span> close</p>
    </aside>
      <div class="accessibility-dock" aria-label="Reading controls">
        <button class="accessibility-fab text-size-trigger" id="textSizeTrigger" type="button" aria-label="Text size controls" aria-expanded="false" aria-controls="textSizePanel" title="Text size"><span aria-hidden="true">AA</span></button>
        <button class="accessibility-fab back-to-top" id="backToTop" type="button" aria-label="Back to top" title="Back to top" tabindex="-1" aria-hidden="true"><svg class="back-to-top-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="m7.5 14.5 4.5-4.5 4.5 4.5"/></svg></button>
      </div>
      <aside class="text-size-panel" id="textSizePanel" hidden aria-label="Text size controls">
        <div class="text-size-panel-head"><strong>Text size</strong><button type="button" class="text-size-close" id="textSizeClose" aria-label="Close text size controls">×</button></div>
        <div class="text-size-options" role="group" aria-label="Choose text size">
          <button type="button" class="text-size-option size-90" data-text-scale="90" aria-label="Small text, 90 percent">A</button>
          <button type="button" class="text-size-option size-100" data-text-scale="100" aria-label="Default text, 100 percent">A</button>
          <button type="button" class="text-size-option size-110" data-text-scale="110" aria-label="Large text, 110 percent">A</button>
          <button type="button" class="text-size-option size-120" data-text-scale="120" aria-label="Extra large text, 120 percent">A</button>
        </div>
        <div class="text-size-status"><span id="textSizePercent">100%</span><button type="button" class="text-size-reset" id="textSizeReset">Reset</button></div>
      </aside>`);

    const root=document.documentElement, store=localStorage;
    const normalizeScale=value=>{
      const n=parseInt(value,10);
      return [90,100,110,120].includes(n)?n:100;
    };
    const applyTextScale=value=>{
      const scale=normalizeScale(value);
      root.style.setProperty('--mra-text-scale',scale+'%');
      root.style.setProperty('--mra-text-factor',String(scale/100));
      root.dataset.textScale=String(scale);
      store.setItem('mra-text-scale',String(scale));
      const sel=$('#textSel'); if(sel) sel.value=String(scale);
      const pct=$('#textSizePercent'); if(pct) pct.textContent=scale+'%';
      $$('.text-size-option').forEach(btn=>btn.setAttribute('aria-pressed',String(Number(btn.dataset.textScale)===scale)));
    };
    const legacyText=store.getItem('mra-text');
    const storedScale=store.getItem('mra-text-scale')||(legacyText==='large'?'110':'100');

    const systemMode=window.matchMedia('(prefers-color-scheme: dark)');
    const validThemes=new Set(['scientific','executive','quantum','mono']);
    const validModes=new Set(['system','light','dark']);
    const validMotion=new Set(['balanced','reduced']);

    const syncThemeColor=resolved=>{
      let meta=document.querySelector('meta[name="theme-color"]');
      if(!meta){
        meta=document.createElement('meta');
        meta.name='theme-color';
        document.head.appendChild(meta);
      }
      const bg=getComputedStyle(root).getPropertyValue('--bg').trim();
      meta.content=bg|| (resolved==='dark'?'#06111d':'#f6fbff');
    };

    const apply=()=>{
      let theme=store.getItem('mra-theme')||'scientific';
      let mode=store.getItem('mra-mode')||'system';
      let motion=store.getItem('mra-motion')||'balanced';
      if(!validThemes.has(theme)) theme='scientific';
      if(!validModes.has(mode)) mode='system';
      if(!validMotion.has(motion)) motion='balanced';

      const resolved=mode==='system'?(systemMode.matches?'dark':'light'):mode;
      root.dataset.theme=theme;
      root.dataset.modeChoice=mode;
      root.dataset.mode=resolved;
      root.dataset.motion=motion;
      root.style.colorScheme=resolved;

      const themeSel=$('#themeSel'), modeSel=$('#modeSel'), motionSel=$('#motionSel');
      if(themeSel) themeSel.value=theme;
      if(modeSel) modeSel.value=mode;
      if(motionSel) motionSel.value=motion;

      $$('#modeSegmented [data-mode-choice]').forEach(btn=>{
        const active=btn.dataset.modeChoice===mode;
        btn.setAttribute('aria-pressed',String(active));
        btn.classList.toggle('is-active',active);
      });
      const status=$('#modeStatus');
      if(status) status.textContent=mode==='system'?('System is currently using '+resolved+' mode.'):(resolved.charAt(0).toUpperCase()+resolved.slice(1)+' mode is active.');
      applyTextScale(store.getItem('mra-text-scale')||storedScale);
      requestAnimationFrame(()=>syncThemeColor(resolved));
    };

    $('#themeSel')?.addEventListener('change',e=>{store.setItem('mra-theme',e.target.value);apply();});
    $('#modeSel')?.addEventListener('change',e=>{store.setItem('mra-mode',e.target.value);apply();});
    $('#motionSel')?.addEventListener('change',e=>{store.setItem('mra-motion',e.target.value);apply();});
    $$('#modeSegmented [data-mode-choice]').forEach(btn=>btn.addEventListener('click',()=>{
      store.setItem('mra-mode',btn.dataset.modeChoice);
      apply();
    }));
    if(typeof systemMode.addEventListener==='function') systemMode.addEventListener('change',()=>{if((store.getItem('mra-mode')||'system')==='system')apply();});
    else if(typeof systemMode.addListener==='function') systemMode.addListener(()=>{if((store.getItem('mra-mode')||'system')==='system')apply();});
    $('#textSel').addEventListener('change',e=>applyTextScale(e.target.value));

    const trigger=$('#textSizeTrigger'), panel=$('#textSizePanel'), close=$('#textSizeClose'), reset=$('#textSizeReset'), topBtn=$('#backToTop'), appearanceClose=$('#appearanceClose');
    const closePanel=()=>{if(!panel)return;panel.hidden=true;trigger?.setAttribute('aria-expanded','false');};
    const openPanel=()=>{if(!panel)return;panel.hidden=false;trigger?.setAttribute('aria-expanded','true');};
    trigger?.addEventListener('click',e=>{e.stopPropagation();panel?.hidden?openPanel():closePanel();});
    close?.addEventListener('click',closePanel);
    appearanceClose?.addEventListener('click',()=>$('#settings')?.setAttribute('hidden',''));
    panel?.addEventListener('click',e=>e.stopPropagation());
    $$('.text-size-option').forEach(btn=>btn.addEventListener('click',()=>applyTextScale(btn.dataset.textScale)));
    reset?.addEventListener('click',()=>applyTextScale(100));
    document.addEventListener('click',e=>{if(panel&&!panel.hidden&&!panel.contains(e.target)&&e.target!==trigger)closePanel();});
    document.addEventListener('keydown',e=>{if(e.key==='Escape')closePanel();});

    const updateTopButton=()=>{
      if(!topBtn)return;
      const show=window.scrollY>520;
      topBtn.classList.toggle('is-visible',show);
      topBtn.tabIndex=show?0:-1;
      topBtn.setAttribute('aria-hidden',String(!show));
    };
    topBtn?.addEventListener('click',event=>{
      const reduced=root.dataset.motion==='reduced'||window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if(event.detail===0){
        const target=document.querySelector('main h1')||document.querySelector('main');
        if(target){
          const hadTabIndex=target.hasAttribute('tabindex');
          if(!hadTabIndex)target.setAttribute('tabindex','-1');
          target.focus({preventScroll:true});
          if(!hadTabIndex)target.addEventListener('blur',()=>target.removeAttribute('tabindex'),{once:true});
        }
      }
      window.scrollTo({top:0,behavior:reduced?'auto':'smooth'});
    });
    window.addEventListener('scroll',updateTopButton,{passive:true});
    updateTopButton();
    apply();
  }

  function footer(){
    const el=$('#site-footer'); if(!el) return;
    el.innerHTML=`<footer class="footer"><div class="container footer-grid"><div><div class="brand"><span class="monogram">MRA</span><span>Md. Razu Ahmed</span></div><p>${esc(D.brand?.tagline||'')}</p><p class="tiny">Public portfolio · Privacy-safe by design · Last updated ${esc(D.lastUpdated||'')}</p></div><div><strong>Navigate</strong><p><a href="search.html">Search</a><br><a href="languages.html">Languages & MOI</a><br><a href="dashboard-live.html?v=20260923-dashboardlive56">Dashboard</a><br><a href="cv.html">CV</a><br><a href="copyright.html">Copyright & Reuse</a></p></div><div><strong>Connect</strong><p><a href="mailto:razuahmed038@gmail.com">Email</a><br><a href="https://github.com/beingrazuahmed" target="_blank" rel="noopener">GitHub</a><br><a href="contact.html">Collaborate</a></p></div></div><div class="container tiny">© 2026 Md. Razu Ahmed. All rights reserved.</div></footer>`;
  }

  function clock(){
    const els=[...document.querySelectorAll('[data-clock]')]; if(!els.length) return;
    const tick=()=>{const now=new Date(); const t=new Intl.DateTimeFormat('en-US',{timeZone:'Asia/Dhaka',hour:'2-digit',minute:'2-digit',second:'2-digit',hour12:true}).format(now); const d=new Intl.DateTimeFormat('en-GB',{timeZone:'Asia/Dhaka',weekday:'short',day:'2-digit',month:'short',year:'numeric'}).format(now); els.forEach(el=>{el.textContent=`${d} · ${t} · Dhaka`;});}; tick(); setInterval(tick,1000);
  }

  const tags = arr => `<div class="pill-row">${(Array.isArray(arr)?arr:arr?[arr]:[]).map(x=>`<span class="tag">${esc(typeof x==='string'?x:(x.label||x.name||x.title||''))}</span>`).join('')}</div>`;
  const sectionHead=(k,t,c='')=>`<div class="section-head"><div><div class="section-kicker">${esc(k)}</div><h2>${esc(t)}</h2></div>${c?`<p class="section-copy">${esc(c)}</p>`:''}</div>`;
  const safeImg=(src,alt,cls='portrait')=>{
    const priority=String(cls).includes('hero-portrait');
    return `<img class="${cls} safe-img" src="${esc(src)}" alt="${esc(alt)}" loading="${priority?'eager':'lazy'}" decoding="async" ${priority?'fetchpriority="high"':''} data-safe-fallback="Verified portrait will appear when the original asset is available.">`;
  };
  const links=(obj={})=>['primary','discovery','social'].flatMap(k=>obj[k]||[]).map(x=>ext(x.url,x.label)).join(' · ');

  function publicationBrandMeta(label=''){
    const key=String(label||'').trim().toLowerCase();
    const favicon=domain=>`https://www.google.com/s2/favicons?sz=128&domain=${domain}`;
    const map={
      'doi': {src:'assets/academic/logos/vendor/doi.svg', cls:'is-doi'},
      'engineering reports': {src:'assets/academic/journals/engineering-reports/logo.webp', cls:'is-wide is-journal'},
      'scopus': {src:'assets/academic/logos/scopus-circle.png', cls:'is-scopus'},
      'google scholar': {src:favicon('scholar.google.com'), cls:'is-google-scholar'},
      'proquest': {src:favicon('proquest.com'), cls:'is-proquest'},
      'semantic scholar': {src:favicon('semanticscholar.org'), cls:'is-semantic-scholar'},
      'sciprofiles': {src:favicon('sciprofiles.com'), cls:'is-sciprofiles'},
      'researchgate': {src:favicon('researchgate.net'), cls:'is-researchgate'},
      'sciencedirect': {src:favicon('sciencedirect.com'), cls:'is-sciencedirect'},
      'dataset': {src:favicon('data.mendeley.com'), cls:'is-mendeley'},
      'dataset (mendeley)': {src:favicon('data.mendeley.com'), cls:'is-mendeley'},
      'mendeley data': {src:favicon('data.mendeley.com'), cls:'is-mendeley'},
      'banglajol': {src:'assets/academic/journals/ijss/banglajol.png', cls:'is-wide'}
    };
    return map[key]||{src:favicon((key.replace(/[^a-z0-9]+/g,'')||'google')+'.com'),cls:'is-generic'};
  }

  function publicationBrandLink(item={}){
    const label=item.label||'Scholarly link';
    const key=String(label||'').trim().toLowerCase();
    if(key==='doi'){
      return `<a class="publication-brand-link publication-doi-link doi-icon-link doi-icon-link-modern" href="${esc(item.url||'#')}" target="_blank" rel="noopener noreferrer" aria-label="Open DOI" title="DOI" data-label="DOI">
        ${scholarlyBrandIcon('doi')}
      </a>`;
    }
    const meta=publicationBrandMeta(label);
    return `<a class="publication-brand-link ${esc(meta.cls||'')}" href="${esc(item.url||'#')}" target="_blank" rel="noopener noreferrer" aria-label="Open ${esc(label)}" title="${esc(label)}" data-label="${esc(label)}">
      <span class="publication-brand-logo"><img src="${esc(meta.src)}" alt="" loading="lazy" decoding="async"></span>
    </a>`;
  }

  function publicationBrandLinks(obj={}){
    return ['primary','discovery','social'].flatMap(k=>obj[k]||[]).map(publicationBrandLink).join('');
  }

  function uiIcon(name){
    const paths={
      language:'<path d="M4 5h10M9 3v2m-4 4c1.5 3 3.6 5.2 6.5 6.8M13 9c-1.5 3.1-3.6 5.4-6.6 7M15 20l3-8 3 8m-5-3h4"/>',
      graduation:'<path d="m2 10 10-5 10 5-10 5L2 10Zm4 2.5V17c2.8 2.2 8.2 2.2 11 0v-4.5M22 10v6"/>',
      publication:'<path d="M5 4h10a2 2 0 0 1 2 2v14H7a2 2 0 0 1-2-2V4Zm4 4h4m-4 4h5m-5 4h3"/>',
      conference:'<path d="M4 20V8h16v12M8 8V4h8v4M8 12h8M8 16h3m2 0h3"/>',
      review:'<path d="M5 3h10l4 4v14H5V3Zm10 0v5h5M8 12l2 2 4-4m-6 8h8"/>',
      field:'<path d="M3 18c4-4 8-4 12 0m-12-6c4-4 8-4 12 0M17 5h4v4h-4zM5 5h4v4H5z"/>',
      calendar:'<path d="M6 3v3m12-3v3M4 8h16M5 5h14a1 1 0 0 1 1 1v14H4V6a1 1 0 0 1 1-1Zm3 7h3m2 0h3m-8 4h3m2 0h3"/>',
      location:'<path d="M12 21s7-5.2 7-12a7 7 0 1 0-14 0c0 6.8 7 12 7 12Zm0-9a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/>',
      school:'<path d="M3 21h18M5 21V9l7-4 7 4v12M9 21v-6h6v6M8 11h2m4 0h2"/>',
      board:'<path d="M4 5h16v14H4zM8 9h8m-8 4h5"/>',
      lab:'<path d="M9 3h6m-5 0v6l-5 9a2 2 0 0 0 1.7 3h10.6a2 2 0 0 0 1.7-3l-5-9V3M8 15h8"/>',
      project:'<path d="M4 5h6l2 2h8v12H4zM8 12h8m-8 4h5"/>',
      viva:'<path d="M5 6h14v9H9l-4 4V6Zm4 4h6"/>',
      credits:'<path d="M4 6h16M4 12h16M4 18h16M7 4v4m5 2v4m5 2v4"/>',
      analysis:'<path d="M4 19V9m5 10V5m5 14v-7m5 7V3M2 21h20"/>',
      code:'<path d="m8 9-4 3 4 3m8-6 4 3-4 3m-5 3 2-12"/>',
      web:'<path d="M3 5h18v14H3zM3 9h18m-14 6 2-2 2 2 3-3 3 3"/>',
      terminal:'<path d="M4 5h16v14H4zM7 9l3 3-3 3m5 0h4"/>',
      branch:'<path d="M6 4v10a4 4 0 0 0 4 4h4M6 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm12 12a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0-12a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 0c0 5-2 6-6 6"/>',
      workspace:'<path d="M4 4h7v7H4zM13 4h7v7h-7zM4 13h7v7H4zM13 13h7v7h-7z"/>',
      check:'<path d="m5 12 4 4L19 6"/>'
    };
    return `<svg class="ui-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">${paths[name]||paths.check}</svg>`;
  }

  function languageCard(l){
    return `<article class="card language-card language-card-${esc(l.id||'generic')}">
      <div class="language-card-head">
        <div class="language-icon">${uiIcon(l.icon||'language')}</div>
        <div>
          <h3>${esc(l.name||'')}${l.nativeName?` <span class="native-script">${esc(l.nativeName)}</span>`:''}</h3>
          ${l.level?`<div class="language-level">${esc(l.level)}</div>`:''}
          <div class="language-badge">${uiIcon(l.id==='english'?'graduation':'check')}<span>${esc(l.badge||l.level||'')}</span></div>
        </div>
      </div>
      <p class="language-note">${esc(l.note||'')}</p>
      <div class="language-evidence-title">${uiIcon('check')}<span>Evidence of academic use</span></div>
      <ul class="language-evidence-list">${(l.evidence||[]).map(x=>`<li>${esc(x)}</li>`).join('')}</ul>
    </article>`;
  }

  function languageEvidenceCard(x){
    return `<article class="card language-evidence-card">
      <div class="language-icon small">${uiIcon(x.icon||'check')}</div>
      <div><h3>${esc(x.title||'')}</h3><p>${esc(x.detail||'')}</p></div>
    </article>`;
  }

  function educationCard(e){
    const logo=e.logo? `<img class="education-logo-img" src="${esc(e.logo)}" alt="${esc(e.institution||e.degree)} logo" loading="lazy" decoding="async">` : `<span class="education-logo-fallback">${uiIcon(e.icon||'school')}</span>`;
    return `<article class="education-timeline-item">
      <span class="education-timeline-dot" aria-hidden="true"></span>
      <div class="card education-card">
        <div class="education-logo-wrap">${logo}</div>
        <div class="education-card-main">
          <div class="education-card-heading">
            <div><h3>${esc(e.degree||e.title||'')}</h3><p class="education-institution">${esc(e.institution||e.place||'')}</p></div>
            <div class="badge education-year">${uiIcon('calendar')}<span>${esc(e.period||e.year||'')}</span></div>
          </div>
          <div class="education-detail-list education-detail-list-inline">
            <div class="education-detail-row">${uiIcon('credits')}<div><span>Academic record</span><strong>${esc(e.detail||e.description||e.cgpa||'')}</strong></div></div>
            ${e.board?`<div class="education-detail-row">${uiIcon('board')}<div><span>Education Board</span><strong>${esc(e.board)}</strong></div></div>`:''}
            ${e.moi?`<div class="education-detail-row education-moi-row">${uiIcon('language')}<div><span>Medium of Instruction (MOI)</span><strong>${esc(e.moi.replace('Medium of Instruction (MOI): ','')||e.moi)}</strong></div></div>`:''}
          </div>
        </div>
      </div>
    </article>`;
  }

  function academicMetric(icon,value,label,detail){
    return `<article class="card metric academic-metric-card"><div class="academic-metric-icon">${uiIcon(icon)}</div><strong>${esc(value)}</strong><span>${esc(label)}</span><small>${esc(detail)}</small></article>`;
  }

  function academicJourneyIntro(){
    return `<div class="academic-journey-intro" aria-labelledby="academic-journey-title">
      <div class="academic-journey-visual" aria-hidden="true">
        <div class="academic-journey-icons">
          <span class="academic-journey-icon academic-journey-icon-left">${uiIcon('publication')}</span>
          <span class="academic-journey-icon academic-journey-icon-main">${uiIcon('graduation')}</span>
          <span class="academic-journey-icon academic-journey-icon-right">${uiIcon('school')}</span>
        </div>
      </div>
      <div class="academic-journey-copy">
        <div class="academic-journey-pill"><span class="academic-journey-pulse"></span><span>Academic journey</span></div>
        <h2 id="academic-journey-title">Education</h2>
        <p>Formal academic training from secondary science to postgraduate statistics.</p>
      </div>
    </div>`;
  }

  function techBrandIcon(item){
    const name=(item.name||item.short||'').trim();
    const key=name.toLowerCase();
    const fallback=esc((item.short||item.name||'?').split(/\s+/).map(x=>x[0]).join('').slice(0,4).toUpperCase());

    const deviconBase='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/';
    const customAssets={
      'ibm spss statistics':'assets/academic/logos/vendor/spss.png',
      'statsmodels':'assets/academic/logos/vendor/statsmodels.svg',
      'lightgbm':'assets/academic/logos/vendor/lightgbm.svg',
      'catboost':'assets/academic/logos/vendor/catboost.png',
      'shap':'assets/academic/logos/vendor/shap.png',
      'seaborn':'assets/academic/logos/vendor/seaborn.svg',
      'librosa':'assets/academic/logos/vendor/librosa.svg',
      'pingouin':'assets/academic/logos/vendor/pingouin.svg',
      'mir_eval':'assets/academic/logos/mir-eval-digital.svg',
      'pyreadstat':'assets/academic/logos/pyreadstat-digital.svg',
      'soundfile / pysoundfile':'assets/academic/logos/soundfile-digital.svg',
      'xgboost':'assets/academic/logos/vendor/xgboost.png',
      'scipy':'assets/academic/logos/vendor/scipy.svg',
      'jupyter notebook':'assets/academic/logos/vendor/jupyter.jpg',
      'microsoft 365 / office':'assets/academic/logos/vendor/microsoft365.svg',
      'microsoft office':'assets/academic/logos/vendor/microsoft365.svg',
      'google workspace':'assets/academic/logos/vendor/google-g.svg',
      'chatgpt':'assets/academic/logos/vendor/chatgpt.png',
      'claude':'assets/academic/logos/vendor/claude.png',
      'gemini':'assets/academic/logos/vendor/gemini.svg',
      'deepseek':'assets/academic/logos/vendor/deepseek.png',
      'grok':'assets/academic/logos/vendor/grok.png',
      'perplexity':'assets/academic/logos/vendor/perplexity.svg',
      'gemini notebook':'assets/academic/logos/gemini-notebook-logo.png',
      'microsoft copilot':'assets/academic/logos/vendor/copilot.png',
      'quillbot':'https://www.google.com/s2/favicons?sz=128&domain=quillbot.com',
      'c':'https://skillicons.dev/icons?i=c&theme=light',
      'graphviz':'assets/academic/logos/vendor/graphviz-digital.svg'
    };
    const horizontalLogoKeys=new Set(['xgboost']);
    const devicons={
      'python':'python/python-original.svg',
      'r':'r/r-original.svg',
      'html':'html5/html5-original.svg',
      'html5':'html5/html5-original.svg',
      'javascript':'javascript/javascript-original.svg',
      'css':'css3/css3-original.svg',
      'css3':'css3/css3-original.svg',
      'flask':'flask/flask-original.svg',
      'visual studio code':'vscode/vscode-original.svg',
      'visual studio build tools':'visualstudio/visualstudio-plain.svg',
      'anaconda':'anaconda/anaconda-original.svg',
      'kaggle':'kaggle/kaggle-original.svg',
      'google colab':'googlecolab/googlecolab-original.svg',
      'windows 10 / windows 11':'windows11/windows11-original.svg',
      'git':'git/git-original.svg',
      'github':'github/github-original.svg',
      'pandas':'pandas/pandas-original.svg',
      'numpy':'numpy/numpy-original.svg',
      'scikit-learn':'scikitlearn/scikitlearn-original.svg',
      'pytorch':'pytorch/pytorch-original.svg',
      'torchvision':'pytorch/pytorch-original.svg',
      'opencv':'opencv/opencv-original.svg',
      'matplotlib':'matplotlib/matplotlib-original.svg',
      'minitab':'minitab/minitab-original.svg'
    };

    const simpleSlug={
      'streamlit':'streamlit',
      'nvidia cuda / cudnn':'nvidia',
      'ultralytics':'ultralytics',
      'geopandas':'geopandas',
      'mendeley':'mendeley',
      'diagrams.net':'diagramsdotnet',
    };

    if(customAssets[key]){
      const horizontal=horizontalLogoKeys.has(key)?' tech-logo-horizontal':'';
      return `<span class="tech-logo tech-logo-digital tech-logo-custom${horizontal}"><img src="${customAssets[key]}" alt="" loading="lazy" decoding="async" data-tech-fallback="${fallback}"></span>`;
    }

    if(key==='tensorflow / keras'){
      return `<span class="tech-logo tech-logo-pair" aria-hidden="true">
        <img src="${deviconBase}tensorflow/tensorflow-original.svg" alt="" loading="lazy" decoding="async">
        <img src="${deviconBase}keras/keras-original.svg" alt="" loading="lazy" decoding="async">
      </span>`;
    }

    if(devicons[key]){
      const url=deviconBase+devicons[key];
      return `<span class="tech-logo tech-logo-digital"><img src="${url}" alt="" loading="lazy" decoding="async" data-tech-fallback="${fallback}"></span>`;
    }

    const slug=simpleSlug[key]||(item.brand||'').trim();
    if(slug){
      const url=`https://cdn.simpleicons.org/${encodeURIComponent(slug)}`;
      return `<span class="tech-logo tech-logo-digital"><img src="${url}" alt="" loading="lazy" decoding="async" data-tech-fallback="${fallback}"></span>`;
    }

    return `<span class="tech-logo-fallback tech-logo-fallback-digital" aria-hidden="true"><span>${fallback}</span></span>`;
  }

  function scholarlyBrandIcon(type,label=''){
    const map={
      wiley:{slug:'wiley',label:'Wiley'},
      scopus:{slug:'scopus',label:'Scopus'},
      clarivate:{slug:'clarivate',label:'Clarivate'},
      creativecommons:{slug:'creativecommons',label:'Creative Commons'},
      banglajol:{slug:'',label:'BanglaJOL'},
      scimago:{slug:'',label:'SCImago'},
      ici:{slug:'',label:'ICI'},
      esji:{slug:'',label:'ESJI'},
      bansdoc:{slug:'',label:'BANSDOC'}
    };
    if(type==='doi'){
      return `<span class="scholar-brand-icon doi-brand-mark" aria-hidden="true"><img class="doi-logo-img" src="https://commons.wikimedia.org/wiki/Special:Redirect/file/DOI_logo.svg" alt="" loading="lazy" decoding="async"></span>`;
    }
    if(type==='scopus'){
      return `<span class="scholar-brand-icon scholar-brand-scopus"><img src="assets/academic/logos/scopus-circle.png" alt="" loading="lazy" decoding="async"><span>${esc(label||'Scopus')}</span></span>`;
    }
    const x=map[type]||{slug:'',label:label||type};
    if(x.slug){
      return `<span class="scholar-brand-icon"><img src="https://cdn.simpleicons.org/${encodeURIComponent(x.slug)}" alt="" loading="lazy" decoding="async"><span>${esc(label||x.label)}</span></span>`;
    }
    return `<span class="scholar-brand-icon scholar-brand-word"><span>${esc(label||x.label)}</span></span>`;
  }

  function academicBrandAsset(src,label,cls=''){
    return `<span class="academic-brand-asset ${cls}"><img src="${esc(src)}" alt="" loading="lazy" decoding="async"><span>${esc(label)}</span></span>`;
  }

  function technicalSkillCard(x){
    return `<article class="card technical-skill-card ${x.featured?'technical-skill-featured':''}">
      <div class="technical-skill-head">
        <span class="technical-skill-icon">${uiIcon(x.icon||'analysis')}</span>
        <div>
          ${x.eyebrow?`<div class="technical-skill-eyebrow">${esc(x.eyebrow)}</div>`:''}
          <h3>${esc(x.title||'')}</h3>
          <p>${esc(x.summary||'')}</p>
        </div>
      </div>
      <div class="technical-skill-tags">${(x.items||[]).map(item=>`<span>${esc(item)}</span>`).join('')}</div>
      ${(x.platforms||[]).length?`<div class="ai-platform-panel">
        <div class="ai-platform-label">AI platforms & research assistants</div>
        <div class="ai-platforms">${(x.platforms||[]).map(p=>`<div class="ai-platform">${techBrandIcon(p)}<span>${esc(p.name)}</span></div>`).join('')}</div>
      </div>`:''}
      ${x.principle?`<div class="ai-research-principle"><strong>Research-use principle</strong><p>${esc(x.principle)}</p></div>`:''}
      ${x.note?`<p class="technical-skill-note">${esc(x.note)}</p>`:''}
    </article>`;
  }

  function toolGroupCard(g){
    return `<article class="card tool-group tool-group-modern">
      <div class="tool-group-head"><span class="tool-group-icon">${uiIcon(g.icon||'analysis')}</span><h3>${esc(g.group)}</h3></div>
      <div class="tool-items-modern">${(g.items||[]).map(i=>`<div class="tool-item-modern">${techBrandIcon(i)}<div><strong>${esc(i.name)}</strong><p>${esc(i.detail)}</p>${i.url?`<a class="tool-profile-link" href="${esc(i.url)}" target="_blank" rel="noopener noreferrer">View profile ↗</a>`:''}</div></div>`).join('')}</div>
    </article>`;
  }

  function researchToolLayout(){
    const groups=D.tools||[];
    const pick=name=>groups.find(g=>g.group===name);
    const primary=[
      pick('Statistical & Analytical Software'),
      pick('Programming & Statistical Computing'),
      pick('Web, Backend & Research Prototype Development')
    ].filter(Boolean);
    const libs=pick('Python, ML & Scientific Libraries');
    const env=pick('Research Computing, Development & System Tools');
    const version=pick('Version Control & Reproducibility');
    const productivity=pick('Productivity & Collaboration');
    const reference=pick('Reference & Research Management');

    return `<div class="tool-layout tool-layout-balanced">
      <div class="grid grid-3 tool-grid-modern tool-grid-primary">${primary.map(toolGroupCard).join('')}</div>
      ${libs?`<div class="tool-category-wide tool-category-libraries">${toolGroupCard(libs)}</div>`:''}
      ${env?`<div class="tool-category-wide tool-category-system">${toolGroupCard(env)}</div>`:''}
      <div class="tool-bottom-grid tool-bottom-grid-balanced">
        ${version?toolGroupCard(version):''}
        ${productivity?toolGroupCard(productivity):''}
        ${reference?toolGroupCard(reference):''}
      </div>
    </div>`;
  }

  function computationalEnvironmentPanel(){
    const items=D.computationalEnvironments||[];
    if(!items.length) return '';
    return `<div class="compute-environments">
      <div class="compute-environments-head">
        <div><span class="section-kicker">Computational environment & reproducibility</span><h3>Verified research environments</h3></div>
        <p>Version snapshots are reported by project because software stacks differ across analyses. Exact versions are shown where they were captured; verified dependencies without a recorded version are listed by name.</p>
      </div>
      <div class="compute-environment-list">
        ${items.map((x,i)=>`<details class="compute-environment-card" ${i===0?'open':''}>
          <summary>
            <div><strong>${esc(x.title||'Research environment')}</strong><span>${esc(x.context||'')}</span></div>
            <span class="compute-toggle">+</span>
          </summary>
          <div class="compute-environment-body">
            <p class="compute-system">${esc(x.system||'')}</p>
            <div class="compute-stack">${(x.stack||[]).map(v=>`<span>${esc(v)}</span>`).join('')}</div>
          </div>
        </details>`).join('')}
      </div>
    </div>`;
  }

  function techMarquee(){
    const items=(D.tools||[]).flatMap(g=>g.items||[]);
    if(!items.length) return '';
    const track=[...items,...items];
    return `<div class="tech-marquee-wrap" aria-label="Technologies and software I work with">
      <div class="tech-marquee-title"><span class="section-kicker">Research technology stack</span><h3>Technologies I Work With</h3><p>Statistical computing, scientific programming, machine learning, reproducible research, prototyping, diagramming and collaborative research tools.</p></div>
      <div class="tech-marquee" tabindex="0">
        <div class="tech-marquee-track" style="--ticker-duration:${Math.max(38,items.length*2.2)}s">${track.map((i,idx)=>`<div class="tech-marquee-item" ${idx>=items.length?'aria-hidden="true"':''}>${techBrandIcon(i)}<span>${esc(i.short||i.name)}</span></div>`).join('')}</div>
      </div>
    </div>`;
  }

  function languagePanel(compact=false){
    const lp=D.languageProfile||{};
    return `<div class="language-suite ${compact?'compact':''}">
      <div class="language-statement-card">
        <div class="language-statement-icon">${uiIcon('graduation')}</div>
        <div><div class="section-kicker">Language & scholarly communication</div><h3>Academic communication profile</h3><p>${esc(lp.statement||'')}</p></div>
      </div>
      <div class="grid grid-2 language-grid">${(D.languages||[]).map(languageCard).join('')}</div>
      <div class="moi-panel">
        <div class="moi-main"><div class="moi-icon">${uiIcon('graduation')}</div><div><div class="section-kicker">Formal education language record</div><h3>${esc(lp.moi?.title||'Medium of Instruction')}</h3><p>${esc(lp.moi?.summary||'')}</p></div></div>
        <div class="moi-degrees">${(lp.moi?.degrees||[]).map(x=>`<div class="moi-degree"><div><span>${esc(x.label)}</span>${x.stage?`<small>${esc(x.stage)}</small>`:''}</div><strong>${esc(x.value)}</strong></div>`).join('')}</div>
      </div>
      ${compact?'':`<div class="grid grid-2 language-evidence-grid">${(lp.evidence||[]).map(languageEvidenceCard).join('')}</div>`}
    </div>`;
  }

  function selectedWorkCard(p,index){
    const id=(p.id||'').toLowerCase();
    const map={
      fastica:{title:'FastICA Audio Source Separation',category:'Signal Processing',detail:'Published in Engineering Reports: reproducible blind-source separation with FastICA, PCA and NMF benchmarking.'},
      ckd:{title:'CKD Risk Factors & Stacking ML',category:'Biomedical Data Science',detail:'Published in International Journal of Statistical Sciences: risk-factor analysis and stacked machine-learning prediction.'},
      dib:{title:'PUST Cafeteria Food Image Dataset',category:'Food Computing',detail:'Published in Data in Brief: a real-world Bangladeshi meal-platter image resource with detection and segmentation annotations.'},
      dr:{title:'Diabetic Retinopathy Grading',category:'Medical AI',detail:'Deep-handcrafted feature fusion with DenseNet121, SIFT-BoVW, XGBoost and Grad-CAM++.'},
      'dengue-forecast':{title:'Nationwide Dengue Forecasting',category:'Public Health AI',detail:'District-informed one-week-ahead forecasting of dengue hospital admissions across Bangladesh.'}
    };
    const m=map[id]||{title:p.title||'Research work',category:(p.tags||[])[0]||'Research',detail:p.summary||''};
    const status=p.bucket==='accepted'?'accepted':p.bucket==='under-review'?'under-review':'published';
    return `<a class="card feature-work-card ${index===0?'feature-work-card-primary':''}" href="publications.html?status=${esc(status)}#output-${esc(id)}">
      <div class="feature-work-index">0${index+1}</div>
      <div class="feature-work-copy">
        <div class="feature-work-kicker">${esc(m.category)}</div>
        <h3>${esc(m.title)}</h3>
        <p>${esc(m.detail)}</p>
      </div>
      <div class="feature-work-footer"><span>${esc(m.category)}</span><span class="feature-work-arrow" aria-hidden="true">↗</span></div>
    </a>`;
  }

  function compactResearchOutputCard(x){
    const id=(x.id||'').toLowerCase();
    const status=x.outputKind==='dataset'||x.type==='Dataset'?'dataset':x.bucket==='accepted'?'accepted':x.bucket==='under-review'?'under-review':'published';
    return `<a class="compact-output-card" href="publications.html?status=${esc(status)}#output-${esc(id)}">
      <div class="compact-output-top"><span class="compact-output-status">${esc(x.status||x.bucket||'Research')}</span><span class="compact-output-arrow" aria-hidden="true">↗</span></div>
      <h4>${esc(x.title||'Untitled research output')}</h4>
      <p>${esc(x.journal||x.venue||'')}${x.bucket==='under-review'&&x.publisher?` <span class="compact-output-publisher">· ${esc(x.publisher)}</span>`:''}</p>
    </a>`;
  }

  function homeNetworkMiniCard(x){
    const roles=(x.roles||[]).slice(0,2);
    return `<a class="home-network-mini" href="network.html">
      <div class="home-network-mini-media">${safeImg(x.portrait,x.name,'home-network-mini-avatar')}</div>
      <div class="home-network-mini-copy">
        <h4>${esc(x.name||'')}</h4>
        ${roles.length?`<p>${roles.map(esc).join(' · ')}</p>`:''}
        <span>${esc((x.affiliation||'').split(',')[0])}</span>
      </div>
      <b aria-hidden="true">↗</b>
    </a>`;
  }

  function home(){
    const p=D.profile||{};
    const outputs=D.outputs||[];
    const publishedIds=['fastica','ckd','dib'];
    const selected=publishedIds.map(id=>outputs.find(x=>x.id===id&&x.bucket==='published')).filter(Boolean);
    const publishedDataset=outputs.find(x=>x.outputKind==='dataset'||x.type==='Dataset');
    const acceptedOutputs=outputs.filter(x=>x.bucket==='accepted');
    const reviewPriority=['dr','dengue-forecast','hcv','beyond-burden'];
    const reviewOutputs=reviewPriority.map(id=>outputs.find(x=>x.id===id&&x.bucket==='under-review')).filter(Boolean);
    return `<section class="hero hero-home" id="homeHero">
      <div class="container hero-container">
        <div class="hero-shell">
          <div class="hero-grid hero-grid-premium">
            <div class="hero-copy">
              <div class="hero-domain-eyebrow" aria-label="Primary academic domains">
                <span>Statistics</span><i>·</i><span>Data Science</span><i>·</i><span>Artificial Intelligence</span><i>·</i><span>Research</span>
              </div>
              <h1 class="hero-title hero-name">
                <span class="hero-name-primary">Md. Razu</span>
                <span class="hero-name-accent">Ahmed</span>
              </h1>
              <div class="hero-subline hero-role-line">Statistician <span>·</span> Data Scientist <span>·</span> Researcher <span>·</span> Peer Reviewer</div>
              <p class="hero-intro">I am a statistician, data scientist, and interdisciplinary data researcher working across statistical learning, artificial intelligence, public health, and biomedical data science. My work develops rigorous, reproducible, and interpretable analytical workflows that combine statistical methodology with machine learning to address real-world research questions.</p>
              <div class="hero-status-line"><span class="live-dot"></span><strong>Portfolio online</strong><span class="clock" data-clock>Dhaka · UTC+06:00</span></div>
              <div class="hero-opportunity"><span class="hero-collab-dot"></span><strong>Open to PhD opportunities</strong><span>Research collaborations · academic partnerships</span></div>
              <div class="cta-row hero-actions"><a class="btn primary hero-primary" href="research.html">Explore Research <span aria-hidden="true">↗</span></a><a class="btn" href="cv.html">View CV</a><a class="btn hero-collab" href="contact.html">Collaborate</a></div>
              <div class="hero-secondary-links"><a href="ask-razu.html">Ask Razu AI</a><span>·</span><a href="dashboard-live.html?v=20260923-dashboardlive56">Research Dashboard</a></div>
              <div class="hero-impact" aria-label="Research profile highlights">
                <div class="impact-chip"><strong>3</strong><span>Published / Online</span></div>
                <div class="impact-chip"><strong>1</strong><span>Accepted / Forthcoming</span></div>
                <div class="impact-chip"><strong>32</strong><span>Peer Reviews</span></div>
                <div class="impact-chip"><strong>8</strong><span>Conference Contributions</span></div>
              </div>
            </div>
            <div class="portrait-stage portrait-stage-editorial" id="heroPortraitStage">
              <div class="portrait-aura" aria-hidden="true"></div>
              <div class="portrait-accent-orb portrait-accent-orb-a" aria-hidden="true"></div>
              <div class="portrait-accent-orb portrait-accent-orb-b" aria-hidden="true"></div>
              <div class="portrait-backplate portrait-backplate-a" aria-hidden="true"></div>
              <div class="portrait-backplate portrait-backplate-b" aria-hidden="true"></div>
              <div class="portrait-float portrait-float-editorial">
                <div class="portrait-frame portrait-frame-editorial">
                  <div class="portrait-frame-inner portrait-frame-inner-editorial">
                    ${safeImg('assets/profile/razu-portrait.jpg','Md. Razu Ahmed','portrait hero-portrait')}
                    <div class="portrait-shine" aria-hidden="true"></div>
                  </div>
                </div>
              </div>
              <div class="portrait-caption portrait-caption-editorial"><span class="hero-name-node small" aria-hidden="true"></span><span>MRA Research Intelligence</span></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section home-metrics-section"><div class="container">
      ${sectionHead('Research profile','At a glance','A compact view of the current academic and scholarly record.')}
      <div class="grid grid-4 home-metric-grid">${(D.quickProfile||[]).slice(0,8).map(m=>`<article class="card metric metric-card"><strong>${esc(m.value)}</strong><span>${esc(m.label)}</span></article>`).join('')}</div>
    </div></section>

    <section class="section alt selected-works-section home-published-work"><div class="container">
      <div class="selected-works-head">${sectionHead('Published research','Selected Published Works','Peer-reviewed journal articles are shown here separately from accepted and submitted manuscripts.')}<a class="section-text-link" href="publications.html?status=published">View published record ↗</a></div>
      <div class="selected-works-grid">${selected.map(selectedWorkCard).join('')}</div>
      ${publishedDataset?`<div class="more-outputs-wrap home-published-dataset">
        <div class="more-outputs-head"><span>Published research data</span><a href="publications.html?status=dataset">View dataset ↗</a></div>
        <div class="more-outputs-grid">${compactResearchOutputCard(publishedDataset)}</div>
      </div>`:''}
    </div></section>

    ${acceptedOutputs.length?`<section class="section home-accepted-work"><div class="container">
      ${sectionHead('Accepted / forthcoming','Accepted scholarly work','Accepted work is presented separately from both published outputs and manuscripts still under review.')}
      <div class="more-outputs-grid home-status-output-grid">${acceptedOutputs.map(compactResearchOutputCard).join('')}</div>
      <div class="section-action"><a class="section-text-link" href="publications.html?status=accepted">View accepted record ↗</a></div>
    </div></section>`:''}

    ${reviewOutputs.length?`<section class="section alt home-under-review-work"><div class="container">
      ${sectionHead('Editorial process','Current manuscript pipeline','Current journal-workflow states are shown explicitly, and these manuscripts remain separate from published and accepted outputs.')}
      <div class="more-outputs-grid home-status-output-grid">${reviewOutputs.map(compactResearchOutputCard).join('')}</div>
      <div class="section-action"><a class="section-text-link" href="publications.html?status=under-review">View editorial-process manuscripts ↗</a></div>
    </div></section>`:''}

    <section class="section"><div class="container">
      ${sectionHead('Research identity','Statistics, AI & decision-relevant evidence','Methodological rigor first; predictive flexibility second; interpretation, reproducibility and real-world usefulness throughout.')}
      <div class="feature-band editorial-feature-band"><article class="card quote-card editorial-card"><div class="section-kicker">Research statement</div><p>${esc(D.research?.statement||'')}</p></article><div class="grid">${(D.research?.principles||[]).map(x=>`<article class="card editorial-card"><h3>${esc(x.title)}</h3><p>${esc(x.detail)}</p></article>`).join('')}</div></div>
    </div></section>

    <section class="section alt home-research-themes"><div class="container">
      ${sectionHead('Research themes','Methods & application domains','A concise map of the methodological areas and application contexts that define my current research profile.')}
      <div class="research-theme-matrix">
        <article class="research-theme-column">
          <div class="research-theme-label"><span>01</span><div><small>Methodological core</small><h3>Methods</h3></div></div>
          <div class="research-theme-tags">${(D.research?.methods||[]).map((x,i)=>`<span><b>${String(i+1).padStart(2,'0')}</b>${esc(x)}</span>`).join('')}</div>
        </article>
        <article class="research-theme-column">
          <div class="research-theme-label"><span>02</span><div><small>Application context</small><h3>Domains</h3></div></div>
          <div class="research-theme-tags">${(D.research?.applications||[]).map((x,i)=>`<span><b>${String(i+1).padStart(2,'0')}</b>${esc(x)}</span>`).join('')}</div>
        </article>
      </div>
      <div class="section-action"><a class="section-text-link" href="research.html">Explore research profile ↗</a></div>
    </div></section>

    <section class="section alt"><div class="container">
      ${sectionHead('Portfolio compass','Explore the research ecosystem','A concise route into research, academic development, networks, evidence and tools.')}
      <div class="grid grid-3 portfolio-compass-v3">${(D.compass||[]).map(c=>`<a class="card compass-card editorial-card" href="${c.href}"><div><h3>${esc(c.title)}</h3><p>${esc(c.detail)}</p></div><span class="arrow">Explore <b>↗</b></span></a>`).join('')}</div>
    </div></section>

    <section class="section home-research-evolution"><div class="container">
      ${sectionHead('Research evolution','From statistical foundations to decision-focused AI','A chronological view of how my work has expanded from statistical learning and signal processing toward biomedical AI, forecasting, explainability and decision-relevant research.')}
      <div class="research-evolution-track">
        ${(D.research?.evolution||[]).map((x,i)=>`<article class="research-evolution-step">
          <div class="evolution-marker"><span>${String(i+1).padStart(2,'0')}</span></div>
          <div class="evolution-copy"><small>${esc(x.year||'')}</small><h3>${esc(x.title||'')}</h3><p>${esc(x.detail||'')}</p></div>
        </article>`).join('')}
      </div>
      <div class="section-action"><a class="section-text-link" href="research.html">View full research direction ↗</a></div>
    </div></section>

    <section class="section"><div class="container">
      ${sectionHead('Academic research & fieldwork','Statistical Field Survey','A supervised B.Sc. field-research component that progressed to an oral conference presentation and an accepted journal article.')}
      ${fieldSurveyCard()}
    </div></section>

    <section class="section alt"><div class="container">
      ${sectionHead('Academic network','Guidance, collaboration & mentorship','A selected view of the people connected to my academic development and research collaborations.')}
      <div class="grid grid-4 home-network-preview">${(D.people||[]).slice(0,4).map(personCard).join('')}</div>
      <div class="home-network-secondary">${(D.people||[]).slice(4,8).map(homeNetworkMiniCard).join('')}</div>
      <div class="section-action"><a class="section-text-link" href="network.html">Explore full research network ↗</a></div>
    </div></section>

    <section class="section"><div class="container">
      ${sectionHead('Scholarly service','Peer review & academic contribution','Invited peer-review activity across international journals.')}
      <div class="grid grid-4 service-grid-v3"><article class="card metric metric-card"><strong>32</strong><span>Completed invited reviews</span></article><article class="card editorial-card"><h3>PLOS ONE</h3><p>25 completed reviews</p></article><article class="card editorial-card"><h3>Biomedical Signal Processing and Control</h3><p>6 completed reviews</p></article><article class="card editorial-card"><h3>Engineering Applications of Artificial Intelligence</h3><p>1 completed review</p></article></div>
    </div></section>

    <section class="section alt"><div class="container">
      ${sectionHead('Latest activity','Recent research updates','Recent public milestones across publications, submissions, conferences and research development.')}
      <div class="timeline">${(D.latestUpdates||[]).slice(0,6).map(u=>`<div class="timeline-item"><strong>${esc(u.date||'')}</strong><h3>${esc(u.title||u.label||'')}</h3><p>${esc(u.detail||u.description||'')}</p></div>`).join('')}</div>
    </div></section>

    <section class="section"><div class="container">
      ${sectionHead('Research intelligence','Ask Razu AI','Explore the public portfolio through evidence-grounded research intelligence.')}
      <article class="card editorial-card research-intelligence-cta"><div><div class="section-kicker">Portfolio assistant</div><h3>Ask about research, methods, coursework, conferences, collaborators and public scholarly records.</h3></div><a class="btn primary" href="ask-razu.html">Open Ask Razu AI ↗</a></article>
    </div></section>`;
  }

  function datasetOutputCard(p){
    const id=(p.id||'pust-cafeteria-dataset').toLowerCase();
    const linkObj=D.publicationLinks?.[id]||p.links||{};
    return `<article class="card output-card editorial-card dataset-output-card" id="output-${esc(id)}" data-output-bucket="published" data-output-kind="dataset">
      <div class="dataset-card-head">
        <div class="dataset-brand-lockup">
          <span class="dataset-mendeley-mark" aria-hidden="true"><img src="https://cdn.simpleicons.org/mendeley" alt="" loading="lazy" decoding="async"></span>
          <div><div class="dataset-eyebrow">Published Dataset</div><strong>${esc(p.repository||'Mendeley Data')}</strong></div>
        </div>
        <div class="meta dataset-card-meta"><span class="badge">Published</span><span class="badge">Version ${esc(p.version||'2')}</span>${p.role?`<span class="badge">${esc(p.role)}</span>`:''}</div>
      </div>

      <h3>${esc(p.title||'Published dataset')}</h3>
      <p class="dataset-summary">${esc(p.summary||'')}</p>

      <div class="dataset-fact-strip">
        <div><strong>${esc(p.originalImages||'')}</strong><span>Original images</span></div>
        <div><strong>${esc(p.processedImages||'')}</strong><span>Processed images</span></div>
        <div><strong>${esc(p.annotatedInstances||'')}</strong><span>Annotated instances</span></div>
        <div><strong>${esc(p.classes||'')}</strong><span>Food classes</span></div>
      </div>

      <div class="dataset-meta-grid">
        ${p.publishedDate?`<div><span>Published</span><strong>${esc(p.publishedDate)}</strong></div>`:''}
        ${p.license?`<div><span>License</span><strong>${esc(p.license)}</strong></div>`:''}
        ${p.split?`<div><span>Final split</span><strong>${esc(p.split)}</strong></div>`:''}
        ${p.imageSize?`<div><span>Image size</span><strong>${esc(p.imageSize)}</strong></div>`:''}
      </div>

      ${p.contributors?`<div class="dataset-contributors"><span>Contributors</span><p>${highlightCitationAuthor(p.contributors,'full')}</p></div>`:''}

      ${(p.annotationFormats||[]).length?`<div class="dataset-format-row"><span class="dataset-format-label">Released annotation formats</span><div class="project-tags">${(p.annotationFormats||[]).map(x=>`<span>${esc(x)}</span>`).join('')}</div></div>`:''}

      ${(p.citationAPA||p.citationIEEE)?`<div class="publication-citation-block dataset-citation-block"><div class="publication-citation-label">Cite the dataset</div>${dualAcademicCitation(p.citationAPA,p.citationIEEE)}</div>`:''}

      <div class="dataset-related-row">
        <div><span>Related peer-reviewed article</span><strong>Data in Brief · Volume 69 · Article 113262</strong></div>
        ${p.relatedArticle?`<a href="${esc(p.relatedArticle)}" target="_blank" rel="noopener noreferrer">Open article ↗</a>`:''}
      </div>

      <div class="dataset-impact-row">
        <div><span>Impact tracking</span><strong>Mendeley Data reuse metrics · PlumX Metrics altmetrics</strong></div>
        <a href="https://www.elsevier.com/insights/metrics/plumx" target="_blank" rel="noopener noreferrer">PlumX methodology ↗</a>
      </div>

      <div class="link-row publication-link-row dataset-link-row" aria-label="Dataset links">${publicationBrandLinks(linkObj)}</div>
    </article>`;
  }

  function compactDatasetResearchCard(p){
    if(!p)return '';
    return `<article class="card research-dataset-card">
      <div class="research-dataset-brand">
        <span class="dataset-mendeley-mark" aria-hidden="true"><img src="https://cdn.simpleicons.org/mendeley" alt="" loading="lazy" decoding="async"></span>
        <div><span class="section-kicker">Open research data</span><h3>Published on ${esc(p.repository||'Mendeley Data')}</h3></div>
        <span class="badge">V${esc(p.version||'2')}</span>
      </div>
      <h4>${esc(p.title||'')}</h4>
      <p>${esc(p.summary||'')}</p>
      <div class="research-dataset-stats">
        <span><strong>${esc(p.processedImages||'')}</strong> images</span>
        <span><strong>${esc(p.annotatedInstances||'')}</strong> instances</span>
        <span><strong>${esc(p.classes||'')}</strong> classes</span>
        <span><strong>${esc(p.license||'')}</strong> license</span>
      </div>
      <div class="research-dataset-actions"><a class="btn small primary" href="publications.html#output-${esc((p.id||'').toLowerCase())}">View dataset record</a><a class="btn small ghost" href="${esc(p.doi||'#')}" target="_blank" rel="noopener noreferrer">Dataset DOI ↗</a></div>
    </article>`;
  }

  function outputCard(p){
    if(p.outputKind==='dataset'||p.type==='Dataset')return datasetOutputCard(p);
    const id=(p.id||'').toLowerCase();
    const linkObj=D.publicationLinks?.[id]||p.links||{};
    const js=p.journalStanding||null;
    return `<article class="card output-card editorial-card" id="output-${esc(id)}" data-output-bucket="${esc(p.bucket||'')}" data-output-kind="${esc((p.type||'article').toLowerCase())}">
      <div class="meta"><span class="badge">${esc(p.status||p.bucket||'Research')}</span>${p.role?`<span class="badge">${esc(p.role)}</span>`:''}</div>
      <h3>${esc(p.title||'Untitled')}</h3>
      ${p.bucket==='under-review'
        ? `<div class="editorial-journal-info">
            <div class="editorial-journal-main"><span>Journal</span><strong>${esc(p.journal||p.venue||'')}</strong></div>
            ${p.publisher?`<div class="editorial-publisher"><span>Publisher</span><strong>${esc(p.publisher)}</strong></div>`:''}
          </div>`
        : `<p>${esc(p.journal||p.venue||p.summary||p.description||'')}</p>`}
      ${(p.citationAPA||p.citationIEEE)
        ? `<div class="publication-citation-block"><div class="publication-citation-label">APA & IEEE citations</div>${dualAcademicCitation(p.citationAPA,p.citationIEEE)}</div>`
        : (p.citation? `<p class="output-citation">${esc(p.citation)}</p>` : '')}
      ${js?`<div class="output-standing">
        ${js.jif2025?`<span><strong>${esc(js.jif2025)}</strong>JIF</span>`:''}
        ${js.citeScore2025?`<span><strong>${esc(js.citeScore2025)}</strong>CiteScore</span>`:''}
        ${js.quartile?`<span><strong>${esc(js.quartile)}</strong>Quartile</span>`:''}
        ${js.snip2025?`<span><strong>${esc(js.snip2025)}</strong>SNIP</span>`:''}
        ${js.sjr2025?`<span><strong>${esc(js.sjr2025)}</strong>SJR</span>`:''}
        ${js.hIndex?`<span><strong>${esc(js.hIndex)}</strong>H-index</span>`:''}
        ${js.jci2025?`<span><strong>${esc(js.jci2025)}</strong>JCI</span>`:''}
        <small>${esc([js.publisher,js.onlineIssn?`Online ISSN: ${js.onlineIssn}`:'',js.indexing].filter(Boolean).join(' · '))}</small>
      </div>`:''}
      ${(p.indexingDiscovery||[]).length?`<div class="publication-indexing-panel">
        <div class="publication-indexing-label">Indexing & discovery</div>
        <div class="scholarly-brand-row scholarly-brand-row-indexing publication-indexing-brands">
          ${academicBrandAsset('assets/academic/journals/ijss/banglajol.png','BanglaJOL','is-wide')}
          ${scholarlyBrandIcon('ici','ICI')}
          ${scholarlyBrandIcon('esji','ESJI')}
          ${scholarlyBrandIcon('bansdoc','BANSDOC')}
        </div>
        <div class="journal-indexing publication-indexing-list">${(p.indexingDiscovery||[]).map(x=>`<span>${esc(x)}</span>`).join('')}</div>
      </div>`:''}
      <div class="link-row publication-link-row" aria-label="Publication links">${publicationBrandLinks(linkObj)}</div>
    </article>`;
  }
  function personCard(x){return `<article class="card person-card">${safeImg(x.portrait,x.name,'avatar')}<h3>${esc(x.name)}</h3><div class="meta">${(x.roles||[]).map(r=>`<span class="badge">${esc(r)}</span>`).join('')}</div><p><strong>${esc(x.affiliation||'')}</strong></p><p>${esc(x.description||'')}</p><div class="link-row">${(x.links||[]).map(l=>ext(l.url,l.label)).join(' · ')}</div></article>`;}
  function academicGradeBadge(grade='A+',compact=false){
    const g=esc(grade||'A+');
    return `<span class="academic-grade-badge ${compact?'is-compact':''}" aria-label="${g} academic grade">
      <span class="academic-grade-badge-medal" aria-hidden="true">
        <svg viewBox="0 0 64 72" focusable="false">
          <path class="grade-ribbon grade-ribbon-left" d="M19 46 12 69l14-6 6 8 4-23z"/>
          <path class="grade-ribbon grade-ribbon-right" d="m45 46 7 23-14-6-6 8-4-23z"/>
          <circle class="grade-medal-outer" cx="32" cy="27" r="23"/>
          <circle class="grade-medal-ring" cx="32" cy="27" r="18.5"/>
          <circle class="grade-medal-inner" cx="32" cy="27" r="15.5"/>
        </svg>
        <strong>${g}</strong>
      </span>
    </span>`;
  }

  function highlightCitationAuthor(citation,style='apa'){
    let out=esc(citation||'');
    const names=style==='ieee'
      ? ['M. R. Ahmed','Md. Razu Ahmed']
      : ['Ahmed, M. R.','Md. Razu Ahmed'];
    names.forEach(name=>{
      const safe=esc(name);
      out=out.split(safe).join(`<strong class="citation-self">${safe}</strong>`);
    });
    return out;
  }

  function dualAcademicCitation(apa='',ieee=''){
    if(!apa&&!ieee)return '';
    return `<div class="dual-citation" aria-label="APA and IEEE citation formats">
      ${apa?`<div class="citation-format citation-format-apa"><span class="citation-style-label">APA</span><p>${highlightCitationAuthor(apa,'apa')}</p></div>`:''}
      ${ieee?`<div class="citation-format citation-format-ieee"><span class="citation-style-label">IEEE</span><p>${highlightCitationAuthor(ieee,'ieee')}</p></div>`:''}
    </div>`;
  }

  function fieldSurveyCard(){
    const f=D.fieldSurvey||{}, c=f.conference||{};
    const academicCitationMode=page==='academic';
    return `<article class="card field-survey-card">
      <div class="meta">
        <span class="badge">${esc(f.courseCode||'')}</span>
        <span class="badge">${esc(f.degree||'')}</span>
        <span class="badge">${esc(f.credits||'')} credits</span>
        ${f.grade?`<span class="academic-grade-pill">${academicGradeBadge(f.grade,true)}<small>${esc(f.gradeLabel||'Grade')}</small></span>`:''}
      </div>
      <h3>${esc(f.study||f.title||'')}</h3>
      <div class="field-survey-topline">
        <p><strong>Supervisor:</strong> ${esc(f.supervisor||'')}</p>
        <p><strong>Research team:</strong> ${esc((f.team||[]).join(' · '))}</p>
      </div>

      <div class="field-survey-facts">
        <div><strong>${esc(f.population||'')}</strong><span>Study frame</span></div>
        <div><strong>${esc(f.sample||'')}</strong><span>Analytical sample</span></div>
        <div><strong>${esc(f.variables||'')}</strong><span>Study variables</span></div>
        <div><strong>${esc(f.design||'')}</strong><span>Design & data collection</span></div>
      </div>

      ${f.workflowAsset?`<figure class="field-survey-workflow">
        <div class="workflow-titlebar"><span class="workflow-title-icon">${uiIcon('field')}</span><div><span class="section-kicker">Methodological workflow</span><strong>B.Sc. Statistical Field Survey Workflow</strong></div></div>
        <div class="workflow-frame workflow-frame-light">
          <img src="${esc(f.workflowAsset)}" alt="Workflow of the statistical field survey on attitudes toward AI and the job market">
        </div>
        <figcaption><strong>Workflow.</strong> ${esc(f.workflowCaption||'Field-survey methodology workflow.')}</figcaption>
      </figure>`:''}

      ${(f.keywords||[]).length?`<div class="field-survey-keywords"><div class="project-block-label">Keywords</div><div class="project-tags">${(f.keywords||[]).map(x=>`<span>${esc(x)}</span>`).join('')}</div></div>`:''}

      <div class="progression progression-3">${(f.progression||[]).map(x=>`<div class="step">${esc(x)}</div>`).join('')}</div>

      <div class="field-survey-conference-bridge">
        <div class="field-survey-conference-head">
          <img class="conference-brand-logo-exact" src="assets/academic/conferences/icrast-2025-faculty-science-logo-original.jpeg?v=20260919-icrast-logo25" alt="Faculty of Science, University of Rajshahi logo" loading="eager" decoding="async">
          <div><div class="section-kicker">Conference progression</div><h4>${esc(c.fullName||c.shortName||'Conference presentation')}</h4><p>${esc(c.organizer||c.host||'')} · ${esc(c.date||'')}</p></div>
          <span class="badge">${esc(c.presentation||'Presentation')}</span>
        </div>
        ${c.summary?`<p class="field-survey-conference-summary">${esc(c.summary)}</p>`:''}
        <div class="field-survey-conference-facts">
          <div><span>Paper ID</span><strong>${esc(c.paperId||'440')}</strong></div>
          <div><span>Role</span><strong>${esc(c.role||'Presenting Author')}</strong></div>
          <div><span>Record</span><strong>${esc(c.source||'Book of Abstracts')}${c.page?` · ${esc(c.page)}`:''}</strong></div>
        </div>
        <div class="academic-progression-line" aria-label="Academic research progression"><span>Field Survey</span><i aria-hidden="true">→</i><span>ICRAST Presentation</span><i aria-hidden="true">→</i><span>Journal Article</span></div>
        <div class="field-survey-conference-actions">
          <a class="btn small" href="conferences.html?v=20260919-logosvg17#icrast-2025">View Full Conference Profile</a>
          <a class="btn small ghost academic-certificate-link" href="assets/academic/conferences/icrast-2025-paper-440-certificate.jpeg" target="_blank" rel="noopener noreferrer">Certificate ↗</a>
          <a class="btn small ghost" href="assets/academic/conferences/icrast-2025-documents/icrast-2025-paper-440-proceedings.pdf" target="_blank" rel="noopener noreferrer">Proceedings PDF ↗</a>
          <a class="btn small ghost" href="assets/academic/conferences/icrast-2025-documents/icrast-2025-paper-440-presentation.pdf" target="_blank" rel="noopener noreferrer">Presentation PDF ↗</a>
        </div>
      </div>

      ${f.article?`<div class="journal-progression journal-progression-rich">
        <div class="journal-progression-head">
          <div>
            <div class="section-kicker">Journal progression</div>
            <h4>${esc(f.article.title||'')}</h4>
            <p class="journal-name"><strong>${esc(f.article.journal||'')}</strong></p>
          </div>
          <span class="badge journal-status">${esc(f.article.status||'')}</span>
        </div>
        <div class="journal-identity-panel journal-identity-ijss">
          <div class="journal-cover-shell">
            <img class="journal-cover-thumb" src="assets/academic/journals/ijss/cover.webp" alt="International Journal of Statistical Sciences cover" loading="lazy" decoding="async">
          </div>
          <div class="journal-identity-main">
            <div class="journal-identity-label">Journal & institutional identity</div>
            <div class="institution-logo-row">
              ${academicBrandAsset('assets/academic/journals/ijss/department-statistics-data-science-ru.webp?v=20260919-deptlogo2','Department of Statistics and Data Science, University of Rajshahi','is-square is-department')}
              ${academicBrandAsset('assets/academic/journals/ijss/ru-logo.webp','University of Rajshahi','is-square')}
              ${academicBrandAsset('assets/academic/journals/ijss/banglajol.png','BanglaJOL','is-wide')}
            </div>
            <p class="journal-identity-note">Published by the Department of Statistics and Data Science, University of Rajshahi, and hosted on Bangladesh Journals Online (BanglaJOL).</p>
          </div>
        </div>
        <div class="journal-meta-strip">
          ${f.article.acceptedDate?`<span><strong>Accepted</strong>${esc(f.article.acceptedDate)}</span>`:''}
          ${f.article.forthcoming?`<span><strong>Forthcoming</strong>${esc(f.article.forthcoming)}</span>`:''}
          ${f.article.issn?`<span><strong>ISSN</strong>${esc(f.article.issn)}</span>`:''}
          ${f.article.abbreviatedJournal?`<span><strong>Abbrev.</strong>${esc(f.article.abbreviatedJournal)}</span>`:''}
        </div>
        <div class="journal-links">${(f.article.links||[]).map(x=>ext(x.url,x.label)).join(' · ')}</div>
        <details class="journal-details">
          <summary>Publication record & journal profile</summary>
          ${f.article.citation?`<div class="journal-detail-block"><span class="detail-label">${academicCitationMode?'Citation formats':'Reference'}</span>${academicCitationMode?dualAcademicCitation(f.article.citation,f.article.citationIEEE):`<p>${esc(f.article.citation)}</p>`}</div>`:''}
          ${f.article.publisher?`<div class="journal-detail-block"><span class="detail-label">Publisher</span><p>${esc(f.article.publisher)}</p></div>`:''}
          ${f.article.publicationModel?`<div class="journal-detail-block"><span class="detail-label">Journal model</span><p>${esc(f.article.publicationModel)}</p></div>`:''}
          ${f.article.journalSince?`<div class="journal-detail-block"><span class="detail-label">Journal history</span><p>${esc(f.article.journalSince)}. ${esc(f.article.hosting||'')}</p></div>`:''}
          ${f.article.license?`<div class="journal-detail-block"><span class="detail-label">License</span><div class="journal-license-row">${scholarlyBrandIcon('creativecommons','CC BY-NC-SA 4.0')}<p>${esc(f.article.license)}</p></div></div>`:''}
          ${(f.article.indexing||[]).length?`<div class="journal-detail-block"><span class="detail-label">Indexing & discovery</span>
            <div class="scholarly-brand-row scholarly-brand-row-indexing">
              ${academicBrandAsset('assets/academic/journals/ijss/banglajol.png','BanglaJOL','is-wide')}
              ${scholarlyBrandIcon('ici','ICI')}
              ${scholarlyBrandIcon('esji','ESJI')}
              ${scholarlyBrandIcon('bansdoc','BANSDOC')}
            </div>
            <div class="journal-indexing">${(f.article.indexing||[]).map(x=>`<span>${esc(x)}</span>`).join('')}</div>
          </div>`:''}
          ${f.article.contact?.office?`<div class="journal-detail-block"><span class="detail-label">Official journal address</span><p>${esc(f.article.contact.office)}${f.article.contact.email?` · ${ext('mailto:'+f.article.contact.email,f.article.contact.email)}`:''}</p></div>`:''}
        </details>
      </div>`:''}
    </article>`;
  }

  function curriculumDomainCard(g){
    const courses=g.courses||[];
    const groups=g.groups||[];
    const items=g.items||[];
    const courseCount=courses.length+groups.reduce((n,x)=>n+(x.courses||[]).length,0);
    const meta=items.length?`${items.length} research / assessment components`:`${courseCount} courses`;
    const body=groups.length
      ? groups.map(gr=>`<div class="curriculum-subgroup"><strong>${esc(gr.label||'')}</strong>${tags(gr.courses||[])}</div>`).join('')
      : items.length
        ? `<div class="curriculum-components">${items.map(x=>`<div class="curriculum-component"><strong>${esc(x.title)}</strong><span>${esc(x.credits)} credits</span><p>${esc(x.detail||'')}</p></div>`).join('')}</div>`
        : tags(courses);
    return `<article class="card curriculum-domain" data-search="${esc((g.name+' '+g.description+' '+courses.join(' ')+' '+groups.map(x=>(x.courses||[]).join(' ')).join(' ')+' '+items.map(x=>x.title).join(' ')).toLowerCase())}">
      <div class="curriculum-domain-head"><span class="domain-index">${esc(String((D.coursework?.categories||[]).indexOf(g)+1).padStart(2,'0'))}</span><div><h3>${esc(g.name||'Academic domain')}</h3><p>${esc(g.description||'')}</p></div></div>
      <div class="curriculum-domain-meta">${esc(meta)}</div>
      <details><summary>View coursework & components</summary><div class="curriculum-domain-body">${body}</div></details>
    </article>`;
  }

  function academicProjectCard(p){
    const isEngineeringReports=(p.journal?.name||'').toLowerCase()==='engineering reports';
    return `<article class="card academic-project-card academic-project-rich">
      <div class="academic-project-head">
        <div>
          <div class="meta"><span class="badge">${esc(p.level||'')}</span><span class="badge">${esc(p.credits||'')} credits</span>${p.type?`<span class="badge">${esc(p.type)}</span>`:''}${p.grade?`<span class="academic-grade-pill">${academicGradeBadge(p.grade,true)}<small>${esc(p.gradeLabel||'Grade')}</small></span>`:''}</div>
          <div class="tiny project-course">${esc(p.course||'')}</div>
          <h3>${esc(p.title||'')}</h3>
        </div>
      </div>

      ${p.focus?`<p class="project-focus"><strong>Research focus:</strong> ${esc(p.focus)}</p>`:''}
      <p class="project-summary">${esc(p.summary||p.outcome||'')}</p>

      ${(p.metrics||[]).length?`<div class="project-metrics">${(p.metrics||[]).map(m=>`<div><strong>${esc(m.value||'')}</strong><span>${esc(m.label||'')}</span></div>`).join('')}</div>`:''}

      ${p.benchmark?`<div class="project-benchmark"><strong>Comparative result</strong><p>${esc(p.benchmark)}</p></div>`:''}

      ${(p.methods||[]).length?`<div class="project-block"><div class="project-block-label">Methods & techniques</div><div class="project-tags">${(p.methods||[]).map(x=>`<span>${esc(x)}</span>`).join('')}</div></div>`:''}

      ${p.figure?`<figure class="project-figure research-figure-card">
        <div class="research-figure-frame">
          <img class="project-figure-img" src="${esc(p.figure)}" alt="${esc(p.figureAlt||p.figureCaption||p.title||'Academic project figure')}" loading="lazy" decoding="async">
        </div>
        <figcaption><strong>Figure.</strong> ${esc(p.figureCaption||'Academic project figure.')}</figcaption>
      </figure>`:''}

      ${(p.keywords||[]).length?`<div class="project-block project-keywords"><div class="project-block-label">Keywords</div><div class="project-tags">${(p.keywords||[]).map(x=>`<span>${esc(x)}</span>`).join('')}</div></div>`:''}

      ${p.journal?`<div class="project-journal-card">
        <div class="project-journal-head">
          <div><span class="section-kicker">Journal standing & citation impact</span><h4>${esc(p.journal.name||'')}</h4></div>
          ${p.outputUrl?`<a class="doi-icon-link doi-icon-link-modern" href="${esc(p.outputUrl)}" target="_blank" rel="noopener noreferrer" aria-label="Open DOI ${esc(p.doi||'')}" title="Open DOI: ${esc(p.doi||'')}">${scholarlyBrandIcon('doi')}<span class="doi-link-text">${esc(p.doi||'Open DOI')}</span></a>`:''}
        </div>
        ${isEngineeringReports?`<div class="journal-identity-panel journal-identity-engineering">
          <div class="journal-cover-shell">
            <img class="journal-cover-thumb" src="assets/academic/journals/engineering-reports/cover.webp" alt="Engineering Reports Volume 8 Number 1 January 2026 cover" loading="lazy" decoding="async">
          </div>
          <div class="journal-identity-main journal-identity-main-engineering">
            <div class="journal-identity-brand">
              <img class="journal-title-logo" src="assets/academic/journals/engineering-reports/logo.webp" alt="Engineering Reports" loading="lazy" decoding="async">
              <div class="publisher-logo-row">
                <span class="publisher-logo-card"><img src="assets/academic/journals/engineering-reports/wiley-wordmark.webp" alt="Wiley" loading="lazy" decoding="async"></span>
              </div>
              ${p.journal.officialUrl?`<a class="journal-library-link journal-library-link-wiley" href="${esc(p.journal.officialUrl)}" target="_blank" rel="noopener noreferrer"><span class="journal-library-logo-shell"><img src="assets/academic/journals/engineering-reports/wiley-online-library.webp" alt="Wiley Online Library" loading="lazy" decoding="async"></span><span class="journal-library-copy"><small>Publisher platform</small><strong>Official journal page ↗</strong></span></a>`:''}
            </div>
            <div class="journal-identity-discovery">
              <div class="journal-identity-label">Indexing & visibility</div>
              <div class="indexing-logo-row">
                ${academicBrandAsset('assets/academic/journals/engineering-reports/web-of-science.webp','Web of Science','is-square')}
                ${academicBrandAsset('assets/academic/journals/engineering-reports/scimago.webp','SCImago','is-square')}
                ${scholarlyBrandIcon('scopus')}
              </div>
              <div class="journal-quick-meta">
                ${p.journal.publisher?`<span><strong>Publisher</strong>${esc(p.journal.publisher)}</span>`:''}
                ${p.journal.onlineIssn?`<span><strong>Online ISSN</strong>${esc(p.journal.onlineIssn)}</span>`:''}
              </div>
              ${p.journal.standing?`<p class="journal-standing-inline">${esc(p.journal.standing)}</p>`:''}
            </div>
          </div>
        </div>`:''}
        ${p.journal.citation?`<div class="project-journal-citation-block"><div class="detail-label">APA & IEEE citations</div>${dualAcademicCitation(p.journal.citation,p.journal.citationIEEE)}</div>`:''}
        ${(p.journal.metrics||[]).length?`<div class="project-journal-metrics">${p.journal.metrics.map(m=>`<div><strong>${esc(m.value||'')}</strong><span>${esc(m.label||'')}</span><small>${esc(m.source||'')}</small></div>`).join('')}</div>`:''}
        ${!isEngineeringReports?`<div class="scholarly-brand-row scholarly-brand-row-project">
          ${scholarlyBrandIcon('wiley')}
          ${scholarlyBrandIcon('scopus')}
          ${scholarlyBrandIcon('clarivate')}
          ${scholarlyBrandIcon('scimago','SCImago')}
        </div>`:''}
        ${!isEngineeringReports?`<div class="project-journal-meta">
          ${p.journal.publisher?`<span><strong>Publisher</strong>${esc(p.journal.publisher)}</span>`:''}
          ${p.journal.onlineIssn?`<span><strong>Online ISSN</strong>${esc(p.journal.onlineIssn)}</span>`:''}
        </div>`:''}
        ${p.journal.standing&&!isEngineeringReports?`<p class="project-journal-standing">${esc(p.journal.standing)}</p>`:''}
        ${p.journal.officialUrl&&!isEngineeringReports?`<a class="journal-home-link" href="${esc(p.journal.officialUrl)}" target="_blank" rel="noopener noreferrer">Official journal page ↗</a>`:''}
      </div>`:''}

      <div class="project-footer">
        <p><strong>Supervisor:</strong> ${esc(p.supervisor||'')}</p>
        <p><strong>Outcome:</strong> ${esc(p.outcome||'')}</p>
        ${p.outputUrl&&!p.journal?`<a class="btn small" href="${esc(p.outputUrl)}" target="_blank" rel="noopener noreferrer">${esc(p.outputLabel||'View related output')}</a>`:''}
      </div>
    </article>`;
  }

  function instructorCard(i){
    return `<article class="card instructor-card instructor-profile-card">
      <div class="instructor-portrait-wrap">
        ${i.portrait?`<img class="instructor-portrait" src="${esc(i.portrait)}" alt="${esc(i.instructor||'Instructor')} portrait" loading="lazy" decoding="async">`:''}
        <span class="instructor-portrait-fallback" aria-hidden="true">${uiIcon('graduation')}</span>
      </div>
      <div class="instructor-profile-head">
        <div>
          <h3>${esc(i.instructor||'')}</h3>
          <div class="instructor-position">${esc(i.position||'')}</div>
          <div class="tiny instructor-role">${esc(i.role||'')}</div>
        </div>
      </div>
      ${i.department||i.institution?`<div class="instructor-affiliation">${i.department?`<strong>${esc(i.department)}</strong>`:''}${i.institution?`<span>${esc(i.institution)}</span>`:''}</div>`:''}
      ${(i.leadership||[]).length?`<div class="instructor-leadership">${(i.leadership||[]).map(x=>`<span>${esc(x)}</span>`).join('')}</div>`:''}
      ${(i.credentials||[]).length?`<details class="instructor-credentials"><summary>Academic credentials</summary><ul>${(i.credentials||[]).map(x=>`<li>${esc(x)}</li>`).join('')}</ul></details>`:''}
      <div class="instructor-course-label">Selected instructor-course links</div>
      <div class="instructor-courses">${(i.courses||[]).map(c=>`<span class="tag">${esc(c)}</span>`).join('')}</div>
    </article>`;
  }

  function profile(){return `${pageHero('Profile','Academic identity, communication, working style and engagement.')}
    <section class="section"><div class="container">${sectionHead('Research profile','Academic identity')}<div class="grid grid-2"><article class="card quote-card"><h3>${esc(D.brand?.headline)}</h3><p>${esc(D.profile?.intro||D.research?.identity||'')}</p></article><article class="card"><h3>Research principles</h3>${tags((D.research?.principles||[]).map(x=>x.title))}</article></div></div></section>
    <section class="section alt"><div class="container">${sectionHead('Academic communication','Languages & Medium of Instruction (MOI)','Native Bangla proficiency, English-medium university education and evidence-based scholarly communication.')} ${languagePanel(true)}<div class="language-cta"><a class="btn primary" href="languages.html">Explore Language & MOI Profile</a></div></div></section>
    <section class="section"><div class="container">${sectionHead('Professional strengths','Evidence-aligned working style')}<div class="grid grid-3">${(D.strengths||[]).map(s=>`<article class="card"><h3>${esc(s.title)}</h3><p>${esc(s.detail)}</p></article>`).join('')}</div></div></section>
    <section class="section alt"><div class="container">${sectionHead('Beyond research','Personal interests & engagement')}<div class="grid grid-2"><article class="card"><h3>Personal interests</h3>${tags(D.personalInterests)}</article><article class="card"><h3>Memberships & extra-curricular engagement</h3><ul>${(D.engagement||[]).map(x=>`<li>${esc(x)}</li>`).join('')}</ul></article></div></div></section>`;}

  function languages(){const lp=D.languageProfile||{};return `${pageHero('Languages & Academic Communication','Native Bangla proficiency, English-medium university education, and evidence-backed scholarly communication across research, conferences and peer review.')}
    <section class="section language-page-intro"><div class="container">
      ${sectionHead('Communication profile','Academic language identity','A research-focused presentation of language proficiency and academic communication, without overstating formal certification.')}
      ${languagePanel(false)}
    </div></section>
    <section class="section alt"><div class="container">
      ${sectionHead('Communication in practice','How language supports the research workflow','English anchors formal academic work; Bangla supports local, field and community-facing communication.')}
      <div class="language-practice-strip">
        <div><span class="practice-icon">${uiIcon('publication')}</span><strong>Research writing</strong><p>Journal manuscripts, technical documentation and scholarly correspondence.</p></div>
        <div><span class="practice-icon">${uiIcon('conference')}</span><strong>Research dissemination</strong><p>Oral/poster presentations and multidisciplinary academic communication.</p></div>
        <div><span class="practice-icon">${uiIcon('review')}</span><strong>Peer review</strong><p>Critical reading and written reviewer feedback across 32 completed invited reviews.</p></div>
        <div><span class="practice-icon">${uiIcon('field')}</span><strong>Field communication</strong><p>Bangla for participant-facing and local academic communication in Bangladesh.</p></div>
      </div>
      <div class="language-links"><a class="btn primary" href="academic.html">Academic Record</a><a class="btn" href="conferences.html">Conference Record</a><a class="btn" href="publications.html">Research Outputs</a></div>
    </div></section>`;}

  function research(){return `${pageHero('Research','Rigorous, interpretable and reproducible data-driven research.')}
    <section class="section"><div class="container">${sectionHead('Research statement','Methodological foundation')}<article class="card quote-card"><p>${esc(D.research?.statement||'')}</p></article></div></section>
    <section class="section alt"><div class="container">${sectionHead('Research philosophy','How I evaluate scientific usefulness')}<div class="grid grid-3">${(D.research?.principles||[]).map(x=>`<article class="card"><h3>${esc(x.title)}</h3><p>${esc(x.detail)}</p></article>`).join('')}</div></div></section>
    <section class="section"><div class="container">${sectionHead('Research map','Methods × applications')}<div class="grid grid-2"><article class="card"><h3>Methods</h3>${tags(D.research?.methods)}</article><article class="card"><h3>Applications</h3>${tags(D.research?.applications)}</article></div></div></section>
    <section class="section alt research-open-data-section"><div class="container">${sectionHead('Published dataset','Open research data','A citable public data release connected to the peer-reviewed Data in Brief article.')}${compactDatasetResearchCard((D.datasets||[])[0])}</div></section>
    <section class="section"><div class="container">${sectionHead('Evolution','Research trajectory')}<div class="timeline">${(D.research?.evolution||[]).map(e=>`<div class="timeline-item"><strong>${esc(e.period||e.year||'')}</strong><h3>${esc(e.title||'')}</h3><p>${esc(e.detail||e.description||'')}</p></div>`).join('')}</div></div></section>
    <section class="section"><div class="container">${sectionHead('Current directions','Ongoing & in preparation')}<div class="grid grid-3">${(D.ongoing||[]).map(x=>`<article class="card"><div class="badge">In preparation</div><h3>${esc(x.title)}</h3><p>${esc(x.objective||x.summary||x.description||'')}</p>${tags(x.methods||x.tags||[])}</article>`).join('')}</div></div></section>`;}

  function publications(){
    const all=D.outputs||[];
    const publishedArticles=all.filter(x=>x.bucket==='published'&&!(x.outputKind==='dataset'||x.type==='Dataset'));
    const datasets=all.filter(x=>x.outputKind==='dataset'||x.type==='Dataset');
    const accepted=all.filter(x=>x.bucket==='accepted');
    const reviewing=all.filter(x=>x.bucket==='under-review');
    return `${pageHero('Publications & Research Outputs','Scroll through the complete scholarly record. Published articles, published data, accepted work and manuscripts in the editorial process remain clearly separated in dedicated sections.')}
    <section class="section publication-directory"><div class="container">
      <div class="publication-controls">
        <div class="search-wrap"><input class="search-input" id="pubSearch" placeholder="Search title, journal, publisher, method or topic…"></div>
        <nav class="publication-section-nav" id="pubSectionNav" aria-label="Publication sections">
          <a href="#published-articles" data-publication-jump="published">Published Articles</a>
          <a href="#published-dataset" data-publication-jump="dataset">Published Dataset</a>
          <a href="#accepted-forthcoming" data-publication-jump="accepted">Accepted / Forthcoming</a>
          <a href="#editorial-process" data-publication-jump="under-review">Editorial Process</a>
        </nav>
      </div>

      <section class="publication-status-group publication-status-published" id="published-articles" data-publication-group="published">
        ${sectionHead('Published articles','Peer-reviewed journal publications','Final published journal articles with bibliographic, journal-metric and discovery information.')}
        <div class="grid grid-2 publication-group-grid">${publishedArticles.map(outputCard).join('')}</div>
      </section>

      <section class="publication-status-group publication-status-dataset" id="published-dataset" data-publication-group="dataset">
        ${sectionHead('Published dataset','Open research data','A citable public data release presented separately from journal articles and manuscript records.')}
        <div class="grid publication-group-grid publication-dataset-grid">${datasets.map(outputCard).join('')}</div>
      </section>

      <section class="publication-status-group publication-status-accepted" id="accepted-forthcoming" data-publication-group="accepted">
        ${sectionHead('Accepted / forthcoming','Accepted scholarly output','Accepted work awaiting final issue publication or complete bibliographic assignment.')}
        <div class="grid grid-2 publication-group-grid">${accepted.map(outputCard).join('')}</div>
      </section>

      <section class="publication-status-group publication-status-reviewing" id="editorial-process" data-publication-group="under-review">
        ${sectionHead('Editorial status','Manuscripts in the editorial process','These manuscripts are not published outputs. Current workflow states such as With Editor, Under Review, Under Revision and Awaiting Admin Processing are shown on each record.')}
        <div class="grid grid-2 publication-group-grid">${reviewing.map(outputCard).join('')}</div>
      </section>
    </div></section>`;
  }

  function academic(){
    const cw=D.coursework||{};
    const domains=cw.categories||[];
    const conferenceGroups=D.conferences||[];
    const conferencePapers=conferenceGroups.flatMap(g=>g.papers||g.items||[]);
    const conferencePresentations=conferencePapers.filter(p=>(p.role||'').includes('Presenting Author')||p.presentedBy==='Md. Razu Ahmed');
    return `${pageHero('Academic','Education, curriculum, fieldwork, supervised projects and research training.')}
    <nav class="academic-jump-nav" aria-label="Academic page sections"><div class="container academic-jump-nav-inner">
      <a href="#academic-education">Education</a>
      <a href="#academic-curriculum">Curriculum</a>
      <a href="#academic-achievement">A+ Research</a>
      <a href="#academic-projects">Projects</a>
      <a href="#academic-fieldwork">Fieldwork</a>
      <a href="#academic-teaching">Teaching</a>
      <a href="#academic-conferences">Conferences</a>
      <a href="#academic-languages">Languages</a>
      <a href="#academic-skills">Skills & Tools</a>
    </div></nav>
    <section class="section academic-education-section" id="academic-education"><div class="container">
      ${academicJourneyIntro()}
      <div class="education-timeline">${(D.education||[]).map(educationCard).join('')}</div>
    </div></section>

    <section class="section alt" id="academic-curriculum"><div class="container">
      ${sectionHead('Academic curriculum','200-credit quantitative foundation','B.Sc. 160 credits + M.S. 40 credits, including 40 laboratory/applied credits across 20 courses, 2 credits of statistical fieldwork, 7 credits of supervised projects and 20 credits of viva-voce assessment.')}
      <div class="grid academic-credit-grid">
        ${academicMetric('credits',cw.summary?.totalCredits ?? 200,'Total university credits',`B.Sc. ${cw.summary?.bscCredits ?? 160} + M.S. ${cw.summary?.msCredits ?? 40}`)}
        ${academicMetric('lab',cw.summary?.laboratoryCredits ?? 40,'Laboratory / applied credits',`${cw.summary?.laboratoryCourses ?? 20} applied courses`)}
        ${academicMetric('field',cw.summary?.fieldSurveyCredits ?? 2,'Field-survey credits','Statistical fieldwork')}
        ${academicMetric('project',cw.summary?.projectCredits ?? 7,'Supervised-project credits','B.Sc. 3 + M.S. 4')}
        ${academicMetric('viva',cw.summary?.vivaCredits ?? 20,'Viva-voce credits','B.Sc. 16 + M.S. 4')}
      </div>
      <div class="curriculum-map-head">
        <div><div class="section-kicker">Curriculum map</div><h3>Six academic domains</h3></div>
        <div class="search-wrap curriculum-search"><input class="search-input" id="courseSearch" aria-label="Search academic curriculum" placeholder="Search a course, method or domain…"></div>
      </div>
      <div class="grid curriculum-domain-grid" id="curriculumGrid">${domains.map(curriculumDomainCard).join('')}</div>
    </div></section>

    <section class="section academic-achievement-section" id="academic-achievement"><div class="container">
      ${sectionHead('Academic achievement','A+ in fieldwork & supervised research','The three formal research-intensive academic components were each completed with an A+ grade.')}
      <div class="academic-grade-showcase">
        <article class="card academic-grade-showcase-card">
          <span class="academic-grade-emblem">${academicGradeBadge(D.fieldSurvey?.grade||'A+')}</span>
          <div><strong>Statistical Field Survey</strong><span>${esc(D.fieldSurvey?.courseCode||'STAT-4110')} · ${esc(D.fieldSurvey?.credits||2)} credits</span></div>
        </article>
        ${(D.academicProjects||[]).map(p=>`<article class="card academic-grade-showcase-card">
          <span class="academic-grade-emblem">${academicGradeBadge(p.grade||'A+')}</span>
          <div><strong>${esc((p.course||'').includes('4210')?'B.Sc. Statistical Project':'M.S. Project')}</strong><span>${esc(p.course||'')} · ${esc(p.credits||'')} credits</span></div>
        </article>`).join('')}
      </div>
    </div></section>

    <section class="section" id="academic-projects"><div class="container">
      ${sectionHead('Supervised research','B.Sc. and M.S. academic projects','Two project-based research components connecting formal coursework to peer-reviewed and applied research outputs.')}
      <div class="academic-project-grid">${(D.academicProjects||[]).map(academicProjectCard).join('')}</div>
    </div></section>

    <section class="section alt" id="academic-fieldwork"><div class="container">
      ${sectionHead('Academic research & fieldwork','B.Sc. Statistical Field Survey','A supervised field-based research component within the B.Sc. (Hons.) curriculum.')}
      ${fieldSurveyCard()}
    </div></section>

    <section class="section" id="academic-teaching"><div class="container">
      ${sectionHead('Teaching network','Selected instructor-course links','Academic teachers and guest teachers connected to major B.Sc. and M.S. coursework, presented with their academic roles, leadership appointments and qualifications.')}
      <div class="grid grid-2 teaching-network">${(D.instructorLinks||[]).map(instructorCard).join('')}</div>
    </div></section>

    <section class="section alt academic-conference-section" id="academic-conferences"><div class="container">
      ${sectionHead('Scholarly communication','Conference activity','A concise academic snapshot of research dissemination. The dedicated conference profile contains the complete event record, source documents, presentation roles and citations.')}
      <div class="academic-conference-panel">
        <div class="academic-conference-metrics">
          <div><strong>${conferenceGroups.length}</strong><span>Events</span></div>
          <div><strong>${conferencePapers.length}</strong><span>Contributions</span></div>
          <div><strong>${conferencePresentations.length}</strong><span>Presented works</span></div>
          <div><strong>1</strong><span>Conference award</span></div>
        </div>
        <div class="academic-conference-list">
          ${conferenceGroups.map((g,i)=>`<article><span class="academic-conference-index">${String(i+1).padStart(2,'0')}</span><div><strong>${esc(g.event||g.full||'Conference')}</strong><p>${esc(g.date||'')} · ${(g.papers||g.items||[]).length} contribution${(g.papers||g.items||[]).length===1?'':'s'}</p></div></article>`).join('')}
        </div>
      </div>
      <div class="language-cta academic-conference-cta"><a class="btn" href="conferences.html">View Full Conference Profile</a></div>
    </div></section>

    <section class="section" id="academic-languages"><div class="container">
      ${sectionHead('Languages & academic communication','Communication profile & Medium of Instruction (MOI)','A professional language record linking proficiency, formal Medium of Instruction and evidence from research, peer review, conferences and field communication.')}
      ${languagePanel(true)}
      <div class="language-cta"><a class="btn" href="languages.html">View Full Language Profile</a></div>
    </div></section>

    <section class="section alt" id="academic-skills"><div class="container">
      ${sectionHead('Technical & analytical skills','Evidence-linked research capability','Methods and technical capabilities grounded in published work, active manuscripts, academic projects, coursework, research software and professional training.')}
      <div class="grid grid-2 technical-skills-grid">${(D.technicalSkills||[]).map(technicalSkillCard).join('')}</div>

      <div class="skills-stack-head">
        <div><div class="section-kicker">Research software & technology stack</div><h3>Tools, libraries, development environments & system tools</h3></div>
        <p>Methods are separated from implementation tools. Libraries, development environments and reproducibility infrastructure are shown as an evidence-backed research stack rather than proficiency scores.</p>
      </div>
      ${researchToolLayout()}
      ${techMarquee()}
      ${computationalEnvironmentPanel()}
    </div></section>`;
  }

  function experience(){return `${pageHero('Experience','Research roles, mentorship and collaborative support.')}<section class="section"><div class="container">${sectionHead('Research experience','Roles & contribution')}<div class="timeline">${(D.experience||[]).map(x=>`<div class="timeline-item"><strong>${esc(x.period||x.date||'')}</strong><h3>${esc(x.title||x.role||'')}</h3><p><strong>${esc(x.organization||x.institution||'')}</strong></p><p>${esc(x.description||x.detail||'')}</p></div>`).join('')}</div></div></section><section class="section alt"><div class="container">${sectionHead('Mentorship','Collaborative research support')}<p class="section-copy">Research mentorship and collaborative support are presented separately from formal academic supervision, with emphasis on study formulation, analysis workflows, validation and manuscript development.</p><div class="grid grid-3">${(D.people||[]).filter(x=>(x.roles||[]).includes('Mentee')).map(personCard).join('')}</div></div></section>`;}

  function conferences(){
    const groups=D.conferences||[];
    const conferencePapers=groups.flatMap(g=>g.papers||g.items||[]);
    const presentedWorks=conferencePapers.filter(p=>(p.role||'').includes('Presenting Author')||p.presentedBy==='Md. Razu Ahmed');
    const conferenceAwards=conferencePapers.filter(p=>(p.role||'').includes('Award')).length;
    const authorLine=s=>esc(s||'').split('Md. Razu Ahmed').join('<strong class="conference-self-author">Md. Razu Ahmed</strong>');
    return `${pageHero('Conferences','Research dissemination, conference publications, presentations and documentary evidence.')}
      <section class="section conference-profile-section"><div class="container">
        ${sectionHead('Conference portfolio','Research dissemination & scholarly communication','Conference activity is organized by event, authorship role and source evidence so each contribution remains easy to verify and explore.')}
        <div class="conference-profile-stats" aria-label="Conference portfolio summary">
          <article><strong>${groups.length}</strong><span>Conference events</span><small>2025–2026</small></article>
          <article><strong>${conferencePapers.length}</strong><span>Contributions</span><small>Authored or co-authored</small></article>
          <article><strong>${presentedWorks.length}</strong><span>Presented works</span><small>Presenting author</small></article>
          <article><strong>${conferenceAwards}</strong><span>Conference award</span><small>JSR poster recognition</small></article>
        </div>
        <div class="conference-groups conference-groups-professional">
          ${groups.map((g,gi)=>`<article class="card conference-group-card ${g.id==='icrast-2025'?'conference-group-featured':''}" id="${esc(g.id||'conference-'+gi)}"><span class="conference-record-number" aria-hidden="true">${String(gi+1).padStart(2,'0')}</span>
            <div class="conference-group-head">
              <div class="conference-group-identity">${g.id==='icrast-2025'?'<img class="conference-event-logo" src="assets/academic/conferences/icrast-2025-faculty-science-logo-original.jpeg?v=20260919-icrast-logo25" alt="Faculty of Science, University of Rajshahi logo" loading="eager" decoding="async">':`<span class="conference-event-monogram" aria-hidden="true">${esc((g.event||'CONF').replace(/\s+\d{4}$/,''))}</span>`}<div><div class="section-kicker">${esc(g.event||'Conference')}</div><h3>${esc(g.full||g.event||'')}</h3></div></div>
              <div class="conference-group-actions">
                ${g.url?`<a class="btn small" href="${esc(g.url)}" target="_blank" rel="noopener noreferrer">Official homepage ↗</a>`:''}
                ${g.flyerUrl?`<a class="btn small ghost" href="${esc(g.flyerUrl)}" target="_blank" rel="noopener noreferrer">Official flyer / CFP ↗</a>`:''}
              </div>
            </div>
            <div class="conference-group-meta conference-group-meta-rich">
              <span><strong>Host</strong>${esc(g.organizer||g.host||'')}</span>
              <span><strong>Date</strong>${esc(g.date||'')}</span>
              ${g.venue?`<span><strong>Venue</strong>${esc(g.venue)}</span>`:''}
              <span><strong>Record</strong>${esc(g.meta||'')}</span>
            </div>
            <div class="conference-paper-list">
              ${(g.papers||g.items||[]).map(p=>`<article class="conference-paper-item ${p.paperId==='440'?'is-presented-paper':''}">
                <div class="conference-paper-meta">
                  ${p.paperId?`<span class="paper-id-chip">Paper ID ${esc(p.paperId)}</span>`:''}
                  ${p.presentation?`<span class="badge">${esc(p.presentation)}</span>`:''}
                  ${p.role?`<span class="badge">${esc(p.role)}</span>`:''}
                  ${p.page?`<span class="badge">${esc(p.page)}</span>`:''}
                </div>
                <h4>${esc(p.title||'')}</h4>
                <p class="conference-authors">${authorLine(p.authors)}</p>
                ${p.presentedBy?`<p class="conference-presented-by"><strong>Presented by:</strong> ${esc(p.presentedBy)}</p>`:''}
                ${(p.evidence||[]).length?`<div class="conference-paper-evidence-links">${p.evidence.map(ev=>`<span class="conference-evidence-link-wrap"><a href="${esc(ev.href||ev.asset||'#')}" ${(ev.href||ev.asset||'#')!=='#'?'target="_blank" rel="noopener noreferrer"':''}>${esc(ev.label||ev.type||'Evidence')} ↗</a></span>`).join('')}${p.evidence.filter(ev=>ev.galleryHref).map(ev=>`<a class="is-gallery-link" href="${esc(ev.galleryHref)}">Gallery evidence →</a>`).join('')}${p.evidence.filter(ev=>ev.officialHref).map(ev=>`<a class="is-official-link" href="${esc(ev.officialHref)}" target="_blank" rel="noopener noreferrer">Official source ↗</a>`).join('')}</div>`:''}
                ${p.citation&&p.citationIEEE?`<details class="citation-details conference-list-citation"><summary>APA & IEEE citation</summary>${dualAcademicCitation(p.citation,p.citationIEEE)}</details>`:''}
              </article>`).join('')}
            </div>
            ${g.id==='icrast-2025'?`<section class="conference-source-hub" aria-label="ICRAST 2025 source documents">
              <div class="conference-source-hub-head">
                <div><div class="section-kicker">Source documents</div><h4>ICRAST 2025 evidence library</h4><p>Paper 440 and Paper 461 remain separate records, with the exact certificate, brochure, proceedings and presentation files linked below.</p></div>
                <span class="paper-id-chip">2 papers · 5 source records</span>
              </div>
              <div class="conference-source-grid">
                <article class="conference-source-card source-visual source-certificate is-verified-document">
                  ${verifiedCornerRibbon()}
                  <a href="assets/academic/conferences/icrast-2025-paper-440-certificate.jpeg" target="_blank" rel="noopener noreferrer" aria-label="Open verified ICRAST 2025 Paper 440 certificate"><span class="conference-source-preview"><img src="assets/academic/conferences/icrast-2025-paper-440-certificate.jpeg" alt="ICRAST 2025 Paper 440 certificate" loading="lazy" decoding="async"></span><span class="conference-source-copy"><small>Certificate · Paper 440</small><strong>Certificate of Achievement</strong><span>Md. Razu Ahmed · Presenting Author</span></span></a>
                </article>
                <article class="conference-source-card source-pdf">
                  <a href="assets/academic/conferences/icrast-2025-documents/icrast-2025-paper-440-proceedings.pdf" target="_blank" rel="noopener noreferrer"><span class="conference-source-pdfmark">PDF</span><span class="conference-source-copy"><small>Proceedings · Paper 440</small><strong>Book of Abstracts</strong><span>Paper ID 440 · p. 120</span></span></a>
                </article>
                <article class="conference-source-card source-pdf">
                  <a href="assets/academic/conferences/icrast-2025-documents/icrast-2025-paper-461-proceedings.pdf" target="_blank" rel="noopener noreferrer"><span class="conference-source-pdfmark">PDF</span><span class="conference-source-copy"><small>Proceedings · Paper 461</small><strong>Book of Abstracts</strong><span>Paper ID 461 · p. 126</span></span></a>
                </article>
                <article class="conference-source-card source-pdf">
                  <a href="assets/academic/conferences/icrast-2025-documents/icrast-2025-paper-440-presentation.pdf" target="_blank" rel="noopener noreferrer"><span class="conference-source-pdfmark">PDF</span><span class="conference-source-copy"><small>Presentation · Paper 440</small><strong>Presentation Deck</strong><span>Md. Razu Ahmed · 14 November 2025</span></span></a>
                </article>
                <article class="conference-source-card source-visual source-brochure">
                  <a href="assets/academic/conferences/icrast-2025-brochure.jpg" target="_blank" rel="noopener noreferrer"><span class="conference-source-preview"><img src="assets/academic/conferences/icrast-2025-brochure.jpg" alt="ICRAST 2025 conference brochure" loading="lazy" decoding="async"></span><span class="conference-source-copy"><small>Conference document</small><strong>ICRAST 2025 Brochure</strong><span>Faculty of Science · University of Rajshahi</span></span></a>
                </article>
              </div>
            </section>`:''}
          </article>`).join('')}
        </div>
      </div></section>`;
  }

  function recognition(){
    const conferenceCertificates=(D.gallery||[]).filter(g=>g.evidenceType==='Certificate');
    return `${pageHero('Recognition','Awards, certificates & professional development.')}
      <section class="section recognition-awards-section"><div class="container">${sectionHead('Honors & awards','Evidence-backed recognition')}<div class="grid grid-3">${(D.awards||[]).map(a=>`<article class="card"><h3>${esc(a.title||a.name||'')}</h3><p>${esc(a.issuer||a.organization||'')}</p><p>${esc(a.description||a.detail||'')}</p></article>`).join('')}</div></div></section>
      ${conferenceCertificates.length?`<section class="section alt recognition-certificates-section"><div class="container">${sectionHead('Conference certificates','Verified presentation evidence','Conference certificates are shown as documentary evidence and are kept separate from competitive awards.')}<div class="grid grid-3 recognition-certificate-grid">${conferenceCertificates.map(g=>`<article class="card recognition-certificate-card ${g.verified?'is-verified-document':''}">${g.verified?verifiedCornerRibbon():''}${g.asset?`<a href="${esc(g.href||g.asset)}" target="_blank" rel="noopener noreferrer"><img src="${esc(g.asset)}" alt="${esc(g.title)}" loading="lazy" decoding="async"></a>`:''}<div class="certificate-verified-row"><div class="gallery-evidence-meta"><span class="badge">Certificate</span>${g.paperId?`<span class="paper-id-chip">Paper ID ${esc(g.paperId)}</span>`:''}</div></div><h3>${esc(g.title)}</h3><p>${esc(g.issuer||'')}</p><p>${esc(g.caption||'')}</p>${g.sourceFile?`<small class="evidence-source-name">Source file · ${esc(g.sourceFile)}</small>`:''}<div class="recognition-certificate-links"><a href="${esc(g.href||g.asset)}" target="_blank" rel="noopener noreferrer">View certificate ↗</a>${g.related?`<a href="${esc(g.related)}">Conference record →</a>`:''}<a href="gallery.html#${esc(g.id||'')}">Gallery evidence →</a></div></article>`).join('')}</div></div></section>`:''}
      <section class="section recognition-training-section"><div class="container">${sectionHead('Training & certifications','Professional development')}<div class="grid grid-3">${(D.training||[]).map(t=>`<article class="card"><div class="badge">${esc(t.date||t.year||'')}</div><h3>${esc(t.title||t.name||'')}</h3><p>${esc(t.provider||t.issuer||'')}</p><p>${esc(t.duration||t.detail||t.description||'')}</p></article>`).join('')}</div></div></section>`;
  }

  function networkPersonCard(x){
    const roles=x.roles||[];
    const leadRoles=roles.slice(0,2);
    const supportingRoles=roles.slice(2);
    return `<article class="network-person-card">
      <div class="network-person-media">
        ${x.portrait?`<img class="network-person-portrait" src="${esc(x.portrait)}" alt="${esc(x.name||'Academic collaborator')} portrait" loading="lazy" decoding="async">`:''}
        <div class="network-person-fallback" aria-hidden="true">${uiIcon('graduation')}</div>
      </div>
      <div class="network-person-body">
        ${leadRoles.length?`<div class="network-roleline">${leadRoles.map(r=>esc(r)).join(' · ')}</div>`:''}
        <h3>${esc(x.name||'')}</h3>
        ${supportingRoles.length?`<div class="network-role-chips">${supportingRoles.map(r=>`<span>${esc(r)}</span>`).join('')}</div>`:''}
        ${x.affiliation?`<p class="network-affiliation">${esc(x.affiliation)}</p>`:''}
        ${x.description?`<p class="network-description">${esc(x.description)}</p>`:''}
        ${x.shared?.length?`<details class="network-shared"><summary>Shared works <span>${x.shared.length}</span></summary><ul>${x.shared.map(s=>`<li>${esc(s)}</li>`).join('')}</ul></details>`:''}
        ${(x.links||[]).length?`<div class="link-row network-links">${(x.links||[]).map(l=>ext(l.url,l.label)).join(' · ')}</div>`:''}
      </div>
    </article>`;
  }

  function network(){
    const groups=[...new Set((D.people||[]).map(x=>x.group))];
    return `${pageHero('Network & Impact','Mentors, advisors, collaborators & mentees — with shared works and relationship context.')}
      <section class="section network-section"><div class="container">
        ${groups.map((g,idx)=>`<div class="network-group ${idx===0?'network-group-featured':''}">
          <div class="network-group-head">
            ${sectionHead('Academic network',g)}
            <div class="network-group-count">${D.people.filter(x=>x.group===g).length} people</div>
          </div>
          <div class="network-board">${D.people.filter(x=>x.group===g).map(networkPersonCard).join('')}</div>
        </div>`).join('')}
      </div></section>`;
  }

  function resources(){return `${pageHero('Resources','Research toolkit, methods, notes and reproducibility resources.')}<section class="section"><div class="container">${sectionHead('Research toolkit','Software & environments')}<div class="grid grid-3">${(D.tools||[]).map(g=>`<article class="card tool-group"><h3>${esc(g.group)}</h3>${(g.items||[]).map(i=>`<div class="tool-item"><strong>${esc(i.name)}</strong><p>${esc(i.detail)}</p></div>`).join('')}</article>`).join('')}</div></div></section><section class="section alt"><div class="container">${sectionHead('Knowledge base','Planned research notes')}<div class="grid grid-3">${['Leakage-aware validation','Explainable AI & SHAP','Survey-weighted modelling','Missing-data analysis','Model calibration','Research reproducibility','Peer-review practice','Scientific writing'].map(x=>`<article class="card"><h3>${x}</h3><p>Evidence-grounded resource area. Published only when the underlying note or guide is ready.</p></article>`).join('')}</div></div></section>`;}

  function gallery(){return `${pageHero('Gallery & Evidence','A curated visual archive of verified academic, research and professional records.')}<section class="section"><div class="container"><div class="filters">${['All','Award','Conference','Scientific Engagement','Professional Development','Scholarly Service'].map((x,i)=>`<button class="filter ${i===0?'active':''}" data-gallery-filter="${esc(x)}">${x}</button>`).join('')}</div><div class="grid grid-3 gallery-evidence-grid">${(D.gallery||[]).map(g=>`<article class="card gallery-evidence-card ${g.verified&&g.evidenceType==='Certificate'?'is-verified-certificate is-verified-document':''}" ${g.id?`id="${esc(g.id)}"`:''} data-gallery-category="${esc(g.category||'')}">
      ${g.verified?verifiedCornerRibbon():''}
      ${g.asset?`<a class="gallery-evidence-media" href="${esc(g.href||g.asset)}" target="${g.href&&g.href.startsWith('http')?'_blank':'_self'}" rel="noopener noreferrer"><img src="${esc(g.asset)}" alt="${esc(g.title||'Academic evidence')}" loading="lazy" decoding="async"></a>`:`<div class="portrait-placeholder">${esc(g.title||g.category||'Verified visual evidence')}</div>`}
      <div class="gallery-evidence-meta"><span class="badge">${esc(g.category||'Evidence')}</span>${g.evidenceType?`<span class="badge gallery-evidence-type">${esc(g.evidenceType)}</span>`:''}${g.paperId?`<span class="paper-id-chip">Paper ID ${esc(g.paperId)}</span>`:''}</div>
      ${g.issuer||g.date?`<div class="gallery-evidence-context">${g.issuer?`<span>${esc(g.issuer)}</span>`:''}${g.date?`<span>${esc(g.date)}</span>`:''}</div>`:''}
      <h3>${esc(g.title||g.category||'')}</h3><p>${esc(g.caption||g.description||'')}</p>
      ${g.sourceFile?`<small class="evidence-source-name">Source file · ${esc(g.sourceFile)}</small>`:''}
      ${g.related?`<a class="gallery-related-link" href="${esc(g.related)}">View related record →</a>`:''}
    </article>`).join('')}</div></div></section>`;}

  function dashboard(){
    const outputs=D.outputs||[];
    const publishedArticles=outputs.filter(x=>x.bucket==='published'&&!(x.outputKind==='dataset'||x.type==='Dataset')).length;
    const publishedDatasets=outputs.filter(x=>x.outputKind==='dataset'||x.type==='Dataset').length;
    const accepted=outputs.filter(x=>x.bucket==='accepted').length;
    const editorial=outputs.filter(x=>x.bucket==='under-review').length;
    const preparing=(D.ongoing||[]).length;
    return `${pageHero('Research & Impact Dashboard','Interactive academic metrics with source-aware interpretation.')}<section class="section"><div class="container">${sectionHead('Verified metrics','Current scholarly indicators','ResearchGate and Mendeley Data indicators are shown with source and verification date.')}<div class="grid grid-4">${(D.impactMetrics||[]).map(m=>`<article class="card metric dashboard-metric-card"><strong class="dashboard-metric-value">${esc(m.value)}</strong><span class="dashboard-metric-label">${esc(m.label)}</span><small class="dashboard-metric-meta">${esc(m.source||'')}${m.date?' · '+esc(m.date):''}</small>${m.source==='Mendeley Data'&&['Usage','Views','Downloads'].includes(m.label)?`<small class="dashboard-impact-system"><span>Impact system</span><strong>PlumX Metrics</strong> · Usage category</small>`:''}</article>`).join('')}</div><aside class="dashboard-impact-provenance"><div><span class="section-kicker">Dataset impact provenance</span><strong>Mendeley Data + PlumX Metrics</strong></div><p>Usage, Views and Downloads are attributed to Mendeley Data. PlumX is shown as the broader impact system for dataset-level engagement and alternative-impact signals.</p><div class="dashboard-impact-links"><a href="https://data.mendeley.com/datasets/fn6yhzjz83/2" target="_blank" rel="noopener noreferrer">Mendeley Data record ↗</a><a href="https://www.elsevier.com/insights/metrics/plumx" target="_blank" rel="noopener noreferrer">PlumX Metrics ↗</a></div></aside></div></section><section class="section alt"><div class="container">${sectionHead('Portfolio analytics','Research distribution')}<div class="grid grid-3"><article class="card"><h3>Publication status</h3><p>${publishedArticles} published articles · ${publishedDatasets} published dataset · ${accepted} accepted/forthcoming · ${editorial} in the editorial process${preparing?` · ${preparing} in preparation`:''}.</p></article><article class="card"><h3>Conference record</h3><p>8 contributions · 3 presentations · 1 JSR Award.</p></article><article class="card"><h3>Scholarly service</h3><p>32 completed invited reviews across three journals.</p></article></div></div></section>`;
  }

  function askRazu(){return `${pageHero('Ask Razu AI','Research Intelligence for My Academic Portfolio')}<section class="section"><div class="container"><article class="card"><h3>Hi, I’m Ask Razu AI.</h3><p>I can help you explore Md. Razu Ahmed’s research, publications, datasets, methodologies, academic background, peer-review service, conference work, collaborations and current research directions. My answers are grounded in the verified information available in this portfolio.</p><div class="search-wrap"><input class="search-input" id="askInput" placeholder="Ask about research, methods, coursework, conferences or collaborators…"></div><div class="pill-row" style="margin-top:14px">${['Research','Publications','Methods','Experience','Collaborators','Metrics','Coursework','Conferences','Training'].map(x=>`<button class="filter askPrompt" data-q="${x}">${x}</button>`).join('')}</div><div id="askAnswer" class="card" style="margin-top:18px"><strong>Try:</strong> “Which studies used SHAP?”, “Show first-author papers”, “What machine-learning coursework did Razu take?”, or “Who collaborated on dengue?”</div></article></div></section>`;}

  function projects(){return `${pageHero('Projects & Prototypes','Research prototypes, analytical projects and reproducible workflows.')}<section class="section"><div class="container">${sectionHead('Featured prototype','Diabetic-retinopathy grading research prototype')}<article class="card quote-card"><h3>Deep learning + handcrafted feature fusion</h3><p>Research prototype combining DenseNet121 representations, SIFT-BoVW features, XGBoost and Grad-CAM++ for explainable diabetic-retinopathy grading. Intended for research and decision-support exploration, not clinical diagnosis.</p></article></div></section><section class="section alt"><div class="container">${sectionHead('Active projects','Current directions')}<div class="grid grid-3">${(D.ongoing||[]).map(x=>`<article class="card"><span class="badge">In preparation</span><h3>${esc(x.title)}</h3><p>${esc(x.objective||x.summary||x.description||'')}</p>${tags(x.methods||x.tags||[])}</article>`).join('')}</div></div></section>`;}

  function contact(){return `${pageHero('Collaboration','Interested in working together?')}<section class="section"><div class="container"><div class="grid grid-2"><article class="card"><h3>Research collaboration</h3><p>Open selectively to interdisciplinary projects, PhD opportunities, academic partnerships, public-health and biomedical data-science collaborations, explainable AI and statistically rigorous machine-learning research.</p><a class="btn primary" href="mailto:razuahmed038@gmail.com">Email Md. Razu Ahmed</a></article><article class="card"><h3>Academic presence</h3><p>${(D.profiles||[]).map(p=>p.url?ext(p.url,p.label||p.name):'').filter(Boolean).join(' · ')}</p></article></div></div></section>`;}

  function copyrightPage(){return `${pageHero('Copyright & Reuse','Responsible reuse of portfolio content, research figures and evidence.')}<section class="section"><div class="container"><article class="card"><h3>Portfolio content</h3><p>Unless an individual publication, dataset, image or certificate states otherwise, portfolio text and original interface design are © 2026 Md. Razu Ahmed. Published articles and datasets retain the licenses specified by their publishers or repositories.</p><h3>Research figures</h3><p>Reuse should follow the license and attribution requirements of the associated publication. Do not detach figures from their scientific context.</p><h3>Certificates & third-party materials</h3><p>Certificates, journal logos, institutional logos and event materials remain the property of their respective issuers and are displayed as academic evidence.</p></article></div></section>`;}

  function initResearchConstellation(){
    if(document.getElementById('mraResearchConstellation')) return;

    const host=document.body;
    host.classList.add('has-mra-constellation');

    const canvas=document.createElement('canvas');
    canvas.id='mraResearchConstellation';
    canvas.className='mra-constellation mra-constellation-global';
    canvas.setAttribute('aria-hidden','true');
    canvas.setAttribute('role','presentation');
    host.prepend(canvas);

    const ctx=canvas.getContext('2d',{alpha:true});
    if(!ctx){canvas.remove();return;}

    const root=document.documentElement;
    const pageName=document.body.dataset.page||'home';
    const profiles={
      home:{count:112,connect:148,speed:.074,anchors:10,dust:72},
      research:{count:102,connect:146,speed:.070,anchors:9,dust:64},
      network:{count:108,connect:148,speed:.070,anchors:9,dust:68},
      projects:{count:94,connect:144,speed:.064,anchors:8,dust:58},
      profile:{count:90,connect:142,speed:.062,anchors:8,dust:54},
      academic:{count:98,connect:144,speed:.064,anchors:9,dust:62},
      publications:{count:86,connect:140,speed:.058,anchors:7,dust:50},
      conferences:{count:84,connect:140,speed:.058,anchors:7,dust:50},
      resources:{count:82,connect:138,speed:.056,anchors:7,dust:48},
      recognition:{count:82,connect:138,speed:.056,anchors:7,dust:48},
      experience:{count:88,connect:140,speed:.060,anchors:7,dust:52},
      languages:{count:82,connect:138,speed:.056,anchors:7,dust:48},
      default:{count:86,connect:140,speed:.058,anchors:7,dust:50}
    };
    const profile=profiles[pageName]||profiles.default;
    const motionMedia=window.matchMedia('(prefers-reduced-motion: reduce)');

    let width=0,height=0,dpr=1,nodes=[],dust=[],raf=0,last=0,isVisible=!document.hidden;
    const pointer={x:0,y:0,active:false};
    const reduced=()=>root.dataset.motion==='reduced'||motionMedia.matches;

    function random(min,max){return min+Math.random()*(max-min);}

    function seed(){
      const mobile=width<720;
      const tablet=width<1050;
      const density=mobile?.42:(tablet?.70:1);
      const count=Math.max(26,Math.round(profile.count*density));
      const dustCount=Math.max(14,Math.round(profile.dust*density));
      const anchorCount=Math.max(3,Math.round(profile.anchors*(mobile?.6:1)));

      nodes=Array.from({length:count},(_,i)=>({
        x:random(0,width),
        y:random(0,height),
        vx:random(-profile.speed,profile.speed),
        vy:random(-profile.speed*.78,profile.speed*.78),
        r:i<anchorCount?random(2.15,2.8):random(.85,1.65),
        anchor:i<anchorCount,
        phase:random(0,Math.PI*2),
        pulseSeed:random(0,1)
      }));

      dust=Array.from({length:dustCount},()=>({
        x:random(0,width),
        y:random(0,height),
        vx:random(-.025,.025),
        vy:random(-.018,.018),
        r:random(.45,1.05),
        alpha:random(.08,.24),
        phase:random(0,Math.PI*2)
      }));
    }

    function resize(){
      dpr=Math.min(window.devicePixelRatio||1,1.65);
      width=Math.max(1,window.innerWidth);
      height=Math.max(1,window.innerHeight);
      canvas.width=Math.round(width*dpr);
      canvas.height=Math.round(height*dpr);
      canvas.style.width=width+'px';
      canvas.style.height=height+'px';
      ctx.setTransform(dpr,0,0,dpr,0,0);
      seed();
    }

    function readCssRgb(name,fallback){
      const raw=getComputedStyle(root).getPropertyValue(name).trim();
      if(/^#[0-9a-f]{3}$/i.test(raw)){
        return raw.slice(1).split('').map(x=>parseInt(x+x,16));
      }
      if(/^#[0-9a-f]{6}$/i.test(raw)){
        return [parseInt(raw.slice(1,3),16),parseInt(raw.slice(3,5),16),parseInt(raw.slice(5,7),16)];
      }
      const match=raw.match(/rgba?\(\s*([\d.]+)[,\s]+([\d.]+)[,\s]+([\d.]+)/i);
      return match?[+match[1],+match[2],+match[3]]:fallback;
    }

    function blendRgb(a,b,t){
      return a.map((v,i)=>Math.round(v+(b[i]-v)*t));
    }

    function palette(){
      const dark=root.dataset.mode==='dark';
      const accent=readCssRgb('--accent',dark?[89,194,255]:[25,150,230]);
      const accent2=readCssRgb('--accent-2',dark?[183,228,255]:[15,76,129]);
      const text=readCssRgb('--text',dark?[238,247,255]:[16,32,51]);
      const muted=readCssRgb('--muted',dark?[157,177,197]:[93,108,124]);

      // Pull the constellation directly from the active portfolio theme so
      // Scientific, Executive, Quantum and Monochrome all get a visible,
      // coherent network in both light and dark modes.
      return dark
        ? {
            line:blendRgb(accent,accent2,.22),
            node:blendRgb(accent,accent2,.08),
            anchor:blendRgb(accent2,[255,255,255],.18),
            dust:blendRgb(accent,muted,.42),
            lineAlpha:.094,anchorLineAlpha:.170,nodeAlpha:.31,anchorAlpha:.52,
            ringAlpha:.125,haloAlpha:.036,dustBoost:1.02,pulseAlpha:.46
          }
        : {
            line:blendRgb(accent2,accent,.24),
            node:blendRgb(accent,accent2,.18),
            anchor:blendRgb(accent2,text,.28),
            dust:blendRgb(accent2,muted,.34),
            lineAlpha:.155,anchorLineAlpha:.245,nodeAlpha:.43,anchorAlpha:.62,
            ringAlpha:.155,haloAlpha:.050,dustBoost:1.36,pulseAlpha:.58
          };
    }

    function wrap(p){
      if(p.x<-24)p.x=width+24;
      else if(p.x>width+24)p.x=-24;
      if(p.y<-24)p.y=height+24;
      else if(p.y>height+24)p.y=-24;
    }

    function advanceNode(n){
      n.x+=n.vx;
      n.y+=n.vy;

      if(pointer.active){
        const dx=n.x-pointer.x,dy=n.y-pointer.y;
        const dist=Math.hypot(dx,dy);
        const range=170;
        if(dist>0&&dist<range){
          const force=(1-dist/range)*(n.anchor?.060:.040);
          n.x+=(dx/dist)*force;
          n.y+=(dy/dist)*force;
        }
      }
      wrap(n);
    }

    function advanceDust(p){
      p.x+=p.vx;
      p.y+=p.vy;
      wrap(p);
    }

    function draw(time,advance){
      ctx.clearRect(0,0,width,height);
      const colors=palette();
      const mobile=width<720;
      const connect=profile.connect*(mobile?.76:1);

      if(advance){
        nodes.forEach(advanceNode);
        dust.forEach(advanceDust);
      }

      // Fine ambient particles add depth without competing with content.
      dust.forEach(p=>{
        const shimmer=reduced()?1:(.82+.18*Math.sin(time*.00042+p.phase));
        ctx.beginPath();
        ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
        ctx.fillStyle=`rgba(${colors.dust[0]},${colors.dust[1]},${colors.dust[2]},${Math.min(.42,p.alpha*shimmer*colors.dustBoost).toFixed(3)})`;
        ctx.fill();
      });

      // Network web.
      for(let i=0;i<nodes.length;i++){
        const a=nodes[i];
        for(let j=i+1;j<nodes.length;j++){
          const b=nodes[j];
          const dx=a.x-b.x,dy=a.y-b.y,dist=Math.hypot(dx,dy);
          if(dist>=connect) continue;

          const strength=1-dist/connect;
          const anchorLink=a.anchor||b.anchor;
          const alpha=(anchorLink?colors.anchorLineAlpha:colors.lineAlpha)*strength;

          ctx.beginPath();
          ctx.moveTo(a.x,a.y);
          ctx.lineTo(b.x,b.y);
          ctx.strokeStyle=`rgba(${colors.line[0]},${colors.line[1]},${colors.line[2]},${alpha.toFixed(3)})`;
          ctx.lineWidth=anchorLink?.9:.64;
          ctx.stroke();

          // Sparse moving signal pulse along selected links.
          if(!reduced()&&((i*19+j*13)%67===0)){
            const t=((time*.000026)+a.pulseSeed)%1;
            const px=a.x+(b.x-a.x)*t;
            const py=a.y+(b.y-a.y)*t;
            ctx.beginPath();
            ctx.arc(px,py,1.25,0,Math.PI*2);
            ctx.fillStyle=`rgba(${colors.anchor[0]},${colors.anchor[1]},${colors.anchor[2]},${colors.pulseAlpha})`;
            ctx.fill();
          }
        }
      }

      // Nodes.
      nodes.forEach(n=>{
        const pulse=(n.anchor&&!reduced()) ? .92+.10*Math.sin(time*.00062+n.phase) : 1;
        const col=n.anchor?colors.anchor:colors.node;

        if(n.anchor){
          ctx.beginPath();
          ctx.arc(n.x,n.y,(n.r+4.6)*pulse,0,Math.PI*2);
          ctx.strokeStyle=`rgba(${col[0]},${col[1]},${col[2]},${colors.ringAlpha})`;
          ctx.lineWidth=.8;
          ctx.stroke();

          ctx.beginPath();
          ctx.arc(n.x,n.y,(n.r+8.5)*pulse,0,Math.PI*2);
          ctx.fillStyle=`rgba(${col[0]},${col[1]},${col[2]},${(colors.ringAlpha*.25).toFixed(3)})`;
          ctx.fill();
        }

        ctx.beginPath();
        ctx.arc(n.x,n.y,n.r*pulse,0,Math.PI*2);
        ctx.fillStyle=`rgba(${col[0]},${col[1]},${col[2]},${n.anchor?colors.anchorAlpha:colors.nodeAlpha})`;
        ctx.fill();
      });

      // Very light pointer halo keeps the motion responsive but restrained.
      if(pointer.active&&!reduced()){
        const gradient=ctx.createRadialGradient(pointer.x,pointer.y,0,pointer.x,pointer.y,150);
        gradient.addColorStop(0,`rgba(${colors.node[0]},${colors.node[1]},${colors.node[2]},${colors.haloAlpha})`);
        gradient.addColorStop(1,`rgba(${colors.node[0]},${colors.node[1]},${colors.node[2]},0)`);
        ctx.fillStyle=gradient;
        ctx.beginPath();
        ctx.arc(pointer.x,pointer.y,150,0,Math.PI*2);
        ctx.fill();
      }
    }

    function loop(time){
      if(!isVisible){raf=0;return;}
      const shouldAdvance=time-last>14;
      if(shouldAdvance) last=time;
      draw(time,shouldAdvance);
      raf=requestAnimationFrame(loop);
    }

    function restart(){
      cancelAnimationFrame(raf);
      raf=0;
      if(!isVisible) return;
      if(reduced()){draw(0,false);return;}
      raf=requestAnimationFrame(loop);
    }

    function onPointerMove(e){
      pointer.x=e.clientX;
      pointer.y=e.clientY;
      pointer.active=true;
    }

    function onPointerLeave(){pointer.active=false;}

    let resizeTimer=0;
    window.addEventListener('resize',()=>{
      clearTimeout(resizeTimer);
      resizeTimer=setTimeout(()=>{resize();restart();},100);
    },{passive:true});
    window.addEventListener('pointermove',onPointerMove,{passive:true});
    document.addEventListener('mouseleave',onPointerLeave,{passive:true});
    window.addEventListener('blur',onPointerLeave,{passive:true});

    document.addEventListener('visibilitychange',()=>{
      isVisible=!document.hidden;
      if(isVisible) restart();
      else{cancelAnimationFrame(raf);raf=0;}
    });

    new MutationObserver(restart).observe(root,{attributes:true,attributeFilter:['data-mode','data-motion','data-theme']});
    if(typeof motionMedia.addEventListener==='function') motionMedia.addEventListener('change',restart);

    resize();
    restart();
  }

  function pageHero(title,lead){return `<section class="hero compact"><div class="container"><div class="eyebrow"><span class="live-dot"></span><span>MRA Research Intelligence</span><span class="clock" data-clock>Dhaka · UTC+06:00</span></div><h1>${esc(title)}</h1><p class="lede">${esc(lead)}</p></div></section>`;}

  function initInteractive(){
    $('#settingsBtn')?.addEventListener('click',()=>$('#settings').toggleAttribute('hidden'));
    $('#menuBtn')?.addEventListener('click',()=>$('#mobilePanel').toggleAttribute('hidden'));
    $('#searchBtn')?.addEventListener('click',()=>location.href='search.html');
    document.addEventListener('keydown',e=>{if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()==='k'){e.preventDefault();location.href='search.html'} if(e.key==='/'){if(!/INPUT|TEXTAREA/.test(document.activeElement.tagName)){e.preventDefault();location.href='search.html'}} if(e.key.toLowerCase()==='h'&&!/INPUT|TEXTAREA/.test(document.activeElement.tagName))location.href='index.html'; if(e.key.toLowerCase()==='t'&&!/INPUT|TEXTAREA/.test(document.activeElement.tagName))$('#settings').toggleAttribute('hidden'); if(e.key==='Escape'){ $('#settings')?.setAttribute('hidden','');$('#mobilePanel')?.setAttribute('hidden',''); }});
    const portraitStage=$('#heroPortraitStage');
    const portraitFrame=portraitStage?.querySelector('.portrait-frame-editorial');
    if(portraitStage&&portraitFrame&&window.matchMedia('(hover:hover) and (pointer:fine)').matches&&!window.matchMedia('(prefers-reduced-motion: reduce)').matches){
      const updatePortraitTilt=e=>{
        const r=portraitStage.getBoundingClientRect();
        const px=Math.max(0,Math.min(1,(e.clientX-r.left)/r.width));
        const py=Math.max(0,Math.min(1,(e.clientY-r.top)/r.height));
        const ry=(px-.5)*8;
        const rx=(.5-py)*7;
        portraitFrame.style.setProperty('--portrait-rx',rx.toFixed(2)+'deg');
        portraitFrame.style.setProperty('--portrait-ry',ry.toFixed(2)+'deg');
        portraitFrame.style.setProperty('--portrait-shift-x',((px-.5)*5).toFixed(2)+'px');
        portraitFrame.style.setProperty('--portrait-shift-y',((py-.5)*4).toFixed(2)+'px');
        portraitStage.style.setProperty('--portrait-shine-x',(px*100).toFixed(1)+'%');
        portraitStage.style.setProperty('--portrait-shine-y',(py*100).toFixed(1)+'%');
      };
      const resetPortraitTilt=()=>{
        portraitFrame.style.setProperty('--portrait-rx','0deg');
        portraitFrame.style.setProperty('--portrait-ry','0deg');
        portraitFrame.style.setProperty('--portrait-shift-x','0px');
        portraitFrame.style.setProperty('--portrait-shift-y','0px');
        portraitStage.style.setProperty('--portrait-shine-x','50%');
        portraitStage.style.setProperty('--portrait-shine-y','35%');
      };
      portraitStage.addEventListener('pointermove',updatePortraitTilt,{passive:true});
      portraitStage.addEventListener('pointerleave',resetPortraitTilt,{passive:true});
    }
    const search=$('#pubSearch');
    const publicationGroups=[...document.querySelectorAll('.publication-status-group')];
    if(search&&publicationGroups.length){
      const cards=[...document.querySelectorAll('.publication-group-grid > .output-card')];
      const jumpLinks=[...document.querySelectorAll('[data-publication-jump]')];
      const requestedStatus=new URLSearchParams(window.location.search).get('status');
      const sectionMap={
        published:'#published-articles',
        dataset:'#published-dataset',
        accepted:'#accepted-forthcoming',
        'under-review':'#editorial-process'
      };
      const run=()=>{
        const q=search.value.trim().toLowerCase();
        cards.forEach(c=>{
          const okQ=!q||c.textContent.toLowerCase().includes(q);
          c.hidden=!okQ;
        });
        publicationGroups.forEach(group=>{
          const visible=[...group.querySelectorAll('.output-card')].some(c=>!c.hidden);
          group.hidden=!!q&&!visible;
        });
      };
      run();
      requestAnimationFrame(()=>{
        const hashTarget=window.location.hash&&document.querySelector(window.location.hash);
        const statusTarget=!window.location.hash&&sectionMap[requestedStatus]?document.querySelector(sectionMap[requestedStatus]):null;
        const target=hashTarget||statusTarget;
        if(target) target.scrollIntoView({block:'start'});
      });
      search.addEventListener('input',run);

      if('IntersectionObserver' in window&&jumpLinks.length){
        const sectionObserver=new IntersectionObserver(entries=>{
          const visible=entries.filter(e=>e.isIntersecting).sort((a,b)=>b.intersectionRatio-a.intersectionRatio)[0];
          if(!visible)return;
          const key=visible.target.dataset.publicationGroup;
          jumpLinks.forEach(link=>link.classList.toggle('active',link.dataset.publicationJump===key));
        },{rootMargin:'-24% 0px -60% 0px',threshold:[0,.08,.25,.5]});
        publicationGroups.forEach(group=>sectionObserver.observe(group));
      }
    }
    document.querySelectorAll('img[data-safe-fallback]').forEach(img=>img.addEventListener('error',()=>{
      const fallback=document.createElement('div');
      fallback.className=((img.className||'portrait').replace(/\bsafe-img\b/g,'').trim())+' portrait-placeholder';
      fallback.textContent=img.dataset.safeFallback||'Image unavailable';
      img.replaceWith(fallback);
    },{once:true}));
    document.querySelectorAll('.education-logo-img').forEach(img=>img.addEventListener('error',()=>{
      const wrap=img.closest('.education-logo-wrap');
      if(wrap){wrap.innerHTML='<span class="education-logo-fallback">EDU</span>';}
    },{once:true}));
    document.querySelectorAll('img[data-tech-fallback]').forEach(img=>img.addEventListener('error',()=>{
      const wrap=img.closest('.tech-logo');
      if(wrap){const span=document.createElement('span');span.className='tech-logo-fallback tech-logo-fallback-digital';span.innerHTML='<span>'+(img.dataset.techFallback||'APP')+'</span>';wrap.replaceWith(span);}
    },{once:true}));
    document.querySelectorAll('.scholar-brand-icon img').forEach(img=>img.addEventListener('error',()=>{img.hidden=true;},{once:true}));
    document.querySelectorAll('.network-person-portrait').forEach(img=>{
      const hideBroken=()=>{img.hidden=true;};
      img.addEventListener('error',hideBroken,{once:true});
      if(img.complete && !img.naturalWidth){hideBroken();}
    });
    document.querySelectorAll('.instructor-portrait').forEach(img=>{
      const hideBroken=()=>{img.hidden=true;};
      img.addEventListener('error',hideBroken,{once:true});
      if(img.complete && !img.naturalWidth){hideBroken();}
    });
    document.querySelectorAll('.project-figure-img').forEach(img=>{
      const hideBroken=()=>{const figure=img.closest('.project-figure');if(figure){figure.hidden=true;}};
      img.addEventListener('error',hideBroken,{once:true});
      if(img.complete && !img.naturalWidth){hideBroken();}
    });
    const courseSearch=$('#courseSearch'), curriculumGrid=$('#curriculumGrid');
    if(courseSearch&&curriculumGrid){
      const domains=[...curriculumGrid.querySelectorAll('.curriculum-domain')];
      courseSearch.addEventListener('input',()=>{
        const q=courseSearch.value.trim().toLowerCase();
        domains.forEach(card=>{card.hidden=!!q && !(card.dataset.search||card.textContent.toLowerCase()).includes(q);});
      });
    }
    const ask=$('#askInput'), ans=$('#askAnswer'); if(ask&&ans){const reply=q=>{const s=q.toLowerCase();let out='';if(s.includes('shap'))out='SHAP appears in the CKD, HCV and public-health / explainability research records where public-approved details are available.';else if(s.includes('first-author'))out='First-author published/accepted works include the FastICA source-separation study, CKD prediction study and accepted AI-employment perceptions article.';else if(s.includes('course')||s.includes('machine learning coursework'))out='Relevant coursework includes Data Mining, Machine Learning, Deep Learning for Computer Vision, Programming with Python and R, Numerical Analysis and Simulation, and supporting statistics/mathematics courses.';else if(s.includes('dengue'))out='The public dengue portfolio includes nationwide forecasting and decision-oriented preparedness research, including collaborations with Md. Ziaul Haque and other co-authors.';else if(s.includes('review'))out='Md. Razu Ahmed has completed 32 invited peer reviews: 25 for PLOS ONE, 6 for Biomedical Signal Processing and Control, and 1 for Engineering Applications of Artificial Intelligence.';else out='I can answer from the public portfolio about research, publications, methods, coursework, conferences, collaborators, training and scholarly metrics. Confidential research is intentionally excluded.';ans.textContent=out;}; ask.addEventListener('keydown',e=>{if(e.key==='Enter')reply(ask.value)}); $$('.askPrompt').forEach(b=>b.addEventListener('click',()=>{ask.value=b.dataset.q;reply(b.dataset.q)}));}
    const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.06}); document.querySelectorAll('.card,.timeline-item').forEach(e=>{e.classList.add('reveal');io.observe(e)});
  }

  function render(){
    header();
    footer();
    const main=$('#page-content');
    if(!main)return;
    const map={home,profile,languages,research,publications,projects,academic,experience,conferences,recognition,network,resources,gallery,dashboard,'ask-razu':askRazu,contact,copyright:copyrightPage};
    main.innerHTML=(map[page]||home)();

    // Start date/time immediately after the page hero exists. This remains live even if a later UI control fails.
    clock();

    // Appearance controls are non-critical UI. A settings fault must never blank the portfolio.
    try{settings();}catch(err){
      console.error('MRA appearance controls failed to initialize:',err);
      document.documentElement.dataset.theme=document.documentElement.dataset.theme||'scientific';
      document.documentElement.dataset.mode=document.documentElement.dataset.mode||'light';
      document.documentElement.dataset.motion=document.documentElement.dataset.motion||'balanced';
    }

    try{initResearchConstellation();}catch(err){console.error('MRA constellation failed to initialize:',err);}
    try{initInteractive();}catch(err){console.error('MRA interactive controls failed to initialize:',err);}
  }
  render();
})();
