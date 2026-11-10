/* Research Blog & Academic Notes · original, site-authored educational resources
   Content metadata and reading-page rendering live in this single file.
   To add a resource, add one object to ARTICLES or NOTES.
*/
(function(){
  'use strict';
  const CORE_ARTICLES=[
    {
        "slug": "dengue-forecasting-district-national-evaluation",
        "kind": "blog",
        "title": "What Nationwide Dengue Forecasting Taught Us About District-Level Models",
        "category": "Public Health Forecasting",
        "level": "Research case study",
        "minutes": 9,
        "date": "10 November 2026",
        "excerpt": "A research-informed account of bottom-up and direct national forecasts across all 64 districts of Bangladesh, with careful interpretation of validation evidence.",
        "sections": [
            {
                "heading": "The forecasting question",
                "html": "<p>How should we forecast Bangladesh's national dengue hospital admissions one week ahead: model the whole country directly, or forecast each reporting district and aggregate those predictions? Our 2026 <em>BMC Public Health</em> study evaluated both approaches over observations from 2022–2025 across all 64 districts of Bangladesh.</p><p>The study includes 93,504 district-day observations and 13,312 district-week records. Cases were assigned to the <strong>reporting district</strong>, which is not necessarily a patient's home district. This distinction matters for interpretation.</p>"
            },
            {
                "heading": "Bottom-up versus direct national forecasting",
                "html": "<p>The bottom-up approach generated one-week-ahead district forecasts using a pooled LightGBM model and summed the predicted counts to obtain a national forecast. Direct national comparators included a national LightGBM model, a negative binomial generalized additive model, a persistence benchmark, and a hierarchical forecasting approach.</p><p>These strategies answer the same planning question at different spatial resolutions. A method that appears strongest nationally need not provide the best forecast for every district.</p>"
            },
            {
                "heading": "How we evaluated the predictions",
                "html": "<p>The analysis used a temporally ordered design with 2024 for validation and a 52-week 2025 evaluation period. The 2025 observations were excluded from model fitting. However, the final specification was revised after initial 2025 results had been inspected, so the evaluation should not be presented as an entirely untouched prospective test.</p><p>Evaluating multiple baselines matters: a sophisticated model has to improve meaningfully over straightforward alternatives, not merely produce an impressive score in isolation.</p>"
            },
            {
                "heading": "What the results do—and do not—show",
                "html": "<p>In the observed 2025 national evaluation, bottom-up LightGBM had the lowest point error, with <strong>wMAPE 12.10%</strong> and <strong>R² 0.9625</strong>. This is an observed performance ranking, not definitive proof that bottom-up modelling is superior.</p><p>Adjusted predictive-accuracy tests and circular block-bootstrap uncertainty analyses did <strong>not establish statistically significant superiority</strong> over strong comparators. It is important to report both the favorable point estimate and the remaining uncertainty.</p>"
            },
            {
                "heading": "Practical lessons for public-health modelling",
                "html": "<ol><li>Match the forecast horizon to a real operational decision.</li><li>Respect temporal order; do not randomly shuffle weeks.</li><li>Separate hospital reporting location from patient residence.</li><li>Compare against simple and strong national baselines.</li><li>Report uncertainty, sensitivity, and regional limitations alongside headline scores.</li><li>Undertake prospective validation before presenting the method as an operational early-warning system.</li></ol><p><strong>Original research:</strong> <a href='https://doi.org/10.1186/s12889-026-30204-3' target='_blank' rel='noopener noreferrer'>Haque, Ahmed et al., <em>BMC Public Health</em> (2026), DOI: 10.1186/s12889-026-30204-3</a>.</p>"
            }
        ]
    },
    {
        "slug": "research-coverage-versus-academic-citations",
        "kind": "blog",
        "title": "Media Coverage, Research Listings and Citations Are Not the Same",
        "category": "Research Communication",
        "level": "Scholarly visibility",
        "minutes": 6,
        "date": "10 November 2026",
        "excerpt": "How to document research visibility professionally without confusing peer-reviewed publication, news syndication, indexing, and scholarly citations.",
        "sections": [
            {
                "heading": "One article can appear on many websites",
                "html": "<p>Once a journal publishes an article, it may appear on the publisher's website, research-discovery services, science-news platforms, and automated monitoring feeds. Multiple appearances can improve discoverability, but they are not necessarily distinct publications or independently written news reports.</p>"
            },
            {
                "heading": "Four categories worth separating",
                "html": "<ul><li><strong>Original journal article:</strong> the peer-reviewed scholarly record, identified by its permanent DOI.</li><li><strong>Publisher or discovery listing:</strong> a page that indexes, summarizes, or links to the original article.</li><li><strong>Original news coverage:</strong> a science-news story explaining the findings to a broader audience.</li><li><strong>Syndication or monitoring:</strong> a republication of a story or an automated notice about it.</li></ul><p>For example, the 2026 nationwide dengue forecasting article appears in <em>BMC Public Health</em>; Scienmag reported on it, Bioengineer.org carried the Scienmag story, and other platforms provide research listings or monitoring entries.</p>"
            },
            {
                "heading": "A scholarly citation requires a citing scholarly work",
                "html": "<p>A citation occurs when another scholarly work references the article in its literature or bibliography. A news page with a ‘Cite this article’ feature offers a way to cite that news page; it is not evidence that a new research paper has cited the original study.</p><p>Likewise, a database entry by itself does not increase the number of peer-reviewed publications.</p>"
            },
            {
                "heading": "A professional visibility record",
                "html": "<ol><li>Keep the original research DOI prominent.</li><li>Record the news outlet, headline, article URL, and date.</li><li>Mark syndicated stories clearly and credit their stated source.</li><li>Group indexing and publisher listings separately from news coverage.</li><li>Count verified scholarly citations only when the citing work is identifiable.</li><li>Review coverage for accurate presentation of study limitations.</li></ol><p><strong>Takeaway:</strong> precision in describing visibility makes academic achievements more credible, not less impressive.</p>"
            }
        ]
    },
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
  const CORE_NOTES=[
    {
        "slug": "temporal-validation-one-week-forecasting",
        "kind": "note",
        "title": "One-Week-Ahead Forecasting: Temporal Validation Checklist",
        "category": "Time-Series Forecasting",
        "level": "Graduate · Research methods",
        "minutes": 8,
        "date": "10 November 2026",
        "excerpt": "A practical, exam-friendly note on forecasting horizons, lag construction, rolling evaluation, baseline models, and leakage prevention.",
        "sections": [
            {
                "heading": "Define the information set",
                "html": "<p>At the end of week t, a one-week-ahead model predicts the value in week t+1 using only information actually available by the forecast issue time. The prediction is written as:</p><div class='knowledge-equation'>ŷ(t+1 | t) = f(information available through week t)</div><p>If surveillance reports are delayed, some recorded values for week t may not have been available operationally; specify the data-availability cutoff rather than relying on calendar time alone.</p>"
            },
            {
                "heading": "Construct valid time lags",
                "html": "<p>A lagged feature y(t−1) can be used only if the value would have been observed before forecast issuance. Rolling means and weather covariates must also stop at the information cutoff. Avoid centered moving averages or variables calculated from future observations.</p><p>When comparing districts, keep the same week definitions and describe how missing weeks and reporting revisions were handled.</p>"
            },
            {
                "heading": "Use temporal rather than random splitting",
                "html": "<p>For a forecasting study, use chronological development, validation, and evaluation periods. Randomly shuffled weeks can make future information influence earlier predictions. In rolling-origin evaluation, move the forecast origin forward and repeat the identical one-week prediction rule.</p><p><strong>Example design:</strong> develop on earlier years, select settings in a later validation year, and evaluate in a subsequent year. If the test year informs later model changes, disclose that limitation.</p>"
            },
            {
                "heading": "Benchmarks and evaluation",
                "html": "<ul><li><strong>Persistence:</strong> predict the next week using the latest available week.</li><li><strong>Seasonal baseline:</strong> use the analogous earlier season if justified.</li><li><strong>Direct national model:</strong> predict the national count from national features.</li><li><strong>Bottom-up model:</strong> forecast districts and aggregate them nationally.</li></ul><p>Compare errors at the level of the actual decision, and assess whether differences are stable across outbreaks and quieter periods.</p>"
            },
            {
                "heading": "Reporting checklist",
                "html": "<ol><li>State forecast issuance time and horizon.</li><li>Specify the exact dates of training, validation and evaluation.</li><li>Describe feature availability and any reporting delays.</li><li>Document baselines and aggregation rules.</li><li>Report absolute errors, relative errors and uncertainty.</li><li>Identify any revisions made after seeing holdout results.</li></ol><p><strong>Related published example:</strong> <a href='https://doi.org/10.1186/s12889-026-30204-3' target='_blank' rel='noopener noreferrer'>Nationwide dengue forecasting evaluation, <em>BMC Public Health</em> (2026)</a>.</p>"
            }
        ]
    },
    {
        "slug": "forecast-metrics-wmape-r2-uncertainty",
        "kind": "note",
        "title": "Forecast Accuracy: wMAPE, R² and Uncertainty",
        "category": "Statistical Evaluation",
        "level": "Undergraduate · Graduate",
        "minutes": 7,
        "date": "10 November 2026",
        "excerpt": "Understand aggregate percentage error, goodness of fit, error comparisons, and why a lower point error may not prove one forecasting model is better.",
        "sections": [
            {
                "heading": "Weighted mean absolute percentage error",
                "html": "<p>For nonnegative observed counts yᵢ, a frequently used aggregate definition is:</p><div class='knowledge-equation'>wMAPE = 100 × [Σᵢ |yᵢ − ŷᵢ|] / [Σᵢ yᵢ]</div><p>State the exact definition used because ‘wMAPE’ is sometimes implemented differently across studies. If the observed total in the denominator is zero, this form is undefined. A value of 12.10% means the sum of absolute errors is 12.10% of the sum of observed counts, not that every week's prediction is within 12.10%.</p>"
            },
            {
                "heading": "Coefficient of determination",
                "html": "<p>A common out-of-sample definition is:</p><div class='knowledge-equation'>R² = 1 − [Σᵢ (yᵢ − ŷᵢ)²] / [Σᵢ (yᵢ − ȳ)²]</div><p>Here ȳ is the mean of observed evaluation values. Test-set R² can be negative and does not, by itself, show that a model is calibrated or superior to all competing methods.</p>"
            },
            {
                "heading": "Why point estimates are not the whole conclusion",
                "html": "<p>Suppose model A has lower observed wMAPE than model B. Their errors are calculated on the same sequence of weeks, so they are paired and may be temporally dependent. A point estimate ranks them on the observed sample; uncertainty analysis is needed before claiming the difference is reliably nonzero.</p><p>For temporally dependent errors, resampling individual weeks independently may be inappropriate. Block-bootstrap approaches can preserve some local temporal structure. Predictive-accuracy tests also require suitable assumptions and careful multiple-comparison handling.</p>"
            },
            {
                "heading": "Interpretation example from published research",
                "html": "<p>In a 52-week 2025 national evaluation of dengue hospital admissions in Bangladesh, bottom-up LightGBM showed <strong>wMAPE 12.10%</strong> and <strong>R² 0.9625</strong>. It achieved the lowest observed national point error, but the study's adjusted comparisons and block-bootstrap analysis did not establish statistically significant superiority over strong alternatives.</p><p><strong>Do not write:</strong> ‘The model was proven to outperform all others.’ <strong>Write:</strong> ‘The model had the lowest observed point error, although superiority was not statistically established.’</p>"
            },
            {
                "heading": "Compact exam and reporting checklist",
                "html": "<ol><li>State each metric's formula and denominator.</li><li>Verify the forecast target and aggregation unit.</li><li>Interpret wMAPE as an aggregate error ratio.</li><li>Remember that R² can be negative out of sample.</li><li>Use appropriate paired comparisons for model differences.</li><li>Distinguish observed rankings from statistically supported conclusions.</li></ol><p><strong>Reference example:</strong> <a href='https://doi.org/10.1186/s12889-026-30204-3' target='_blank' rel='noopener noreferrer'>Haque et al., <em>BMC Public Health</em> (2026)</a>.</p>"
            }
        ]
    },
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
  const LIB=window.MRA_PROJECT_LEARNING||{articles:[],notes:[],projects:[]};
  const ARTICLES=[...CORE_ARTICLES.slice(0,2),...LIB.articles,...CORE_ARTICLES.slice(2)];
  const NOTES=[...CORE_NOTES.slice(0,2),...LIB.notes,...CORE_NOTES.slice(2)];
  const ALL=ARTICLES.concat(NOTES);
  const projectNames=[{id:'dengue',name:'Nationwide dengue forecasting',url:'projects.html#dengue-bmc-project',status:'Published · BMC Public Health'},...LIB.projects];
  for(const item of ALL)if(['dengue-forecasting-district-national-evaluation','temporal-validation-one-week-forecasting','forecast-metrics-wmape-r2-uncertainty'].includes(item.slug)){
    item.project='dengue';item.projectTitle='Nationwide dengue forecasting';item.projectUrl='projects.html#dengue-bmc-project';item.projectStatus='Published · BMC Public Health';
  }
  const escapeHtml=v=>String(v==null?"":v).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
  const url=item=>"reading.html?type="+encodeURIComponent(item.kind)+"&slug="+encodeURIComponent(item.slug);
  const get=(type,slug)=>ALL.find(x=>x.kind===type&&x.slug===slug);
  const card=item=>'<article class="knowledge-card" data-knowledge-card data-category="'+escapeHtml(item.category)+'" data-project="'+escapeHtml(item.project||'general')+'" data-search="'+escapeHtml((item.title+' '+item.category+' '+item.excerpt+' '+item.level+' '+(item.projectTitle||'')).toLowerCase())+'">'+
    '<div class="knowledge-card-top"><span class="knowledge-topic">'+escapeHtml(item.category)+'</span><span class="knowledge-readtime">'+item.minutes+' min read</span></div>'+
    '<h3><a href="'+url(item)+'">'+escapeHtml(item.title)+'</a></h3><p>'+escapeHtml(item.excerpt)+'</p>'+
    (item.projectUrl?'<div class="knowledge-project-context"><span>FROM THE PROJECT</span><a href="'+escapeHtml(item.projectUrl)+'">'+escapeHtml(item.projectTitle)+' ↗</a></div>':'')+
    '<div class="knowledge-card-bottom"><span>'+escapeHtml(item.level)+'</span><a href="'+url(item)+'">Read '+(item.kind==='note'?'note':'article')+' ↗</a></div></article>';
  const learningPaths=()=>'<div class="knowledge-path-grid">'+projectNames.map(pr=>{
    const blog=ARTICLES.find(x=>x.project===pr.id),note=NOTES.find(x=>x.project===pr.id);
    return '<article class="knowledge-path-card"><span class="knowledge-path-label">PROJECT LEARNING PATH</span><h3>'+escapeHtml(pr.name)+'</h3><p>'+escapeHtml(pr.status)+'</p><div class="knowledge-path-actions"><a href="'+escapeHtml(pr.url)+'">Project case ↗</a>'+
     (blog?'<a href="'+url(blog)+'">Blog article ↗</a>':'')+(note?'<a href="'+url(note)+'">Academic note ↗</a>':'')+'</div></article>';
  }).join('')+'</div>';
  const landing=(kind,limit)=>{
    const items=(kind==="note"?NOTES:ARTICLES).slice(0,limit||3);
    return '<div class="knowledge-grid">'+items.map(card).join('')+'</div>';
  };
  const listPage=kind=>{
    const isNote=kind==="note",items=isNote?NOTES:ARTICLES;
    const categories=["All topics"].concat([...new Set(items.map(x=>x.category))]);
    const ids=[...new Set(items.filter(x=>x.project).map(x=>x.project))];
    const projects=projectNames.filter(x=>ids.includes(x.id));
    return '<section class="knowledge-hero"><div class="container knowledge-hero-inner">'+
      '<div class="knowledge-kicker">'+(isNote?"ACADEMIC NOTES / STUDY LIBRARY":"RESEARCH BLOG / IDEAS & METHODS")+'</div>'+
      '<h1>'+(isNote?"Academic Notes":"Research Blog")+'</h1>'+
      '<div class="knowledge-library-stats"><span>'+ARTICLES.length+' research articles</span><span>'+NOTES.length+' academic notes</span><span>'+projectNames.length+' project paths</span></div>'+
      '<p>'+(isNote?"Exam-friendly statistical and mathematical explanations, reusable research checklists and compact learning guides.":"Readable articles on research design, explainable AI, statistical methods and credible model evaluation.")+'</p>'+
      '<div class="knowledge-hero-links"><a href="resources.html">Resources hub <span aria-hidden="true">↗</span></a><a href="'+(isNote?"blogs.html":"notes.html")+'">'+(isNote?"Explore the blog":"Browse academic notes")+' <span aria-hidden="true">↗</span></a></div>'+
    '</div></section>'+
    '<section class="section knowledge-list-section"><div class="container">'+
      '<div class="knowledge-filterbar"><div><div class="section-kicker">Curated learning resources</div><h2>'+items.length+' '+(isNote?"study notes":"research articles")+'</h2><p>Original educational materials for independent reading. Not journal publications.</p></div>'+
      '<div class="knowledge-filters"><label class="knowledge-visually-hidden" for="knowledge-search">Search '+(isNote?"notes":"articles")+'</label><input id="knowledge-search" type="search" placeholder="Search titles, concepts…" autocomplete="off">'+
      '<label class="knowledge-visually-hidden" for="knowledge-category">Filter by topic</label><select id="knowledge-category">'+categories.map(x=>'<option value="'+escapeHtml(x)+'">'+escapeHtml(x)+'</option>').join('')+'</select><label class="knowledge-visually-hidden" for="knowledge-project">Filter by project</label><select id="knowledge-project"><option value="All projects">All projects</option><option value="general">General methods</option>'+projects.map(x=>'<option value="'+escapeHtml(x.id)+'">'+escapeHtml(x.name)+'</option>').join('')+'</select></div></div>'+
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
    const canonical=document.querySelector('link[rel="canonical"]');
    if(canonical)canonical.setAttribute("href",location.origin+location.pathname+"?type="+encodeURIComponent(kind)+"&slug="+encodeURIComponent(slug));
    const related=ALL.filter(x=>x.slug!==item.slug).sort((a,b)=>Number(!!item.project&&b.project===item.project)-Number(!!item.project&&a.project===item.project)).slice(0,3);
    const backlink=kind==="note"?"notes.html":"blogs.html";
    return '<section class="knowledge-reading-hero"><div class="container knowledge-reading-title">'+
      '<nav class="knowledge-breadcrumb" aria-label="Breadcrumb"><a href="index.html">Home</a><span aria-hidden="true">›</span><a href="'+backlink+'">'+(kind==="note"?"Academic Notes":"Research Blog")+'</a><span aria-hidden="true">›</span><span>Reading</span></nav>'+
      '<div class="knowledge-kicker">'+escapeHtml(item.category)+' / '+(kind==="note"?"STUDY NOTE":"RESEARCH ARTICLE")+'</div>'+
      '<h1>'+escapeHtml(item.title)+'</h1><p class="knowledge-reading-deck">'+escapeHtml(item.excerpt)+'</p>'+
      '<div class="knowledge-reading-meta"><span>Md. Razu Ahmed</span><span>'+escapeHtml(item.date)+'</span><span>'+item.minutes+' min read</span></div>'+
    (item.projectUrl?'<a class="knowledge-reading-source" href="'+escapeHtml(item.projectUrl)+'">Connected research project · '+escapeHtml(item.projectTitle)+' ↗</a>':'')+
    '</div></section>'+
    '<section class="knowledge-reading-layout container"><aside class="knowledge-toc" aria-label="On this page"><strong>ON THIS PAGE</strong><nav>'+item.sections.map((x,i)=>'<a href="#part-'+(i+1)+'">'+escapeHtml(x.heading)+'</a>').join('')+'</nav><button type="button" id="knowledge-print" class="knowledge-print-button">Print / Save as PDF</button><p>Use your browser’s print dialog to save this resource as a PDF.</p></aside>'+
    '<article class="knowledge-article" id="knowledge-document"><div class="knowledge-reading-intro">'+(kind==="note"?"Study note · "+escapeHtml(item.level):"Research commentary · "+escapeHtml(item.level))+'</div>'+
    (item.projectUrl?'<div class="knowledge-evidence-note"><strong>Connected to the research portfolio</strong><p>'+escapeHtml(item.projectTitle)+' · '+escapeHtml(item.projectStatus||'Project case')+'. This is an educational resource, not an additional peer-reviewed article.</p><a href="'+escapeHtml(item.projectUrl)+'">Explore project methods, figures and status ↗</a></div>':'')+
      item.sections.map((section,i)=>'<section id="part-'+(i+1)+'"><h2>'+escapeHtml(section.heading)+'</h2>'+section.html+'</section>').join('')+
      '<div class="knowledge-article-footer"><strong>Further study</strong><p>Use primary methodological literature, course materials, and relevant software documentation to verify assumptions and implementation details.</p><p class="knowledge-attribution">Educational content · Md. Razu Ahmed · '+escapeHtml(item.date)+'</p></div>'+
    '</article></section>'+
    '<section class="section knowledge-related-section"><div class="container"><div class="knowledge-related-title"><div class="section-kicker">Keep exploring</div><h2>Related reading</h2></div><div class="knowledge-grid">'+related.map(card).join('')+'</div><p class="knowledge-back-link"><a href="'+backlink+'">← All '+(kind==="note"?"academic notes":"research articles")+'</a></p></div></section>';
  };
  function wire(){
    const search=document.getElementById("knowledge-search");
    const selector=document.getElementById("knowledge-category");
    const projectSelector=document.getElementById("knowledge-project");
    const update=()=>{
      const query=(search&&search.value||"").trim().toLowerCase();
      const category=selector&&selector.value||"All topics";
      const selectedProject=projectSelector&&projectSelector.value||"All projects";
      const cards=[...document.querySelectorAll('[data-knowledge-card]')];
      let visible=0;
      for(const el of cards){
        const ok=(!query||(el.dataset.search||"").includes(query))&&(category==="All topics"||el.dataset.category===category)&&(selectedProject==="All projects"||el.dataset.project===selectedProject);
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
    if(projectSelector)projectSelector.addEventListener("change",update);
    const print=document.getElementById("knowledge-print");
    if(print)print.addEventListener("click",()=>window.print());
  }
  document.addEventListener("DOMContentLoaded",wire,{once:true});
  window.MRA_KNOWLEDGE={render(page){return page==="blogs"?listPage("blog"):page==="notes"?listPage("note"):readingPage()},preview:landing,tracks:learningPaths,articles:ARTICLES,notes:NOTES};
})();
