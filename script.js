(() => {
  const D = window.PORTFOLIO_DATA;
  const $ = (s) => document.querySelector(s);
  const $$ = (s) => [...document.querySelectorAll(s)];

  const setText = (sel, text) => { const el = $(sel); if (el) el.textContent = text; };
  setText('#heroIntro', D.profile.intro);
  setText('#heroPrinciple', D.profile.principle);
  setText('#availabilityText', D.profile.availability);

  const metricsGrid = $('#metricsGrid');
  D.metrics.forEach(m => {
    const el = document.createElement('div');
    el.className = 'metric-card reveal';
    el.innerHTML = `<strong>${m.value}</strong><span>${m.label}</span>`;
    metricsGrid.appendChild(el);
  });

  const addTags = (sel, arr) => {
    const root = $(sel);
    arr.forEach(t => {
      const span = document.createElement('span');
      span.className = 'tag';
      span.textContent = t;
      root.appendChild(span);
    });
  };
  addTags('#methodTags', D.interests.methods);
  addTags('#applicationTags', D.interests.applications);

  const profilePriority = ['Google Scholar','ORCID','Scopus','Web of Science'];
  D.profiles.filter(p => profilePriority.includes(p.label)).forEach(p => {
    const a = document.createElement('a');
    a.href = p.url; a.target = '_blank'; a.rel = 'noopener'; a.textContent = p.label;
    $('#heroProfileLinks').appendChild(a);
  });

  const allOutputs = [
    ...D.publications.map(x => ({...x, bucket: x.status.toLowerCase().includes('accepted') ? 'accepted' : 'published'})),
    ...D.manuscripts.map(x => ({...x, bucket: 'under-review'}))
  ];

  const outputGrid = $('#outputGrid');
  const renderOutputs = (filter='all', query='') => {
    outputGrid.innerHTML = '';
    const q = query.trim().toLowerCase();
    const items = allOutputs.filter(item => {
      const matchesFilter = filter === 'all' || item.bucket === filter;
      const haystack = [item.title,item.venue,item.role,item.status,...(item.tags||[])].join(' ').toLowerCase();
      return matchesFilter && (!q || haystack.includes(q));
    });
    if (!items.length) {
      outputGrid.innerHTML = `<div class="profile-card"><strong>No matching research output found.</strong><p>Try a broader keyword or another filter.</p></div>`;
      return;
    }
    items.forEach(item => {
      const card = document.createElement('article');
      card.className = 'output-card reveal visible';
      const links = [];
      if (item.doi) links.push(`<a href="${item.doi}" target="_blank" rel="noopener">DOI ↗</a>`);
      if (item.researchgate) links.push(`<a href="${item.researchgate}" target="_blank" rel="noopener">ResearchGate ↗</a>`);
      if (item.dataset) links.push(`<a href="${item.dataset}" target="_blank" rel="noopener">Dataset ↗</a>`);
      card.innerHTML = `<div class="output-meta"><span class="status-pill">${item.status}</span><span class="role-pill">${item.role}</span></div><h3>${item.title}</h3><div class="venue">${item.venue}${item.citation ? ` · ${item.citation}` : ''}</div><p>${item.summary}</p>${item.highlight ? `<p class="highlight">${item.highlight}</p>` : ''}<div class="tag-cloud">${(item.tags||[]).map(t=>`<span class="tag">${t}</span>`).join('')}</div>${links.length?`<div class="output-links">${links.join('')}</div>`:''}`;
      outputGrid.appendChild(card);
    });
  };
  renderOutputs();

  let activeFilter = 'all';
  $$('.filter').forEach(btn => btn.addEventListener('click', () => {
    $$('.filter').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    activeFilter = btn.dataset.filter;
    renderOutputs(activeFilter, $('#researchSearch').value);
  }));
  $('#researchSearch').addEventListener('input', e => renderOutputs(activeFilter, e.target.value));

  D.education.forEach(ed => {
    const el = document.createElement('div');
    el.className = 'timeline-item';
    el.innerHTML = `<span class="timeline-date">${ed.year}</span><strong>${ed.degree}</strong><p>${ed.institution}</p><p>${ed.detail}</p>`;
    $('#educationList').appendChild(el);
  });

  const fillPeople = (sel, arr) => arr.forEach(name => {
    const d = document.createElement('div'); d.className='person'; d.textContent=name; $(sel).appendChild(d);
  });
  fillPeople('#guidanceList', D.guidance);
  fillPeople('#collaboratorList', D.collaborators);

  D.service.forEach(s => {
    const el = document.createElement('article');
    el.className='service-card reveal';
    el.innerHTML=`<strong>${s.reviews}</strong><h3>${s.journal}</h3><p>Peer Reviewer · ${s.since} – Present</p>`;
    $('#serviceGrid').appendChild(el);
  });

  D.profiles.forEach(p => {
    const a = document.createElement('a');
    a.className='profile-link reveal'; a.href=p.url; a.target='_blank'; a.rel='noopener';
    a.innerHTML=`<span>${p.label}</span><span>↗</span>`;
    $('#profilesGrid').appendChild(a);
  });

  const themeToggle = $('#themeToggle');
  const savedTheme = localStorage.getItem('mra-theme');
  if (savedTheme) document.documentElement.dataset.theme = savedTheme;
  themeToggle.addEventListener('click', () => {
    const next = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
    document.documentElement.dataset.theme = next;
    localStorage.setItem('mra-theme', next);
  });

  const menuToggle = $('#menuToggle');
  const mobileNav = $('#mobileNav');
  menuToggle.addEventListener('click', () => {
    const open = mobileNav.hasAttribute('hidden');
    if (open) mobileNav.removeAttribute('hidden'); else mobileNav.setAttribute('hidden','');
    menuToggle.setAttribute('aria-expanded', String(open));
  });
  $$('#mobileNav a').forEach(a => a.addEventListener('click', () => {
    mobileNav.setAttribute('hidden',''); menuToggle.setAttribute('aria-expanded','false');
  }));

  const privacyResponse = "I can only discuss research and information that is publicly available or explicitly included in this portfolio. I do not reveal confidential manuscripts, private editorial correspondence, manuscript IDs, reviewer reports, phone numbers, or other non-public material.";
  const normalize = s => s.toLowerCase().replace(/[’']/g,"'");
  const firstAuthorTitles = D.publications.filter(p=>p.role==='First Author').map(p=>p.title);

  function answerQuestion(raw) {
    const q = normalize(raw);
    const sensitive = ['confidential','unpublished paper','obaidul unpublished','cesarean manuscript','reviewer report','manuscript id','editorial correspondence','private paper'];
    if (sensitive.some(k=>q.includes(k))) return privacyResponse;
    if (q.includes('main research') || q.includes('research area') || q.includes('research interest')) return `Razu’s core methodological interests include statistical learning, machine learning, deep learning, explainable AI, multivariate and multimodal analysis, forecasting, and causal inference. Major application areas include public health, biomedical data science, medical imaging, infectious-disease forecasting, NLP, food computing, signal processing, and emerging genomics/bioinformatics work.`;
    if (q.includes('first-author') || q.includes('first author')) return `Public first-author journal outputs currently include: ${firstAuthorTitles.join('; ')}. The portfolio also includes first-authored active research such as the diabetic-retinopathy grading manuscript.`;
    if (q.includes('medical imaging') || q.includes('retin') || q.includes('fundus')) return `Razu’s medical-imaging work includes automated diabetic-retinopathy grading from retinal fundus images using leak-safe validation, deep representations, handcrafted descriptors, feature fusion, XGBoost and Grad-CAM++-based explainability. The research has also been presented at ICASDS 2025 and EFAST 2026.`;
    if (q.includes('shap') || q.includes('explainable') || q.includes('xai')) return `Yes. Explainable AI is a core part of Razu’s research profile. Public work includes SHAP-based interpretation in machine-learning pipelines and Grad-CAM++ for image-model interpretation. He emphasizes explanation alongside calibration, validation and leakage-aware modelling.`;
    if (q.includes('peer review') || q.includes('reviewer')) return `Razu has completed 32 invited peer reviews: 25 for PLOS ONE, 6 for Biomedical Signal Processing and Control, and 1 for Engineering Applications of Artificial Intelligence, verified through September 2026.`;
    if (q.includes('dataset') || q.includes('mendeley')) return `Razu is the second-listed creator of the PUST Cafeteria Food Image Dataset on Mendeley Data. The public dataset contains 720 source photographs and a processed collection of 1,728 images with 6,297 annotated food instances across 16 classes, with YOLO and COCO annotation formats.`;
    if (q.includes('dengue') || q.includes('forecast')) return `Razu’s dengue research includes nationwide district-informed one-week-ahead forecasting across all 64 districts of Bangladesh and a code-locked decision-emulation study of operational readiness for district prioritization. The work emphasizes out-of-time validation and decision relevance.`;
    if (q.includes('publication') || q.includes('journal article')) return `The current public portfolio records 3 published/online peer-reviewed journal articles and 1 accepted/forthcoming article. Use the Publications section above to filter the complete public set by status and topic.`;
    if (q.includes('collaborator') || q.includes('network') || q.includes('mentor') || q.includes('advisor')) return `Senior academic guidance includes Dr. Md. Shamim Reza, Dr. Sabba Ruhi, Dr. Aminul Hoque, Dr. Menhazul Abedin, Dr. Md. Feroz Ali and Dr. Md. Ashad Alam. Key research collaborators are listed in the Research Network section. The portfolio intentionally limits profiles to verified public-safe information.`;
    if (q.includes('education') || q.includes('degree')) return `Razu holds B.Sc. (Hons.) and M.S. degrees in Statistics from Pabna University of Science and Technology. His M.S. CGPA is 3.49/4.00, with a 5th-place standing in the project-based track.`;
    if (q.includes('skill') || q.includes('xgboost') || q.includes('machine learning')) return `His technical work includes Python, R, scikit-learn, XGBoost, TensorFlow/Keras, SHAP, OpenCV, Statsmodels, GeoPandas, SPSS and Minitab, alongside statistical modelling, ensemble learning, deep learning, computer vision, NLP, forecasting and reproducible validation workflows.`;
    const matches = allOutputs.filter(o => {
      const h=[o.title,o.venue,o.summary,...(o.tags||[])].join(' ').toLowerCase();
      return raw.toLowerCase().split(/\s+/).filter(w=>w.length>4).some(w=>h.includes(w));
    }).slice(0,3);
    if (matches.length) return `I found ${matches.length} relevant public research item${matches.length>1?'s':''}: ${matches.map(m=>`${m.title} (${m.venue})`).join('; ')}. You can find them in the Publications & active manuscripts section.`;
    return `I can help with Razu’s public research profile, publications, methods, datasets, education, peer-review service, collaborators and research themes. Try asking about medical imaging, dengue forecasting, SHAP, food computing, published articles or peer-review experience.`;
  }

  function addMessage(text, who) {
    const div=document.createElement('div'); div.className=`message ${who}`; div.innerHTML=`<p>${text}</p>`; $('#askLog').appendChild(div); $('#askLog').scrollTop=$('#askLog').scrollHeight;
  }
  $('#askForm').addEventListener('submit', e => {
    e.preventDefault(); const input=$('#askInput'); const q=input.value.trim(); if(!q)return; addMessage(q,'user'); input.value=''; setTimeout(()=>addMessage(answerQuestion(q),'assistant'),120);
  });
  $$('#promptChips button').forEach(btn=>btn.addEventListener('click',()=>{ $('#askInput').value=btn.textContent; $('#askForm').requestSubmit(); }));

  const observer = new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.08});
  $$('.reveal').forEach(el=>observer.observe(el));
})();
