(()=> {
  if(document.getElementById('textSizeTrigger')) return;
  const root=document.documentElement;
  const store=window.localStorage;
  const normalize=value=>{
    const n=parseInt(value,10);
    return [90,100,110,120].includes(n)?n:100;
  };
  document.body.insertAdjacentHTML('beforeend', `
    <div class="accessibility-dock" aria-label="Reading controls">
      <button class="accessibility-fab text-size-trigger" id="textSizeTrigger" type="button" aria-label="Text size controls" aria-expanded="false" aria-controls="textSizePanel" title="Text size"><span aria-hidden="true">AA</span></button>
      <button class="accessibility-fab back-to-top" id="backToTop" type="button" aria-label="Back to top" title="Back to top" tabindex="-1" aria-hidden="true"><svg class="back-to-top-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M5 4h14M12 20V9m-5 5 5-5 5 5"/></svg></button>
    </div>
    <aside class="text-size-panel" id="textSizePanel" hidden aria-label="Text size controls">
      <div class="text-size-panel-head"><strong>Text size</strong><button type="button" class="text-size-close" id="textSizeClose" aria-label="Close text size controls">×</button></div>
      <div class="text-size-options" role="group" aria-label="Choose text size">
        <button type="button" class="text-size-option size-90" data-text-scale="90" aria-label="Small text, 90 percent">A</button>
        <button type="button" class="text-size-option size-100" data-text-scale="100" aria-label="Default text, 100 percent">A</button>
        <button type="button" class="text-size-option size-110" data-text-scale="110" aria-label="Large text, 110 percent">A</button>
        <button type="button" class="text-size-option size-120" data-text-scale="120" aria-label="Extra large text, 120 percent">A</button>
      </div>
      <div class="text-size-status"><span id="textSizePercent">100%</span><button type="button" class="text-size-reset" id="textSizeReset">Reset</button></div>
    </aside>`);

  const trigger=document.getElementById('textSizeTrigger');
  const panel=document.getElementById('textSizePanel');
  const close=document.getElementById('textSizeClose');
  const reset=document.getElementById('textSizeReset');
  const pct=document.getElementById('textSizePercent');
  const topBtn=document.getElementById('backToTop');
  const buttons=[...document.querySelectorAll('.text-size-option')];

  const apply=value=>{
    const scale=normalize(value);
    root.style.setProperty('--mra-text-scale',scale+'%');
    root.style.setProperty('--mra-text-factor',String(scale/100));
    root.dataset.textScale=String(scale);
    store.setItem('mra-text-scale',String(scale));
    if(pct) pct.textContent=scale+'%';
    buttons.forEach(btn=>btn.setAttribute('aria-pressed',String(Number(btn.dataset.textScale)===scale)));
  };
  const closePanel=()=>{panel.hidden=true;trigger.setAttribute('aria-expanded','false');};
  const openPanel=()=>{panel.hidden=false;trigger.setAttribute('aria-expanded','true');};

  trigger.addEventListener('click',e=>{e.stopPropagation();panel.hidden?openPanel():closePanel();});
  close.addEventListener('click',closePanel);
  panel.addEventListener('click',e=>e.stopPropagation());
  buttons.forEach(btn=>btn.addEventListener('click',()=>apply(btn.dataset.textScale)));
  reset.addEventListener('click',()=>apply(100));
  document.addEventListener('click',e=>{if(!panel.hidden&&!panel.contains(e.target)&&e.target!==trigger)closePanel();});
  document.addEventListener('keydown',e=>{if(e.key==='Escape')closePanel();});

  const updateTop=()=>{
    const show=window.scrollY>520;
    topBtn.classList.toggle('is-visible',show);
    topBtn.tabIndex=show?0:-1;
    topBtn.setAttribute('aria-hidden',String(!show));
  };
  topBtn.addEventListener('click',event=>{
    const reduced=root.dataset.motion==='reduced'||window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if(event.detail===0){
      const target=document.querySelector('main h1')||document.querySelector('main');
      if(target){
        const hadTabIndex=target.hasAttribute('tabindex');
        if(!hadTabIndex)target.setAttribute('tabindex','-1');
        target.focus({preventScroll:true});
        if(!hadTabIndex)target.addEventListener('blur',()=>target.removeAttribute('tabindex'),{once:true});
      }
    }
    window.scrollTo({top:0,behavior:reduced?'auto':'smooth'});
  });
  window.addEventListener('scroll',updateTop,{passive:true});

  apply(store.getItem('mra-text-scale')||100);
  updateTop();
})();
