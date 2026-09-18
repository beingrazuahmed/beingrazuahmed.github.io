window.PORTFOLIO_DATA = {
  profile: {
    name: "Md. Razu Ahmed",
    roles: ["Statistician", "Data Scientist", "Researcher", "Peer Reviewer"],
    focus: "Machine Learning · Explainable AI · Public Health & Biomedical Data Science",
    intro: "I am Md. Razu Ahmed, a statistician, data scientist, researcher, and peer reviewer working at the intersection of statistical learning, artificial intelligence, public health, and biomedical data science. I develop rigorous, reproducible, and interpretable analytical workflows that connect statistical methodology with machine learning and deep learning to address real-world problems in health, medical imaging, infectious-disease forecasting, natural language processing, and intelligent food systems.",
    principle: "My research emphasizes methodological rigor, leakage-aware validation, explainability, reproducibility, and evidence that can support meaningful real-world decisions.",
    email: "razuahmed038@gmail.com",
    portfolio: "https://beingrazuahmed.github.io/",
    affiliation: "Deep Statistical Learning and Research (DSLR) Lab, Department of Statistics and Data Science, Pabna University of Science and Technology (PUST)",
    availability: "Selectively open to research collaboration, interdisciplinary projects, PhD opportunities, and academic partnerships.",
    image: "assets/profile/razu-portrait.JPG"
  },

  metrics: [
    { label: "Published / Online", value: 3, note: "Peer-reviewed journal articles" },
    { label: "Accepted / Forthcoming", value: 1, note: "First-authored journal article" },
    { label: "Conference Contributions", value: 8, note: "3 presentations delivered" },
    { label: "Public Dataset", value: 1, note: "Mendeley Data" },
    { label: "Completed Peer Reviews", value: 32, note: "Across 3 journals" }
  ],

  interests: {
    methods: [
      "Artificial Intelligence & Data Science", "Statistical Learning", "Machine Learning", "Deep Learning",
      "Explainable AI", "Multivariate & Multimodal Analysis", "Time-Series Modelling & Forecasting", "Causal Inference"
    ],
    applications: [
      "Public Health Analytics", "Health Informatics", "Disease Prediction", "Medical Imaging", "Computer Vision",
      "Natural Language Processing", "Climate–Health Analytics", "Genomics & Bioinformatics", "Audio Signal Processing", "Food Computing"
    ]
  },

  publications: [
    {
      id: "fastica", type: "Journal Article", status: "Published", year: 2026, role: "First Author",
      title: "Sophisticated Audio Source Separation: A Statistical Exploration of Clarity and Precision With FastICA",
      venue: "Engineering Reports", citation: "Engineering Reports, 8(1), e70575",
      doi: "https://doi.org/10.1002/eng2.70575",
      tags: ["FastICA", "Signal Processing", "Blind Source Separation"],
      summary: "A statistical evaluation of FastICA, PCA and NMF for conversational audio source separation, with FastICA achieving the strongest separation quality across repeated runs.",
      highlight: "FastICA achieved SDR 53.51 ± 0.07 dB and SIR 53.52 ± 0.07 dB.",
      visual: "assets/publications/fastica/figure-1-workflow.tif"
    },
    {
      id: "ckd", type: "Journal Article", status: "Published", year: 2025, role: "First Author",
      title: "Identification of Predisposing Risk Factors for Chronic Kidney Disease and Optimizing Disease Prediction Using a Stacking Machine Learning Algorithm",
      venue: "International Journal of Statistical Sciences", citation: "International Journal of Statistical Sciences, 25(2), 1–32",
      doi: "https://doi.org/10.3329/ijss.v25i2.85732",
      tags: ["CKD", "Machine Learning", "Stacking", "Feature Selection"],
      summary: "A leakage-aware machine-learning workflow for CKD risk-factor identification and predictive modelling using feature-selection consensus and stacked learners.",
      highlight: "The proposed stacking approach reported 100% accuracy on the UCI CKD data and 96.7% on simulated validation data.",
      visual: "assets/publications/ckd/feature-importance.png"
    },
    {
      id: "dib", type: "Journal Article", status: "Available Online · Journal Pre-proof", year: 2026, role: "Second Author",
      title: "PUST Cafeteria Food Image Dataset: Real-World Bangladeshi Meal-Platter Images with Bounding-Box and Polygon Annotations",
      venue: "Data in Brief", citation: "Data in Brief, Article 113262",
      doi: "https://doi.org/10.1016/j.dib.2026.113262",
      researchgate: "https://www.researchgate.net/publication/414270604_PUST_Cafeteria_Food_Image_Dataset_Real-World_Bangladeshi_Meal-Platter_Images_with_Bounding-Box_and_Polygon_Annotations",
      dataset: "https://doi.org/10.17632/fn6yhzjz83.2",
      tags: ["Food Computing", "Object Detection", "Instance Segmentation", "Dataset"],
      summary: "A real-world Bangladeshi cafeteria food-image resource with bounding-box and polygon annotations for object detection and instance segmentation.",
      highlight: "720 source photographs yielded 1,728 processed images with 6,297 annotated instances across 16 classes.",
      visual: "assets/publications/data-in-brief/figure-5-annotations.png"
    },
    {
      id: "ai-employment", type: "Journal Article", status: "Accepted / Forthcoming", year: 2026, role: "First Author",
      title: "Perceptions of Artificial Intelligence and Its Implications for Employment in Bangladesh",
      venue: "International Journal of Statistical Sciences", citation: "Forthcoming in 26(2), November 2026",
      tags: ["AI Perception", "Employment", "PCA", "Correspondence Analysis"],
      summary: "A survey-based study of perceptions of AI and employment implications in Bangladesh using multivariate statistical methods.",
      highlight: "Accepted 2 September 2026; 370 respondents and a 33-item instrument.",
      visual: "assets/publications/ai-employment/methodology.png"
    }
  ],

  manuscripts: [
    {
      id: "dr", status: "Submitted / Under Review", role: "First Author",
      title: "A Deep Learning and Handcrafted Feature Fusion Framework for Automated Diabetic Retinopathy Grading from Retinal Fundus Images",
      venue: "Measurement", tags: ["Medical Imaging", "Deep Learning", "Feature Fusion", "Explainable AI"],
      summary: "A five-stage leak-safe validation framework combining deep representations, handcrafted descriptors and explainable modelling for diabetic-retinopathy grading.",
      highlight: "Best held-out model: FT-DenseNet121 + SIFT-BoVW + XGBoost; accuracy 78.71%, OvR AUC 94.80%.",
      visual: "assets/manuscripts/dr-grading/workflow.png"
    },
    {
      id: "hcv", status: "Submitted / Under Review", role: "Second Author",
      title: "Comparative Evaluation of Hybrid MICE–Median Missing-Value Reconstruction and Downstream Hepatitis C Prediction Using Machine Learning",
      venue: "BMC Medical Informatics and Decision Making", tags: ["Missing Data", "HCV", "Machine Learning", "MICE"],
      summary: "A rigorous comparison of missing-data reconstruction strategies and their downstream impact on hepatitis-C prediction and severity estimation.",
      highlight: "Hybrid MICE–Median achieved the lowest standardized MAE across all tested missingness levels.",
      visual: "assets/manuscripts/hcv/methodology.png"
    },
    {
      id: "dengue-forecast", status: "Under Peer Review", role: "Second Author",
      title: "Nationwide Evaluation of District-Informed Bottom-Up and Direct National Approaches for One-Week-Ahead Forecasting of Dengue Hospital Admissions in Bangladesh",
      venue: "BMC Public Health", tags: ["Dengue", "Forecasting", "LightGBM", "Public Health"],
      summary: "A temporally locked nationwide comparison of district-informed bottom-up and direct national one-week-ahead dengue admission forecasts across all 64 districts of Bangladesh.",
      highlight: "Bottom-up LightGBM achieved held-out national wMAPE 12.10% and R² 0.9625 in 2025.",
      visual: "assets/manuscripts/dengue-forecasting/workflow.png"
    },
    {
      id: "beyond-burden", status: "Submitted / Under Review", role: "Joint First Author · Co-corresponding Author",
      title: "Beyond Burden: Testing the Incremental Decision Value of Operational Readiness for Dengue Preparedness in Bangladesh",
      venue: "Scientific Reports", tags: ["Dengue Preparedness", "Operational Readiness", "Decision Emulation"],
      summary: "A nationwide code-locked retrospective decision-emulation study testing whether operational readiness adds actionable value to district prioritization beyond epidemiological and structural information.",
      highlight: "Held-out evaluation showed operational fragility altered some rankings but not the primary top-10 allocation.",
      visual: "assets/manuscripts/beyond-burden/workflow.png"
    },
    {
      id: "food-billing", status: "Submitted / Under Review", role: "Third Author",
      title: "Real-Time Food Detection for Automated Cafeteria Billing Using RT-DETR and GAN-Based Data Augmentation",
      venue: "Discover Artificial Intelligence", tags: ["RT-DETR", "GAN", "Food Detection", "Automated Billing"],
      summary: "A real-time cafeteria billing framework benchmarking RT-DETR-L, YOLO and Faster R-CNN and evaluating Pix2Pix GAN augmentation.",
      highlight: "RT-DETR-L achieved 76.55% Exact Bill Accuracy with MAE 3.41 BDT on 145 untouched test platters.",
      visual: "assets/manuscripts/cafeteria-billing/workflow.png"
    },
    {
      id: "sentiment", status: "Submitted / Under Review", role: "Fourth Author",
      title: "Adaptive Probability Fusion of Lightweight Recurrent Networks for Cross-Domain Sentiment Classification",
      venue: "Applied AI Letters", tags: ["NLP", "Sentiment Analysis", "RNN", "BiLSTM"],
      summary: "A lightweight cross-domain sentiment-classification framework using RNN and BiLSTM probability fusion across social-media and movie-review datasets.",
      highlight: "The ensemble reached 77.36% accuracy on Twitter Airline Sentiment; standalone BiLSTM reached 85% on IMDb.",
      visual: "assets/manuscripts/sentiment/workflow.png"
    },
    {
      id: "academic-performance", status: "Submitted / Under Review", role: "Second Author",
      title: "Factors Associated with Undergraduates Academic Performance Among Public University Students: A Case Study",
      venue: "International Journal of Educational Reform", tags: ["Higher Education", "Ordinal Regression", "Student Engagement"],
      summary: "A cross-sectional analysis of academic performance, student engagement and rural–urban background among public-university students in Bangladesh.",
      highlight: "Academic reading ≥3 h/day was associated with higher CGPA categories (AOR 16.30, 95% CI 5.39–49.26).",
      visual: "assets/manuscripts/academic-performance/forest-plot.png"
    }
  ],

  conferences: [
    {
      id: "efast-2026", event: "EFAST 2026", full: "International Conference on Emerging Frontiers in Advanced Sciences and Technologies 2026",
      host: "Pabna University of Science and Technology, Pabna, Bangladesh", date: "27–28 June 2026", meta: "Conference Proceedings · ISBN 978-984-37-0635-5",
      papers: [
        { title: "Automated Five-Stage Diabetic Retinopathy Grading Using a Leak-Safe and Explainable Deep-Handcrafted Fusion Framework", authors: "Md. Razu Ahmed, Jannatul Mauya, Md. Shamim Reza", page: "p. 173", role: "Oral Presentation · Presenting Author" },
        { title: "A Multi-Scale Attention-Based Dense Residual Network for Sugarcane Leaf Disease Detection Using BSRI Data", authors: "Jannatul Mauya, Md. Razu Ahmed, Sabba Ruhi, Md. Shamim Reza", page: "p. 172", role: "Co-author" },
        { title: "Comparative Analysis of Missing Value Imputation Methods with a Hybrid Approach for HCV Prediction Using Machine Learning", authors: "Farzana Mehedi Moly, Md. Razu Ahmed, Jannatul Mauya, Md. Shamim Reza", page: "p. 174", role: "Co-author" },
        { title: "Socioeconomic Determinants of Cesarean Section Delivery in Bangladesh: A Survey-Weighted Statistical and Explainable Machine Learning Analysis", authors: "Md. Obaidul Islam, Md. Razu Ahmed, Sabba Ruhi", page: "p. 298", role: "Co-author · Public conference contribution" }
      ]
    },
    {
      id: "icasds-2025", event: "ICASDS 2025", full: "International Conference on Applied Statistics and Data Science 2025",
      host: "ISRT (now IASDS), University of Dhaka, Bangladesh", date: "28–29 December 2025", meta: "Programme and Abstract Book",
      papers: [
        { title: "A Deep Learning and Handcrafted Feature Fusion Framework for Automated Diabetic Retinopathy Grading from Retinal Fundus Images", authors: "Md. Razu Ahmed, Md. Shamim Reza", page: "p. 200", role: "Poster Presentation · Presenting Author · JSR Award" },
        { title: "Predisposing Factor Identification and Multi-Class Grading of Diabetes Mellitus Using Machine Learning", authors: "Mimosa Saha, Md. Razu Ahmed, Md. Shamim Reza", page: "p. 199", role: "Co-author" }
      ]
    },
    {
      id: "icrast-2025", event: "ICRAST 2025", full: "2nd International Conference on Recent Advances in Science and Technology 2025",
      host: "Faculty of Science, University of Rajshahi, Bangladesh", date: "14–15 November 2025", meta: "Book of Abstracts",
      papers: [
        { title: "Measuring Attitudes toward AI’s Impact on the Job Market in Bangladesh: A Study at Pabna University of Science and Technology", authors: "Md. Razu Ahmed, Md. Abdur Rakib, Abu Bakar Shiddik, Md. Shamim Reza", page: "p. 120", role: "Oral Presentation · Presenting Author" },
        { title: "Facial Emotion Recognition with Dimensionality Reduction: A Comparative Study of PCA, FA, and Combined PCA–FA with a CNN Baseline", authors: "Md. Abdur Rakib, Md. Razu Ahmed, Abu Bakar Shiddik, Md. Shamim Reza", page: "p. 126", role: "Co-author" }
      ]
    }
  ],

  awards: [
    {
      title: "Journal of Statistical Research (JSR) Award for Poster Competition",
      date: "December 2025",
      issuer: "Journal of Statistical Research · ICASDS 2025 · University of Dhaka",
      detail: "Awarded for outstanding performance in the poster competition for the diabetic-retinopathy grading research.",
      evidence: "Certificate ID ICASDS-253411",
      asset: "assets/recognition/jsr-award-icasds-2025.pdf"
    },
    {
      title: "Talent Pool Scholarship",
      date: "2008",
      issuer: "Ministry of Primary and Mass Education, Government of Bangladesh",
      detail: "Awarded for outstanding academic performance in the Primary Scholarship Examination at Grade 5 level.",
      asset: "assets/recognition/talent-pool-scholarship.pdf"
    }
  ],

  training: [
    { group: "Research Methods & Scholarly Practice", title: "Research Data Management", provider: "Researcher Academy, Elsevier", date: "13 August 2026", duration: "4 h 55 min" },
    { group: "Research Methods & Scholarly Practice", title: "Research Design", provider: "Researcher Academy, Elsevier", date: "13 August 2026", duration: "3 h 50 min" },
    { group: "Research Methods & Scholarly Practice", title: "Research Integrity: Publication Ethics", provider: "Nature Masterclasses", date: "12 August 2026", duration: "8 h" },
    { group: "Research Methods & Scholarly Practice", title: "Focus on Peer Review", provider: "Nature Masterclasses", date: "12 August 2026", duration: "3.5 h" },
    { group: "Methodological Workshop", title: "Causal Inference for Observational Data Analysis", provider: "ICASDS 2025 Pre-Conference Workshop · University of Dhaka", date: "27 December 2025", duration: "Workshop" },
    { group: "Methodological Workshop", title: "From Business Challenge to Deployment: An Industry-Standard Framework for Applied Machine Learning Projects", provider: "ICASDS 2025 Pre-Conference Workshop · University of Dhaka", date: "27 December 2025", duration: "Workshop" },
    { group: "Professional Training", title: "IT Support Service", provider: "SICIP · Pabna Technical Training Center", date: "May–September 2025", duration: "360 h · Competent" },
    { group: "Professional Training", title: "Computer Office Application — Trade 076", provider: "Bangladesh Technical Education Board", date: "2020–2021", duration: "360 h · Grade A+" },
    { group: "Applied Learning", title: "Build a Data Science Web App with Streamlit and Python", provider: "Coursera Project Network", date: "18 May 2023", duration: "Project course" },
    { group: "Applied Learning", title: "AI for Everyone", provider: "DeepLearning.AI · Coursera", date: "13 July 2020", duration: "Course" }
  ],

  engagements: [
    { title: "Hult Prize 2024–2025 OnCampus Program", role: "Competitor · CEO & Team Leader, Stat4Change", date: "27 June 2025", venue: "Pabna University of Science and Technology" },
    { title: "Public Discussion: Global Nuclear Energy: Facts and Myths", role: "Participant", date: "31 October 2024", venue: "PUST · Energy of the Future Information Centre · ASE ROSATOM", asset: "assets/events/global-nuclear-energy-2024.jpg" },
    { title: "International Agri-Art Festival 2020", role: "Campus Ambassador · Certificate of Excellence", date: "11–17 October 2020", venue: "Rajshahi University Agricultural Club" },
    { title: "5th Dutch-Bangla Bank Bangladesh Physics Olympiad 2015", role: "Divisional-Round Participant · Category C", date: "2015", venue: "Represented Rajshahi College" }
  ],

  service: [
    { journal: "PLOS ONE", reviews: 25, since: "March 2026", recognition: "Completed invited reviews" },
    { journal: "Biomedical Signal Processing and Control", reviews: 6, since: "July 2026", recognition: "Certificates of Reviewing received" },
    { journal: "Engineering Applications of Artificial Intelligence", reviews: 1, since: "September 2026", recognition: "Certificate of Reviewing received" }
  ],

  education: [
    { degree: "M.S. in Statistics", institution: "Pabna University of Science and Technology", year: "Exam Year 2022 · Examination held 2025", detail: "CGPA 3.49/4.00 · Ranked 5th in project-based track", project: "A Deep Learning and Handcrafted Feature Fusion Framework for Automated Diabetic Retinopathy Grading from Retinal Fundus Images" },
    { degree: "B.Sc. (Hons.) in Statistics", institution: "Pabna University of Science and Technology", year: "Exam Year 2021 · Examination held 2024", detail: "CGPA 2.87/4.00", project: "Sophisticated Audio Source Separation: A Statistical Exploration of Clarity and Precision with FastICA" }
  ],

  guidance: [
    { name: "Dr. Md. Shamim Reza", role: "Principal Academic Supervisor · Primary Research Collaborator · Academic Teacher" },
    { name: "Dr. Sabba Ruhi", role: "Department Chairman · Research Collaborator · Academic Teacher" },
    { name: "Dr. Aminul Hoque", role: "Academic Mentor · Research Collaborator" },
    { name: "Dr. Menhazul Abedin", role: "Research Advisor · Academic Guest Teacher" },
    { name: "Dr. Md. Feroz Ali", role: "Research Advisor · Manuscript Collaborator" },
    { name: "Dr. Md. Ashad Alam", role: "External Research Advisor · Collaborator" }
  ],

  collaborators: [
    { name: "Ruhul Amin", role: "Departmental Senior · Research Collaborator" },
    { name: "Jannatul Mauya", role: "Departmental Senior · Key Research Collaborator" },
    { name: "Md. Abdur Rakib", role: "Batchmate · Research Collaborator" },
    { name: "Muhammad Ziaul Haque", role: "Research Collaborator · Co-author" },
    { name: "Abu Bakar Shiddik", role: "Batchmate · Research Collaborator" },
    { name: "Marufa Yeasmin", role: "Batchmate · Research Collaborator" },
    { name: "Protiva Rani Kundu", role: "Batchmate · Research Collaborator" }
  ],

  juniorNetwork: [
    { name: "Mimosa Saha", role: "Junior Researcher · Mentee · Research Collaborator" },
    { name: "Farzana Mehedi Moly", role: "Junior Researcher · Mentee · Research Collaborator" },
    { name: "Md. Obaidul Islam", role: "Junior Researcher · Mentee · Public conference collaborator only" }
  ],

  gallery: [
    { title: "JSR Award — ICASDS 2025", category: "Award", caption: "Recognition for outstanding poster performance at ICASDS 2025.", asset: "assets/gallery/jsr-award-icasds-2025.jpg" },
    { title: "EFAST 2026 Oral Presentation", category: "Conference", caption: "Presenting Author for the diabetic-retinopathy grading study.", asset: "assets/gallery/efast-2026-oral.jpg" },
    { title: "ICRAST 2025 Oral Presentation", category: "Conference", caption: "Oral presentation on AI and employment perceptions in Bangladesh.", asset: "assets/gallery/icrast-2025-oral.jpg" },
    { title: "Global Nuclear Energy: Facts and Myths", category: "Scientific Engagement", caption: "Public discussion at PUST on 31 October 2024.", asset: "assets/events/global-nuclear-energy-2024.jpg" },
    { title: "Research Training & Certificates", category: "Professional Development", caption: "Selected training in research design, integrity, peer review and data management.", asset: "assets/gallery/research-training.jpg" },
    { title: "Peer Review Recognition", category: "Scholarly Service", caption: "Verified reviewing activity across PLOS ONE, BSPC and EAAI.", asset: "assets/gallery/reviewer-recognition.jpg" }
  ],

  profiles: [
    { label: "Google Scholar", url: "https://scholar.google.com/citations?hl=en&user=70z0eXEAAAAJ", type: "academic" },
    { label: "ORCID", url: "https://orcid.org/0009-0001-8646-1881", type: "academic" },
    { label: "Scopus", url: "https://www.scopus.com/authid/detail.uri?authorId=60265043700", type: "academic" },
    { label: "Web of Science", url: "https://www.webofscience.com/wos/author/record/PFQ-8088-2025", type: "academic" },
    { label: "ResearchGate", url: "https://www.researchgate.net/profile/Md-Razu-Ahmed-3", type: "academic" },
    { label: "Semantic Scholar", url: "https://www.semanticscholar.org/author/Md.-Razu-Ahmed/2309296098", type: "academic" },
    { label: "SciProfiles", url: "https://sciprofiles.com/profile/4128960", type: "academic" },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/beingrazuahmed/", type: "professional" },
    { label: "GitHub", url: "https://github.com/beingrazuahmed", type: "professional" },
    { label: "Kaggle", url: "https://www.kaggle.com/razuahmedpust", type: "professional" },
    { label: "Academia.edu", url: "https://pabna.academia.edu/MdRazuAhmed", type: "academic" },
    { label: "X", url: "https://x.com/beingrazuahmed", type: "social" },
    { label: "Instagram", url: "https://www.instagram.com/beingrazuahmed/", type: "social" },
    { label: "Facebook", url: "https://www.facebook.com/beingrazuahmed", type: "social" }
  ],

  privacy: {
    publicOnly: true,
    note: "This public portfolio intentionally excludes confidential manuscripts, private editorial correspondence, manuscript IDs, reviewer reports, phone numbers, and non-public research material."
  }
};
