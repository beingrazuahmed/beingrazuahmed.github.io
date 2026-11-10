#!/usr/bin/env node
/* Integration regression: visible author typography + publication citations.
   Runs in GitHub Actions with the jsdom development-only test dependency. */
'use strict';

const fs=require('node:fs');
const path=require('node:path');
const assert=require('node:assert/strict');
const vm=require('node:vm');
const {JSDOM}=require('jsdom');

function text(file){return fs.readFileSync(file,'utf8');}
function htmlFiles(){
  const pages=fs.readdirSync('.').filter(p=>p.endsWith('.html'));
  pages.push('bazarbondhu-ai/index.html');
  return pages.sort();
}

async function main(){
  const pages=htmlFiles();
  assert.equal(pages.length,44,'Expected all 44 portfolio HTML pages');
  const version='20261105-owner-citations1';
  for(const file of pages){
    const markup=text(file);
    const relative=file.includes('/')?'../':'';
    const tag=`src="${relative}owner-emphasis.js?v=${version}"`;
    assert(markup.includes(tag),`Global name emphasis not linked by ${file}`);
    assert.equal(markup.split('owner-emphasis.js').length-1,1,`Duplicate owner script in ${file}`);
    if(markup.includes('v2-app.js?v=')){
      assert(/v2-app\.js\?v=[\w-]+/.test(markup),`Missing cache-versioned app in ${file}`);
    }
  }

  const source=text('owner-emphasis.js');
  const dom=new JSDOM(`<!doctype html><html><head>
    <title>Md. Razu Ahmed academic portfolio</title>
    </head><body>
    <p id="n1">Research contributions: Md. Razu Ahmed, Md. Shamim Reza.</p>
    <p id="n2">APA: Ahmed, M. R. (2026). IEEE: M. R. Ahmed (2026).</p>
    <a id="linked" href="https://doi.org/10.1002/eng2.70575">Read Md. Razu Ahmed's work</a>
    <strong id="prebold">Ahmed, M. R.</strong>
    <script id="metadata" type="application/json">{"name":"Md. Razu Ahmed"}</script>
    </body></html>`,{runScripts:'outside-only',pretendToBeVisual:true,url:'https://beingrazuahmed.github.io/projects.html'});

  dom.window.eval(source);
  dom.window.document.dispatchEvent(new dom.window.Event('DOMContentLoaded'));
  const doc=dom.window.document;
  assert.equal(doc.querySelector('#n1 strong.portfolio-owner-emphasis')?.textContent,'Md. Razu Ahmed');
  assert(!doc.querySelector('#n1').innerHTML.includes('<strong>Md. Shamim Reza</strong>'),
    'A co-author must not be emphasized as portfolio owner');
  assert.equal(doc.querySelectorAll('#n2 strong.portfolio-owner-emphasis').length,2,
    'APA and IEEE versions of the portfolio owner name must both be bold');
  assert.equal(doc.querySelector('#linked strong.portfolio-owner-emphasis')?.textContent,'Md. Razu Ahmed');
  assert.equal(doc.querySelector('#linked').getAttribute('href'),'https://doi.org/10.1002/eng2.70575');
  assert.equal(doc.querySelectorAll('#prebold strong').length,0,
    'Already bold names must not gain nested strong tags');
  assert.equal(doc.querySelector('title').textContent,'Md. Razu Ahmed academic portfolio');
  assert.equal(doc.querySelector('#metadata').textContent,'{"name":"Md. Razu Ahmed"}');

  const dynamic=doc.createElement('p');
  dynamic.id='added-later';
  dynamic.textContent='Co-authored by Md. Razu Ahmed';
  doc.body.appendChild(dynamic);
  await new Promise(resolve=>dom.window.setTimeout(resolve,85));
  assert.equal(doc.querySelector('#added-later strong.portfolio-owner-emphasis')?.textContent,
    'Md. Razu Ahmed','Dynamically added portfolio content must be emphasized');
  dom.window.close();

  const dataContext={window:{}};
  vm.runInNewContext(text('data.js'),dataContext,{filename:'data.js'});
  const pubs=dataContext.window.PORTFOLIO_DATA.publications;
  const heartManuscript=(dataContext.window.PORTFOLIO_DATA.manuscripts||[]).find(m=>m.id==='bs-ccfs-heart-disease');
  assert(heartManuscript,'Heart disease manuscript must be present in the main publications data');
  assert.equal(heartManuscript.status,'Editor Invited','Current PLOS ONE status badge must not remain Submitted');
  assert.equal(heartManuscript.submittedDate,'2 November 2026','Preserve the original submission date');
  assert.equal(heartManuscript.role,'Second Author');
  assert(heartManuscript.highlight.includes('7 November 2026'),'The editorial status date must be shown');
  const icrast=(dataContext.window.PORTFOLIO_DATA.conferences||[]).find(c=>c.id==='icrast-2025');
  assert(icrast,'ICRAST 2025 conference record must exist');
  assert.equal(icrast.eventLogo,'assets/academic/conferences/icrast-2025-faculty-science-logo-original.jpeg','Preserve the existing ICRAST logo');
  assert.equal(icrast.hostLogo,'assets/academic/journals/ijss/ru-logo.webp','Display RU logo beside ICRAST logo');
  assert(fs.existsSync(icrast.eventLogo)&&fs.existsSync(icrast.hostLogo),'Both conference logos must exist');
  assert(/data\.js\?v=[\w-]+/.test(text('conferences.html')),'Conference data must be cache-refreshed');
  assert(/data\.js\?v=[\w-]+/.test(text('gallery.html')),'Gallery must load cache-versioned reviewer records');
  const extraData=text('extra-data.js');
  assert(extraData.includes('lastUpdated: "10 November 2026"'),'Footer date must track the latest portfolio change');
  const allGallery=dataContext.window.PORTFOLIO_DATA.gallery||[];
  const scholarlyCertificates=allGallery.filter(g=>['bspc-reviewing-certificate-2026','data-in-brief-reviewing-certificate-2026','array-reviewing-certificate-2026','eaai-reviewing-certificate-2026'].includes(g.id));
  assert.equal(scholarlyCertificates.length,4,'All four Elsevier reviewing certificates must have gallery records');
  scholarlyCertificates.forEach(g=>{
    assert(!/\b(?:updated|uploaded|latest|replacement|preview|rendered|source file)\b/i.test(g.caption),
      'Gallery certificate caption contains website-maintenance wording: '+g.id);
    assert(g.caption.includes('Certificate of Reviewing'),'Gallery caption must identify the credential: '+g.id);
  });
  assert.equal((dataContext.window.PORTFOLIO_DATA.metrics||[]).find(m=>m.label==='Completed Peer Reviews')?.value,47,
    'Overview peer review metric must match the editorial service total');
  const service=dataContext.window.PORTFOLIO_DATA.service||[];
  const dibReview=service.find(x=>x.id==='data-in-brief');
  const bspcReview=service.find(x=>x.id==='bspc');
  assert(dibReview&&bspcReview,'Data in Brief and BSPC reviewer records must both exist');
  assert.equal(dibReview.journal,'Data in Brief');
  assert.equal(dibReview.issn,'2352-3409');
  assert.equal(dibReview.journalUrl,'https://www.sciencedirect.com/journal/data-in-brief');
  assert.equal(dibReview.reviews,1);
  assert.equal(dibReview.startDate,'2026-11-03');
  assert.equal(dibReview.startLabel,'3 November 2026');
  assert.equal(dibReview.ongoing,true,'Data in Brief peer reviewer service is ongoing');
  assert.equal(bspcReview.reviews,14);
  const eaaiReview=service.find(r=>r.id==="eaai");
  assert(eaaiReview,"EAAI reviewer record must exist");
  assert.equal(eaaiReview.reviews,4,"EAAI must show 4 reviews");
  assert(eaaiReview.recognition.includes("4 completed reviews"));
  assert(eaaiReview.evidencePdf.includes("20261108-eaai4-certificate"));
  assert(eaaiReview.evidenceAsset.includes("20261108-eaai4-certificate"));
  assert.equal(service.reduce((total,r)=>total+Number(r.reviews||0),0),47,
    'The total number of invited peer reviews must be 47');
  assert.equal(service.length,5,'Exactly five journals have review records');
  assert(dibReview.artwork.endsWith('/data-in-brief-cover.jpg'));
  assert(dibReview.evidencePdf.includes('data-in-brief-reviewing-certificate-2026.pdf'));
  assert(dibReview.evidenceHref.includes('gallery.html#data-in-brief-reviewing-certificate-2026'));
  const original='assets/academic/journals/data-in-brief/data-in-brief-reviewing-certificate-2026.pdf';
  const cover='assets/academic/journals/data-in-brief/data-in-brief-cover.jpg';
  const preview='assets/gallery/data-in-brief-reviewing-certificate-2026.webp';
  for(const [file,minSize] of [[original,10000],[cover,1000],[preview,10000],
    ['assets/recognition/bspc-reviewing-certificate-2026.pdf',10000],
    ['assets/gallery/bspc-reviewing-certificate-2026.webp',10000]]){
    assert(fs.existsSync(file) && fs.statSync(file).size>minSize,
      'Missing uploaded review artifact '+file);
  }
  const dibGallery=(dataContext.window.PORTFOLIO_DATA.gallery||[]).find(x=>x.id==='data-in-brief-reviewing-certificate-2026');
  const bspcGallery=(dataContext.window.PORTFOLIO_DATA.gallery||[]).find(x=>x.id==='bspc-reviewing-certificate-2026');
  assert(dibGallery?.verified && dibGallery.href.includes('data-in-brief-reviewing-certificate-2026.pdf'));
  assert(bspcGallery?.verified && /14 completed manuscript reviews/.test(bspcGallery.caption),
    'BSPC certificate must accurately recognize 14 completed manuscript reviews');
  const reviewFolder='assets/academic/journals/data-in-brief/README.md';
  assert(fs.existsSync(reviewFolder) && text(reviewFolder).includes('3 November 2026'));
    for(const [id,doi] of [
    ['fastica','10.1002/eng2.70575'],
    ['ckd','10.3329/ijss.v25i2.85732'],
    ['dib','10.1016/j.dib.2026.113262'],
    ['dengue-forecast','10.1186/s12889-026-30204-3']
  ]){
    const p=pubs.find(x=>x.id===id);
    assert(p&&p.citationAPA&&p.citationIEEE,`Missing canonical published citations for ${id}`);
    assert(p.citationAPA.includes(doi) && p.citationIEEE.includes(doi),
      `Citation DOI mismatch for ${id}`);
  }

  const app=text('v2-app.js');
  assert(app.includes("record.ongoing===false?'Completed':'Ongoing'"),
    'Completed DIB review must be labelled accurately');
  assert(app.includes('editorial-journal-grid--five'),
    'Five editorial-service cards should use balanced grid styling');
  assert(app.includes('47 completed invited reviews'), 'The public overview must show 47 total reviews');
  assert(!app.includes('<strong>44</strong><span>Peer Reviews</span>'),'Homepage may not display the stale 44-review count');
  assert(!app.includes('Source file ·'),'Gallery cards must not expose raw source filenames as editorial copy');
  assert(app.includes('View certificate ↗'),'Certificate gallery actions must be credential-oriented');
  const v2DataSource=text('v2-data.js');
  vm.runInNewContext(v2DataSource,dataContext,{filename:'v2-data.js'});
  for (const [id, repository] of [
    ['fastica', 'https://github.com/beingrazuahmed/fastica-audio-source-separation'],
    ['ckd', 'https://github.com/beingrazuahmed/ckd-risk-factors-stacking-ml']
  ]) {
    const links=dataContext.window.MRA_V2.publicationLinks[id].primary;
    assert(links.some(link=>link.label==='GitHub'&&link.url===repository),
      `${id} published article must have a GitHub-icon research-code link`);
  }
  assert(app.includes("'github': {src:'assets/academic/logos/contact/github.svg'"),
    'Publication link icons must use the verified GitHub SVG');
  assert(/v2-app\.js\?v=[\w-]+/.test(text('publications.html')),
    'Publication page must refresh cached GitHub brand icons');
  assert(!v2DataSource.includes("{ value: '44', label: 'Completed Peer Reviews' }"),
    'At-a-glance metric must derive from the current editorial records');
  assert(app.includes('14 for Biomedical Signal Processing and Control'),'BSPC assistant text must say 14');
  assert(app.includes('data-in-brief-reviewing-certificate-2026.pdf'),
    'DIB certificate PDF must be connected in the public gallery');

  assert(app.includes("publishedProjectCitationPanel('fastica')"),'Missing FastICA citation panel');
  assert(app.includes("publishedProjectCitationPanel('ckd')"),'Missing CKD citation panel');
  assert(app.includes('dualAcademicCitation(p.citationAPA,p.citationIEEE)'),
    'Project citation blocks must reuse canonical records');
  const galleryStart=app.indexOf('function ckdProjectExtras(){');
  const galleryStop=app.indexOf('function ckdProjectCase(){',galleryStart);
  assert(galleryStart>=0 && galleryStop>galleryStart,'CKD gallery implementation not located');
  const gallerySource=app.slice(galleryStart,galleryStop);
  assert(!gallerySource.includes("n:5,file:'fig05-methodology-workflow.webp'"),
    'Figure 5 is already featured and must not repeat in the lower CKD gallery');
  assert(app.includes('fig05-methodology-workflow.webp'),
    'Featured CKD Figure 5 must remain available');
  assert((gallerySource.match(/\{n:(?:2|3|4|6|11|16|21|26),file:/g)||[]).length===8,
    'Exactly eight nonduplicate figure files should remain in CKD gallery');

  vm.runInNewContext(text('heart-bsccfs-project.js'),dataContext,{filename:'heart-bsccfs-project.js'});
  assert.equal(typeof dataContext.window.MRA_HEART_CASE,'function','Heart disease project renderer missing');
  assert.equal(typeof dataContext.window.MRA_HEART_ACTIVATE,'function','Heart disease preview initializer missing');
  const heartHtml=dataContext.window.MRA_HEART_CASE();
  assert(heartHtml.includes('BS-CCFS: Bootstrap-Stable Consensus Feature Selection'),
    'Full official heart disease research title missing');
  assert(heartHtml.includes('Editor Invited · PLOS ONE · 7 Nov 2026'),'Heart manuscript must display its current Editor Invited status');
  assert(heartHtml.includes('Submitted to PLOS ONE:</strong> 2 November 2026'),'Original heart manuscript submission date must be preserved');
  assert(heartHtml.includes('PLOS ONE')&&!heartHtml.includes('published article · DOI'),
    'Submission must not be represented as a peer-reviewed publication DOI');
  for(const id of ['heart-bsccfs-project','heart-bsccfs-overview','heart-bsccfs-method','heart-bsccfs-figures','heart-bsccfs-record']){
    assert(heartHtml.includes('id="'+id+'"'), 'Missing heart project section anchor '+id);
  }
  const heartFigs=[...heartHtml.matchAll(/src="([^"]+\.webp)"/g)]
    .map(x=>x[1]).filter(x=>x.startsWith('assets/academic/projects/bs-ccfs-heart-disease/'));
  const uniqueHeartFigs=[...new Set(heartFigs)];
  assert.equal(uniqueHeartFigs.length,11,'The heart gallery must reference 11 distinct original panels');
  const featuredFile='assets/academic/projects/bs-ccfs-heart-disease/fig01-complete-methodology.webp';
  assert.equal(heartFigs.filter(x=>x===featuredFile).length,1,
    'Figure 1 must appear exactly once as the hero image');
  const galleryOnly=heartHtml.slice(heartHtml.indexOf('id="heart-bsccfs-figures"'));
  const galleryBeforeRecord=galleryOnly.slice(0,galleryOnly.indexOf('id="heart-bsccfs-record"'));
  assert(!galleryBeforeRecord.includes('fig01-complete-methodology.webp'),
    'Do not repeat featured Figure 1 in lower heart disease gallery');
  assert.equal((galleryBeforeRecord.match(/class="heart-figure-card /g)||[]).length,10,
    'The lower heart disease gallery must display exactly 10 other figure cards');
  assert(heartHtml.includes('Featured research visualization') || heartHtml.includes('FEATURED RESEARCH VISUALIZATION'),
    'The methodology figure should be visibly highlighted');
  assert(heartHtml.includes('Figure 1 is featured above'),
    'Heart gallery introduction should distinguish the ten other images');
  assert(!heartHtml.includes('when their web-optimized versions are uploaded'),
    'Remove obsolete pre-upload copy once images are hosted');
  assert(heartHtml.includes('Figure 1')||heartHtml.includes('FIGURE 1'));
  assert(heartHtml.includes('736 / 184'),'Heart dataset split should match manuscript');
  assert(heartHtml.includes('5 / 13'),'The selected feature subset must match manuscript');
  assert(app.includes('MRA_HEART_CASE()')&&app.includes('MRA_HEART_ACTIVATE'),
    'Portfolio shell must render and activate BS-CCFS case study');
  assert(app.includes('href="#heart-bsccfs-project"'),'Heart study must appear in Projects navigation');
  assert(app.includes('projects.html#heart-bsccfs-project'),'Submission record should link to the new heart study');

  vm.runInNewContext(text('dib-project.js'),dataContext,{filename:'dib-project.js'});
  const dib=dataContext.window.MRA_DIB_CASE();
  assert(dib.includes('Cite the peer-reviewed Data in Brief article'));
  assert(dib.includes('citation-format-apa')&&dib.includes('citation-format-ieee'));
  assert(dib.includes('10.1016/j.dib.2026.113262'));
  assert(dib.includes('10.17632/fn6yhzjz83.2'));

  const projectStyles=text('project-research-links.css');
  for(const menu of ['.project-portfolio-index','.academic-showcase-jump','.dib-section-nav']){
    assert(projectStyles.includes(menu+' a[aria-current="location"]'),
      'Missing selected-menu light background for '+menu);
  }
  assert(projectStyles.includes('background:#e3f2ff!important'),
    'Selected project navigation must have a light background');
  assert(projectStyles.includes('background:#eef7ff!important'),
    'Hover and focused project navigation must have a light background');
  assert(projectStyles.includes('background:#ddf4f0!important'),
    'Primary DOI and project action buttons must use light-teal background');
  assert(projectStyles.includes('color:#174f49!important'),
    'Light project action buttons must have high-contrast dark text');
  assert(projectStyles.includes('background:#c5eae3!important'),
    'Project buttons must use a distinct light hover and focus background');

  const projects=text('projects.html');
  assert(projects.includes('published-project-citations.css'));
  assert(projects.includes('dib-project.js?v=20261109-pubmed-pmc1'));
  assert(projects.includes('dib-project.css?v=20261109-pubmed-pmc1'));
  assert(text('v2-data.js').includes('https://pubmed.ncbi.nlm.nih.gov/42824703/'), 'DIB PubMed link must be present');
  assert(text('v2-data.js').includes('https://pmc.ncbi.nlm.nih.gov/articles/PMC13629197/'), 'DIB PMC link must be present');
  assert(text('dib-project.js').includes('PMID: 42824703') && text('dib-project.js').includes('PMCID: PMC13629197'), 'DIB project must display article identifiers');
  assert(/heart-bsccfs-project\.js\?v=[\w-]+/.test(projects),
    'Projects page must load a cache-versioned BS-CCFS project script');
  assert(projects.includes('heart-bsccfs-project.css?v=20261105-fig01-featured-v2'));
  assert(/v2-app\.js\?v=[\w-]+/.test(projects), 'The Projects page must use versioned v2-app.js');
  assert(projects.includes('projects-hub.css?v=20261106-project-hub-redesign1'));
  assert(/projects-hub\.js\?v=[\w-]+/.test(projects));
  assert(projects.indexOf('src="projects-hub.js') < projects.indexOf('src="v2-app.js'),
    'The Projects hub must register before the main renderer');
  const hubSource=text('projects-hub.js');
  const hubContext={window:{}};
  vm.runInNewContext(hubSource,hubContext,{filename:'projects-hub.js'});
  assert.equal(typeof hubContext.window.MRA_PROJECT_HUB_RENDER,'function',
    'The portfolio directory must expose its renderer');
  assert.equal(typeof hubContext.window.MRA_PROJECT_HUB_ACTIVATE,'function',
    'The portfolio directory must expose active search/filter controls');
  const hubMarkup=hubContext.window.MRA_PROJECT_HUB_RENDER();
  assert.equal((hubMarkup.match(/class="prh-project-card prh-project-card--/g)||[]).length,10,
    'The overview must link to all ten documented projects');
  for(const key of ['dengue-bmc-project','ckd-prediction-project','fastica-audio-project',
    'field-survey-project','dr-grading-project','heart-bsccfs-project',
    'dib-food-dataset-project','bazarbondhu-ai','ask-razu-ai-project','hcv-mice-median-project']){
    assert(hubMarkup.includes('href="#'+key+'"'), 'Missing portfolio directory link '+key);
  }
  assert(text('v2-app.js').includes('MRA_PROJECT_HUB_ACTIVATE'),
    'The main app must initialize the directory controls');
  assert(text('v2-app.js').includes('href="#projects-overview"'),
    'The sticky projects subnavigation must link to the overview');
  assert(projects.includes('hcv-project.js?v=20261106-hcv-hybrid-case1'),
    'HCV project script must be versioned and loaded');
  assert(projects.includes('hcv-project.css?v=20261106-hcv-hybrid-case1'),
    'HCV project stylesheet must be versioned and loaded');
  assert(projects.indexOf('src="hcv-project.js') < projects.indexOf('src="v2-app.js'),
    'HCV renderer must load before the main Projects renderer');
  assert(text('v2-app.js').includes("MRA_HCV_CASE()"),
    'HCV project must render in the detailed Projects list');
  assert(text('v2-app.js').includes('href="#hcv-mice-median-project"'),
    'HCV project must be in the sticky project navigation');
  const hcvJs = text('hcv-project.js');
  for(const metric of ['0.827','0.754','0.914','0.841','0.955','8 / 11']){
    assert(hcvJs.includes(metric), 'HCV project missing documented metric: '+metric);
  }
  for(const image of ['fig01-hcv-evaluation-workflow.webp','fig02-hybrid-mice-median-reconstruction.webp']){
    assert(hcvJs.includes(image), 'HCV project missing original figure asset: '+image);
  }
  assert(/dengue-bmc-project\.js\?v=[\w-]+/.test(projects));
  assert(/dengue-bmc-project\.css\?v=[\w-]+/.test(projects));
  assert(projects.indexOf('src="dengue-bmc-project.js') < projects.indexOf('src="v2-app.js'),
    'Published dengue renderer must load before the main Projects renderer');
  assert(text('v2-app.js').includes('MRA_DENGUE_CASE()'),
    'Projects must render the published dengue study');
  assert(text('v2-app.js').includes('href="#dengue-bmc-project"'),
    'Projects submenu must include the dengue study');
  assert(text('v2-app.js').includes('AI &amp; Employment · Field Survey'),
    'Projects submenu must identify the AI employment field-survey study');
  assert(text('v2-app.js').includes("esc(article.title||'Perceptions of Artificial Intelligence and Its Implications for Employment in Bangladesh')"),
    'Field survey heading must use the final official accepted article title');
  assert(projects.includes('field-survey-project.css?v=20261106-ai-official-title3'),
    'Field survey heading styling must use the current version');
  assert(projects.includes('ask-razu-project.css?v=20261106-ask-redesign6'));
  assert(projects.includes('ask-razu-project.js?v=20261106-ask-redesign6'));
  assert(projects.indexOf('src="ask-razu-project.js') < projects.indexOf('src="v2-app.js'),
    'Ask Razu portfolio renderer must load before the main Projects renderer');
  const askPage = text('ask-razu.html');
  assert(askPage.includes('ask-razu-ui.css?v=20261106-ask-redesign6'));
  assert(askPage.includes('ask-razu-ui.js?v=20261106-ask-redesign6'));
  assert(/v2-app\.js\?v=[\w-]+/.test(askPage), 'The Ask page must use versioned v2-app.js');
  assert(askPage.indexOf('src="ask-razu-ui.js') < askPage.indexOf('src="v2-app.js'),
    'Ask Razu interface renderer must load before the main application');
  assert(projects.includes('projects-subnav.css?v=20261106-projects-navigation5'));
  assert(projects.includes('projects-subnav.js?v=20261106-projects-navigation5'));
  assert(projects.indexOf('src="v2-app.js') < projects.indexOf('src="projects-subnav.js'),
    'Project submenu navigation must load after the main renderer');
  assert(text('v2-app.js').includes('data-project-jump-nav'),
    'Projects submenu must use its dedicated navigation handler');
  assert(/v2-app\.js\?v=[\w-]+/.test(text('publications.html')), 'The Publications page must use versioned v2-app.js');
  assert(projects.includes('project-research-links.css?v=20261105-soft-teal-ctas3'));
  assert(projects.includes('project-research-links.js?v=20261105-pub-doi-light-nav2'));
  for(const file of ['assets/academic/logos/vendor/doi-user.png','assets/academic/logos/contact/github.svg']){
    assert(fs.statSync(file).size>300, 'Missing or invalid project icon: '+file);
  }
  const iconDom=new JSDOM(`<!doctype html><body data-page="projects"><main id="page-content">
    <a id="doi-link" href="https://doi.org/10.1002/eng2.70575">Paper DOI</a>
    <a id="github-link" href="https://github.com/beingrazuahmed/fastica-audio-source-separation">Source code</a>
    <p><a id="inline-doi" href="https://doi.org/10.17632/fn6yhzjz83.2">Dataset DOI</a></p>
    <figure><a id="figure-link" href="https://github.com/beingrazuahmed/fastica-audio-source-separation/blob/main/figures/example.png"><img src="figure.png"></a></figure>
    <a id="other-link" href="https://data.mendeley.com/datasets/fn6yhzjz83/2">Mendeley Data V2</a>
  </main></body>`,{runScripts:'outside-only',url:'https://beingrazuahmed.github.io/projects.html'});
  iconDom.window.eval(text('project-research-links.js'));
  iconDom.window.document.dispatchEvent(new iconDom.window.Event('DOMContentLoaded'));
  const iconDoc=iconDom.window.document;
  const doi=iconDoc.querySelector('#doi-link');
  const git=iconDoc.querySelector('#github-link');
  assert.equal(doi.querySelector('img.project-link-icon--doi')?.getAttribute('src'),'assets/academic/logos/vendor/doi-user.png');
  assert.equal(git.querySelector('img.project-link-icon--github')?.getAttribute('src'),'assets/academic/logos/contact/github.svg');
  assert.equal(iconDoc.querySelector('#inline-doi').dataset.projectLinkIcon,'doi');
  assert(iconDoc.querySelector('#inline-doi').classList.contains('project-link-icon-inline'));
  assert.equal(doi.getAttribute('href'),'https://doi.org/10.1002/eng2.70575','DOI URL must not change');
  assert.equal(git.getAttribute('href'),'https://github.com/beingrazuahmed/fastica-audio-source-separation','Repository URL must not change');
  assert.equal(doi.querySelector('img').getAttribute('alt'),'','Branded icons must be decorative');
  assert.equal(doi.querySelector('img').getAttribute('aria-hidden'),'true');
  assert(!iconDoc.querySelector('#figure-link .project-link-icon'),'Figure links must not receive extra icon overlays');
  assert(!iconDoc.querySelector('#other-link .project-link-icon'),'Unrelated links must remain unchanged');
  iconDom.window.refreshProjectResearchLinks();
  assert.equal(doi.querySelectorAll('img.project-link-icon--doi').length,1,'Icon rendering must be idempotent');
  iconDom.window.close();
  assert(dib.includes('Published figures · GitHub'),'Figure attribution GitHub link must appear in data article project');
  assert(dib.includes('Dataset DOI'),'Dataset DOI action must appear in the data article project');
  console.log('PASS: '+pages.length+' HTML pages, bold owner names, APA/IEEE citations, DOI + GitHub project icon links and preserved URLs');
}
main().catch(err=>{console.error(err);process.exitCode=1;});
