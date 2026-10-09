/* Apply the portfolio's visual palette before the page renderer initializes. */
(()=>{'use strict';
  try{
    const s=window.localStorage, root=document.documentElement;
    const aliases={scientific:'midnight',executive:'forest',quantum:'midnight',mono:'editorial'};
    let theme=aliases[s.getItem('mra-theme')]||s.getItem('mra-theme')||'midnight';
    if(!['midnight','forest','editorial'].includes(theme))theme='midnight';
    let choice=s.getItem('mra-mode')||'system';
    if(!['system','light','dark'].includes(choice))choice='system';
    const dark=choice==='system'&&window.matchMedia('(prefers-color-scheme: dark)').matches||choice==='dark';
    root.dataset.theme=theme;
    root.dataset.mode=dark?'dark':'light';
    root.dataset.modeChoice=choice;
    root.style.colorScheme=dark?'dark':'light';
  }catch(_error){
    document.documentElement.dataset.theme='midnight';
  }
})();