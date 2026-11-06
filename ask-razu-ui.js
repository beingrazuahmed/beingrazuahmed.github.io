(() => {
  'use strict';
  const markup = "<section class=\"section ask-ui-section\" aria-labelledby=\"ask-ui-heading\">\n  <div class=\"container\">\n    <header class=\"ask-ui-head\"><div><p class=\"ask-ui-eyebrow\"><span aria-hidden=\"true\"></span> RESEARCH PORTFOLIO GUIDE</p><h2 id=\"ask-ui-heading\">Explore the academic record, one question at a time.</h2><p>Ask about research methods, projects, publications or academic experience. This is a guided, browser-based assistant using curated public information—not a generative AI service.</p></div><a class=\"ask-ui-back\" href=\"projects.html#ask-razu-ai-project\">About this project <span aria-hidden=\"true\">↗</span></a></header>\n    <div class=\"ask-ui-shell\">\n      <main class=\"ask-ui-main\">\n        <div class=\"ask-ui-panel-top\"><div class=\"ask-ui-brand\"><span class=\"ask-ui-logo\" aria-hidden=\"true\">A</span><div><strong>Ask Razu AI</strong><small>Guided academic portfolio assistant</small></div></div><span class=\"ask-ui-engine\"><span aria-hidden=\"true\"></span> Browser-based rules</span></div>\n        <div class=\"ask-ui-content\">\n          <div class=\"ask-ui-welcome\"><span class=\"ask-ui-welcome-label\">WELCOME</span><h3>What would you like to explore?</h3><p>Use a suggested question or write your own. Supported terms return brief, curated answers with links to related portfolio sections.</p></div>\n          <form id=\"askForm\" class=\"ask-ui-form\" aria-label=\"Ask a portfolio question\">\n            <label for=\"askInput\">Your question</label>\n            <div class=\"ask-ui-input-row\"><input id=\"askInput\" name=\"ask\" type=\"search\" maxlength=\"240\" autocomplete=\"off\" spellcheck=\"true\" placeholder=\"e.g., Which studies used SHAP?\" required><button type=\"submit\" id=\"askSend\">Get answer <span aria-hidden=\"true\">↗</span></button></div>\n            <p>Answers are produced locally from predefined rules. No external AI endpoint is used.</p>\n          </form>\n          <div class=\"ask-ui-answer-panel\" id=\"askAnswerPanel\" aria-label=\"Assistant answer\" aria-live=\"polite\" aria-atomic=\"true\">\n            <div class=\"ask-ui-answer-header\"><span class=\"ask-ui-answer-icon\" aria-hidden=\"true\">A</span><div><strong>Portfolio answer</strong><small id=\"askAnswerBadge\">Ready for a question</small></div></div>\n            <p id=\"askAnswer\">Try “Which studies used SHAP?”, “Show first-author papers”, or one of the guided topics.</p>\n            <a id=\"askAnswerSource\" class=\"ask-ui-source\" href=\"research.html\" hidden>Explore related public record <span aria-hidden=\"true\">↗</span></a>\n          </div>\n          <div class=\"ask-ui-example-wrap\"><p class=\"ask-ui-section-label\">SUGGESTED QUESTIONS</p><div class=\"ask-ui-examples\"><button type=\"button\" class=\"ask-ui-example\" data-ask-query=\"Which studies used SHAP?\">Which studies used SHAP? <span aria-hidden=\"true\">↗</span></button><button type=\"button\" class=\"ask-ui-example\" data-ask-query=\"Show first-author papers\">Show first-author papers <span aria-hidden=\"true\">↗</span></button><button type=\"button\" class=\"ask-ui-example\" data-ask-query=\"What machine-learning coursework did Razu take?\">Machine-learning coursework <span aria-hidden=\"true\">↗</span></button><button type=\"button\" class=\"ask-ui-example\" data-ask-query=\"Who collaborated on dengue?\">Dengue collaborations <span aria-hidden=\"true\">↗</span></button></div></div>\n        </div>\n      </main>\n      <aside class=\"ask-ui-aside\" aria-label=\"Guided topics and system scope\">\n        <section><p class=\"ask-ui-section-label\">EXPLORE BY TOPIC</p><h3>Nine starting points</h3><div class=\"ask-ui-topics\"><button type=\"button\" class=\"ask-ui-topic\" data-ask-query=\"Research\">Research</button><button type=\"button\" class=\"ask-ui-topic\" data-ask-query=\"Publications\">Publications</button><button type=\"button\" class=\"ask-ui-topic\" data-ask-query=\"Methods\">Methods</button><button type=\"button\" class=\"ask-ui-topic\" data-ask-query=\"Experience\">Experience</button><button type=\"button\" class=\"ask-ui-topic\" data-ask-query=\"Collaborators\">Collaborators</button><button type=\"button\" class=\"ask-ui-topic\" data-ask-query=\"Metrics\">Metrics</button><button type=\"button\" class=\"ask-ui-topic\" data-ask-query=\"Coursework\">Coursework</button><button type=\"button\" class=\"ask-ui-topic\" data-ask-query=\"Conferences\">Conferences</button><button type=\"button\" class=\"ask-ui-topic\" data-ask-query=\"Training\">Training</button></div></section>\n        <section class=\"ask-ui-aside-divider\"><p class=\"ask-ui-section-label\">RESPONSE WORKFLOW</p><ol class=\"ask-ui-how\"><li><span>01</span><div><strong>Question</strong><p>Enter a question or guided subject</p></div></li><li><span>02</span><div><strong>Keyword matching</strong><p>Find the first supported topic</p></div></li><li><span>03</span><div><strong>Curated response</strong><p>Read a public summary and related link</p></div></li></ol></section>\n        <section class=\"ask-ui-scope\"><p class=\"ask-ui-section-label\">IMPORTANT LIMITATION</p><p>This prototype does not search the live web or access private data. For complete or time-sensitive details, consult the linked portfolio records.</p></section>\n      </aside>\n    </div>\n  </div>\n</section>";
  window.MRA_ASK_APP = () => markup;

  const items = [
    { match: /shap/i, answer: 'SHAP appears in the CKD, HCV and public-health / explainability research records where public-approved details are available.', page: 'research.html', label: 'Explore research methods' },
    { match: /first[- ]author/i, answer: 'First-author research is documented in the public publications list and individual project records. Please consult those pages for the current publication and review statuses.', page: 'publications.html', label: 'Explore publications and authorship' },
    { match: /course|machine.learning coursework/i, answer: 'Relevant coursework includes Data Mining, Machine Learning, Deep Learning for Computer Vision, Programming with Python and R, Numerical Analysis and Simulation, and supporting statistics and mathematics courses.', page: 'academic.html#academic-curriculum', label: 'Explore the academic curriculum' },
    { match: /dengue/i, answer: 'The public portfolio documents dengue forecasting and preparedness research, including collaborations with Md. Ziaul Haque and additional co-authors. Individual studies and their statuses appear in the research record.', page: 'research.html', label: 'Explore dengue research' },
    { match: /review|peer.review/i, answer: 'Peer-review activity is listed across journals including PLOS ONE, Biomedical Signal Processing and Control, Engineering Applications of Artificial Intelligence, Array and Data in Brief. See the recognition record for the latest verified totals.', page: 'recognition.html', label: 'Explore scholarly peer-review service' },
    { match: /^research$/i, answer: 'Research areas include applied statistics, interpretable machine learning, medical-image analysis, environmental forecasting and data-driven public-health research. Browse the research page for project-level details.', page: 'research.html', label: 'Explore research areas' },
    { match: /^publications?$/i, answer: 'The public publications page separates published, accepted and under-review work. It includes full citations, available DOI links and public research outputs.', page: 'publications.html', label: 'Explore scholarly outputs' },
    { match: /^methods?$/i, answer: 'Methods documented in public projects include classification, feature selection, model explainability, bootstrap uncertainty analysis and numerical modelling. See the underlying studies for exact protocols.', page: 'research.html', label: 'Explore methods in research' },
    { match: /^experience$/i, answer: 'Research appointments, academic experience and other public professional roles are listed chronologically on the Experience page.', page: 'experience.html', label: 'Explore research experience' },
    { match: /^collaborators?$/i, answer: 'Public collaborators and co-authors are credited in project and publication records. Browse the Network and Publications pages to explore those connections.', page: 'network.html', label: 'Explore research collaborations' },
    { match: /^metrics?$/i, answer: 'Public research impact and scholarly-service figures are documented in the portfolio dashboard and recognition pages. Counts can change as records are updated.', page: 'dashboard.html', label: 'Explore research metrics' },
    { match: /^conferences?$/i, answer: 'Conference contributions and presentations are documented in the Conferences section, with event details and available public materials.', page: 'conferences.html', label: 'Explore conference contributions' },
    { match: /^training$/i, answer: 'Public training, workshops and professional-development activities can be found in the Academic and Workshops sections.', page: 'workshops.html', label: 'Explore workshops and training' }
  ];

  function choose(query) {
    const text = String(query || '').trim();
    if (!text) return null;
    const item = items.find(entry => entry.match.test(text));
    return item || {
      answer: 'This version supports a defined set of public-portfolio topics. Try research, publications, methods, coursework, peer-review service, conferences or one of the suggested questions. Open-ended questions may not have a matching answer.',
      page: 'projects.html#ask-razu-ai-project',
      label: 'Review the project scope'
    };
  }

  window.MRA_ASK_ACTIVATE = () => {
    const form = document.getElementById('askForm');
    const input = document.getElementById('askInput');
    const answer = document.getElementById('askAnswer');
    const badge = document.getElementById('askAnswerBadge');
    const source = document.getElementById('askAnswerSource');
    const panel = document.getElementById('askAnswerPanel');
    if (!form || !input || !answer || !badge || !source || !panel || form.dataset.ready === 'true') return;
    form.dataset.ready = 'true';

    const reply = value => {
      const q = String(value || '').trim().slice(0, 240);
      if (!q) { input.focus(); return; }
      const outcome = choose(q);
      input.value = q;
      answer.textContent = outcome.answer;
      badge.textContent = outcome === items.find(item => item.match.test(q)) ? 'Curated topic response' : 'Topic guidance';
      source.href = outcome.page;
      source.firstChild.textContent = outcome.label + ' ';
      source.hidden = false;
      panel.classList.add('has-answer');
    };

    form.addEventListener('submit', event => {
      event.preventDefault();
      reply(input.value);
    });
    document.querySelectorAll('[data-ask-query]').forEach(button => {
      button.addEventListener('click', () => {
        reply(button.getAttribute('data-ask-query'));
        document.querySelectorAll('[data-ask-query]').forEach(entry => entry.classList.toggle('is-picked', entry === button));
      });
    });
    input.addEventListener('input', () => {
      document.querySelectorAll('[data-ask-query]').forEach(button => button.classList.remove('is-picked'));
    });

    const urlQuestion = new URLSearchParams(window.location.search).get('ask');
    if (urlQuestion && urlQuestion.trim()) reply(urlQuestion);
  };
})();
