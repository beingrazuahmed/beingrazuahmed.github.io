window.PORTFOLIO_DATA = {
  profile: {
    name: "Md. Razu Ahmed",
    roles: ["Statistician", "Data Scientist", "Researcher", "Peer Reviewer"],
    focus: "Machine Learning · Explainable AI · Public Health & Biomedical Data Science",
    intro: "I am Md. Razu Ahmed, a statistician, data scientist, researcher, and peer reviewer working at the intersection of statistical learning, artificial intelligence, public health, and biomedical data science. I develop rigorous, reproducible, and interpretable analytical workflows that connect statistical methodology with machine learning and deep learning to address real-world problems in health, medical imaging, infectious-disease forecasting, natural language processing, and intelligent food systems.",
    principle: "My research emphasizes methodological rigor, leakage-aware validation, explainability, reproducibility, and evidence that can support meaningful real-world decisions.",
    email: "razuahmed038@gmail.com",
    location: "Bangladesh",
    affiliation: "Deep Statistical Learning and Research (DSLR) Lab, Department of Statistics and Data Science, Pabna University of Science and Technology (PUST)",
    availability: "Selectively open to research collaboration, interdisciplinary projects, PhD opportunities, and academic partnerships."
  },
  metrics: [
    { label: "Published / Online", value: 3 },
    { label: "Accepted / Forthcoming", value: 1 },
    { label: "Conference Contributions", value: 8 },
    { label: "Public Dataset", value: 1 },
    { label: "Completed Peer Reviews", value: 32 }
  ],
  interests: {
    methods: ["Artificial Intelligence & Data Science", "Statistical Learning", "Machine Learning", "Deep Learning", "Explainable AI", "Multivariate & Multimodal Analysis", "Time-Series Modelling & Forecasting", "Causal Inference"],
    applications: ["Public Health Analytics", "Health Informatics", "Disease Prediction", "Medical Imaging", "Computer Vision", "Natural Language Processing", "Climate–Health Analytics", "Genomics & Bioinformatics", "Audio Signal Processing", "Food Computing"]
  },
  publications: [
    {
      id: "fastica",
      type: "Journal Article",
      status: "Published",
      year: 2026,
      role: "First Author",
      title: "Sophisticated Audio Source Separation: A Statistical Exploration of Clarity and Precision With FastICA",
      venue: "Engineering Reports",
      citation: "Engineering Reports, 8(1), e70575",
      doi: "https://doi.org/10.1002/eng2.70575",
      tags: ["FastICA", "Signal Processing", "Blind Source Separation"],
      summary: "A statistical evaluation of FastICA, PCA and NMF for conversational audio source separation, with FastICA achieving the strongest separation quality across repeated runs.",
      highlight: "FastICA achieved SDR 53.51 ± 0.07 dB and SIR 53.52 ± 0.07 dB."
    },
    {
      id: "ckd",
      type: "Journal Article",
      status: "Published",
      year: 2025,
      role: "First Author",
      title: "Identification of Predisposing Risk Factors for Chronic Kidney Disease and Optimizing Disease Prediction Using a Stacking Machine Learning Algorithm",
      venue: "International Journal of Statistical Sciences",
      citation: "International Journal of Statistical Sciences, 25(2), 1–32",
      doi: "https://doi.org/10.3329/ijss.v25i2.85732",
      tags: ["CKD", "Machine Learning", "Stacking", "Feature Selection"],
      summary: "A leakage-aware machine-learning workflow for CKD risk-factor identification and predictive modelling using feature-selection consensus and stacked learners.",
      highlight: "The proposed stacking approach reported 100% accuracy on the UCI CKD data and 96.7% on simulated validation data."
    },
    {
      id: "dib",
      type: "Journal Article",
      status: "Available Online · Journal Pre-proof",
      year: 2026,
      role: "Second Author",
      title: "PUST Cafeteria Food Image Dataset: Real-World Bangladeshi Meal-Platter Images with Bounding-Box and Polygon Annotations",
      venue: "Data in Brief",
      citation: "Data in Brief, Article 113262",
      doi: "https://doi.org/10.1016/j.dib.2026.113262",
      researchgate: "https://www.researchgate.net/publication/414270604_PUST_Cafeteria_Food_Image_Dataset_Real-World_Bangladeshi_Meal-Platter_Images_with_Bounding-Box_and_Polygon_Annotations",
      dataset: "https://doi.org/10.17632/fn6yhzjz83.2",
      tags: ["Food Computing", "Object Detection", "Instance Segmentation", "Dataset"],
      summary: "A real-world Bangladeshi cafeteria food-image resource with bounding-box and polygon annotations for object detection and instance segmentation.",
      highlight: "720 source photographs yielded 1,728 processed images with 6,297 annotated instances across 16 classes."
    },
    {
      id: "ai-employment",
      type: "Journal Article",
      status: "Accepted / Forthcoming",
      year: 2026,
      role: "First Author",
      title: "Perceptions of Artificial Intelligence and Its Implications for Employment in Bangladesh",
      venue: "International Journal of Statistical Sciences",
      citation: "Forthcoming in 26(2), November 2026",
      tags: ["AI Perception", "Employment", "PCA", "Correspondence Analysis"],
      summary: "A survey-based study of perceptions of AI and employment implications in Bangladesh using multivariate statistical methods.",
      highlight: "Accepted 2 September 2026; 370 respondents and a 33-item instrument."
    }
  ],
  manuscripts: [
    {
      id: "dr",
      status: "Submitted / Under Review",
      role: "First Author",
      title: "A Deep Learning and Handcrafted Feature Fusion Framework for Automated Diabetic Retinopathy Grading from Retinal Fundus Images",
      venue: "Measurement",
      tags: ["Medical Imaging", "Deep Learning", "Feature Fusion", "Explainable AI"],
      summary: "A five-stage leak-safe validation framework combining deep representations, handcrafted descriptors and explainable modelling for diabetic-retinopathy grading.",
      highlight: "Best held-out model: FT-DenseNet121 + SIFT-BoVW + XGBoost; accuracy 78.71%, OvR AUC 94.80%."
    },
    {
      id: "hcv",
      status: "Submitted / Under Review",
      role: "Second Author",
      title: "Comparative Evaluation of Hybrid MICE–Median Missing-Value Reconstruction and Downstream Hepatitis C Prediction Using Machine Learning",
      venue: "BMC Medical Informatics and Decision Making",
      tags: ["Missing Data", "HCV", "Machine Learning", "MICE"],
      summary: "A rigorous comparison of missing-data reconstruction strategies and their downstream impact on hepatitis-C prediction and severity estimation.",
      highlight: "Hybrid MICE–Median achieved the lowest standardized MAE across all tested missingness levels."
    },
    {
      id: "dengue-forecast",
      status: "Under Peer Review",
      role: "Second Author",
      title: "Nationwide Evaluation of District-Informed Bottom-Up and Direct National Approaches for One-Week-Ahead Forecasting of Dengue Hospital Admissions in Bangladesh",
      venue: "BMC Public Health",
      tags: ["Dengue", "Forecasting", "LightGBM", "Public Health"],
      summary: "A temporally locked nationwide comparison of district-informed bottom-up and direct national one-week-ahead dengue admission forecasts across all 64 districts of Bangladesh.",
      highlight: "Bottom-up LightGBM achieved held-out national wMAPE 12.10% and R² 0.9625 in 2025."
    },
    {
      id: "beyond-burden",
      status: "Submitted / Under Review",
      role: "Joint First Author · Co-corresponding Author",
      title: "Beyond Burden: Testing the Incremental Decision Value of Operational Readiness for Dengue Preparedness in Bangladesh",
      venue: "Scientific Reports",
      tags: ["Dengue Preparedness", "Operational Readiness", "Decision Emulation"],
      summary: "A nationwide code-locked retrospective decision-emulation study testing whether operational readiness adds actionable value to district prioritization beyond epidemiological and structural information.",
      highlight: "Held-out evaluation showed operational fragility altered some rankings but not the primary top-10 allocation."
    },
    {
      id: "food-billing",
      status: "Submitted / Under Review",
      role: "Third Author",
      title: "Real-Time Food Detection for Automated Cafeteria Billing Using RT-DETR and GAN-Based Data Augmentation",
      venue: "Discover Artificial Intelligence",
      tags: ["RT-DETR", "GAN", "Food Detection", "Automated Billing"],
      summary: "A real-time cafeteria billing framework benchmarking RT-DETR-L, YOLO and Faster R-CNN and evaluating Pix2Pix GAN augmentation.",
      highlight: "RT-DETR-L achieved 76.55% Exact Bill Accuracy with MAE 3.41 BDT on 145 untouched test platters."
    },
    {
      id: "sentiment",
      status: "Submitted / Under Review",
      role: "Fourth Author",
      title: "Adaptive Probability Fusion of Lightweight Recurrent Networks for Cross-Domain Sentiment Classification",
      venue: "Applied AI Letters",
      tags: ["NLP", "Sentiment Analysis", "RNN", "BiLSTM"],
      summary: "A lightweight cross-domain sentiment-classification framework using RNN and BiLSTM probability fusion across social-media and movie-review datasets.",
      highlight: "The ensemble reached 77.36% accuracy on Twitter Airline Sentiment; standalone BiLSTM reached 85% on IMDb."
    },
    {
      id: "academic-performance",
      status: "Submitted / Under Review",
      role: "Second Author",
      title: "Factors Associated with Undergraduates Academic Performance Among Public University Students: A Case Study",
      venue: "International Journal of Educational Reform",
      tags: ["Higher Education", "Ordinal Regression", "Student Engagement"],
      summary: "A cross-sectional analysis of academic performance, student engagement and rural–urban background among public-university students in Bangladesh.",
      highlight: "Academic reading ≥3 h/day was associated with higher CGPA categories (AOR 16.30, 95% CI 5.39–49.26)."
    }
  ],
  service: [
    { journal: "PLOS ONE", reviews: 25, since: "March 2026" },
    { journal: "Biomedical Signal Processing and Control", reviews: 6, since: "July 2026" },
    { journal: "Engineering Applications of Artificial Intelligence", reviews: 1, since: "September 2026" }
  ],
  education: [
    { degree: "M.S. in Statistics", institution: "Pabna University of Science and Technology", year: "Exam Year 2022 · Examination held 2025", detail: "CGPA 3.49/4.00 · Ranked 5th in project-based track" },
    { degree: "B.Sc. (Hons.) in Statistics", institution: "Pabna University of Science and Technology", year: "Exam Year 2021 · Examination held 2024", detail: "CGPA 2.87/4.00" }
  ],
  guidance: [
    "Dr. Md. Shamim Reza",
    "Dr. Sabba Ruhi",
    "Dr. Aminul Hoque",
    "Dr. Menhazul Abedin",
    "Dr. Md. Feroz Ali",
    "Dr. Md. Ashad Alam"
  ],
  collaborators: ["Ruhul Amin", "Jannatul Mauya", "Md. Abdur Rakib", "Muhammad Ziaul Haque", "Abu Bakar Shiddik", "Marufa Yeasmin", "Protiva Rani Kundu"],
  profiles: [
    { label: "Google Scholar", url: "https://scholar.google.com/citations?hl=en&user=70z0eXEAAAAJ" },
    { label: "ORCID", url: "https://orcid.org/0009-0001-8646-1881" },
    { label: "Scopus", url: "https://www.scopus.com/inward/authorDetails.url?authorID=60265043700" },
    { label: "Web of Science", url: "https://www.webofscience.com/wos/author/record/PFQ-8088-2025" },
    { label: "ResearchGate", url: "https://www.researchgate.net/profile/Md-Razu-Ahmed-3" },
    { label: "Semantic Scholar", url: "https://www.semanticscholar.org/author/Md.-Razu-Ahmed/2309296098" },
    { label: "SciProfiles", url: "https://sciprofiles.com/profile/4128960" },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/beingrazuahmed/" },
    { label: "GitHub", url: "https://github.com/beingrazuahmed" },
    { label: "Kaggle", url: "https://www.kaggle.com/razuahmedpust" },
    { label: "Academia.edu", url: "https://pabna.academia.edu/MdRazuAhmed" },
    { label: "X", url: "https://x.com/beingrazuahmed" },
    { label: "Instagram", url: "https://www.instagram.com/beingrazuahmed/" },
    { label: "Facebook", url: "https://www.facebook.com/beingrazuahmed" }
  ]
};
