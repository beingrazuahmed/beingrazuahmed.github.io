(() => {
  'use strict';
  const D = window.MRA_V2 || {};
  const $ = (s, r=document) => r.querySelector(s);
  const $$ = (s, r=document) => [...r.querySelectorAll(s)];
  const esc = (v='') => String(v).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[c]));
  const ext = (u,l) => `<a href="${esc(u)}" target="_blank" rel="noopener noreferrer">${esc(l)}</a>`;
  const page = document.body.dataset.page || 'home';

  const nav = [
    ['home','Home','index.html'],['profile','Profile','profile.html'],['research','Research','research.html'],
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
    el.innerHTML=`<footer class="footer"><div class="container footer-grid"><div><div class="brand"><span class="monogram">MRA</span><span>Md. Razu Ahmed</span></div><p>${esc(D.brand?.tagline||'')}</p><p class="tiny">Public portfolio · Privacy-safe by design · Last updated ${esc(D.lastUpdated||'')}</p></div><div><strong>Navigate</strong><p><a href="search.html">Search</a><br><a href="dashboard.html">Dashboard</a><br><a href="cv.html">CV</a><br><a href="copyright.html">Copyright & Reuse</a></p></div><div><strong>Connect</strong><p><a href="mailto:razuahmed038@gmail.com">Email</a><br><a href="https://github.com/beingrazuahmed" target="_blank" rel="noopener">GitHub</a><br><a href="contact.html">Collaborate</a></p></div></div><div class="container tiny">© 2026 Md. Razu Ahmed. All rights reserved.</div></footer>`;
  }

  function clock(){
    const els=[...document.querySelectorAll('[data-clock]')]; if(!els.length) return;
    const tick=()=>{const now=new Date(); const t=new Intl.DateTimeFormat('en-US',{timeZone:'Asia/Dhaka',hour:'2-digit',minute:'2-digit',second:'2-digit',hour12:true}).format(now); const d=new Intl.DateTimeFormat('en-GB',{timeZone:'Asia/Dhaka',weekday:'short',day:'2-digit',month:'short',year:'numeric'}).format(now); els.forEach(el=>{el.textContent=`${d} · ${t} · Dhaka`;});}; tick(); setInterval(tick,1000);
  }

  const tags = arr => `<div class="pill-row">${(arr||[]).map(x=>`<span class="tag">${esc(typeof x==='string'?x:(x.label||x.name||x.title||''))}</span>`).join('')}</div>`;
  const sectionHead=(k,t,c='')=>`<div class="section-head"><div><div class="section-kicker">${esc(k)}</div><h2>${esc(t)}</h2></div>${c?`<p class="section-copy">${esc(c)}</p>`:''}</div>`;
  const safeImg=(src,alt,cls='portrait')=>`<img class="${cls}" src="${esc(src)}" alt="${esc(alt)}" onerror="this.outerHTML='<div class=\'${cls} portrait-placeholder\'>Verified portrait will appear when the original asset is available.</div>'">`;
  const links=(obj={})=>['primary','discovery','social'].flatMap(k=>obj[k]||[]).map(x=>ext(x.url,x.label)).join(' · ');

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

  function outputCard(p){ const id=(p.id||'').toLowerCase(); const linkObj=D.publicationLinks?.[id]||p.links||{}; return `<article class="card output-card"><div class="meta"><span class="badge">${esc(p.status||p.bucket||'Research')}</span>${p.role?`<span class="badge">${esc(p.role)}</span>`:''}</div><h3>${esc(p.title||'Untitled')}</h3><p>${esc(p.journal||p.venue||p.summary||p.description||'')}</p><div class="link-row">${links(linkObj)}</div></article>`; }
  function personCard(x){return `<article class="card person-card">${safeImg(x.portrait,x.name,'avatar')}<h3>${esc(x.name)}</h3><div class="meta">${(x.roles||[]).map(r=>`<span class="badge">${esc(r)}</span>`).join('')}</div><p><strong>${esc(x.affiliation||'')}</strong></p><p>${esc(x.description||'')}</p><div class="link-row">${(x.links||[]).map(l=>ext(l.url,l.label)).join(' · ')}</div></article>`;}
  function fieldSurveyCard(){
    const f=D.fieldSurvey||{};
    return `<article class="card field-survey-card">
      <div class="meta"><span class="badge">${esc(f.degree||'')}</span><span class="badge">${esc(f.credits||'')} credits</span></div>
      <h3>${esc(f.study||f.title||'')}</h3>
      <p><strong>Supervisor:</strong> ${esc(f.supervisor||'')}</p>
      <p><strong>Research team:</strong> ${esc((f.team||[]).join(' · '))}</p>
      <div class="field-survey-facts">
        <div><strong>${esc(f.population||'')}</strong><span>Study frame</span></div>
        <div><strong>${esc(f.sample||'')}</strong><span>Analytical sample</span></div>
        <div><strong>${esc(f.variables||'')}</strong><span>Study variables</span></div>
        <div><strong>${esc(f.design||'')}</strong><span>Design</span></div>
      </div>
      <div class="progression progression-3">${(f.progression||[]).map(x=>`<div class="step">${esc(x)}</div>`).join('')}</div>
      <div class="field-survey-outcomes">
        ${f.conference?`<p><strong>Conference outcome:</strong> ${esc(f.conference)}</p>`:''}
        ${f.article?`<p><strong>Journal outcome:</strong> ${esc(f.article)}</p>`:''}
      </div>
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
    return `<article class="card academic-project-card">
      <div class="meta"><span class="badge">${esc(p.level||'')}</span><span class="badge">${esc(p.credits||'')} credits</span></div>
      <div class="tiny project-course">${esc(p.course||'')}</div>
      <h3>${esc(p.title||'')}</h3>
      <p><strong>Supervisor:</strong> ${esc(p.supervisor||'')}</p>
      <p>${esc(p.outcome||'')}</p>
    </article>`;
  }

  function instructorCard(i){
    return `<article class="card instructor-card">
      <div class="instructor-mark" aria-hidden="true">${esc((i.instructor||'?').split(' ').filter(Boolean).slice(-1)[0]?.charAt(0)||'?')}</div>
      <h3>${esc(i.instructor||'')}</h3>
      <div class="tiny">${esc(i.role||'')}</div>
      <div class="instructor-courses">${(i.courses||[]).map(c=>`<span class="tag">${esc(c)}</span>`).join('')}</div>
    </article>`;
  }

  function profile(){return `${pageHero('Profile','Academic identity, communication, working style and engagement.')}
    <section class="section"><div class="container">${sectionHead('Research profile','Academic identity')}<div class="grid grid-2"><article class="card quote-card"><h3>${esc(D.brand?.headline)}</h3><p>${esc(D.profile?.intro||D.research?.identity||'')}</p></article><article class="card"><h3>Research principles</h3>${tags((D.research?.principles||[]).map(x=>x.title))}</article></div></div></section>
    <section class="section alt"><div class="container">${sectionHead('Academic communication','Languages & Medium of Instruction (MOI)')}<div class="grid grid-2">${(D.languages||[]).map(l=>`<article class="card"><h3>${esc(l.name)}</h3><strong>${esc(l.level)}</strong><p>${esc(l.note)}</p></article>`).join('')}</div></div></section>
    <section class="section"><div class="container">${sectionHead('Professional strengths','Evidence-aligned working style')}<div class="grid grid-3">${(D.strengths||[]).map(s=>`<article class="card"><h3>${esc(s.title)}</h3><p>${esc(s.detail)}</p></article>`).join('')}</div></div></section>
    <section class="section alt"><div class="container">${sectionHead('Beyond research','Personal interests & engagement')}<div class="grid grid-2"><article class="card"><h3>Personal interests</h3>${tags(D.personalInterests)}</article><article class="card"><h3>Memberships & extra-curricular engagement</h3><ul>${(D.engagement||[]).map(x=>`<li>${esc(x)}</li>`).join('')}</ul></article></div></div></section>`;}

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
      <div class="grid grid-4 education-grid">${(D.education||[]).map(e=>`<article class="card education-card"><div class="badge">${esc(e.period||e.year||'')}</div><h3>${esc(e.degree||e.title||'')}</h3><p><strong>${esc(e.institution||e.place||'')}</strong></p><p>${esc(e.detail||e.description||e.cgpa||'')}</p>${e.moi?`<p class="education-moi">${esc(e.moi)}</p>`:''}</article>`).join('')}</div>
    </div></section>

    <section class="section alt"><div class="container">
      ${sectionHead('Academic curriculum','200-credit quantitative foundation','B.Sc. 160 credits + M.S. 40 credits, including 20 laboratory/applied courses, statistical fieldwork, supervised projects and viva voce assessment.')}
      <div class="grid grid-4 academic-credit-grid">
        <article class="card metric"><strong>200</strong><span>Total university credits</span><small>B.Sc. 160 + M.S. 40</small></article>
        <article class="card metric"><strong>40</strong><span>Laboratory / applied credits</span><small>20 applied courses</small></article>
        <article class="card metric"><strong>2</strong><span>Field-survey credits</span><small>Statistical fieldwork</small></article>
        <article class="card metric"><strong>7</strong><span>Supervised-project credits</span><small>B.Sc. 3 + M.S. 4</small></article>
      </div>
      <div class="curriculum-map-head">
        <div><div class="section-kicker">Curriculum map</div><h3>Five academic domains</h3></div>
        <div class="search-wrap curriculum-search"><input class="search-input" id="courseSearch" placeholder="Search a course, method or domain…"></div>
      </div>
      <div class="grid curriculum-domain-grid" id="curriculumGrid">${domains.map(curriculumDomainCard).join('')}</div>
    </div></section>

    <section class="section"><div class="container">
      ${sectionHead('Supervised research','B.Sc. and M.S. academic projects','Two project-based research components connecting formal coursework to peer-reviewed and applied research outputs.')}
      <div class="grid grid-2">${(D.academicProjects||[]).map(academicProjectCard).join('')}</div>
    </div></section>

    <section class="section alt"><div class="container">
      ${sectionHead('Academic research & fieldwork','B.Sc. Statistical Field Survey','A supervised field-based research component within the B.Sc. (Hons.) curriculum.')}
      ${fieldSurveyCard()}
    </div></section>

    <section class="section"><div class="container">
      ${sectionHead('Teaching network','Selected instructor-course links','Selected academic teachers and guest teachers linked to major courses in the B.Sc. and M.S. curriculum.')}
      <div class="grid grid-2 teaching-network">${(D.instructorLinks||[]).map(instructorCard).join('')}</div>
    </div></section>

    <section class="section alt"><div class="container">
      ${sectionHead('Languages','Academic communication & Medium of Instruction (MOI)')}
      <div class="grid grid-2">${(D.languages||[]).map(l=>`<article class="card"><h3>${esc(l.name)}</h3><strong>${esc(l.level)}</strong><p>${esc(l.note)}</p></article>`).join('')}</div>
    </div></section>

    <section class="section"><div class="container">
      ${sectionHead('Skills & software','Evidence-linked research toolkit')}
      <div class="grid grid-3">${(D.tools||[]).map(g=>`<article class="card tool-group"><h3>${esc(g.group)}</h3>${(g.items||[]).map(i=>`<div class="tool-item"><strong>${esc(i.name)}</strong><p>${esc(i.detail)}</p></div>`).join('')}</article>`).join('')}</div>
    </div></section>`;
  }

  function experience(){return `${pageHero('Experience','Research roles, mentorship and collaborative support.')}<section class="section"><div class="container">${sectionHead('Research experience','Roles & contribution')}<div class="timeline">${(D.experience||[]).map(x=>`<div class="timeline-item"><strong>${esc(x.period||x.date||'')}</strong><h3>${esc(x.title||x.role||'')}</h3><p><strong>${esc(x.organization||x.institution||'')}</strong></p><p>${esc(x.description||x.detail||'')}</p></div>`).join('')}</div></div></section><section class="section alt"><div class="container">${sectionHead('Mentorship','Collaborative research support')}<p class="section-copy">Research mentorship and collaborative support are presented separately from formal academic supervision, with emphasis on study formulation, analysis workflows, validation and manuscript development.</p><div class="grid grid-3">${(D.people||[]).filter(x=>(x.roles||[]).includes('Mentee')).map(personCard).join('')}</div></div></section>`;}

  function conferences(){return `${pageHero('Conferences','Conference publications, oral/poster presentations and evidence.')}<section class="section"><div class="container">${sectionHead('Conference record','Eight contributions · three presentations')}<div class="grid grid-2">${(D.conferences||[]).flatMap(g=>g.items?g.items:[g]).map(c=>`<article class="card"><div class="meta"><span class="badge">${esc(c.event||c.conference||'Conference')}</span>${c.role?`<span class="badge">${esc(c.role)}</span>`:''}</div><h3>${esc(c.title||'')}</h3><p>${esc(c.authors||c.detail||c.description||'')}</p><p class="tiny">${esc(c.date||'')} ${c.page?`· p. ${esc(c.page)}`:''}</p></article>`).join('')}</div></div></section>`;}

  function recognition(){return `${pageHero('Recognition','Awards, certificates & professional development.')}<section class="section"><div class="container">${sectionHead('Honors & awards','Evidence-backed recognition')}<div class="grid grid-3">${(D.awards||[]).map(a=>`<article class="card"><h3>${esc(a.title||a.name||'')}</h3><p>${esc(a.issuer||a.organization||'')}</p><p>${esc(a.description||a.detail||'')}</p></article>`).join('')}</div></div></section><section class="section alt"><div class="container">${sectionHead('Training & certifications','Professional development')}<div class="grid grid-3">${(D.training||[]).map(t=>`<article class="card"><div class="badge">${esc(t.date||t.year||'')}</div><h3>${esc(t.title||t.name||'')}</h3><p>${esc(t.provider||t.issuer||'')}</p><p>${esc(t.duration||t.detail||t.description||'')}</p></article>`).join('')}</div></div></section>`;}

  function network(){const groups=[...new Set((D.people||[]).map(x=>x.group))];return `${pageHero('Network & Impact','Mentors, advisors, collaborators & mentees — with shared works and relationship context.')}<section class="section"><div class="container">${groups.map(g=>`<div class="network-group">${sectionHead('Academic network',g)}<div class="grid grid-3">${D.people.filter(x=>x.group===g).map(x=>`<article class="card person-card">${safeImg(x.portrait,x.name,'avatar')}<h3>${esc(x.name)}</h3><div class="meta">${(x.roles||[]).map(r=>`<span class="badge">${esc(r)}</span>`).join('')}</div><p><strong>${esc(x.affiliation||'')}</strong></p><p>${esc(x.description||'')}</p>${x.shared?.length?`<h4>Shared works</h4><ul>${x.shared.map(s=>`<li>${esc(s)}</li>`).join('')}</ul>`:''}<div class="link-row">${(x.links||[]).map(l=>ext(l.url,l.label)).join(' · ')}</div></article>`).join('')}</div></div>`).join('')}</div></section>`;}

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
    const courseSearch=$('#courseSearch'), curriculumGrid=$('#curriculumGrid');
    if(courseSearch&&curriculumGrid){
      const domains=[...curriculumGrid.querySelectorAll('.curriculum-domain')];
      courseSearch.addEventListener('input',()=>{
        const q=courseSearch.value.trim().toLowerCase();
        domains.forEach(card=>{card.hidden=!!q && !(card.dataset.search||card.textContent.toLowerCase()).includes(q);});
      });
    }
    const ask=$('#askInput'), ans=$('#askAnswer'); if(ask&&ans){const reply=q=>{const s=q.toLowerCase();let out='';if(s.includes('shap'))out='SHAP appears in the CKD, HCV and public-health / explainability research records where public-approved details are available.';else if(s.includes('first-author'))out='First-author published/accepted works include the FastICA source-separation study, CKD prediction study and accepted AI-employment perceptions article.';else if(s.includes('course')||s.includes('machine learning coursework'))out='Relevant coursework includes Data Mining, Machine Learning, Deep Learning for Computer Vision, Programming with Python and R, Numerical Analysis and Simulation, and supporting statistics/mathematics courses.';else if(s.includes('dengue'))out='The public dengue portfolio includes nationwide forecasting and decision-oriented preparedness research, including collaborations with Md. Ziaul Haque and other co-authors.';else if(s.includes('review'))out='Md. Razu Ahmed has completed 32 invited peer reviews: 25 for PLOS ONE, 6 for Biomedical Signal Processing and Control, and 1 for Engineering Applications of Artificial Intelligence.';else out='I can answer from the public portfolio about research, publications, methods, coursework, conferences, collaborators, training and scholarly metrics. Confidential research is intentionally excluded.';ans.textContent=out;}; ask.addEventListener('keydown',e=>{if(e.key==='Enter')reply(ask.value)}); $$('.askPrompt').forEach(b=>b.addEventListener('click',()=>{ask.value=b.dataset.q;reply(b.dataset.q)}));}
    const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.06}); $('.card,.timeline-item').forEach(e=>{e.classList.add('reveal');io.observe(e)});
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

  function render(){header();settings();footer(); const main=$('#page-content'); if(!main)return; const map={home,profile,research,publications,projects,academic,experience,conferences,recognition,network,resources,gallery,dashboard,'ask-razu':askRazu,contact,copyright:copyrightPage}; main.innerHTML=(map[page]||home)(); initInteractive();}
  render();
})();