window.COURSEWORK_DATA = {
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
      name: "Major Statistics Coursework",
      description: "Core theoretical, computational and applied statistics across the B.Sc. and M.S. programmes.",
      courses: [
        "Principles of Statistics-I", "Principles of Statistics-II", "Elementary Probability", "Probability Distribution",
        "Sampling Distribution", "Sampling Techniques-I", "Sampling Techniques-II", "Theory of Estimation", "Test of Hypothesis",
        "Advanced Statistical Inference", "Bayesian and Classical Inference", "Regression Analysis", "Analysis of Variance",
        "Experimental Design", "Multivariate Analysis-I", "Multivariate Analysis-II", "Advanced Multivariate Analysis",
        "Time Series Analysis", "Advanced Time Series Analysis", "Stochastic Process", "Order Statistic and Nonparametric Tests",
        "Econometrics", "Reliability and Survival Analysis", "Environmental Statistics", "Actuarial Statistics",
        "Operations Research and Statistical Quality Control", "Research Methodology", "Introduction to Demography",
        "Biostatistics", "Epidemiology and Categorical Data Analysis", "Genomics and Bioinformatics",
        "Advanced Statistical Genetics and Bioinformatics", "Data Mining", "Machine Learning", "Deep Learning for Computer Vision",
        "Numerical Analysis and Simulation", "Programming with C", "Programming with Python and R"
      ]
    },
    {
      name: "Laboratory & Applied Coursework",
      description: "40 credits across 20 practical courses, including 16 B.Sc. laboratories and 4 M.S. applied-data courses.",
      groups: [
        {
          label: "B.Sc. laboratory courses · 32 credits",
          courses: [
            "Principles of Statistics-I Lab",
            "Principles of Statistics-II and Probability Distribution Lab",
            "Numerical Analysis and Simulation Lab",
            "Sampling Techniques-I and Sampling Distribution Lab",
            "Demography Lab",
            "Regression Analysis Lab",
            "Estimation and Test of Hypothesis Lab",
            "Programming with C Lab",
            "Time Series Analysis and Sampling Techniques-II Lab",
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
            "Statistical Data Analysis-I",
            "Statistical Data Analysis-II"
          ]
        }
      ]
    },
    {
      name: "Supporting Quantitative Coursework",
      description: "Mathematical foundations supporting advanced statistical theory and computation.",
      courses: ["Linear Algebra", "Calculus", "Advanced Calculus and Differential Equation", "Real Analysis and Complex Variable"]
    },
    {
      name: "General & Interdisciplinary Coursework",
      description: "Broader contextual preparation supporting interdisciplinary research.",
      courses: ["Bangladesh Studies", "Basic Economics"]
    },
    {
      name: "Research, Fieldwork & Academic Assessment",
      description: "Supervised research, field survey and programme-level academic assessment.",
      items: [
        { title: "Statistical Field Survey", credits: 2, detail: "Measuring Attitudes towards AI’s Impact on the Job Market in Bangladesh: A Study at Pabna University of Science and Technology" },
        { title: "Statistical Project — B.Sc.", credits: 3, detail: "Sophisticated Audio Source Separation: A Statistical Exploration of Clarity and Precision with FastICA" },
        { title: "Project — M.S.", credits: 4, detail: "A Deep Learning and Handcrafted Feature Fusion Framework for Automated Diabetic Retinopathy Grading from Retinal Fundus Images" },
        { title: "Viva Voce — B.Sc.", credits: 16, detail: "Programme-level oral assessment" },
        { title: "Viva Voce — M.S.", credits: 4, detail: "Programme-level oral assessment" }
      ]
    }
  ],
  instructorLinks: [
    {
      instructor: "Dr. Md. Shamim Reza",
      courses: ["Sampling Techniques-I", "Theory of Estimation", "Operations Research and Statistical Quality Control", "Programming with Python and R", "Multivariate Analysis-I", "Multivariate Analysis-II", "Machine Learning", "Deep Learning for Computer Vision"]
    },
    {
      instructor: "Dr. Sabba Ruhi",
      courses: ["Probability Distribution", "Regression Analysis", "Biostatistics", "Reliability and Survival Analysis"]
    }
  ],
  skillLinks: [
    { skill: "Statistical inference", courses: ["Theory of Estimation", "Test of Hypothesis", "Advanced Statistical Inference", "Bayesian and Classical Inference"] },
    { skill: "Survey & sampling", courses: ["Sampling Techniques-I", "Sampling Techniques-II", "Sampling Distribution", "Statistical Field Survey"] },
    { skill: "Predictive modelling", courses: ["Regression Analysis", "Data Mining", "Machine Learning", "Deep Learning for Computer Vision"] },
    { skill: "Public-health analytics", courses: ["Biostatistics", "Epidemiology and Categorical Data Analysis", "Reliability and Survival Analysis"] },
    { skill: "Programming & reproducibility", courses: ["Programming with C", "Programming with Python and R", "Numerical Analysis and Simulation"] },
    { skill: "Multivariate & time-series methods", courses: ["Multivariate Analysis-I", "Multivariate Analysis-II", "Advanced Multivariate Analysis", "Time Series Analysis", "Advanced Time Series Analysis"] }
  ]
};
