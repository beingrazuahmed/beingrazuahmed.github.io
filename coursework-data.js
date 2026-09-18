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
        "Data Mining",
        "Machine Learning",
        "Actuarial Statistics",
        "Advanced Multivariate Analysis",
        "Advanced Time Series Analysis",
        "Advanced Statistical Inference",
        "Genomics and Bioinformatics",
        "Advanced Statistical Genetics and Bioinformatics",
        "Deep Learning for Computer Vision",
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
      id: "supporting-quantitative",
      name: "Supporting Quantitative Coursework",
      description: "Mathematical, computational and methodological foundations supporting advanced statistical work.",
      courses: [
        "Linear Algebra",
        "Calculus",
        "Advanced Calculus and Differential Equation",
        "Numerical Analysis and Simulation",
        "Real Analysis and Complex Variable",
        "Programming with C",
        "Programming with Python and R"
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
        { title: "Statistical Field Survey", credits: 2, detail: "B.Sc. field-based research component" },
        { title: "Statistical Project — B.Sc.", credits: 3, detail: "Supervised undergraduate statistical research project" },
        { title: "Project — M.S.", credits: 4, detail: "Supervised postgraduate project-based research" },
        { title: "Viva Voce — B.Sc.", credits: 16, detail: "Programme-level oral academic assessment across eight semesters" },
        { title: "Viva Voce — M.S.", credits: 4, detail: "Programme-level oral academic assessment across two semesters" }
      ]
    }
  ],

  projects: [
    {
      level: "B.Sc. (Hons.) in Statistics",
      course: "STAT-4210 · Statistical Project",
      credits: 3,
      title: "Sophisticated Audio Source Separation: A Statistical Exploration of Clarity and Precision with FastICA",
      supervisor: "Dr. Md. Shamim Reza",
      outcome: "Developed into a peer-reviewed journal article in Engineering Reports."
    },
    {
      level: "M.S. in Statistics",
      course: "M.STAT-5110 · Project",
      credits: 4,
      title: "A Deep Learning and Handcrafted Feature Fusion Framework for Automated Diabetic Retinopathy Grading from Retinal Fundus Images",
      supervisor: "Dr. Md. Shamim Reza",
      outcome: "Developed into an explainable diabetic-retinopathy grading research framework and web-based research prototype."
    }
  ],

  instructorLinks: [
    {
      instructor: "Dr. Md. Shamim Reza",
      role: "Academic Teacher · Project Supervisor",
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
      instructor: "Dr. Sabba Ruhi",
      role: "Academic Teacher · Chairman, Department of Statistics and Data Science",
      courses: [
        "Probability Distribution",
        "Regression Analysis",
        "Biostatistics",
        "Reliability and Survival Analysis"
      ]
    },
    {
      instructor: "Dr. Md. Menhazul Abedin",
      role: "Academic Guest Teacher",
      courses: [
        "Advanced Multivariate Analysis"
      ]
    },
    {
      instructor: "Dr. Md. Aminul Hoque",
      role: "Academic Guest Teacher",
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
