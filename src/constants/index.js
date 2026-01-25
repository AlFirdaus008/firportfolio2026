export const myProjects = [
  {
    id: 1,
    title: "Data Structure and Algorithm Visualizer",
    description:
      "Developed 'FoodStock', a comprehensive inventory management system designed for culinary businesses to streamline stock tracking and minimize ingredient waste.",
    subDescription: [
      "Built a robust desktop application using Python, utilizing Array data structures for efficient memory usage and fast data access",
      "Implemented advanced algorithms including Merge Sort for data organization and Interpolation Search for high-speed item retrieval",
      "Designed an intuitive dashboard that visualizes real-time stock levels, low-stock alerts, and expiration tracking to prevent financial loss.",
      "Integrated persistent data storage using JSON file handling, ensuring reliable save/load functionality for business continuity.",
    ],
    href: "",
    logo: "",
    image: "/assets/projects/technical/foodstock.jpg",
    tags: [
      {
        id: 1,
        name: "Python",
        path: "/assets/logos/python.svg",
      },
      {
        id: 2,
        name: "Pandas",
        path: "/assets/logos/pandas.svg",
      },
      {
        id: 3,
        name: "NumPy",
        path: "/assets/logos/numpy.svg",
      },
      {
        id: 4,
        name: "Visual Studio Code",
        path: "/assets/logos/visualstudiocode.svg",
      },
    ],
    category: "technical",
  },
  {
    id: 2,
    title: "Cryptography API Service System",
    description:
      "Designed and developed a robust RESTful API service focused on high-level data security, implementing modern cryptographic protocols to ensure confidentiality, integrity, and availability (CIA Triad).",
    subDescription: [
      "Built a high-performance backend using FastAPI (Python) and AsyncIO, supporting multi-algorithm key management including RSA-PSS, ECDSA (SECP256R1), and EdDSA (Ed25519).",
      "Implemented a Hybrid Encryption system combining AES-256-GCM (symmetric) for speed and RSA-OAEP (asymmetric) for secure key exchange to facilitate tamper-proof message relaying.",
      "Developed a Digital Notary feature for PDF files, utilizing Server-Side Signing with SECP256K1 and SHA-256 hashing to guarantee file integrity and non-repudiation.",
      "Secured API endpoints using JWT (JSON Web Token) authentication based on OAuth2 standards and managed dependencies efficiently using the modern uv package manager.",
    ],
    href: "",
    logo: "",
    image: "/assets/projects/technical/punkrecords.jpg",
    tags: [
      {
        id: 1,
        name: "Python",
        path: "/assets/logos/python.svg",
      },
      {
        id: 2,
        name: "Visual Studio Code",
        path: "/assets/logos/visualstudiocode.svg",
      },
    ],
    category: "technical",
  },
  {
    id: 3,
    title: "UI/UX Mobile Application",
    description:
      "A smart travel assistance mobile application designed to simplify trip planning and enhance the travel experience for diverse user personas.",
    subDescription: [
      "Designed a high-fidelity interactive prototype using Figma, featuring seamless booking flows for flights, hotels, and transportation.",
      "Conducted user research to create distinct personas (Solo, Family, Business, Backpackers), ensuring the interface meets specific user needs.",
      "Integrated a data-driven design approach by utilizing K-Means clustering analysis to segment user satisfaction and optimize UI placement.",
      "Developed a comprehensive design system covering Login, Home, Orders, and Deals pages to ensure visual consistency and responsiveness.",
    ],
    href: "",
    logo: "",
    image: "/assets/projects/technical/travelvg.jpg",
    tags: [
      {
        id: 1,
        name: "Figma",
        path: "/assets/logos/figma.svg",
      },
    ],
    category: "technical",
  },
  {
    id: 4,
    title: "Data Wrangling: Socio-Economic Analysis",
    description:
      "A comprehensive data analysis project examining the correlation between education, unemployment, and poverty across 38 Indonesian provinces (2019-2023) using raw BPS data.",
    subDescription: [
      "Engineered a robust ETL pipeline using Python (Pandas, NumPy) to integrate data from disparate formats: Multi-header CSVs, Nested JSONs, and Unstructured PDFs (via Tabula).",
      "Implemented advanced data cleaning workflows including Regex for dirty string sanitization, Z-Score for outlier detection, and manual mapping to standardize inconsistent region names.",
      "Conducted in-depth Exploratory Data Analysis (EDA) using correlation heatmaps to reveal that historical poverty trends are the strongest predictors of current economic conditions.",
      "Addressed complex data quality issues such as handling missing monthly values and resolving inconsistencies in provincial metadata across varying file types.",
    ],
    href: "",
    logo: "",
    image: "/assets/projects/technical/datawranlingsosioeco.jpg",
    tags: [
      {
        id: 1,
        name: "Python",
        path: "/assets/logos/python.svg",
      },
      {
        id: 2,
        name: "Pandas",
        path: "/assets/logos/pandas.svg",
      },
      {
        id: 3,
        name: "NumPy",
        path: "/assets/logos/numpy.svg",
      },
      {
        id: 4,
        name: "Excel",
        path: "/assets/logos/excel.svg",
      },
      {
        id: 5,
        name: "Jupyter Notebook",
        path: "/assets/logos/jupyter.svg",
      },
      {
        id: 6,
        name: "Kaggle",
        path: "/assets/logos/kaggle.svg",
      },
    ],
    category: "technical",
  },
  {
    id: 5,
    title: "AI-Driven Telecom Customer Churn Prediction",
    description:
      "Designed an integrated AI framework to predict telecommunication customer churn, comparing multiple supervised learning models to formulate data-driven retention strategies.",
    subDescription: [
      "Defined the project architecture using PEAS Analysis (Performance, Environment, Actuators, Sensors) to align technical metrics with business objectives.",
      "Developed and evaluated three distinct classification models: Decision Tree, Naive Bayes, and Artificial Neural Network (ANN/MLP) to find the optimal predictor.",
      "Implemented SMOTE (Synthetic Minority Oversampling Technique) to handle extreme class imbalance, ensuring the model could accurately detect minority 'Churn' cases.",
      "Achieved a high Recall rate of 82% using the Naive Bayes model, effectively minimizing false negatives (undetected at-risk customers).",
      "Conducted Feature Importance Analysis to identify key churn drivers, revealing that 'Month-to-Month Contracts' and 'Fiber Optic Service' were the primary risk factors.",
    ],
    href: "",
    logo: "",
    image: "/assets/projects/technical/aichurnprediction.jpg",
    tags: [
      {
        id: 1,
        name: "Python",
        path: "/assets/logos/python.svg",
      },
      {
        id: 2,
        name: "Pandas",
        path: "/assets/logos/pandas.svg",
      },
      {
        id: 3,
        name: "NumPy",
        path: "/assets/logos/numpy.svg",
      },
      {
        id: 4,
        name: "Jupyter Notebook",
        path: "/assets/logos/jupyter.svg",
      },
    ],
    category: "technical",
  },
  {
    id: 6,
    title:
      "Analysis of YouTube Comments for Sentiment Analysis and Time Series Forecasting",
    description:
      "Executed a comprehensive NLP and Time-Series analysis project to gauge public sentiment regarding Indonesia's new Finance Minister using YouTube data, integrating advanced Deep Learning and Clustering techniques.",
    subDescription: [
      "Fine-tuned the IndoBERT transformer model on a balanced dataset of 1,000 comments, achieving a 93.93% validation accuracy for sentiment classification, significantly outperforming baseline models.",
      "Implemented video streaming capabilities integrating Azure Media Services for adaptive bitrate streaming and high availability.",
      "Conducted comparative topic modeling analysis between TF-IDF + K-Means and BoW + DBSCAN, successfully identifying 5 distinct public opinion clusters using K-Means.",
      "Implemented Facebook Prophet for time-series forecasting to predict future sentiment trends, identifying specific weekly seasonality patterns and long-term stability.",
      "Engineered an end-to-end data pipeline including scraping via YouTube Data API v3, text preprocessing (cleaning, stemming), and advanced visualization (PCA, WordClouds) to interpret complex public signals",
    ],
    href: "",
    logo: "",
    image: "/assets/projects/technical/sentimentanalysiscomentsyoutube.jpg",
    tags: [
      {
        id: 1,
        name: "Python",
        path: "/assets/logos/python.svg",
      },
      {
        id: 2,
        name: "Pandas",
        path: "/assets/logos/pandas.svg",
      },
      {
        id: 3,
        name: "NumPy",
        path: "/assets/logos/numpy.svg",
      },
      {
        id: 4,
        name: "Jupyter Notebook",
        path: "/assets/logos/jupyter.svg",
      },
    ],
    category: "technical",
  },
  {
    id: 7,
    title:
      "Vehicle Sound Classification System using Digital Signal Processing & Adaptive Filtering",
    description:
      "Engineered an automated acoustic classification system capable of distinguishing between 8 types of vehicle sounds (e.g., Drone, Helicopter, Car, Train) by leveraging advanced Digital Signal Processing techniques.",
    subDescription: [
      "Implemented Adaptive Filtering algorithms (LMS/RLS) to effectively reduce environmental noise and enhance signal clarity before processing.",
      "Executed comprehensive Feature Extraction in the frequency domain, extracting MFCC (Mel-Frequency Cepstral Coefficients), Spectral Centroid, Spectral Rolloff, and Zero-Crossing Rate using Librosa.",
      "Developed a machine learning pipeline using Scikit-Learn to classify vehicle types based on their spectral acoustic signatures.",
      "Analyzed signal characteristics across time and frequency domains to identify unique auditory fingerprints for heavy vs. light vehicles.",
    ],
    href: "",
    logo: "",
    image: "/assets/projects/technical/dpsvehicleclassification.jpg",
    tags: [
      {
        id: 1,
        name: "Python",
        path: "/assets/logos/python.svg",
      },
      {
        id: 2,
        name: "Pandas",
        path: "/assets/logos/pandas.svg",
      },
      {
        id: 3,
        name: "NumPy",
        path: "/assets/logos/numpy.svg",
      },
      {
        id: 4,
        name: "Jupyter Notebook",
        path: "/assets/logos/jupyter.svg",
      },
      {
        id: 5,
        name: "Git",
        path: "/assets/logos/git.svg",
      },
    ],
    category: "technical",
  },
  {
    id: 1,
    title: "Event Competition : Spartan 2024",
    description:
      "Produced an adrenaline-fueled aftermovie for the Spartan 2024 competition, capturing the raw intensity, physical endurance, and competitive spirit of the young athletes.",
    subDescription: [
      "Curated and edited hours of raw footage into a high-octane highlight reel that emphasizes the toughest obstacles and emotional finish-line moments.",
      "Implemented advanced speed ramping (time remapping) and rhythmic cuts to synchronize the visual action with a high-tempo cinematic score.",
      "Designed an immersive soundscape by layering foley effects (breathing, impact, environment) to enhance the viewer's sensory experience.",
      "Applied a gritty, high-contrast color grade to establish a dramatic atmosphere that aligns with the rigorous nature of the competition.",
    ],
    href: "https://youtu.be/fMW5NqFf-Nc",
    logo: "",
    image: "/assets/projects/creative/picture/spartan.png",
    video: "https://youtu.be/fMW5NqFf-Nc",
    gallery: [],
    tags: [
      {
        id: 1,
        name: "Premiere Pro",
        path: "/assets/logos/premiere.svg",
      },
      {
        id: 2,
        name: "After Effects",
        path: "/assets/logos/aftereffects.svg",
      },
      {
        id: 3,
        name: "Illustrator",
        path: "/assets/logos/illustrator.svg",
      },
    ],
    category: "creative",
  },
  {
    id: 2,
    title: "Event Highlight : 50 Year of Yamaha - Fazzio Touring Malang",
    description:
      "Produced a cinematic travelogue capturing the '50 Year of Yamaha' celebration, blending automotive aesthetics with the urban heritage of Malang City.",
    subDescription: [
      "Directed and shot dynamic rolling footage of the Fazzio convoy, utilizing stabilization techniques to ensure smooth cinematic movement across varying terrains.",
      "Crafted a narrative-driven edit that transitions seamlessly from high-energy riding sequences to intimate community moments using match-cut transitions.",
      "Engineered a vibrant, modern color grade that accentuates the Fazzio's pop colors against the vintage architectural backdrop of Malang.",
      "Synchronized upbeat background music with natural engine ambiances and city sounds to deliver an immersive touring experience.",
    ],
    href: "https://youtu.be/y-XDOVigUl8",
    logo: "",
    image: "/assets/projects/creative/picture/50tahunyamaha.png",
    video: "https://youtu.be/y-XDOVigUl8",
    gallery: ["https://youtu.be/k90O8Q8mPVw", "https://youtu.be/bN3o0gsta0g"],
    tags: [
      {
        id: 1,
        name: "Premiere Pro",
        path: "/assets/logos/premiere.svg",
      },
      {
        id: 2,
        name: "After Effects",
        path: "/assets/logos/aftereffects.svg",
      },
      {
        id: 3,
        name: "Illustrator",
        path: "/assets/logos/illustrator.svg",
      },
    ],
    category: "creative",
  },
  {
    id: 3,
    title: "Cinematic Yearbook: Class of 2024",
    description:
      "A high-production cinematic yearbook video capturing the nostalgia and spirit of high school life, involving over 200 students.",
    subDescription: [
      "Directed the entire production pipeline from concept to final delivery, coordinating a crew of 10 and managing a large cast of students.",
      "Executed advanced post-production workflows including multi-cam editing, motion graphics for title sequences, and color grading.",
      "Created a fast-paced, engaging edit that synchronized perfectly with the soundtrack to maximize emotional impact.",
    ],
    href: "https://www.youtube.com/watch?v=p-ItbwK-gEA",
    logo: "",
    image: "/assets/projects/creative/picture/aviothic_1.JPG",
    video: "https://www.youtube.com/watch?v=p-ItbwK-gEA",
    gallery: [
      "https://www.instagram.com/p/C7VWXNPSH2K/?img_index=1",
      "https://www.instagram.com/p/C7VQW0nS0Iv/?img_index=1",
      "https://www.instagram.com/p/C7BB_WFr_fY/?img_index=1",
      "/assets/projects/creative/picture/aviothic_1.JPG",
      "/assets/projects/creative/picture/aviothic_2.JPG",
      "/assets/projects/creative/picture/aviothic_3.JPG",
      "/assets/projects/creative/picture/aviothic_4.JPG",
    ],
    tags: [
      {
        id: 1,
        name: "Premiere Pro",
        path: "/assets/logos/premiere.svg",
      },
      {
        id: 2,
        name: "After Effects",
        path: "/assets/logos/aftereffects.svg",
      },
      {
        id: 3,
        name: "Illustrator",
        path: "/assets/logos/illustrator.svg",
      },
      {
        id: 4,
        name: "Photoshop",
        path: "/assets/logos/photoshop.svg",
      },
    ],
    category: "creative",
  },
  {
    id: 4,
    title:
      "Event : 79th Indonesian Independence Day Celebration, Araya, Malang, East Java",
    description:
      "Produced a cinematic highlight video capturing the vibrant atmosphere of the 79th Indonesian Independence Day celebration at Araya Residential, Malang.",
    subDescription: [
      "Documented and edited key moments of the 'Jalan Sehat' (Fun Walk) and Carnival, showcasing the community spirit and elaborate costumes.",
      "Implemented dynamic cutting and speed ramping techniques to create a high-energy highlight reel that matches the event's upbeat rhythm.",
      "Applied cinematic color grading to enhance the festive 'Red & White' aesthetic and ensure visual consistency across outdoor daylight shots.",
      "Produced a polished final cut optimized for social media engagement and community documentation.",
    ],
    href: "https://youtu.be/CpDgK6BvUCk",
    logo: "",
    image: "/assets/projects/creative/picture/agustusan2024.jpg",
    video: "https://youtu.be/CpDgK6BvUCk",
    gallery: [],
    tags: [
      {
        id: 1,
        name: "Premiere Pro",
        path: "/assets/logos/premiere.svg",
      },
      {
        id: 2,
        name: "After Effects",
        path: "/assets/logos/aftereffects.svg",
      },
      {
        id: 3,
        name: "Illustrator",
        path: "/assets/logos/illustrator.svg",
      },
      {
        id: 4,
        name: "Photoshop",
        path: "/assets/logos/photoshop.svg",
      },
    ],
    category: "creative",
  },
  {
    id: 5,
    title: "Cinematic Wedding: Outdoor & Indoor Celebration",
    description:
      "Produced a high-quality cinematic wedding film capturing the intimate moments and grand celebration of a couple's special day across varying venues.",
    subDescription: [
      "Skillfully documented both the natural-light outdoor ceremony and the low-light indoor reception, ensuring consistent exposure and image quality.",
      "Crafted an emotional narrative by weaving together vows, speeches, and candid moments with a cinematic soundtrack to tell the couple's unique love story.",
      "Applied advanced color grading to create a romantic, timeless look, balancing warm skin tones against changing environmental lighting.",
      "Delivered a comprehensive package including a 1-minute social media teaser and a full-length highlight reel, optimized for digital sharing.",
    ],
    href: "https://youtu.be/_IywiWnLyGA",
    logo: "",
    image: "/assets/projects/creative/picture/wedding.png",
    video: "https://youtu.be/_IywiWnLyGA",
    gallery: [],
    tags: [
      {
        id: 1,
        name: "Premiere Pro",
        path: "/assets/logos/premiere.svg",
      },
      {
        id: 2,
        name: "After Effects",
        path: "/assets/logos/aftereffects.svg",
      },
      {
        id: 3,
        name: "Illustrator",
        path: "/assets/logos/illustrator.svg",
      },
      {
        id: 4,
        name: "Photoshop",
        path: "/assets/logos/photoshop.svg",
      },
    ],
    category: "creative",
  },
  {
    id: 6,
    title:
      "Motion Graphic : Teaser Pekan Raya Mahasiswa State University of Surabaya 2025",
    description:
      "Produced a high-energy motion graphic teaser to promote 'Pekan Raya Mahasiswa 2025', capturing the event's vibrant spirit and generating hype among the student body.",
    subDescription: [
      "Conceptualized and executed a dynamic visual style featuring kinetic typography and custom vector animations to effectively communicate key event details.",
      "Utilized Adobe After Effects to create complex transitions and motion effects, ensuring high viewer retention and excitement.",
      "Synchronized visual elements perfectly with upbeat audio and sound effects (SFX) to create an immersive and impactful 60-second promotional video.",
      "Optimized final renders for various social media formats (Instagram Reels, TikTok), contributing to a significant increase in online engagement and event awareness.",
    ],
    href: "https://youtu.be/kCY4PbPvXB0",
    logo: "",
    image: "/assets/projects/creative/picture/teaserpekanrayamahasiswa.webp",
    video: "https://youtu.be/kCY4PbPvXB0",
    gallery: [],
    tags: [
      {
        id: 1,
        name: "Premiere Pro",
        path: "/assets/logos/premiere.svg",
      },
      {
        id: 2,
        name: "After Effects",
        path: "/assets/logos/aftereffects.svg",
      },
      {
        id: 3,
        name: "Illustrator",
        path: "/assets/logos/illustrator.svg",
      },
    ],
    category: "creative",
  },
];

