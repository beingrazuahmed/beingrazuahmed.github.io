/* BS-CCFS heart disease · official manuscript-title project case study.
 * Eleven author-supplied figure panels are hosted in the GitHub Pages asset
 * directory; a descriptive fallback is shown only if an image cannot load.
 * The submitted PLOS ONE manuscript has no published paper DOI.
 */
(() => {
  'use strict';
  const BASE='assets/academic/projects/bs-ccfs-heart-disease/';
  const TITLE='BS-CCFS: Bootstrap-Stable Consensus Feature Selection Across Multiple Causal Discovery Algorithms for Interpretable Heart Disease Prediction';
  const ENTRY='publications.html#output-bs-ccfs-heart-disease';
  const FIGURES=[
    {id:'1',file:'fig01-complete-methodology.webp',title:'Full BS-CCFS methodology',desc:'Data preprocessing, causal discovery, bootstrap consensus, comparative modelling, evaluation and explanation.',group:'STUDY FRAMEWORK',feature:'method'},
    {id:'2',file:'fig02-causal-discovery-graphs.webp',title:'Target-connected causal graphs',desc:'Representative structures recovered by the PC, FCI and NOTEARS discovery algorithms.',group:'CAUSAL DISCOVERY',feature:'graphs'},
    {id:'3',file:'fig03-threshold-sensitivity.webp',title:'Consensus-stability sensitivity',desc:'Sensitivity of cross-validated ROC-AUC and the number of selected features to the consensus threshold.',group:'ROBUSTNESS'},
    {id:'4',file:'fig04-mixed-type-validity.webp',title:'Mixed-type discovery validity check',desc:'Fisher-Z and G-test comparison across clinical-variable types.',group:'METHOD AUDIT'},
    {id:'5',file:'fig05-model-roc-curves.webp',title:'Comparative ROC curves',desc:'Discrimination across candidate classifiers; model-specific results, not a claim of external validation.',group:'DISCRIMINATION'},
    {id:'6',file:'fig06-shap-explainability.webp',title:'SHAP feature explanations',desc:'Predictor importance and SHAP distributions for thal, cp, ca, exang and chol.',group:'EXPLAINABLE AI',feature:'wide'},
    {id:'7A',file:'fig07a-confusion-matrix.webp',title:'Holdout confusion matrix',desc:'The reported CatBoost test-sample classification counts.',group:'MODEL DIAGNOSTICS'},
    {id:'7B',file:'fig07b-calibration.webp',title:'Calibration curve',desc:'Comparison of average predicted and observed class probabilities.',group:'PROBABILITY CALIBRATION'},
    {id:'7C',file:'fig07c-precision-recall.webp',title:'Precision–recall relationship',desc:'Precision at varying recall values in the displayed model evaluation.',group:'THRESHOLD PERFORMANCE'},
    {id:'S1',file:'figs1-correlation-matrix.webp',title:'Original-feature correlation matrix',desc:'Pairwise associations among the starting clinical predictors.',group:'SUPPLEMENTARY'},
    {id:'S2',file:'figs2-leakage-aware-preprocessing.webp',title:'Preprocessing and imputation audit',desc:'Stratified train/test split, training-fitted iterative imputation, and constrained categorical coding.',group:'SUPPLEMENTARY',feature:'wide'}
  ];

  const escape=v=>String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const figLabel=f=>f.id.startsWith('S')?'SUPPLEMENTARY FIGURE '+f.id:'FIGURE '+f.id;
  const card=f=>{
    const href=BASE+f.file;
    return `<figure class="heart-figure-card ${f.feature?'heart-figure-card--'+f.feature:''}" data-heart-figure>
      <a class="heart-figure-media" href="${href}" target="_blank" rel="noopener noreferrer" aria-label="Open original manuscript ${escape(figLabel(f))}: ${escape(f.title)}" aria-disabled="true" tabindex="-1">
        <img src="${href}" alt="${escape(figLabel(f))}: ${escape(f.desc)}" loading="eager" decoding="async">
        <span class="heart-figure-placeholder" aria-hidden="true"><span class="heart-placeholder-symbol">✦</span><span class="heart-placeholder-number">${escape(figLabel(f))}</span><strong>${escape(f.title)}</strong><small>Figure preview unavailable; verify the linked research asset</small></span>
      </a>
      <figcaption><small>${escape(figLabel(f))} · ${escape(f.group)}</small><strong>${escape(f.title)}</strong><span>${escape(f.desc)}</span></figcaption>
    </figure>`;
  };

  function render(){
    const main=FIGURES.filter(f=>f.id==='2');
    const studies=FIGURES.filter(f=>['3','4','5','6'].includes(f.id));
    const checks=FIGURES.filter(f=>f.id.startsWith('7'));
    const supp=FIGURES.filter(f=>f.id.startsWith('S'));
    return `<section id="heart-bsccfs-project" class="section alt heart-bsccfs-section" aria-labelledby="heart-bsccfs-title">
    <div class="container">
      <header class="heart-project-heading">
        <div><p class="heart-eyebrow">RESEARCH CASE STUDY · CAUSAL DISCOVERY &amp; EXPLAINABLE MACHINE LEARNING</p>
          <h2 id="heart-bsccfs-title">Heart Disease Prediction <span>— BS-CCFS</span></h2>
          <p>Bootstrap-stable, multi-algorithm feature selection for interpretable classification of a mixed-type clinical research dataset.</p>
        </div>
        <span class="heart-submitted-pill">Submitted to PLOS ONE · 2026</span>
      </header>

      <nav class="heart-section-nav" data-section-jump-nav aria-label="Navigate heart disease project sections">
        <a href="#heart-bsccfs-overview"><span>01</span> Study overview</a>
        <a href="#heart-bsccfs-method"><span>02</span> Feature-selection method</a>
        <a href="#heart-bsccfs-figures"><span>03</span> Original research figures</a>
        <a href="#heart-bsccfs-record"><span>04</span> Research status &amp; scope</a>
      </nav>

      <article class="heart-project-case">
        <div id="heart-bsccfs-overview" class="heart-project-hero">
          <div class="heart-project-story">
            <div class="heart-tags"><span>Second-author manuscript</span><span>13 candidate features</span><span>Bootstrap stability</span><span>SHAP</span></div>
            <h3>${escape(TITLE)}</h3>
            <p>The study examines whether combining multiple causal-discovery algorithms with bootstrap stability can yield a compact and interpretable feature set for heart disease classification. The method merges evidence from <strong>PC, FCI and NOTEARS</strong>, then evaluates the resulting consensus features against alternative selection procedures and the complete input set.</p>
            <p>A fixed-model comparison helps isolate the influence of feature selection; separate classifier comparisons examine discrimination, calibration and predictive explanations. The selected inputs are <strong>predictive candidates</strong>, not proof of patient-level causal effects.</p>
            <div class="heart-hero-actions">
              <a class="btn primary" href="${ENTRY}">Manuscript submission record <span aria-hidden="true">↗</span></a>
              <a class="btn ghost" href="#heart-bsccfs-figures">Examine research figures <span aria-hidden="true">↗</span></a>
              <a class="btn ghost" href="https://github.com/beingrazuahmed/beingrazuahmed.github.io/tree/main/assets/academic/projects/bs-ccfs-heart-disease" target="_blank" rel="noopener noreferrer">Figure gallery · GitHub <span aria-hidden="true">↗</span></a>
            </div>
            <p class="heart-author-credit"><strong>Authors:</strong> Jannatul Mauya · <strong>Md. Razu Ahmed</strong> · Md. Shamim Reza · Sabba Ruhi · Md. Aminul Hoque <small>(corresponding author)</small></p>
          </div>

          <figure class="heart-featured-figure" aria-labelledby="heart-featured-figure-title">
            <div class="heart-featured-figure-heading">
              <span class="heart-featured-figure-kicker">FEATURED RESEARCH VISUALIZATION · FIGURE 1</span>
              <strong id="heart-featured-figure-title">Complete BS-CCFS methodology workflow</strong>
            </div>
            <a class="heart-featured-figure-image" href="${BASE}fig01-complete-methodology.webp" target="_blank" rel="noopener noreferrer" aria-label="Open the complete original Figure 1 methodology flowchart at full resolution">
              <img src="${BASE}fig01-complete-methodology.webp" alt="Figure 1: complete flowchart of the BS-CCFS research method, spanning preprocessing, causal discovery, bootstrap-stable feature selection, modelling, and evaluation" width="827" height="1387" loading="eager" decoding="async">
            </a>
            <figcaption><strong>Figure 1 — Complete methodology.</strong> Original author-supplied research figure. Select the image to view the full available resolution; the lower gallery contains only the remaining figures.</figcaption>
          </figure>
        </div>

        <div class="heart-metric-band" aria-label="Study sample and feature-selection facts">
          <div><strong>920</strong><span>Clinical observations</span></div>
          <div><strong>736 / 184</strong><span>Stratified train / test split</span></div>
          <div><strong>5 / 13</strong><span>Consensus features retained</span></div>
          <div><strong>61.5%</strong><span>Predictor-count reduction</span></div>
        </div>

        <div id="heart-bsccfs-method" class="heart-research-method">
          <div class="heart-section-heading"><p class="heart-eyebrow">ANALYTICAL DESIGN</p><h3>Methodological decisions that make the comparison interpretable</h3>
            <p>Feature construction, preprocessing and model selection are reported as distinct steps to reduce train/test information leakage and improve methodological transparency.</p></div>
          <div class="heart-method-grid">
            <div><span class="heart-step-number">01</span><h4>Split before preparation</h4><p>Stratified 80:20 division of 920 records. Iterative imputation is fitted using training data only; categorical outputs are returned to valid codes.</p></div>
            <div><span class="heart-step-number">02</span><h4>Discover and stabilize</h4><p>PC, FCI and NOTEARS generate candidate structures. Bootstrap repeats quantify recurring target-connected predictors before consensus selection.</p></div>
            <div><span class="heart-step-number">03</span><h4>Compare feature sets</h4><p>BS-CCFS, mutual information, RFE and the full 13-variable baseline are evaluated under a controlled, fixed untuned XGBoost comparison.</p></div>
            <div><span class="heart-step-number">04</span><h4>Audit prediction quality</h4><p>Separate tuned-model experiments report ROC curves, confusion counts, calibration, precision–recall characteristics and SHAP explanations.</p></div>
          </div>
          <div class="heart-evaluation-note">
            <div><small>CONTROLLED FEATURE-SET COMPARISON · UNTUNED XGBOOST</small>
              <strong>ROC-AUC <b>0.894</b> <span>BS-CCFS · 5 features</span></strong>
              <strong>ROC-AUC <b>0.890</b> <span>Full baseline · 13 features</span></strong></div>
            <p>These numbers relate to the fixed-model feature-set comparison, not the separately tuned model-ranking exercise. Reported internal-test results are not independent external or prospective clinical validation.</p>
          </div>
        </div>

        <section id="heart-bsccfs-figures" class="heart-gallery-section" aria-labelledby="heart-gallery-title">
          <header class="heart-gallery-heading"><div><p class="heart-eyebrow">SOURCE RESEARCH · ORIGINAL AUTHOR-SUPPLIED FIGURES</p>
            <h3 id="heart-gallery-title">Explore the BS-CCFS figures and study diagnostics</h3>
            <p>Figure 1 is featured above; the ten other original figure panels appear here without repetition, optimized from the author-supplied 300-DPI TIFFs. Select any image to open its full available resolution.</p></div>
            <a href="https://github.com/beingrazuahmed/beingrazuahmed.github.io/tree/main/assets/academic/projects/bs-ccfs-heart-disease" target="_blank" rel="noopener noreferrer">Figure assets · GitHub ↗</a></header>

          <div class="heart-figure-cluster"><h4>Causal discovery graphs</h4>
            <div class="heart-figure-grid heart-figure-grid--method">${main.map(card).join('')}</div></div>
          <div class="heart-figure-cluster"><h4>Robustness, discrimination &amp; explainability</h4>
            <div class="heart-figure-grid heart-figure-grid--standard">${studies.map(card).join('')}</div></div>
          <div class="heart-figure-cluster"><h4>Holdout test diagnostics</h4>
            <div class="heart-figure-grid heart-figure-grid--triple">${checks.map(card).join('')}</div></div>

          <details class="heart-supplementary"><summary><strong>Supplementary research figures</strong><span>S1 correlation matrix + S2 preprocessing and imputation</span></summary>
            <div class="heart-figure-grid heart-figure-grid--supplementary">${supp.map(card).join('')}</div></details>
          <p class="heart-figure-note"><strong>Image provenance:</strong> the featured Figure 1 and the ten other gallery panels correspond to author-supplied original manuscript figures (Figures 1–7C and S1–S2). No published journal version or published DOI is claimed. Original figure re-use remains subject to coauthor rights and future journal terms.</p>
        </section>

        <section id="heart-bsccfs-record" class="heart-research-record" aria-label="Manuscript status and research limits">
          <div class="heart-record-status"><p class="heart-eyebrow">SCHOLARLY RECORD</p><h3>Submitted manuscript · Not yet a journal publication</h3>
            <p><strong>Submitted to PLOS ONE:</strong> 2 November 2026. <strong>Authorship:</strong> second author. The submission is recorded in the portfolio's Publications section, but there is no article DOI, final bibliographic citation or peer-reviewed acceptance to report yet.</p>
            <a class="btn ghost" href="${ENTRY}">View manuscript record <span aria-hidden="true">↗</span></a>
          </div>
          <div class="heart-record-scope"><p class="heart-eyebrow">SCIENTIFIC INTERPRETATION</p><h3>Scope and responsible use</h3>
            <p>Causal discovery graphs identify candidate statistical structures under assumptions; they do not independently establish interventions or causal effects. The dataset and internal comparison are not a substitute for external validation, prospective testing or clinician oversight.</p>
            <p><strong>Data and code:</strong> the featured Figure 1 and ten additional research figures are hosted on GitHub Pages with source-file provenance. A complete rerunnable code release has not been supplied for this portfolio update, so reproducibility beyond the documented workflow should not be implied.</p>
          </div>
        </section>

        <footer class="heart-project-footer"><span><strong>BS-CCFS</strong> · PLOS ONE manuscript submission · 2026</span>
          <a href="publications.html#output-bs-ccfs-heart-disease">Read the manuscript record ↗</a></footer>
      </article>
    </div>
  </section>`;
  }

  function activate(){
    document.querySelectorAll('[data-heart-figure]').forEach(card=>{
      const image=card.querySelector('img');
      const link=card.querySelector('a.heart-figure-media');
      if(!image||!link)return;
      const sync=()=>{
        const ready=Boolean(image.complete&&image.naturalWidth>1);
        card.classList.toggle('is-loaded',ready);
        link.tabIndex=ready?0:-1;
        link.setAttribute('aria-disabled',ready?'false':'true');
      };
      image.addEventListener('load',sync);
      image.addEventListener('error',sync);
      link.addEventListener('click',e=>{if(link.getAttribute('aria-disabled')==='true')e.preventDefault();});
      sync();
    });
  }
  window.MRA_HEART_CASE=render;
  window.MRA_HEART_ACTIVATE=activate;
})();
