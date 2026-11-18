"use strict";
module.exports = function buildAcademicCvPdf(D){
 "use strict";
 const PAGE_W=595.28,PAGE_H=841.89,LEFT=46,RIGHT=549,WIDTH=RIGHT-LEFT,FOOT_Y=40;
 const C={navy:[.075,.16,.275],ink:[.12,.18,.26],blue:[.10,.38,.61],light:[.92,.953,.976],muted:[.38,.43,.50],border:[.79,.84,.88],white:[1,1,1],teal:[.14,.51,.52],pale:[.975,.982,.99]};
 const pdfSafe=v=>String(v??"").normalize("NFKD").replace(/[\u0300-\u036f]/g,"").replace(/[\u2010-\u2015\u2212]/g,"-").replace(/[\u2018\u2019]/g,"'").replace(/[\u201c\u201d]/g,'"').replace(/[\u00b7]/g,"|").replace(/[\u00d7]/g,"x").replace(/[\u00b1]/g,"+/-").replace(/[^\x20-\x7e]/g,"");
 const pdfEsc=v=>pdfSafe(v).replace(/\\/g,"\\\\").replace(/\(/g,"\\(").replace(/\)/g,"\\)");
 const f=n=>Number(n).toFixed(2);
 const col=c=>c.map(f).join(" ");
 const parts=[],P=[];let page=null,y=0;
 const date=pdfSafe(D.lastUpdated||"18 November 2026");
 function rect(x,b,w,h,fill){page.ops.push(`${col(fill)} rg ${f(x)} ${f(b)} ${f(w)} ${f(h)} re f`)}
 function line(x1,y1,x2,y2,color=C.border,weight=.75){page.ops.push(`${col(color)} RG ${f(weight)} w ${f(x1)} ${f(y1)} m ${f(x2)} ${f(y2)} l S`)}
 function width(s,size=9,bold=false){let u=0;for(const ch of pdfSafe(s)){if(/[ .,:'!|ilI1]/.test(ch))u+=.25;else if(/[MW@%]/.test(ch))u+=.79;else if(/[wQO]/.test(ch))u+=.62;else if(/[ABCDEFGHKNPRSTUVXYZ]/.test(ch))u+=.61;else u+=bold?.55:.51}return u*size}
 function text(x,b,s,size=9,font="F1",color=C.ink){page.ops.push(`${col(color)} rg BT /${font} ${f(size)} Tf 1 0 0 1 ${f(x)} ${f(b)} Tm (${pdfEsc(s)}) Tj ET`)}
 function link(x,b,label,url,size=8.6){const tx=pdfSafe(label),w=width(tx,size,true);text(x,b,tx,size,"F2",C.blue);line(x,b-2,x+w,b-2,C.blue,.45);if(/^https?:\/\//i.test(url||"")||/^mailto:/i.test(url||""))page.links.push({rect:[x-1,b-3,x+w+2,b+size+3],url})}
 function newPage(first=false){page={ops:[],links:[],lower:PAGE_H};P.push(page);if(first){rect(0,PAGE_H-139,PAGE_W,139,C.navy);rect(0,PAGE_H-142,PAGE_W,3,C.teal);text(LEFT,803,"MD. RAZU AHMED",25,"F2",C.white);text(LEFT,782,"STATISTICIAN  /  DATA SCIENTIST  /  RESEARCHER  /  PEER REVIEWER",8.7,"F2",[.79,.88,.96]);text(LEFT,757,"Pabna University of Science and Technology  |  Bangladesh",8.9,"F1",C.white);text(LEFT,739,"razuahmed038@gmail.com  |  beingrazuahmed.github.io",8.8,"F1",[.79,.89,.97]);y=671;}else{rect(0,PAGE_H-64,PAGE_W,64,C.navy);rect(0,PAGE_H-67,PAGE_W,3,C.teal);text(LEFT,804,"MD. RAZU AHMED",16,"F2",C.white);text(LEFT,788,"ACADEMIC CURRICULUM VITAE",8.3,"F2",[.80,.89,.98]);y=747;}}
 function space(h=8){y-=h;page.lower=Math.min(page.lower,y)}
 function ensure(h){if(y-h<64)newPage(false)}
 function section(name,caption=""){ensure(37);space(9);text(LEFT,y,pdfSafe(name).toUpperCase(),10.4,"F2",C.navy);if(caption){text(RIGHT-width(caption,8),y+1,caption,8,"F1",C.muted)}line(LEFT,y-7,RIGHT,y-7,C.border,.8);space(24)}
 function tokens(s){return pdfSafe(s).split(/\s+/).filter(Boolean)}
 function drawWrapped(s,options={}){const x=options.x??LEFT,fullWidth=options.width??(RIGHT-x),size=options.size??9.05,lead=options.leading??13.4,gap=options.gap??3,font=options.bold?"F2":"F1",color=options.color??C.ink;
 let words=tokens(s),rows=[],current="",sum=0;for(const word of words){const w=width(word,size,options.bold),extra=current?width(" ",size)+w:w;if(current&&sum+extra>fullWidth){rows.push(current);current=word;sum=w}else{current+=(current?" ":"")+word;sum+=extra}}if(current)rows.push(current);
 for(const r of rows){ensure(lead+2);text(x,y,r,size,font,color);space(lead);}space(gap);return rows.length}
 function drawRichText(s,options={}){const x=options.x??LEFT,fullWidth=options.width??(RIGHT-x),size=options.size??8.9,lead=options.leading??13.4;
 const pieces=pdfSafe(s).split(/(Ahmed, M\. R\.)/g).filter(Boolean),words=[];for(const piece of pieces){const isOwn=piece==="Ahmed, M. R.";for(const w of piece.match(/\S+/g)||[])words.push({text:w,bold:isOwn});}
 const lines=[];let row=[],used=0;for(const word of words){const next=width(word.text,size,word.bold),sp=row.length?width(" ",size):0;if(row.length&&used+sp+next>fullWidth){lines.push(row);row=[];used=0}row.push(word);used+=sp+next}if(row.length)lines.push(row);
 for(const items of lines){ensure(lead+2);let cx=x;for(let i=0;i<items.length;i++){if(i)cx+=width(" ",size);text(cx,y,items[i].text,size,items[i].bold?"F2":"F1",options.color||C.ink);cx+=width(items[i].text,size,items[i].bold)}space(lead);}space(options.gap??2);return lines.length}
 function row(title,sub="",description=""){ensure(36);drawWrapped(title,{size:9.65,leading:12.9,bold:true,gap:1});if(sub)drawWrapped(sub,{size:8.55,leading:12.1,color:C.muted,gap:1});if(description)drawWrapped(description,{size:8.65,leading:12.5,color:C.ink,gap:1});space(7)}
 function tag(x,b,w,num,label){rect(x,b,w,47,C.light);rect(x,b,w,2,C.teal);text(x+12,b+23,pdfSafe(num),17.2,"F2",C.navy);text(x+12,b+9,pdfSafe(label).toUpperCase(),7.3,"F2",C.muted)}
 function twoCols(leftTitle,leftText,rightTitle,rightText){const gap=18,w=(WIDTH-gap)/2;const start=y;let leftY=start,rightY=start;function colBlock(x,title,body){let cur=start;text(x,cur,title.toUpperCase(),8.3,"F2",C.blue);cur-=17;const ww=tokens(body);let words="",wid=0;for(const word of ww){let a=width(word,8.5);if(words&&wid+width(" ",8.5)+a>w){text(x,cur,words,8.5,"F1",C.ink);cur-=12;words=word;wid=a}else{words+=(words?" ":"")+word;wid+=(wid?width(" ",8.5):0)+a}}if(words){text(x,cur,words,8.5,"F1",C.ink);cur-=12}return cur}leftY=colBlock(LEFT,leftTitle,leftText);rightY=colBlock(LEFT+w+gap,rightTitle,rightText);y=Math.min(leftY,rightY)-2;page.lower=Math.min(page.lower,y)}
 // Page 1: academic identity and qualifications.
 newPage(true);
 const published=(D.publications||[]).filter(x=>!/(accepted|forthcoming)/i.test(x.status||""));
 const accepted=(D.publications||[]).filter(x=>/(accepted|forthcoming)/i.test(x.status||""));
 const total=(D.service||[]).reduce((n,x)=>n+Number(x.reviews||0),0);
 const conferenceCount=(D.quickProfile||[]).find(x=>x.label==="Conference Contributions")?.value||"8";
 const g=7,tW=(WIDTH-3*g)/4;
 tag(LEFT,y-46,tW,published.length,"published articles");tag(LEFT+tW+g,y-46,tW,accepted.length,"accepted article");tag(LEFT+(tW+g)*2,y-46,tW,total,"peer reviews");tag(LEFT+(tW+g)*3,y-46,tW,conferenceCount,"conference work");
 space(74);
 section("Research profile");
 drawWrapped("Statistician and interdisciplinary researcher integrating rigorous statistical analysis with machine learning, interpretable AI, public-health forecasting, medical imaging and reproducible computational research. Emphasis on leakage-aware validation, transparent reporting and research with practical decision value.",{size:9.15,leading:13.4,gap:4});
 section("Education");
 for(const x of (D.education||[]).slice(0,2))row(x.degree+" | "+x.institution,x.year||"",x.detail||"");
 section("Research appointments");
 const lab=(D.experience||[]).find(x=>/dslr/i.test(x.organization||""));
 if(lab){row("Research Assistant | "+(lab.organization||"DSLR Lab"),"Pabna University of Science and Technology  |  May 2023 - Present",lab.description||"");let dates=(lab.appointments||[]).map(a=>`${a.title} (${a.startLabel||a.startDate} - ${a.endLabel||a.endDate||"Present"})`).join("; ");if(dates)drawWrapped(dates,{size:8.25,leading:11.7,color:C.muted,gap:6})}
 const ircb=(D.experience||[]).find(x=>/ircb/i.test(x.id||""));
 if(ircb)row("Research Assistant | International Research Collaboration Bangladesh",ircb.period||"20 April - 3 July 2026","Research coordination, methodological support, research data management and manuscript preparation.");
 section("Research focus");
 twoCols("Methods","Statistical learning; machine and deep learning; multivariate analysis; time-series forecasting; explainable AI; causal inference; leak-safe model evaluation.","Applications","Public health; biomedical data science; infectious-disease surveillance; medical imaging; computer vision; bioinformatics; intelligent food systems.");
 section("Computational skills");
 twoCols("Programming & modelling","Python, R, pandas, NumPy, scikit-learn, XGBoost, TensorFlow/Keras, SHAP, Git, Jupyter.","Statistics & communication","SPSS, Minitab, regression, sampling, study design, reproducible analysis, publication-quality reporting.");
 // Page 2: bibliographic output
 newPage(false);
 section("Peer-reviewed journal articles",`${published.length} published / online`);
 published.forEach((p,i)=>{ensure(87);text(LEFT,y,`${i+1}`.padStart(2,"0"),11,"F2",C.blue);const tx=LEFT+28;const citation=(p.citationAPA||`${p.title}. ${p.venue}.`).replace(/https?:\/\/doi\.org\/[^\s]+/g,"").trim();drawRichText(citation,{x:tx,width:RIGHT-tx,size:8.86,leading:13.0,gap:2});if(p.doi){const label="DOI: "+p.doi.replace("https://doi.org/","");ensure(17);link(tx,y,label,p.doi,8.0);space(17)}if(p.role){text(tx,y,"Contribution: "+p.role,7.8,"F3",C.muted);space(17)}line(LEFT+28,y+7,RIGHT,y+7,C.border,.5);space(7)});
 section("Accepted / forthcoming",`${accepted.length} article`);
 for(const a of accepted){row(a.title,a.venue+" | "+(a.status||"Accepted / Forthcoming")+" | "+(a.role||""),"Not counted among published articles until publication.");}
 section("Open research dataset");
 for(const x of D.datasets||[]){row(x.title,`${x.repository||"Mendeley Data"}  |  Version ${x.version||"2"}  |  ${x.license||"CC BY 4.0"}`,"720 original images; 1,728 processed images; 6,297 annotated instances; 16 food classes.");if(x.doi){ensure(17);link(LEFT,y,"Dataset DOI: "+x.doi.replace("https://doi.org/",""),x.doi,8.3);space(22)}}
 section("Research in progress");
 drawWrapped(`${(D.manuscripts||[]).length} manuscripts are recorded in the portfolio's editorial-process category, and ${(D.ongoing||[]).length} studies are in preparation. Editorial-process manuscripts are not represented as published or accepted research.`,{size:8.9,leading:13.3,gap:4});
 // Page 3: editorial service and achievements
 newPage(false);
 section("Invited peer review & scholarly service",`${total} completed reviews`);
 for(const j of D.service||[]){ensure(43);const x=LEFT+28;text(LEFT,y,String(j.reviews).padStart(2,"0"),13.5,"F2",C.blue);const textTitle=pdfSafe(j.journal||"Journal");const titleWidth=RIGHT-x;const sz=width(textTitle,9.1,true)>titleWidth?8.3:9.1;text(x,y+1,textTitle,sz,"F2",C.ink);space(15);text(x,y,j.publisher||"Academic journal",8.15,"F1",C.muted);if(j.evidenceHref){let url=j.evidenceHref;if(!/^https?:\/\//.test(url))url="https://beingrazuahmed.github.io/"+url;link(RIGHT-width("Review certificate",8.0,true),y,"Review certificate",url,8.0)}space(15);line(LEFT,y+4,RIGHT,y+4,C.border,.5);space(5)}
 section("Research recognition");
 const award=(D.awards||[]).find(x=>/Journal of Statistical Research.*Award/i.test(x.title||""));
 if(award){row(award.title,award.issuer||"",award.date||"");if(award.evidenceHref){link(LEFT,y,"Award certificate", "https://beingrazuahmed.github.io/"+award.evidenceHref,8.3);space(22)}}
 section("Research training and scholarly practice");
 const training=(D.training||[]).filter(x=>/peer review|publication ethics/i.test(x.title||"")).slice(0,4);
 training.forEach(t=>{ensure(30);text(LEFT,y,t.title,8.8,"F2",C.ink);space(13);drawWrapped(`${t.provider} | ${t.date}`,{size:8.1,leading:11.1,color:C.muted,gap:4});});
 section("Professional academic profiles");
 const linkNames=["ORCID","Google Scholar","Scopus","Web of Science","ResearchGate","GitHub"];
 const profiles=linkNames.map(n=>(D.profiles||[]).find(p=>p.label===n)).filter(Boolean);
 const cw=(WIDTH-18)/2,ix=[LEFT,LEFT+cw+18],start=y;
 for(let k=0;k<profiles.length;k++){const p=profiles[k];const x=ix[k%2],rowi=Math.floor(k/2),base=start-rowi*22;link(x,base,p.label,p.url,8.9)}y=start-Math.ceil(profiles.length/2)*22-14;
 section("Portfolio & contact");
 link(LEFT,y,"beingrazuahmed.github.io","https://beingrazuahmed.github.io/",9.1);
 link(LEFT+230,y,"Email: razuahmed038@gmail.com","mailto:razuahmed038@gmail.com",8.7);
 space(27);
 drawWrapped("Prepared from the publicly documented portfolio record. Source dates and manuscript statuses reflect the latest verified portfolio update. Confidential reviewer reports, editorial correspondence and manuscript identifiers are excluded.",{size:8.2,leading:12.2,color:C.muted,gap:2});
 // Headers, footers, page numbering
 for(let i=0;i<P.length;i++){const page=P[i];rect(LEFT,FOOT_Y+7,WIDTH,0.55,C.border);text(LEFT,FOOT_Y-6,`MD. RAZU AHMED  |  ACADEMIC CV  |  ${date}`,7.65,"F1",C.muted);const label=`${i+1} / ${P.length}`;text(RIGHT-width(label,7.65),FOOT_Y-6,label,7.65,"F2",C.muted)}
 const objs=[null,null,
 "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>",
 "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>",
 "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Oblique >>"];
 const newObj=s=>(objs.push(s),objs.length);
 const pageRefs=[];
 for(const p of P){const stream=p.ops.join("\n")+"\n";const contentId=newObj(`<< /Length ${stream.length} >>\nstream\n${stream}endstream`);const annotations=p.links.map(a=>newObj(`<< /Type /Annot /Subtype /Link /Rect [${a.rect.map(f).join(" ")}] /Border [0 0 0] /A << /S /URI /URI (${pdfEsc(a.url)}) >> >>`));const pageObj=`<< /Type /Page /Parent 2 0 R /MediaBox [0 0 ${f(PAGE_W)} ${f(PAGE_H)}] /Resources << /Font << /F1 3 0 R /F2 4 0 R /F3 5 0 R >> >> /Contents ${contentId} 0 R ${annotations.length?`/Annots [${annotations.map(i=>`${i} 0 R`).join(" ")}]`:""} >>`;pageRefs.push(newObj(pageObj))}
 objs[0]="<< /Type /Catalog /Pages 2 0 R /PageLayout /OneColumn >>";
 objs[1]=`<< /Type /Pages /Count ${P.length} /Kids [${pageRefs.map(id=>id+" 0 R").join(" ")}] >>`;
 const infoId=newObj(`<< /Title (${pdfEsc("Academic Curriculum Vitae - Md. Razu Ahmed")}) /Author (Md. Razu Ahmed) /Subject (Research academic CV - published portfolio record) /Creator (MRA Portfolio CV Generator) >>`);
 let pdf="%PDF-1.4\n%MRA-CV\n",offsets=[0];
 for(let i=0;i<objs.length;i++){offsets.push(pdf.length);pdf+=`${i+1} 0 obj\n${objs[i]}\nendobj\n`}
 const xref=pdf.length;pdf+=`xref\n0 ${objs.length+1}\n0000000000 65535 f \n`;for(let i=1;i<offsets.length;i++)pdf+=String(offsets[i]).padStart(10,"0")+" 00000 n \n";
 pdf+=`trailer\n<< /Size ${objs.length+1} /Root 1 0 R /Info ${infoId} 0 R >>\nstartxref\n${xref}\n%%EOF\n`;
 if(/[\u0080-\uffff]/.test(pdf)||!pdf.startsWith("%PDF-1.4")||P.length<3||P.length>6)throw Error("Unexpected PDF encoding or page count "+P.length);
 return {pdf,stats:{pages:P.length,bytes:pdf.length,annotationCount:P.reduce((sum,p)=>sum+p.links.length,0),pageLowerPositions:P.map(x=>x.lower),published:published.length,accepted:accepted.length,reviews:total,manuscripts:(D.manuscripts||[]).length,date}};
};
