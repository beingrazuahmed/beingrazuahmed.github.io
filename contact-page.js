/* Academic contact: on-site FormSubmit delivery and optional email-app workflow. */
(()=>{'use strict';
  const form=document.getElementById('contactEnquiryForm');
  const copyButton=document.getElementById('contactCopyEmail');
  const copyStatus=document.getElementById('contactCopyStatus');
  if(copyButton&&copyStatus){
    copyButton.addEventListener('click',async()=>{
      const address=copyButton.dataset.email||'razuahmed038@gmail.com';
      copyStatus.hidden=false;
      try{
        if(!navigator.clipboard||typeof navigator.clipboard.writeText!=='function')throw new Error('Clipboard unavailable');
        await navigator.clipboard.writeText(address);
        copyStatus.textContent='Email address copied to clipboard.';
        copyStatus.dataset.state='success';
      }catch(error){
        copyStatus.textContent='Could not copy automatically. Please select the email address above to copy it.';
        copyStatus.dataset.state='error';
      }
    });
  }
  if(!form)return;
  const status=document.getElementById('contactSubmissionStatus');
  const submit=form.querySelector('button[type="submit"]');
  const destination='razuahmed038@gmail.com';
  let pending=false;
  const setStatus=(message,state)=>{
    if(!status)return;
    status.hidden=false;
    status.textContent=message;
    status.dataset.state=state;
  };
  form.addEventListener('submit',async event=>{
    event.preventDefault();
    if(pending||!form.reportValidity())return;
    const values=new FormData(form);
    const name=String(values.get('name')||'').trim();
    const email=String(values.get('email')||'').trim();
    const topic=String(values.get('topic')||'').trim();
    const message=String(values.get('message')||'').trim();
    const honeypot=String(values.get('_honey')||'').trim();
    if(honeypot)return;
    if(!name||!email||!topic||message.length<15){
      setStatus('Please fill in all required fields and write at least 15 characters in your message.','error');
      return;
    }
    pending=true;
    if(submit){submit.disabled=true;submit.setAttribute('aria-busy','true');}
    setStatus('Submitting your enquiry…','sending');
    const controller=new AbortController();
    const deadline=setTimeout(()=>controller.abort(),20000);
    try{
      const response=await fetch('https://formsubmit.co/ajax/'+destination,{
        method:'POST',
        headers:{'Content-Type':'application/json','Accept':'application/json'},
        signal:controller.signal,
        body:JSON.stringify({
          name,email,topic,message,
          _replyto:email,
          _subject:'Portfolio academic enquiry: '+topic,
          _template:'table',
          _honey:''
        })
      });
      if(!response.ok)throw new Error('The submission service returned an error');
      const result=await response.json();
      if(String(result&&result.success||'').toLowerCase()!=='true'){
        throw new Error('The submission service did not confirm receipt');
      }
      form.reset();
      setStatus('Thank you. Your enquiry has been submitted to the email delivery service. I appreciate your interest in research collaboration.','success');
    }catch(error){
      setStatus(error&&error.name==='AbortError'
        ?'The request took too long, so delivery could not be confirmed. Please use the direct email option instead.'
        :'Your enquiry could not be confirmed. Please try again or compose an email using the direct option.','error');
    }finally{
      clearTimeout(deadline);
      pending=false;
      if(submit){submit.disabled=false;submit.removeAttribute('aria-busy');}
    }
  });
})();
