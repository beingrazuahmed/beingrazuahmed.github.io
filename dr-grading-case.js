(function drPageEnhancement(){
  'use strict';
  const BASE='assets/academic/projects/dr-grading/';
  const figData=[
    {no:'01',file:'fig01-retina-lesions.webp',title:'Normal retina and characteristic DR lesions',group:'CLINICAL CONTEXT',desc:'Illustration of a normal retina and diabetic-retinopathy changes including microaneurysms, exudates and neovascularization.'},
    {no:'02',file:'fig02-five-dr-grades.webp',title:'The five retinopathy grades',group:'FIVE-CLASS TARGET',desc:'Representative fundus images spanning no DR through proliferative diabetic retinopathy.',wide:true},
    {no:'03',file:'fig03-dataset-preparation.webp',title:'Fundus-image preparation',group:'DATASET PIPELINE',desc:'Image cleaning, de-duplication, preprocessing and augmentation stages used in the research workflow.'},
    {no:'A',file:'additional-framework-overview.webp',title:'Detailed research framework',group:'ADDITIONAL SCHEMATIC',desc:'Supplementary author-supplied chart of the data processing, models, comparative stages and screening output.',wide:true},
    {no:'05',file:'fig05-cnn1-architecture.webp',title:'CNN-1 architecture',group:'CUSTOM CNN BASELINE',desc:'Convolution blocks, global average pooling and the five-class prediction head.',wide:true},
    {no:'06',file:'fig06-cnn2-architecture.webp',title:'CNN-2 · Residual and SE blocks',group:'CUSTOM CNN BASELINE',desc:'Residual network with squeeze-and-excitation blocks and projection shortcuts.'},
    {no:'07',file:'fig07-cnn3-architecture.webp',title:'CNN-3 · EfficientNet-lite',group:'CUSTOM CNN BASELINE',desc:'MBConv stages, squeeze-and-excitation components and DropPath.'},
    {no:'08',file:'fig08-confusion-matrix.webp',title:'Normalized held-out confusion matrix',group:'CLASS-LEVEL DIAGNOSTICS',desc:'Distribution of predicted grades versus ground-truth grades for the selected fused model.'},
    {no:'09',file:'fig09-roc-curves.webp',title:'One-vs-rest ROC curves',group:'CLASS DISCRIMINATION',desc:'Five class-specific discrimination curves for the selected Stage-5 model.'},
    {no:'10',file:'fig10-performance-comparison.webp',title:'Final model vs CNN baselines',group:'MODEL COMPARISON',desc:'Reported held-out accuracy, macro-F1, Cohen’s κ and OvR AUC across evaluated baselines.',wide:true},
    {no:'11',file:'fig11-screening-prototype.webp',title:'Explainable screening web prototype',group:'RESEARCH DEMONSTRATOR',desc:'Prototype interface for fundus-image upload, predicted grade, class probabilities and visual explanation.',wide:true}
  ];
  const esc=(s='')=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;','"':'&quot;',"'":'&#39;'}[c]));
  const href=(s)=>BASE+s;
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
    const featured='fig04-stagewise-framework.webp';
    return `<article class="dr-case" id="dr-grading-project" aria-labelledby="dr-project-title" data-dr-enhanced="true">
      <header class="dr-header">
        <div><p class="dr-kicker">M.S. RESEARCH · MEDICAL IMAGE ANALYSIS · EXPLAINABLE AI</p>
          <h3 id="dr-project-title">Diabetic Retinopathy <span>— Five-Class Grading</span></h3>
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
          <h4>${esc(p.title||'Automated diabetic retinopathy grading from retinal fundus images')}</h4>
          <p>${esc(p.summary||'The research compares staged image-feature representations for grading diabetic retinopathy from fundus photographs.')}</p>
          <p class="dr-lead"><strong>Selected Stage-5 fusion:</strong> fine-tuned DenseNet121 embeddings + SIFT Bag of Visual Words + XGBoost. Validation-informed experiments compare deep, handcrafted and fused representations rather than treating an individual model score as a clinical guarantee.</p>
          <div class="dr-actions">
            <a class="btn primary" href="publications.html">View publication record <span aria-hidden="true">↗</span></a>
            <a class="btn ghost" href="assets/academic/conferences/icasds-2025/documents/icasds-2025-poster-341.pdf" target="_blank" rel="noopener noreferrer">Conference poster · PDF <span aria-hidden="true">↗</span></a>
          </div>
          <p class="dr-credits"><strong>Researcher:</strong> Md. Razu Ahmed <span aria-hidden="true">·</span> <strong>Supervisor:</strong> ${esc(p.supervisor||'Prof. Dr. Md. Shamim Reza')}</p>
        </div>
        <figure class="dr-featured">
          <div class="dr-featured-top"><small>FEATURED · FIGURE 04</small><strong>Complete stage-wise grading framework</strong></div>
          <a class="dr-featured-image" href="${href(featured)}" target="_blank" rel="noopener noreferrer" aria-label="Open complete original Figure 4">
            <img src="${href(featured)}" alt="Study-wide diagram of leak-safe preparation, five model stages, evaluation and an explainable DR screening prototype" loading="lazy" decoding="async" onerror="this.hidden=true;this.nextElementSibling.hidden=false;this.parentElement.removeAttribute('href');this.parentElement.setAttribute('aria-disabled','true')">
            <span class="dr-image-fallback" hidden><span aria-hidden="true">◈</span><strong>Featured workflow image prepared</strong><small>Figure 04 appears here once its WebP asset is uploaded.</small></span>
          </a>
          <figcaption>Figure 4 brings together dataset handling, deep-handcrafted modelling, comparison, evaluation and prototype demonstration. It is featured here once and omitted from the gallery below.</figcaption>
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
          <h4 id="dr-gallery-title">Explore the experimental evidence</h4><p>Eleven additional visuals accompany the featured Figure 4. The diagrams preserve their complete aspect ratios and open at full available WebP resolution.</p></header>
        ${group('Clinical context and grading targets','Retinal lesions and the five severity classes represented in this work.',[0,1])}
        ${group('Preparing the data and research pipeline','Dataset preparation and the supplementary end-to-end schematic.',[2,3])}
        ${group('Three custom CNN comparators','Architectures included as contextual baseline models, distinct from the final DenseNet121 fusion model.',[4,5,6])}
        ${group('Held-out evaluation','Confusion matrix, ROC behaviour and comparative baseline scores.',[7,8,9])}
        ${group('Screening-oriented prototype','Author-supplied interface screenshot; a research prototype rather than a public clinical service.',[10],'dr-prototype-group')}
      </section>
      <div class="dr-record" id="dr-scholarly-record">
        <div><p class="dr-kicker">RESEARCH STATUS</p><h4>Submitted to Measurement (Elsevier)</h4>
          <p><strong>${esc(p.title||'A Deep Learning and Handcrafted Feature Fusion Framework for Automated Diabetic Retinopathy Grading from Retinal Fundus Images')}</strong></p>
          <p>Submitted 11 September 2026. The manuscript is under review; no article acceptance, publication DOI or final peer-reviewed citation is claimed here.</p>
          <div class="dr-record-links"><a href="publications.html">Portfolio manuscript record ↗</a>
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
    if(location.hash.startsWith('#dr-') && document.readyState==='complete') {
      const target=document.querySelector(location.hash);
      if(target)target.scrollIntoView({block:'start'});
    }
    if(typeof window.refreshProjectResearchLinks==='function')window.refreshProjectResearchLinks();
  }
  inject();
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',inject,{once:true});
})();
