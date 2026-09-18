(() => {
  const base = window.PORTFOLIO_DATA || {};
  const extra = window.PORTFOLIO_EXTRA || {};
  const coursework = window.COURSEWORK_DATA || {};

  const publicationLinks = {
    fastica: {
      primary: [
        { label: 'DOI', url: 'https://doi.org/10.1002/eng2.70575' }
      ],
      discovery: [
        { label: 'Scopus', url: 'https://www.scopus.com/pages/publications/105026452579' },
        { label: 'Google Scholar', url: 'https://scholar.google.com/scholar?hl=en&as_sdt=0%2C5&q=Sophisticated+Audio+Source+Separation%3A+A+Statistical+Exploration+of+Clarity+and+Precision+With+FastICA&btnG=' },
        { label: 'ProQuest', url: 'https://www.proquest.com/docview/3287936051?fromopenview=true&pq-origsite=gscholar&sourcetype=Scholarly%20Journals' },
        { label: 'Semantic Scholar', url: 'https://www.semanticscholar.org/paper/Sophisticated-Audio-Source-Separation%3A-A-of-Clarity-Ahmed-Mauya/8cd23cba9c1076e7339c19b8bd50b1a6dd37bf4e' },
        { label: 'SciProfiles', url: 'https://sciprofiles.com/search?tab=publications&q=Sophisticated+Audio+Source+Separation:+A+Statistical+Exploration+of+Clarity+and+Precision+With+FastICA&page=1&order=relevant' }
      ],
      social: [
        { label: 'ResearchGate', url: 'https://www.researchgate.net/publication/399151207_Sophisticated_Audio_Source_Separation_A_Statistical_Exploration_of_Clarity_and_Precision_With_FastICA' }
      ]
    },
    ckd: {
      primary: [
        { label: 'DOI', url: 'https://doi.org/10.3329/ijss.v25i2.85732' }
      ],
      discovery: [
        { label: 'Google Scholar', url: 'https://scholar.google.com/scholar?hl=en&as_sdt=0%2C5&q=Identification+of+predisposing+risk+factors+for+chronic+kidney+disease+and+optimizing+disease+prediction+using+a+stacking+machine+learning+algorithm&btnG=' },
        { label: 'Semantic Scholar', url: 'https://www.semanticscholar.org/paper/Identification-of-Predisposing-Risk-Factors-for-and-Ahmed-Rakib/082c2aa146d1761f8e6fc26dbf3be592f98490b3' },
        { label: 'SciProfiles', url: 'https://sciprofiles.com/search?tab=publications&q=Identification+of+Predisposing+Risk+Factors+for+Chronic+Kidney+Disease+and+Optimizing+Disease+Prediction+Using+a+Stacking+Machine+Learning+Algorithm&page=1&order=relevant' }
      ],
      social: [
        { label: 'ResearchGate', url: 'https://www.researchgate.net/publication/398787461_Identification_of_Predisposing_Risk_Factors_for_Chronic_Kidney_Disease_and_Optimizing_Disease_Prediction_Using_a_Stacking_Machine_Learning_Algorithm' }
      ]
    }
  };

  const people = [
    {
      id: 'shamim-reza', name: 'Prof. Dr. Md. Shamim Reza', group: 'Academic Guidance & Advisors',
      roles: ['Research Supervisor', 'Senior Research Guidance', 'Co-author'],
      affiliation: 'Department of Statistics and Data Science, Pabna University of Science and Technology (PUST)',
      description: 'Primary academic supervisor and long-term research mentor across statistical learning, machine learning, biomedical data science and applied AI research.',
      shared: ['FastICA source separation', 'CKD prediction', 'AI-employment perceptions', 'Diabetic-retinopathy grading', 'PUST cafeteria research'],
      portrait: 'assets/collaborators/shamim-reza.jpg', links: []
    },
    {
      id: 'sabba-ruhi', name: 'Dr. Sabba Ruhi', group: 'Academic Guidance & Advisors',
      roles: ['Academic Guidance', 'Departmental Leadership', 'Co-author'],
      affiliation: 'Chairman, Department of Statistics and Data Science, Pabna University of Science and Technology (PUST)',
      description: 'Senior departmental academic whose guidance intersects with applied statistics, biostatistics, regression and collaborative research activity.',
      shared: ['EFAST 2026 conference contributions'],
      portrait: 'assets/collaborators/sabba-ruhi.jpg', links: []
    },
    {
      id: 'aminul-hoque', name: 'Dr. Md. Aminul Hoque', group: 'Academic Guidance & Advisors',
      roles: ['Academic Guest Teacher', 'Senior Academic Guidance'],
      affiliation: 'Academic network',
      description: 'Academic guest teacher linked to genomics, bioinformatics and advanced statistical genetics coursework.',
      shared: [], portrait: 'assets/collaborators/aminul-hoque.jpg', links: []
    },
    {
      id: 'menhazul-abedin', name: 'Dr. Md. Menhazul Abedin', group: 'Academic Guidance & Advisors',
      roles: ['Academic Guest Teacher', 'Senior Academic Guidance'], affiliation: 'Academic network',
      description: 'Academic guest teacher linked to advanced multivariate analysis and the wider statistics research environment.',
      shared: [], portrait: 'assets/collaborators/menhazul-abedin.jpg', links: []
    },
    {
      id: 'feroz-ali', name: 'Md. Feroz Ali', group: 'Academic Guidance & Advisors',
      roles: ['Senior Academic Guidance'], affiliation: 'Academic network',
      description: 'Senior academic connection within the statistics and data-science community.',
      shared: [], portrait: 'assets/collaborators/feroz-ali.jpg', links: []
    },
    {
      id: 'ashad-alam', name: 'Dr. Md. Ashad Alam', group: 'Academic Guidance & Advisors',
      roles: ['Senior Research Collaborator', 'Causal Inference Guidance'], affiliation: 'Academic research network',
      description: 'Senior collaborator connected to current causal-inference research planning and methodological development.',
      shared: ['Causal inference study — in preparation'], portrait: 'assets/collaborators/ashad-alam.jpg', links: []
    },
    {
      id: 'ruhul-amin', name: 'Ruhul Amin', group: 'Departmental Seniors & Senior Collaborators',
      roles: ['Departmental Senior', 'Co-author', 'Research Collaborator', 'DSLR Member'],
      affiliation: 'Statistics and Data Science research network, PUST',
      description: 'Departmental senior and recurring research collaborator across signal processing, NLP and emerging causal research.',
      shared: ['FastICA source separation', 'Cross-domain sentiment classification', 'Causal inference study — in preparation'],
      portrait: 'assets/collaborators/ruhul-amin.jpg', links: []
    },
    {
      id: 'jannatul-mauya', name: 'Jannatul Mauya', group: 'Departmental Seniors & Senior Collaborators',
      roles: ['Departmental Senior', 'Co-author', 'Research Collaborator', 'DSLR Member'],
      affiliation: 'Statistics and Data Science research network, PUST',
      description: 'Departmental senior and major collaborator across medical imaging, missing-data research, food computing and statistical learning.',
      shared: ['FastICA source separation', 'Diabetic-retinopathy grading', 'HCV missing-data research', 'PUST Cafeteria Food Image Dataset', 'Academic-performance study'],
      portrait: 'assets/collaborators/jannatul-mauya.jpg', links: []
    },
    {
      id: 'abdur-rakib', name: 'Md. Abdur Rakib', group: 'Peer & Batchmate Research Collaborators',
      roles: ['Co-author', 'Research Collaborator', 'DSLR Member'], affiliation: 'PUST research network',
      description: 'Research collaborator on AI-employment perceptions and facial-emotion-recognition research.',
      shared: ['AI and employment perceptions', 'Facial emotion recognition — ICRAST 2025'],
      portrait: 'assets/collaborators/abdur-rakib.jpg', links: []
    },
    {
      id: 'ziaul-haque', name: 'Md. Ziaul Haque', group: 'Peer & Batchmate Research Collaborators',
      roles: ['Batchmate', 'Co-author', 'Research Collaborator'], affiliation: 'PUST research network',
      description: 'Batchmate and co-author working with Razu on nationwide dengue forecasting and decision-oriented public-health research.',
      shared: ['Nationwide dengue admission forecasting', 'Beyond Burden dengue preparedness study'],
      portrait: 'assets/collaborators/ziaul-haque.jpg', links: []
    },
    {
      id: 'bakar-shiddik', name: 'Abu Bakar Shiddik', group: 'Peer & Batchmate Research Collaborators',
      roles: ['Co-author', 'Research Collaborator', 'DSLR Member'], affiliation: 'PUST research network',
      description: 'Co-author and collaborator on AI-employment perceptions and related statistical research.',
      shared: ['AI and employment perceptions', 'Facial emotion recognition — ICRAST 2025'],
      portrait: 'assets/collaborators/abu-bakar-shiddik.jpg', links: []
    },
    {
      id: 'marufa', name: 'Marufa', group: 'Peer & Batchmate Research Collaborators',
      roles: ['Co-author', 'Research Collaborator', 'DSLR Member'], affiliation: 'PUST research network',
      description: 'Research collaborator in food-computing, dataset development and automated cafeteria analysis.',
      shared: ['PUST Cafeteria Food Image Dataset', 'RT-DETR cafeteria billing'],
      portrait: 'assets/collaborators/marufa.jpg', links: []
    },
    {
      id: 'protiva-kundu', name: 'Protiva Rani Kundu', group: 'Peer & Batchmate Research Collaborators',
      roles: ['Batchmate', 'Co-author', 'Research Collaborator', 'DSLR Member'], affiliation: 'PUST research network',
      description: 'Batchmate and major peer collaborator in computer vision, cafeteria automation and dataset-centered research.',
      shared: ['PUST Cafeteria Food Image Dataset', 'RT-DETR cafeteria billing'],
      portrait: 'assets/collaborators/protiva-rani-kundu.jpg', links: []
    },
    {
      id: 'mimosa-saha', name: 'Mimosa Saha', group: 'Junior Collaborators & Mentees',
      roles: ['Junior Collaborator', 'Mentee', 'DSLR Member'], affiliation: 'PUST research network',
      description: 'Junior collaborator supported in research formulation, analysis and conference-oriented machine-learning work.',
      shared: ['Multiclass diabetes research — ICASDS 2025'],
      portrait: 'assets/collaborators/mimosa-saha.jpg', links: []
    },
    {
      id: 'farzana-moly', name: 'Farzana Mehedi Moly', group: 'Junior Collaborators & Mentees',
      roles: ['Junior Collaborator', 'Mentee', 'DSLR Member'], affiliation: 'PUST research network',
      description: 'Junior collaborator in missing-data methodology and hepatitis-C prediction research.',
      shared: ['HCV missing-data manuscript', 'HCV conference contribution — EFAST 2026'],
      portrait: 'assets/collaborators/farzana-mehedi-moly.jpg', links: []
    },
    {
      id: 'obaidul-islam', name: 'Md. Obaidul Islam', group: 'Junior Collaborators & Mentees',
      roles: ['Junior Collaborator', 'Mentee', 'DSLR Member'], affiliation: 'Department of Statistics and Data Science, PUST',
      description: 'Junior collaborator supported in survey-weighted analysis, machine-learning workflow development and conference dissemination.',
      shared: ['EFAST 2026 cesarean-delivery conference contribution'],
      portrait: 'assets/collaborators/obaidul-islam.jpg', links: []
    }
  ];

  const tools = [
    { group: 'Statistical & Analytical Software', items: [
      { name: 'IBM SPSS Statistics', detail: 'Statistical data management, descriptive and inferential analysis, regression, hypothesis testing and research reporting.' },
      { name: 'Minitab', detail: 'Regression, experimental-design coursework, statistical quality-control methods and exploratory analysis.' }
    ]},
    { group: 'Programming Languages', items: [
      { name: 'Python', detail: 'Primary computational research language for preprocessing, statistical learning, machine learning, deep learning, XAI, forecasting, visualization and reproducible pipelines.' },
      { name: 'R', detail: 'Statistical computing, visualization, regression, multivariate methods, time-series, survival analysis and reproducible research.' },
      { name: 'C', detail: 'Foundational programming, algorithmic thinking, numerical problem solving and undergraduate computational coursework.' }
    ]},
    { group: 'Web & Prototype Development', items: [
      { name: 'HTML', detail: 'Semantic structure for academic, research and prototype web interfaces.' },
      { name: 'CSS', detail: 'Responsive interface styling, layout, visual hierarchy and research-web customization.' },
      { name: 'Flask', detail: 'Lightweight Python web applications and deployment of research or machine-learning prototypes.' }
    ]},
    { group: 'Research Computing & Development Environments', items: [
      { name: 'Jupyter Notebook', detail: 'Interactive statistical analysis, ML experimentation, EDA, visualization and documented reproducible workflows.' },
      { name: 'Visual Studio Code', detail: 'Development environment for Python, R, web work, scripting, Git workflows and research project organization.' }
    ]},
    { group: 'Version Control & Research Reproducibility', items: [
      { name: 'Git', detail: 'Version control for code, analysis scripts, experimental revisions and reproducible research workflows.' },
      { name: 'GitHub', detail: 'Repository hosting, collaborative code management, portfolio deployment, documentation and sharing public reproducible research materials.' }
    ]},
    { group: 'Productivity & Collaboration', items: [
      { name: 'Microsoft Office', detail: 'Word for manuscripts, Excel for tabular analysis, and PowerPoint for conference, teaching and research presentations.' },
      { name: 'Google Workspace', detail: 'Docs, Sheets, Slides, Drive and Forms for collaborative research, survey workflows and team documentation.' }
    ]}
  ];

  const fieldSurvey = {
    title: 'Statistical Field Survey',
    courseCode: 'STAT-4110',
    degree: 'B.Sc. (Hons.) in Statistics',
    credits: 2,
    study: 'Measuring Attitudes toward AI’s Impact on the Job Market in Bangladesh: A Study at Pabna University of Science and Technology',
    supervisor: 'Dr. Md. Shamim Reza',
    team: ['Md. Razu Ahmed', 'Md. Abdur Rakib', 'Abu Bakar Shiddik', 'Dr. Md. Shamim Reza'],
    population: 'Target population: 4,795',
    sample: '370 participants',
    variables: '33 variables · 8 socio-demographic + 25 attitudinal',
    design: 'Proportionate stratified random sampling · questionnaire survey and interviews · 5-point Likert instrument',
    workflowAsset: 'assets/academic/field-survey/ai-job-market-field-survey-workflow.png',
    workflowCaption: 'Workflow of the B.Sc. statistical field survey on perceptions of AI and the job market at Pabna University of Science and Technology.',
    conference: {
      shortName: '2nd ICRAST 2025',
      fullName: '2nd International Conference on Recent Advances in Science and Technology 2025 (ICRAST 2025)',
      host: 'Faculty of Science, University of Rajshahi, Rajshahi, Bangladesh',
      date: '14–15 November 2025',
      source: 'Book of Abstracts',
      page: 'p. 120',
      presentation: 'Oral',
      role: 'Presenting Author',
      citation: 'Ahmed, M. R., Rakib, M. A., Shiddik, A. B., & Reza, M. S. (2025). Measuring Attitudes toward AI’s Impact on the Job Market in Bangladesh: A study at Pabna University of Science and Technology (p. 120).'
    },
    article: 'Perceptions of Artificial Intelligence and Its Implications for Employment in Bangladesh · Accepted / Forthcoming',
    progression: ['B.Sc. Statistical Field Survey', '2nd ICRAST 2025 oral presentation', 'Accepted journal article']
  };

  const education = [
    {
      degree: 'M.S. in Statistics',
      institution: 'Pabna University of Science and Technology (PUST)',
      year: 'Exam Year 2022 · Examination held 2025',
      detail: 'CGPA 3.49/4.00 · Ranked 5th in the project-based (non-thesis) track',
      moi: 'Medium of Instruction (MOI): English'
    },
    {
      degree: 'B.Sc. (Hons.) in Statistics',
      institution: 'Pabna University of Science and Technology (PUST)',
      year: 'Exam Year 2021 · Examination held 2024',
      detail: 'CGPA 2.87/4.00',
      moi: 'Medium of Instruction (MOI): English'
    },
    {
      degree: 'Higher Secondary Certificate (HSC)',
      institution: 'Rajshahi College',
      year: '2016',
      detail: 'Science · GPA 4.83/5.00'
    },
    {
      degree: 'Secondary School Certificate (SSC)',
      institution: 'Mashkatadighi Multilateral (Technical) High School, Rajshahi',
      year: '2014',
      detail: 'Science · GPA 5.00/5.00'
    }
  ];

  const languages = [
    { name: 'Bangla (Bengali)', level: 'Native proficiency', note: 'Primary language for everyday, community and field communication.' },
    { name: 'English', level: 'Professional working proficiency', note: 'Medium of Instruction (MOI): English for both B.Sc. (Hons.) in Statistics and M.S. in Statistics; used for lectures, examinations, research, manuscript preparation, conferences, peer review and scholarly correspondence.' }
  ];

  const strengths = [
    { title: 'Rapid Learner', detail: 'Adapts quickly to unfamiliar methods, software, datasets and research domains.' },
    { title: 'Research-Driven & Curious', detail: 'Motivated by difficult analytical questions, methodological rigor and continuous learning.' },
    { title: 'Collaborative', detail: 'Works constructively with supervisors, departmental seniors, peers and junior collaborators.' },
    { title: 'Dependable & Persistent', detail: 'Sustains effort through data preparation, modelling, validation, revision and publication workflows.' },
    { title: 'Team-Oriented', detail: 'Comfortable contributing independently and within multidisciplinary research teams.' },
    { title: 'Emerging Leadership & Mentorship', detail: 'Supports junior collaborators in study formulation, analysis workflows and manuscript development.' }
  ];

  const engagement = [
    'Directly involved in departmental academic and student programmes',
    'Member · Rajshahi Zilla Student Welfare Association, PUST',
    'Member · Association of Statistics, PUST',
    'Member · Debating Society of PUST (PUSTDS)',
    'Organizer / participant in departmental cultural and sporting activities',
    'Campus Ambassador · Rajshahi University Agricultural Club (RUAC) at PUST'
  ];

  const interests = ['Photography', 'Reading', 'Traveling', 'Gardening', 'Volunteering'];

  const researchPrinciples = [
    { title: 'Rigorous Validation', detail: 'Leakage-aware splits, out-of-time evaluation, bootstrapping and reproducible model assessment.' },
    { title: 'Interpretability', detail: 'SHAP, Grad-CAM++ and statistically grounded explanation alongside predictive performance.' },
    { title: 'Decision Relevance', detail: 'Analyses framed around useful evidence, real-world uncertainty and responsible downstream interpretation.' }
  ];

  const compass = [
    { title: 'Research & Publications', href: 'publications.html', detail: 'Published, accepted and public-safe active research.' },
    { title: 'Projects & Prototypes', href: 'projects.html', detail: 'Research prototypes, analytical projects and reproducible workflows.' },
    { title: 'Academic Curriculum', href: 'academic.html', detail: '200-credit academic foundation, fieldwork, projects and coursework.' },
    { title: 'Experience & Mentorship', href: 'experience.html', detail: 'Research roles, mentorship and collaborative support.' },
    { title: 'Conferences', href: 'conferences.html', detail: 'Eight contributions, three presentations and conference evidence.' },
    { title: 'Recognition', href: 'recognition.html', detail: 'Awards, certificates and professional development.' },
    { title: 'Research Network', href: 'network.html', detail: 'Guidance, departmental seniors, collaborators and mentees.' },
    { title: 'Dashboard', href: 'dashboard.html', detail: 'Research, impact, service and collaboration analytics.' },
    { title: 'Resources', href: 'resources.html', detail: 'Research toolkit, methods, notes and reproducibility resources.' },
    { title: 'Gallery & Evidence', href: 'gallery.html', detail: 'Verified visual records with context.' },
    { title: 'Ask Razu AI', href: 'ask-razu.html', detail: 'Evidence-grounded research intelligence across the portfolio.' },
    { title: 'CV / Research Vault', href: 'cv.html', detail: 'Interactive CV and public academic evidence.' }
  ];

  const updatedImpact = (extra.impactMetrics || []).map(m =>
    m.label === 'ResearchGate Research Interest'
      ? { ...m, value: 9.6, date: '17 September 2026' }
      : m
  );

  const outputs = [
    ...(base.publications || []).map(p => ({ ...p, bucket: p.status?.toLowerCase().includes('accepted') ? 'accepted' : 'published', links: publicationLinks[p.id] || {} })),
    ...(base.manuscripts || []).map(p => ({ ...p, bucket: 'under-review', links: {} }))
  ];

  window.MRA_V2 = {
    version: '2.0',
    lastUpdated: '17 September 2026',
    brand: {
      monogram: 'MRA',
      name: 'Md. Razu Ahmed',
      headline: 'Statistician | Data Scientist | Researcher | Peer Reviewer',
      subline: 'Machine Learning · Explainable AI · Public Health & Biomedical Data Science',
      tagline: 'Advancing Rigorous, Explainable, and Reproducible Data-Driven Research'
    },
    themes: [
      { id: 'scientific', name: 'Scientific Horizon', description: 'Sky blue, white and deep navy research interface.' },
      { id: 'executive', name: 'Executive Intelligence', description: 'Navy and teal academic-professional presentation.' },
      { id: 'quantum', name: 'Quantum Research', description: 'Restrained indigo and cyan research-tech interface.' },
      { id: 'mono', name: 'Minimal Monochrome', description: 'Editorial black, white and neutral-gray academic mode.' }
    ],
    profile: base.profile || {},
    quickProfile: [
      { value: 'B.Sc. + M.S.', label: 'Statistics · PUST' },
      { value: '3', label: 'Published / Online Articles' },
      { value: '1', label: 'Accepted / Forthcoming' },
      { value: '8', label: 'Under Review' },
      { value: '7', label: 'In Preparation' },
      { value: '8', label: 'Conference Contributions' },
      { value: '32', label: 'Completed Peer Reviews' },
      { value: '1', label: 'Public Dataset' }
    ],
    compass,
    research: {
      statement: 'Statistics provides the methodological foundation of my research; machine learning and deep learning provide flexible predictive tools; and explainability, leakage-aware validation, reproducibility and decision relevance determine whether the resulting evidence is scientifically useful.',
      identity: base.profile?.intro || '',
      principle: base.profile?.principle || '',
      methods: base.interests?.methods || [],
      applications: base.interests?.applications || [],
      principles: researchPrinciples,
      evolution: extra.evolution || []
    },
    outputs,
    publications: base.publications || [],
    manuscripts: base.manuscripts || [],
    conferences: base.conferences || [],
    awards: base.awards || [],
    training: base.training || [],
    education,
    academicProjects: coursework.projects || [],
    instructorLinks: coursework.instructorLinks || [],
    experience: base.experience || [],
    service: base.service || [],
    engagements: base.engagements || [],
    profiles: base.profiles || [],
    gallery: base.gallery || [],
    ongoing: extra.ongoing || [],
    latestUpdates: extra.latestUpdates || [],
    impactMetrics: updatedImpact,
    coursework,
    fieldSurvey,
    languages,
    strengths,
    engagement,
    personalInterests: interests,
    tools,
    people,
    publicationLinks,
    privacy: {
      publicOnly: true,
      message: 'This portfolio contains only public-approved academic information. Confidential manuscripts, reviewer reports, editorial correspondence, manuscript IDs, private phone numbers and non-public collaborator information are intentionally excluded.'
    }
  };
})();
