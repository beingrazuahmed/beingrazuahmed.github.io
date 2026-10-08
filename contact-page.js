/* Contact enquiry: prepares a local email draft. No network submission. */
(()=>{'use strict';
  const form=document.getElementById('contactEnquiryForm');
  if(!form)return;
  const recipient='razuahmed038@gmail.com';
  form.addEventListener('submit',event=>{
    event.preventDefault();
    if(!form.reportValidity())return;
    const fields=new FormData(form);
    const name=String(fields.get('name')||'').trim();
    const email=String(fields.get('email')||'').trim();
    const topic=String(fields.get('topic')||'').trim();
    const message=String(fields.get('message')||'').trim();
    if(!name||!email||!topic||message.length<15)return;
    const subject='Academic enquiry: '+topic;
    const body=['Dear Md. Razu Ahmed,','',message,'','Best regards,',name,email].join('\n');
    window.location.href='mailto:'+recipient+'?subject='+encodeURIComponent(subject)+'&body='+encodeURIComponent(body);
  });
})();