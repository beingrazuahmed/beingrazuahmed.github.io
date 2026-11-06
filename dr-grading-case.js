(function drPageEnhancement(){
  'use strict';
  const BASE='assets/academic/projects/dr-grading/';
  const figData=[
    {no:'01',file:'fig01-retina-lesions.webp',title:'Normal retina and characteristic DR lesions',group:'CLINICAL CONTEXT',desc:'Illustration of a normal retina and diabetic-retinopathy changes including microaneurysms, exudates and neovascularization.'},
    {no:'02',file:'fig02-five-dr-grades.webp',title:'The five retinopathy grades',group:'FIVE-CLASS TARGET',desc:'Representative fundus images spanning no DR through proliferative diabetic retinopathy.',wide:true},
    {no:'03',file:'fig03-dataset-preparation.webp',title:'Fundus-image preparation',group:'DATASET PIPELINE',desc:'Image cleaning, de-duplication, preprocessing and augmentation stages used in the research workflow.'},
    {no:'04',file:'fig04-stagewise-framework.webp',title:'Complete stage-wise grading methodology',group:'STUDY WORKFLOW',desc:'Original Figure 4: five-stage framework showing fundus preparation, deep and handcrafted features, model selection and evaluation.',wide:true},
    {no:'A',file:'additional-framework-overview.webp',title:'Detailed research framework',group:'ADDITIONAL SCHEMATIC',desc:'Supplementary author-supplied chart of the data processing, models, comparative stages and screening output.',wide:true},
    {no:'05',file:'fig05-cnn1-architecture.webp',title:'CNN-1 architecture',group:'CUSTOM CNN BASELINE',desc:'Convolution blocks, global average pooling and the five-class prediction head.',wide:true},
    {no:'06',file:'fig06-cnn2-architecture.webp',title:'CNN-2 · Residual and SE blocks',group:'CUSTOM CNN BASELINE',desc:'Residual network with squeeze-and-excitation blocks and projection shortcuts.'},
    {no:'07',file:'fig07-cnn3-architecture.webp',title:'CNN-3 · EfficientNet-lite',group:'CUSTOM CNN BASELINE',desc:'MBConv stages, squeeze-and-excitation components and DropPath.'},
    {no:'08',file:'fig08-confusion-matrix.webp',title:'Normalized held-out confusion matrix',group:'CLASS-LEVEL DIAGNOSTICS',desc:'Distribution of predicted grades versus ground-truth grades for the selected fused model.'},
    {no:'09',file:'fig09-roc-curves.webp',title:'One-vs-rest ROC curves',group:'CLASS DISCRIMINATION',desc:'Five class-specific discrimination curves for the selected Stage-5 model.'},
    {no:'10',file:'fig10-performance-comparison.webp',title:'Final model vs CNN baselines',group:'MODEL COMPARISON',desc:'Reported held-out accuracy, macro-F1, Cohen’s κ and OvR AUC across evaluated baselines.',wide:true}
  ];
  const esc=(s='')=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;','"':'&quot;',"'":'&#39;'}[c]));
  // Refresh formerly missing figures after their first upload to GitHub Pages.
  const FIGURE_REV='20261106-dr-prototype-highlight3';
  const href=(s)=>BASE+s+'?v='+FIGURE_REV;
  const figure=(f)=>`<figure class="dr-figure${f.wide?' dr-figure--wide':''}">
    <a class="dr-figure-media" href="${href(f.file)}" target="_blank" rel="noopener noreferrer" aria-label="Open ${esc(f.group)}: ${esc(f.title)}">
      <img src="${href(f.file)}" alt="${esc(f.desc)}" loading="lazy" decoding="async" onerror="this.hidden=true;this.nextElementSibling.hidden=false;this.parentElement.removeAttribute('href');this.parentElement.setAttribute('aria-disabled','true')">
      <span class="dr-image-fallback" hidden><span aria-hidden="true">◈</span><strong>Research figure prepared</strong><small>Upload the matching WebP file to display this illustration</small></span>
    </a>
    <figcaption><small>${esc(f.no==='A'?'ADDITIONAL':`FIGURE ${f.no}`)} · ${esc(f.group)}</small><strong>${esc(f.title)}</strong><span>${esc(f.desc)}</span></figcaption>
  </figure>`;
  const group=(title,subtitle,nums,klass='')=>`<section class="dr-gallery-group${klass?' '+klass:''}" aria-label="${esc(title)}">
    <header><div><h5>${esc(title)}</h5><p>${esc(subtitle)}</p></div><span>${nums.length} visual${nums.length===1?'':'s'}</span></header>
    <div class="dr-gallery-grid">${nums.map(i=>figure(figData[i])).join('')}</div>
  </section>`;
  function render(p){
    const metrics=(p.metrics||[]).slice(0,4).map(m=>`<div><strong>${esc(m.value||'')}</strong><span>${esc(m.label||'')}</span></div>`).join('');
    const featured='fig11-screening-prototype.webp';
    return `<article class="dr-case" id="dr-grading-project" aria-labelledby="dr-project-title" data-dr-enhanced="true">
      <header class="dr-header">
        <div><p class="dr-kicker">M.S. RESEARCH · MEDICAL IMAGE ANALYSIS · EXPLAINABLE AI</p>
          <h3 id="dr-project-title">${esc(p.title||'A Deep Learning and Handcrafted Feature Fusion Framework for Automated Diabetic Retinopathy Grading from Retinal Fundus Images')}</h3>
          <p>Deep learning and handcrafted retinal-image features brought together in a transparent, stage-wise comparative study.</p>
        </div>
        <span class="dr-status">Manuscript under review · Measurement</span>
      </header>
      <nav class="dr-nav" aria-label="Explore diabetic retinopathy research">
        <a href="#dr-overview">01 <span>Overview</span></a>
        <a href="#dr-methodology">02 <span>Methodology</span></a>
        <a href="#dr-visuals">03 <span>Figure gallery</span></a>
        <a href="#dr-scholarly-record">04 <span>Scholarly record</span></a>
      </nav>
      <div class="dr-hero" id="dr-overview">
        <div class="dr-story">
          <div class="dr-chips"><span>M.STAT-5110</span><span>4 credits · A+ grade</span><span>Five DR grades</span></div>
          <h4>Five-class grading with explainable deep–handcrafted feature fusion</h4>
          <p>This research combines retinal fundus images from APTOS 2019 and IDRiD in a leakage-aware five-stage comparison of deep embeddings, handcrafted descriptors and feature fusion.</p>
          <p class="dr-lead"><strong>Selected Stage-5 model:</strong> fine-tuned DenseNet121 + SIFT-BoVW + XGBoost. Grad-CAM++ supports interpretation in the screening-oriented demonstration.</p>
          <div class="dr-focus-strip"><strong>Research prototype</strong><span>Upload a fundus image · inspect five-grade predictions · view visual explanations</span></div>
          <div class="dr-actions">
            <a class="btn primary" href="publications.html#output-dr">View publication record <span aria-hidden="true">↗</span></a>
            <a class="btn ghost" href="assets/academic/conferences/icasds-2025/documents/icasds-2025-poster-341.pdf" target="_blank" rel="noopener noreferrer">Conference poster · PDF <span aria-hidden="true">↗</span></a>
          </div>
          <p class="dr-credits"><strong>Researcher:</strong> Md. Razu Ahmed <span aria-hidden="true">·</span> <strong>Supervisor:</strong> ${esc(p.supervisor||'Prof. Dr. Md. Shamim Reza')}</p>
        </div>
        <figure class="dr-featured">
          <div class="dr-featured-top"><small>FEATURED RESEARCH PROTOTYPE · FIGURE 11</small><strong>Explainable diabetic-retinopathy screening interface</strong></div>
          <a class="dr-featured-image" href="${href(featured)}" target="_blank" rel="noopener noreferrer" aria-label="Open the complete original Figure 11 screening prototype screenshot">
            <img src="${href(featured)}" alt="Original Figure 11 showing the research web prototype for five-class diabetic retinopathy grading, class-wise probabilities and explanation visualization" loading="eager" decoding="async" onerror="this.hidden=true;this.nextElementSibling.hidden=false;this.parentElement.removeAttribute('href');this.parentElement.setAttribute('aria-disabled','true')">
            <span class="dr-image-fallback" hidden><span aria-hidden="true">◈</span><strong>Prototype screenshot unavailable</strong><small>Open the research figure repository to view the image.</small></span>
          </a>
          <div class="dr-featured-functions" aria-label="Demonstrated prototype capabilities"><span>Retinal image input</span><span>Five-class grading</span><span>Grad-CAM++ interpretation</span></div>
          <figcaption><strong>Figure 11 · Prototype demonstration.</strong> Author-supplied screenshot of the web-based grading interface. This illustrates a non-clinical research prototype, not a live diagnostic application.</figcaption>
        </figure>
      </div>
      <div class="dr-metrics" aria-label="Reported held-out evaluation with uncertainty">${metrics}</div>
      <div class="dr-methodology" id="dr-methodology">
        <header class="dr-block-heading"><p class="dr-kicker">RESEARCH DESIGN</p><h4>Five-stage comparison, with split integrity and model audit</h4><p>Dataset handling, candidate representations and model selection are kept conceptually separate from the final held-out test evaluation.</p></header>
        <div class="dr-stages">
          <div><small>01 · DATA</small><h5>Leakage-aware integration</h5><p>Harmonize APTOS 2019 and IDRiD labels, screen duplicates and preserve the official IDRiD test split.</p></div>
          <div><small>02 · REPRESENTATIONS</small><h5>Deep and local descriptors</h5><p>Evaluate deep-learning embeddings alongside handcrafted SIFT Bag-of-Visual-Words features.</p></div>
          <div><small>03 · COMPARISON</small><h5>Controlled staged workflow</h5><p>Compare frozen features, handcrafted baselines, feature fusion, fine-tuning and fine-tuned feature fusion.</p></div>
          <div><small>04 · FINAL CLASSIFIER</small><h5>DenseNet121 + SIFT-BoVW + XGBoost</h5><p>Use the validation-selected Stage-5 fusion model for final evaluation on held-out images.</p></div>
          <div><small>05 · REPORT & EXPLAIN</small><h5>Uncertainty and visualization</h5><p>Report test metrics and bootstrap variability; demonstrate a screening-oriented web interface with Grad-CAM++.</p></div>
        </div>
        <p class="dr-note"><strong>Evaluation scope:</strong> The results describe this study’s held-out test design. Cross-source data integration is not equivalent to prospective multicentre clinical validation. Figures and metrics represent research experiments, not a regulated diagnostic product.</p>
      </div>
      <section class="dr-gallery" id="dr-visuals" aria-labelledby="dr-gallery-title">
        <header class="dr-block-heading"><p class="dr-kicker">ORIGINAL RESEARCH FIGURES · AUTHOR-SUPPLIED</p>
          <h4 id="dr-gallery-title">Explore the experimental evidence</h4><p>Eleven additional research visuals accompany the featured Figure 11 prototype. Figure 4 documents the methodology below; every figure appears only once. All panels retain their original aspect ratio and open at full available WebP resolution. <a href="https://github.com/beingrazuahmed/beingrazuahmed.github.io/tree/main/assets/academic/projects/dr-grading" target="_blank" rel="noopener noreferrer">View original research figure files on GitHub ↗</a></p></header>
        ${group('Clinical context and grading targets','Retinal lesions and the five severity classes represented in this work.',[0,1],'dr-clinical-group')}
        ${group('Methodology and data preparation','The stage-wise framework (Figure 4), dataset preparation and the supplementary research schematic.',[3,2,4],'dr-pipeline-group')}
        ${group('Three custom CNN comparators','Architecture illustrations for baseline models, distinct from the selected DenseNet121 fusion model.',[5,6,7])}
        ${group('Held-out evaluation','Confusion matrix, ROC behaviour and comparative baseline scores.',[8,9,10])}
      </section>
      <div class="dr-record" id="dr-scholarly-record">
        <div><p class="dr-kicker">RESEARCH STATUS</p><h4>Submitted to Measurement (Elsevier)</h4>
          <p><strong>${esc(p.title||'A Deep Learning and Handcrafted Feature Fusion Framework for Automated Diabetic Retinopathy Grading from Retinal Fundus Images')}</strong></p>
          <p>Submitted 11 September 2026. The manuscript is under review; no article acceptance, publication DOI or final peer-reviewed citation is claimed here.</p>
          <div class="dr-record-links"><a href="publications.html#output-dr">Portfolio manuscript record ↗</a>
            <a href="assets/academic/conferences/icasds-2025/documents/icasds-2025-paper-341-proceedings.pdf" target="_blank" rel="noopener noreferrer">ICASDS 2025 abstract · Paper 341 ↗</a>
            <a href="https://github.com/beingrazuahmed/beingrazuahmed.github.io" target="_blank" rel="noopener noreferrer">Portfolio source · GitHub ↗</a></div>
        </div>
        <div class="dr-record-caution"><p class="dr-kicker">RESPONSIBLE INTERPRETATION</p><h4>Research and screening only</h4><p>Evaluation on retrospective datasets and an interactive prototype are not evidence of deployment safety, generalization across clinical settings or diagnostic approval. The provided images document a study, not an open source code release or a patient-facing diagnostic system.</p></div>
      </div>
      <footer class="dr-footer"><span>M.S. project · Medical imaging research · 2026</span><a href="academic.html#academic-projects">Full academic project record ↗</a></footer>
    </article>`;
  }
  function inject(){
    if(document.body.dataset.page!=='projects')return;
    const placeholder=document.getElementById('dr-grading-project');
    if(!placeholder||placeholder.dataset.drEnhanced)return;
    const p=(window.MRA_V2?.academicProjects||[]).find(x=>String(x.course||'').includes('M.STAT-5110'));
    if(!p)return;
    placeholder.outerHTML=render(p);
    // Keep concise navigation labels while exposing the complete official title.
    document.querySelectorAll('a[href="#dr-grading-project"]').forEach(anchor => {
      anchor.title=p.title;
      const number=anchor.querySelector('strong');
      if(number) { for(const node of [...anchor.childNodes]) if(node.nodeType===Node.TEXT_NODE) node.textContent=' Diabetic Retinopathy · Fusion'; }
      else anchor.textContent='M.S. · Diabetic Retinopathy';
    });
    if(location.hash.startsWith('#dr-') && document.readyState==='complete') {
      const target=document.querySelector(location.hash);
      if(target)target.scrollIntoView({block:'start'});
    }
    if(typeof window.refreshProjectResearchLinks==='function')window.refreshProjectResearchLinks();
  }
  inject();
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',inject,{once:true});
})();
