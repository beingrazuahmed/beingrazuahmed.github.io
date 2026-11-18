#!/usr/bin/env node
'use strict';
const fs=require('node:fs');
const path=require('node:path');
const vm=require('node:vm');
const root=path.resolve(__dirname,'..');
const context={window:{}};
for(const file of ['data.js','extra-data.js','coursework-data.js','v2-data.js']){
  vm.runInNewContext(fs.readFileSync(path.join(root,file),'utf8'),context,{filename:file});
}
const build=require('./academic-cv-pdf-core.cjs');
const {pdf,stats}=build(context.window.MRA_V2);
const output=path.join(root,'documents','Md. Razu Ahmed CV.pdf');
fs.mkdirSync(path.dirname(output),{recursive:true});
fs.writeFileSync(output,pdf,'latin1');
console.log('Academic CV created:',output,JSON.stringify(stats));
