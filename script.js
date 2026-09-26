(() => {
  const D = window.PORTFOLIO_DATA;
  const $ = (s) => document.querySelector(s);
  const $$ = (s) => [...document.querySelectorAll(s)];
  const esc = (s='') => String(s).replace(/[&<>'"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]));
  const setText = (sel, text) => { const el = $(sel); if (el) el.textContent = text; };

  setText('#heroIntro', D.profile.intro);
  setText('#heroPrinciple', D.profile.principle);
  setText('#availabilityText', D.profile.availability);

  const metricsGrid = $('#metricsGrid');
  D.metrics.forEach(m => {
    const el = document.createElement('div');
    el.className = 'metric-card reveal';
    el.innerHTML = `<strong>${esc(m.value)}</strong><span>${esc(m.label)}</span>${m.note ? `<small>${esc(m.note)}</small>` : ''}`;
    metricsGrid?.appendChild(el);
  });

  const addTags = (sel, arr) => {
    const root = $(sel); if (!root) return;
    arr.forEach(t => {
      const span = document.createElement('span');
      span.className = 'tag'; span.textContent = t; root.appendChild(span);
    });
  };
  addTags('#methodTags', D.interests.methods);
  addTags('#applicationTags', D.interests.applications);

  const profilePriority = ['Google Scholar','ORCID','Scopus','Web of Science'];
  D.profiles.filter(p => profilePriority.includes(p.label)).forEach(p => {
    const a = document.createElement('a');
    a.href = p.url; a.target = '_blank'; a.rel = 'noopener noreferrer'; a.textContent = p.label;
    a.setAttribute('aria-label', `${p.label} profile (opens in a new tab)`);
    $('#heroProfileLinks')?.appendChild(a);
  });

  const allOutputs = [
    ...D.publications.map(x => ({...x, bucket: x.status.toLowerCase().includes('accepted') ? 'accepted' : 'published'})),
    ...D.manuscripts.map(x => ({...x, bucket: 'under-review'}))
  ];

  const outputGrid = $('#outputGrid');
  const renderOutputs = (filter='all', query='') => {
    if (!outputGrid) return;
    outputGrid.innerHTML = '';
    const q = query.trim().toLowerCase();
    const items = allOutputs.filter(item => {
      const matchesFilter = filter === 'all' || item.bucket === filter;
      const haystack = [item.title,item.venue,item.role,item.status,item.summary,...(item.tags||[])].join(' ').toLowerCase();
      return matchesFilter && (!q || haystack.includes(q));
    });
    if (!items.length) {
      outputGrid.innerHTML = `<div class="profile-card empty-state"><strong>No matching research output found.</strong><p>Try a broader keyword or another filter.</p></div>`;
      return;
    }
    items.forEach(item => {
      const card = document.createElement('article');
      card.className = 'output-card reveal visible';
      const links = [];
      if (item.doi) links.push(`<a href="${item.doi}" target="_blank" rel="noopener noreferrer">DOI ↗</a>`);
      if (item.researchgate) links.push(`<a href="${item.researchgate}" target="_blank" rel="noopener noreferrer">ResearchGate ↗</a>`);
      if (item.dataset) links.push(`<a href="${item.dataset}" target="_blank" rel="noopener noreferrer">Dataset ↗</a>`);
      card.innerHTML = `
        <div class="output-meta"><span class="status-pill">${esc(item.status)}</span><span class="role-pill">${esc(item.role)}</span></div>
        <h3>${esc(item.title)}</h3>
        <div class="venue">${esc(item.venue)}${item.citation ? ` · ${esc(item.citation)}` : ''}</div>
        <p>${esc(item.summary)}</p>
        ${item.highlight ? `<p class="highlight">${esc(item.highlight)}</p>` : ''}
        <div class="tag-cloud">${(item.tags||[]).map(t=>`<span class="tag">${esc(t)}</span>`).join('')}</div>
        ${links.length ? `<div class="output-links">${links.join('')}</div>` : ''}`;
      outputGrid.appendChild(card);
    });
  };
  renderOutputs();

  let activeFilter = 'all';
  $$('.filter').forEach(btn => btn.addEventListener('click', () => {
    $$('.filter').forEach(b => b.classList.remove('active'));
    btn.classList.add('active'); activeFilter = btn.dataset.filter;
    renderOutputs(activeFilter, $('#researchSearch')?.value || '');
  }));
  $('#researchSearch')?.addEventListener('input', e => renderOutputs(activeFilter, e.target.value));

  D.conferences?.forEach(conf => {
    const section = document.createElement('article');
    section.className = 'conference-card reveal';
    section.innerHTML = `
      <div class="conference-head">
        <div><span class="conference-code">${esc(conf.event)}</span><h3>${esc(conf.full)}</h3><p>${esc(conf.host)}</p></div>
        <div class="conference-date"><strong>${esc(conf.date)}</strong><small>${esc(conf.meta)}</small></div>
      </div>
      <div class="conference-papers">
        ${conf.papers.map((p,i)=>`<div class="conference-paper"><span class="paper-no">${i+1}</span><div><strong>${esc(p.title)}</strong><p>${esc(p.authors)}</p><div class="paper-meta"><span>${esc(p.page)}</span><span>${esc(p.role)}</span></div></div></div>`).join('')}
      </div>`;
    $('#conferenceList')?.appendChild(section);
  });

  D.education.forEach(ed => {
    const el = document.createElement('div');
    el.className = 'timeline-item';
    el.innerHTML = `<span class="timeline-date">${esc(ed.year)}</span><strong>${esc(ed.degree)}</strong><p>${esc(ed.institution)}</p><p>${esc(ed.detail)}</p>${ed.project ? `<small class="project-title"><b>Project:</b> ${esc(ed.project)}</small>` : ''}`;
    $('#educationList')?.appendChild(el);
  });

  D.awards?.forEach(a => {
    const el = document.createElement('article'); el.className = 'award-card reveal';
    el.innerHTML = `<span class="award-year">${esc(a.date)}</span><h4>${esc(a.title)}</h4><strong>${esc(a.issuer)}</strong><p>${esc(a.detail)}</p>${a.evidence ? `<small>${esc(a.evidence)}</small>` : ''}`;
    $('#awardsGrid')?.appendChild(el);
  });

  D.training?.forEach(t => {
    const el = document.createElement('article'); el.className = 'training-card reveal';
    el.innerHTML = `<div><span class="training-group">${esc(t.group)}</span><h4>${esc(t.title)}</h4><p>${esc(t.provider)}</p></div><div class="training-meta"><strong>${esc(t.date)}</strong><small>${esc(t.duration)}</small></div>`;
    $('#trainingList')?.appendChild(el);
  });

  const fillPeople = (sel, arr) => {
    const root = $(sel); if (!root) return;
    arr.forEach(person => {
      const obj = typeof person === 'string' ? {name: person, role: ''} : person;
      const d = document.createElement('div'); d.className='person';
      d.innerHTML = `<strong>${esc(obj.name)}</strong>${obj.role ? `<small>${esc(obj.role)}</small>` : ''}`;
      root.appendChild(d);
    });
  };
  fillPeople('#guidanceList', D.guidance);
  fillPeople('#collaboratorList', D.collaborators);
  fillPeople('#juniorList', D.juniorNetwork || []);

  D.service.forEach(s => {
    const el = document.createElement('article');
    el.className='service-card reveal';
    el.innerHTML=`<strong>${s.reviews}</strong><h3>${esc(s.journal)}</h3><p>Peer Reviewer · ${esc(s.since)} – Present</p>${s.recognition ? `<small>${esc(s.recognition)}</small>` : ''}`;
    $('#serviceGrid')?.appendChild(el);
  });

  D.engagements?.forEach(e => {
    const el = document.createElement('article'); el.className='engagement-card reveal';
    el.innerHTML = `<span class="engagement-date">${esc(e.date)}</span><h3>${esc(e.title)}</h3><strong>${esc(e.role)}</strong><p>${esc(e.venue)}</p>`;
    $('#engagementGrid')?.appendChild(el);
  });

  let galleryCategory = 'All';
  const galleryCategories = ['All', ...new Set((D.gallery||[]).map(g => g.category))];
  galleryCategories.forEach(cat => {
    const b = document.createElement('button'); b.className = `filter ${cat==='All'?'active':''}`; b.textContent = cat;
    b.addEventListener('click', () => {
      galleryCategory = cat;
      $$('#galleryFilters .filter').forEach(x=>x.classList.remove('active')); b.classList.add('active'); renderGallery();
    });
    $('#galleryFilters')?.appendChild(b);
  });

  const renderGallery = () => {
    const root = $('#galleryGrid'); if (!root) return; root.innerHTML='';
    (D.gallery||[]).filter(g => galleryCategory==='All' || g.category===galleryCategory).forEach(g => {
      const card = document.createElement('article'); card.className='gallery-card reveal visible';
      card.innerHTML = `<div class="gallery-media"><img src="${g.asset}" alt="${esc(g.title)}" loading="lazy" onerror="this.style.display='none';this.nextElementSibling.style.display='grid'" /><div class="gallery-fallback" style="display:none"><span>${esc(g.category)}</span><strong>${esc(g.title)}</strong></div></div><div class="gallery-copy"><span>${esc(g.category)}</span><h3>${esc(g.title)}</h3><p>${esc(g.caption)}</p></div>`;
      const img = card.querySelector('img');
      img?.addEventListener('click', ()=>openLightbox(g.asset, g.title, g.caption));
      root.appendChild(card);
    });
  };
  renderGallery();

  const openLightbox = (src,title,caption) => {
    const box = $('#lightbox'); const img = $('#lightboxImage'); const cap = $('#lightboxCaption');
    if (!box || !img || !cap) return;
    img.src = src; img.alt = title; cap.innerHTML = `<strong>${esc(title)}</strong><span>${esc(caption)}</span>`;
    box.removeAttribute('hidden'); document.body.classList.add('no-scroll');
  };
  const closeLightbox = () => { $('#lightbox')?.setAttribute('hidden',''); document.body.classList.remove('no-scroll'); };
  $('#lightboxClose')?.addEventListener('click', closeLightbox);
  $('#lightbox')?.addEventListener('click', e => { if (e.target === $('#lightbox')) closeLightbox(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeLightbox(); });

  D.profiles.forEach(p => {
    const a = document.createElement('a');
    a.className='profile-link reveal'; a.href=p.url; a.target='_blank'; a.rel='noopener noreferrer';
    a.setAttribute('aria-label', `${p.label} profile (opens in a new tab)`);
    a.innerHTML=`<span><small>${esc(p.type || 'profile')}</small>${esc(p.label)}</span><span>↗</span>`;
    $('#profilesGrid')?.appendChild(a);
  });

  const themeToggle = $('#themeToggle');
  const savedTheme = localStorage.getItem('mra-theme');
  if (savedTheme) document.documentElement.dataset.theme = savedTheme;
  themeToggle?.addEventListener('click', () => {
    const next = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
    document.documentElement.dataset.theme = next; localStorage.setItem('mra-theme', next);
  });

  const menuToggle = $('#menuToggle'); const mobileNav = $('#mobileNav');
  menuToggle?.addEventListener('click', () => {
    const open = mobileNav?.hasAttribute('hidden');
    if (open) mobileNav.removeAttribute('hidden'); else mobileNav.setAttribute('hidden','');
    menuToggle.setAttribute('aria-expanded', String(open));
  });
  $$('#mobileNav a').forEach(a => a.addEventListener('click', () => { mobileNav?.setAttribute('hidden',''); menuToggle?.setAttribute('aria-expanded','false'); }));

  const privacyResponse = "I can only discuss research and information that is publicly available or explicitly included in this portfolio. I do not reveal confidential manuscripts, private editorial correspondence, manuscript IDs, reviewer reports, phone numbers, or other non-public material.";
  const normalize = s => s.toLowerCase().replace(/[’']/g,"'");
  const firstAuthorTitles = D.publications.filter(p=>p.role==='First Author').map(p=>p.title);

  function answerQuestion(raw) {
    const q = normalize(raw);
    const sensitive = ['confidential','unpublished paper','obaidul unpublished','cesarean manuscript','reviewer report','manuscript id','editorial correspondence','private paper','hidden paper'];
    if (sensitive.some(k=>q.includes(k))) return privacyResponse;
    if (q.includes('main research') || q.includes('research area') || q.includes('research interest')) return `Razu’s core methodological interests include statistical learning, machine learning, deep learning, explainable AI, multivariate and multimodal analysis, forecasting, and causal inference. Major application areas include public health, biomedical data science, medical imaging, infectious-disease forecasting, NLP, food computing, signal processing, and emerging genomics/bioinformatics work.`;
    if (q.includes('first-author') || q.includes('first author')) return `Public first-author journal outputs currently include: ${firstAuthorTitles.join('; ')}. His active first-authored research also includes the diabetic-retinopathy grading manuscript.`;
    if (q.includes('conference') || q.includes('presentation')) return `Razu has 8 published conference contributions and delivered 3 presentations: oral presentations at EFAST 2026 and ICRAST 2025, and a poster presentation at ICASDS 2025. The ICASDS poster received the Journal of Statistical Research Award for Poster Competition.`;
    if (q.includes('certificate') || q.includes('training') || q.includes('course')) return `Verified professional development includes Elsevier Research Data Management and Research Design, Nature Masterclasses training in Publication Ethics and Peer Review, ICASDS workshops on causal inference and applied ML deployment, a 360-hour SICIP IT Support Service programme, BTEB Computer Office Application training, and selected Coursera courses.`;
    if (q.includes('award') || q.includes('honor') || q.includes('recognition')) return `Razu received the Journal of Statistical Research Award for Poster Competition at ICASDS 2025 for his diabetic-retinopathy grading research. He also received a Talent Pool Scholarship from Bangladesh’s Ministry of Primary and Mass Education in 2008.`;
    if (q.includes('medical imaging') || q.includes('retin') || q.includes('fundus')) return `Razu’s medical-imaging work includes automated diabetic-retinopathy grading from retinal fundus images using leak-safe validation, deep representations, handcrafted descriptors, feature fusion, XGBoost and Grad-CAM++-based explainability. The research was presented at ICASDS 2025 and EFAST 2026.`;
    if (q.includes('shap') || q.includes('explainable') || q.includes('xai')) return `Explainable AI is a core part of Razu’s research profile. Public work includes SHAP-based interpretation in machine-learning pipelines and Grad-CAM++ for image-model interpretation. He emphasizes explanation alongside calibration, validation and leakage-aware modelling.`;
    if (q.includes('peer review') || q.includes('reviewer')) return `Razu has completed 33 invited peer reviews: 25 for PLOS ONE, 7 for Biomedical Signal Processing and Control, and 1 for Engineering Applications of Artificial Intelligence, verified through September 2026.`;
    if (q.includes('dataset') || q.includes('mendeley')) return `Razu is the second-listed creator of the PUST Cafeteria Food Image Dataset on Mendeley Data. The public dataset contains 720 source photographs and a processed collection of 1,728 images with 6,297 annotated food instances across 16 classes, with YOLO and COCO annotation formats.`;
    if (q.includes('dengue') || q.includes('forecast')) return `Razu’s dengue research includes nationwide district-informed one-week-ahead forecasting across all 64 districts of Bangladesh and a code-locked decision-emulation study of operational readiness for district prioritization. The work emphasizes out-of-time validation and decision relevance.`;
    if (q.includes('publication') || q.includes('journal article')) return `The current public portfolio records 3 published/online peer-reviewed journal articles and 1 accepted/forthcoming article. Use the Research Outputs section to explore the public set by status and topic.`;
    if (q.includes('collaborator') || q.includes('network') || q.includes('mentor') || q.includes('advisor')) return `Senior academic guidance includes Dr. Md. Shamim Reza, Dr. Sabba Ruhi, Dr. Aminul Hoque, Dr. Menhazul Abedin, Dr. Md. Feroz Ali and Dr. Md. Ashad Alam. The Research Network section also lists key collaborators and junior researchers using verified public-safe information only.`;
    if (q.includes('education') || q.includes('degree')) return `Razu holds B.Sc. (Hons.) and M.S. degrees in Statistics from Pabna University of Science and Technology. His M.S. CGPA is 3.49/4.00, with a 5th-place standing in the project-based track.`;
    if (q.includes('skill') || q.includes('xgboost') || q.includes('machine learning')) return `His technical work includes Python, R, scikit-learn, XGBoost, TensorFlow/Keras, SHAP, OpenCV, Statsmodels, GeoPandas, SPSS and Minitab, alongside statistical modelling, ensemble learning, deep learning, computer vision, NLP, forecasting and reproducible validation workflows.`;
    const words = raw.toLowerCase().split(/\s+/).filter(w=>w.length>4);
    const matches = allOutputs.filter(o => {
      const h=[o.title,o.venue,o.summary,...(o.tags||[])].join(' ').toLowerCase();
      return words.some(w=>h.includes(w));
    }).slice(0,3);
    if (matches.length) return `I found ${matches.length} relevant public research item${matches.length>1?'s':''}: ${matches.map(m=>`${m.title} (${m.venue})`).join('; ')}. You can find them in the Research Outputs section.`;
    return `I can help with Razu’s public research profile, publications, conference record, methods, datasets, education, certificates, awards, peer-review service, collaborators and research themes. Try asking about medical imaging, dengue forecasting, SHAP, conferences, training, food computing or peer-review experience.`;
  }

  function addMessage(text, who) {
    const div=document.createElement('div'); div.className=`message ${who}`; const p=document.createElement('p'); p.textContent=text; div.appendChild(p); $('#askLog')?.appendChild(div); if ($('#askLog')) $('#askLog').scrollTop=$('#askLog').scrollHeight;
  }
  $('#askForm')?.addEventListener('submit', e => {
    e.preventDefault(); const input=$('#askInput'); const q=input?.value.trim(); if(!q)return; addMessage(q,'user'); input.value=''; setTimeout(()=>addMessage(answerQuestion(q),'assistant'),100);
  });
  $$('#promptChips button').forEach(btn=>btn.addEventListener('click',()=>{ $('#askInput').value=btn.textContent; $('#askForm').requestSubmit(); }));

  const observer = new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.06});
  $$('.reveal').forEach(el=>observer.observe(el));
})();
