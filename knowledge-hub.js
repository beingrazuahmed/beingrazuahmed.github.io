/* Research Blog & Academic Notes · original, site-authored educational resources
   Content metadata and reading-page rendering live in this single file.
   To add a resource, add one object to ARTICLES or NOTES.
*/
(function(){
  'use strict';
  const ARTICLES=[
    {
      slug:"leakage-aware-machine-learning-validation",
      kind:"blog",title:"Leakage-Aware Validation: The Split Comes First",
      category:"Machine Learning",level:"Research methods",minutes:7,date:"9 October 2026",
      excerpt:"Why a seemingly excellent model can fail when patients, time periods, feature selection or preprocessing cross the train–test boundary.",
      sections:[
        {heading:"Why leakage matters",html:"<p>A model can appear highly accurate without learning a pattern that would generalize to new observations. Data leakage occurs when information from the evaluation set, future observations, or the target sneaks into training decisions. The resulting score measures an unrealistic task rather than genuine predictive ability.</p><p>Leakage is not restricted to explicitly including the outcome as a feature. It also occurs when preprocessing uses all observations before splitting, or when records belonging to the same person appear in both training and testing.</p>"},
        {heading:"Choose the evaluation unit",html:"<p>Begin with the scientific question. Will predictions be made for previously unseen rows, new people, new hospitals, new geographic regions, or later time periods? That decision determines the appropriate partition.</p><ul><li><strong>Repeated patient records:</strong> keep every record from one patient in the same split.</li><li><strong>Time-series forecasting:</strong> train on earlier observations and evaluate on later periods; do not shuffle across time.</li><li><strong>Multi-site health research:</strong> consider site-aware or external-site validation when deployment differs from the development hospitals.</li></ul>"},
        {heading:"Put learned preprocessing inside training folds",html:"<p>Imputation, standardization, feature selection, dimensionality reduction, oversampling and hyperparameter tuning can all learn patterns from data. They should be fitted only on the training portion of each split. Validation and test sets are transformed using the fitted training operations.</p><p>In cross-validation, implement preprocessing within the cross-validation pipeline so each fold reproduces the intended development procedure. For a final holdout set, reserve it before making modelling decisions and use it once for the final evaluation.</p>"},
        {heading:"Interpret excellent scores carefully",html:"<p>Unusually high accuracy or AUC is a reason to audit the prediction setup, not proof that a model is invalid. Check identifier leakage, post-outcome variables, duplicates, label-derived predictors, repeated entities, class imbalance and dependence between rows. Report uncertainty and calibration where appropriate.</p>"},
        {heading:"A reproducibility checklist",html:"<ol><li>State the deployment target and unit of independence.</li><li>Create a justified train–validation–test partition.</li><li>Fit all learned preprocessing within training data only.</li><li>Tune hyperparameters without consulting the final holdout.</li><li>Evaluate discrimination, class-specific errors and calibration.</li><li>Document the split, random seed, data exclusions and external validation limitations.</li></ol><p><strong>Takeaway:</strong> a credible validation design is part of the model, not an afterthought.</p>"}
      ]
    },
    {
      slug:"reading-shap-responsibly",
      kind:"blog",title:"Reading SHAP Explanations Without Overclaiming",
      category:"Explainable AI",level:"Interpretability",minutes:6,date:"9 October 2026",
      excerpt:"How SHAP values describe model predictions, why feature correlations matter, and where explanation ends and causal interpretation begins.",
      sections:[
        {heading:"What SHAP actually explains",html:"<p>SHAP attributes portions of a model prediction to input features relative to a chosen reference or background distribution. For an individual prediction, the contributions add up to the model output on the explanation scale used by the explainer.</p><p>A large absolute SHAP value means a feature has a strong contribution <em>for that fitted model and observation</em>. It does not necessarily mean the feature is a cause of the outcome.</p>"},
        {heading:"Global and local views",html:"<p>A summary plot aggregates contributions across observations; a waterfall plot shows the contributions for one observation. A dependence plot can reveal nonlinear patterns and interactions. These views answer different questions and should not be treated as interchangeable.</p><ul><li><strong>Global:</strong> Which features frequently influence predictions?</li><li><strong>Local:</strong> Why did this fitted model produce this prediction?</li><li><strong>Dependence:</strong> How do contributions vary with observed feature values?</li></ul>"},
        {heading:"Correlated variables complicate attribution",html:"<p>When age, comorbidity and healthcare access move together, attribution depends on how the explainer handles missing features and the background distribution. Highly correlated predictors can share or exchange attribution across models, even if predictive accuracy barely changes.</p><p>It helps to compare SHAP findings with domain knowledge, sensitivity analyses, interaction checks and a careful description of the explanation method.</p>"},
        {heading:"Avoid the causal shortcut",html:"<p>A SHAP plot cannot establish that changing a feature will change a patient's disease risk. That claim requires a causal question, plausible identification assumptions, and an appropriate study design. Similarly, a feature with small attribution should not automatically be called scientifically irrelevant.</p>"},
        {heading:"What to report",html:"<ol><li>Specify the exact model, output scale and SHAP explainer.</li><li>Describe the background/reference data used.</li><li>Show both aggregate and individual explanations when relevant.</li><li>Discuss correlated predictors and sampling variation.</li><li>Phrase findings as model associations or prediction contributions, not interventions.</li></ol>"}
      ]
    },
    {
      slug:"survey-weights-in-health-research",
      kind:"blog",title:"Why Survey Weights Change Health-Research Conclusions",
      category:"Statistical Methods",level:"Public-health analytics",minutes:6,date:"9 October 2026",
      excerpt:"A clear distinction between a large sample and a representative estimate in stratified, multistage surveys.",
      sections:[
        {heading:"A big sample is not automatically representative",html:"<p>National health surveys often select households or participants using unequal probabilities, geographical strata and sampling clusters. Treating the resulting data as a simple random sample can bias population estimates and understate standard errors.</p><p>Survey weights help align estimates with the design and target population, while strata and primary sampling units affect precision estimates.</p>"},
        {heading:"Weights, strata and clusters have different jobs",html:"<ul><li><strong>Weights</strong> reflect selection probabilities and, depending on the survey, nonresponse or calibration adjustments.</li><li><strong>Strata</strong> capture how the sampling frame was divided for selection and variance calculation.</li><li><strong>Clusters</strong> identify units sampled together, whose observations may not be independent.</li></ul><p>Including weights alone does not necessarily reproduce design-based standard errors.</p>"},
        {heading:"Define the estimand first",html:"<p>Do you want an unweighted description of participants, a national prevalence, a design-adjusted association, or a causal effect under additional assumptions? Those are different estimands. Use the survey documentation to determine the correct sampling weights for the subpopulation and time period.</p>"},
        {heading:"Practical workflow",html:"<ol><li>Read the sample-design documentation and define the target population.</li><li>Use supplied sampling weights, strata and cluster identifiers.</li><li>Estimate descriptive quantities with survey-design-aware methods.</li><li>Choose a regression approach suitable for the question and survey design.</li><li>State which estimates are associations; do not infer causality from weighting alone.</li><li>Report design-adjusted uncertainty and note any missing design variables.</li></ol><p><strong>Takeaway:</strong> the sampling process belongs in the analysis, not only in the Methods paragraph.</p>"}
      ]
    }
  ];
  const NOTES=[
    {
      slug:"linear-regression-diagnostics",
      kind:"note",title:"Linear Regression: Residuals & Model Adequacy",
      category:"Regression",level:"Undergraduate · Intermediate",minutes:8,date:"9 October 2026",
      excerpt:"An exam-ready guide to residual plots, nonlinearity, variance, influential observations and a sensible diagnostic workflow.",
      sections:[
        {heading:"Core definitions",html:"<p>For observation i, the residual is the observed response minus the fitted response:</p><div class='knowledge-equation'>eᵢ = yᵢ − ŷᵢ</div><p>Residuals approximate errors, but residuals within a fitted model are not independent copies of the original disturbance terms. The residual sum of squares is:</p><div class='knowledge-equation'>SSE = Σᵢ (yᵢ − ŷᵢ)²</div><p>In ordinary least squares with an intercept and p predictors, the residual mean square is MSE = SSE/(n − p − 1).</p>"},
        {heading:"How to read residual plots",html:"<ul><li><strong>Residual versus fitted:</strong> a systematic curve suggests a missing nonlinear term or other misspecification.</li><li><strong>Funnel shape:</strong> increasing or decreasing spread suggests nonconstant error variance.</li><li><strong>Residual versus time:</strong> runs or cycles can suggest temporal dependence.</li><li><strong>Normal Q–Q plot:</strong> strong departures from a straight reference line suggest nonnormal residual tails, especially relevant to small-sample inference.</li></ul>"},
        {heading:"Outliers, leverage and influence",html:"<p>A large residual indicates poor fit for an observation. High leverage indicates an unusual predictor combination. Influence concerns how much the fitted model would change if that observation were removed. These are not the same concept.</p><p>Cook's distance combines residual size and leverage to screen for influential points. It is a flag for further investigation, not an automatic rule to remove a record.</p>"},
        {heading:"Practical decision sequence",html:"<ol><li>Fit the prespecified regression model.</li><li>Inspect residual-versus-fitted and time-order plots.</li><li>Check a Q–Q plot if distributional inference matters.</li><li>Identify high-leverage or influential observations and verify their data.</li><li>Consider a justified transformation, added predictor, robust inference or alternative model.</li><li>Compare predictive performance using an appropriately separated validation set.</li></ol>"}
      ]
    },
    {
      slug:"stratified-sampling-allocation",
      kind:"note",title:"Sampling Theory: Stratified Allocation",
      category:"Sampling",level:"Undergraduate",minutes:7,date:"9 October 2026",
      excerpt:"Proportional and Neyman allocation with the important formulas, interpretation, and exam-friendly steps.",
      sections:[
        {heading:"Symbols to remember",html:"<p>Suppose the population is divided into H nonoverlapping strata. Let Nₕ be the population size of stratum h, N = ΣNₕ, Wₕ = Nₕ/N, and Sₕ the within-stratum standard deviation. Let total sample size be n and nₕ the number selected from stratum h.</p>"},
        {heading:"Proportional allocation",html:"<div class='knowledge-equation'>nₕ = n × (Nₕ / N) = nWₕ</div><p>Each stratum receives a sample proportional to its population share. It is simple to implement, but does not favor strata with greater outcome variability.</p>"},
        {heading:"Neyman allocation: equal per-unit cost",html:"<div class='knowledge-equation'>nₕ = n × (NₕSₕ / ΣₖNₖSₖ)</div><p>Equivalently, use WₕSₕ in the numerator and ΣWₖSₖ in the denominator. For fixed n and equal sampling costs, this allocation minimizes the variance of the stratified mean under the usual simple-random-sampling-within-strata assumptions.</p>"},
        {heading:"Unequal costs",html:"<div class='knowledge-equation'>nₕ ∝ (NₕSₕ / √cₕ)</div><p>Here cₕ is the per-unit sampling cost in stratum h. Under a fixed total-cost constraint, more sample is allocated where variability and population size are greater, and cost is lower.</p>"},
        {heading:"Exam calculation steps",html:"<ol><li>Write down Nₕ, Sₕ and the total n.</li><li>Compute N or Wₕ as required.</li><li>Choose the allocation rule stated in the question.</li><li>Calculate unrounded nₕ for each stratum.</li><li>Round carefully while preserving Σnₕ = n and any minimum sample constraints.</li><li>Check that no allocated nₕ exceeds the available stratum population.</li></ol>"}
      ]
    },
    {
      slug:"design-of-experiments-crd-rbd-lsd",
      kind:"note",title:"Design of Experiments: CRD, RBD & LSD",
      category:"Experimental Design",level:"Undergraduate",minutes:9,date:"9 October 2026",
      excerpt:"Compare the purpose, assumptions and ANOVA degrees of freedom of three classical experimental designs.",
      sections:[
        {heading:"Completely Randomized Design (CRD)",html:"<p>Assign experimental units randomly to treatments without blocks. A common additive model is Yᵢⱼ = μ + τᵢ + εᵢⱼ. For t treatments and N observations:</p><div class='knowledge-equation'>df(treatment) = t − 1; df(error) = N − t</div><p>CRD is practical when experimental units are reasonably homogeneous. Unequal replication is possible.</p>"},
        {heading:"Randomized Block Design (RBD)",html:"<p>Block experimental units according to an important nuisance source, then randomize treatments within each block. For a complete RBD with t treatments and b blocks:</p><div class='knowledge-equation'>df(treatment) = t − 1; df(block) = b − 1; df(error) = (t − 1)(b − 1)</div><p>The usual additive analysis assumes no estimable treatment-by-block interaction in a one-observation-per-cell design.</p>"},
        {heading:"Latin Square Design (LSD)",html:"<p>Control two directional nuisance sources using t rows, t columns and t treatments; each treatment appears once in every row and column.</p><div class='knowledge-equation'>df(rows) = t − 1; df(columns) = t − 1; df(treatments) = t − 1</div><div class='knowledge-equation'>df(error) = (t − 1)(t − 2)</div><p>An LSD requires t ≥ 3 to leave positive error degrees of freedom and assumes the additive row, column and treatment effects used in classical ANOVA.</p>"},
        {heading:"Quick comparison",html:"<div class='knowledge-table-wrap'><table><thead><tr><th>Design</th><th>Blocking</th><th>When useful</th></tr></thead><tbody><tr><td>CRD</td><td>None</td><td>Homogeneous units</td></tr><tr><td>RBD</td><td>One nuisance factor</td><td>Variation between blocks</td></tr><tr><td>LSD</td><td>Two nuisance factors</td><td>Two controlled directions</td></tr></tbody></table></div><p><strong>Exam tip:</strong> start with the question's design and replication, not a memorized ANOVA table. The degrees of freedom must add up to the total degrees of freedom.</p>"}
      ]
    },
    {
      slug:"shap-interpretation-checklist",
      kind:"note",title:"SHAP Interpretation: A Reporting Checklist",
      category:"Machine Learning",level:"Research practice",minutes:6,date:"9 October 2026",
      excerpt:"A compact checklist for discussing local and global model explanations without causal overstatement.",
      sections:[
        {heading:"Key idea",html:"<p>A SHAP value is a feature contribution to a prediction relative to an explainer's baseline, on the scale being explained. The sign and magnitude must be interpreted on that scale.</p><div class='knowledge-equation'>Prediction = Baseline + Σ feature contributions</div><p>This relation is exact for certain explainers and output representations; check which output scale the chosen implementation uses.</p>"},
        {heading:"Describe the explanation context",html:"<ol><li>What model and version were explained?</li><li>Which feature preprocessing and background distribution were used?</li><li>What output was explained: probability, log-odds, score or raw model output?</li><li>Were highly correlated features present?</li><li>Are the local explanations representative of the broader dataset?</li></ol>"},
        {heading:"Common statements to avoid",html:"<ul><li>Do not turn a model contribution into a causal effect.</li><li>Do not equate mean absolute SHAP importance with statistical significance.</li><li>Do not call a predictive variable modifiable without domain evidence.</li><li>Do not assume a stable ranking under a different background sample or retrained model.</li></ul>"},
        {heading:"Good reporting practice",html:"<p>Complement explanations with holdout performance, calibration, subgroup assessment and uncertainty. In academic writing, prefer phrases such as “the model assigned higher predicted risk when …” instead of “the variable increased disease risk.”</p>"}
      ]
    }
  ];
  const ALL=ARTICLES.concat(NOTES);
  const escapeHtml=v=>String(v==null?"":v).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
  const url=item=>"reading.html?type="+encodeURIComponent(item.kind)+"&slug="+encodeURIComponent(item.slug);
  const get=(type,slug)=>ALL.find(x=>x.kind===type&&x.slug===slug);
  const card=item=>
    '<article class="knowledge-card" data-knowledge-card data-category="'+escapeHtml(item.category)+'" data-search="'+escapeHtml((item.title+" "+item.category+" "+item.excerpt+" "+item.level).toLowerCase())+'">'+
      '<div class="knowledge-card-top"><span class="knowledge-topic">'+escapeHtml(item.category)+'</span><span class="knowledge-readtime">'+item.minutes+' min read</span></div>'+
      '<h3><a href="'+url(item)+'">'+escapeHtml(item.title)+'</a></h3>'+
      '<p>'+escapeHtml(item.excerpt)+'</p>'+
      '<div class="knowledge-card-bottom"><span>'+escapeHtml(item.level)+'</span><a href="'+url(item)+'" aria-label="Read '+escapeHtml(item.title)+'">Read '+(item.kind==="note"?"note":"article")+' <span aria-hidden="true">↗</span></a></div>'+
    '</article>';
  const landing=(kind,limit)=>{
    const items=(kind==="note"?NOTES:ARTICLES).slice(0,limit||3);
    return '<div class="knowledge-grid">'+items.map(card).join('')+'</div>';
  };
  const listPage=kind=>{
    const isNote=kind==="note",items=isNote?NOTES:ARTICLES;
    const categories=["All topics"].concat([...new Set(items.map(x=>x.category))]);
    return '<section class="knowledge-hero"><div class="container knowledge-hero-inner">'+
      '<div class="knowledge-kicker">'+(isNote?"ACADEMIC NOTES / STUDY LIBRARY":"RESEARCH BLOG / IDEAS & METHODS")+'</div>'+
      '<h1>'+(isNote?"Academic Notes":"Research Blog")+'</h1>'+
      '<p>'+(isNote?"Exam-friendly statistical and mathematical explanations, reusable research checklists and compact learning guides.":"Readable articles on research design, explainable AI, statistical methods and credible model evaluation.")+'</p>'+
      '<div class="knowledge-hero-links"><a href="resources.html">Resources hub <span aria-hidden="true">↗</span></a><a href="'+(isNote?"blogs.html":"notes.html")+'">'+(isNote?"Explore the blog":"Browse academic notes")+' <span aria-hidden="true">↗</span></a></div>'+
    '</div></section>'+
    '<section class="section knowledge-list-section"><div class="container">'+
      '<div class="knowledge-filterbar"><div><div class="section-kicker">Curated learning resources</div><h2>'+items.length+' '+(isNote?"study notes":"research articles")+'</h2><p>Original educational materials for independent reading. Not journal publications.</p></div>'+
      '<div class="knowledge-filters"><label class="knowledge-visually-hidden" for="knowledge-search">Search '+(isNote?"notes":"articles")+'</label><input id="knowledge-search" type="search" placeholder="Search titles, concepts…" autocomplete="off">'+
      '<label class="knowledge-visually-hidden" for="knowledge-category">Filter by topic</label><select id="knowledge-category">'+categories.map(x=>'<option value="'+escapeHtml(x)+'">'+escapeHtml(x)+'</option>').join('')+'</select></div></div>'+
      '<p class="knowledge-filter-result" id="knowledge-result-count" role="status" aria-live="polite">Showing '+items.length+' of '+items.length+' resources</p>'+
      '<div class="knowledge-grid" id="knowledge-list">'+items.map(card).join('')+'</div>'+
      '<p class="knowledge-empty" id="knowledge-empty" hidden>No resources match your search. Try a different term or topic.</p>'+
      '<div class="knowledge-library-note"><strong>Using these resources</strong><p>These are educational summaries, not replacements for course textbooks, methods papers or supervision. Check assumptions and course-specific notation before reusing formulas.</p></div>'+
    '</div></section>';
  };
  const readingPage=()=>{
    const params=new URLSearchParams(location.search);
    const kind=params.get("type"),slug=params.get("slug"),item=get(kind,slug);
    if(!item){
      document.title="Resource not found | Md. Razu Ahmed";
      return '<section class="section"><div class="container knowledge-notfound"><div class="knowledge-kicker">RESOURCE LIBRARY</div><h1>Resource not found</h1><p>That article or note is not available at this address.</p><a class="btn" href="blogs.html">Browse blogs</a> <a class="btn" href="notes.html">Browse notes</a></div></section>';
    }
    document.title=item.title+" | "+(kind==="note"?"Academic Notes":"Research Blog")+" | Md. Razu Ahmed";
    const description=document.querySelector('meta[name="description"]');
    if(description)description.setAttribute("content",item.excerpt);
    const related=ALL.filter(x=>x.slug!==item.slug).filter(x=>x.kind===item.kind).slice(0,2);
    const backlink=kind==="note"?"notes.html":"blogs.html";
    return '<section class="knowledge-reading-hero"><div class="container knowledge-reading-title">'+
      '<nav class="knowledge-breadcrumb" aria-label="Breadcrumb"><a href="index.html">Home</a><span aria-hidden="true">›</span><a href="'+backlink+'">'+(kind==="note"?"Academic Notes":"Research Blog")+'</a><span aria-hidden="true">›</span><span>Reading</span></nav>'+
      '<div class="knowledge-kicker">'+escapeHtml(item.category)+' / '+(kind==="note"?"STUDY NOTE":"RESEARCH ARTICLE")+'</div>'+
      '<h1>'+escapeHtml(item.title)+'</h1><p class="knowledge-reading-deck">'+escapeHtml(item.excerpt)+'</p>'+
      '<div class="knowledge-reading-meta"><span>Md. Razu Ahmed</span><span>'+escapeHtml(item.date)+'</span><span>'+item.minutes+' min read</span></div>'+
    '</div></section>'+
    '<section class="knowledge-reading-layout container"><aside class="knowledge-toc" aria-label="On this page"><strong>ON THIS PAGE</strong><nav>'+item.sections.map((x,i)=>'<a href="#part-'+(i+1)+'">'+escapeHtml(x.heading)+'</a>').join('')+'</nav><button type="button" id="knowledge-print" class="knowledge-print-button">Print / Save as PDF</button><p>Use your browser’s print dialog to save this resource as a PDF.</p></aside>'+
    '<article class="knowledge-article" id="knowledge-document"><div class="knowledge-reading-intro">'+(kind==="note"?"Study note · "+escapeHtml(item.level):"Research commentary · "+escapeHtml(item.level))+'</div>'+
      item.sections.map((section,i)=>'<section id="part-'+(i+1)+'"><h2>'+escapeHtml(section.heading)+'</h2>'+section.html+'</section>').join('')+
      '<div class="knowledge-article-footer"><strong>Further study</strong><p>Use primary methodological literature, course materials, and relevant software documentation to verify assumptions and implementation details.</p><p class="knowledge-attribution">Educational content · Md. Razu Ahmed · '+escapeHtml(item.date)+'</p></div>'+
    '</article></section>'+
    '<section class="section knowledge-related-section"><div class="container"><div class="knowledge-related-title"><div class="section-kicker">Keep exploring</div><h2>Related reading</h2></div><div class="knowledge-grid">'+related.map(card).join('')+'</div><p class="knowledge-back-link"><a href="'+backlink+'">← All '+(kind==="note"?"academic notes":"research articles")+'</a></p></div></section>';
  };
  function wire(){
    const search=document.getElementById("knowledge-search");
    const selector=document.getElementById("knowledge-category");
    const update=()=>{
      const query=(search&&search.value||"").trim().toLowerCase();
      const category=selector&&selector.value||"All topics";
      const cards=[...document.querySelectorAll('[data-knowledge-card]')];
      let visible=0;
      for(const el of cards){
        const ok=(!query||(el.dataset.search||"").includes(query))&&(category==="All topics"||el.dataset.category===category);
        el.hidden=!ok;
        if(ok)visible++;
      }
      const status=document.getElementById("knowledge-result-count");
      if(status)status.textContent="Showing "+visible+" of "+cards.length+" resources";
      const empty=document.getElementById("knowledge-empty");
      if(empty)empty.hidden=visible>0;
    };
    if(search)search.addEventListener("input",update);
    if(selector)selector.addEventListener("change",update);
    const print=document.getElementById("knowledge-print");
    if(print)print.addEventListener("click",()=>window.print());
  }
  document.addEventListener("DOMContentLoaded",wire,{once:true});
  window.MRA_KNOWLEDGE={render(page){return page==="blogs"?listPage("blog"):page==="notes"?listPage("note"):readingPage()},preview:landing,articles:ARTICLES,notes:NOTES};
})();
