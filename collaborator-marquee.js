/* Homepage collaborator showcase · progressively enhances the existing network preview.
 * All names, affiliations, portraits, and routes come from the public Network data.
 * The original static preview remains intact if this enhancement cannot initialize.
 */
(function(){
  'use strict';
  if(document.body.dataset.page!=='home')return;
  const staticGrid=document.querySelector('.home-network-preview');
  const staticSecondary=document.querySelector('.home-network-secondary');
  if(!staticGrid||!staticSecondary)return;

  const data=window.MRA_V2||{};
  const source=Array.isArray(data.people)?data.people:[];
  // Keep the exact source order used by the Network page: guidance and advisors,
  // international collaborators, departmental seniors, peers, then juniors.
  // No hand-picked ranking: a change to the Network directory flows through here.
  const seen=new Set();
  const people=source.filter(p=>{
    if(!p||!p.id||seen.has(p.id)||p.id==='rezwan-babu'
       ||String(p.name||'').trim().toLowerCase()==='rezwan babu')return false;
    seen.add(p.id);
    return true;
  });
  if(people.length<5)return;

  const groupLabels={
    'Academic Guidance & Advisors':'Academic guidance & advisors',
    'International Research Collaborators':'International collaboration',
    'Departmental Seniors & Senior Collaborators':'Senior collaborators',
    'Peer & Batchmate Research Collaborators':'Peer collaborators',
    'Junior Collaborators & Mentees':'Junior collaborators & mentees'
  };
  const groupNames=[...new Set(people.map(p=>p.group).filter(Boolean))];

  const escapeHtml=value=>String(value==null?'':value).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const institution=value=>{
    const s=String(value||'');
    if(s.includes('Pabna University of Science and Technology'))return 'Pabna University of Science and Technology';
    if(s.includes('Sunway University'))return 'Sunway University, Malaysia';
    if(s.includes('Xavier University of Louisiana'))return 'Xavier University of Louisiana, USA';
    if(s.includes('University of Rajshahi'))return 'University of Rajshahi';
    if(s.includes('Metropolitan University'))return 'Metropolitan University';
    if(s.includes('Khulna University'))return 'Khulna University';
    return s.split(',').slice(0,2).join(',').trim()||'Research collaboration';
  };
  const initials=name=>{
    const words=String(name||'').replace(/\b(?:Prof|Dr|Md|Muhammad)\.?/gi,'').trim().split(/\s+/).filter(Boolean);
    return (words.length>1?words[0][0]+words[words.length-1][0]:(words[0]||'R').slice(0,2)).toUpperCase();
  };
  const isCoauthor=p=>p.id==='shamim-reza'||(p.roles||[]).some(r=>/co-author/i.test(String(r)));
  const relationship=p=>{
    if(isCoauthor(p))return p.id==='shamim-reza'?'Research co-author · Supervisor':'Research co-author';
    if((p.roles||[]).some(r=>/research collaborator/i.test(String(r))))return 'Research collaborator';
    if((p.roles||[]).some(r=>/mentor|academic guidance/i.test(String(r))))return 'Academic mentor';
    return (p.roles||[])[0]||'Academic collaborator';
  };
  const card=(p,duplicate)=>{
    const name=escapeHtml(p.name||'Research collaborator');
    const href=/^network-[a-z0-9-]+\.html$/.test(p.profilePage||'')?p.profilePage:'network.html';
    const pos=/^\d{1,3}%\s+\d{1,3}%$/.test(p.cardPortraitPosition||'')?' style="object-position:'+escapeHtml(p.cardPortraitPosition)+'"':'';
    const image=/^assets\/[a-z0-9/_.-]+\.(?:jpe?g|png|webp)(?:\?[\w=-]+)?$/i.test(p.portrait||'')
      ?'<img src="'+escapeHtml(p.portrait)+'" alt="" loading="lazy" decoding="async"'+pos+'>':'';
    const group=String(p.group||'Academic network');
    const groupText=groupLabels[group]||group;
    const role=relationship(p);
    return '<a class="mra-collab-card" href="'+escapeHtml(href)+'" aria-label="View research network profile of '+name+'"'+(duplicate?' tabindex="-1"':'')+'>'+
      '<span class="mra-collab-card-top"><span title="'+escapeHtml(group)+'">'+escapeHtml(groupText)+'</span><span class="mra-collab-card-arrow" aria-hidden="true">↗</span></span>'+
      '<span class="mra-collab-card-person"><span class="mra-collab-avatar"><span class="mra-collab-initials" aria-hidden="true">'+escapeHtml(initials(p.name))+'</span>'+image+'</span>'+
      '<span class="mra-collab-person-copy"><strong>'+name+'</strong><span>'+escapeHtml(role)+'</span></span></span>'+
      '<span class="mra-collab-card-bottom"><span class="mra-collab-institution">'+escapeHtml(institution(p.affiliation))+'</span><span class="mra-collab-card-open">Profile <span aria-hidden="true">↗</span></span></span>'+
      '</a>';
  };
  const duration=Math.max(64,Math.round(people.length*5.8));
  const html='<div class="mra-collab" id="research-collaborators" aria-labelledby="mra-collab-heading">'+
    '<div class="mra-collab-heading">'+
      '<div class="mra-collab-heading-main"><span class="mra-collab-eyebrow"><span class="mra-collab-eyebrow-line" aria-hidden="true"></span>PEOPLE BEHIND THE WORK</span>'+
      '<h3 id="mra-collab-heading">Research Collaborators <span>&amp;</span> Co-authors</h3>'+
      '<p>Mentors, research partners and co-authors presented in the same academic order as the full Network directory.</p>'+
      '<div class="mra-collab-group-order" aria-label="Network section order">'+groupNames.map((group,i)=>(i?'<span class="mra-collab-separator" aria-hidden="true">/</span>':'')+'<span>'+escapeHtml(groupLabels[group]||group)+'</span>').join('')+'</div></div>'+
      '<div class="mra-collab-actions"><div class="mra-collab-counter"><strong>'+people.length+'</strong><span>network profiles</span></div>'+
      '<button type="button" class="mra-collab-motion" data-collab-toggle aria-pressed="false" aria-label="Pause collaborator marquee"><span aria-hidden="true" data-collab-icon>Ⅱ</span><span data-collab-label>Pause motion</span></button></div>'+
    '</div>'+
    '<div class="mra-collab-viewport" role="region" tabindex="0" aria-label="Research co-authors and collaborators; focus or hover to pause scrolling, or swipe on mobile">'+
      '<div class="mra-collab-track" style="--mra-collab-duration:'+duration+'s">'+
        '<div class="mra-collab-set">'+people.map(p=>card(p,false)).join('')+'</div>'+
        '<div class="mra-collab-set" aria-hidden="true" inert>'+people.map(p=>card(p,true)).join('')+'</div>'+
      '</div>'+
    '</div>'+
    '<div class="mra-collab-bottom"><span>Order and grouping match the Network directory. Co-authorship, mentorship and research collaboration remain distinct.</span>'+
      '<span class="mra-collab-touch-hint">Swipe to explore profiles</span>'+
      '<a href="network.html">Explore complete research network <span aria-hidden="true">↗</span></a></div>'+
  '</div>';

  const host=document.createElement('div');
  host.innerHTML=html;
  const showcase=host.firstElementChild;
  if(!showcase)return;
  staticGrid.replaceWith(showcase);
  staticSecondary.remove();

  const button=showcase.querySelector('[data-collab-toggle]');
  function setPaused(paused){
    showcase.classList.toggle('is-paused',paused);
    button.setAttribute('aria-pressed',String(paused));
    button.setAttribute('aria-label',paused?'Resume collaborator marquee':'Pause collaborator marquee');
    showcase.querySelector('[data-collab-label]').textContent=paused?'Resume motion':'Pause motion';
    showcase.querySelector('[data-collab-icon]').textContent=paused?'▶':'Ⅱ';
  }
  button.addEventListener('click',()=>setPaused(!showcase.classList.contains('is-paused')));
  showcase.querySelectorAll('.mra-collab-avatar img').forEach(img=>{
    const hideBroken=()=>{img.hidden=true;img.closest('.mra-collab-avatar')?.classList.add('is-fallback');};
    img.addEventListener('error',hideBroken,{once:true});
    if(img.complete&&!img.naturalWidth)hideBroken();
  });
  if('IntersectionObserver' in window){
    const observer=new IntersectionObserver(entries=>{
      showcase.classList.toggle('is-offscreen',!entries.some(entry=>entry.isIntersecting));
    },{threshold:0.01});
    observer.observe(showcase);
  }
})();
