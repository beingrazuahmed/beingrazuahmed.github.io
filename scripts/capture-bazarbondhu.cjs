#!/usr/bin/env node
// Actual browser captures from the checked-in BazarBondhu AI demonstration.
// Use only illustrative default data; never include real user price evidence.
'use strict';
const {chromium} = require('playwright');
const path = require('path');
const fs = require('fs');
const {pathToFileURL} = require('url');

async function main() {
  const target = path.join(__dirname, '..', 'assets', 'academic', 'projects', 'bazarbondhu');
  fs.mkdirSync(target, {recursive:true});
  const browser = await chromium.launch({headless:true, args:['--disable-dev-shm-usage']});
  try {
    const page = await browser.newPage({viewport:{width:1440,height:900},deviceScaleFactor:1, reducedMotion:'reduce'});
    await page.goto(pathToFileURL(path.join(__dirname, '..', 'bazarbondhu-ai', 'index.html')).href, {waitUntil:'load'});
    await page.locator('#budgetKpi').waitFor({state:'visible'});
    await page.screenshot({path:path.join(target,'dashboard.png'),animations:'disabled'});
    await page.locator('button[data-tab="basket"]').click();
    await page.screenshot({path:path.join(target,'grocery-planner.png'),animations:'disabled'});
    await page.locator('button[data-tab="insights"]').click();
    await page.locator('#shock').evaluate(el => { el.value = '25'; el.dispatchEvent(new Event('input', {bubbles:true})); });
    await page.screenshot({path:path.join(target,'price-scenarios.png'),animations:'disabled'});
    await page.locator('button[data-tab="assistant"]').click();
    await page.locator('#chatQuery').fill('What happens if prices increase?');
    await page.locator('#chatForm button[type="submit"]').click();
    await page.screenshot({path:path.join(target,'ai-assistant.png'),animations:'disabled'});
    const images=fs.readdirSync(target).filter(x=>x.endsWith('.png'));
    if(images.length !== 4) throw new Error('Expected four screenshots, found '+images.length);
    for (const file of images) {
      const bytes=fs.statSync(path.join(target,file)).size;
      if (bytes < 10000) throw new Error('Screenshot unexpectedly small: '+file);
      console.log(file, bytes, 'bytes');
    }
  } finally {await browser.close();}
}
main().catch(error=>{console.error(error);process.exitCode=1;});
