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
    },
    dib: {
      primary: [
        { label: 'ScienceDirect', url: 'https://www.sciencedirect.com/science/article/pii/S2352340926008097' },
        { label: 'DOI', url: 'https://doi.org/10.1016/j.dib.2026.113262' },
        { label: 'Mendeley Data', url: 'https://doi.org/10.17632/fn6yhzjz83.2' }
      ],
      discovery: [
        { label: 'Google Scholar', url: 'https://scholar.google.com/scholar?hl=en&as_sdt=0%2C5&q=PUST+Cafeteria+Food+Image+Dataset%3A+Real-World+Bangladeshi+Meal-Platter+Images+with+Bounding-Box+and+Polygon+Annotations&btnG=' },
        { label: 'Semantic Scholar', url: 'https://www.semanticscholar.org/paper/PUST-Cafeteria-Food-Image-Dataset%3A-Real-World-with-Yeasmin-Ahmed/07a90c12567b3985f246f7ef158068e447818609' }
      ],
      social: [
        { label: 'ResearchGate', url: 'https://www.researchgate.net/publication/414270604_PUST_Cafeteria_Food_Image_Dataset_Real-World_Bangladeshi_Meal-Platter_Images_with_Bounding-Box_and_Polygon_Annotations' }
      ]
    },
    'pust-cafeteria-dataset': {
      primary: [
        { label: 'Mendeley Data', url: 'https://data.mendeley.com/datasets/fn6yhzjz83/2' },
        { label: 'DOI', url: 'https://doi.org/10.17632/fn6yhzjz83.2' },
        { label: 'ScienceDirect', url: 'https://www.sciencedirect.com/science/article/pii/S2352340926008097' }
      ],
      discovery: [
        { label: 'PlumX Metrics', url: 'https://plu.mx/plum/a/?doi=10.17632/fn6yhzjz83&theme=plum-bigben-theme' }
      ],
      social: []
    }
  };

  const people = [
    {
      id: 'shamim-reza',
      name: 'Prof. Dr. Md. Shamim Reza',
      group: 'Academic Guidance & Advisors',
      featuredProfile: false,
      profilePage: 'network-shamim-reza.html',
      profileBadges: ['Primary Research Supervisor', 'Academic Mentor'],
      headline: 'Professor · Dean, Faculty of Science · Director, IQAC · Head, DSLR Lab',
      roles: ['Primary Research Supervisor', 'Professor', 'Academic Mentor', 'Dean · Director IQAC · Head, DSLR Lab'],
      affiliation: 'Department of Statistics and Data Science, Pabna University of Science and Technology (PUST), Pabna-6600, Bangladesh',
      description: 'Professor of Statistics and Data Science at PUST and Razu’s primary academic supervisor and long-term research mentor across statistical learning, machine learning, biomedical data science, computer vision and applied artificial intelligence.',
      biography: 'Dr. Md. Shamim Reza is a Professor in the Department of Statistics and Data Science at Pabna University of Science and Technology, Bangladesh. He received his PhD from Peking University, China, in 2019 after earlier completing B.Sc. and M.Sc. degrees in Statistics from the University of Rajshahi. His research spans artificial intelligence, machine learning, deep learning, medical imaging, multivariate analysis and computer vision.',
      portrait: 'assets/academic/instructors/shamim-reza.jpg?v=20260918-network24',
      cardPortraitPosition: '50% 16%',
      currentPositions: [
        'Professor, Department of Statistics and Data Science, Pabna University of Science and Technology',
        'Dean, Faculty of Science, Pabna University of Science and Technology',
        'Director, Institutional Quality Assurance Cell (IQAC), Pabna University of Science and Technology',
        'Lab Head, Deep Statistical Learning and Research (DSLR) Lab, Department of Statistics and Data Science, PUST'
      ],
      researchInterests: ['Artificial Intelligence', 'Machine Learning', 'Deep Learning', 'Medical Imaging', 'Multivariate Analysis', 'Computer Vision'],
      education: [
        { degree: 'Doctor of Philosophy (PhD)', institution: 'School of Mathematical Sciences, Department of Information Science, Peking University, Beijing, China', year: '2019', detail: 'Chinese Government Scholarship (CSC); Peking University International Students Academic Award, 2019.' },
        { degree: 'Master of Science (M.Sc., Thesis) in Statistics', institution: 'University of Rajshahi, Rajshahi-6205, Bangladesh', year: '2008', detail: 'First Class · 1st position out of 82 students.' },
        { degree: 'Bachelor of Science (B.Sc. Hons.) in Statistics', institution: 'University of Rajshahi, Rajshahi-6205, Bangladesh', year: '2007', detail: 'First Class · 1st position out of 87 students.' }
      ],
      awards: [
        'K.M. Hossain Award, University of Rajshahi, for securing First Class First in the 2007 B.Sc. (Honours) examination in Statistics.',
        'Peking University International Students Academic Award, 2019.',
        'Chinese Government Scholarship (CSC), Ministry of Education, China, for doctoral study, September 2015–June 2019.'
      ],
      externalAffiliations: [
        'General Secretary, Teachers Association, Pabna University of Science and Technology (2013).',
        'Joint Secretary, Federation of Bangladesh University Teachers Association (2014).'
      ],
      relationship: {
        title: 'Primary research supervision',
        detail: 'Supervisor for Razu’s B.Sc. Statistical Field Survey, B.Sc. Statistical Project and M.S. Project, with continuing mentorship and research collaboration beyond the degree programmes.'
      },
      collaborationStats: [
        { value: '3', label: 'Published journal articles' },
        { value: '1', label: 'Accepted / forthcoming article' },
        { value: '1', label: 'Public research dataset' },
        { value: '7', label: 'Conference contributions' },
        { value: '5', label: 'Manuscripts in editorial process' }
      ],
      sharedPublications: [
        { title: 'Sophisticated Audio Source Separation: A Statistical Exploration of Clarity and Precision With FastICA', venue: 'Engineering Reports, 8(1), e70575 (2026)', doi: 'https://doi.org/10.1002/eng2.70575' },
        { title: 'Identification of Predisposing Risk Factors for Chronic Kidney Disease and Optimizing Disease Prediction Using a Stacking Machine Learning Algorithm', venue: 'International Journal of Statistical Sciences, 25(2), 1–32 (2025)', doi: 'https://doi.org/10.3329/ijss.v25i2.85732' },
        { title: 'PUST Cafeteria Food Image Dataset: Real-World Bangladeshi Meal-Platter Images with Bounding-Box and Polygon Annotations', venue: 'Data in Brief, 69, Article 113262 (2026)', doi: 'https://doi.org/10.1016/j.dib.2026.113262' }
      ],
      sharedAccepted: [
        { title: 'Perceptions of Artificial Intelligence and Its Implications for Employment in Bangladesh', venue: 'International Journal of Statistical Sciences, 26(2), forthcoming November 2026', detail: 'Accepted 2 September 2026.' }
      ],
      sharedDataset: [
        { title: 'PUST Cafeteria Food Image Dataset: Real-World Bangladeshi Meal-Platter Images with Bounding-Box and Polygon Annotations (Version 2)', venue: 'Mendeley Data', doi: 'https://doi.org/10.17632/fn6yhzjz83.2', detail: 'Published 28 August 2026.' }
      ],
      sharedConferences: [
        {
          event: 'International Conference on Emerging Frontiers in Advanced Sciences and Technologies 2026 (EFAST 2026)',
          venue: 'Pabna University of Science and Technology · 27–28 June 2026 · Proceedings ISBN 978-984-37-0635-5',
          items: [
            'Automated Five-Stage Diabetic Retinopathy Grading Using a Leak-Safe and Explainable Deep-Handcrafted Fusion Framework · p. 173 · Paper ID 108',
            'A Multi-Scale Attention-Based Dense Residual Network for Sugarcane Leaf Disease Detection Using BSRI Data · p. 172 · Paper ID 107',
            'Comparative Analysis of Missing Value Imputation Methods with a Hybrid Approach for HCV Prediction Using Machine Learning · p. 174 · Paper ID 115'
          ]
        },
        {
          event: 'International Conference on Applied Statistics and Data Science 2025 (ICASDS 2025)',
          venue: 'University of Dhaka · 28–29 December 2025 · Programme and Abstract Book',
          items: [
            'A Deep Learning and Handcrafted Feature Fusion Framework for Automated Diabetic Retinopathy Grading from Retinal Fundus Images · p. 200 · Paper ID 341',
            'Predisposing Factor Identification and Multi-Class Grading of Diabetes Mellitus Using Machine Learning · p. 199 · Paper ID 315'
          ]
        },
        {
          event: '2nd International Conference on Recent Advances in Science and Technology 2025 (ICRAST 2025)',
          venue: 'University of Rajshahi · 14–15 November 2025 · Book of Abstracts',
          items: [
            'Measuring Attitudes toward AI’s Impact on the Job Market in Bangladesh: A Study at Pabna University of Science and Technology · p. 120 · Paper ID 440',
            'Facial Emotion Recognition with Dimensionality Reduction: A Comparative Study of PCA, FA, and Combined PCA–FA with a CNN Baseline · p. 126 · Paper ID 461'
          ]
        }
      ],
      sharedEditorial: [
        { title: 'A Deep Learning and Handcrafted Feature Fusion Framework for Automated Diabetic Retinopathy Grading from Retinal Fundus Images', journal: 'Measurement', publisher: 'Elsevier' },
        { title: 'Comparative Evaluation of Hybrid MICE–Median Missing-Value Reconstruction and Downstream Hepatitis C Prediction Using Machine Learning', journal: 'BMC Medical Informatics and Decision Making', publisher: 'BMC · Springer Nature' },
        { title: 'Real-Time Food Detection for Automated Cafeteria Billing Using RT-DETR and GAN-Based Data Augmentation', journal: 'Discover Artificial Intelligence', publisher: 'Springer Nature' },
        { title: 'Adaptive Probability Fusion of Lightweight Recurrent Networks for Cross-Domain Sentiment Classification', journal: 'Applied AI Letters', publisher: 'Wiley' },
        { title: 'Factors Associated with Undergraduates Academic Performance Among Public University Students: A Case Study', journal: 'International Journal of Educational Reform', publisher: 'SAGE' }
      ],
      shared: [
        'FastICA source separation',
        'CKD prediction',
        'AI-employment perceptions',
        'Diabetic-retinopathy grading',
        'HCV missing-data reconstruction',
        'PUST Cafeteria Food Image Dataset',
        'Cafeteria billing and food detection',
        'Cross-domain sentiment classification',
        'Undergraduate academic-performance research'
      ],
      email: 'shamim.reza@pust.ac.bd',
      additionalEmail: 'mshamim.pust@gmail.com',
      links: [
        { label: 'PUST Profile', url: 'https://pust.ac.bd/academic/departments/dept_teachers/dept_teachers_profile/100038' },
        { label: 'Google Scholar', url: 'https://scholar.google.com/citations?user=QlWV6XoAAAAJ&hl=en' },
        { label: 'ORCID', url: 'https://orcid.org/0000-0002-3699-0494' },
        { label: 'Scopus', url: 'https://www.scopus.com/authid/detail.uri?authorId=58044597500' },
        { label: 'ResearchGate', url: 'https://www.researchgate.net/profile/Md-Reza-18' },
        { label: 'AD Scientific Index', url: 'https://adscientificindex.com/scientist/md-shamim-reza/5906837/' }
      ]
    },
    {
      id: 'sabba-ruhi',
      name: 'Prof. Dr. Sabba Ruhi',
      group: 'Academic Guidance & Advisors',
      profilePage: 'network-sabba-ruhi.html',
      profileBadges: ['Research Collaborator', 'Co-author'],
      headline: 'Professor · Chairman, Department of Statistics and Data Science',
      roles: ['Professor', 'Chairman', 'Research Collaborator', 'Co-author'],
      affiliation: 'Department of Statistics and Data Science, Pabna University of Science and Technology (PUST), Pabna-6600, Bangladesh',
      description: 'Professor and Chairman of the Department of Statistics and Data Science at PUST, with research interests spanning complex lifetime models, biostatistics, machine learning, survival analysis and reliability analysis.',
      heroNote: 'As Razu’s department chairman and research collaborator, she has been a valued senior academic presence in his journey—encouraging his research development, strengthening his confidence, and supporting his growth through meaningful scholarly collaboration.',
      showHeroNote: false,
      showCardNote: false,
      biography: 'Dr. Sabba Ruhi is a Professor in the Department of Statistics and Data Science at Pabna University of Science and Technology, Bangladesh. She completed her B.Sc. and M.Sc. degrees in Statistics and doctoral studies at the University of Rajshahi. Her research focuses on complex lifetime models, biostatistics, machine learning, survival analysis and reliability analysis.',
      portrait: 'assets/academic/instructors/sabba-ruhi.png?v=20260918-network24',
      cardPortraitPosition: '50% 22%',
      currentPositions: [
        'Professor, Department of Statistics and Data Science, Pabna University of Science and Technology',
        'Chairman, Department of Statistics and Data Science, Pabna University of Science and Technology'
      ],
      researchInterests: ['Complex Lifetime Models', 'Biostatistics', 'Machine Learning', 'Survival Analysis', 'Reliability Analysis'],
      education: [
        { degree: 'Doctor of Philosophy (PhD) in Statistics', institution: 'Department of Statistics, Faculty of Science, University of Rajshahi, Rajshahi-6205, Bangladesh', year: '2016', detail: 'Thesis: Analysis of Complex Lifetime Models for Analysis of Product Failure Data.' },
        { degree: 'Master of Science (M.Sc., Thesis) in Statistics', institution: 'University of Rajshahi, Rajshahi-6205, Bangladesh', year: '2008', detail: 'First Class · 2nd position in order of merit (70% marks). Thesis: Product Failure Data Analysis.' },
        { degree: 'Bachelor of Science (B.Sc. Hons.) in Statistics', institution: 'University of Rajshahi, Rajshahi-6205, Bangladesh', year: '2007', detail: 'First Class · 6th position in order of merit (67.60% marks).' }
      ],
      awards: [
        'Gold Medalist, Tapasi Rabeya Hall Talent Award 2007, University of Rajshahi.',
        'University Merit Scholarship during B.Sc. and M.Sc. study.',
        'Lifetime Member, Rajshahi University Statistics Alumni (RUSA).'
      ],
      externalAffiliations: [],
      relationship: {
        title: 'Research collaborator & co-author',
        detail: 'Research collaborator and co-author with Razu on two conference papers presented at the International Conference on Emerging Frontiers in Advanced Sciences and Technologies 2026 (EFAST 2026).'
      },
      relationshipPath: ['Research collaboration', 'EFAST 2026', '2 conference contributions'],
      collaborationStats: [
        { value: '1', label: 'Shared conference event' },
        { value: '2', label: 'Conference contributions' }
      ],
      sharedConferences: [
        {
          event: 'International Conference on Emerging Frontiers in Advanced Sciences and Technologies 2026 (EFAST 2026)',
          venue: 'Pabna University of Science and Technology · 27–28 June 2026 · Conference Proceedings · ISBN 978-984-37-0635-5',
          items: [
            'Mauya, J., Ahmed, M. R., Ruhi, S., & Reza, M. S. (2026). A Multi-Scale Attention-Based Dense Residual Network for Sugarcane Leaf Disease Detection Using BSRI Data · p. 172',
            'Islam, M. O., Ahmed, M. R., & Ruhi, S. (2026). Socioeconomic Determinants of Cesarean Section Delivery in Bangladesh: A Survey-Weighted Statistical and Explainable Machine Learning Analysis · p. 298'
          ]
        }
      ],
      shared: [
        'Sugarcane leaf disease detection — EFAST 2026',
        'Cesarean-section determinants in Bangladesh — EFAST 2026'
      ],
      email: 'sabba.ruhi@pust.ac.bd',
      additionalEmail: 'sabba.ruhi@gmail.com',
      links: [
        { label: 'PUST Profile', url: 'https://pust.ac.bd/academic/departments/dept_teachers/dept_teachers_profile/100146' },
        { label: 'Google Scholar', url: 'https://scholar.google.com/citations?user=USWvpZEAAAAJ&hl=en' },
        { label: 'ResearchGate', url: 'https://www.researchgate.net/profile/Sabba-Ruhi' },
        { label: 'Scopus', url: 'https://www.scopus.com/authid/detail.uri?authorId=56919677900' },
        { label: 'ORCID', url: 'https://orcid.org/0009-0008-2321-8738' },
        { label: 'AD Scientific Index', url: 'https://adscientificindex.com/scientist/sabba-ruhi/6259964/' }
      ]
    },
    {
      id: 'aminul-hoque',
      name: 'Prof. Dr. Md. Aminul Hoque',
      group: 'Academic Guidance & Advisors',
      profilePage: 'network-aminul-hoque.html',
      profileBadges: ['Research Mentor', 'Academic Guest Teacher', 'Collaborator'],
      headline: 'Professor · Academic Guest Teacher · Bioinformatics & Statistical Genetics',
      roles: ['Research Mentor', 'Academic Guest Teacher', 'Research Collaborator', 'Professor'],
      affiliation: 'Department of Statistics and Data Science, University of Rajshahi, Rajshahi-6205, Bangladesh',
      description: 'Professor at the University of Rajshahi and a senior academic mentor to Md. Razu Ahmed, providing scholarly guidance and encouragement in statistical modelling, machine learning, bioinformatics and interdisciplinary research.',
      biography: 'Dr. Md. Aminul Hoque is a Professor in the Department of Statistics and Data Science at the University of Rajshahi, Bangladesh. He earned his PhD in Bioinformatics from Keio University, Japan, and completed postdoctoral research in bioinformatics at the University of Malaya, Malaysia, and Niigata University, Japan. His academic profile spans statistics, genomics, bioinformatics, statistical genetics, machine learning and interdisciplinary data-driven research.',
      portrait: 'assets/academic/instructors/aminul-hoque.jpg?v=20260918-network24',
      cardPortraitPosition: '50% 18%',
      currentRoleLabel: 'Current appointments & teaching',
      currentPositions: [
        'Professor, Department of Statistics and Data Science, University of Rajshahi',
        'Academic Guest Teacher — Genomics and Bioinformatics',
        'Academic Guest Teacher — Advanced Statistical Genetics and Bioinformatics'
      ],
      researchInterests: ['Bioinformatics', 'Statistical Genetics', 'Genomics', 'Statistical Modelling', 'Machine Learning', 'Computational Biology'],
      education: [
        { degree: 'Doctor of Philosophy (PhD) in Bioinformatics', institution: 'Keio University, Japan', year: '2005', detail: 'Awarded.' },
        { degree: 'Postdoctoral Research in Bioinformatics', institution: 'University of Malaya (UM), Malaysia', year: '2008–2009', detail: 'Completed.' },
        { degree: 'JSPS Postdoctoral Research in Bioinformatics', institution: 'Niigata University, Japan', year: '2009–2011', detail: 'Completed.' },
        { degree: 'Visiting Professor', institution: 'Tokyo University of Science (TUS), Japan', year: 'Aug–Sep 2009', detail: 'Visiting academic appointment.' },
        { degree: 'Young Scientist Fellowship · ICTP (SRM2255)', institution: 'International Centre for Theoretical Physics (ICTP), Italy', year: 'Oct–Nov 2011', detail: 'Participant.' },
        { degree: 'Master of Science (M.Sc., Thesis) in Statistics', institution: 'University of Rajshahi, Bangladesh', year: '1989', detail: 'First Class · Stood 2nd.' },
        { degree: 'Bachelor of Science (B.Sc. Hons.) in Statistics', institution: 'University of Rajshahi, Bangladesh', year: '1988', detail: 'First Class · Stood 2nd.' },
        { degree: 'Higher Secondary Certificate (Science)', institution: 'Rajshahi Board, Bangladesh', year: '1985', detail: 'First Division.' },
        { degree: 'Secondary School Certificate (Science)', institution: 'Rajshahi Board, Bangladesh', year: '1983', detail: 'First Division.' }
      ],
      awards: [
        'Young Scientist Fellowship participant, ICTP (SRM2255), Italy, October–November 2011.',
        'JSPS postdoctoral research appointment in Bioinformatics, Niigata University, Japan, 2009–2011.',
        'Visiting Professor, Tokyo University of Science, Japan, August–September 2009.'
      ],
      externalAffiliations: [
        'Editorial Board Member, Journal of Integrative Computational Biosciences (JICB).',
        'External Expert in Mathematics for faculty evaluation, University of Malaya, Kuala Lumpur, Malaysia.',
        'Member, International Society for Computational Biology (ISCB).',
        'Vice President & Life Member, Bangladesh Bioinformatics and Computational Biology Association (BBCBA).',
        'Vice President & Life Member, Bioinformatics Research Group in Rajshahi University (BioRGRU).',
        'Joint Secretary, Executive Committee, Bangladesh Statistical Association (BSA), 2015–2017.',
        'Life Member, International Journal of Statistical Sciences.',
        'Life Member, Bangladesh Statistical Association.',
        'Life Member, Rajshahi University Statistical Alumni (RUSA).',
        'Life Member, Rajshahi University Alumni Association (RUAA).',
        'Executive Member, Rajshahi University Teacher Association, 1998.',
        'Member, Bangladesh Science Association.',
        'Guest Editor, BioMed Research International — special issue: “Computational Biology and Bioinformatics: Challenges and Solutions in omics Data Analysis”.',
        'Guest Editor, International Journal of Statistical Sciences (IJSS).'
      ],
      relationship: {
        title: 'Senior academic guidance & research collaboration',
        detail: 'Provides valuable guidance, encouragement and scholarly advice to Md. Razu Ahmed in statistical modelling, machine learning, bioinformatics and interdisciplinary research, and collaborates on the accepted AI-and-employment manuscript.'
      },
      relationshipPath: [
        'Academic Guest Teaching',
        'Statistical Modelling & Machine Learning Guidance',
        'Bioinformatics & Interdisciplinary Research Advice',
        'Ongoing Research Collaboration'
      ],
      sharedAccepted: [
        {
          title: 'Perceptions of Artificial Intelligence and Its Implications for Employment in Bangladesh',
          venue: 'International Journal of Statistical Sciences, Volume 26, Issue 2 · forthcoming November 2026',
          detail: 'Accepted 2 September 2026.'
        }
      ],
      shared: [
        'Perceptions of Artificial Intelligence and Its Implications for Employment in Bangladesh — accepted / forthcoming'
      ],
      email: 'aminul@ru.ac.bd',
      additionalEmail: 'mdaminulh@gmail.com',
      links: [
        { label: 'RU Profile', url: 'https://profile.ru.ac.bd/public/profile/00608', icon: 'assets/academic/journals/ijss/ru-logo.webp?v=20260923-ru2' },
        { label: 'Google Scholar', url: 'https://scholar.google.com/citations?user=TuzbEhAAAAAJ&hl=en' },
        { label: 'Scopus', url: 'https://www.scopus.com/authid/detail.uri?authorId=59157780100' },
        { label: 'AD Scientific Index', url: 'https://adscientificindex.com/scientist/md-aminul-hoque/402952/' }
      ]
    },
    {
      id: 'menhazul-abedin',
      name: 'Dr. Md. Menhazul Abedin',
      group: 'Academic Guidance & Advisors',
      profilePage: 'network-menhazul-abedin.html',
      profileBadges: ['Academic Guest Teacher', 'Academic Mentor', 'Senior Academic Guidance'],
      headline: 'Associate Professor · Head, STAANS Lab · Academic Guest Teacher',
      roles: ['Academic Guest Teacher', 'Academic Mentor', 'Senior Academic Guidance', 'Associate Professor', 'Head, STAANS Lab'],
      affiliation: 'Statistics Discipline, Kabi Jibanananda Das Academic Building, Room No. 3160, Khulna University, Khulna-9208, Bangladesh',
      description: 'Associate Professor at Khulna University who taught Advanced Multivariate Analysis during Md. Razu Ahmed’s M.S. programme and has continued to support and actively motivate his academic and research development through encouragement, constructive guidance and perspectives on statistical and machine-learning research.',
      biography: 'Dr. Md. Menhazul Abedin is an Associate Professor in the Statistics Discipline at Khulna University and Head of the Statistical Theory and Analysis on Natural Sciences Laboratory (STAANS Lab). He received his PhD from Hokkaido University, Japan, where his doctoral research focused on multi-armed and contextual bandit algorithms for sequential experiments, dynamic feature selection and molecule-search applications. His broader research spans reinforcement learning, machine learning, bioinformatics, public health and interdisciplinary statistical applications.',
      portrait: 'assets/academic/instructors/menhazul-abedin.jpg?v=20260918-network24',
      cardPortraitPosition: '50% 18%',
      currentRoleLabel: 'Current academic roles',
      currentPositions: [
        'Associate Professor, Statistics Discipline, Khulna University',
        'Head, Statistical Theory and Analysis on Natural Sciences Laboratory (STAANS Lab), Khulna University',
        'Academic Guest Teacher — Advanced Multivariate Analysis'
      ],
      researchInterests: [
        'Reinforcement Learning',
        'Multi-Armed Bandit Algorithms',
        'Contextual Bandit Algorithms',
        'Sequential Decision-Making',
        'Machine Learning',
        'Bioinformatics',
        'Public Health'
      ],
      education: [
        {
          degree: 'Doctor of Philosophy (PhD)',
          institution: 'Graduate School of Chemical Science and Engineering, Hokkaido University, Japan',
          year: '',
          detail: 'Doctoral research under Professor Tamiki Komatsuzaki. Thesis: “Study on Multi-armed Bandit Algorithm for Sequential Experiments to Predict the Best Molecule with Dynamic Feature Selection.”'
        },
        {
          degree: 'Master of Science (M.Sc., Thesis) in Statistics',
          institution: 'University of Rajshahi, Rajshahi-6205, Bangladesh',
          year: '',
          detail: 'Thesis: “Prospects and Problems of Artificial Neural Network Based Supervised Learning.” Supervisor: Professor Dr. Mohammad Nasser.'
        },
        {
          degree: 'Bachelor of Science (B.Sc. Hons.) in Statistics',
          institution: 'University of Rajshahi, Rajshahi-6205, Bangladesh',
          year: '',
          detail: ''
        }
      ],
      careerHistory: [
        'Associate Professor, Statistics Discipline, Khulna University, Bangladesh.',
        'PhD Fellow, Molecule and Life Nonlinear Sciences Laboratory, Hokkaido University, Japan — DX Fellowship and Hokkaido University Special Grant Program.',
        'Research Assistant, Molecule and Life Nonlinear Sciences Laboratory, Hokkaido University, Japan.',
        'Former Assistant Professor, Statistics Discipline, Khulna University, Bangladesh.',
        'Former Lecturer, Statistics Discipline, Khulna University, Bangladesh.',
        'Former Lecturer in Statistics, Rajshahi Engineering Science & Technology College, Rajshahi, Bangladesh.'
      ],
      taughtCourses: [
        'Stat-5103 · Advanced Multivariate Analysis',
        'Stat-5201 · Generalized Linear Models (GLM)',
        'Stat-4101 · Multivariate Analysis-I',
        'Stat-4201 · Multivariate Analysis-II',
        'Stat-3209 · Actuarial Statistics',
        'Stat-3205 · Advanced Sampling Techniques',
        'Stat-3203 · Sampling Techniques-II',
        'Stat-3111 · Actuarial Statistics',
        'Stat-2251 · Advanced Statistics — Development Studies Discipline',
        'Stat-2153 · Statistics-III — Mathematics Discipline',
        'Stat-1203 · Discrete Probability Distribution',
        'Stat-1163 · Statistics in Environmental Science — Environmental Science Discipline'
      ],
      labProfile: {
        name: 'Statistical Theory and Analysis on Natural Sciences Laboratory (STAANS Lab)',
        established: 'Established November 2016 · website launched November 2025',
        summary: 'A research-oriented laboratory within the Statistics Discipline at Khulna University, founded to advance multidisciplinary research through statistical theory, machine learning and data-driven analysis of natural-science problems.',
        areas: ['Bandit Algorithms', 'Chemical Engineering', 'Chemoinformatics', 'Biomedical Engineering', 'Bioinformatics', 'Biological Science', 'Public Health', 'Regression & Multivariate Analysis', 'Time Series', 'Spatial Statistics', 'Machine Learning']
      },
      awards: [
        'DX Fellowship, Hokkaido University.',
        'AGS Fellowship, Hokkaido University.',
        'National Science and Technology Scholarship, Ministry of Science and Technology, Government of the People’s Republic of Bangladesh.',
        'Khandokar Manowar Hossain Memorial Award, Department of Statistics, University of Rajshahi.'
      ],
      relationship: {
        title: 'M.S. academic guest teacher & continuing mentor',
        detail: 'Dr. Md. Menhazul Abedin taught Advanced Multivariate Analysis during Md. Razu Ahmed’s M.S. programme and has continued to encourage and actively motivate him to pursue research. His constructive guidance, appreciation of Razu’s research efforts and enthusiasm for his development have been especially meaningful. He has shown particular appreciation for Razu’s FastICA-based audio source separation work, often affectionately referring to him as “ICA Razu”.'
      },
      relationshipPath: [
        'M.S. Advanced Multivariate Analysis',
        'Academic Encouragement & Guidance',
        'Statistical & Machine-Learning Research Perspectives',
        'Continuing Academic Mentorship'
      ],
      shared: [],
      email: 'menhaz@stat.ku.ac.bd',
      additionalEmail: 'menhaz70@gmail.com',
      links: [
        { label: 'Khulna University', url: 'https://ku.ac.bd/discipline/stat/faculty/menhaz70' },
        { label: 'Google Scholar', url: 'https://scholar.google.com/citations?hl=en&user=T751PSwAAAAJ' },
        { label: 'ORCID', url: 'https://orcid.org/0000-0002-5293-4636' },
        { label: 'Scopus', url: 'https://www.scopus.com/authid/detail.uri?authorId=57195631682' },
        { label: 'STAANS Lab Blog', url: 'https://staansl.blogspot.com/' },
        { label: 'AD Scientific Index', url: 'https://adscientificindex.com/scientist/md-menhazul-abedinabedin-md-menhazul-abedin-mm-mm-abedin/1967701/' }
      ]
    },
    {
      id: 'feroz-ali',
      name: 'Dr. Md. Feroz Ali',
      group: 'Academic Guidance & Advisors',
      profilePage: 'network-feroz-ali.html',
      profileBadges: ['Research Collaborator', 'Academic Mentor', 'Co-author'],
      headline: 'Associate Professor · Electrical & Electronic Engineering · PUST',
      roles: ['Research Collaborator', 'Academic Mentor', 'Co-author', 'Associate Professor'],
      affiliation: 'Department of Electrical and Electronic Engineering, Pabna University of Science and Technology (PUST), Pabna-6600, Bangladesh',
      description: 'Associate Professor at PUST and a supportive senior academic in Md. Razu Ahmed’s research journey. He provides clear guidance, shares practical research tools and workflow strategies, and collaborates with Razu on nationwide dengue forecasting research.',
      heroNote: 'Dr. Md. Feroz Ali has been a highly supportive and practical senior academic in Razu’s research development. He guides carefully, shares useful research tools, workflow shortcuts and research strategies, and helps Razu approach research problems more efficiently and confidently.',
      showHeroNote: false,
      showCardNote: false,
      biography: 'Dr. Md. Feroz Ali is an Associate Professor in the Department of Electrical and Electronic Engineering at Pabna University of Science and Technology (PUST), Bangladesh. He received his PhD in Electrical Engineering in 2025. During his doctoral research he produced ten scholarly works, including six Q1-ranked journal articles and four IEEE Xplore international conference papers. He began his academic career at PUST as a Lecturer and was subsequently promoted to Assistant Professor and then Associate Professor. He earned his M.Sc. Engg. and B.Sc. Engg. degrees in Electrical and Electronic Engineering from Rajshahi University of Engineering and Technology (RUET). His research spans renewable energy, microgrid planning and optimization, power systems, electrical machines and drives, power electronic converters, solar-cell devices and photovoltaic systems, with international collaborations across multiple countries.',
      portrait: 'assets/academic/instructors/feroz-ali.webp?v=20260923-feroz1',
      cardPortraitPosition: '50% 10%',
      currentRoleLabel: 'Current academic roles',
      currentPositions: [
        'Associate Professor, Department of Electrical and Electronic Engineering, Pabna University of Science and Technology',
        'Advisor, Solver Green, PUST',
        'Treasurer, Electrical and Electronic Engineering Samity, PUST',
        'Advisor, Engineering Students Association of Bangladesh (ESAB) PUST Unit'
      ],
      researchInterests: [
        'Renewable Energy Technologies',
        'Microgrid Planning and Optimization',
        'Power System Analysis and Operation',
        'Electrical Machines and Drives',
        'Power Electronic Converters',
        'Solar Cell Devices and Photovoltaic Systems'
      ],
      education: [
        { degree: 'Doctor of Philosophy (PhD) in Electrical Engineering', institution: '', year: '2025', detail: 'Doctoral research produced 10 scholarly works, including 6 Q1-ranked journal articles and 4 IEEE Xplore international conference papers.' },
        { degree: 'M.Sc. Engg. in Electrical and Electronic Engineering', institution: 'Rajshahi University of Engineering and Technology (RUET), Rajshahi-6204, Bangladesh', year: '2016', detail: 'CGPA: 3.92 out of 4.00.' },
        { degree: 'B.Sc. Engg. in Electrical and Electronic Engineering', institution: 'Rajshahi University of Engineering and Technology (RUET), Rajshahi-6204, Bangladesh', year: '2012', detail: 'CGPA: 3.80 out of 4.00.' },
        { degree: 'Higher Secondary Certificate (H.S.C.)', institution: 'Rajshahi Govt. City College, Rajshahi, Bangladesh', year: '2007', detail: 'GPA: 5.00 out of 5.00.' },
        { degree: 'Secondary School Certificate (S.S.C.)', institution: 'Nazipur High School, Patnitala, Naogaon, Bangladesh', year: '2005', detail: 'GPA: 4.94 out of 5.00.' }
      ],
      careerHistory: [
        'Associate Professor, Department of Electrical and Electronic Engineering, PUST.',
        'Former Assistant Professor, Department of Electrical and Electronic Engineering, PUST.',
        'Former Lecturer, Department of Electrical and Electronic Engineering, PUST.',
        'Assistant Director, Student Advisor Office, PUST (1 September 2022 – 8 October 2024).',
        'Former Counselor, IEEE PUST Student Branch (1 December 2017 – 15 January 2021).',
        'Advisor, Solver Green, PUST (24 June 2019 – Present).',
        'Treasurer, Electrical and Electronic Engineering Samity, PUST (12 August 2018 – Present).',
        'Advisor, Engineering Students Association of Bangladesh (ESAB) PUST Unit (1 December 2017 – Present).'
      ],
      awards: [
        'Academic Excellence Award, Rajshahi University of Engineering and Technology — received four times during undergraduate study (2008–2012).',
        'Recipient of competitive research project awards funded by the University Grants Commission (UGC) of Bangladesh.',
        'Certificate for a highly cited paper in 2024 — Designs (MDPI).',
        'Certificate for a highly cited paper in 2024 — Sustainability (MDPI).'
      ],
      externalAffiliations: [
        'Member, IEEE.',
        'Editorial Board Member, EcoEnergy (Wiley).',
        'Reviewer, Applied Energy.',
        'Reviewer, Energy Conversion and Management.',
        'Reviewer, Renewable and Sustainable Energy Reviews.',
        'Reviewer, Reliability Engineering & System Safety.',
        'Reviewer, International Journal of Electrical Power & Energy Systems.',
        'Reviewer, Journal of Cleaner Production.',
        'Reviewer, Engineering Applications of Artificial Intelligence.',
        'Reviewer, Journal of Energy Storage.',
        'Reviewer, Energy.',
        'Reviewer, Scientific Reports.',
        'Reviewer, PLOS ONE.',
        'Reviewer, Results in Engineering.'
      ],
      relationship: {
        title: 'Supportive mentor, research guide & co-author',
        detail: 'Dr. Md. Feroz Ali has been highly helpful and supportive in Razu’s research development. He provides clear guidance, teaches practical research hacks and useful tools, and shares workflow strategies that help make research more efficient and methodologically focused. He is also a co-author with Razu on a nationwide dengue forecasting manuscript currently under review.'
      },
      relationshipPath: [
        'Supportive senior guidance',
        'Research tools & workflow strategies',
        'Joint dengue forecasting manuscript',
        'Continuing research collaboration'
      ],
      collaborationStats: [
        { value: '1', label: 'Manuscript under review' }
      ],
      sharedEditorial: [
        {
          title: 'Nationwide Evaluation of District-Informed Bottom-Up and Direct National Approaches for One-Week-Ahead Forecasting of Dengue Hospital Admissions in Bangladesh',
          journal: 'BMC Public Health',
          publisher: 'Springer Nature',
          detail: 'Manuscript under review.'
        }
      ],
      shared: [
        'Nationwide dengue forecasting — manuscript under review at BMC Public Health'
      ],
      email: 'feroz.ali.eee@pust.ac.bd',
      additionalEmail: 'feroz071021@gmail.com',
      links: [
        { label: 'PUST Profile', url: 'https://pust.ac.bd/academic/departments/dept_teachers/dept_teachers_profile/100025' },
        { label: 'Google Scholar', url: 'https://scholar.google.com/citations?user=4U27H6gAAAAJ&hl=en' },
        { label: 'ORCID', url: 'https://orcid.org/0000-0003-2764-9371' },
        { label: 'Scopus', url: 'https://www.scopus.com/authid/detail.uri?authorId=57214142395' },
        { label: 'SciProfiles', url: 'https://sciprofiles.com/profile/3188758' },
        { label: 'AD Scientific Index', url: 'https://adscientificindex.com/scientist/md-feroz-ali/4835819/' }
      ]
    },
    {
      "id": "ashad-alam",
      "name": "Dr. Md. Ashad Alam",
      "group": "International Research Collaborators",
      "profilePage": "network-ashad-alam.html",
      "profileBadges": [
        "External Research Mentor",
        "Research Collaborator",
        "Causal Inference & Biomedical AI"
      ],
      "headline": "Assistant Professor of Biomedical Sciences · Xavier Ochsner College of Medicine",
      "roles": [
        "External Research Mentor",
        "Research Collaborator",
        "Assistant Professor"
      ],
      "affiliation": "Xavier Ochsner College of Medicine, Xavier University of Louisiana, New Orleans, LA 70112, USA",
      "description": "International research collaborator and external mentor in statistical machine learning, causal inference, genomics, bioinformatics and biomedical AI. His scholarly guidance supports Razu’s work on emerging research directions and a joint causal-inference review currently in preparation.",
      "portrait": "assets/collaborators/ashad-alam.jpg?v=20260924-collab2",
      cardPortraitPosition: '50% 26%',
      "currentRoleLabel": "Current appointments",
      "currentPositions": [
        "Assistant Professor of Biomedical Sciences, Xavier Ochsner College of Medicine, Xavier University of Louisiana · April 2026–present",
        "Senior Health Informatics Researcher, Ochsner Research, Ochsner Clinic Foundation · December 2022–present"
      ],
      "biographyParagraphs": [
        "Dr. Md. Ashad Alam is an Assistant Professor of Biomedical Sciences at Xavier Ochsner College of Medicine, Xavier University of Louisiana, and a Senior Health Informatics Researcher at Ochsner Research. His work connects statistical machine learning, biomedical informatics, genomics and bioinformatics, with a focus on longitudinal disease trajectories and AI-driven cancer prediction using real-world data.",
        "He earned a PhD in Statistical Science in Japan, with research focused on statistical machine learning, and completed two postdoctoral appointments at Tulane University in biomedical engineering and biostatistics and data science. His teaching experience spans more than 13 years across universities in the United States and Bangladesh. At Tulane, he also served as Graduate Program Co-Director and contributed to the development of MS- and PhD-level Biomedical Health Informatics programs within the School of Medicine."
      ],
      "researchInterests": [
        "Statistical Machine Learning",
        "Causal Inference",
        "Genomics & Bioinformatics",
        "Multi-omics Data Integration",
        "Imaging Genetics",
        "Adversarial Deep Learning",
        "Robust Statistics",
        "Kernel Methods",
        "Longitudinal Disease Trajectories"
      ],
      "education": [
        {
          "degree": "Doctor of Philosophy (PhD) in Statistical Science",
          "institution": "The Graduate University for Advanced Studies (SOKENDAI), Japan · Department of Statistical Science, The Institute of Statistical Mathematics",
          "year": "October 2009–September 2014",
          "detail": "Dissertation (2014): Kernel Choice for Unsupervised Kernel Methods."
        },
        {
          "degree": "Bachelor of Science (B.Sc. Hons.) and Master of Science (M.S., Thesis) in Statistics",
          "institution": "Department of Statistics, University of Rajshahi, Bangladesh",
          "year": "July 1998–June 2004",
          "detail": "M.Sc. Thesis (2003): Comparison among Robust and Non-robust Estimators of Correlation Coefficient: A Bootstrap and Influence Function Based Approach."
        }
      ],
      "researchTraining": [
        {
          "degree": "Postdoctoral Research · Biostatistics and Data Science",
          "institution": "Tulane University School of Public Health and Tropical Medicine, New Orleans, USA",
          "year": "January 2019–November 2020",
          "detail": "Adversarial learning for multi-view data fusion to characterize complex diseases."
        },
        {
          "degree": "Postdoctoral Research · Biomedical Engineering",
          "institution": "Tulane University, New Orleans, USA",
          "year": "November 2015–September 2017",
          "detail": "Extraction and integration of biomarkers from multi-modality kernel-based genomic techniques."
        }
      ],
      "careerTimeline": [
        {
          "period": "April 2026–present",
          "title": "Assistant Professor of Biomedical Sciences",
          "institution": "Xavier Ochsner College of Medicine, Xavier University of Louisiana",
          "location": "New Orleans, LA 70112, USA"
        },
        {
          "period": "December 2022–present",
          "title": "Senior Health Informatics Researcher",
          "institution": "Ochsner Research, Ochsner Clinic Foundation",
          "detail": "Longitudinal disease trajectories and AI-driven cancer prediction using real-world data."
        },
        {
          "period": "November 2020–April 2026",
          "title": "Instructor of Statistics and Data Science",
          "institution": "Tulane University",
          "location": "New Orleans, LA 70112, USA",
          "detail": "Also served as Graduate Program Co-Director, contributing to MS- and PhD-level Biomedical Health Informatics programs in the School of Medicine."
        },
        {
          "period": "January 2019–November 2020",
          "title": "Postdoctoral Researcher",
          "institution": "Tulane University School of Public Health and Tropical Medicine",
          "location": "New Orleans, Louisiana, USA"
        },
        {
          "period": "October 2017–January 2019",
          "title": "Professor",
          "institution": "Hajee Mohammad Danesh Science and Technology University",
          "location": "Bangladesh"
        },
        {
          "period": "2015–2017",
          "title": "Postdoctoral Researcher",
          "institution": "Tulane University · Department of Biomedical Engineering",
          "location": "New Orleans, Louisiana, USA"
        }
      ],
      "awards": [
        "NSF Travel Fund Award, 7th ACM International Conference on Bioinformatics, Computational Biology, and Health Informatics, Seattle, USA, 2016.",
        "Outstanding Presentation Award for “Action Recognition for Robots Using Kernel Methods,” 1st UST–SOKENDAI Joint Seminar on Computer Science, UST, Daejeon, South Korea, 2014.",
        "GUAS and ISM FY 2013 travel support for an international paper or poster presentation by young researchers, Institute of Statistical Mathematics, Tokyo, Japan.",
        "ISM FY 2011 travel support for an international paper or poster presentation by young researchers, Institute of Statistical Mathematics, Tokyo, Japan.",
        "Japanese Government Monbukagakusho (MEXT) Scholarship for doctoral study, October 2009–September 2014.",
        "Merit-based Student Award, University of Rajshahi, Bangladesh, 2001.",
        "Merit-based Hall Gold Medal, Shah Makhdum Hall, University of Rajshahi, Bangladesh, 2001."
      ],
      "relationship": {
        "title": "External research guidance & ongoing collaboration",
        "detail": "Md. Razu Ahmed and his senior collaborator Jannatul Mauya were introduced to Dr. Md. Ashad Alam through their senior collaborator Ruhul Amin. The introduction led to a scholarly meeting, research guidance and ongoing collaborative work. Dr. Alam provides external research guidance on causal inference, genomics, bioinformatics, statistical machine learning and emerging research directions. This collaboration includes a comprehensive review connecting the philosophical foundations of causal inference with modern adversarial deep-learning approaches."
      },
      "relationshipPath": [
        "Introduction through Ruhul Amin, together with Jannatul Mauya",
        "Scholarly meeting and research discussion",
        "External guidance on methods and emerging research directions",
        "Joint causal-inference review in preparation"
      ],
      "collaborationStats": [
        {
          "value": "1",
          "label": "Review in preparation"
        }
      ],
      "sharedInPreparation": [
        {
          "title": "A Comprehensive Review of Causal Inference: Philosophical Issues to Adversarial Deep Learning Issues",
          "detail": "Joint review with Md. Razu Ahmed connecting philosophical foundations of causal inference with modern adversarial deep-learning approaches."
        }
      ],
      "shared": [
        "A Comprehensive Review of Causal Inference: Philosophical Issues to Adversarial Deep Learning Issues — in preparation"
      ],
      "email": "malam@tulane.edu",
      "links": [
        {
          "label": "XULA Profile",
          "url": "https://www.xula.edu/directory//people/md-ashad-alam-phd.html",
          "icon": "data:image/webp;base64,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"
        },
        {
          "label": "LinkedIn",
          "url": "https://www.linkedin.com/in/md-ashad-alam-78445984/",
          "icon": "https://www.google.com/s2/favicons?sz=128&domain=linkedin.com"
        },
        {
          "label": "Google Scholar",
          "url": "https://scholar.google.com/citations?user=pXkJNdYAAAAJ&hl=en"
        },
        {
          "label": "ResearchGate",
          "url": "https://www.researchgate.net/profile/Md-Ashad-Alam"
        },
        {
          "label": "ORCID",
          "url": "https://orcid.org/0000-0002-7622-0216"
        },
        {
          "label": "Loop · Frontiers",
          "url": "https://loop.frontiersin.org/people/1001584/overview",
          "icon": "data:image/webp;base64,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"
        },
        {
          "label": "Scopus",
          "url": "https://www.scopus.com/authid/detail.uri?authorId=56286229400"
        },
        {
          "label": "SciProfiles",
          "url": "https://sciprofiles.com/profile/668270"
        }
      ]
    },
    {
      id: 'ruhul-amin',
      name: 'Ruhul Amin',
      group: 'Departmental Seniors & Senior Collaborators',
      profilePage: 'network-ruhul-amin.html',
      profileBadges: ['Senior Lecturer', 'Research Collaborator', 'Co-author', 'Departmental Senior'],
      headline: 'Senior Lecturer · Computer Science & Engineering · Metropolitan University',
      roles: ['Senior Lecturer', 'Research Collaborator', 'Co-author', 'Departmental Senior'],
      affiliation: 'Department of Computer Science & Engineering, Metropolitan University, Sylhet-3104, Bangladesh',
      description: 'Senior Lecturer in Computer Science & Engineering at Metropolitan University and a departmental senior of Md. Razu Ahmed from PUST. His research spans statistical machine learning, deep learning, pattern recognition, medical imaging, health informatics and intelligent biomedical applications.',
      portrait: 'assets/collaborators/ruhul-amin.jpg?v=20260924-ruhul1',
      cardPortraitPosition: '50% 14%',
      currentRoleLabel: 'Current academic role',
      currentPositions: [
        'Senior Lecturer, Department of Computer Science & Engineering, Metropolitan University, Sylhet-3104, Bangladesh'
      ],
      biographyParagraphs: [
        'Ruhul Amin is a Senior Lecturer in the Department of Computer Science & Engineering at Metropolitan University, Sylhet, Bangladesh. He completed both his B.Sc. and M.S. in Statistics at Pabna University of Science and Technology (PUST), where he joined the Deep Statistical Learning & Research Laboratory (DSLR Lab) in 2021 under the supervision of Prof. Dr. Md. Shamim Reza and later served there as a Research Assistant.',
        'His research focuses on statistical machine learning, deep learning, pattern recognition, medical imaging, image processing, health informatics and data-driven biomedical applications. His work has addressed osteoporosis, sarcopenia, liver-disease diagnosis, diabetes, handwritten-digit recognition and related healthcare problems, with a broader interest in developing intelligent statistical and AI-based solutions for real-world clinical and biomedical settings.'
      ],
      researchInterests: [
        'Statistical Machine Learning',
        'Deep Learning',
        'Pattern Recognition',
        'Medical Imaging',
        'Image Processing',
        'Health Informatics',
        'Big Data Analysis',
        'Biomedical Artificial Intelligence'
      ],
      education: [
  {
    degree: 'Master of Science (M.S., Thesis) in Statistics',
    institution: 'Department of Statistics (now Department of Statistics and Data Science), Pabna University of Science and Technology (PUST), Pabna-6600, Bangladesh',
    year: '2021 · held in 2023',
    detail: 'Thesis: “Multi-Modal Osteoporosis Diagnosis: Clinical Risk Factors & Interpolated X-Ray Images with Machine Learning Approach.”'
  },
  {
    degree: 'Bachelor of Science (B.Sc. Hons.) in Statistics',
    institution: 'Department of Statistics (now Department of Statistics and Data Science), Pabna University of Science and Technology (PUST), Pabna-6600, Bangladesh',
    year: '2019 · held in 2021',
    detail: 'Served as Class Representative (CR) throughout the B.Sc. and M.S. programmes.'
  }
],
      careerTimeline: [
        {
          period: 'Current',
          title: 'Senior Lecturer',
          institution: 'Department of Computer Science & Engineering, Metropolitan University',
          location: 'Sylhet-3104, Bangladesh'
        },
        {
          period: 'Past research experience',
          title: 'Research Assistant · DSLR Lab',
          institution: 'Deep Statistical Learning & Research Laboratory (DSLR Lab), Department of Statistics (now Department of Statistics and Data Science), Pabna University of Science and Technology (PUST), Pabna-6600, Bangladesh'
        },
        {
          period: '26 January 2019–14 March 2021',
          title: 'Research Assistant',
          institution: 'One Health Center for Research and Action',
          location: 'Chittagong, Bangladesh'
        }
      ],
      awards: [
        'National Science & Technology (NST) Fellowship, Ministry of Science and Technology, Government of the People’s Republic of Bangladesh, for research on “Osteoporosis Classification Using Customized Convolution Neural Network: A Case Study in Bangladesh.”',
        'Innovative Research Project Award, Pabna University of Science and Technology, for “An Online Diagnosis of Osteoporosis Patients Grading Using Artificial Intelligence Tools: A Case Study in Pabna.”'
      ],
      externalAffiliations: [
        'Reviewer for peer-reviewed journals published by Elsevier.',
        'Reviewer for PLOS ONE.',
        'Research presenter at the International Conference on the 4th Industrial Revolution (IC4IR) and Beyond, 2021.'
      ],
      relationship: {
        title: 'Departmental senior & continuing research collaborator',
        detail: 'Ruhul Amin is one of Razu’s departmental seniors from PUST and a continuing research collaborator. Their collaboration began through shared statistical and machine-learning research and has developed into recurring co-authorship across signal processing, sentiment analysis, academic-performance research and an emerging causal-inference review.'
      },
      relationshipPath: [
        'Departmental senior at PUST',
        'DSLR Lab research connection',
        'Joint FastICA journal publication',
        'Continuing AI, statistical-learning & causal-inference collaboration'
      ],
      collaborationStats: [
        { value: '1', label: 'Published journal article' },
        { value: '1', label: 'Under Revision' },
        { value: '1', label: 'Awaiting Admin Processing' },
        { value: '1', label: 'Review in preparation' }
      ],
      sharedPublications: [
        {
          title: 'Sophisticated Audio Source Separation: A Statistical Exploration of Clarity and Precision With FastICA',
          venue: 'Engineering Reports, 8(1), e70575 (2026)',
          doi: 'https://doi.org/10.1002/eng2.70575'
        }
      ],
      sharedEditorial: [
        {
          title: 'Adaptive Probability Fusion of Lightweight Recurrent Networks for Cross-Domain Sentiment Classification',
          journal: 'Applied AI Letters',
          publisher: 'Wiley',
          detail: 'Under Revision.'
        },
        {
          title: 'Factors Associated with Undergraduates Academic Performance Among Public University Students: A Case Study',
          journal: 'International Journal of Educational Reform',
          publisher: 'SAGE',
          detail: 'Awaiting Admin Processing.'
        }
      ],
      sharedInPreparation: [
        {
          title: 'A Comprehensive Review of Causal Inference: Philosophical Issues to Adversarial Deep Learning Issues',
          detail: 'Collaborative review in preparation with Md. Razu Ahmed, Dr. Md. Ashad Alam and Jannatul Mauya.'
        }
      ],
      shared: [
        'Sophisticated Audio Source Separation: A Statistical Exploration of Clarity and Precision With FastICA — published in Engineering Reports',
        'Adaptive Probability Fusion of Lightweight Recurrent Networks for Cross-Domain Sentiment Classification — Under Revision',
        'Factors Associated with Undergraduates Academic Performance Among Public University Students: A Case Study — Awaiting Admin Processing',
        'A Comprehensive Review of Causal Inference: Philosophical Issues to Adversarial Deep Learning Issues — in preparation'
      ],
      email: 'ruhul@metrouni.edu.bd',
      additionalEmail: 'ruhulstat6@gmail.com',
      links: [
        { label: 'Metropolitan University', url: 'https://metrouni.edu.bd/sites/university/department-of-computer-science-engineering/faculty-members-cse/308', icon: 'assets/institutions/metropolitan-university.webp?v=20260924-mu1' },
        { label: 'Google Scholar', url: 'https://scholar.google.com/citations?user=s8fYW38AAAAJ&hl=en' },
        { label: 'ORCID', url: 'https://orcid.org/0000-0002-1145-3385' },
        { label: 'ResearchGate', url: 'https://www.researchgate.net/profile/Ruhul-Amin-64' },
        { label: 'SciProfiles', url: 'https://sciprofiles.com/profile/2937238' },
        { label: 'Portfolio', url: 'https://ruhul256.github.io/' },
        { label: 'LinkedIn', url: 'https://www.linkedin.com/in/ruhul-amin-803104157' },
        { label: 'Scopus', url: 'https://www.scopus.com/authid/detail.uri?authorId=59070517800' },
        { label: 'AD Scientific Index', url: 'https://adscientificindex.com/scientist/ruhul-amin/5739933/' }
      ]
    },
    {
      id: 'jannatul-mauya',
      name: 'Jannatul Mauya',
      group: 'Departmental Seniors & Senior Collaborators',
      profilePage: 'network-jannatul-mauya.html',
      profileBadges: ['M.Phil. Student', 'Research Assistant', 'Research Collaborator', 'Departmental Senior'],
      headline: 'M.Phil. Student in Bioinformatics · University of Rajshahi',
      roles: ['M.Phil. Student', 'Research Assistant', 'Research Collaborator', 'Co-author', 'Departmental Senior'],
      affiliation: 'University of Rajshahi, Rajshahi-6205, Bangladesh',
      description: 'M.Phil. student in Bioinformatics at the University of Rajshahi and a departmental senior of Md. Razu Ahmed from PUST. Her research interests span statistics, machine learning, deep learning, medical imaging, image processing, multivariate analysis and big-data analytics.',
      portrait: 'assets/collaborators/jannatul-mauya.jpeg?v=20260924-mauya1',
      cardPortraitPosition: '50% 18%',
      currentRoleLabel: 'Current academic & research roles',
      currentPositions: [
        'M.Phil. Student in Bioinformatics, University of Rajshahi, Rajshahi-6205, Bangladesh',
        'Research Assistant, Deep Statistical Learning and Research Laboratory (DSLR Lab), Department of Statistics and Data Science, Pabna University of Science and Technology (PUST), Pabna-6600, Bangladesh · February 2025–present'
      ],
      biographyParagraphs: [
        'Jannatul Mauya is an M.Phil. student in Bioinformatics at the University of Rajshahi and a Research Assistant in the Deep Statistical Learning and Research Laboratory (DSLR Lab) at Pabna University of Science and Technology. She completed both her B.Sc. (Hons.) and M.S. (Thesis) in Statistics at PUST, securing first merit position in both programmes.',
        'Her research interests include statistics, machine learning, deep learning, medical imaging and image processing, pattern processing, multivariate analysis and big-data analysis. Her work spans biomedical and health-related prediction, computer vision, missing-data methodology, food computing and agricultural image analysis.'
      ],
      researchInterests: [
        'Statistics',
        'Machine Learning',
        'Deep Learning',
        'Medical Imaging',
        'Image Processing',
        'Pattern Processing',
        'Multivariate Analysis',
        'Big Data Analysis',
        'Bioinformatics'
      ],
      education: [
        {
          degree: 'Master of Philosophy (M.Phil.) in Bioinformatics',
          institution: 'University of Rajshahi, Rajshahi-6205, Bangladesh',
          year: 'Current',
          detail: 'Ongoing M.Phil. study in Bioinformatics.'
        },
        {
          degree: 'Master of Science (M.S., Thesis) in Statistics',
          institution: 'Department of Statistics (now Department of Statistics and Data Science), Pabna University of Science and Technology (PUST), Pabna-6600, Bangladesh',
          year: '2022 · held in 2025',
          detail: 'CGPA: 3.94/4.00 · Merit position: 1st. Thesis: “Automated Sugarcane Disease Detection from Leaf Images with Advanced Deep Learning Technique: A Study at the BSRI Data.” Supervisor: Prof. Dr. Md. Shamim Reza. Medium of instruction: English.'
        },
        {
          degree: 'Bachelor of Science (B.Sc. Hons.) in Statistics',
          institution: 'Department of Statistics (now Department of Statistics and Data Science), Pabna University of Science and Technology (PUST), Pabna-6600, Bangladesh',
          year: '2020 · held in 2023',
          detail: 'CGPA: 3.90/4.00 · Merit position: 1st. Statistical Project: “Assessing and Predicting Risk Factors for Heart Disease Using Machine Learning Algorithm.” Supervisor: Prof. Dr. Md. Shamim Reza. Medium of instruction: English.'
        },
        {
          degree: 'Higher Secondary Certificate (H.S.C.) · Science',
          institution: 'Ishwardi Women’s College, Pabna, Bangladesh',
          year: '2015',
          detail: 'GPA: 5.00/5.00.'
        },
        {
          degree: 'Secondary School Certificate (S.S.C.) · Science',
          institution: 'North Bengal Paper Mills High School, Bangladesh',
          year: '2013',
          detail: 'GPA: 5.00/5.00.'
        }
      ],
      careerTimeline: [
        {
          period: 'Current',
          title: 'M.Phil. Student in Bioinformatics',
          institution: 'University of Rajshahi',
          location: 'Rajshahi-6205, Bangladesh'
        },
        {
          period: 'February 2025–present',
          title: 'Research Assistant',
          institution: 'Deep Statistical Learning and Research Laboratory (DSLR Lab), Department of Statistics and Data Science, Pabna University of Science and Technology (PUST), Pabna-6600, Bangladesh',
          location: 'Pabna-6600, Bangladesh'
        },
        {
          period: 'August 2025–November 2025',
          title: 'Research Assistant · SP-3/23 Project',
          institution: 'Space and Environment Research Center (SERC)',
          location: 'Bangladesh'
        },
        {
          period: 'B.Sc. & M.S. programmes',
          title: 'Class Representative (CR)',
          institution: 'Department of Statistics (now Department of Statistics and Data Science), Pabna University of Science and Technology (PUST), Pabna-6600, Bangladesh',
          detail: 'Represented students and facilitated communication with faculty throughout both degree programmes.'
        }
      ],
      awards: [
        'National Science and Technology (NST) Fellowship 2024–2025, Ministry of Science and Technology, Government of the People’s Republic of Bangladesh · Merit No. 47 · Serial No. 434.',
        'Merit Scholarships received four times during undergraduate study and during the M.S. programme for academic performance.',
        'EXIM Bank Scholarship for academic excellence.'
      ],
      relationship: {
        title: 'Departmental senior & major research collaborator',
        detail: 'Jannatul Mauya is one of Razu’s departmental seniors from PUST and a continuing research collaborator. Their shared research spans signal processing, medical imaging, missing-data research, food-computing datasets, agricultural deep learning, AI-employment research and academic-performance modelling.'
      },
      relationshipPath: [
        'Departmental senior at PUST',
        'DSLR Lab research connection',
        'Joint publications, dataset & conference work',
        'Continuing statistical, biomedical-AI & machine-learning collaboration'
      ],
      collaborationStats: [
        { value: '2', label: 'Published journal articles' },
        { value: '1', label: 'Accepted / forthcoming' },
        { value: '1', label: 'Public research dataset' },
        { value: '3', label: 'Conference contributions' },
        { value: '5', label: 'Manuscripts in editorial process' }
      ],
      sharedPublications: [
        {
          title: 'Sophisticated Audio Source Separation: A Statistical Exploration of Clarity and Precision With FastICA',
          venue: 'Engineering Reports, 8(1), e70575 (2026)',
          doi: 'https://doi.org/10.1002/eng2.70575'
        },
        {
          title: 'PUST Cafeteria Food Image Dataset: Real-World Bangladeshi Meal-Platter Images with Bounding-Box and Polygon Annotations',
          venue: 'Data in Brief, 69, Article 113262 (2026)',
          doi: 'https://doi.org/10.1016/j.dib.2026.113262'
        }
      ],
      sharedAccepted: [
        {
          title: 'Perceptions of Artificial Intelligence and Its Implications for Employment in Bangladesh',
          venue: 'International Journal of Statistical Sciences, Volume 26, Issue 2 · forthcoming November 2026',
          detail: 'Accepted 2 September 2026.'
        }
      ],
      sharedDataset: [
        {
          title: 'PUST Cafeteria Food Image Dataset: Real-World Bangladeshi Meal-Platter Images with Bounding-Box and Polygon Annotations (Version 2)',
          venue: 'Mendeley Data',
          doi: 'https://doi.org/10.17632/fn6yhzjz83.2',
          detail: 'Published 28 August 2026.'
        }
      ],
      sharedConferences: [
        {
          event: 'International Conference on Emerging Frontiers in Advanced Sciences and Technologies 2026 (EFAST 2026)',
          venue: 'Pabna University of Science and Technology · 27–28 June 2026 · Conference Proceedings · ISBN 978-984-37-0635-5',
          items: [
            'Ahmed, M. R., Mauya, J., & Reza, M. S. (2026). Automated Five-Stage Diabetic Retinopathy Grading Using a Leak-Safe and Explainable Deep-Handcrafted Fusion Framework · p. 173 · Paper ID 108.',
            'Mauya, J., Ahmed, M. R., Ruhi, S., & Reza, M. S. (2026). A Multi-Scale Attention-Based Dense Residual Network for Sugarcane Leaf Disease Detection Using BSRI Data · p. 172 · Paper ID 107.',
            'Moly, F. M., Ahmed, M. R., Mauya, J., & Reza, M. S. (2026). Comparative Analysis of Missing Value Imputation Methods with a Hybrid Approach for HCV Prediction Using Machine Learning · p. 174 · Paper ID 115.'
          ]
        }
      ],
      sharedEditorial: [
        {
          title: 'A Deep Learning and Handcrafted Feature Fusion Framework for Automated Diabetic Retinopathy Grading from Retinal Fundus Images',
          journal: 'Measurement',
          publisher: 'Elsevier',
          detail: 'With Editor.'
        },
        {
          title: 'Comparative Evaluation of Hybrid MICE–Median Missing-Value Reconstruction and Downstream Hepatitis C Prediction Using Machine Learning',
          journal: 'BMC Medical Informatics and Decision Making',
          publisher: 'Springer Nature',
          detail: 'With Editor.'
        },
        {
          title: 'Real-Time Food Detection for Automated Cafeteria Billing Using RT-DETR and GAN-Based Data Augmentation',
          journal: 'Discover Artificial Intelligence',
          publisher: 'Springer Nature',
          detail: 'Under Review.'
        },
        {
          title: 'Adaptive Probability Fusion of Lightweight Recurrent Networks for Cross-Domain Sentiment Classification',
          journal: 'Applied AI Letters',
          publisher: 'Wiley',
          detail: 'Under Revision.'
        },
        {
          title: 'Factors Associated with Undergraduates Academic Performance Among Public University Students: A Case Study',
          journal: 'International Journal of Educational Reform',
          publisher: 'SAGE',
          detail: 'Awaiting Admin Processing.'
        }
      ],
      shared: [
        'Sophisticated Audio Source Separation: A Statistical Exploration of Clarity and Precision With FastICA — published in Engineering Reports',
        'PUST Cafeteria Food Image Dataset — published in Data in Brief',
        'Perceptions of Artificial Intelligence and Its Implications for Employment in Bangladesh — accepted / forthcoming',
        'PUST Cafeteria Food Image Dataset Version 2 — Mendeley Data',
        'EFAST 2026 — three joint conference contributions',
        'Five manuscripts currently in the editorial process'
      ],
      email: 'jannatulmauya7711@gmail.com',
      links: [
        { label: 'ResearchGate', url: 'https://www.researchgate.net/profile/Jannatul-Mauya-4' },
        { label: 'ORCID', url: 'https://orcid.org/0009-0005-7294-1306' },
        { label: 'Google Scholar', url: 'https://scholar.google.com/citations?user=grfI1RgAAAAJ&hl=en' },
        { label: 'Scopus', url: 'https://www.scopus.com/authid/detail.uri?authorId=58930921600' },
        { label: 'LinkedIn', url: 'https://www.linkedin.com/in/jannatul-mauya-553692333/' }
      ]
    },
    {
      id: 'abdur-rakib',
      name: 'Md. Abdur Rakib',
      group: 'Peer & Batchmate Research Collaborators',
      profilePage: 'network-abdur-rakib.html',
      profileBadges: ['Research Assistant', 'Research Collaborator', 'Co-author', 'NST Fellow'],
      headline: 'Research Assistant · DSLR Lab, PUST · Research Collaborator',
      roles: ['Research Assistant', 'Research Collaborator', 'Co-author', 'Batchmate'],
      affiliation: 'Department of Statistics and Data Science, Pabna University of Science and Technology (PUST), Pabna-6600, Bangladesh',
      description: 'Research Assistant at the Deep Statistical Learning and Research Laboratory (DSLR Lab) and research collaborator of Md. Razu Ahmed, with interests in machine learning, computer vision, explainable and deployable AI, health applications and agricultural image analysis.',
      portrait: 'assets/collaborators/abdur-rakib.JPG?v=20260924-rakib1',
      cardPortraitPosition: '50% 14%',
      currentRoleLabel: 'Current research role',
      currentPositions: [
        'Research Assistant, Deep Statistical Learning and Research Laboratory (DSLR Lab), Department of Statistics and Data Science, Pabna University of Science and Technology (PUST), Pabna-6600, Bangladesh'
      ],
      biographyParagraphs: [
        'Md. Abdur Rakib is a Research Assistant at the Deep Statistical Learning and Research Laboratory (DSLR Lab), Department of Statistics and Data Science, Pabna University of Science and Technology (PUST), and a continuing research collaborator of Md. Razu Ahmed. He completed both his B.Sc. (Hons.) and M.S. (Thesis) in Statistics at PUST, securing first position in departmental merit. His previous Research Assistant appointment on an RTTC mental-health project ran from 1 January to 30 June 2026.',
        'His research focuses on machine learning and computer vision, with particular interest in explainable and deployable AI systems for health and agricultural applications. His experience includes survey-based research, predictive modelling, multimodal deep learning and image-based decision support.'
      ],
      researchInterests: [
        'Machine Learning',
        'Computer Vision',
        'Deep Learning',
        'Explainable AI',
        'Deployable AI',
        'Health Informatics',
        'Medical Image Analysis',
        'Agricultural Artificial Intelligence',
        'Predictive Modelling',
        'Survey-Based Research'
      ],
      education: [
  {
    degree: 'Master of Science (M.S., Thesis) in Statistics',
    institution: 'Department of Statistics (now Department of Statistics and Data Science), Pabna University of Science and Technology (PUST), Pabna-6600, Bangladesh',
    year: '2023 · held in 2026',
    detail: 'CGPA: 3.99/4.00. Thesis: “A Multimodal Deep Learning Framework for Skin Lesion Classification Using Smartphone Images and Clinical Metadata.”'
  },
  {
    degree: 'Bachelor of Science (B.Sc. Hons.) in Statistics',
    institution: 'Department of Statistics (now Department of Statistics and Data Science), Pabna University of Science and Technology (PUST), Pabna-6600, Bangladesh',
    year: '2021 · held in 2024',
    detail: 'CGPA: 3.90/4.00. Project: “Optimizing Facial Emotion Recognition through Statistical Dimensionality Reduction and CNN Integration.” Statistical Field Survey: “Measuring Attitudes towards AI’s Impact on the Job Market in Bangladesh: A Study at Pabna University of Science and Technology.”'
  },
  {
    degree: 'Higher Secondary Certificate (H.S.C.)',
    institution: 'Rangpur Government College, Rangpur, Bangladesh',
    year: '2016',
    detail: 'GPA: 4.92/5.00.'
  },
  {
    degree: 'Secondary School Certificate (S.S.C.)',
    institution: 'Rangpur Zilla School, Rangpur, Bangladesh',
    year: '2014',
    detail: 'GPA: 5.00/5.00.'
  }
],
      careerTimeline: [
        {
          period: 'Current',
          title: 'Research Assistant',
          institution: 'Deep Statistical Learning and Research Laboratory (DSLR Lab), Department of Statistics and Data Science, Pabna University of Science and Technology (PUST)',
          location: 'Pabna-6600, Bangladesh'
        },
        {
          period: '1 January 2026–30 June 2026',
          title: 'Research Assistant · RTTC Project',
          institution: 'Research and Technology Transfer Cell (RTTC), Pabna University of Science and Technology',
          detail: 'Project: “Clinical Prediction of Depression and Anxiety Symptom Severity among Psychiatric Patients at Pabna Mental Hospital.”'
        },
        {
          period: 'Leadership & innovation',
          title: 'Team Member & Chief Technology Officer (CTO)',
          institution: 'HULT Prize · Stat4Change'
        },
        {
          period: 'Professional development',
          title: 'IT Support Service Course Partner',
          institution: 'IT Support Service'
        },
        {
          period: 'International academic exposure',
          title: 'Invited Participant · Sakura Science Exchange Program',
          institution: 'University of Yamanashi, Japan',
          detail: 'Selected as 1 of 7 students in the PUST delegation. Participated in academic and research activities and laboratory exposure under host Prof. Hiromitsu Nishizaki, and presented “Image-Based Disease Detection in Lychee Plants Using Deep Learning Techniques.”'
        },
        {
          period: 'B.Sc. & M.S. programmes',
          title: 'Class Representative (CR)',
          institution: 'Department of Statistics (now Department of Statistics and Data Science), Pabna University of Science and Technology (PUST), Pabna-6600, Bangladesh',
          detail: 'Served as Class Representative throughout the B.Sc. and M.S. programmes.'
        }
      ],
      awards: [
        'National Science & Technology (NST) Fellowship, Ministry of Science and Technology, Government of the People’s Republic of Bangladesh.',
        'Dean’s Honors Award, Pabna University of Science and Technology.',
        'PUST Students Innovation Award.',
        'PUST Merit Scholarship during B.Sc.: 1st rank in Years 2–4 and 3rd rank in Year 1; also received merit scholarship during M.S.'
      ],
      externalAffiliations: [
        'Research Assistant, Deep Statistical Learning and Research Laboratory (DSLR Lab), Department of Statistics and Data Science, Pabna University of Science and Technology (PUST).',
        'HULT Prize · Stat4Change team member and Chief Technology Officer (CTO).',
        'IT Support Service Course Partner.',
        'Statistical Field Survey Group Member, Department of Statistics and Data Science, Pabna University of Science and Technology (PUST).',
        'Sakura Science Exchange Program participant, University of Yamanashi, Japan.'
      ],
      relationship: {
        title: 'Batchmate, field-survey teammate & research collaborator',
        detail: 'Md. Abdur Rakib is Razu’s batchmate from PUST and a continuing research collaborator. Their shared academic journey includes statistical field survey activities, joint journal publications, conference contributions, and collaborative research in machine learning and artificial intelligence.'
      },
      relationshipPath: [
        'Batchmates at PUST',
        'Statistical Field Survey group',
        'Joint journal publication and accepted article',
        'ICRAST 2025 conference collaboration'
      ],
      collaborationStats: [
        { value: '1', label: 'Published journal article' },
        { value: '1', label: 'Accepted / forthcoming' },
        { value: '2', label: 'Conference contributions' }
      ],
      sharedPublications: [
        {
          title: 'Identification of Predisposing Risk Factors for Chronic Kidney Disease and Optimizing Disease Prediction Using a Stacking Machine Learning Algorithm',
          venue: 'International Journal of Statistical Sciences, 25(2), 1–32 (2025)',
          doi: 'https://doi.org/10.3329/ijss.v25i2.85732'
        }
      ],
      sharedAccepted: [
        {
          title: 'Perceptions of Artificial Intelligence and Its Implications for Employment in Bangladesh',
          venue: 'International Journal of Statistical Sciences, Volume 26, Issue 2 · forthcoming November 2026',
          detail: 'Accepted 2 September 2026.'
        }
      ],
      sharedConferences: [
        {
          event: '2nd International Conference on Recent Advances in Science and Technology 2025 (ICRAST 2025)',
          venue: 'Faculty of Science, University of Rajshahi · 14–15 November 2025 · Book of Abstracts',
          items: [
            'Ahmed, M. R., Rakib, M. A., Shiddik, A. B., & Reza, M. S. (2025). Measuring Attitudes toward AI’s Impact on the Job Market in Bangladesh: A Study at Pabna University of Science and Technology · p. 120 · Paper ID 440.',
            'Rakib, M. A., Ahmed, M. R., Shiddik, A. B., & Reza, M. S. (2025). Facial Emotion Recognition with Dimensionality Reduction: A Comparative Study of PCA, FA, and Combined PCA–FA with a CNN Baseline · p. 126 · Paper ID 461.'
          ]
        }
      ],
      shared: [
        'CKD risk-factor identification and stacking machine-learning prediction — published in International Journal of Statistical Sciences',
        'Perceptions of Artificial Intelligence and Its Implications for Employment in Bangladesh — accepted / forthcoming',
        'ICRAST 2025 Paper ID 440 — AI and employment perceptions',
        'ICRAST 2025 Paper ID 461 — facial emotion recognition'
      ],
      email: 'marakib94@gmail.com',
      links: [
        { label: 'ResearchGate', url: 'https://www.researchgate.net/profile/Md-Rakib-43' },
        { label: 'LinkedIn', url: 'https://www.linkedin.com/in/mdabdurrakib14/' },
        { label: 'ORCID', url: 'https://orcid.org/0009-0000-7625-0442' }
      ]
    },
    {
  id: 'ziaul-haque',
  name: 'Muhammad Ziaul Haque',
  group: 'Peer & Batchmate Research Collaborators',
  profilePage: 'network-ziaul-haque.html',
  profileBadges: ['PhD Student', 'Research Collaborator', 'Co-author', 'Batchmate'],
  headline: 'PhD Student · Mathematical Sciences · Research Collaborator',
  roles: ['PhD Student', 'Research Collaborator', 'Co-author', 'Batchmate'],

  affiliation: 'PhD Program in Mathematical Sciences, Sunway University, Malaysia',

  description: 'Muhammad Ziaul Haque is a PhD student in Mathematical Sciences at Sunway University, Malaysia, and a batchmate, co-author and research collaborator of Md. Razu Ahmed. His research spans computational fluid dynamics, mathematical modelling, nonlinear dynamics, scientific machine learning and data-driven public-health forecasting.',

  portrait: 'assets/collaborators/ziaul-haque.jpeg?v=20260924-collab2',
  cardPortraitPosition: '50% 14%',

  currentRoleLabel: 'Current research role',

  currentPositions: [
    'PhD Student, Mathematical Sciences, Sunway University, Malaysia',
    'Research Assistant – CFD and Heat-Transfer Modelling, Department of Mathematics, Pabna University of Science and Technology (PUST)'
  ],

  biographyParagraphs: [
    'Muhammad Ziaul Haque is a PhD student in Mathematical Sciences at Sunway University, Malaysia. He completed his M.S. (Thesis) in Pure Mathematics and B.Sc. in Mathematics from the Department of Mathematics, Pabna University of Science and Technology (PUST), Bangladesh. His academic journey combines mathematical analysis, computational modelling and artificial intelligence-driven research.',

    'His research interests include computational fluid dynamics, heat and mass transfer, numerical methods for partial differential equations, nonlinear dynamics, scientific computing, scientific machine learning and explainable data-driven modelling. He has contributed to collaborative research in CFD simulation, nonlinear mathematical physics and nationwide dengue forecasting.'
  ],

  researchInterests: [
    'Computational Fluid Dynamics',
    'Heat & Mass Transfer',
    'Numerical Methods for PDEs',
    'Nonlinear Dynamics & Mathematical Modelling',
    'Scientific Computing',
    'Scientific Machine Learning',
    'Explainable & Data-Driven Modelling'
  ],

  education: [
  {
    degree: 'PhD in Mathematical Sciences',
    institution: 'Sunway University, Malaysia',
    year: 'Current',
    detail: 'Ongoing doctoral study in Mathematical Sciences.'
  },
  {
    degree: 'Master of Science (M.S., Thesis) in Pure Mathematics',
    institution: 'Department of Mathematics, Pabna University of Science and Technology (PUST), Pabna-6600, Bangladesh',
    year: '2023 · held in 2026',
    detail: 'Thesis: “A Unified Leakage-Aware and Interpretable AI Pipeline for Predicting Vehicle-Level CO₂ Emissions and Survey-Based Diabetes Risk Stratification.”'
  },
  {
    degree: 'Bachelor of Science (B.Sc.) in Mathematics',
    institution: 'Department of Mathematics, Pabna University of Science and Technology (PUST), Pabna-6600, Bangladesh',
    year: '2021 · held in 2023',
    detail: 'Mathematics Project: “Exploring Travelling Wave Solutions of Nonlinear Evolution Equations in Mathematical Physics: The Propagation in a Magneto-Electro-Elastic Circular Rod.”'
  },
  {
    degree: 'Higher Secondary Certificate (H.S.C.) · Science',
    institution: 'Trust College · Dhaka Board, Bangladesh',
    year: '2017',
    detail: 'GPA: 5.00/5.00.'
  },
  {
    degree: 'Secondary School Certificate (S.S.C.) · Science',
    institution: 'Al-Amin Academy School and College · Cumilla Board, Bangladesh',
    year: '2015',
    detail: 'GPA: 5.00/5.00.'
  }
],

  careerTimeline: [
    {
      period: 'Present',
      title: 'PhD Student · Mathematical Sciences',
      institution: 'Sunway University, Malaysia'
    },
    {
      period: 'January 2026–Present',
      title: 'Research Assistant – CFD and Heat-Transfer Modelling',
      institution: 'Department of Mathematics, Pabna University of Science and Technology (PUST)',
      detail: 'Developing FEM/COMSOL models for MHD mixed convection and nanofluid heat-transfer systems, including mesh independence analysis, benchmark comparison and systematic parameter studies.'
    },
    {
      period: 'July 2025–Present',
      title: 'Selected Collaborative Research – Nonlinear Dynamics and Mathematical Physics',
      institution: 'Under Prof. Dr. Md. Nur Alam',
      detail: 'Investigating bifurcation structures, phase portraits, quasi-periodicity, chaos and travelling-wave/soliton behaviour in nonlinear evolution models.'
    },
    {
      period: 'September 2024–April 2026',
      title: 'Graduate Research Assistant – M.S. Thesis Research',
      institution: 'Department of Mathematics, PUST',
      detail: 'Research focused on vehicle-level CO₂ prediction and BRFSS diabetes-risk stratification using leakage-aware machine learning pipelines.'
    },
    {
      period: '01 June 2023–20 May 2024',
      title: 'Undergraduate Research Assistant – Nonlinear Dynamics',
      institution: 'Department of Mathematics, PUST',
      detail: 'Worked on travelling-wave solutions of nonlinear evolution equations using Bernoulli sub-ODE and F-expansion methods.'
    },
    {
      period: 'August 2025–Present',
      title: 'Dengue Surveillance and Forecasting Research',
      institution: 'Collaborative Public Health Research',
      detail: 'Built Bangladesh nationwide district-level datasets integrating DGHS admissions, CHIRPS rainfall, NASA POWER meteorology, Open-Meteo sunshine, population and spatial information.'
    }
  ],

  awards: [
    '13th National Undergraduate Mathematics Olympiad (2022): Ranked 7th in the Rajshahi Regional Round, Bangladesh Mathematical Society.'
  ],

  relationship: {
    title: 'Batchmate, co-author & research collaborator',
    detail: 'Muhammad Ziaul Haque is Razu’s batchmate from PUST and continuing research collaborator. Their collaboration includes machine learning and deep learning applications and nationwide dengue forecasting studies.'
  },

  relationshipPath: [
    'Batchmates at PUST',
    'Mathematics research collaboration',
    'Joint manuscript development',
    'Dengue forecasting collaboration'
  ],

  sharedPublications: [],

  sharedAccepted: [],

  sharedEditorial: [
    {
      title: 'Nationwide Evaluation of District-Informed Bottom-Up and Direct National Approaches for One-Week-Ahead Forecasting of Dengue Hospital Admissions in Bangladesh',
      journal: 'BMC Public Health',
      publisher: 'Springer Nature',
      detail: 'Under Review.'
    },
    {
      title: 'Beyond Burden: Testing the Incremental Decision Value of Operational Readiness for Dengue Preparedness in Bangladesh',
      journal: 'Scientific Reports',
      publisher: 'Springer Nature',
      detail: 'Under Review.'
    }
  ],

  shared: [
    'Nationwide dengue admission forecasting',
    'Beyond Burden dengue preparedness study'
  ],

  email: 'ziaulhaque3929@gmail.com',

  links: [
    {
      label: 'LinkedIn',
      url: 'https://www.linkedin.com/in/muhammad-ziaul-haque-a768b9159'
    },
    {
      label: 'ORCID',
      url: 'https://orcid.org/0009-0005-2588-1777'
    },
    {
      label: 'Google Scholar',
      url: 'https://scholar.google.com/citations?user=F4rlEPMAAAAJ&hl=en'
    },
    {
      label: 'Scopus',
      url: 'https://www.scopus.com/authid/detail.uri?authorId=60751797200'
    },
    {
      label: 'ResearchGate',
      url: 'https://www.researchgate.net/profile/Muhammad-Haque-31'
    }
  ]
},
    {
  id: 'abu-bakar-shiddik',
  name: 'Abu Bakar Shiddik',
  group: 'Peer & Batchmate Research Collaborators',

  profilePage: 'network-abu-bakar-shiddik.html',

  profileBadges: [
    'Batchmate',
    'Co-author',
    'Research Collaborator'
  ],

  headline: 'Trainee Assistant Officer (TAO) · Islami Bank PLC · Research Collaborator',

  roles: [
    'Trainee Assistant Officer (TAO)',
    'Batchmate',
    'Co-author',
    'Research Collaborator',
    'Statistical Field Survey Group Member',
    'Former Research Assistant · DSLR Lab'
  ],

  affiliation: 'Islami Bank PLC, Paltan Branch, Dhaka, Bangladesh',

  description: 'Abu Bakar Shiddik is a batchmate of Razu from Pabna University of Science and Technology and a continuing research collaborator. His contributions include statistical field survey activities, machine learning research, journal publications, conference contributions and collaborative research projects.',

  portrait: 'assets/collaborators/abu-bakar-shiddik.jpeg',
  cardPortraitPosition: '50% 14%',

  currentPositions: [
    'Trainee Assistant Officer (TAO), Islami Bank PLC, Paltan Branch, Dhaka, Bangladesh'
  ],

  education: [
    {
      degree: 'Bachelor of Science (B.Sc. Hons.) in Statistics',
      institution: 'Department of Statistics (now Department of Statistics and Data Science), Pabna University of Science and Technology (PUST), Pabna-6600, Bangladesh',
      year: '2021 · held in 2024',
      detail: 'B.Sc. Statistical Project: “Predicting the Risk of Developing Chronic Kidney Disease.” Statistical Field Survey: “Measuring Attitudes towards AI’s Impact on the Job Market in Bangladesh: A Study at Pabna University of Science and Technology.”'
    }
  ],

  researchInterests: [
    'Statistical Modelling',
    'Machine Learning',
    'Artificial Intelligence',
    'Biomedical Data Science',
    'Applied Statistics'
  ],

  relationship: {
    title: 'Batchmate, co-author & research collaborator',
    detail: 'Abu Bakar Shiddik is Razu’s batchmate from PUST and a continuing research collaborator involved in statistical field surveys, machine learning studies, journal publications and conference contributions.'
  },

  sharedPublications: [
    {
      title: 'Identification of Predisposing Risk Factors for Chronic Kidney Disease and Optimizing Disease Prediction Using a Stacking Machine Learning Algorithm',
      venue: 'International Journal of Statistical Sciences, 25(2), 1–32 (2025)',
      doi: 'https://doi.org/10.3329/ijss.v25i2.85732'
    }
  ],

  sharedAccepted: [
    {
      title: 'Perceptions of Artificial Intelligence and Its Implications for Employment in Bangladesh',
      venue: 'International Journal of Statistical Sciences, Volume 26, Issue 2 (2026)',
      detail: 'Accepted 2 September 2026; forthcoming.'
    }
  ],

  sharedConferences: [
    {
      event: '2nd International Conference on Recent Advances in Science and Technology 2025 (ICRAST 2025)',
      venue: 'Faculty of Science, University of Rajshahi, Rajshahi, Bangladesh · 14–15 November 2025',
      items: [
        'Measuring Attitudes toward AI’s Impact on the Job Market in Bangladesh: A Study at Pabna University of Science and Technology · Paper ID 440',
        'Facial Emotion Recognition with Dimensionality Reduction: A Comparative Study of PCA, FA, and Combined PCA–FA with a CNN Baseline · Paper ID 461'
      ]
    }
  ],

  shared: [
    'Chronic kidney disease prediction',
    'AI employment perception study',
    'Statistical field survey research',
    'ICRAST 2025 conference contributions'
  ],

  email: 'shakhawathussain7920@gmail.com',

  links: [
    {
      label: 'ResearchGate',
      url: 'https://www.researchgate.net/profile/Abu-Shiddik'
    },
    {
      label: 'ORCID',
      url: 'https://orcid.org/0009-0008-2799-9404'
    }
  ]
},
    {
  id: 'marufa-yeasmin',
  name: 'Marufa Yeasmin',
  group: 'Peer & Batchmate Research Collaborators',
  profilePage: 'network-marufa-yeasmin.html',

  profileBadges: [
    'Research Assistant',
    'Research Collaborator',
    'Co-author',
    'NST Fellow'
  ],

  headline: 'Research Assistant · DSLR Lab, PUST · Research Collaborator',

  roles: [
    'Research Assistant',
    'Research Collaborator',
    'Co-author',
    'Batchmate'
  ],

  affiliation: 'Department of Statistics and Data Science, Pabna University of Science and Technology (PUST), Pabna-6600, Bangladesh',

  description: 'Research Assistant at the Deep Statistical Learning and Research Laboratory (DSLR Lab) and research collaborator of Md. Razu Ahmed, with interests in applied statistics, data science, machine learning, deep learning, computer vision and AI-driven decision-making.',

  portrait: 'assets/collaborators/marufa.jpg',
  cardPortraitPosition: '50% 14%',

  currentRoleLabel: 'Current research role',

  currentPositions: [
    'Research Assistant, Deep Statistical Learning and Research Laboratory (DSLR Lab), Department of Statistics and Data Science, Pabna University of Science and Technology (PUST), Pabna-6600, Bangladesh'
  ],

  biographyParagraphs: [
    'Marufa Yeasmin is a Research Assistant at the Deep Statistical Learning and Research Laboratory (DSLR Lab), Department of Statistics and Data Science, Pabna University of Science and Technology (PUST), and a continuing research collaborator of Md. Razu Ahmed. She completed her B.Sc. (Hons.) and M.S. (Thesis) in Statistics at PUST with strong academic performance and received NST Fellowship and academic recognitions.',

    'Her research focuses on applied statistics, data science, machine learning, deep learning, computer vision and AI-driven decision-making. Her experience includes real-world dataset development, statistical modelling, survey-based research and AI applications for automated food analysis and intelligent decision-support systems.'
  ],

  researchInterests: [
    'Applied Statistics',
    'Data Science',
    'Machine Learning',
    'Deep Learning',
    'Computer Vision',
    'AI-driven Decision Making',
    'Predictive Modelling',
    'Survey-Based Research'
  ],

  education: [
    {
      degree: 'Master of Science (M.S., Thesis) in Statistics',
      institution: 'Department of Statistics (now Department of Statistics and Data Science), Pabna University of Science and Technology (PUST), Pabna-6600, Bangladesh',
      year: '2023 · held in 2026',
      detail: 'CGPA: 3.93/4.00. Thesis: “Automated Assessment of Food Detection and Calorie Estimation from Student Meal Images at PUST Cafeteria Using Deep Learning.”'
    },
    {
      degree: 'Bachelor of Science (B.Sc. Hons.) in Statistics',
      institution: 'Department of Statistics (now Department of Statistics and Data Science), Pabna University of Science and Technology (PUST), Pabna-6600, Bangladesh',
      year: '2021 · held in 2024',
      detail: 'CGPA: 3.83/4.00. Project: “Handling Complex Censoring Mechanism in Reliability Data.” Statistical Field Survey: “Prevalence and Associated Factors of Smartphone Addiction on Family Relationship.”'
    },
    {
      degree: 'Higher Secondary Certificate (H.S.C.) · Science',
      institution: 'Naogaon Government College, Naogaon, Bangladesh',
      year: '2016',
      detail: 'GPA: 5.00/5.00 · Rajshahi Board.'
    },
    {
      degree: 'Secondary School Certificate (S.S.C.) · Science',
      institution: 'Dubalhati Raja Haranath High School, Naogaon, Bangladesh',
      year: '2014',
      detail: 'GPA: 5.00/5.00 · Rajshahi Board.'
    }
  ],

  careerTimeline: [
    {
      period: 'Current',
      title: 'Research Assistant',
      institution: 'Deep Statistical Learning and Research Laboratory (DSLR Lab), Department of Statistics and Data Science, Pabna University of Science and Technology (PUST)',
      location: 'Pabna-6600, Bangladesh'
    },
    {
      period: 'May 2022–December 2024',
      title: 'Survey Enumerator',
      institution: 'Bangladesh Bureau of Statistics (BBS) · Contract',
      detail: 'Participated in national survey and census data collection activities including the 6th Population and Housing Census 2022 and 4th Economic Census 2023. Contributed to household listing, demographic data collection, economic and establishment-related data collection, verification and questionnaire-based academic survey research.'
    },
    {
      period: 'B.Sc. & M.S. programmes',
      title: 'Class Representative (CR)',
      institution: 'Department of Statistics and Data Science, Pabna University of Science and Technology (PUST)',
      detail: 'Served as Class Representative throughout the B.Sc. and M.S. programmes.'
    }
  ],

  awards: [
    'National Science & Technology (NST) Fellowship, Ministry of Science and Technology, Government of the People’s Republic of Bangladesh.',
    'Dean’s Honors Award, Pabna University of Science and Technology.',
    'JSR Award.',
    'Merit Scholarships during undergraduate studies and M.S. for outstanding academic performance.',
    'Department 2nd Position in merit.'
  ],

  externalAffiliations: [
    'Research Assistant, Deep Statistical Learning and Research Laboratory (DSLR Lab), Department of Statistics and Data Science, Pabna University of Science and Technology (PUST).',
    'PLOS ONE Peer Reviewer.',
    'HULT Prize (Stat4Change) Team Member · Chief Marketing Officer (CMO).',
    'IT Support Service Course Partner.'
  ],

  relationship: {
    title: 'Batchmate, co-author & research collaborator',
    detail: 'Marufa Yeasmin is Razu’s batchmate from PUST and a continuing research collaborator. Their shared academic journey includes dataset development, joint journal publications, conference contributions and collaborative research in machine learning and artificial intelligence.'
  },

  relationshipPath: [
    'Batchmates at PUST',
    'Joint journal publication and dataset development',
    'Collaborative AI and machine learning research'
  ],

  collaborationStats: [
    {
      value: '1',
      label: 'Published journal article'
    },
    {
      value: '1',
      label: 'Public research dataset'
    },
    {
      value: '1',
      label: 'Under review article'
    }
  ],

  sharedPublications: [
    {
      title: 'PUST Cafeteria Food Image Dataset: Real-World Bangladeshi Meal-Platter Images with Bounding-Box and Polygon Annotations',
      venue: 'Data in Brief (2026)',
      doi: 'https://doi.org/10.1016/j.dib.2026.113262'
    }
  ],

  sharedDatasets: [
    {
      title: 'PUST Cafeteria Food Image Dataset: Real-World Bangladeshi Meal-Platter Images with Bounding-Box and Polygon Annotations (Version 2)',
      repository: 'Mendeley Data',
      doi: 'https://doi.org/10.17632/fn6yhzjz83.2'
    }
  ],

  sharedUnderReview: [
    {
      title: 'Real-Time Food Detection for Automated Cafeteria Billing Using RT-DETR and GAN-Based Data Augmentation',
      journal: 'Discover Artificial Intelligence (Springer)',
      detail: 'Under Review.'
    }
  ],

  shared: [
    'PUST Cafeteria Food Image Dataset — Data in Brief publication',
    'Public research dataset development',
    'Real-time food detection and automated cafeteria billing research',
    'AI-driven computer vision applications'
  ],

  email: 'marufayeas4@gmail.com',

  links: [
    {
      label: 'ORCID',
      url: 'https://orcid.org/0009-0001-4685-1033'
    },
    {
      label: 'ResearchGate',
      url: 'https://www.researchgate.net/profile/Marufa-Yeasmin-2'
    },
    {
      label: 'LinkedIn',
      url: 'https://www.linkedin.com/in/marufa-yeasmin-2700422b0/'
    }
  ]
},
    {
      id: 'protiva-kundu',
      name: 'Protiva Rani Kundu',
      group: 'Peer & Batchmate Research Collaborators',
      profilePage: 'network-protiva-rani-kundu.html',

      profileBadges: [
        'Research Assistant',
        'Research Collaborator',
        'Co-author',
        'NST Fellow'
      ],

      headline: 'Research Assistant · DSLR Lab, PUST · Research Collaborator',

      roles: [
        'Research Assistant',
        'Research Collaborator',
        'Co-author',
        'Batchmate'
      ],

      affiliation: 'Department of Statistics and Data Science, Pabna University of Science and Technology (PUST), Pabna-6600, Bangladesh',

      description: 'Research Assistant at the Deep Statistical Learning and Research Laboratory (DSLR Lab) and research collaborator of Md. Razu Ahmed, with research work spanning deep learning, computer vision, cafeteria automation and dataset-centered AI research.',

      portrait: 'assets/collaborators/protiva-rani-kundu.jpg?v=20260924-collab2',
      cardPortraitPosition: '50% 12%',

      currentRoleLabel: 'Research roles',

      currentPositions: [
        'Research Assistant, Deep Statistical Learning and Research Laboratory (DSLR Lab), Department of Statistics and Data Science, Pabna University of Science and Technology (PUST), Pabna-6600, Bangladesh'
      ],

      biographyParagraphs: [
        'Protiva Rani Kundu is a Research Assistant at the Deep Statistical Learning and Research Laboratory (DSLR Lab), Department of Statistics and Data Science, Pabna University of Science and Technology (PUST), and a continuing research collaborator of Md. Razu Ahmed. She completed her B.Sc. (Hons.) and M.S. (Thesis) in Statistics at PUST, secured 3rd position in departmental merit, and received the NST Fellowship, Dean’s Honors Award, PUST Students Innovation Award (1st place), and merit scholarships during her undergraduate and M.S. studies.',
        'Her research work includes deep-learning-based Alzheimer’s disease detection, RT-DETR-based real-time cafeteria food detection, GAN-based platter image augmentation, and real-world food-image dataset development.'
      ],

      researchInterests: [
        'Applied Statistics',
        'Deep Learning',
        'Computer Vision',
        'Object Detection',
        'Generative Adversarial Networks (GANs)',
        'Medical Image Analysis',
        'Food Computing',
        'Survey-Based Research'
      ],

      education: [
        {
          degree: 'Master of Science (M.S., Thesis) in Statistics',
          institution: 'Department of Statistics (now Department of Statistics and Data Science), Pabna University of Science and Technology (PUST), Pabna-6600, Bangladesh',
          year: '2023 · held in 2026',
          detail: 'CGPA: 3.90/4.00. Thesis: “Automated Billing System Using RTDETR for Real-time Cafeteria Food Detection and GAN-based Platter Image Augmentation.”'
        },
        {
          degree: 'Bachelor of Science (B.Sc. Hons.) in Statistics',
          institution: 'Department of Statistics (now Department of Statistics and Data Science), Pabna University of Science and Technology (PUST), Pabna-6600, Bangladesh',
          year: '2021 · held in 2024',
          detail: 'CGPA: 3.81/4.00. Statistical Project: “Detection Of Alzheimer’s Disease with Deep learning models.” Statistical Field Survey: “Prevalence of Self-medication and related factors among residents of Pabna Sadar of Bangladesh.”'
        },
        {
          degree: 'Higher Secondary Certificate (H.S.C.) · Science',
          institution: 'Kushtia Government College, Kushtia, Bangladesh',
          year: '2016',
          detail: 'GPA: 4.92/5.00 · Jashore Board.'
        },
        {
          degree: 'Secondary School Certificate (S.S.C.) · Science',
          institution: 'Banwarinagar C.B. Pilot High School, Pabna, Bangladesh',
          year: '2014',
          detail: 'GPA: 5.00/5.00 · Rajshahi Board.'
        }
      ],

      careerTimeline: [
        {
          period: 'Current',
          title: 'Research Assistant',
          institution: 'Deep Statistical Learning and Research Laboratory (DSLR Lab), Department of Statistics and Data Science, Pabna University of Science and Technology (PUST)',
          location: 'Pabna-6600, Bangladesh'
        },
        {
          period: 'Research role',
          title: 'Research Assistant',
          institution: 'Research and Technology Transfer Cell (RTTC), Pabna University of Science and Technology (PUST)',
          location: 'Pabna-6600, Bangladesh'
        },
        {
          period: 'B.Sc. programme',
          title: 'Class Representative (CR)',
          institution: 'Department of Statistics (now Department of Statistics and Data Science), Pabna University of Science and Technology (PUST)',
          detail: 'Served as Class Representative during the B.Sc. programme.'
        }
      ],

      awards: [
        'National Science & Technology (NST) Fellowship.',
        'Dean’s Honors Award, Pabna University of Science and Technology.',
        'PUST Students Innovation Award · 1st place.',
        'Merit Scholarships during undergraduate studies and M.S. for outstanding academic performance.',
        'Department 3rd Position in merit.'
      ],

      externalAffiliations: [
        'Research Assistant, Deep Statistical Learning and Research Laboratory (DSLR Lab), Department of Statistics and Data Science, Pabna University of Science and Technology (PUST).',
        'Research Assistant, Research and Technology Transfer Cell (RTTC), Pabna University of Science and Technology (PUST).'
      ],

      relationship: {
        title: 'Batchmate, co-author & research collaborator',
        detail: 'Protiva Rani Kundu is Razu’s batchmate from PUST and a continuing research collaborator. Their shared work includes real-world food-image dataset development, a peer-reviewed Data in Brief publication, a public Mendeley Data release, and RT-DETR/GAN-based cafeteria automation research.'
      },

      relationshipPath: [
        'Batchmates at PUST',
        'Joint food-image dataset development',
        'Data in Brief publication & Mendeley Data release',
        'RT-DETR and GAN-based cafeteria automation research'
      ],

      collaborationStats: [
        { value: '1', label: 'Published journal article' },
        { value: '1', label: 'Public research dataset' },
        { value: '1', label: 'Under review article' }
      ],

      sharedPublications: [
        {
          title: 'PUST Cafeteria Food Image Dataset: Real-World Bangladeshi Meal-Platter Images with Bounding-Box and Polygon Annotations',
          venue: 'Data in Brief, Article 113262 (2026)',
          doi: 'https://doi.org/10.1016/j.dib.2026.113262'
        }
      ],

      sharedDataset: [
        {
          title: 'PUST Cafeteria Food Image Dataset: Real-World Bangladeshi Meal-Platter Images with Bounding-Box and Polygon Annotations (Version 2)',
          venue: 'Mendeley Data',
          doi: 'https://doi.org/10.17632/fn6yhzjz83.2'
        }
      ],

      sharedEditorial: [
        {
          title: 'Real-Time Food Detection for Automated Cafeteria Billing Using RT-DETR and GAN-Based Data Augmentation',
          journal: 'Discover Artificial Intelligence',
          publisher: 'Springer',
          detail: 'Under Review · Q1 · SJR 2025 1.184 · H-Index 27 · CiteScore 6.2 · SNIP 2025 2.661 · ISSN / eISSN 2731-0809.'
        }
      ],

      shared: [
        'PUST Cafeteria Food Image Dataset — Data in Brief publication',
        'PUST Cafeteria Food Image Dataset (Version 2) — Mendeley Data',
        'Real-Time Food Detection for Automated Cafeteria Billing Using RT-DETR and GAN-Based Data Augmentation — under review'
      ],

      email: 'protivakundu3@gmail.com',

      links: [
        {
          label: 'LinkedIn',
          url: 'https://www.linkedin.com/in/protiva-rani-1572b8215/'
        },
        {
          label: 'ResearchGate',
          url: 'https://www.researchgate.net/profile/Protiva-Kundu-2'
        },
        {
          label: 'ORCID',
          url: 'https://orcid.org/0009-0003-8210-5569'
        }
      ]
    },
    {
      id: 'mimosa-saha',
      name: 'Mimosa Saha',
      group: 'Junior Collaborators & Mentees',
      profilePage: 'network-mimosa-saha.html',

      profileBadges: [
        'Research Assistant',
        'Research Collaborator',
        'Co-author',
        'M.S. Thesis Student'
      ],

      headline: 'M.S. Thesis Student · Research Assistant · DSLR Lab & RTTC, PUST',

      roles: [
        'Research Assistant',
        'Research Collaborator',
        'Co-author',
        'Junior Collaborator'
      ],

      affiliation: 'Department of Statistics and Data Science, Pabna University of Science and Technology (PUST), Pabna-6600, Bangladesh',

      description: 'M.S. (Thesis) student in Statistics and Data Science, Research Assistant at PUST, and junior research collaborator of Md. Razu Ahmed, with work spanning interpretable machine learning, deep learning, medical imaging, survey analysis and public-health forecasting.',

      portrait: 'assets/collaborators/mimosa-saha.jpg?v=20260924-collab2',
      cardPortraitPosition: '50% 18%',

      currentRoleLabel: 'Current academic & research roles',

      currentPositions: [
        'Master of Science (M.S., Thesis) student in Statistics and Data Science, Department of Statistics and Data Science, Pabna University of Science and Technology (PUST), Bangladesh',
        'Research Assistant, Deep Statistical Learning and Research Laboratory (DSLR Lab), Department of Statistics and Data Science, Pabna University of Science and Technology (PUST), Bangladesh',
        'Research Assistant, Research and Technology Transfer Cell (RTTC), Pabna University of Science and Technology (PUST), Bangladesh'
      ],

      biographyParagraphs: [
        'Mimosa Saha is currently an M.S. (Thesis) student in Statistics and Data Science at Pabna University of Science and Technology (PUST), a Research Assistant at the Deep Statistical Learning and Research Laboratory (DSLR Lab) and the Research and Technology Transfer Cell (RTTC), PUST, and a continuing junior research collaborator of Md. Razu Ahmed.',
        'Her academic work includes interpretable machine learning for identifying predictors of maternal quality of life, survey-based analysis of academic performance, and deep-learning-based multi-label classification with attention-guided localization of thoracic findings from chest X-ray images. She has also collaborated in conference research, pre-conference methodological workshops and nationwide dengue forecasting research.'
      ],

      researchInterests: [
        'Applied Statistics',
        'Machine Learning',
        'Interpretable Machine Learning',
        'Deep Learning',
        'Computer Vision',
        'Medical Image Analysis',
        'Chest X-ray Analysis',
        'Survey-Based Research',
        'Public Health Forecasting'
      ],

      education: [
        {
          degree: 'Master of Science (M.S., Thesis) in Statistics and Data Science',
          institution: 'Department of Statistics and Data Science, Pabna University of Science and Technology (PUST), Pabna-6600, Bangladesh',
          year: 'Current',
          detail: 'Thesis: “Deep Learning Based Multi-Label Classification with Attention Guided Localization of Thoracic Findings from Chest X-ray Images.”'
        },
        {
          degree: 'Bachelor of Science (B.Sc. Hons.) in Statistics',
          institution: 'Department of Statistics (now Department of Statistics and Data Science), Pabna University of Science and Technology (PUST), Pabna-6600, Bangladesh',
          year: '2022 · held in 2025',
          detail: 'Statistical Project: “Interpretable Machine Learning to Identify Key Predictors of Maternal Quality of Life, Pabna District.” Applied machine-learning techniques in Python to identify key socio-demographic and health factors. Statistical Field Survey: “The Effects of Teacher Sizes and Academic Facilities on Students’ Academic Performances, PUST.” Conducted and analyzed the survey using MS Excel and SPSS.'
        },
        {
          degree: 'Higher Secondary Certificate (H.S.C.)',
          institution: 'Rajbari Government Adorsho Mohila College, Rajbari, Bangladesh',
          year: '2017',
          detail: 'GPA: 4.00/5.00.'
        },
        {
          degree: 'Secondary School Certificate (S.S.C.)',
          institution: 'Sreepur Government M. C. Pilot Secondary School, Sreepur, Magura, Bangladesh',
          year: '2015',
          detail: 'GPA: 5.00/5.00.'
        }
      ],

      careerTimeline: [
        {
          period: 'Current',
          title: 'M.S. (Thesis) Student in Statistics and Data Science',
          institution: 'Department of Statistics and Data Science, Pabna University of Science and Technology (PUST)',
          location: 'Pabna, Bangladesh',
          detail: 'Thesis research on deep-learning-based multi-label classification and attention-guided localization of thoracic findings from chest X-ray images.'
        },
        {
          period: 'Current',
          title: 'Research Assistant',
          institution: 'Deep Statistical Learning and Research Laboratory (DSLR Lab), Department of Statistics and Data Science, Pabna University of Science and Technology (PUST)',
          location: 'Pabna, Bangladesh'
        },
        {
          period: 'Current',
          title: 'Research Assistant',
          institution: 'Research and Technology Transfer Cell (RTTC), Pabna University of Science and Technology (PUST)',
          location: 'Pabna, Bangladesh'
        }
      ],

      awards: [],

      externalAffiliations: [
        'Research Assistant, Deep Statistical Learning and Research Laboratory (DSLR Lab), Department of Statistics and Data Science, Pabna University of Science and Technology (PUST).',
        'Research Assistant, Research and Technology Transfer Cell (RTTC), Pabna University of Science and Technology (PUST).',
        'ICASDS 2025 conference contributor and pre-conference methodological workshop participant.'
      ],

      relationship: {
        title: 'Departmental junior, co-author, research collaborator & workshop partner',
        detail: 'Mimosa Saha is Razu’s departmental junior at PUST and a continuing research collaborator. Their shared academic work includes the ICASDS 2025 multiclass diabetes study, two pre-conference methodological workshops, and nationwide dengue forecasting research.'
      },

      relationshipPath: [
        'Departmental junior at PUST',
        'Joint machine-learning research',
        'ICASDS 2025 conference contribution',
        'Two pre-conference methodological workshops',
        'Nationwide dengue forecasting collaboration'
      ],

      collaborationStats: [
        { value: '1', label: 'Conference contribution' },
        { value: '2', label: 'Pre-conference workshops' },
        { value: '1', label: 'Manuscript under review' }
      ],

      sharedEditorial: [
        {
          title: 'Nationwide Evaluation of District-Informed Bottom-Up and Direct National Approaches for One-Week-Ahead Forecasting of Dengue Hospital Admissions in Bangladesh',
          journal: 'BMC Public Health',
          publisher: 'Springer',
          detail: 'Under Review · Q1 · SJR 2025 1.356 · H-Index 225 · CiteScore 5.9 · Impact Factor 4.4 · SNIP 2025 1.570 · Science Citation Index Expanded (SCIE) · E-ISSN 1471-2458.'
        }
      ],

      sharedConferences: [
        {
          event: 'International Conference on Applied Statistics and Data Science 2025 (ICASDS 2025)',
          venue: 'Institute of Statistical Research and Training (ISRT; now Institute of Applied Statistics and Data Science, IASDS), University of Dhaka, Dhaka, Bangladesh · 28–29 December 2025 · Programme and Abstract Book',
          items: [
            'Saha, M., Ahmed, M. R., & Reza, M. S. (2025). Predisposing Factor Identification and Multi-Class Grading of Diabetes Mellitus Using Machine Learning · p. 199 · Paper ID 315.'
          ]
        },
        {
          event: 'ICASDS 2025 Pre-Conference Methodological Workshops',
          venue: 'Institute of Statistical Research and Training (ISRT; now Institute of Applied Statistics and Data Science, IASDS), University of Dhaka, Bangladesh · 27 December 2025',
          items: [
            'Causal Inference for Observational Data Analysis.',
            'From Business Challenge to Deployment: An Industry-Standard Framework for Applied Machine Learning Projects.'
          ]
        }
      ],

      shared: [
        'ICASDS 2025 Paper ID 315 — multi-class diabetes mellitus grading using machine learning',
        'ICASDS 2025 pre-conference workshop — Causal Inference for Observational Data Analysis',
        'ICASDS 2025 pre-conference workshop — From Business Challenge to Deployment',
        'Nationwide dengue admission forecasting — BMC Public Health manuscript under review'
      ],

      email: 'mimosaha06@gmail.com',

      links: [
        {
          label: 'LinkedIn',
          url: 'https://www.linkedin.com/in/mimosaha06/'
        },
        {
          label: 'ORCID',
          url: 'https://orcid.org/0009-0009-6929-6667'
        },
        {
          label: 'ResearchGate',
          url: 'https://www.researchgate.net/profile/Mimosa-Saha-2'
        },
        {
          label: 'Google Scholar',
          url: 'https://scholar.google.com/citations?hl=en&user=WIhPj6oAAAAJ'
        },
        {
          label: 'Scopus',
          url: 'https://www.scopus.com/authid/detail.uri?authorId=60429382600'
        }
      ]
    },
    {
      id: 'farzana-moly', name: 'Farzana Mehedi Moly', group: 'Junior Collaborators & Mentees',
      roles: ['Research Assistant', 'Junior Collaborator', 'Mentee'],
      affiliation: 'Deep Statistical Learning and Research Laboratory (DSLR Lab), Department of Statistics and Data Science, Pabna University of Science and Technology (PUST), Pabna-6600, Bangladesh',
      description: 'Junior collaborator in missing-data methodology and hepatitis-C prediction research.',
      shared: ['HCV missing-data manuscript', 'HCV conference contribution — EFAST 2026'],
      portrait: 'assets/collaborators/farzana-mehedi-moly.jpg?v=20260924-collab2',
      cardPortraitPosition: '50% 30%', links: []
    },
    {
      id: 'obaidul-islam', name: 'Md. Obaidul Islam', group: 'Junior Collaborators & Mentees',
      roles: ['Research Assistant', 'Junior Collaborator', 'Mentee'],
      affiliation: 'Deep Statistical Learning and Research Laboratory (DSLR Lab), Department of Statistics and Data Science, Pabna University of Science and Technology (PUST), Pabna-6600, Bangladesh',
      description: 'Junior collaborator supported in survey-weighted analysis, machine-learning workflow development and conference dissemination.',
      shared: ['EFAST 2026 cesarean-delivery conference contribution'],
      portrait: 'assets/collaborators/obaidul-islam.png?v=20260924-collab2',
      cardPortraitPosition: '50% 18%',
      profilePortraitPosition: '35% 50%', links: []
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

  { name: 'RStudio', short: 'RStudio', brand: 'rstudio', detail: 'Integrated development environment for R programming, statistical analysis, data visualization, reproducible research workflows and academic computing.' },

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
      { name: 'Visual Studio Build Tools', short: 'VS Build Tools', brand: 'visualstudio', detail: 'Microsoft build toolchain for compiling native C/C++ components and supporting Windows-based Python and scientific-computing dependencies that require local compilation.' },
      { name: 'Graphviz', short: 'Graphviz', brand: 'graphviz', detail: 'Graph and diagram rendering for directed workflows, dependency structures, model pipelines and publication-ready research schematics.' },
      { name: 'diagrams.net', short: 'diagrams.net', brand: 'diagramsdotnet', detail: 'Visual diagramming for research workflows, methodology figures, system architecture, flowcharts, conceptual models and publication-ready schematic design.' },
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
      paperId: '440',
      page: 'p. 120',
      presentation: 'Oral Presentation',
      role: 'Presenting Author',
      presentedBy: 'Md. Razu Ahmed',
      summary: 'ICRAST 2025 brought together researchers, academicians, industry experts and students for interdisciplinary exchange across science and technology, including engineering, information technology, biotechnology, environmental science, materials science and mathematical sciences.',
      flyerUrl: 'https://www.ru.ac.bd/wp-content/uploads/2025/08/CFP.pdf',
      flyerLabel: 'Official call for papers / conference flyer',
      url: 'https://csa.ru.ac.bd/science/conf2nd/',
      citation: 'Ahmed, M. R., Rakib, M. A., Shiddik, A. B., & Reza, M. S. (2025). Measuring attitudes toward AI’s impact on the job market in Bangladesh: A study at Pabna University of Science and Technology. In Book of Abstracts, 2nd International Conference on Recent Advances in Science and Technology (ICRAST 2025) (p. 120). Faculty of Science, University of Rajshahi.',
      citationIEEE: 'M. R. Ahmed, M. A. Rakib, A. B. Shiddik, and M. S. Reza, “Measuring Attitudes toward AI’s Impact on the Job Market in Bangladesh: A Study at Pabna University of Science and Technology,” in Book of Abstracts, 2nd International Conference on Recent Advances in Science and Technology (ICRAST 2025), Rajshahi, Bangladesh, Nov. 14–15, 2025, p. 120.',
      contributions: [
        {
          paperId: '440',
          title: 'Measuring Attitudes toward AI’s Impact on the Job Market in Bangladesh: A Study at Pabna University of Science and Technology',
          authors: 'Md. Razu Ahmed, Md. Abdur Rakib, Abu Bakar Shiddik, Md. Shamim Reza',
          page: 'p. 120',
          presentation: 'Oral Presentation',
          role: 'Presenting Author',
          presentedBy: 'Md. Razu Ahmed',
          citation: 'Ahmed, M. R., Rakib, M. A., Shiddik, A. B., & Reza, M. S. (2025). Measuring attitudes toward AI’s impact on the job market in Bangladesh: A study at Pabna University of Science and Technology. In Book of Abstracts, 2nd International Conference on Recent Advances in Science and Technology (ICRAST 2025) (p. 120). Faculty of Science, University of Rajshahi.',
          citationIEEE: 'M. R. Ahmed, M. A. Rakib, A. B. Shiddik, and M. S. Reza, “Measuring Attitudes toward AI’s Impact on the Job Market in Bangladesh: A Study at Pabna University of Science and Technology,” in Book of Abstracts, 2nd International Conference on Recent Advances in Science and Technology (ICRAST 2025), Rajshahi, Bangladesh, Nov. 14–15, 2025, p. 120.',
          evidence: [
            { type:'certificate', label:'Certificate of Achievement', asset:'assets/academic/conferences/icrast-2025-paper-440-certificate.jpeg', href:'assets/academic/conferences/icrast-2025-paper-440-certificate.jpeg', note:'Md. Razu Ahmed · Paper ID 440 · ICRAST 2025', galleryHref:'gallery.html#icrast-440-certificate-gallery', verified:true, sourceFile:'ICRAST Paper ID-440 Certificate(2).jpeg' },
            { type:'proceedings', label:'Book of Abstracts · Paper 440', href:'assets/academic/conferences/icrast-2025-documents/icrast-2025-paper-440-proceedings.pdf', note:'Paper ID 440 · p. 120 · Book of Abstracts', format:'PDF', sourceFile:'Paper ID 440 proceedings icrast.pdf' },
            { type:'slides', label:'Presentation deck · Paper 440', href:'assets/academic/conferences/icrast-2025-documents/icrast-2025-paper-440-presentation.pdf', note:'Paper ID 440 · Md. Razu Ahmed (presenting) · 14 November 2025', format:'PDF', sourceFile:'Paper ID 440 - ICRAST 2025 slide.pdf' },
            { type:'brochure', label:'Conference brochure', asset:'assets/academic/conferences/icrast-2025-brochure.jpg', href:'assets/academic/conferences/icrast-2025-brochure.jpg', officialHref:'https://www.ru.ac.bd/wp-content/uploads/2025/08/CFP.pdf', note:'2nd ICRAST 2025 · Faculty of Science, University of Rajshahi', sourceFile:'icrast brocher.jpg' }
          ]
        },
        {
          paperId: '461',
          title: 'Facial Emotion Recognition with Dimensionality Reduction: A Comparative Study of PCA, FA, and Combined PCA–FA with a CNN Baseline',
          authors: 'Md. Abdur Rakib, Md. Razu Ahmed, Abu Bakar Shiddik, Md. Shamim Reza',
          page: 'p. 126',
          presentation: 'Oral Presentation',
          role: 'Co-author',
          presentedBy: 'Md. Abdur Rakib',
          citation: 'Rakib, M. A., Ahmed, M. R., Shiddik, A. B., & Reza, M. S. (2025). Facial emotion recognition with dimensionality reduction: A comparative study of PCA, FA, and combined PCA–FA with a CNN baseline. In Book of Abstracts, 2nd International Conference on Recent Advances in Science and Technology (ICRAST 2025) (p. 126). Faculty of Science, University of Rajshahi.',
          citationIEEE: 'M. A. Rakib, M. R. Ahmed, A. B. Shiddik, and M. S. Reza, “Facial Emotion Recognition with Dimensionality Reduction: A Comparative Study of PCA, FA, and Combined PCA–FA with a CNN Baseline,” in Book of Abstracts, 2nd International Conference on Recent Advances in Science and Technology (ICRAST 2025), Rajshahi, Bangladesh, Nov. 14–15, 2025, p. 126.',
          evidence: [{ type:'proceedings', label:'Book of Abstracts', note:'Paper ID 461 · p. 126 · separate co-authored contribution' }]
        }
      ]
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
    { title: 'Dashboard', href: 'dashboard-live.html?v=20260923-dashboardlive56', detail: 'Research, impact, service and collaboration analytics.' },
    { title: 'Resources', href: 'resources.html', detail: 'Research toolkit, methods, notes and reproducibility resources.' },
    { title: 'Gallery & Evidence', href: 'gallery.html', detail: 'Verified visual records with context.' },
    { title: 'Ask Razu AI', href: 'ask-razu.html', detail: 'Evidence-grounded research intelligence across the portfolio.' },
    { title: 'CV / Research Vault', href: 'cv.html', detail: 'Interactive CV and public academic evidence.' }
  ];

  const updatedImpact = extra.impactMetrics || [];

  const publishedArticles=(base.publications||[]).filter(p=>!p.status?.toLowerCase().includes('accepted'));
  const acceptedArticles=(base.publications||[]).filter(p=>p.status?.toLowerCase().includes('accepted'));
  const outputs = [
    ...publishedArticles.map(p => ({ ...p, bucket: 'published', links: publicationLinks[p.id] || {} })),
    ...(base.datasets || []).map(p => ({ ...p, bucket: 'published', outputKind: 'dataset', links: publicationLinks[p.id] || {} })),
    ...acceptedArticles.map(p => ({ ...p, bucket: 'accepted', links: publicationLinks[p.id] || {} })),
    ...(base.manuscripts || []).map(p => ({ ...p, bucket: 'under-review', links: {} }))
  ];

  window.MRA_V2 = {
    version: '3.0',
    lastUpdated: '23 September 2026',
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
      { value: String((base.manuscripts || []).length), label: 'Editorial Process' },
      { value: String((extra.ongoing || []).length), label: 'In Preparation' },
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
    datasets: base.datasets || [],
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
