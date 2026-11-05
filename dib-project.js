/* Publication-connected PUST Cafeteria Food Image Dataset project.
   All seven figure assets are served locally from the CC BY research article.
   Canonical dataset remains at Mendeley Data Version 2 (not mirrored here). */
(() => {
  'use strict';
  const BASE='assets/academic/projects/pust-food-dataset/';
  const PAPER='https://doi.org/10.1016/j.dib.2026.113262';
  const DATA='https://data.mendeley.com/datasets/fn6yhzjz83/2';
  const SOURCE='https://pmc.ncbi.nlm.nih.gov/articles/PMC13629197/';
  const figures=[
    {n:5,file:'fig05-detection-segmentation-annotations.webp',title:'Bounding-box and polygon annotations',desc:'Visual examples of the paired object-detection and instance-segmentation labels.',featured:true},
    {n:7,file:'fig07-dataset-preparation-workflow.webp',title:'End-to-end preparation workflow',desc:'Collection, manual annotation, original-image partitioning, augmentation, refinement and data release.',featured:true},
    {n:2,file:'fig02-class-distribution-before.webp',title:'Class frequencies before augmentation',desc:'The original distribution of annotated food instances across the 16 classes.'},
    {n:3,file:'fig03-class-distribution-after.webp',title:'Class frequencies after augmentation',desc:'Annotation counts after training-only augmentation and light class balancing.'},
    {n:4,file:'fig04-class-distribution-splits.webp',title:'Distribution across dataset splits',desc:'Train, validation and test class representation in the released version.'},
    {n:6,file:'fig06-dataset-directory-structure.webp',title:'Open dataset directory structure',desc:'Original images, processed annotation branches, metadata and supporting documentation.',wide:true}
  ];
  const safe=(v)=>String(v).replace(/[&<>"']/g,ch=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));
  const galleryFigure=(f)=>`<figure class="dib-figure-card${f.wide?' dib-figure-card--wide':''}">
      <a class="dib-image-link" href="${BASE+f.file}" target="_blank" rel="noopener noreferrer" aria-label="Open full-resolution published Figure ${f.n}: ${safe(f.title)}">
        <img src="${BASE+f.file}" alt="Figure ${f.n}: ${safe(f.desc)}" loading="lazy" decoding="async" onerror="this.hidden=true;this.nextElementSibling.hidden=false">
        <span hidden class="dib-image-fallback">Published Figure ${f.n}: preview unavailable. Select the card to open the original file.</span>
      </a>
      <figcaption><span>FIGURE ${f.n}</span><strong>${safe(f.title)}</strong><small>${safe(f.desc)}</small></figcaption>
    </figure>`;
  function render(){
    const article=(window.PORTFOLIO_DATA?.publications||[]).find(p=>p.id==='dib')||{};
    const articleAPA=article.citationAPA||'Yeasmin, M., Ahmed, M. R., Kundu, P. R., Mauya, J., & Reza, M. S. (2026). PUST cafeteria food image dataset: Real-world Bangladeshi meal-platter images with bounding-box and polygon annotations. Data in Brief, 69, 113262. https://doi.org/10.1016/j.dib.2026.113262';
    const articleIEEE=article.citationIEEE||'M. Yeasmin, M. R. Ahmed, P. R. Kundu, J. Mauya, and M. S. Reza, “PUST Cafeteria Food Image Dataset: Real-World Bangladeshi Meal-Platter Images with Bounding-Box and Polygon Annotations,” Data in Brief, vol. 69, Art. no. 113262, 2026, doi: 10.1016/j.dib.2026.113262.';
    return `<section class="section alt dib-project-section" id="dib-food-dataset-project" aria-labelledby="dib-project-heading"><div class="container">
      <header class="dib-project-head">
        <div>
          <span class="dib-kicker">Published open dataset · Peer-reviewed Data Article · Second author</span>
          <h2 id="dib-project-heading">PUST Cafeteria Food Image Dataset: <span>Real-World Bangladeshi Meal-Platter Images with Bounding-Box and Polygon Annotations</span></h2>
          <p>An openly released collection of Bangladeshi cafeteria meal-platter photographs with paired bounding-box and polygon annotations. Published in <em>Data in Brief</em>, Volume 69, Article 113262 (2026), with the authoritative Version 2 data release archived at Mendeley Data.</p>
        </div>
        <span class="dib-head-label">Data in Brief · 2026</span>
      </header>
      <nav class="dib-section-nav" data-section-jump-nav aria-label="PUST Cafeteria Food Image Dataset project subsections">
        <a href="#dib-project-overview"><span>01</span> Overview</a>
        <a href="#dib-data-design"><span>02</span> Dataset design</a>
        <a href="#dib-data-figures"><span>03</span> Published figures</a>
        <a href="#dib-data-reuse"><span>04</span> Access &amp; citation</a>
      </nav>
      <article class="dib-case" aria-label="Published PUST cafeteria food image dataset research project">
        <div class="dib-hero" id="dib-project-overview">
          <div class="dib-lead-copy">
            <div class="dib-meta-pills"><span>Elsevier · Open access</span><span>Mendeley Data · Version 2</span><span>CC BY 4.0</span><span>Computer vision</span></div>
            <h3>Making authentic Bangladeshi meal scenes accessible to object detection and instance segmentation research</h3>
            <p>Photographed under everyday cafeteria conditions at Pabna University of Science and Technology, the dataset covers single-item and mixed meal platters with real variation in lighting, viewpoints, overlapping food and partial occlusion.</p>
            <p>Every distinguishable food instance was labelled in <strong>Roboflow</strong> with a bounding box and a polygon mask. The same final image collection is distributed in <strong>YOLO detection, YOLO segmentation and COCO</strong> formats—suitable for research benchmarking, transfer learning and regional food-image analysis.</p>
            <div class="dib-actions">
              <a class="btn primary" href="${DATA}" target="_blank" rel="noopener noreferrer">Access Mendeley Data · V2 <span aria-hidden="true">↗</span></a>
              <a class="btn ghost" href="${PAPER}" target="_blank" rel="noopener noreferrer">Read Data in Brief article <span aria-hidden="true">↗</span></a>
              <a class="btn ghost" href="publications.html#output-dib">Publication record <span aria-hidden="true">↗</span></a>
            </div>
            <p class="dib-authorline"><strong>Authors:</strong> Marufa Yeasmin · Md. Razu Ahmed · Protiva Rani Kundu · Jannatul Mauya · Md. Shamim Reza</p>
          </div>
          <figure class="dib-hero-figure">
            <a class="dib-image-link" href="${BASE}fig01-meal-platter-examples.webp" target="_blank" rel="noopener noreferrer" aria-label="Open published Figure 1: representative single- and multi-item meal-platter images">
              <img src="${BASE}fig01-meal-platter-examples.webp" alt="Six examples of real Bangladeshi cafeteria meal platters photographed for the dataset" loading="lazy" decoding="async">
            </a>
            <figcaption><strong>Figure 1 · Authentic cafeteria meal-platter images.</strong> Source: Yeasmin et al. (2026), <em>Data in Brief</em>.</figcaption>
          </figure>
        </div>
        <div class="dib-metric-strip" aria-label="Mendeley Data Version 2 verified dataset summary">
          <div><strong>720</strong><span>Original meal-platter photographs</span></div>
          <div><strong>1,728</strong><span>Final processed images</span></div>
          <div><strong>6,297</strong><span>Annotated food instances</span></div>
          <div><strong>16</strong><span>Food classes · 640 × 640 pixels</span></div>
        </div>

        <div class="dib-research-body" id="dib-data-design">
          <div class="dib-section-top">
            <div><span class="dib-kicker">Dataset engineering · Release design</span><h3>One image collection, three machine-readable annotation formats</h3>
              <p>Original images were partitioned first; augmented variants were then generated only inside the training subset to prevent train–validation–test image-family overlap.</p></div>
            <a class="dib-section-link" href="${DATA}" target="_blank" rel="noopener noreferrer">Inspect Version 2 files ↗</a>
          </div>
          <div class="dib-method-grid">
            <div class="dib-format-panel">
              <h4>Released annotations and source metadata</h4>
              <div class="dib-format-stack">
                <div class="dib-format-item"><strong>YOLO Detect</strong><span>Class IDs and normalized bounding-box coordinates in TXT labels</span></div>
                <div class="dib-format-item"><strong>YOLO Segment</strong><span>Class IDs and polygon vertices describing visible food-instance regions</span></div>
                <div class="dib-format-item"><strong>COCO JSON</strong><span>Image, class and instance records with partition-specific annotation files</span></div>
                <div class="dib-format-item"><strong>Provenance</strong><span>Original photographs, class taxonomy, dataset summaries, image-source mapping and device metadata</span></div>
              </div>
            </div>
            <div class="dib-split-panel">
              <h4>Final Version 2 partition</h4>
              <p><strong>1,728</strong> processed images, split into independent training, validation and test subsets.</p>
              <div class="dib-split-track" role="img" aria-label="Processed image split: 1512 training images, 108 validation images and 108 test images">
                <span class="dib-split-train"></span><span class="dib-split-valid"></span><span class="dib-split-test"></span>
              </div>
              <div class="dib-split-breakdown">
                <div><span><i class="dib-split-train"></i>Training</span><strong>1,512 · 87.5%</strong></div>
                <div><span><i class="dib-split-valid"></i>Validation</span><strong>108 · 6.25%</strong></div>
                <div><span><i class="dib-split-test"></i>Test</span><strong>108 · 6.25%</strong></div>
              </div>
              <p>The <strong>720 original</strong> images were partitioned 504/108/108 before augmentation. Only the 504 training originals were expanded.</p>
            </div>
          </div>
          <p class="dib-method-note"><strong>Data integrity:</strong> Three formats are parallel annotation representations of the same 1,728 processed images, not three separate datasets. Validation and test images remained unaugmented; instance masks trace visible portions only.</p>
        </div>

        <div class="dib-gallery-area" id="dib-data-figures">
          <div class="dib-section-top">
            <div><span class="dib-kicker">Published evidence · Seven paper figures</span><h3>Explore real imagery, annotations, data composition and the preparation workflow</h3>
              <p>Exact published figures are hosted as web-optimized research images. Select any image to view it at its full available size.</p></div>
            <a class="dib-section-link" href="${SOURCE}" target="_blank" rel="noopener noreferrer">Article source archive ↗</a>
          </div>
          <div class="dib-featured-figures">${figures.filter(x=>x.featured).map(galleryFigure).join('')}</div>
          <div class="dib-figure-grid">${figures.filter(x=>!x.featured).map(galleryFigure).join('')}</div>
          <p class="dib-license-note"><strong>Figure provenance:</strong> Figures 1–7 reproduced in optimized web format from Yeasmin et al. (2026), <em>Data in Brief</em>, DOI <a href="${PAPER}" target="_blank" rel="noopener noreferrer">10.1016/j.dib.2026.113262</a> (CC BY; transformation: image optimization). Source images are attributed to the published authors; the original data archive is maintained independently at Mendeley Data V2.</p>
        </div>

        <div class="dib-reuse-area" id="dib-data-reuse">
          <div>
            <span class="dib-kicker">Reusable data · Version-controlled</span>
            <h3>Access, reproduce and cite the public dataset</h3>
            <ol>
              <li>Open the <a href="${DATA}" target="_blank" rel="noopener noreferrer">Mendeley Data Version 2 record</a> and download the original and processed dataset archives.</li>
              <li>Use <strong>class_names.csv</strong>, the source-image mapping and the split-specific annotation files to configure a detection or segmentation experiment.</li>
              <li>Keep original-image families separated when preparing new experiments; cite both the dataset DOI and the descriptive data article.</li>
            </ol>
            <div class="dib-citation"><strong>Dataset citation · V2:</strong> Yeasmin, M., Ahmed, M. R., Kundu, P. R., Mauya, J., &amp; Reza, M. S. (2026). <em>PUST Cafeteria Food Image Dataset: Real-World Bangladeshi Meal-Platter Images with Bounding-Box and Polygon Annotations</em> (Version 2). Mendeley Data. <a href="${DATA}" target="_blank" rel="noopener noreferrer">https://doi.org/10.17632/fn6yhzjz83.2</a></div>
          </div>
          <div>
            <span class="dib-kicker">Research context · Responsible reuse</span>
            <h3>What the release enables—and what it does not</h3>
            <p><strong>Designed for:</strong> Bangladeshi food recognition, instance counting, object detection, segmentation, model comparison, transfer learning and domain adaptation.</p>
            <p><strong>Limitations:</strong> One cafeteria and two smartphone cameras; uneven class frequencies; augmented images cannot replace independently sampled scenes. The dataset does not contain verified food mass, nutrition, calories or billing prices.</p>
            <p><strong>Access:</strong> Open data under <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noopener noreferrer">Creative Commons Attribution 4.0</a>. Cite the dataset and <a href="${PAPER}" target="_blank" rel="noopener noreferrer">associated article</a> when reusing the resource.</p>
          </div>
        </div>
        <section class="published-project-citation dib-article-citation" aria-label="Cite the published Data in Brief data article">
          <div class="published-project-citation-head">
            <div><span class="published-project-citation-kicker">PUBLISHED DATA ARTICLE · FORMAL JOURNAL REFERENCE</span>
              <h4>Cite the peer-reviewed Data in Brief article</h4>
              <p>When using the underlying image annotations, cite the Mendeley Data V2 record above as well as this related publication.</p></div>
            <a href="${PAPER}" target="_blank" rel="noopener noreferrer">Data in Brief article DOI <span aria-hidden="true">↗</span></a>
          </div>
          <div class="dual-citation" aria-label="Data in Brief article citations">
            <div class="citation-format citation-format-apa"><span class="citation-style-label">APA</span><p>${safe(articleAPA)}</p></div>
            <div class="citation-format citation-format-ieee"><span class="citation-style-label">IEEE</span><p>${safe(articleIEEE)}</p></div>
          </div>
        </section>
        <footer class="dib-bottom"><p><strong>Published research record:</strong> Yeasmin, Ahmed, Kundu, Mauya &amp; Reza (2026), <em>Data in Brief</em>, 69, Article 113262. Data DOI: 10.17632/fn6yhzjz83.2. Dataset version 2 was published on 28 August 2026.</p>
          <a class="btn ghost" href="${DATA}" target="_blank" rel="noopener noreferrer">Open Mendeley Data Version 2 ↗</a>
        </footer>
      </article>
    </div></section>`;
  }
  window.MRA_DIB_CASE=render;
})();
