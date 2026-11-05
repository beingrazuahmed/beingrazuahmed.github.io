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
      assert(markup.includes(`v2-app.js?v=${version}`),`Stale app version in ${file}`);
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

  vm.runInNewContext(text('dib-project.js'),dataContext,{filename:'dib-project.js'});
  const dib=dataContext.window.MRA_DIB_CASE();
  assert(dib.includes('Cite the peer-reviewed Data in Brief article'));
  assert(dib.includes('citation-format-apa')&&dib.includes('citation-format-ieee'));
  assert(dib.includes('10.1016/j.dib.2026.113262'));
  assert(dib.includes('10.17632/fn6yhzjz83.2'));

  const projects=text('projects.html');
  assert(projects.includes('published-project-citations.css'));
  assert(projects.includes('dib-project.js?v=20261105-owner-citations1'));
  console.log('PASS: '+pages.length+' HTML pages, visible name emphasis, unaltered metadata/links, dynamic DOM and official citations');
}
main().catch(err=>{console.error(err);process.exitCode=1;});
