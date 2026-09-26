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
    { label: "Completed Peer Reviews", value: 33, note: "Across 3 journals" }
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
      citationAPA: "Ahmed, M. R., Mauya, J., Reza, M. S., & Amin, R. (2026). Sophisticated audio source separation: A statistical exploration of clarity and precision with FastICA. Engineering Reports, 8(1), e70575. https://doi.org/10.1002/eng2.70575",
      citationIEEE: "M. R. Ahmed, J. Mauya, M. S. Reza, and R. Amin, “Sophisticated Audio Source Separation: A Statistical Exploration of Clarity and Precision With FastICA,” Engineering Reports, vol. 8, no. 1, Art. no. e70575, 2026, doi: 10.1002/eng2.70575.",
      doi: "https://doi.org/10.1002/eng2.70575",
      journalUrl: "https://onlinelibrary.wiley.com/journal/25778196",
      journalStanding: {
        publisher: "John Wiley & Sons, Ltd.",
        onlineIssn: "2577-8196",
        citeScore2025: "3.9",
        jif2025: "2.9",
        snip2025: "0.833",
        sjr2025: "0.470",
        hIndex: "39",
        jci2025: "0.14",
        quartile: "Q2",
        indexing: "Scopus · Web of Science Core Collection: Emerging Sources Citation Index (ESCI)"
      },
      tags: ["FastICA", "Signal Processing", "Blind Source Separation"],
      summary: "A statistical evaluation of FastICA, PCA and NMF for conversational audio source separation, with FastICA achieving the strongest separation quality across repeated runs.",
      highlight: "FastICA achieved SDR 53.51 ± 0.07 dB and SIR 53.52 ± 0.07 dB.",
      visual: "assets/publications/fastica/figure-1-workflow.tif"
    },
    {
      id: "ckd", type: "Journal Article", status: "Published", year: 2025, role: "First Author",
      title: "Identification of Predisposing Risk Factors for Chronic Kidney Disease and Optimizing Disease Prediction Using a Stacking Machine Learning Algorithm",
      venue: "International Journal of Statistical Sciences", citation: "International Journal of Statistical Sciences, 25(2), 1–32",
      citationAPA: "Ahmed, M. R., Rakib, M. A., Shiddik, A. B., & Reza, M. S. (2025). Identification of predisposing risk factors for chronic kidney disease and optimizing disease prediction using a stacking machine learning algorithm. International Journal of Statistical Sciences, 25(2), 1–32. https://doi.org/10.3329/ijss.v25i2.85732",
      citationIEEE: "M. R. Ahmed, M. A. Rakib, A. B. Shiddik, and M. S. Reza, “Identification of Predisposing Risk Factors for Chronic Kidney Disease and Optimizing Disease Prediction Using a Stacking Machine Learning Algorithm,” International Journal of Statistical Sciences, vol. 25, no. 2, pp. 1–32, 2025, doi: 10.3329/ijss.v25i2.85732.",
      doi: "https://doi.org/10.3329/ijss.v25i2.85732",
      indexingDiscovery: [
        "ICI World of Journals · ICV indicator 2024: 68.51",
        "Eurasian Scientific Journal Index (ESJI)",
        "Statistical Theory and Method Abstract, International Statistical Institute",
        "Bangladesh Journals Online (BanglaJOL)",
        "Bangladesh National Scientific and Technical Documentation Centre (BANSDOC)"
      ],
      tags: ["CKD", "Machine Learning", "Stacking", "Feature Selection"],
      summary: "A leakage-aware machine-learning workflow for CKD risk-factor identification and predictive modelling using feature-selection consensus and stacked learners.",
      highlight: "The proposed stacking approach reported 100% accuracy on the UCI CKD data and 96.7% on simulated validation data.",
      visual: "assets/publications/ckd/feature-importance.png"
    },
    {
      id: "dib", type: "Journal Article", status: "Published", year: 2026, role: "Second Author",
      title: "PUST Cafeteria Food Image Dataset: Real-World Bangladeshi Meal-Platter Images with Bounding-Box and Polygon Annotations",
      venue: "Data in Brief", citation: "Data in Brief, Volume 69, 2026, Article 113262",
      citationAPA: "Yeasmin, M., Ahmed, M. R., Kundu, P. R., Mauya, J., & Reza, M. S. (2026). PUST cafeteria food image dataset: Real-world Bangladeshi meal-platter images with bounding-box and polygon annotations. Data in Brief, 69, 113262. https://doi.org/10.1016/j.dib.2026.113262",
      citationIEEE: "M. Yeasmin, M. R. Ahmed, P. R. Kundu, J. Mauya, and M. S. Reza, “PUST Cafeteria Food Image Dataset: Real-World Bangladeshi Meal-Platter Images with Bounding-Box and Polygon Annotations,” Data in Brief, vol. 69, Art. no. 113262, 2026, doi: 10.1016/j.dib.2026.113262.",
      authors: "Marufa Yeasmin, Md. Razu Ahmed, Protiva Rani Kundu, Jannatul Mauya, Md. Shamim Reza",
      volume: "69",
      articleNumber: "113262",
      issn: "2352-3409",
      doi: "https://doi.org/10.1016/j.dib.2026.113262",
      sciencedirect: "https://www.sciencedirect.com/science/article/pii/S2352340926008097",
      researchgate: "https://www.researchgate.net/publication/414270604_PUST_Cafeteria_Food_Image_Dataset_Real-World_Bangladeshi_Meal-Platter_Images_with_Bounding-Box_and_Polygon_Annotations",
      googleScholar: "https://scholar.google.com/scholar?hl=en&as_sdt=0%2C5&q=PUST+Cafeteria+Food+Image+Dataset%3A+Real-World+Bangladeshi+Meal-Platter+Images+with+Bounding-Box+and+Polygon+Annotations&btnG=",
      dataset: "https://doi.org/10.17632/fn6yhzjz83.2",
      semanticScholar: "https://www.semanticscholar.org/paper/PUST-Cafeteria-Food-Image-Dataset%3A-Real-World-with-Yeasmin-Ahmed/07a90c12567b3985f246f7ef158068e447818609",
      journalStanding: {
        publisher: "Elsevier",
        onlineIssn: "2352-3409",
        citeScore2025: "3.4",
        jif2025: "1.9",
        snip2025: "1.219",
        sjr2025: "0.606",
        hIndex: "69",
        jci2025: "0.38",
        quartile: "Q1",
        indexing: "Scopus · Web of Science Core Collection: Emerging Sources Citation Index (ESCI)"
      },
      tags: ["Bangladeshi Food", "Food Image Dataset", "Object Detection", "Instance Segmentation", "YOLO Annotations", "COCO Annotations"],
      summary: "A real-world Bangladeshi cafeteria food-image resource with bounding-box and polygon annotations for object detection and instance segmentation.",
      highlight: "720 source photographs yielded 1,728 processed images with 6,297 annotated instances across 16 classes.",
      visual: "assets/publications/data-in-brief/figure-5-annotations.png"
    },
    {
      id: "ai-employment", type: "Journal Article", status: "Accepted / Forthcoming", year: 2026, role: "First Author",
      title: "Perceptions of Artificial Intelligence and Its Implications for Employment in Bangladesh",
      venue: "International Journal of Statistical Sciences", citation: "Forthcoming in 26(2), November 2026",
      indexingDiscovery: [
        "ICI World of Journals · ICV indicator 2024: 68.51",
        "Eurasian Scientific Journal Index (ESJI)",
        "Statistical Theory and Method Abstract, International Statistical Institute",
        "Bangladesh Journals Online (BanglaJOL)",
        "Bangladesh National Scientific and Technical Documentation Centre (BANSDOC)"
      ],
      tags: ["AI Perception", "Employment", "PCA", "Correspondence Analysis"],
      summary: "A survey-based study of perceptions of AI and employment implications in Bangladesh using multivariate statistical methods.",
      highlight: "Accepted 2 September 2026; 370 respondents and a 33-item instrument.",
      visual: "assets/publications/ai-employment/methodology.png"
    }
  ],

  datasets: [
    {
      id: "pust-cafeteria-dataset",
      type: "Dataset",
      status: "Published",
      year: 2026,
      role: "Second Contributor",
      title: "PUST Cafeteria Food Image Dataset: Real-World Bangladeshi Meal-Platter Images with Bounding-Box and Polygon Annotations",
      repository: "Mendeley Data",
      venue: "Mendeley Data",
      version: "2",
      publishedDate: "28 August 2026",
      doi: "https://doi.org/10.17632/fn6yhzjz83.2",
      license: "CC BY 4.0",
      institution: "Pabna University of Science and Technology",
      contributors: "Marufa Yeasmin, Md. Razu Ahmed, Protiva Rani Kundu, Jannatul Mauya, Md. Shamim Reza",
      citationAPA: "Yeasmin, M., Ahmed, M. R., Kundu, P. R., Mauya, J., & Reza, M. S. (2026). PUST Cafeteria Food Image Dataset: Real-World Bangladeshi Meal-Platter Images with Bounding-Box and Polygon Annotations (Version 2) [Data set]. Mendeley Data. https://doi.org/10.17632/fn6yhzjz83.2",
      citationIEEE: "M. Yeasmin, M. R. Ahmed, P. R. Kundu, J. Mauya, and M. S. Reza, “PUST Cafeteria Food Image Dataset: Real-World Bangladeshi Meal-Platter Images with Bounding-Box and Polygon Annotations,” Mendeley Data, ver. 2, 2026, doi: 10.17632/fn6yhzjz83.2.",
      relatedArticle: "https://doi.org/10.1016/j.dib.2026.113262",
      originalImages: 720,
      processedImages: 1728,
      annotatedInstances: 6297,
      classes: 16,
      split: "1,512 train · 108 validation · 108 test",
      annotationFormats: ["YOLO detection TXT", "YOLO segmentation TXT", "COCO JSON"],
      imageSize: "640 × 640",
      collectionPeriod: "1 August–5 September 2025",
      devices: "Realme GT Master Edition · OPPO A92",
      summary: "A public real-world Bangladeshi cafeteria food-image dataset for food recognition, object detection and instance segmentation, released with bounding-box and polygon annotations.",
      tags: ["Mendeley Data", "Open Dataset", "Food Computing", "Object Detection", "Instance Segmentation", "YOLO", "COCO"]
    }
  ],

  manuscripts: [
    {
      id: "dr", status: "With Editor", role: "First Author",
      title: "A Deep Learning and Handcrafted Feature Fusion Framework for Automated Diabetic Retinopathy Grading from Retinal Fundus Images",
      venue: "Measurement", publisher: "Elsevier", tags: ["Medical Imaging", "Deep Learning", "Feature Fusion", "Explainable AI"],
      summary: "A five-stage leak-safe validation framework combining deep representations, handcrafted descriptors and explainable modelling for diabetic-retinopathy grading.",
      highlight: "Best held-out model: FT-DenseNet121 + SIFT-BoVW + XGBoost; accuracy 78.71%, OvR AUC 94.80%.",
      visual: "assets/manuscripts/dr-grading/workflow.png"
    },
    {
      id: "hcv", status: "Under Review", role: "Second Author",
      title: "Comparative Evaluation of Hybrid MICE–Median Missing-Value Reconstruction and Downstream Hepatitis C Prediction Using Machine Learning",
      venue: "BMC Medical Informatics and Decision Making", publisher: "BMC · Springer Nature", tags: ["Missing Data", "HCV", "Machine Learning", "MICE"],
      summary: "A rigorous comparison of missing-data reconstruction strategies and their downstream impact on hepatitis-C prediction and severity estimation.",
      highlight: "Hybrid MICE–Median achieved the lowest standardized MAE across all tested missingness levels.",
      visual: "assets/manuscripts/hcv/methodology.png"
    },
    {
      id: "dengue-forecast", status: "Under Review", role: "Second Author",
      title: "Nationwide Evaluation of District-Informed Bottom-Up and Direct National Approaches for One-Week-Ahead Forecasting of Dengue Hospital Admissions in Bangladesh",
      venue: "BMC Public Health", publisher: "BMC · Springer Nature", tags: ["Dengue", "Forecasting", "LightGBM", "Public Health"],
      summary: "A temporally locked nationwide comparison of district-informed bottom-up and direct national one-week-ahead dengue admission forecasts across all 64 districts of Bangladesh.",
      highlight: "Bottom-up LightGBM achieved held-out national wMAPE 12.10% and R² 0.9625 in 2025.",
      visual: "assets/manuscripts/dengue-forecasting/workflow.png"
    },
    {
      id: "beyond-burden", status: "Under Review", role: "Joint First Author · Co-corresponding Author",
      title: "Beyond Burden: Testing the Incremental Decision Value of Operational Readiness for Dengue Preparedness in Bangladesh",
      venue: "Scientific Reports", publisher: "Nature Portfolio · Springer Nature", tags: ["Dengue Preparedness", "Operational Readiness", "Decision Emulation"],
      summary: "A nationwide code-locked retrospective decision-emulation study testing whether operational readiness adds actionable value to district prioritization beyond epidemiological and structural information.",
      highlight: "Held-out evaluation showed operational fragility altered some rankings but not the primary top-10 allocation.",
      visual: "assets/manuscripts/beyond-burden/workflow.png"
    },
    {
      id: "food-billing", status: "Under Review", role: "Third Author",
      title: "Real-Time Food Detection for Automated Cafeteria Billing Using RT-DETR and GAN-Based Data Augmentation",
      venue: "Discover Artificial Intelligence", publisher: "Springer Nature", tags: ["RT-DETR", "GAN", "Food Detection", "Automated Billing"],
      summary: "A real-time cafeteria billing framework benchmarking RT-DETR-L, YOLO and Faster R-CNN and evaluating Pix2Pix GAN augmentation.",
      highlight: "RT-DETR-L achieved 76.55% Exact Bill Accuracy with MAE 3.41 BDT on 145 untouched test platters.",
      visual: "assets/manuscripts/cafeteria-billing/workflow.png"
    },
    {
      id: "sentiment", status: "Under Revision", role: "Fourth Author",
      title: "Adaptive Probability Fusion of Lightweight Recurrent Networks for Cross-Domain Sentiment Classification",
      venue: "Applied AI Letters", publisher: "Wiley", tags: ["NLP", "Sentiment Analysis", "RNN", "BiLSTM"],
      summary: "A lightweight cross-domain sentiment-classification framework using RNN and BiLSTM probability fusion across social-media and movie-review datasets.",
      highlight: "The ensemble reached 77.36% accuracy on Twitter Airline Sentiment; standalone BiLSTM reached 85% on IMDb.",
      visual: "assets/manuscripts/sentiment/workflow.png"
    },
    {
      id: "academic-performance", status: "Awaiting Admin Processing", role: "Second Author",
      title: "Factors Associated with Undergraduates Academic Performance Among Public University Students: A Case Study",
      venue: "International Journal of Educational Reform", publisher: "SAGE", tags: ["Higher Education", "Ordinal Regression", "Student Engagement"],
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
        { paperId: "108", title: "Automated Five-Stage Diabetic Retinopathy Grading Using a Leak-Safe and Explainable Deep-Handcrafted Fusion Framework", authors: "Md. Razu Ahmed, Jannatul Mauya, Md. Shamim Reza", page: "p. 173", role: "Oral Presentation · Presenting Author", evidence: [{ type:"Certificate", label:"Oral Presentation Certificate", asset:"assets/academic/conferences/efast-2026-paper-108-oral-presentation-certificate.jpg", href:"assets/academic/conferences/efast-2026-paper-108-oral-presentation-certificate.jpg", note:"Md. Razu Ahmed · Presenting Author · Paper ID 108 · EFAST 2026", galleryHref:"gallery.html#efast-2026-paper-108-oral-certificate", verified:true, sourceFile:"EFAST 2026 (Paper ID-108) Certificate(1).jpg" }] },
        { title: "A Multi-Scale Attention-Based Dense Residual Network for Sugarcane Leaf Disease Detection Using BSRI Data", authors: "Jannatul Mauya, Md. Razu Ahmed, Sabba Ruhi, Md. Shamim Reza", page: "p. 172", role: "Co-author" },
        { title: "Comparative Analysis of Missing Value Imputation Methods with a Hybrid Approach for HCV Prediction Using Machine Learning", authors: "Farzana Mehedi Moly, Md. Razu Ahmed, Jannatul Mauya, Md. Shamim Reza", page: "p. 174", role: "Co-author" },
        { title: "Socioeconomic Determinants of Cesarean Section Delivery in Bangladesh: A Survey-Weighted Statistical and Explainable Machine Learning Analysis", authors: "Md. Obaidul Islam, Md. Razu Ahmed, Sabba Ruhi", page: "p. 298", role: "Co-author · Public conference contribution" }
      ]
    },
    {
      id: "icasds-2025", event: "ICASDS 2025", full: "International Conference on Applied Statistics and Data Science 2025",
      host: "ISRT (now IASDS), University of Dhaka, Bangladesh", date: "28–29 December 2025", meta: "Programme and Abstract Book",
      papers: [
        { paperId: "341", title: "A Deep Learning and Handcrafted Feature Fusion Framework for Automated Diabetic Retinopathy Grading from Retinal Fundus Images", authors: "Md. Razu Ahmed, Md. Shamim Reza", page: "p. 200", role: "Poster Presentation · Presenting Author · JSR Award", evidence: [{ type:"Certificate", label:"Poster Presentation Certificate", asset:"assets/gallery/icasds-2025-poster-presentation-certificate.webp", href:"assets/academic/conferences/icasds-2025-poster-presentation-certificate.pdf", note:"Md. Razu Ahmed · Presenting Author · Paper ID 341 · Certificate ID ICASDS-253412", galleryHref:"gallery.html#icasds-2025-poster-presentation-certificate", format:"PDF", verified:true, sourceFile:"341(1).pdf" }, { type:"Award Certificate", label:"JSR Poster Competition Award Certificate", asset:"assets/gallery/icasds-2025-jsr-poster-award-certificate.webp", href:"assets/recognition/jsr-award-icasds-2025.pdf", note:"Md. Razu Ahmed · Paper ID 341 · Certificate ID ICASDS-253411", galleryHref:"gallery.html#icasds-2025-jsr-award-certificate", format:"PDF", verified:true, sourceFile:"ICASDS-253411(1).pdf" }] },
        { title: "Predisposing Factor Identification and Multi-Class Grading of Diabetes Mellitus Using Machine Learning", authors: "Mimosa Saha, Md. Razu Ahmed, Md. Shamim Reza", page: "p. 199", role: "Co-author" }
      ]
    },
    {
      id: "icrast-2025", event: "ICRAST 2025", full: "2nd International Conference on Recent Advances in Science and Technology 2025",
      host: "Faculty of Science, University of Rajshahi, Bangladesh", organizer: "Faculty of Science, University of Rajshahi",
      venue: "University of Rajshahi, Rajshahi, Bangladesh", date: "14–15 November 2025", meta: "Book of Abstracts",
      url: "https://csa.ru.ac.bd/science/conf2nd/", flyerUrl: "https://www.ru.ac.bd/wp-content/uploads/2025/08/CFP.pdf", flyerLabel: "Official call for papers / conference flyer",
      papers: [
        {
          paperId: "440",
          title: "Measuring Attitudes toward AI’s Impact on the Job Market in Bangladesh: A Study at Pabna University of Science and Technology",
          authors: "Md. Razu Ahmed, Md. Abdur Rakib, Abu Bakar Shiddik, Md. Shamim Reza",
          page: "p. 120", presentation: "Oral Presentation", role: "Presenting Author", presentedBy: "Md. Razu Ahmed",
          citation: "Ahmed, M. R., Rakib, M. A., Shiddik, A. B., & Reza, M. S. (2025). Measuring attitudes toward AI’s impact on the job market in Bangladesh: A study at Pabna University of Science and Technology. In Book of Abstracts, 2nd International Conference on Recent Advances in Science and Technology (ICRAST 2025) (p. 120). Faculty of Science, University of Rajshahi.",
          citationIEEE: "M. R. Ahmed, M. A. Rakib, A. B. Shiddik, and M. S. Reza, “Measuring Attitudes toward AI’s Impact on the Job Market in Bangladesh: A Study at Pabna University of Science and Technology,” in Book of Abstracts, 2nd International Conference on Recent Advances in Science and Technology (ICRAST 2025), Rajshahi, Bangladesh, Nov. 14–15, 2025, p. 120.",
          evidence: [
            { type:"Certificate", label:"Oral Presentation Certificate of Achievement", asset:"assets/academic/conferences/icrast-2025-paper-440-certificate.jpeg", href:"assets/academic/conferences/icrast-2025-paper-440-certificate.jpeg", note:"Presenting Author · Md. Razu Ahmed · Paper ID 440 · ICRAST 2025", galleryHref:"gallery.html#icrast-440-certificate-gallery", verified:true, sourceFile:"ICRAST Paper ID-440 Certificate(2).jpeg" },
            { type:"Proceedings", label:"Book of Abstracts · Paper 440", href:"assets/academic/conferences/icrast-2025-documents/icrast-2025-paper-440-proceedings.pdf", note:"Paper ID 440 · p. 120 · Book of Abstracts", format:"PDF", sourceFile:"Paper ID 440 proceedings icrast.pdf" },
            { type:"Slides", label:"Presentation deck · Paper 440", href:"assets/academic/conferences/icrast-2025-documents/icrast-2025-paper-440-presentation.pdf", note:"Paper ID 440 · Md. Razu Ahmed (presenting) · 14 November 2025", format:"PDF", sourceFile:"Paper ID 440 - ICRAST 2025 slide.pdf" },
            { type:"Brochure", label:"Conference brochure", asset:"assets/academic/conferences/icrast-2025-brochure.jpg", href:"assets/academic/conferences/icrast-2025-brochure.jpg", officialHref:"https://www.ru.ac.bd/wp-content/uploads/2025/08/CFP.pdf", note:"2nd ICRAST 2025 · Faculty of Science, University of Rajshahi", sourceFile:"icrast brocher.jpg" }
          ]
        },
        {
          paperId: "461",
          title: "Facial Emotion Recognition with Dimensionality Reduction: A Comparative Study of PCA, FA, and Combined PCA–FA with a CNN Baseline",
          authors: "Md. Abdur Rakib, Md. Razu Ahmed, Abu Bakar Shiddik, Md. Shamim Reza",
          page: "p. 126", presentation: "Oral Presentation", role: "Co-author", presentedBy: "Md. Abdur Rakib",
          citation: "Rakib, M. A., Ahmed, M. R., Shiddik, A. B., & Reza, M. S. (2025). Facial emotion recognition with dimensionality reduction: A comparative study of PCA, FA, and combined PCA–FA with a CNN baseline. In Book of Abstracts, 2nd International Conference on Recent Advances in Science and Technology (ICRAST 2025) (p. 126). Faculty of Science, University of Rajshahi.",
          citationIEEE: "M. A. Rakib, M. R. Ahmed, A. B. Shiddik, and M. S. Reza, “Facial Emotion Recognition with Dimensionality Reduction: A Comparative Study of PCA, FA, and Combined PCA–FA with a CNN Baseline,” in Book of Abstracts, 2nd International Conference on Recent Advances in Science and Technology (ICRAST 2025), Rajshahi, Bangladesh, Nov. 14–15, 2025, p. 126.",
          evidence: [
            { type:"Proceedings", label:"Book of Abstracts · Paper 461", href:"assets/academic/conferences/icrast-2025-documents/icrast-2025-paper-461-proceedings.pdf", note:"Paper ID 461 · p. 126 · Separate co-authored contribution", format:"PDF", sourceFile:"Paper ID 461 proceedings icrast.pdf" }
          ]
        }
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
      asset: "assets/recognition/jsr-award-icasds-2025.pdf",
      evidenceAsset: "assets/gallery/icasds-2025-jsr-poster-award-certificate.webp",
      evidenceHref: "gallery.html#icasds-2025-jsr-award-certificate",
      evidenceLabel: "Official award certificate"
    },
    {
      title: "Certificate of Excellence — International Agri-art Festival 2020",
      date: "October 2020",
      issuer: "Rajshahi University Agricultural Club (RUAC)",
      detail: "Awarded for serving as Campus Ambassador of Pabna University of Science and Technology during the International Agri-art Festival 2020, held 11–17 October 2020.",
      evidenceAsset: "assets/gallery/ruac-certificate-of-excellence-2020.webp",
      evidenceHref: "gallery.html#ruac-certificate-of-excellence-2020",
      evidenceLabel: "Certificate of Excellence"
    },
    {
      title: "PUST Department of Statistics — Farewell 2024 Crest",
      date: "2024",
      issuer: "Department of Statistics, Pabna University of Science and Technology",
      detail: "Farewell crest presented to Md. Razu Ahmed (Session 2017–18) marking completion of graduation.",
      evidenceAsset: "assets/gallery/graduation-farewell-crest-2024.webp",
      evidenceHref: "gallery.html#graduation-farewell-crest-2024",
      evidenceLabel: "Farewell crest"
    },
    {
      title: "HSC 2016 — Outstanding Result Medal",
      date: "2016",
      issuer: "BSB Cambrian Education Group",
      detail: "Medal recognizing an outstanding result in the HSC 2016 examination.",
      evidenceAsset: "assets/gallery/hsc-outstanding-result-medal-2016.webp",
      evidenceHref: "gallery.html#hsc-outstanding-result-medal-2016",
      evidenceLabel: "Outstanding-result medal"
    },
    {
      title: "Rajshahi College — Class XI GPA 5 Recognition",
      date: "2015",
      issuer: "Rajshahi College, Rajshahi",
      detail: "Recognition crest for achieving GPA 5 in the Class XI Annual Examination 2015.",
      evidenceAsset: "assets/gallery/rajshahi-college-class-xi-gpa5-crest-2015.webp",
      evidenceHref: "gallery.html#rajshahi-college-class-xi-gpa5-crest-2015",
      evidenceLabel: "Academic recognition crest"
    },
    {
      title: "SSC Examination 2014 — GPA 5 Recognition Crest",
      date: "2014",
      issuer: "School academic recognition",
      detail: "Crest recognizing GPA 5 in the SSC Examination 2014.",
      evidenceAsset: "assets/gallery/ssc-gpa5-crest-2014.webp",
      evidenceHref: "gallery.html#ssc-gpa5-crest-2014",
      evidenceLabel: "Academic recognition crest"
    },
    {
      title: "JSC Examination 2011 — GPA 5 Recognition Crest",
      date: "2011",
      issuer: "School academic recognition",
      detail: "Crest recognizing GPA 5 in the JSC Examination 2011.",
      evidenceAsset: "assets/gallery/jsc-gpa5-crest-2011.webp",
      evidenceHref: "gallery.html#jsc-gpa5-crest-2011",
      evidenceLabel: "Academic recognition crest"
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
    { group: "Research Methods & Scholarly Practice", title: "Research Data Management", provider: "Researcher Academy, Elsevier", date: "13 August 2026", duration: "4 h 55 min", evidenceAsset: "assets/gallery/elsevier-research-data-management-certificate-2026.webp", evidenceHref: "gallery.html#elsevier-research-data-management-2026", evidenceLabel: "Certificate · PDF" },
    { group: "Research Methods & Scholarly Practice", title: "Research Design", provider: "Researcher Academy, Elsevier", date: "13 August 2026", duration: "3 h 50 min", evidenceAsset: "assets/gallery/elsevier-research-design-certificate-2026.webp", evidenceHref: "gallery.html#elsevier-research-design-2026", evidenceLabel: "Certificate · PDF" },
    { group: "Research Methods & Scholarly Practice", title: "Research Integrity: Publication Ethics", provider: "Nature Masterclasses", date: "12 August 2026", duration: "8 h", evidenceAsset: "assets/gallery/nature-publication-ethics-certificate-2026.webp", evidenceHref: "gallery.html#nature-publication-ethics-2026", evidenceLabel: "Certificate · PDF" },
    { group: "Research Methods & Scholarly Practice", title: "Focus on Peer Review", provider: "Nature Masterclasses", date: "12 August 2026", duration: "3.5 h", evidenceAsset: "assets/gallery/nature-focus-on-peer-review-certificate-2026.webp", evidenceHref: "gallery.html#nature-focus-on-peer-review-2026", evidenceLabel: "Certificate · PDF" },
    { group: "Methodological Workshop", title: "Causal Inference for Observational Data Analysis", provider: "ICASDS 2025 Pre-Conference Workshop · Institute of Statistical Research and Training (ISRT), University of Dhaka", date: "27 December 2025", duration: "Workshop", evidenceAsset: "assets/gallery/icasds-workshop-causal-inference-certificate.webp", evidenceHref: "gallery.html#icasds-workshop-causal-inference-certificate", evidenceLabel: "Workshop certificate" },
    { group: "Methodological Workshop", title: "From Business Challenge to Deployment: An Industry-Standard Framework for Applied Machine Learning Projects", provider: "ICASDS 2025 Pre-Conference Workshop · Institute of Statistical Research and Training (ISRT), University of Dhaka", date: "27 December 2025", duration: "Workshop", evidenceAsset: "assets/gallery/icasds-workshop-applied-machine-learning-certificate.webp", evidenceHref: "gallery.html#icasds-workshop-applied-machine-learning-certificate", evidenceLabel: "Workshop certificate" },
    { group: "Professional Training", title: "IT Support Service", provider: "SICIP · Pabna Technical Training Center · Directorate of Technical Education", date: "4 May–4 September 2025", duration: "360 h · Certificate issued 15 July 2026", evidenceAsset: "assets/gallery/sicip-it-support-service-certificate-2026.webp", evidenceHref: "gallery.html#sicip-it-support-service-2026", evidenceLabel: "2-page certificate · PDF" },
    { group: "Professional Training", title: "Computer Office Application — Trade 076", provider: "Bangladesh Technical Education Board (BTEB), Dhaka · Path Finder Computer Training Institute, Pabna", date: "2020–2021", duration: "360 h · Grade A+", evidenceAsset: "assets/gallery/bteb-computer-office-application-certificate.webp", evidenceHref: "gallery.html#bteb-computer-office-application-certificate", evidenceLabel: "BTEB training certificate" },
    { group: "Applied Learning", title: "Build a Data Science Web App with Streamlit and Python", provider: "Coursera Project Network · Coursera", date: "18 May 2023", duration: "Project course", evidenceAsset: "assets/gallery/coursera-streamlit-project-certificate-2023.webp", evidenceHref: "gallery.html#coursera-streamlit-project-2023", evidenceLabel: "Verified Coursera project certificate" },
    { group: "Applied Learning", title: "AI for Everyone", provider: "DeepLearning.AI · Coursera", date: "13 July 2020", duration: "Course", evidenceAsset: "assets/gallery/coursera-ai-for-everyone-certificate-2020.webp", evidenceHref: "gallery.html#coursera-ai-for-everyone-2020", evidenceLabel: "Verified Coursera course certificate" }
  ],

  engagements: [
    { title: "Public University Student's Association of Rajshahi (PUSAR)", role: "Member", date: "", venue: "Rajshahi, Bangladesh", evidenceHref: "gallery.html#pusar-crest-2024", evidenceLabel: "PUSAR crest" },
    { title: "10 Minute School", role: "Affiliate Partner", date: "December 2020–Present", venue: "10 Minute School", evidenceAsset: "assets/gallery/10-minute-school-affiliate-partner-evidence.jpg", evidenceHref: "gallery.html#10-minute-school-affiliate-evidence", evidenceLabel: "Affiliate Partner evidence" },
    { title: "Sikho", role: "Affiliate Partner", date: "May 2022–Present", venue: "" },
    { title: "Hult Prize 2024–2025 OnCampus Program", role: "Competitor · CEO & Team Leader, Stat4Change", date: "27 June 2025", venue: "Pabna University of Science and Technology", evidenceAsset: "assets/gallery/hult-prize-2024-2025-oncampus-competitor-certificate.webp", evidenceHref: "gallery.html#hult-prize-oncampus-competitor-2025", evidenceLabel: "Competitor certificate · PDF" },
    { title: "Public Discussion: Global Nuclear Energy: Facts and Myths", role: "Participant", date: "31 October 2024", venue: "Gallery 2, PUST · Energy of the Future Information Centre · ASE ROSATOM", evidenceAsset: "assets/gallery/global-nuclear-energy-certificate.webp", evidenceHref: "gallery.html#global-nuclear-energy-2024-certificate", evidenceLabel: "Participation certificate" },
    { title: "International Agri-Art Festival 2020", role: "Campus Ambassador · Certificate of Excellence", date: "11–17 October 2020", venue: "Rajshahi University Agricultural Club (RUAC)", evidenceAsset: "assets/gallery/ruac-international-agri-art-festival-2020-evidence.jpg", evidenceHref: "gallery.html#ruac-agri-art-ambassador-evidence", evidenceLabel: "Campus Ambassador evidence" },
    { title: "5th Dutch-Bangla Bank Bangladesh Physics Olympiad 2015", role: "Divisional-Round Participant · Category C", date: "2015", venue: "Represented Rajshahi College", evidenceAsset: "assets/gallery/bangladesh-physics-olympiad-2015-certificate.webp", evidenceHref: "gallery.html#bangladesh-physics-olympiad-2015-certificate", evidenceLabel: "Certificate of Participation" }
  ],

  service: [
    { journal: "PLOS ONE", reviews: 25, since: "March 2026", recognition: "Completed invited reviews" },
    { journal: "Biomedical Signal Processing and Control", reviews: 7, since: "July 2026", recognition: "Certificates of Reviewing received" },
    { journal: "Engineering Applications of Artificial Intelligence", reviews: 1, since: "September 2026", recognition: "Certificate of Reviewing received", evidenceAsset: "assets/gallery/eaai-reviewing-certificate-2026.webp", evidenceHref: "gallery.html#eaai-reviewing-certificate-2026", evidenceLabel: "Certificate of Reviewing · PDF" }
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
    { id: "bspc-reviewing-certificate-2026", title: "Biomedical Signal Processing and Control — Certificate of Reviewing", category: "Scholarly Service", evidenceType: "Certificate", date: "July–September 2026", issuer: "Biomedical Signal Processing and Control · Elsevier", caption: "Certificate recognizing seven reviews contributed between July and September 2026.", asset: "assets/gallery/bspc-reviewing-certificate-2026.jpg", href: "assets/gallery/bspc-reviewing-certificate-2026.jpg", related: "experience.html", verified: true, sourceFile: "Certificate_BSPC_Recognised.pdf" },
    { id: "coursera-streamlit-project-2023", title: "Build a Data Science Web App with Streamlit and Python — Project Certificate", category: "Professional Development", evidenceType: "Certificate", date: "18 May 2023", issuer: "Coursera Project Network · Coursera", caption: "Verified project certificate for successful completion of Build a Data Science Web App with Streamlit and Python.", asset: "assets/gallery/coursera-streamlit-project-certificate-2023.webp", href: "https://coursera.org/verify/BT6C5NCVCJLU", related: "recognition.html", verified: true, sourceFile: "Coursera BT6C5NCVCJLU.pdf" },
    { id: "coursera-ai-for-everyone-2020", title: "AI for Everyone — Course Certificate", category: "Professional Development", evidenceType: "Certificate", date: "13 July 2020", issuer: "DeepLearning.AI · Coursera", caption: "Verified course certificate for successful completion of AI for Everyone.", asset: "assets/gallery/coursera-ai-for-everyone-certificate-2020.webp", href: "https://coursera.org/verify/XAYR2VSVL26D", related: "recognition.html", verified: true, sourceFile: "Coursera XAYR2VSVL26D.pdf" },
    { id: "pusar-crest-2024", title: "PUSAR — Reception 2024 Crest", category: "Leadership & Engagement", evidenceType: "Recognition", date: "2024", issuer: "Public University Student's Association of Rajshahi (PUSAR)", caption: "Crest from PUSAR's 2024 reception programme, linked to the extracurricular membership record.", asset: "", href: "", related: "profile.html", verified: true, sourceFile: "PUSAR Crest.jpg" },
    { id: "graduation-farewell-crest-2024", title: "PUST Department of Statistics — Farewell 2024 Crest", category: "Award", evidenceType: "Recognition", date: "2024", issuer: "Department of Statistics, Pabna University of Science and Technology", caption: "Farewell crest presented to Md. Razu Ahmed, Session 2017–18, marking completion of graduation.", asset: "", href: "", related: "recognition.html", verified: true, sourceFile: "Farewell Crest for completing Graduation - 2024.jpeg" },
    { id: "hsc-outstanding-result-medal-2016", title: "HSC 2016 — Outstanding Result Medal", category: "Award", evidenceType: "Recognition", date: "2016", issuer: "BSB Cambrian Education Group", caption: "Medal recognizing an outstanding result in HSC 2016.", asset: "", href: "", related: "recognition.html", verified: true, sourceFile: "Medel for Outstanding Result in HSC by BSB Cambrian Education Group in 2016.png" },
    { id: "rajshahi-college-class-xi-gpa5-crest-2015", title: "Rajshahi College — Class XI GPA 5 Recognition", category: "Award", evidenceType: "Recognition", date: "2015", issuer: "Rajshahi College, Rajshahi", caption: "Crest congratulating Md. Razu Ahmed for achieving GPA 5 in the Class XI Annual Examination 2015.", asset: "", href: "", related: "recognition.html", verified: true, sourceFile: "Crest for Outstanding Result (GPA-5) in Rajshahi College in class XI Examination - 2015.jpeg" },
    { id: "ssc-gpa5-crest-2014", title: "SSC Examination 2014 — GPA 5 Recognition Crest", category: "Award", evidenceType: "Recognition", date: "2014", issuer: "School academic recognition", caption: "Crest recognizing GPA 5 in the SSC Examination 2014.", asset: "", href: "", related: "recognition.html", verified: true, sourceFile: "Crest for Outstanding Result (GPA-5) in SSC Examination - 2014.jpeg" },
    { id: "jsc-gpa5-crest-2011", title: "JSC Examination 2011 — GPA 5 Recognition Crest", category: "Award", evidenceType: "Recognition", date: "2011", issuer: "School academic recognition", caption: "Crest recognizing GPA 5 in the JSC Examination 2011.", asset: "", href: "", related: "recognition.html", verified: true, sourceFile: "Crest for Outstanding Result (GPA-5) in JSC Examination - 2011.jpeg" },
    { id: "10-minute-school-affiliate-evidence", title: "10 Minute School — Affiliate Partner", category: "Professional Development", evidenceType: "Poster", date: "December 2020–Present", issuer: "10 Minute School", caption: "Welcome graphic identifying Md. Razu Ahmed as an Affiliate Partner of 10 Minute School.", asset: "assets/gallery/10-minute-school-affiliate-partner-evidence.jpg", href: "assets/gallery/10-minute-school-affiliate-partner-evidence.jpg", related: "profile.html", verified: true, sourceFile: "User-provided 10 Minute School role evidence" },
    { id: "ruac-agri-art-ambassador-evidence", title: "International Agri-Art Festival 2020 — Campus Ambassador", category: "Scientific Engagement", evidenceType: "Poster", date: "11–17 October 2020", issuer: "Rajshahi University Agricultural Club (RUAC)", caption: "Campus Ambassador evidence identifying Md. Razu Ahmed as the Pabna University of Science and Technology representative for the International Agri-Art Festival.", asset: "assets/gallery/ruac-international-agri-art-festival-2020-evidence.jpg", href: "assets/gallery/ruac-international-agri-art-festival-2020-evidence.jpg", related: "profile.html", verified: true, sourceFile: "User-provided RUAC role evidence" },
    { id: "ruac-certificate-of-excellence-2020", title: "Certificate of Excellence — International Agri-art Festival 2020", category: "Award", evidenceType: "Certificate", date: "11–17 October 2020", issuer: "Rajshahi University Agricultural Club (RUAC)", caption: "Certificate of Excellence awarded to Md. Razu Ahmed for serving as Campus Ambassador of Pabna University of Science and Technology in the International Agri-art Festival 2020.", asset: "assets/gallery/ruac-certificate-of-excellence-2020.webp", href: "assets/gallery/ruac-certificate-of-excellence-2020.webp", related: "recognition.html", verified: true, sourceFile: "User-provided RUAC Certificate of Excellence" },
    { id: "global-nuclear-energy-2024-flyer", title: "Public Discussion — Global Nuclear Energy: Facts and Myths", category: "Scientific Engagement", evidenceType: "Poster", date: "31 October 2024", issuer: "Pabna University of Science and Technology · Energy of the Future Information Centre", caption: "Official event flyer for the public discussion on “Global Nuclear Energy: Facts and Myths” held at Gallery 2, PUST.", asset: "assets/gallery/global-nuclear-energy-public-discussion-flyer.webp", href: "assets/gallery/global-nuclear-energy-public-discussion-flyer.webp", related: "profile.html", verified: true, sourceFile: "User-provided official event flyer" },
    { id: "global-nuclear-energy-2024-certificate", title: "Participation Certificate — Global Nuclear Energy: Facts and Myths", category: "Scientific Engagement", evidenceType: "Certificate", date: "31 October 2024", issuer: "Energy of the Future Information Centre · PUST · ASE ROSATOM", caption: "Participation certificate awarded to Md. Razu Ahmed for the public discussion on “Global Nuclear Energy: Facts and Myths” for university students of the Rooppur NPP region.", asset: "assets/gallery/global-nuclear-energy-certificate.webp", href: "assets/gallery/global-nuclear-energy-certificate.webp", related: "profile.html", verified: true, sourceFile: "User-provided participation certificate" },
    { id: "jsr-award-icasds-2025-evidence", title: "JSR Award for Young Researchers’ Poster Competition — ICASDS 2025", category: "Award", evidenceType: "Recognition", paperId: "341", date: "December 2025", issuer: "Journal of Statistical Research · ICASDS 2025 · University of Dhaka", caption: "Official awardees list showing Md. Razu Ahmed, Paper ID 341, among the awardees for the poster “A Deep Learning and Handcrafted Feature Fusion Framework for Automated Diabetic Retinopathy Grading from Retinal Fundus Images.”", asset: "assets/gallery/jsr-awardees-list-icasds-2025.webp", href: "assets/gallery/jsr-awardees-list-icasds-2025.webp", related: "recognition.html", verified: true, sourceFile: "User-provided ICASDS 2025 awardees list" },
    { id: "icasds-workshop-applied-machine-learning-certificate", title: "Workshop Certificate — Applied Machine Learning Projects", category: "Professional Development", evidenceType: "Certificate", date: "27 December 2025", issuer: "ICASDS 2025 · Institute of Statistical Research and Training (ISRT), University of Dhaka", caption: "Certificate for the pre-conference workshop “From Business Challenge to Deployment: An Industry-Standard Framework for Applied Machine Learning Projects.”", asset: "assets/gallery/icasds-workshop-applied-machine-learning-certificate.webp", href: "assets/gallery/icasds-workshop-applied-machine-learning-certificate.webp", related: "recognition.html", verified: true, sourceFile: "User-provided ICASDS 2025 workshop certificate" },
    { id: "icasds-workshop-causal-inference-certificate", title: "Workshop Certificate — Causal Inference for Observational Data Analysis", category: "Professional Development", evidenceType: "Certificate", date: "27 December 2025", issuer: "ICASDS 2025 · Institute of Statistical Research and Training (ISRT), University of Dhaka", caption: "Certificate for the pre-conference workshop “Causal Inference for Observational Data Analysis.”", asset: "assets/gallery/icasds-workshop-causal-inference-certificate.webp", href: "assets/gallery/icasds-workshop-causal-inference-certificate.webp", related: "recognition.html", verified: true, sourceFile: "User-provided ICASDS 2025 workshop certificate" },
    { id: "bangladesh-physics-olympiad-2015-certificate", title: "5th Bangladesh Physics Olympiad 2015 — Divisional Round", category: "Scientific Engagement", evidenceType: "Certificate", date: "2015", issuer: "Bangladesh Physics Olympiad", caption: "Certificate of Participation awarded to Md. Razu Ahmed of Rajshahi College for participating in the divisional round of the 5th Bangladesh Physics Olympiad 2015 under Category C.", asset: "assets/gallery/bangladesh-physics-olympiad-2015-certificate.webp", href: "assets/gallery/bangladesh-physics-olympiad-2015-certificate.webp", related: "profile.html", verified: true, sourceFile: "User-provided Physics Olympiad certificate" },
    { id: "bteb-computer-office-application-certificate", title: "Computer Office Application — National Skill Standard Basic Course", category: "Professional Development", evidenceType: "Certificate", date: "2020–2021", issuer: "Bangladesh Technical Education Board (BTEB), Dhaka", caption: "Certificate for successful completion of the 360-hour Computer Office Application course through Path Finder Computer Training Institute, Pabna, with Grade A+.", asset: "assets/gallery/bteb-computer-office-application-certificate.webp", href: "assets/gallery/bteb-computer-office-application-certificate.webp", related: "recognition.html", verified: true, sourceFile: "User-provided BTEB training certificate" },
    { id: "eaai-reviewing-certificate-2026", title: "Engineering Applications of Artificial Intelligence — Certificate of Reviewing", category: "Scholarly Service", evidenceType: "Certificate", date: "September 2026", issuer: "Engineering Applications of Artificial Intelligence · Elsevier", caption: "Certificate of Reviewing awarded to Md. Razu Ahmed for one review contributed to Engineering Applications of Artificial Intelligence in September 2026.", asset: "assets/gallery/eaai-reviewing-certificate-2026.webp", href: "assets/recognition/eaai-reviewing-certificate-2026.pdf", fileType: "PDF", documentPages: 1, related: "experience.html", verified: true, sourceFile: "Certificate_EAAI_Recognised(1).pdf" },
    { id: "elsevier-research-data-management-2026", title: "Research Data Management — Certificate of Completion", category: "Professional Development", evidenceType: "Certificate", date: "13 August 2026", issuer: "Researcher Academy · Elsevier", caption: "Certificate of completion for Research Data Management (4 hours 55 minutes).", asset: "assets/gallery/elsevier-research-data-management-certificate-2026.webp", href: "assets/recognition/elsevier-research-data-management-certificate-2026.pdf", fileType: "PDF", documentPages: 1, related: "recognition.html", verified: true, sourceFile: "research-data-management-certificate_2(1).pdf" },
    { id: "elsevier-research-design-2026", title: "Research Design — Certificate of Completion", category: "Professional Development", evidenceType: "Certificate", date: "13 August 2026", issuer: "Researcher Academy · Elsevier", caption: "Certificate of completion for Research Design (3 hours 50 minutes).", asset: "assets/gallery/elsevier-research-design-certificate-2026.webp", href: "assets/recognition/elsevier-research-design-certificate-2026.pdf", fileType: "PDF", documentPages: 1, related: "recognition.html", verified: true, sourceFile: "research-design-certificate_2(1).pdf" },
    { id: "nature-publication-ethics-2026", title: "Research Integrity: Publication Ethics — Certificate of Course Completion", category: "Professional Development", evidenceType: "Certificate", date: "12 August 2026", issuer: "Nature Masterclasses", caption: "Certificate of course completion for the 8-hour Nature Masterclasses course Research Integrity: Publication Ethics.", asset: "assets/gallery/nature-publication-ethics-certificate-2026.webp", href: "assets/recognition/nature-publication-ethics-certificate-2026.pdf", fileType: "PDF", documentPages: 1, related: "recognition.html", verified: true, sourceFile: "91_6_222306_1786566987_NMO Course Completion Certificate(2).pdf" },
    { id: "nature-focus-on-peer-review-2026", title: "Focus on Peer Review — Certificate of Course Completion", category: "Professional Development", evidenceType: "Certificate", date: "12 August 2026", issuer: "Nature Masterclasses", caption: "Certificate of course completion for the 3.5-hour Nature Masterclasses course Focus on Peer Review.", asset: "assets/gallery/nature-focus-on-peer-review-certificate-2026.webp", href: "assets/recognition/nature-focus-on-peer-review-certificate-2026.pdf", fileType: "PDF", documentPages: 1, related: "recognition.html", verified: true, sourceFile: "41_6_222306_1786557508_NMO Course Completion Certificate(2).pdf" },
    { id: "sicip-it-support-service-2026", title: "IT Support Service — 360 Hours Skills Training Certificate", category: "Professional Development", evidenceType: "Certificate", date: "4 May–4 September 2025 · issued 15 July 2026", issuer: "SICIP · Pabna Technical Training Center · Directorate of Technical Education", caption: "Two-page certificate documenting successful completion of 360 hours of IT Support Service skills training.", asset: "assets/gallery/sicip-it-support-service-certificate-2026.webp", href: "assets/recognition/sicip-it-support-service-certificate-2026.pdf", fileType: "PDF", documentPages: 2, related: "recognition.html", verified: true, sourceFile: "Certificate1784098126(1).pdf" },
    { id: "icasds-2025-jsr-award-certificate", title: "ICASDS 2025 — JSR Award for Poster Competition", category: "Award", evidenceType: "Certificate", paperId: "341", date: "28–29 December 2025", issuer: "Journal of Statistical Research · ICASDS 2025 · ISRT, University of Dhaka", caption: "Official JSR Award certificate recognizing outstanding poster-competition performance for the diabetic-retinopathy grading research. Certificate ID ICASDS-253411.", asset: "assets/gallery/icasds-2025-jsr-poster-award-certificate.webp", href: "assets/recognition/jsr-award-icasds-2025.pdf", fileType: "PDF", documentPages: 1, related: "conferences.html#icasds-2025", verified: true, sourceFile: "ICASDS-253411(1).pdf" },
    { id: "icasds-2025-poster-presentation-certificate", title: "ICASDS 2025 — Poster Presentation Certificate", category: "Conference", evidenceType: "Certificate", paperId: "341", date: "28–29 December 2025", issuer: "ICASDS 2025 · ISRT, University of Dhaka", caption: "Certificate confirming Md. Razu Ahmed’s poster presentation of the diabetic-retinopathy grading research at ICASDS 2025. Certificate ID ICASDS-253412.", asset: "assets/gallery/icasds-2025-poster-presentation-certificate.webp", href: "assets/academic/conferences/icasds-2025-poster-presentation-certificate.pdf", fileType: "PDF", documentPages: 1, related: "conferences.html#icasds-2025", verified: true, sourceFile: "341(1).pdf" },
    { id: "hult-prize-oncampus-competitor-2025", title: "Hult Prize 2024–2025 OnCampus Program — Competitor Certificate", category: "Professional Development", evidenceType: "Certificate", date: "27 June 2025", issuer: "Hult Prize Foundation · Pabna University of Science and Technology", caption: "Certificate recognizing Md. Razu Ahmed’s participation as a Competitor in the 2024–2025 Hult Prize OnCampus Program at PUST.", asset: "assets/gallery/hult-prize-2024-2025-oncampus-competitor-certificate.webp", href: "assets/recognition/hult-prize-2024-2025-oncampus-competitor-certificate.pdf", fileType: "PDF", documentPages: 1, related: "profile.html", verified: true, sourceFile: "Md. Razu Ahmed HULT Certificate(1).pdf" },
    { id: "icrast-440-certificate-gallery", title: "ICRAST 2025 — Paper 440 Oral Presentation & Certificate of Achievement", category: "Conference", evidenceType: "Certificate", paperId: "440", date: "14–15 November 2025", issuer: "Faculty of Science, University of Rajshahi", caption: "Unified evidence for Md. Razu Ahmed’s oral presentation as Presenting Author of Paper ID 440, “Measuring Attitudes toward AI’s Impact on the Job Market in Bangladesh: A Study at Pabna University of Science and Technology,” together with the Certificate of Achievement issued at the 2nd ICRAST 2025.", asset: "assets/academic/conferences/icrast-2025-paper-440-certificate.jpeg", href: "assets/academic/conferences/icrast-2025-paper-440-certificate.jpeg", related: "conferences.html#icrast-2025", verified: true, sourceFile: "ICRAST Paper ID-440 Certificate(2).jpeg" },
    { id: "efast-2026-paper-108-oral-certificate", title: "EFAST 2026 — Paper 108 Oral Presentation Certificate", category: "Conference", evidenceType: "Certificate", paperId: "108", date: "27–28 June 2026", issuer: "EFAST 2026 · Pabna University of Science and Technology · Universiti Malaysia Perlis", caption: "Certificate recognizing Md. Razu Ahmed’s oral presentation of “Automated Five-Stage Diabetic Retinopathy Grading Using a Leak-Safe and Explainable Deep-Handcrafted Fusion Framework” at EFAST 2026.", asset: "assets/academic/conferences/efast-2026-paper-108-oral-presentation-certificate.jpg", href: "assets/academic/conferences/efast-2026-paper-108-oral-presentation-certificate.jpg", fileType: "JPG", documentPages: 1, related: "conferences.html#efast-2026", verified: true, sourceFile: "EFAST 2026 (Paper ID-108) Certificate(1).jpg" },
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
