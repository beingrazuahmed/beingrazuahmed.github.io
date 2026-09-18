(() => {
  'use strict';
  const D = window.MRA_V2 || {};
  const $ = (s, r=document) => r.querySelector(s);
  const $$ = (s, r=document) => [...r.querySelectorAll(s)];
  const esc = (v='') => String(v).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[c]));
  const ext = (u,l) => `<a href="${esc(u)}" target="_blank" rel="noopener noreferrer">${esc(l)}</a>`;
  const page = document.body.dataset.page || 'home';

  const nav = [
    ['home','Home','index.html'],['profile','Profile','profile.html'],['languages','Languages','languages.html'],['research','Research','research.html'],
    ['publications','Publications','publications.html'],['projects','Projects','projects.html'],['academic','Academic','academic.html'],
    ['experience','Experience','experience.html'],['conferences','Conferences','conferences.html'],['recognition','Recognition','recognition.html'],
    ['network','Network & Impact','network.html'],['resources','Resources','resources.html'],['gallery','Gallery','gallery.html'],['dashboard','Dashboard','dashboard.html']
  ];

  function header(){
    const el = $('#site-header'); if(!el) return;
    el.innerHTML = `<div class="topbar"><div class="container nav-shell">
      <a class="brand" href="index.html"><span class="monogram">MRA</span><span>Md. Razu Ahmed</span></a>
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
    document.body.insertAdjacentHTML('beforeend', `<aside class="settings" id="settings" hidden aria-label="Appearance settings"><strong>Appearance</strong>
      <label for="themeSel">Theme</label><select id="themeSel"><option value="scientific">Scientific Horizon</option><option value="executive">Executive Intelligence</option><option value="quantum">Quantum Research</option><option value="mono">Minimal Monochrome</option></select>
      <label for="modeSel">Mode</label><select id="modeSel"><option value="system">System</option><option value="light">Light</option><option value="dark">Dark</option></select>
      <label for="textSel">Text size</label><select id="textSel"><option value="normal">Normal</option><option value="large">Large</option></select>
      <label for="motionSel">Motion</label><select id="motionSel"><option value="balanced">Balanced</option><option value="reduced">Reduced</option></select>
      <p class="tiny">Shortcuts: <span class="kbd">/</span> search · <span class="kbd">H</span> home · <span class="kbd">T</span> theme · <span class="kbd">Esc</span> close</p></aside>`);
    const root=document.documentElement, store=localStorage;
    const apply=()=>{
      const theme=store.getItem('mra-theme')||'scientific', mode=store.getItem('mra-mode')||'system', text=store.getItem('mra-text')||'normal', motion=store.getItem('mra-motion')||'balanced';
      root.dataset.theme=theme; const sys=matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light'; root.dataset.mode=mode==='system'?sys:mode; root.dataset.text=text; root.dataset.motion=motion;
      $('#themeSel').value=theme; $('#modeSel').value=mode; $('#textSel').value=text; $('#motionSel').value=motion;
    };
    ['theme','mode','text','motion'].forEach(k=>$('#'+k+'Sel').addEventListener('change',e=>{store.setItem('mra-'+k,e.target.value);apply()})); apply();
  }

  function footer(){
    const el=$('#site-footer'); if(!el) return;
    el.innerHTML=`<footer class="footer"><div class="container footer-grid"><div><div class="brand"><span class="monogram">MRA</span><span>Md. Razu Ahmed</span></div><p>${esc(D.brand?.tagline||'')}</p><p class="tiny">Public portfolio · Privacy-safe by design · Last updated ${esc(D.lastUpdated||'')}</p></div><div><strong>Navigate</strong><p><a href="search.html">Search</a><br><a href="languages.html">Languages & MOI</a><br><a href="dashboard.html">Dashboard</a><br><a href="cv.html">CV</a><br><a href="copyright.html">Copyright & Reuse</a></p></div><div><strong>Connect</strong><p><a href="mailto:razuahmed038@gmail.com">Email</a><br><a href="https://github.com/beingrazuahmed" target="_blank" rel="noopener">GitHub</a><br><a href="contact.html">Collaborate</a></p></div></div><div class="container tiny">© 2026 Md. Razu Ahmed. All rights reserved.</div></footer>`;
  }

  function clock(){
    const els=[...document.querySelectorAll('[data-clock]')]; if(!els.length) return;
    const tick=()=>{const now=new Date(); const t=new Intl.DateTimeFormat('en-US',{timeZone:'Asia/Dhaka',hour:'2-digit',minute:'2-digit',second:'2-digit',hour12:true}).format(now); const d=new Intl.DateTimeFormat('en-GB',{timeZone:'Asia/Dhaka',weekday:'short',day:'2-digit',month:'short',year:'numeric'}).format(now); els.forEach(el=>{el.textContent=`${d} · ${t} · Dhaka`;});}; tick(); setInterval(tick,1000);
  }

  const tags = arr => `<div class="pill-row">${(arr||[]).map(x=>`<span class="tag">${esc(typeof x==='string'?x:(x.label||x.name||x.title||''))}</span>`).join('')}</div>`;
  const sectionHead=(k,t,c='')=>`<div class="section-head"><div><div class="section-kicker">${esc(k)}</div><h2>${esc(t)}</h2></div>${c?`<p class="section-copy">${esc(c)}</p>`:''}</div>`;
  const safeImg=(src,alt,cls='portrait')=>`<img class="${cls}" src="${esc(src)}" alt="${esc(alt)}" onerror="this.outerHTML='<div class=\'${cls} portrait-placeholder\'>Verified portrait will appear when the original asset is available.</div>'">`;
  const links=(obj={})=>['primary','discovery','social'].flatMap(k=>obj[k]||[]).map(x=>ext(x.url,x.label)).join(' · ');

  function uiIcon(name){
    const paths={
      language:'<path d="M4 5h10M9 3v2m-4 4c1.5 3 3.6 5.2 6.5 6.8M13 9c-1.5 3.1-3.6 5.4-6.6 7M15 20l3-8 3 8m-5-3h4"/>',
      graduation:'<path d="m2 10 10-5 10 5-10 5L2 10Zm4 2.5V17c2.8 2.2 8.2 2.2 11 0v-4.5M22 10v6"/>',
      publication:'<path d="M5 4h10a2 2 0 0 1 2 2v14H7a2 2 0 0 1-2-2V4Zm4 4h4m-4 4h5m-5 4h3"/>',
      conference:'<path d="M4 20V8h16v12M8 8V4h8v4M8 12h8M8 16h3m2 0h3"/>',
      review:'<path d="M5 3h10l4 4v14H5V3Zm10 0v5h5M8 12l2 2 4-4m-6 8h8"/>',
      field:'<path d="M3 18c4-4 8-4 12 0m-12-6c4-4 8-4 12 0M17 5h4v4h-4zM5 5h4v4H5z"/>',
      calendar:'<path d="M6 3v3m12-3v3M4 8h16M5 5h14a1 1 0 0 1 1 1v14H4V6a1 1 0 0 1 1-1Zm3 7h3m2 0h3m-8 4h3m2 0h3"/>',
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
    return `<article class="card language-card language-card-${esc(l.id||'generic')} academic-motion-card" data-academic-tilt data-tilt-strength="3.2">
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
      <div class="card education-card academic-motion-card" data-academic-tilt data-tilt-strength="2.8">
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
    return `<article class="card metric academic-metric-card academic-motion-card" data-academic-tilt data-tilt-strength="4"><div class="academic-metric-icon">${uiIcon(icon)}</div><strong>${esc(value)}</strong><span>${esc(label)}</span><small>${esc(detail)}</small></article>`;
  }

  function techBrandIcon(item){
    const slug=(item.brand||'').trim();
    const fallback=esc((item.short||item.name||'?').split(/\s+/).map(x=>x[0]).join('').slice(0,3).toUpperCase());
    if(!slug) return `<span class="tech-logo-fallback">${fallback}</span>`;
    const url=`https://cdn.simpleicons.org/${encodeURIComponent(slug)}`;
    return `<span class="tech-logo"><img src="${url}" alt="" loading="lazy" decoding="async" data-tech-fallback="${fallback}"></span>`;
  }

  function technicalSkillCard(x){
    return `<article class="card technical-skill-card academic-motion-card ${x.featured?'technical-skill-featured':''}" data-academic-tilt data-tilt-strength="${x.featured?'1.6':'2.8'}">
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
    return `<article class="card tool-group tool-group-modern academic-motion-card" data-academic-tilt data-tilt-strength="2.5">
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
      pick('Web & Research Prototype Development')
    ].filter(Boolean);
    const libs=pick('Python, ML & Scientific Libraries');
    const env=pick('Research Computing & Development Environments');
    const version=pick('Version Control & Reproducibility');
    const productivity=pick('Productivity & Collaboration');

    return `<div class="tool-layout">
      <div class="grid grid-3 tool-grid-modern tool-grid-primary">${primary.map(toolGroupCard).join('')}</div>
      <div class="tool-grid-research">
        ${libs?`<div class="tool-libraries-wide">${toolGroupCard(libs)}</div>`:''}
        <div class="tool-side-stack">${env?toolGroupCard(env):''}${version?toolGroupCard(version):''}</div>
      </div>
      ${productivity?`<div class="tool-productivity-row">${toolGroupCard(productivity)}</div>`:''}
    </div>`;
  }

  function computationalEnvironmentPanel(){
    const items=D.computationalEnvironments||[];
    if(!items.length) return '';
    return `<div class="compute-environments">
      <div class="compute-environments-head">
        <div><span class="section-kicker">Computational environment & reproducibility</span><h3>Verified research environments</h3></div>
        <p>Version snapshots are reported by project because software stacks differ across analyses. This avoids implying that one fixed environment was used for every study.</p>
      </div>
      <div class="compute-environment-list">
        ${items.map((x,i)=>`<details class="compute-environment-card academic-motion-card" data-academic-tilt data-tilt-strength="1.5" ${i===0?'open':''}>
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
      <div class="tech-marquee-title"><span class="section-kicker">Research technology stack</span><h3>Technologies & software I work with</h3><p>Statistical computing, reproducible research, programming, prototyping and collaborative research tools.</p></div>
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

  function home(){
    const p=D.profile||{};
    return `<section class="hero hero-home" id="homeHero">
      <div class="hero-ambient hero-ambient-a" aria-hidden="true"></div>
      <div class="hero-ambient hero-ambient-b" aria-hidden="true"></div>
      <div class="hero-grid-lines" aria-hidden="true"></div>
      <div class="container hero-container">
        <div class="hero-shell">
          <div class="hero-grid hero-grid-premium">
            <div class="hero-copy">
              <div class="eyebrow hero-eyebrow"><span class="live-dot"></span><span>Portfolio online</span><span class="hero-clock-sep">·</span><span class="clock" data-clock>Dhaka · UTC+06:00</span></div>
              <h1 class="hero-title"><span class="hero-title-prefix">Md.</span> <span class="hero-title-accent">Razu Ahmed</span></h1>
              <div class="hero-subline hero-role-line">Statistician <span>·</span> Data Scientist <span>·</span> Researcher <span>·</span> Peer Reviewer</div>
              <div class="hero-topic-line"><span>Machine Learning</span><span>Explainable AI</span><span>Public Health</span><span>Biomedical Data Science</span></div>
              <p class="hero-intro">I am Md. Razu Ahmed, a statistician and interdisciplinary data researcher working at the intersection of statistical learning, artificial intelligence, public health, and biomedical data science. I build rigorous, reproducible, and interpretable analytical workflows that connect statistical methodology with machine learning to address real-world problems.</p>
              <div class="hero-opportunity"><span class="hero-collab-dot"></span><strong>Open to PhD opportunities</strong><span>Interdisciplinary research · academic partnerships · collaborative projects</span></div>
              <div class="cta-row hero-actions"><a class="btn primary hero-primary" href="research.html">Explore Research <span aria-hidden="true">↗</span></a><a class="btn" href="cv.html">View CV</a><a class="btn" href="dashboard.html">Research Dashboard</a><a class="btn" href="ask-razu.html">Ask Razu AI</a><a class="btn hero-collab" href="contact.html">Collaborate</a></div>
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
                <div class="portrait-frame portrait-frame-editorial" data-tilt>
                  <div class="portrait-frame-inner portrait-frame-inner-editorial">
                    ${safeImg('assets/profile/razu-portrait.jpg','Md. Razu Ahmed','portrait hero-portrait')}
                    <div class="portrait-shine" aria-hidden="true"></div>
                  </div>
                </div>
              </div>
              <div class="portrait-caption portrait-caption-editorial"><span class="live-dot"></span><span>MRA Research Intelligence</span></div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="section alt"><div class="container">${sectionHead('Quick academic profile','Research at a glance','A compact, evidence-grounded view of the current academic record.')}<div class="grid grid-4">${(D.quickProfile||[]).map(m=>`<article class="card metric"><strong>${esc(m.value)}</strong><span>${esc(m.label)}</span></article>`).join('')}</div></div></section>
    <section class="section"><div class="container">${sectionHead('Portfolio compass','Explore the research ecosystem','A structured route into research, evidence, academic development, networks and tools.')}<div class="grid grid-3">${(D.compass||[]).map(c=>`<a class="card compass-card" href="${c.href}"><div><h3>${esc(c.title)}</h3><p>${esc(c.detail)}</p></div><span class="arrow">Explore →</span></a>`).join('')}</div></div></section>
    <section class="section alt"><div class="container">${sectionHead('Research identity','Statistics, AI and decision-relevant evidence')}<div class="feature-band"><article class="card quote-card"><h3>Research statement</h3><p>${esc(D.research?.statement||'')}</p></article><div class="grid">${(D.research?.principles||[]).map(x=>`<article class="card"><h3>${esc(x.title)}</h3><p>${esc(x.detail)}</p></article>`).join('')}</div></div></div></section>
    <section class="section"><div class="container">${sectionHead('Research themes','Methods and application domains')}<div class="grid grid-2"><article class="card"><h3>Methodological themes</h3>${tags(D.research?.methods)}</article><article class="card"><h3>Application domains</h3>${tags(D.research?.applications)}</article></div></div></section>
    <section class="section alt"><div class="container">${sectionHead('Selected research works','Public outputs and active research','Confidential research is intentionally excluded from the public repository.')}<div class="grid grid-3">${(D.outputs||[]).slice(0,6).map(outputCard).join('')}</div><p><a class="btn" href="publications.html">Explore all public research →</a></p></div></section>
    <section class="section"><div class="container">${sectionHead('Research evolution','From statistical foundations to decision-focused AI')}<div class="timeline">${(D.research?.evolution||[]).map(e=>`<div class="timeline-item"><strong>${esc(e.period||e.year||'')}</strong><h3>${esc(e.title||'')}</h3><p>${esc(e.detail||e.description||'')}</p></div>`).join('')}</div></div></section>
    <section class="section alt"><div class="container">${sectionHead('Academic research & fieldwork','Statistical Field Survey')} ${fieldSurveyCard()}</div></section>
    <section class="section"><div class="container">${sectionHead('Academic guidance & research network','Mentors, advisors, collaborators & mentees')}<div class="grid grid-4">${(D.people||[]).slice(0,8).map(personCard).join('')}</div><p><a class="btn" href="network.html">Explore full research network →</a></p></div></section>
    <section class="section alt"><div class="container">${sectionHead('Scholarly service','Peer review & academic contribution')}<div class="grid grid-4"><article class="card metric"><strong>32</strong><span>Completed invited reviews</span></article><article class="card"><h3>PLOS ONE</h3><p>25 completed reviews</p></article><article class="card"><h3>Biomedical Signal Processing and Control</h3><p>6 completed reviews</p></article><article class="card"><h3>Engineering Applications of Artificial Intelligence</h3><p>1 completed review</p></article></div></div></section>
    <section class="section"><div class="container">${sectionHead('Latest activity','Recent research updates')}<div class="timeline">${(D.latestUpdates||[]).slice(0,6).map(u=>`<div class="timeline-item"><strong>${esc(u.date||'')}</strong><h3>${esc(u.title||u.label||'')}</h3><p>${esc(u.detail||u.description||'')}</p></div>`).join('')}</div></div></section>
    <section class="section alt"><div class="container">${sectionHead('Research intelligence','Ask Razu AI','Explore research, methods, coursework, conferences, collaborators and public scholarly records through evidence-grounded portfolio intelligence.')}<div class="card"><h3>Research Intelligence for My Academic Portfolio</h3><p>Ask about publications, methods, collaborators, coursework, conferences, certificates, research directions and public metrics.</p><a class="btn primary" href="ask-razu.html">Open Ask Razu AI</a></div></div></section>`;
  }

  function outputCard(p){
    const id=(p.id||'').toLowerCase();
    const linkObj=D.publicationLinks?.[id]||p.links||{};
    const js=p.journalStanding||null;
    return `<article class="card output-card">
      <div class="meta"><span class="badge">${esc(p.status||p.bucket||'Research')}</span>${p.role?`<span class="badge">${esc(p.role)}</span>`:''}</div>
      <h3>${esc(p.title||'Untitled')}</h3>
      <p>${esc(p.journal||p.venue||p.summary||p.description||'')}</p>
      ${js?`<div class="output-standing">
        <span><strong>${esc(js.jif2025||'')}</strong>JIF</span>
        <span><strong>${esc(js.citeScore2025||'')}</strong>CiteScore</span>
        <span><strong>${esc(js.quartile||'')}</strong>Quartile</span>
        <span><strong>${esc(js.sjr2025||'')}</strong>SJR</span>
        <small>${esc(js.indexing||'')}</small>
      </div>`:''}
      <div class="link-row">${links(linkObj)}</div>
    </article>`;
  }
  function personCard(x){return `<article class="card person-card">${safeImg(x.portrait,x.name,'avatar')}<h3>${esc(x.name)}</h3><div class="meta">${(x.roles||[]).map(r=>`<span class="badge">${esc(r)}</span>`).join('')}</div><p><strong>${esc(x.affiliation||'')}</strong></p><p>${esc(x.description||'')}</p><div class="link-row">${(x.links||[]).map(l=>ext(l.url,l.label)).join(' · ')}</div></article>`;}
  function fieldSurveyCard(){
    const f=D.fieldSurvey||{}, c=f.conference||{};
    return `<article class="card field-survey-card academic-motion-card" data-academic-tilt data-tilt-strength="1.35">
      <div class="meta">
        <span class="badge">${esc(f.courseCode||'')}</span>
        <span class="badge">${esc(f.degree||'')}</span>
        <span class="badge">${esc(f.credits||'')} credits</span>
        ${f.grade?`<span class="academic-grade-pill"><span class="grade-star" aria-hidden="true">★</span><strong>${esc(f.grade)}</strong><small>${esc(f.gradeLabel||'Grade')}</small></span>`:''}
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

      <div class="conference-evidence-card">
        <div class="conference-evidence-head">
          <div><div class="section-kicker">Conference presentation</div><h4>${esc(c.fullName||c.shortName||'')}</h4></div>
          <span class="badge">${esc(c.presentation||'')}</span>
        </div>
        <p><strong>${esc(c.host||'')}</strong><br>${esc(c.date||'')}</p>
        <div class="conference-evidence-meta">
          <span>${esc(c.source||'')}</span><span>${esc(c.page||'')}</span><span>${esc(c.role||'')}</span>
        </div>
        ${c.url?`<div class="conference-link-row"><a class="btn small" href="${esc(c.url)}" target="_blank" rel="noopener noreferrer">Official conference homepage ↗</a></div>`:''}
        ${c.citation?`<details class="citation-details"><summary>View bibliographic citation</summary><p>${esc(c.citation)}</p></details>`:''}
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
        <div class="journal-meta-strip">
          ${f.article.acceptedDate?`<span><strong>Accepted</strong>${esc(f.article.acceptedDate)}</span>`:''}
          ${f.article.forthcoming?`<span><strong>Forthcoming</strong>${esc(f.article.forthcoming)}</span>`:''}
          ${f.article.issn?`<span><strong>ISSN</strong>${esc(f.article.issn)}</span>`:''}
          ${f.article.abbreviatedJournal?`<span><strong>Abbrev.</strong>${esc(f.article.abbreviatedJournal)}</span>`:''}
        </div>
        <div class="journal-links">${(f.article.links||[]).map(x=>ext(x.url,x.label)).join(' · ')}</div>
        <details class="journal-details">
          <summary>Publication record & journal profile</summary>
          ${f.article.citation?`<div class="journal-detail-block"><span class="detail-label">Reference</span><p>${esc(f.article.citation)}</p></div>`:''}
          ${f.article.publisher?`<div class="journal-detail-block"><span class="detail-label">Publisher</span><p>${esc(f.article.publisher)}</p></div>`:''}
          ${f.article.publicationModel?`<div class="journal-detail-block"><span class="detail-label">Journal model</span><p>${esc(f.article.publicationModel)}</p></div>`:''}
          ${f.article.journalSince?`<div class="journal-detail-block"><span class="detail-label">Journal history</span><p>${esc(f.article.journalSince)}. ${esc(f.article.hosting||'')}</p></div>`:''}
          ${f.article.license?`<div class="journal-detail-block"><span class="detail-label">License</span><p>${esc(f.article.license)}</p></div>`:''}
          ${(f.article.indexing||[]).length?`<div class="journal-detail-block"><span class="detail-label">Indexing & discovery</span><div class="journal-indexing">${(f.article.indexing||[]).map(x=>`<span>${esc(x)}</span>`).join('')}</div></div>`:''}
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
    return `<article class="card curriculum-domain academic-motion-card" data-academic-tilt data-tilt-strength="2.3" data-search="${esc((g.name+' '+g.description+' '+courses.join(' ')+' '+groups.map(x=>(x.courses||[]).join(' ')).join(' ')+' '+items.map(x=>x.title).join(' ')).toLowerCase())}">
      <div class="curriculum-domain-head"><span class="domain-index">${esc(String((D.coursework?.categories||[]).indexOf(g)+1).padStart(2,'0'))}</span><div><h3>${esc(g.name||'Academic domain')}</h3><p>${esc(g.description||'')}</p></div></div>
      <div class="curriculum-domain-meta">${esc(meta)}</div>
      <details><summary>View coursework & components</summary><div class="curriculum-domain-body">${body}</div></details>
    </article>`;
  }

  function academicProjectCard(p){
    return `<article class="card academic-project-card academic-project-rich academic-motion-card" data-academic-tilt data-tilt-strength="1.25">
      <div class="academic-project-head">
        <div>
          <div class="meta"><span class="badge">${esc(p.level||'')}</span><span class="badge">${esc(p.credits||'')} credits</span>${p.type?`<span class="badge">${esc(p.type)}</span>`:''}${p.grade?`<span class="academic-grade-pill"><span class="grade-star" aria-hidden="true">★</span><strong>${esc(p.grade)}</strong><small>${esc(p.gradeLabel||'Grade')}</small></span>`:''}</div>
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
          ${p.outputUrl?`<a class="doi-icon-link" href="${esc(p.outputUrl)}" target="_blank" rel="noopener noreferrer" aria-label="Open DOI ${esc(p.doi||'')}" title="Open DOI: ${esc(p.doi||'')}"><span class="doi-mark">doi</span></a>`:''}
        </div>
        ${p.journal.citation?`<p class="project-journal-citation">${esc(p.journal.citation)}</p>`:''}
        ${(p.journal.metrics||[]).length?`<div class="project-journal-metrics">${p.journal.metrics.map(m=>`<div><strong>${esc(m.value||'')}</strong><span>${esc(m.label||'')}</span><small>${esc(m.source||'')}</small></div>`).join('')}</div>`:''}
        <div class="project-journal-meta">
          ${p.journal.publisher?`<span><strong>Publisher</strong>${esc(p.journal.publisher)}</span>`:''}
          ${p.journal.onlineIssn?`<span><strong>Online ISSN</strong>${esc(p.journal.onlineIssn)}</span>`:''}
        </div>
        ${p.journal.standing?`<p class="project-journal-standing">${esc(p.journal.standing)}</p>`:''}
        ${p.journal.officialUrl?`<a class="journal-home-link" href="${esc(p.journal.officialUrl)}" target="_blank" rel="noopener noreferrer">Official journal page ↗</a>`:''}
      </div>`:''}

      <div class="project-footer">
        <p><strong>Supervisor:</strong> ${esc(p.supervisor||'')}</p>
        <p><strong>Outcome:</strong> ${esc(p.outcome||'')}</p>
        ${p.outputUrl&&!p.journal?`<a class="btn small" href="${esc(p.outputUrl)}" target="_blank" rel="noopener noreferrer">${esc(p.outputLabel||'View related output')}</a>`:''}
      </div>
    </article>`;
  }

  function instructorCard(i){
    return `<article class="card instructor-card instructor-profile-card academic-motion-card" data-academic-tilt data-tilt-strength="2.2">
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
    <section class="section alt"><div class="container">${sectionHead('Evolution','Research trajectory')}<div class="timeline">${(D.research?.evolution||[]).map(e=>`<div class="timeline-item"><strong>${esc(e.period||e.year||'')}</strong><h3>${esc(e.title||'')}</h3><p>${esc(e.detail||e.description||'')}</p></div>`).join('')}</div></div></section>
    <section class="section"><div class="container">${sectionHead('Current directions','Ongoing & in preparation')}<div class="grid grid-3">${(D.ongoing||[]).map(x=>`<article class="card"><div class="badge">In preparation</div><h3>${esc(x.title)}</h3><p>${esc(x.objective||x.summary||x.description||'')}</p>${tags(x.methods||x.tags||[])}</article>`).join('')}</div></div></section>`;}

  function publications(){const all=D.outputs||[];return `${pageHero('Publications & Research Outputs','Search and filter publicly shareable outputs. Confidential research is intentionally excluded from the public repository.')}
    <section class="section"><div class="container"><div class="search-wrap"><input class="search-input" id="pubSearch" placeholder="Search title, journal, method or topic…"></div><div class="filters" id="pubFilters"><button class="filter active" data-filter="all">All</button><button class="filter" data-filter="published">Published</button><button class="filter" data-filter="accepted">Accepted</button><button class="filter" data-filter="under-review">Under review</button></div><div class="grid grid-2" id="pubGrid">${all.map(outputCard).join('')}</div></div></section>`;}

  function academic(){
    const cw=D.coursework||{};
    const domains=cw.categories||[];
    return `${pageHero('Academic','Education, curriculum, fieldwork, supervised projects and research training.')}
    <section class="section"><div class="container">
      ${sectionHead('Academic journey','Education','Formal education from secondary science training through postgraduate statistics.')}
      <div class="education-timeline">${(D.education||[]).map(educationCard).join('')}</div>
    </div></section>

    <section class="section alt"><div class="container">
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
        <div class="search-wrap curriculum-search"><input class="search-input" id="courseSearch" placeholder="Search a course, method or domain…"></div>
      </div>
      <div class="grid curriculum-domain-grid" id="curriculumGrid">${domains.map(curriculumDomainCard).join('')}</div>
    </div></section>

    <section class="section"><div class="container">
      ${sectionHead('Supervised research','B.Sc. and M.S. academic projects','Two project-based research components connecting formal coursework to peer-reviewed and applied research outputs.')}
      <div class="academic-project-grid">${(D.academicProjects||[]).map(academicProjectCard).join('')}</div>
    </div></section>

    <section class="section alt"><div class="container">
      ${sectionHead('Academic research & fieldwork','B.Sc. Statistical Field Survey','A supervised field-based research component within the B.Sc. (Hons.) curriculum.')}
      ${fieldSurveyCard()}
    </div></section>

    <section class="section"><div class="container">
      ${sectionHead('Teaching network','Selected instructor-course links','Academic teachers and guest teachers connected to major B.Sc. and M.S. coursework, presented with their academic roles, leadership appointments and qualifications.')}
      <div class="grid grid-2 teaching-network">${(D.instructorLinks||[]).map(instructorCard).join('')}</div>
    </div></section>

    <section class="section alt"><div class="container">
      ${sectionHead('Languages & academic communication','Communication profile & Medium of Instruction (MOI)','A professional language record linking proficiency, formal Medium of Instruction and evidence from research, peer review, conferences and field communication.')}
      ${languagePanel(true)}
      <div class="language-cta"><a class="btn" href="languages.html">View Full Language Profile</a></div>
    </div></section>

    <section class="section"><div class="container">
      ${sectionHead('Technical & analytical skills','Evidence-linked research capability','Methods and technical capabilities grounded in published work, active manuscripts, academic projects, coursework, research software and professional training.')}
      <div class="grid grid-2 technical-skills-grid">${(D.technicalSkills||[]).map(technicalSkillCard).join('')}</div>

      <div class="skills-stack-head">
        <div><div class="section-kicker">Research software & technology stack</div><h3>Tools, libraries & development environments</h3></div>
        <p>Methods are separated from implementation tools. Libraries, development environments and reproducibility infrastructure are shown as an evidence-backed research stack rather than proficiency scores.</p>
      </div>
      ${researchToolLayout()}
      ${computationalEnvironmentPanel()}
      ${techMarquee()}
    </div></section>`;
  }

  function experience(){return `${pageHero('Experience','Research roles, mentorship and collaborative support.')}<section class="section"><div class="container">${sectionHead('Research experience','Roles & contribution')}<div class="timeline">${(D.experience||[]).map(x=>`<div class="timeline-item"><strong>${esc(x.period||x.date||'')}</strong><h3>${esc(x.title||x.role||'')}</h3><p><strong>${esc(x.organization||x.institution||'')}</strong></p><p>${esc(x.description||x.detail||'')}</p></div>`).join('')}</div></div></section><section class="section alt"><div class="container">${sectionHead('Mentorship','Collaborative research support')}<p class="section-copy">Research mentorship and collaborative support are presented separately from formal academic supervision, with emphasis on study formulation, analysis workflows, validation and manuscript development.</p><div class="grid grid-3">${(D.people||[]).filter(x=>(x.roles||[]).includes('Mentee')).map(personCard).join('')}</div></div></section>`;}

  function conferences(){
    const groups=D.conferences||[];
    return `${pageHero('Conferences','Conference publications, oral/poster presentations and evidence.')}
      <section class="section"><div class="container">
        ${sectionHead('Conference record','Eight contributions · three presentations','Conference records are grouped by event so publication context, presentation roles and official event links remain clear.')}
        <div class="conference-groups">
          ${groups.map(g=>`<article class="card conference-group-card">
            <div class="conference-group-head">
              <div><div class="section-kicker">${esc(g.event||'Conference')}</div><h3>${esc(g.full||g.event||'')}</h3></div>
              ${g.url?`<a class="btn small" href="${esc(g.url)}" target="_blank" rel="noopener noreferrer">Official homepage ↗</a>`:''}
            </div>
            <p class="conference-group-meta"><strong>${esc(g.host||'')}</strong><span>${esc(g.date||'')}</span><span>${esc(g.meta||'')}</span></p>
            <div class="conference-paper-list">
              ${(g.papers||g.items||[]).map(p=>`<div class="conference-paper-item">
                <div class="meta">${p.role?`<span class="badge">${esc(p.role)}</span>`:''}${p.page?`<span class="badge">${esc(p.page)}</span>`:''}</div>
                <h4>${esc(p.title||'')}</h4>
                <p>${esc(p.authors||'')}</p>
              </div>`).join('')}
            </div>
          </article>`).join('')}
        </div>
      </div></section>`;
  }

  function recognition(){return `${pageHero('Recognition','Awards, certificates & professional development.')}<section class="section"><div class="container">${sectionHead('Honors & awards','Evidence-backed recognition')}<div class="grid grid-3">${(D.awards||[]).map(a=>`<article class="card"><h3>${esc(a.title||a.name||'')}</h3><p>${esc(a.issuer||a.organization||'')}</p><p>${esc(a.description||a.detail||'')}</p></article>`).join('')}</div></div></section><section class="section alt"><div class="container">${sectionHead('Training & certifications','Professional development')}<div class="grid grid-3">${(D.training||[]).map(t=>`<article class="card"><div class="badge">${esc(t.date||t.year||'')}</div><h3>${esc(t.title||t.name||'')}</h3><p>${esc(t.provider||t.issuer||'')}</p><p>${esc(t.duration||t.detail||t.description||'')}</p></article>`).join('')}</div></div></section>`;}

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

  function gallery(){return `${pageHero('Gallery & Evidence','A curated visual archive of verified academic, research and professional records.')}<section class="section"><div class="container"><div class="filters">${['All','Award','Conference','Scientific Engagement','Professional Development','Scholarly Service'].map((x,i)=>`<button class="filter ${i===0?'active':''}">${x}</button>`).join('')}</div><div class="grid grid-3">${(D.gallery||[]).map(g=>`<article class="card"><div class="portrait-placeholder">${esc(g.title||g.category||'Verified visual evidence')}</div><h3>${esc(g.title||g.category||'')}</h3><p>${esc(g.caption||g.description||'')}</p></article>`).join('')}</div></div></section>`;}

  function dashboard(){return `${pageHero('Research & Impact Dashboard','Interactive academic metrics with source-aware interpretation.')}<section class="section"><div class="container">${sectionHead('Verified metrics','Current scholarly indicators')}<div class="grid grid-4">${(D.impactMetrics||[]).map(m=>`<article class="card metric"><strong>${esc(m.value)}</strong><span>${esc(m.label)}</span><small>${esc(m.source||'')} ${m.date?'· '+esc(m.date):''}</small></article>`).join('')}</div></div></section><section class="section alt"><div class="container">${sectionHead('Portfolio analytics','Research distribution')}<div class="grid grid-3"><article class="card"><h3>Publication status</h3><p>3 published/online · 1 accepted/forthcoming · 8 under review · 7 in preparation.</p></article><article class="card"><h3>Conference record</h3><p>8 contributions · 3 presentations · 1 JSR Award.</p></article><article class="card"><h3>Scholarly service</h3><p>32 completed invited reviews across three journals.</p></article></div></div></section>`;}

  function askRazu(){return `${pageHero('Ask Razu AI','Research Intelligence for My Academic Portfolio')}<section class="section"><div class="container"><article class="card"><h3>Hi, I’m Ask Razu AI.</h3><p>I can help you explore Md. Razu Ahmed’s research, publications, datasets, methodologies, academic background, peer-review service, conference work, collaborations and current research directions. My answers are grounded in the verified information available in this portfolio.</p><div class="search-wrap"><input class="search-input" id="askInput" placeholder="Ask about research, methods, coursework, conferences or collaborators…"></div><div class="pill-row" style="margin-top:14px">${['Research','Publications','Methods','Experience','Collaborators','Metrics','Coursework','Conferences','Training'].map(x=>`<button class="filter askPrompt" data-q="${x}">${x}</button>`).join('')}</div><div id="askAnswer" class="card" style="margin-top:18px"><strong>Try:</strong> “Which studies used SHAP?”, “Show first-author papers”, “What machine-learning coursework did Razu take?”, or “Who collaborated on dengue?”</div></article></div></section>`;}

  function projects(){return `${pageHero('Projects & Prototypes','Research prototypes, analytical projects and reproducible workflows.')}<section class="section"><div class="container">${sectionHead('Featured prototype','Diabetic-retinopathy grading research prototype')}<article class="card quote-card"><h3>Deep learning + handcrafted feature fusion</h3><p>Research prototype combining DenseNet121 representations, SIFT-BoVW features, XGBoost and Grad-CAM++ for explainable diabetic-retinopathy grading. Intended for research and decision-support exploration, not clinical diagnosis.</p></article></div></section><section class="section alt"><div class="container">${sectionHead('Active projects','Current directions')}<div class="grid grid-3">${(D.ongoing||[]).map(x=>`<article class="card"><span class="badge">In preparation</span><h3>${esc(x.title)}</h3><p>${esc(x.objective||x.summary||x.description||'')}</p>${tags(x.methods||x.tags||[])}</article>`).join('')}</div></div></section>`;}

  function contact(){return `${pageHero('Collaboration','Interested in working together?')}<section class="section"><div class="container"><div class="grid grid-2"><article class="card"><h3>Research collaboration</h3><p>Open selectively to interdisciplinary projects, PhD opportunities, academic partnerships, public-health and biomedical data-science collaborations, explainable AI and statistically rigorous machine-learning research.</p><a class="btn primary" href="mailto:razuahmed038@gmail.com">Email Md. Razu Ahmed</a></article><article class="card"><h3>Academic presence</h3><p>${(D.profiles||[]).map(p=>p.url?ext(p.url,p.label||p.name):'').filter(Boolean).join(' · ')}</p></article></div></div></section>`;}

  function copyrightPage(){return `${pageHero('Copyright & Reuse','Responsible reuse of portfolio content, research figures and evidence.')}<section class="section"><div class="container"><article class="card"><h3>Portfolio content</h3><p>Unless an individual publication, dataset, image or certificate states otherwise, portfolio text and original interface design are © 2026 Md. Razu Ahmed. Published articles and datasets retain the licenses specified by their publishers or repositories.</p><h3>Research figures</h3><p>Reuse should follow the license and attribution requirements of the associated publication. Do not detach figures from their scientific context.</p><h3>Certificates & third-party materials</h3><p>Certificates, journal logos, institutional logos and event materials remain the property of their respective issuers and are displayed as academic evidence.</p></article></div></section>`;}

  function pageHero(title,lead){return `<section class="hero compact"><div class="container"><div class="eyebrow"><span class="live-dot"></span><span>MRA Research Intelligence</span><span class="clock" data-clock></span></div><h1>${esc(title)}</h1><p class="lede">${esc(lead)}</p></div></section>`;}

  function initInteractive(){
    $('#settingsBtn')?.addEventListener('click',()=>$('#settings').toggleAttribute('hidden'));
    $('#menuBtn')?.addEventListener('click',()=>$('#mobilePanel').toggleAttribute('hidden'));
    $('#searchBtn')?.addEventListener('click',()=>location.href='search.html');
    document.addEventListener('keydown',e=>{if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()==='k'){e.preventDefault();location.href='search.html'} if(e.key==='/'){if(!/INPUT|TEXTAREA/.test(document.activeElement.tagName)){e.preventDefault();location.href='search.html'}} if(e.key.toLowerCase()==='h'&&!/INPUT|TEXTAREA/.test(document.activeElement.tagName))location.href='index.html'; if(e.key.toLowerCase()==='t'&&!/INPUT|TEXTAREA/.test(document.activeElement.tagName))$('#settings').toggleAttribute('hidden'); if(e.key==='Escape'){ $('#settings')?.setAttribute('hidden','');$('#mobilePanel')?.setAttribute('hidden',''); }});
    const search=$('#pubSearch'), grid=$('#pubGrid'); if(search&&grid){const cards=[...grid.children]; let filter='all'; const run=()=>{const q=search.value.toLowerCase();cards.forEach((c,i)=>{const o=(D.outputs||[])[i]||{};const okQ=!q||c.textContent.toLowerCase().includes(q); const bucket=o.bucket||''; const okF=filter==='all'||bucket===filter; c.hidden=!(okQ&&okF)});}; search.addEventListener('input',run); $$('#pubFilters .filter').forEach(b=>b.addEventListener('click',()=>{$$('#pubFilters .filter').forEach(x=>x.classList.remove('active'));b.classList.add('active');filter=b.dataset.filter;run()}));}
    document.querySelectorAll('.education-logo-img').forEach(img=>img.addEventListener('error',()=>{
      const wrap=img.closest('.education-logo-wrap');
      if(wrap){wrap.innerHTML='<span class="education-logo-fallback">EDU</span>';}
    },{once:true}));
    document.querySelectorAll('img[data-tech-fallback]').forEach(img=>img.addEventListener('error',()=>{
      const wrap=img.closest('.tech-logo');
      if(wrap){const span=document.createElement('span');span.className='tech-logo-fallback';span.textContent=img.dataset.techFallback||'APP';wrap.replaceWith(span);}
    },{once:true}));
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
    const academicTiltCards=[...document.querySelectorAll('[data-academic-tilt]')];
    const canAcademicTilt=()=>window.matchMedia('(pointer:fine)').matches && window.innerWidth>820 && document.documentElement.dataset.motion!=='reduced';
    academicTiltCards.forEach(card=>{
      const reset=()=>{
        card.style.removeProperty('--tilt-rx');
        card.style.removeProperty('--tilt-ry');
        card.style.removeProperty('--tilt-z');
        card.style.removeProperty('--shine-x');
        card.style.removeProperty('--shine-y');
      };
      card.addEventListener('pointermove',e=>{
        if(!canAcademicTilt()) return;
        const rect=card.getBoundingClientRect();
        const px=(e.clientX-rect.left)/rect.width-.5;
        const py=(e.clientY-rect.top)/rect.height-.5;
        const strength=parseFloat(card.dataset.tiltStrength||'2.5');
        card.style.setProperty('--tilt-rx',(-py*strength).toFixed(2)+'deg');
        card.style.setProperty('--tilt-ry',(px*strength).toFixed(2)+'deg');
        card.style.setProperty('--tilt-z','8px');
        card.style.setProperty('--shine-x',((px+.5)*100).toFixed(1)+'%');
        card.style.setProperty('--shine-y',((py+.5)*100).toFixed(1)+'%');
      });
      card.addEventListener('pointerleave',reset);
      card.addEventListener('blur',reset,true);
    });
    const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.06}); document.querySelectorAll('.card,.timeline-item').forEach(e=>{e.classList.add('reveal');io.observe(e)});
    const hero=$('#homeHero'), tilt=hero?.querySelector('[data-tilt]');
    if(hero&&tilt){
      const resetTilt=()=>{tilt.style.transform='perspective(1100px) rotateX(0deg) rotateY(0deg) translateZ(0)';};
      tilt.addEventListener('pointermove',e=>{
        if(document.documentElement.dataset.motion==='reduced') return;
        const r=tilt.getBoundingClientRect();
        const px=(e.clientX-r.left)/r.width-.5, py=(e.clientY-r.top)/r.height-.5;
        tilt.style.transform=`perspective(1100px) rotateX(${(-py*8).toFixed(2)}deg) rotateY(${(px*10).toFixed(2)}deg) translateZ(10px)`;
      });
      tilt.addEventListener('pointerleave',resetTilt);
      hero.addEventListener('pointermove',e=>{
        if(document.documentElement.dataset.motion==='reduced') return;
        const r=hero.getBoundingClientRect();
        hero.style.setProperty('--hero-x',((e.clientX-r.left)/r.width*100).toFixed(1)+'%');
        hero.style.setProperty('--hero-y',((e.clientY-r.top)/r.height*100).toFixed(1)+'%');
      });
    }
    clock();
  }

  function render(){header();settings();footer(); const main=$('#page-content'); if(!main)return; const map={home,profile,languages,research,publications,projects,academic,experience,conferences,recognition,network,resources,gallery,dashboard,'ask-razu':askRazu,contact,copyright:copyrightPage}; main.innerHTML=(map[page]||home)(); initInteractive();}
  render();
})();