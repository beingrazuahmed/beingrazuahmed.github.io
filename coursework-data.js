window.COURSEWORK_DATA = {
  sourceNote: "Coursework for B.Sc. (Hons.) in Statistics and M.S. in Statistics, Pabna University of Science and Technology (PUST).",
  summary: {
    totalCredits: 200,
    bscCredits: 160,
    msCredits: 40,
    laboratoryCredits: 40,
    laboratoryCourses: 20,
    fieldSurveyCredits: 2,
    projectCredits: 7,
    vivaCredits: 20
  },

  categories: [
    {
      id: "major-statistics",
      name: "Major Statistics Coursework",
      description: "Probability, estimation, regression, sampling, multivariate analysis, time series, biostatistics, survival analysis and related statistical theory.",
      courses: [
        "Principle of Statistics - I",
        "Elementary Probability",
        "Principle of Statistics - II",
        "Probability Distribution",
        "Sampling Distribution",
        "Sampling Techniques - I",
        "Introduction to Demography",
        "Regression Analysis",
        "Theory of Estimation",
        "Test of Hypothesis",
        "Time Series Analysis",
        "Operations Research and Statistical Quality Control",
        "Sampling Techniques - II",
        "Analysis of Variance",
        "Multivariate Analysis - I",
        "Stochastic Process",
        "Biostatistics",
        "Experimental Design",
        "Order Statistic and Nonparametric Tests",
        "Multivariate Analysis - II",
        "Bayesian and Classical Inference",
        "Econometrics",
        "Research Methodology",
        "Epidemiology and Categorical Data Analysis",
        "Actuarial Statistics",
        "Advanced Multivariate Analysis",
        "Advanced Time Series Analysis",
        "Advanced Statistical Inference",
        "Genomics and Bioinformatics",
        "Advanced Statistical Genetics and Bioinformatics",
        "Environmental Statistics",
        "Reliability and Survival Analysis"
      ]
    },
    {
      id: "laboratory-applied",
      name: "Laboratory & Applied Coursework",
      description: "Twenty applied/laboratory courses spanning simulation, C, Python/R, econometrics, epidemiology, data mining and machine learning.",
      groups: [
        {
          label: "B.Sc. laboratory courses · 32 credits",
          courses: [
            "Principle of Statistics - I Lab",
            "Principle of Statistics - II and Probability Distribution Lab",
            "Numerical Analysis and Simulation Lab",
            "Sampling Techniques - I and Sampling Distribution Lab",
            "Demography Lab",
            "Regression Analysis Lab",
            "Estimation and Test of Hypothesis Lab",
            "Programming with C Lab",
            "Time Series Analysis and Sampling Techniques - II Lab",
            "Programming with Python and R Lab",
            "Design of Experiment Lab",
            "Biostatistics and Nonparametric Tests Lab",
            "Multivariate Analysis and Inference Lab",
            "Econometrics Lab",
            "Epidemiology and Categorical Data Analysis Lab",
            "Data Mining and Machine Learning Lab"
          ]
        },
        {
          label: "M.S. applied coursework · 8 credits",
          courses: [
            "Advanced Multivariate and Advanced Time Series Analysis Lab",
            "Advanced Statistical Inference and Bioinformatics Lab",
            "Statistical Data Analysis - I",
            "Statistical Data Analysis - II"
          ]
        }
      ]
    },
    {
      id: "artificial-intelligence-data-science",
      name: "Artificial Intelligence & Data Science",
      description: "Programming, data mining, machine learning, deep learning and statistical data-analysis coursework supporting modern data-driven research.",
      courses: [
        "Programming with Python and R",
        "Data Mining",
        "Machine Learning",
        "Deep Learning for Computer Vision",
        "Statistical Data Analysis - I",
        "Statistical Data Analysis - II"
      ]
    },
    {
      id: "supporting-quantitative",
      name: "Supporting Quantitative Coursework",
      description: "Mathematical, computational and methodological foundations supporting advanced statistical work.",
      courses: [
        "Linear Algebra",
        "Calculus",
        "Advanced Calculus and Differential Equation",
        "Numerical Analysis and Simulation",
        "Real Analysis and Complex Variable",
        "Programming with C"
      ]
    },
    {
      id: "general-interdisciplinary",
      name: "General & Interdisciplinary Coursework",
      description: "Complementary academic training supporting broader research communication and application contexts.",
      courses: [
        "Bangladesh Studies",
        "Basic Economics"
      ]
    },
    {
      id: "research-fieldwork-assessment",
      name: "Research, Fieldwork & Assessment",
      description: "Statistical field survey, supervised B.Sc./M.S. projects, viva voce and research-oriented academic assessment.",
      items: [
        { title: "Statistical Field Survey", credits: 2, detail: "STAT-4110 · B.Sc. field-based research component" },
        { title: "Statistical Project — B.Sc.", credits: 3, detail: "Supervised undergraduate statistical research project" },
        { title: "Project — M.S.", credits: 4, detail: "Supervised postgraduate project-based research" },
        { title: "Viva Voce — B.Sc.", credits: 16, detail: "Programme-level oral academic assessment across eight semesters" },
        { title: "Viva Voce — M.S.", credits: 4, detail: "Programme-level oral academic assessment across two semesters" }
      ]
    }
  ],

  projects: [
    {
      level: "Bachelor of Science (B.Sc. Hons.) in Statistics",
      course: "STAT-4210 · Statistical Project",
      credits: 3,
      grade: "A+",
      gradeLabel: "Academic grade",
      type: "B.Sc. supervised research project",
      title: "Sophisticated Audio Source Separation: A Statistical Exploration of Clarity and Precision with FastICA",
      supervisor: "Prof. Dr. Md. Shamim Reza",
      focus: "Statistical signal processing · blind source separation · dimensionality reduction",
      summary: "This project evaluates audio source separation using Fast Independent Component Analysis (FastICA) in a fully specified and reproducible workflow, with Principal Component Analysis (PCA) and Non-negative Matrix Factorization (NMF) as comparative baselines. Three conversational recordings collected at the Department of Statistics, Pabna University of Science and Technology were canonicalized to 48 kHz WAV, mixed through a fixed 3×3 row-normalized Gaussian matrix, and evaluated using BSS Eval after best-permutation and scale alignment. FastICA substantially outperformed both baselines in SDR and SIR while preserving very high SAR.",
      methods: [
        "FastICA",
        "Principal Component Analysis (PCA)",
        "Non-negative Matrix Factorization (NMF)",
        "Blind source separation",
        "Audio preprocessing",
        "BSS Eval",
        "Waveform & spectrogram analysis",
        "Descriptive, higher-order & entropy statistics"
      ],
      metrics: [
        { label: "FastICA SDR", value: "53.51 ± 0.07 dB" },
        { label: "FastICA SIR", value: "53.52 ± 0.07 dB" },
        { label: "FastICA SAR", value: "79.58 ± 0.00 dB" }
      ],
      benchmark: "PCA: SDR 2.79 ± 0.00 dB · SIR 2.79 ± 0.00 dB · SAR 80.64 ± 0.00 dB. NMF: SDR −2.26 ± 0.00 dB · SIR 0.41 ± 0.00 dB · SAR 4.80 ± 0.00 dB.",
      keywords: [
        "Audio source separation",
        "Fast Independent Component Analysis (FastICA)",
        "Principal Component Analysis (PCA)",
        "Non-negative Matrix Factorization (NMF)",
        "Signal-to-Distortion Ratio (SDR)",
        "Signal-to-Interference Ratio (SIR)",
        "Signal-to-Artifact Ratio (SAR)"
      ],
      figure: "assets/academic/projects/bsc-fastica-pipeline.png?v=20260918-portraits23",
      figureAlt: "End-to-end audio source separation workflow comparing FastICA, PCA and NMF",
      figureCaption: "End-to-end pipeline for audio source separation with FastICA and two baselines (PCA and NMF).",
      outcome: "Developed into a peer-reviewed journal article in Engineering Reports.",
      doi: "10.1002/eng2.70575",
      outputUrl: "https://doi.org/10.1002/eng2.70575",
      journal: {
        name: "Engineering Reports",
        citation: "Ahmed, M. R., Mauya, J., Reza, M. S., & Amin, R. (2026). Sophisticated Audio Source Separation: A Statistical Exploration of Clarity and Precision with FastICA. Engineering Reports, 8(1), e70575.",
        publisher: "John Wiley & Sons, Ltd.",
        onlineIssn: "2577-8196",
        officialUrl: "https://onlinelibrary.wiley.com/journal/25778196",
        metrics: [
          { label: "2025 CiteScore", value: "3.9", source: "Scopus" },
          { label: "2025 Journal Impact Factor", value: "2.9", source: "Clarivate" },
          { label: "2025 Journal Citation Indicator", value: "0.45", source: "Clarivate" },
          { label: "2025 SJR", value: "0.470", source: "SCImago" },
          { label: "Quartile", value: "Q2", source: "JCR / SCImago" },
          { label: "H-index", value: "39", source: "SCImago" }
        ],
        standing: "JCR Q2 · Engineering, Multidisciplinary · Scopus indexed · Web of Science Core Collection: Emerging Sources Citation Index (ESCI)"
      }
    },
    {
      level: "Master of Science (M.S.) in Statistics",
      course: "M.STAT-5110 · Project",
      credits: 4,
      grade: "A+",
      gradeLabel: "Academic grade",
      type: "M.S. supervised research project",
      title: "A Deep Learning and Handcrafted Feature Fusion Framework for Automated Diabetic Retinopathy Grading from Retinal Fundus Images",
      supervisor: "Prof. Dr. Md. Shamim Reza",
      focus: "Medical image analysis · deep learning · handcrafted feature fusion · explainable AI",
      summary: "This project proposes a stage-wise deep-handcrafted feature fusion framework for automated five-class diabetic retinopathy grading from retinal fundus images. A leak-safe cross-source benchmark was created by harmonizing APTOS 2019 and IDRiD while preserving the official IDRiD test split. The validation-driven five-stage workflow compared frozen deep embeddings, handcrafted descriptors, feature fusion, fine-tuning, and fusion with fine-tuned embeddings under a consistent evaluation protocol. The selected Stage-5 model combines fine-tuned DenseNet121 embeddings with SIFT-BoVW and XGBoost and was integrated into an explainable screening-oriented web prototype.",
      methods: [
        "DenseNet121",
        "SIFT-BoVW",
        "XGBoost",
        "Deep-handcrafted feature fusion",
        "Transfer learning",
        "Leakage-aware cross-source validation",
        "1,000 bootstrap resamples",
        "Grad-CAM++",
        "Five-class DR grading"
      ],
      metrics: [
        { label: "Test Accuracy", value: "78.71% ± 1.65%" },
        { label: "Macro-F1", value: "64.13% ± 2.55%" },
        { label: "Cohen’s κ", value: "67.88% ± 2.30%" },
        { label: "OvR AUC", value: "94.80% ± 0.59%" }
      ],
      benchmark: "The final Stage-5 fusion model achieved the strongest held-out Accuracy, Cohen’s kappa and OvR AUC among the evaluated models while remaining competitive in Macro-F1.",
      keywords: [
        "Diabetic retinopathy",
        "Retinal fundus images",
        "Deep learning",
        "Handcrafted features",
        "Feature fusion"
      ],
      figure: "assets/academic/projects/ms-dr-screening-prototype.png?v=20260918-portraits23",
      figureAlt: "Web-based diabetic retinopathy screening prototype with five-class prediction and Grad-CAM++",
      figureCaption: "Web-based DR screening prototype illustrating image upload, five-class prediction (Grades 0–4), Grad-CAM++ visualization, and class-wise probability outputs.",
      outcome: "Developed into an explainable diabetic-retinopathy grading framework and web-based research prototype."
    }
  ],

  instructorLinks: [
    {
      instructor: "Prof. Dr. Md. Shamim Reza",
      portrait: "assets/academic/instructors/shamim-reza.jpg?v=20260918-portraits23",
      role: "Academic Teacher · Project Supervisor",
      position: "Professor",
      department: "Department of Statistics and Data Science",
      institution: "Pabna University of Science and Technology (PUST), Pabna-6600, Bangladesh",
      leadership: [
        "Dean, Faculty of Science",
        "Director, Institutional Quality Assurance Cell (IQAC)"
      ],
      credentials: [
        "PhD, Peking University, China"
      ],
      courses: [
        "Sampling Techniques - I",
        "Theory of Estimation",
        "Operations Research and Statistical Quality Control",
        "Programming with Python and R",
        "Multivariate Analysis - I",
        "Multivariate Analysis - II",
        "Machine Learning",
        "Deep Learning for Computer Vision"
      ]
    },
    {
      instructor: "Prof. Dr. Sabba Ruhi",
      portrait: "assets/academic/instructors/sabba-ruhi.png?v=20260918-portraits23",
      role: "Academic Teacher · Departmental Leadership",
      position: "Professor",
      department: "Department of Statistics and Data Science",
      institution: "Pabna University of Science and Technology (PUST), Pabna-6600, Bangladesh",
      leadership: [
        "Chairman, Department of Statistics and Data Science"
      ],
      credentials: [
        "B.Sc. (Hons.) in Statistics, University of Rajshahi",
        "M.Sc. in Statistics, University of Rajshahi",
        "PhD, University of Rajshahi"
      ],
      courses: [
        "Probability Distribution",
        "Regression Analysis",
        "Biostatistics",
        "Reliability and Survival Analysis"
      ]
    },
    {
      instructor: "Dr. Md. Menhazul Abedin",
      portrait: "assets/academic/instructors/menhazul-abedin.jpg?v=20260918-portraits23",
      role: "Academic Guest Teacher",
      position: "Associate Professor",
      department: "Statistics Discipline",
      institution: "Kabi Jibanananda Das Academic Building (3rd Academic Building), Room No. 3160, Khulna University, Khulna-9208, Bangladesh",
      credentials: [
        "PhD, Hokkaido University, Hokkaido, Japan",
        "M.Sc. (Thesis) in Statistics, University of Rajshahi",
        "B.Sc. (Hons.) in Statistics, University of Rajshahi"
      ],
      courses: [
        "Advanced Multivariate Analysis"
      ]
    },
    {
      instructor: "Prof. Dr. Md. Aminul Hoque",
      portrait: "assets/academic/instructors/aminul-hoque.jpg?v=20260918-portraits23",
      role: "Academic Guest Teacher",
      position: "Professor",
      department: "Department of Statistics and Data Science",
      institution: "University of Rajshahi, Rajshahi-6205, Bangladesh",
      credentials: [
        "M.Sc. (Rajshahi)",
        "PhD, Keio University, Japan",
        "Postdoctoral training, University of Malaya, Malaysia",
        "Postdoctoral training, Niigata University, Japan"
      ],
      courses: [
        "Genomics and Bioinformatics",
        "Advanced Statistical Genetics and Bioinformatics"
      ]
    }
  ],

  skillLinks: [
    { skill: "Statistical inference", courses: ["Theory of Estimation", "Test of Hypothesis", "Advanced Statistical Inference", "Bayesian and Classical Inference"] },
    { skill: "Survey & sampling", courses: ["Sampling Techniques - I", "Sampling Techniques - II", "Sampling Distribution", "Statistical Field Survey"] },
    { skill: "Predictive modelling", courses: ["Regression Analysis", "Data Mining", "Machine Learning", "Deep Learning for Computer Vision"] },
    { skill: "Public-health analytics", courses: ["Biostatistics", "Epidemiology and Categorical Data Analysis", "Reliability and Survival Analysis"] },
    { skill: "Programming & reproducibility", courses: ["Programming with C", "Programming with Python and R", "Numerical Analysis and Simulation"] },
    { skill: "Multivariate & time-series methods", courses: ["Multivariate Analysis - I", "Multivariate Analysis - II", "Advanced Multivariate Analysis", "Time Series Analysis", "Advanced Time Series Analysis"] }
  ]
};
