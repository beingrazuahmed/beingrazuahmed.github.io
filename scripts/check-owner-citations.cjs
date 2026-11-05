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
      const appVersion=['projects.html','publications.html'].includes(file)?'20261105-heart-case-study-v1':version;
      assert(markup.includes(`v2-app.js?v=${appVersion}`),`Stale app version in ${file}`);
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
  for(const [id,doi] of [
    ['fastica','10.1002/eng2.70575'],
    ['ckd','10.3329/ijss.v25i2.85732'],
    ['dib','10.1016/j.dib.2026.113262']
  ]){
    const p=pubs.find(x=>x.id===id);
    assert(p&&p.citationAPA&&p.citationIEEE,`Missing canonical published citations for ${id}`);
    assert(p.citationAPA.includes(doi) && p.citationIEEE.includes(doi),
      `Citation DOI mismatch for ${id}`);
  }

  const app=text('v2-app.js');
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
  assert(heartHtml.includes('Submitted to PLOS ONE · 2026'),'Heart manuscript must be marked submitted, not published');
  assert(heartHtml.includes('PLOS ONE')&&!heartHtml.includes('published article · DOI'),
    'Submission must not be represented as a peer-reviewed publication DOI');
  for(const id of ['heart-bsccfs-project','heart-bsccfs-overview','heart-bsccfs-method','heart-bsccfs-figures','heart-bsccfs-record']){
    assert(heartHtml.includes('id="'+id+'"'), 'Missing heart project section anchor '+id);
  }
  const heartFigs=[...heartHtml.matchAll(/src="([^"]+\.webp)"/g)]
    .map(x=>x[1]).filter(x=>x.startsWith('assets/academic/projects/bs-ccfs-heart-disease/'));
  const uniqueHeartFigs=[...new Set(heartFigs)];
  assert.equal(uniqueHeartFigs.length,11,'The heart gallery must reference 11 distinct original panels');
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
  assert(projects.includes('dib-project.js?v=20261105-doi-github-icons1'));
  assert(projects.includes('heart-bsccfs-project.js?v=20261105-heart-case-study-v1'));
  assert(projects.includes('heart-bsccfs-project.css?v=20261105-heart-case-study-v1'));
  assert(projects.includes('v2-app.js?v=20261105-heart-case-study-v1'));
  assert(text('publications.html').includes('v2-app.js?v=20261105-heart-case-study-v1'));
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
