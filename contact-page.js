/* Academic enquiry: direct online submission via FormSubmit.co; no app backend. */
(()=>{'use strict';
  const form=document.getElementById('contactEnquiryForm');
  if(!form)return;
  const status=document.getElementById('contactSubmissionStatus');
  const submit=form.querySelector('button[type="submit"]');
  const destination='razuahmed038@gmail.com';
  let pending=false;
  const setStatus=(text,state)=>{
    if(!status)return;
    status.hidden=false;
    status.textContent=text;
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
      setStatus('Please complete all required fields, including a message of at least 15 characters.','error');
      return;
    }
    pending=true;
    if(submit){submit.disabled=true;submit.setAttribute('aria-busy','true');}
    setStatus('Submitting your enquiry securely…','sending');
    try{
      const response=await fetch('https://formsubmit.co/ajax/'+destination,{
        method:'POST',
        headers:{'Content-Type':'application/json','Accept':'application/json'},
        body:JSON.stringify({
          name,email,topic,message,
          _subject:'Academic collaboration enquiry: '+topic,
          _template:'table',
          _url:'https://beingrazuahmed.github.io/contact.html',
          _honey:''
        })
      });
      const result=await response.json();
      if(!response.ok||String(result&&result.success||'').toLowerCase()!=='true'){
        throw new Error('Submission service did not confirm receipt');
      }
      form.reset();
      setStatus('Your enquiry was accepted for processing. If this is the first submission, the owner must confirm the FormSubmit activation email before messages can be delivered.','success');
    }catch(error){
      setStatus('We could not confirm delivery. Please try again, or email razuahmed038@gmail.com directly.','error');
    }finally{
      pending=false;
      if(submit){submit.disabled=false;submit.removeAttribute('aria-busy');}
    }
  });
})();