(() => {
  const base = window.PORTFOLIO_DATA || {};
  const extra = window.PORTFOLIO_EXTRA || {};
  const coursework = window.COURSEWORK_DATA || {};

  const publicationLinks = {
    fastica: {
      primary: [
        { label: 'DOI', url: 'https://doi.org/10.1002/eng2.70575' },
        { label: 'Engineering Reports', url: 'https://onlinelibrary.wiley.com/journal/25778196' }
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
      roles: ['Research Supervisor', 'Senior Research Guidance', 'Dean, Faculty of Science', 'Director, IQAC', 'Co-author'],
      affiliation: 'Department of Statistics and Data Science, Pabna University of Science and Technology (PUST), Pabna-6600, Bangladesh',
      description: 'Primary academic supervisor and long-term research mentor across statistical learning, machine learning, biomedical data science and applied AI research.',
      shared: ['FastICA source separation', 'CKD prediction', 'AI-employment perceptions', 'Diabetic-retinopathy grading', 'PUST cafeteria research'],
      portrait: 'assets/academic/instructors/shamim-reza.jpg?v=20260918-network24', links: []
    },
    {
      id: 'sabba-ruhi', name: 'Prof. Dr. Sabba Ruhi', group: 'Academic Guidance & Advisors',
      roles: ['Professor', 'Chairman', 'Academic Guidance', 'Departmental Leadership', 'Co-author'],
      affiliation: 'Chairman, Department of Statistics and Data Science, Pabna University of Science and Technology (PUST), Pabna-6600, Bangladesh',
      description: 'Senior departmental academic whose guidance intersects with applied statistics, biostatistics, regression and collaborative research activity.',
      shared: ['EFAST 2026 conference contributions'],
      portrait: 'assets/academic/instructors/sabba-ruhi.png?v=20260918-network24', links: []
    },
    {
      id: 'aminul-hoque', name: 'Prof. Dr. Md. Aminul Hoque', group: 'Academic Guidance & Advisors',
      roles: ['Professor', 'Academic Guest Teacher', 'Senior Academic Guidance'],
      affiliation: 'Department of Statistics and Data Science, University of Rajshahi, Rajshahi-6205, Bangladesh',
      description: 'Professor and academic guest teacher linked to genomics, bioinformatics and advanced statistical genetics coursework; PhD from Keio University, Japan, with postdoctoral training in Malaysia and Japan.',
      shared: [], portrait: 'assets/academic/instructors/aminul-hoque.jpg?v=20260918-network24', links: []
    },
    {
      id: 'menhazul-abedin', name: 'Dr. Md. Menhazul Abedin', group: 'Academic Guidance & Advisors',
      roles: ['Associate Professor', 'Academic Guest Teacher', 'Senior Academic Guidance'], affiliation: 'Statistics Discipline, Kabi Jibanananda Das Academic Building (3rd Academic Building), Room No. 3160, Khulna University, Khulna-9208, Bangladesh',
      description: 'Associate Professor and academic guest teacher linked to advanced multivariate analysis; PhD from Hokkaido University, Japan, with B.Sc. (Hons.) and M.Sc. (Thesis) training in Statistics from the University of Rajshahi.',
      shared: [], portrait: 'assets/academic/instructors/menhazul-abedin.jpg?v=20260918-network24', links: []
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
    { group: 'Statistical & Analytical Software', icon: 'analysis', items: [
      { name: 'IBM SPSS Statistics', short: 'SPSS', brand: 'ibm', detail: 'Statistical data management, descriptive and inferential analysis, regression, hypothesis testing and research reporting.' },
      { name: 'Minitab', short: 'Minitab', brand: '', detail: 'Regression, experimental-design coursework, statistical quality-control methods and exploratory analysis.' }
    ]},
    { group: 'Programming & Statistical Computing', icon: 'code', items: [
      { name: 'Python', short: 'Python', brand: 'python', detail: 'Primary computational research language across statistical analysis, machine learning, deep learning, XAI, forecasting, signal processing, geospatial analysis and reproducible pipelines.' },
      { name: 'R', short: 'R', brand: 'rproject', detail: 'Statistical computing, visualization, regression, multivariate methods, time-series, survival analysis and reproducible research.' },
      { name: 'C', short: 'C', brand: 'c', detail: 'Foundational programming, algorithmic thinking, numerical problem solving and undergraduate computational coursework.' }
    ]},
    { group: 'Web, Backend & Research Prototype Development', icon: 'web', items: [
      { name: 'HTML', short: 'HTML5', brand: 'html5', detail: 'Semantic structure for academic, research and prototype web interfaces.' },
      { name: 'JavaScript', short: 'JavaScript', brand: 'javascript', detail: 'Client-side scripting for interactive portfolio features, dynamic interfaces, DOM-driven components and lightweight research-web functionality.' },
      { name: 'CSS', short: 'CSS3', brand: 'css3', detail: 'Responsive interface styling, layout, visual hierarchy and research-web customization.' },
      { name: 'Flask', short: 'Flask', brand: 'flask', detail: 'Lightweight Python web applications and deployment of research or machine-learning prototypes.' },
      { name: 'Streamlit', short: 'Streamlit', brand: 'streamlit', detail: 'Interactive data-science and machine-learning web apps, research demos and rapid prototype interfaces; reinforced through the Coursera Project Network course “Build a Data Science Web App with Streamlit and Python” completed on 18 May 2023.' }
    ]},
    { group: 'Research Computing, Development & System Tools', icon: 'terminal', items: [
      { name: 'Jupyter Notebook', short: 'Jupyter', brand: 'jupyter', detail: 'Interactive statistical analysis, ML experimentation, exploratory analysis, visualization and documented reproducible workflows.' },
      { name: 'Visual Studio Code', short: 'VS Code', brand: 'visualstudiocode', detail: 'Development environment for Python, R, web work, scripting, Git workflows and research project organization.' },
      { name: 'Code::Blocks', short: 'Code::Blocks', brand: 'codeblocks', detail: 'Integrated development environment used for C programming, compilation, debugging and undergraduate computational coursework.' },
      { name: 'Anaconda', short: 'Anaconda', brand: 'anaconda', detail: 'Python environment and package management for isolated analytical and research workflows.' },
      { name: 'Kaggle', short: 'Kaggle', brand: 'kaggle', detail: 'Cloud notebooks and data-science environment for dataset exploration, model experimentation and reproducible ML workflows.' },
      { name: 'Google Colab', short: 'Colab', brand: 'googlecolab', detail: 'Cloud-hosted Jupyter notebook environment for collaborative Python analysis, machine-learning experimentation, GPU-enabled workflows and reproducible research prototypes.' },
      { name: 'FFmpeg', short: 'FFmpeg', brand: 'ffmpeg', detail: 'Command-line multimedia processing for audio conversion, format handling and preprocessing in reproducible signal-processing workflows.' },
      { name: 'Windows 10 / Windows 11', short: 'Windows', brand: 'windows11', detail: 'Windows 11 is the primary documented operating system across recent canonical analyses; Windows 10 is also part of general desktop computing experience.' },
      { name: 'NVIDIA CUDA / cuDNN', short: 'CUDA / cuDNN', brand: 'nvidia', detail: 'GPU-accelerated deep-learning workflows, including documented CUDA and cuDNN configurations on RTX and Tesla-class NVIDIA GPUs.' }
    ]},
    { group: 'Version Control & Reproducibility', icon: 'branch', items: [
      { name: 'Git', short: 'Git', brand: 'git', detail: 'Version control for code, analysis scripts, experimental revisions and reproducible research workflows.' },
      { name: 'GitHub', short: 'GitHub', brand: 'github', detail: 'Repository hosting, collaborative code management, portfolio deployment, documentation and sharing public reproducible research materials.' }
    ]},
    { group: 'Python, ML & Scientific Libraries', icon: 'lab', items: [
      { name: 'Pandas', short: 'Pandas', brand: 'pandas', detail: 'Tabular data manipulation, cleaning, transformation and analysis.' },
      { name: 'NumPy', short: 'NumPy', brand: 'numpy', detail: 'Numerical arrays, vectorized computation and scientific data processing.' },
      { name: 'SciPy', short: 'SciPy', brand: 'scipy', detail: 'Scientific computing, statistical routines and numerical methods.' },
      { name: 'scikit-learn', short: 'scikit-learn', brand: 'scikitlearn', detail: 'Machine-learning pipelines, preprocessing, model selection, validation and evaluation.' },
      { name: 'Statsmodels', short: 'Statsmodels', brand: '', detail: 'Statistical modelling, regression, ordinal models, inference and diagnostic analysis in Python.' },
      { name: 'PyReadStat', short: 'PyReadStat', brand: '', detail: 'Reading and writing statistical-data formats in reproducible Python data-management workflows.' },
      { name: 'Pingouin', short: 'Pingouin', brand: '', detail: 'Statistical testing and compact analytical workflows in Python.' },
      { name: 'XGBoost', short: 'XGBoost', brand: 'xgboost', detail: 'Gradient-boosted classification and regression in predictive modelling workflows.' },
      { name: 'LightGBM', short: 'LightGBM', brand: '', detail: 'Gradient-boosted decision-tree modelling used in large-scale forecasting and predictive analytics.' },
      { name: 'CatBoost', short: 'CatBoost', brand: '', detail: 'Gradient-boosting models used in comparative machine-learning workflows.' },
      { name: 'SHAP', short: 'SHAP', brand: '', detail: 'Feature-attribution analysis and explainable-AI interpretation.' },
      { name: 'PyTorch', short: 'PyTorch', brand: 'pytorch', detail: 'Deep-learning model development, transfer learning, GPU training and experimentation.' },
      { name: 'torchvision', short: 'torchvision', brand: 'pytorch', detail: 'Computer-vision model architectures, transforms and image-learning utilities used with PyTorch.' },
      { name: 'TensorFlow / Keras', short: 'TensorFlow / Keras', brand: 'tensorflow', detail: 'Deep-learning model development, training and transfer-learning workflows.' },
      { name: 'OpenCV', short: 'OpenCV', brand: 'opencv', detail: 'Image preprocessing, transformation and computer-vision workflows.' },
      { name: 'Ultralytics', short: 'Ultralytics', brand: 'ultralytics', detail: 'YOLO-based object-detection and computer-vision experimentation.' },
      { name: 'Matplotlib', short: 'Matplotlib', brand: '', detail: 'Scientific visualization and publication-oriented plotting.' },
      { name: 'Seaborn', short: 'Seaborn', brand: '', detail: 'Statistical visualization for exploratory and comparative analysis.' },
      { name: 'Librosa', short: 'Librosa', brand: '', detail: 'Audio preprocessing, spectral analysis and feature-based signal processing.' },
      { name: 'SoundFile / PySoundFile', short: 'SoundFile', brand: '', detail: 'Audio-file reading and writing, waveform I/O and reproducible handling of WAV and related sound formats in Python signal-processing workflows.' },
      { name: 'mir_eval', short: 'mir_eval', brand: '', detail: 'Music-information-retrieval evaluation utilities used for source-separation metrics.' },
      { name: 'GeoPandas', short: 'GeoPandas', brand: 'geopandas', detail: 'Geospatial tabular data handling, mapping and spatial research workflows.' }
    ]},
    { group: 'Productivity & Collaboration', icon: 'workspace', items: [
      { name: 'Microsoft 365 / Office', short: 'Microsoft 365 / Office', brand: 'microsoft365', detail: 'Microsoft Word for manuscripts and technical documents; Excel for tabular work and research data handling; PowerPoint for conference, teaching and research presentations.' },
      { name: 'Google Workspace', short: 'Google Workspace', brand: 'google', detail: 'Docs, Sheets, Slides, Drive and Forms for collaborative research, survey workflows and team documentation.' }
    ]},
    { group: 'Reference & Research Management', icon: 'publication', items: [
      { name: 'Mendeley', short: 'Mendeley', brand: 'mendeley', detail: 'Reference management, scholarly literature organization, research-PDF library management, citation and bibliography workflows, and preparation of publication-ready references.' }
    ]}
  ];

  const computationalEnvironments = [
    {
      title: 'Audio source separation / FastICA',
      context: 'Published reproducible signal-processing workflow',
      system: 'Windows 11 · build 10.0.26200 · Python 3.12.3 · NVIDIA GeForce RTX 4090',
      stack: ['NumPy 2.0.0', 'scikit-learn 1.7.2', 'librosa 0.11.0', 'SoundFile / PySoundFile', 'mir_eval 0.8.2', 'FFmpeg', 'PyTorch 2.5.1', 'CUDA device cuda:0']
    },
    {
      title: 'Diabetic-retinopathy grading',
      context: 'Deep learning, feature fusion and explainable computer vision',
      system: 'Windows 11 · Intel Core i9-13900K · 64 GB RAM · NVIDIA RTX 4090 24 GB · Python 3.12.3',
      stack: ['PyTorch 2.5.1', 'torchvision 0.20.1', 'CUDA 12.1', 'cuDNN 9.1', 'scikit-learn 1.7.2', 'XGBoost 2.1.3', 'OpenCV 4.12.0']
    },
    {
      title: 'Survey, statistical and geospatial ML analyses',
      context: 'Statistical modelling, explainability and geospatial analytical workflows',
      system: 'Windows 11 · Python 3.13.9 · Jupyter Notebook',
      stack: ['pandas 2.3.3', 'NumPy 2.3.5', 'PyReadStat 1.3.3', 'SciPy 1.17.1', 'statsmodels 0.14.5', 'Pingouin 0.6.1', 'GeoPandas 1.1.3', 'Matplotlib 3.10.6', 'Seaborn 0.13.2', 'scikit-learn 1.8.0', 'XGBoost 3.2.0', 'LightGBM 4.6.0', 'CatBoost 1.2.10', 'SHAP 0.48.0']
    },
    {
      title: 'Nationwide dengue forecasting',
      context: 'Canonical district-informed forecasting analyses',
      system: 'Windows 11 · AMD Ryzen 7 7735HS · 8 GB RAM · NVIDIA RTX 4050 Laptop GPU · Python 3.11.15',
      stack: ['NumPy 2.4.6', 'pandas 3.0.2', 'SciPy 1.17.1', 'scikit-learn 1.9.0', 'LightGBM 4.7.0', 'statsmodels 0.14.6', 'SHAP 0.51.0', 'Matplotlib 3.10.9', 'Seaborn 0.13.2', 'GeoPandas 1.1.3', 'Deterministic seed 42 where applicable']
    },
    {
      title: 'GPU object-detection workflow',
      context: 'Deep-learning experimentation for cafeteria food detection',
      system: 'NVIDIA Tesla T4 · 14,912 MiB VRAM · Intel Xeon · 13–16 GB RAM · Python 3.12.13',
      stack: ['PyTorch 2.10.0+cu128', 'CUDA 12.8', 'Ultralytics 8.4.152']
    },
    {
      title: 'Classical tabular ML workflow',
      context: 'Python-based predictive modelling and visualization',
      system: 'Windows 11 · Python 3.12.4',
      stack: ['NumPy 2.0.2', 'pandas 2.3.3', 'scikit-learn 1.8.0', 'XGBoost 3.2.0', 'Matplotlib 3.10.0']
    },
    {
      title: 'Ordinal statistical modelling',
      context: 'Python implementation for ordinal regression analyses',
      system: 'Python 3.13.5',
      stack: ['pandas 2.2.3', 'statsmodels 0.14.6', 'NumPy 2.3.5', 'SciPy 1.17.0']
    }
  ];

  const technicalSkills = [
    {
      icon: 'analysis',
      title: 'Statistical Modelling & Research Methods',
      summary: 'Core statistical design, inference and modelling methods used across survey, public-health and applied research.',
      items: [
        'Descriptive & inferential statistics',
        'Hypothesis testing',
        'Correlation & regression analysis',
        'Multivariate analysis',
        'Sampling & survey methods',
        'Survey-weighted modelling',
        'Generalised estimating equations',
        'Time-series modelling & forecasting',
        'Causal-inference methods',
        'Sensitivity analysis'
      ]
    },
    {
      icon: 'code',
      title: 'Machine Learning & Explainable AI',
      summary: 'Predictive modelling from preprocessing through interpretation, validation and model comparison.',
      items: [
        'Data preprocessing',
        'Feature engineering & selection',
        'Classification & regression',
        'Support vector machines',
        'Decision trees & random forests',
        'k-nearest neighbours',
        'Gaussian naïve Bayes',
        'Linear discriminant analysis',
        'Multilayer perceptrons',
        'XGBoost',
        'Ensemble & stacking methods',
        'Model calibration',
        'SHAP-based interpretation',
        'Grad-CAM++ visual interpretation'
      ]
    },
    {
      icon: 'lab',
      title: 'Deep Learning, Computer Vision & NLP',
      summary: 'Applied AI workflows spanning medical imaging, food computing, object detection and text analytics.',
      items: [
        'Artificial neural networks',
        'Convolutional neural networks',
        'Recurrent neural networks',
        'Transfer learning',
        'Image preprocessing & augmentation',
        'Handcrafted feature extraction',
        'Feature fusion',
        'Medical-image classification & grading',
        'YOLO & RT-DETR object detection',
        'Grad-CAM++',
        'Text preprocessing',
        'Sentiment analysis'
      ]
    },
    {
      icon: 'field',
      title: 'Signal Processing & Dimensionality Reduction',
      summary: 'Feature extraction and latent-structure methods used in audio and multivariate research.',
      items: [
        'Principal component analysis',
        'Factor analysis',
        'Independent component analysis',
        'FastICA',
        'Audio preprocessing',
        'Blind source separation',
        'Feature-based audio analysis'
      ]
    },
    {
      icon: 'terminal',
      title: 'Programming & Research Development',
      summary: 'Programming, reproducible computing and research-prototype development across statistical and AI projects.',
      items: [
        'Python, R & C programming',
        'JavaScript for interactive research interfaces',
        'Jupyter Notebook & Google Colab',
        'Flask backend & model-serving prototypes',
        'Streamlit research applications',
        'HTML5 & CSS3',
        'Git & GitHub workflows',
        'Kaggle notebook workflows'
      ]
    },
    {
      icon: 'review',
      title: 'Validation, Reproducibility & Scientific Communication',
      summary: 'Research-quality evaluation, reporting and documentation practices used across manuscripts and analytical projects.',
      items: [
        'Data cleaning & preprocessing',
        'Missing-data handling',
        'Leakage-aware analytical workflows',
        'Cross-validation',
        'Bootstrapping',
        'ROC-AUC & precision–recall evaluation',
        'Calibration assessment',
        'Confusion-matrix metrics',
        'Reproducible analysis',
        'Publication-quality figures & tables',
        'Supplementary materials',
        'Technical documentation'
      ]
    },
    {
      icon: 'workspace',
      featured: true,
      eyebrow: 'Generative AI capability',
      title: 'Generative AI, Prompt Engineering & AI-Assisted Research',
      summary: 'Structured use of large-language-model tools to accelerate research thinking, coding, documentation and scholarly communication while keeping methodological decisions, source checking and final verification under human control.',
      items: [
        'Structured prompt design',
        'Task decomposition',
        'Context-rich prompting',
        'Iterative prompt refinement',
        'Prompt templates & reusable workflows',
        'Multi-model comparison',
        'Research ideation & question refinement',
        'Code debugging & analytical workflow support',
        'Technical summarization & documentation',
        'Source-grounded document synthesis',
        'Manuscript language refinement',
        'Output verification & hallucination checking',
        'Human-in-the-loop validation'
      ],
      platforms: [
        { name: 'ChatGPT', short: 'ChatGPT', brand: 'openai' },
        { name: 'Claude', short: 'Claude', brand: 'anthropic' },
        { name: 'Gemini', short: 'Gemini', brand: 'googlegemini' },
        { name: 'DeepSeek', short: 'DeepSeek', brand: 'deepseek' },
        { name: 'Grok', short: 'Grok', brand: '' },
        { name: 'Perplexity', short: 'Perplexity', brand: 'perplexity' },
        { name: 'Gemini Notebook', short: 'Gemini Notebook', brand: 'googlegemini' },
        { name: 'QuillBot', short: 'QuillBot', brand: 'quillbot' },
        { name: 'Microsoft Copilot', short: 'Copilot', brand: 'microsoftcopilot' }
      ],
      principle: 'AI-assisted outputs are independently checked against the underlying data, code, source literature and domain context before being used in research or scholarly communication.',
      note: 'Prompt engineering is presented here as an applied research-workflow capability, not as a substitute for statistical, computational or subject-matter expertise.'
    }
  ];

  const fieldSurvey = {
    title: 'Statistical Field Survey',
    courseCode: 'STAT-4110',
    degree: 'Bachelor of Science (B.Sc. Hons.) in Statistics',
    credits: 2,
    grade: 'A+',
    gradeLabel: 'Academic grade',
    study: 'Measuring Attitudes toward AI’s Impact on the Job Market in Bangladesh: A Study at Pabna University of Science and Technology',
    supervisor: 'Prof. Dr. Md. Shamim Reza',
    team: ['Md. Razu Ahmed', 'Md. Abdur Rakib', 'Abu Bakar Shiddik', 'Prof. Dr. Md. Shamim Reza'],
    population: 'Target population: 4,795',
    sample: '370 participants',
    variables: '33 variables · 8 socio-demographic + 25 attitudinal',
    design: 'Proportionate stratified random sampling · questionnaire survey and interviews · 5-point Likert instrument',
    workflowAsset: 'assets/academic/field-survey/ai-job-market-field-survey-workflow.png',
    workflowCaption: 'B.Sc. statistical field survey on perceptions of artificial intelligence and the job market at Pabna University of Science and Technology.',
    keywords: [
      'Artificial intelligence (AI)',
      'Job market perceptions',
      'Job displacement',
      'Questionnaire survey',
      'Proportionate stratified random sampling',
      'Correspondence analysis',
      'Principal component analysis (PCA)'
    ],
    conference: {
      shortName: '2nd ICRAST 2025',
      fullName: '2nd International Conference on Recent Advances in Science and Technology 2025 (ICRAST 2025)',
      host: 'Faculty of Science, University of Rajshahi, Rajshahi, Bangladesh',
      organizer: 'Faculty of Science, University of Rajshahi',
      venue: 'University of Rajshahi, Rajshahi, Bangladesh',
      date: '14–15 November 2025',
      source: 'Book of Abstracts',
      page: 'p. 120',
      presentation: 'Oral Presentation',
      role: 'Presenting Author',
      summary: 'ICRAST 2025 brought together researchers, academicians, industry experts and students for interdisciplinary exchange across science and technology, including engineering, information technology, biotechnology, environmental science, materials science and mathematical sciences.',
      flyerAsset: 'assets/academic/conferences/icrast-2025-official-flyer.webp',
      flyerLabel: 'Official conference flyer',
      url: 'https://csa.ru.ac.bd/science/conf2nd/',
      citation: 'Ahmed, M. R., Rakib, M. A., Shiddik, A. B., & Reza, M. S. (2025). Measuring Attitudes toward AI’s Impact on the Job Market in Bangladesh: A study at Pabna University of Science and Technology (p. 120).',
      citationIEEE: 'M. R. Ahmed, M. A. Rakib, A. B. Shiddik, and M. S. Reza, “Measuring Attitudes toward AI’s Impact on the Job Market in Bangladesh: A study at Pabna University of Science and Technology,” in Book of Abstracts, 2nd International Conference on Recent Advances in Science and Technology (ICRAST 2025), Rajshahi, Bangladesh, Nov. 14–15, 2025, p. 120.'
    },
    article: {
      title: 'Perceptions of Artificial Intelligence and Its Implications for Employment in Bangladesh',
      status: 'Accepted / Forthcoming',
      acceptedDate: '2 September 2026',
      forthcoming: 'Volume 26, Issue 2 · November 2026',
      journal: 'International Journal of Statistical Sciences',
      abbreviatedJournal: 'Int. j. stat. sci.',
      issn: '1683-5603',
      citation: 'Ahmed, M. R., Rakib, M. A., Shiddik, A. B., Mauya, J., Hoque, M. A., & Reza, M. S. (2026). Perceptions of Artificial Intelligence and Its Implications for Employment in Bangladesh. International Journal of Statistical Sciences. Accepted 2 September 2026; forthcoming in Volume 26, Issue 2, November 2026.',
      citationIEEE: 'M. R. Ahmed, M. A. Rakib, A. B. Shiddik, J. Mauya, M. A. Hoque, and M. S. Reza, “Perceptions of Artificial Intelligence and Its Implications for Employment in Bangladesh,” International Journal of Statistical Sciences, vol. 26, no. 2, forthcoming Nov. 2026.',
      publisher: 'Department of Statistics and Data Science, University of Rajshahi, Rajshahi, Bangladesh',
      publicationModel: 'Peer-reviewed · Open access · Published biannually, with special issues when applicable',
      license: 'Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International (CC BY-NC-SA 4.0)',
      journalSince: 'Published since 2002',
      hosting: 'Hosted on Bangladesh Journals Online (BanglaJOL) since 2023; BanglaJOL is managed by the Bangladesh Academy of Sciences.',
      indexing: [
        'ICI World of Journals · ICV indicator 2024: 68.51',
        'Eurasian Scientific Journal Index (ESJI)',
        'Statistical Theory and Method Abstract, International Statistical Institute',
        'Bangladesh Journals Online (BanglaJOL)',
        'Bangladesh National Scientific and Technical Documentation Centre (BANSDOC)'
      ],
      links: [
        { label: 'Official Journal Website', url: 'https://www.ru.ac.bd/stat/ijss/' },
        { label: 'BanglaJOL Host Page', url: 'https://www.banglajol.info/index.php/ijss' }
      ],
      contact: {
        office: 'Executive Editor, IJSS, Department of Statistics and Data Science, University of Rajshahi, Rajshahi-6205, Bangladesh',
        email: 'ijss@ru.ac.bd'
      }
    },
    progression: ['B.Sc. Statistical Field Survey', '2nd ICRAST 2025 oral presentation', 'Accepted journal article']
  };

  const education = [
    {
      degree: 'Master of Science (M.S.) in Statistics',
      institution: 'Pabna University of Science and Technology (PUST), Pabna-6600, Bangladesh',
      logo: 'assets/academic/education/pust-logo.png?v=20260918-1',
      year: 'Exam Year 2022 · Examination held 2025',
      detail: 'CGPA 3.49/4.00 · Ranked 5th in the project-based (non-thesis) track',
      moi: 'Medium of Instruction (MOI): English',
      icon: 'graduation'
    },
    {
      degree: 'Bachelor of Science (B.Sc. Hons.) in Statistics',
      institution: 'Pabna University of Science and Technology (PUST), Pabna-6600, Bangladesh',
      logo: 'assets/academic/education/pust-logo.png',
      year: 'Exam Year 2021 · Examination held 2024',
      detail: 'CGPA 2.87/4.00',
      moi: 'Medium of Instruction (MOI): English',
      icon: 'graduation'
    },
    {
      degree: 'Higher Secondary Certificate (HSC)',
      institution: 'Rajshahi College, Rajshahi',
      logo: 'assets/academic/education/rajshahi-college-logo.jpg?v=20260918-white2',
      year: '2016',
      board: 'Rajshahi',
      detail: 'Science · GPA 4.83/5.00',
      moi: 'Medium of Instruction (MOI): Bangla',
      icon: 'school'
    },
    {
      degree: 'Secondary School Certificate (SSC)',
      institution: 'Mashkatadighi Multilateral (Technical) High School, Rajshahi',
      logo: 'assets/academic/education/mashkatadighi-high-school-logo.jpg?v=20260918-1',
      year: '2014',
      board: 'Rajshahi',
      detail: 'Science · GPA 5.00/5.00',
      moi: 'Medium of Instruction (MOI): Bangla',
      icon: 'school'
    }
  ];

  const languages = [
    {
      id: 'bangla',
      name: 'Bangla',
      nativeName: 'বাংলা',
      level: 'Native proficiency',
      badge: 'Native / Mother Tongue',
      icon: 'language',
      note: 'Native language used across formal, interpersonal, participant-facing and community communication in Bangladesh.',
      evidence: [
        'Native spoken and written communication across formal and everyday contexts',
        'Field and participant-facing communication in Bangladesh-based survey and public-health research',
        'Comfortable explaining statistical and research concepts in Bangla when communicating with students and local audiences'
      ]
    },
    {
      id: 'english',
      name: 'English',
      nativeName: '',
      level: 'Professional working proficiency',
      badge: 'B.Sc. + M.S. · English MOI',
      icon: 'graduation',
      note: 'Professional academic and research language, supported by English-medium instruction throughout both university degrees in Statistics at PUST.',
      evidence: [
        'Used throughout degree-level lectures, examinations, laboratory/applied coursework and supervised research projects',
        'Primary language for manuscript preparation, scholarly correspondence and research documentation',
        'Used for conference presentations, peer-review activity and communication within multidisciplinary research collaborations'
      ]
    }
  ];

  const languageProfile = {
    statement: 'Native Bangla and professional working proficiency in English, supported by English-medium university education and sustained use of English in research writing, peer review, conference communication, technical documentation and scholarly correspondence.',
    moi: {
      title: 'Academic Medium of Instruction',
      summary: 'Bangla was the Medium of Instruction for SSC and HSC under the Rajshahi Board. English was the Medium of Instruction throughout both Statistics degrees at Pabna University of Science and Technology (PUST).',
      degrees: [
        { label: 'Secondary School Certificate (SSC)', value: 'Bangla', stage: 'Rajshahi Board · Secondary' },
        { label: 'Higher Secondary Certificate (HSC)', value: 'Bangla', stage: 'Rajshahi Board · Higher Secondary' },
        { label: 'Bachelor of Science (B.Sc. Hons.) in Statistics', value: 'English', stage: 'PUST · Undergraduate' },
        { label: 'Master of Science (M.S.) in Statistics', value: 'English', stage: 'PUST · Postgraduate' }
      ]
    },
    evidence: [
      { icon: 'publication', title: 'Research Writing', detail: 'Peer-reviewed articles, active manuscripts, technical documentation and scholarly correspondence prepared in English.' },
      { icon: 'conference', title: 'Conference Communication', detail: 'English used for research presentations, abstracts, posters and conference-facing academic communication.' },
      { icon: 'review', title: 'Peer Review', detail: '32 completed invited peer reviews across international journals, requiring sustained critical reading and written scholarly feedback in English.' },
      { icon: 'field', title: 'Field & Local Communication', detail: 'Bangla supports participant-facing communication, local academic engagement and field research in Bangladesh.' }
    ]
  };

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
    version: '3.0',
    lastUpdated: '19 September 2026',
    brand: {
      monogram: 'MRA',
      name: 'Md. Razu Ahmed',
      headline: 'Statistician | Data Scientist | Researcher | Peer Reviewer',
      subline: 'Statistics · Data Science · Artificial Intelligence · Research',
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
    languageProfile,
    strengths,
    engagement,
    personalInterests: interests,
    tools,
    computationalEnvironments,
    technicalSkills,
    people,
    publicationLinks,
    privacy: {
      publicOnly: true,
      message: 'This portfolio contains only public-approved academic information. Confidential manuscripts, reviewer reports, editorial correspondence, manuscript IDs, private phone numbers and non-public collaborator information are intentionally excluded.'
    }
  };
})();
