(()=> {
  'use strict';
  // Standalone pages (Search, CV, Privacy) use this controller instead of
  // v2-app.js. Never inject duplicate controls when the main app owns them.
  if(document.getElementById('textSizeTrigger'))return;
  const root=document.documentElement;
  const store={
    getItem:key=>{try{return window.localStorage?.getItem(key)??null;}catch{return null;}},
    setItem:(key,value)=>{try{window.localStorage?.setItem(key,String(value));}catch{}}
  };
  const normalize=value=>{
    const n=parseInt(value,10);
    return [90,100,110,120].includes(n)?n:100;
  };
  const navActions=document.querySelector('.nav-actions');
  if(navActions&&!document.getElementById('settingsBtn')){
    navActions.insertAdjacentHTML('beforeend',
      '<button class="icon-btn" id="settingsBtn" type="button" aria-label="Appearance settings" aria-controls="settings" aria-expanded="false" title="Appearance settings">◐</button>');
  }
  document.body.insertAdjacentHTML('beforeend', `
    <aside class="settings appearance-panel" id="settings" hidden aria-label="Appearance settings">
      <div class="appearance-panel-head"><div><span class="appearance-eyebrow">Interface</span><strong>Appearance</strong><p>Choose a color system, display mode, text size and motion level.</p></div><button class="appearance-close" id="appearanceClose" type="button" aria-label="Close appearance settings">×</button></div>
      <div class="appearance-group"><label for="themeSel">Color theme</label><select id="themeSel"><option value="scientific">Scientific Horizon</option><option value="executive">Executive Intelligence</option><option value="quantum">Quantum Research</option><option value="mono">Minimal Monochrome</option></select></div>
      <div class="appearance-group"><span class="appearance-label">Display mode</span><div class="mode-segmented" id="modeSegmented" role="group" aria-label="Display mode"><button type="button" data-mode-choice="system" aria-pressed="false"><span class="mode-icon">◐</span><span>System</span></button><button type="button" data-mode-choice="light" aria-pressed="false"><span class="mode-icon">☀</span><span>Light</span></button><button type="button" data-mode-choice="dark" aria-pressed="false"><span class="mode-icon">◒</span><span>Dark</span></button></div><select id="modeSel" class="appearance-native-select" aria-label="Display mode fallback"><option value="system">System</option><option value="light">Light</option><option value="dark">Dark</option></select><p class="appearance-mode-status" id="modeStatus" aria-live="polite"></p></div>
      <div class="appearance-group appearance-grid-2"><div><label for="textSel">Text size</label><select id="textSel"><option value="90">90%</option><option value="100">100%</option><option value="110">110%</option><option value="120">120%</option></select></div><div><label for="motionSel">Motion</label><select id="motionSel"><option value="balanced">Balanced</option><option value="reduced">Reduced</option></select></div></div>
      <p class="tiny appearance-shortcuts">Shortcut: <span class="kbd">T</span> appearance · <span class="kbd">Esc</span> close</p>
    </aside>
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
  const $=selector=>document.querySelector(selector);
  const $$=selector=>[...document.querySelectorAll(selector)];
  const theme=$('#themeSel'),mode=$('#modeSel'),motion=$('#motionSel');
  const appearance=$('#settings'),appearanceButton=$('#settingsBtn');
  const trigger=$('#textSizeTrigger'),panel=$('#textSizePanel');
  const topBtn=$('#backToTop');
  const validTheme=new Set(['scientific','executive','quantum','mono']);
  const validMode=new Set(['system','light','dark']);
  const validMotion=new Set(['balanced','reduced']);
  const system=window.matchMedia('(prefers-color-scheme: dark)');
  const applyScale=value=>{
    const scale=normalize(value);
    root.style.setProperty('--mra-text-scale',scale+'%');
    root.style.setProperty('--mra-text-factor',String(scale/100));
    root.dataset.textScale=String(scale);
    store.setItem('mra-text-scale',String(scale));
    if($('#textSel'))$('#textSel').value=String(scale);
    $('#textSizePercent').textContent=scale+'%';
    $$('.text-size-option').forEach(btn=>btn.setAttribute('aria-pressed',String(Number(btn.dataset.textScale)===scale)));
  };
  const applyAppearance=()=>{
    const color=validTheme.has(store.getItem('mra-theme'))?store.getItem('mra-theme'):'scientific';
    const choice=validMode.has(store.getItem('mra-mode'))?store.getItem('mra-mode'):'system';
    const move=validMotion.has(store.getItem('mra-motion'))?store.getItem('mra-motion'):'balanced';
    const resolved=choice==='system'?(system.matches?'dark':'light'):choice;
    root.dataset.theme=color;
    root.dataset.modeChoice=choice;
    root.dataset.mode=resolved;
    root.dataset.motion=move;
    root.style.colorScheme=resolved;
    theme.value=color;mode.value=choice;motion.value=move;
    $$('#modeSegmented [data-mode-choice]').forEach(button=>{
      const selected=button.dataset.modeChoice===choice;
      button.classList.toggle('is-active',selected);
      button.setAttribute('aria-pressed',String(selected));
    });
    $('#modeStatus').textContent=choice==='system'?'System is currently using '+resolved+' mode.':resolved[0].toUpperCase()+resolved.slice(1)+' mode is active.';
    applyScale(store.getItem('mra-text-scale') || (store.getItem('mra-text')==='large'?'110':'100'));
    requestAnimationFrame(()=>{
      let meta=document.querySelector('meta[name="theme-color"]');
      if(!meta){meta=document.createElement('meta');meta.name='theme-color';document.head.appendChild(meta);}
      meta.content=getComputedStyle(root).getPropertyValue('--bg').trim()||(resolved==='dark'?'#06111d':'#f6fbff');
    });
  };
  theme.addEventListener('change',()=>{store.setItem('mra-theme',theme.value);applyAppearance();});
  mode.addEventListener('change',()=>{store.setItem('mra-mode',mode.value);applyAppearance();});
  motion.addEventListener('change',()=>{store.setItem('mra-motion',motion.value);applyAppearance();});
  $$('#modeSegmented [data-mode-choice]').forEach(button=>button.addEventListener('click',()=>{store.setItem('mra-mode',button.dataset.modeChoice);applyAppearance();}));
  if(system.addEventListener)system.addEventListener('change',()=>{if(root.dataset.modeChoice==='system')applyAppearance();});
  else if(system.addListener)system.addListener(()=>{if(root.dataset.modeChoice==='system')applyAppearance();});
  $('#textSel').addEventListener('change',event=>applyScale(event.target.value));

  const closeAppearance=(focus=false)=>{appearance.hidden=true;appearanceButton?.setAttribute('aria-expanded','false');if(focus)appearanceButton?.focus({preventScroll:true});};
  const closePanel=()=>{panel.hidden=true;trigger.setAttribute('aria-expanded','false');};
  const toggleAppearance=()=>{
    const opening=appearance.hidden;
    closePanel();
    appearance.hidden=!opening;
    appearanceButton?.setAttribute('aria-expanded',String(opening));
    if(opening){
      const bottom=document.querySelector('.topbar')?.getBoundingClientRect().bottom;
      if(Number.isFinite(bottom))root.style.setProperty('--appearance-top',Math.max(8,Math.round(bottom+8))+'px');
    }
  };
  appearanceButton?.addEventListener('click',event=>{event.preventDefault();event.stopPropagation();toggleAppearance();});
  $('#appearanceClose').addEventListener('click',()=>closeAppearance(true));
  trigger.addEventListener('click',event=>{event.preventDefault();event.stopPropagation();closeAppearance();panel.hidden=!panel.hidden;trigger.setAttribute('aria-expanded',String(!panel.hidden));});
  $('#textSizeClose').addEventListener('click',closePanel);
  panel.addEventListener('click',event=>event.stopPropagation());
  $$('.text-size-option').forEach(button=>button.addEventListener('click',()=>applyScale(button.dataset.textScale)));
  $('#textSizeReset').addEventListener('click',()=>applyScale(100));
  document.addEventListener('click',event=>{
    if(!panel.hidden&&!panel.contains(event.target)&&event.target!==trigger)closePanel();
    if(!appearance.hidden&&!appearance.contains(event.target)&&!appearanceButton?.contains(event.target))closeAppearance();
  });
  document.addEventListener('keydown',event=>{
    if(event.key==='Escape'){closePanel();if(!appearance.hidden){event.preventDefault();closeAppearance(true);}}
    const tag=document.activeElement?.tagName||'';
    if(event.key.toLowerCase()==='t'&&!event.ctrlKey&&!event.metaKey&&!event.altKey&&!event.shiftKey&&!/INPUT|TEXTAREA|SELECT/.test(tag)&&!document.activeElement?.isContentEditable){
      event.preventDefault();toggleAppearance();
    }
  });

  const updateTop=()=>{
    const scroll=window.scrollY||window.pageYOffset||document.scrollingElement?.scrollTop||0;
    const show=scroll>Math.min(360,window.innerHeight*.4);
    topBtn.classList.toggle('is-visible',show);
    topBtn.tabIndex=show?0:-1;
    topBtn.setAttribute('aria-hidden',String(!show));
  };
  topBtn.addEventListener('click',event=>{
    const reduced=root.dataset.motion==='reduced'||window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if(event.detail===0){
      const target=document.querySelector('main h1')||document.querySelector('main');
      if(target){
        const had=target.hasAttribute('tabindex');
        if(!had)target.setAttribute('tabindex','-1');
        target.focus({preventScroll:true});
        if(!had)target.addEventListener('blur',()=>target.removeAttribute('tabindex'),{once:true});
      }
    }
    try{window.scrollTo({top:0,left:0,behavior:reduced?'auto':'smooth'});}
    catch(_err){window.scrollTo(0,0);}
    if(reduced&&document.scrollingElement)document.scrollingElement.scrollTop=0;
  });
  window.addEventListener('scroll',updateTop,{passive:true});
  window.addEventListener('resize',updateTop,{passive:true});
  applyAppearance();
  updateTop();
})();