export const mySocials = [
  {
    name: "WhatsApp",
    href: "https://wa.me/+6281336602964",
    icon: "/assets/socials/whatsApp.svg",
  },
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/alfirdausn/",
    icon: "/assets/socials/linkedIn.svg",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/firdausanzl/",
    icon: "/assets/socials/instagram.svg",
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/@alfirdausn",
    icon: "/assets/socials/youtube.svg",
  },
];

export const experiences = [
  {
    title: "Video Editor",
    job: "Freelance at Satu Visual",
    date: "2023 - 2025",
    contents: [
      "Produced and edited high-engagement video content for prominent YouTube creators 'Dwikids Official' and 'B Blek' at Satu Visual, optimizing content for digital audiences.",
      "Spearheaded the end-to-end post-production for a 25-episode comedy sequel, managing narrative flow, comedic timing, and visual consistency throughout the series.",
      "Collaborated closely with content creators to translate scripts into visually compelling narratives, ensuring high retention rates and audience engagement.",
      "Executed advanced video editing techniques including color grading, sound design, and motion graphics to enhance the production value of daily vlog and comedy content.",
      "Managed project timelines efficiently to deliver 25 consecutive episodes on schedule while maintaining high creative standards.",
    ],
    category: "creative",
  },
  {
    title: "Director of Video Production",
    job: "Cinematic Yearbook Video for High School Class of 2024",
    date: "2024",
    contents: [
      "Directed and conceptualized the cinematic yearbook video for SMA Negeri 7 Malang Class of 2024, effectively capturing the nostalgic essence of high school life.",
      "Led the entire production crew and directed hundreds of students during large-scale shoots, ensuring organized workflow and dynamic visual storytelling.",
      "Developed the creative storyboard and visual tone, translating abstract themes into a cohesive and emotionally resonant narrative.",
      "Oversaw the end-to-end post-production process, including editing, color grading, and sound design, to deliver a high-quality cinematic final product.",
    ],
    category: "creative",
  },
  {
    title: "Video Editor",
    job: "Freelance at MyFundAction of Malaysia",
    date: "2025 - Present",
    contents: [
      "Produced and edited engaging short-form content and long-form promotional videos for MyFundAction Malaysia, tailoring visual narratives to support diverse campaign initiatives..",
      "Collaborated with the creative team to deliver high-quality video assets that aligned with the organization's branding and specific marketing requirements.",
    ],
    category: "creative",
  },
  {
    title: "Freelance Data Scientist",
    job: "Self-Employed",
    date: "2025 - Present",
    contents: [
      "Developed comprehensive data science projects using Python, Pandas, and Scikit-Learn to showcase expertise in data wrangling, predictive modeling, and visualization.",
      "Continuously enhancing analytical capabilities and expanding expertise in machine learning algorithms, deep learning, and digital signal processing",
    ],
    category: "technical",
  },
];
export const reviews = [
  {
    name: "Dicky",
    username: "@Dicky",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://robohash.org/jack",
  },
  {
    name: "Nasywa",
    username: "@nasywa",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "https://robohash.org/jill",
  },
  {
    name: "Octriyanti",
    username: "@octriyanti",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://robohash.org/john",
  },
  {
    name: "Alice",
    username: "@alice",
    body: "This is hands down the best thing I've experienced. Highly recommend!",
    img: "https://robohash.org/alice",
  },
  {
    name: "Dimas",
    username: "@dimas",
    body: "Incredible work! The attention to detail is phenomenal.",
    img: "https://robohash.org/bob",
  },
  {
    name: "Piji",
    username: "@piji",
    body: "This exceeded all my expectations. Absolutely stunning!",
    img: "https://robohash.org/charlie",
  },
  {
    name: "Daffa",
    username: "@daffa",
    body: "Simply breathtaking. The best decision I've made in a while.",
    img: "https://robohash.org/dave",
  },
  {
    name: "Rhaffael",
    username: "@ell",
    body: "So glad I found this. It has changed the game for me.",
    img: "https://robohash.org/eve",
  },
];
