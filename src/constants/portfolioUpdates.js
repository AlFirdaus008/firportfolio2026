const tag = (id, name, logo) => ({ id, name, path: `/assets/logos/${logo}.svg` });

export const newTechnicalProjects = [
  {
    id: 8,
    title: "SPECTRA: Mahakam Watershed Flood Vulnerability",
    description: "A geospatial research project mapping flood vulnerability and spatial priorities in the Mahakam Watershed. Awarded 2nd Place in the Earth, Space, and Maritime Cluster at BRINATHON 2026.",
    subDescription: [
      "Developed with Team UNESA 1 Langkah Didepan for the Indonesia Research and Innovation Fair, organized by BRIN (September 2026).",
      "Built a reproducible workflow for geospatial data acquisition, validation, and feature engineering, integrating mining permits, oil palm plantation permits, land cover, and other spatial datasets.",
      "Applied GIS-based analysis and data quality checks to prepare reliable spatial features for flood vulnerability research and priority mapping.",
    ],
    href: "https://github.com/AlFirdaus008/spectra_brinathon26",
    dashboardUrl: "https://spectra.dulcloud.my.id/",
    links: [
      { label: "View GitHub", href: "https://github.com/AlFirdaus008/spectra_brinathon26" },
      { label: "Live Dashboard", href: "https://spectra.dulcloud.my.id/" },
    ],
    image: "/assets/projects/technical/spectra.png",
    galleryTitle: "BRINATHON 2026 Documentation",
    gallery: [
      "/assets/projects/technical/spectra/dokumentasi.jpeg",
      "/assets/projects/technical/spectra/dokumentasi (2).jpeg",
      "/assets/projects/technical/spectra/dokumentasi (3).jpeg",
    ],
    tags: [tag(1, "Python", "python"), tag(2, "Pandas", "pandas"), tag(3, "NumPy", "numpy")],
    category: "technical",
  },
  {
    id: 9,
    title: "Indonesia Disaster Vulnerability Mapping",
    dashboardUrl: "https://vulnerability-disaster-mapping-indo.vercel.app/",
    description: "A spatial ensemble machine learning project predicting disaster vulnerability across Indonesian provinces, with an interactive dashboard for regional risk analysis.",
    subDescription: [
      "Integrated multiple data sources to support spatial disaster vulnerability prediction and regional disaster risk assessment (May - June 2026).",
      "Built an interactive web dashboard to communicate geographic vulnerability patterns and support data-driven analysis.",
      "Documented the workflow through a technical report and a machine learning experimentation notebook.",
    ],
    links: [
      { label: "View GitHub", href: "https://github.com/AlFirdaus008/Indonesia-Disaster-Vulnerability-Mapping" },
      { label: "Live Dashboard", href: "https://vulnerability-disaster-mapping-indo.vercel.app/" },
    ],
    image: "/assets/projects/technical/disaster-mapping.png",
    tags: [tag(1, "Python", "python"), tag(2, "Pandas", "pandas"), tag(3, "Jupyter Notebook", "jupyter")],
    category: "technical",
  },
  {
    id: 10,
    title: "Energy & Economy Data Warehouse",
    description: "An automated ETL pipeline combining U.S. Energy Information Administration electricity data with World Bank economic indicators for integrated energy and economic analysis.",
    subDescription: [
      "Developed data extraction, cleaning, and transformation workflows using Python and Pandas (May - June 2026).",
      "Orchestrated scheduled ETL tasks with Apache Airflow to automate the integration of energy and economic datasets.",
      "Designed a dimensional star schema and loaded analytical data into Supabase PostgreSQL to support downstream analysis.",
    ],
    href: "https://github.com/AlFirdaus008/warehouse_energy_project",
    image: "/assets/projects/technical/energy-warehouse.jpg",
    tags: [tag(1, "Python", "python"), tag(2, "Pandas", "pandas"), tag(3, "SQL", "sql")],
    category: "technical",
  },
  {
    id: 11,
    title: "MortalTrace: Pneumonia Mortality Analytics",
    dashboardUrl: "https://mortaltracepneumonia.vercel.app/",
    description: "A data mining and predictive analytics system exploring pneumonia mortality across 34 Indonesian provinces from 2018 to 2023, supported by an interactive public health dashboard.",
    subDescription: [
      "Combined K-Means and DBSCAN clustering, FP-Growth association rule mining, and ensemble regression to identify regional health disparities and mortality risk patterns (April - June 2026).",
      "Achieved a test R² of 0.8434 using XGBoost and used SHAP analysis to identify poverty as a key predictive factor.",
      "Delivered an interactive dashboard to visualize regional mortality patterns and support public health decision-making.",
    ],
    links: [
      { label: "View GitHub", href: "https://github.com/AlFirdaus008/mortaltrace_pneumonia_indonesia" },
      { label: "Live Dashboard", href: "https://mortaltracepneumonia.vercel.app/" },
    ],
    image: "/assets/projects/technical/mortaltrace.png",
    tags: [tag(1, "Python", "python"), tag(2, "Pandas", "pandas"), tag(3, "Jupyter Notebook", "jupyter")],
    category: "technical",
  },
];

export const newExperiences = [
  {
    title: "Video Editor",
    job: "Locana Production · Brand Activation",
    date: "Sep 2026 - Present",
    contents: ["Editing video content for Locana Production's brand activation projects."],
    supportingMaterial: {
      type: "organization",
      title: "Locana Production",
      description: "Locana's brand activation work and updates.",
      links: [{ label: "Locana on Instagram", href: "https://www.instagram.com/locanacreative/" }],
    },
    category: "creative",
  },
  {
    title: "Teaching Assistant & OOP Textbook Co-Author",
    job: "Artificial Intelligence · State University of Surabaya",
    date: "Sep - Nov 2026",
    contents: [
      "Assisted in teaching Object-Oriented Programming with Python, mentoring students through coding exercises, problem-solving sessions, and practical programming assignments.",
      "Co-authoring a Python-based OOP textbook with academic lecturers, including learning materials, programming examples, and exercises for undergraduate students.",
    ],
    category: "technical",
  },
  {
    title: "Data Science & Data Analyst Cohort",
    job: "Asah by Dicoding x GOTO · Indonesia",
    date: "Jul 2026 - Present",
    contents: [
      "Developing practical skills in Python, SQL, statistics, data preprocessing, exploratory data analysis, machine learning, and visualization through an intensive hybrid program.",
      "Serving as Data Scientist (DS-1) in a six-member multidisciplinary capstone team, developing a sales monitoring and freelancer contribution management system for Arloraka Coffee.",
      "Responsible for dataset quality assessment, data dictionary development, transaction-to-database mapping, and validation of revenue, product quantities, and commission calculations, collaborating with AI Engineers and Full-Stack Developers.",
    ],
    supportingMaterial: {
      type: "cohort",
      title: "Dicoding Certificates",
      certificateProvider: "Dicoding",
      description: "Dicoding course certificates completed during my learning program.",
    },
    category: "technical",
  },
  {
    title: "Data Science & AI Researcher",
    job: "Big Data Lab Analysis · Surabaya",
    date: "May 2026 - Present",
    contents: [
      "Researching explainable expert recommendation systems using heterogeneous academic knowledge graphs, analyzing 6,160 publications from 129 lecturers across 24 study programs at UNESA.",
      "Developed MAGNN, HeteroSAGE, HAN, HGT, and MECCH graph neural network architectures alongside BM25 and E5 retrieval baselines to recommend academic experts by research topic.",
      "Achieved a Mean Reciprocal Rank (MRR) of 29.68% through E5–MAGNN integration, using temporal evaluation and metapath-based explanations while addressing cold-start challenges.",
    ],
    supportingMaterial: {
      type: "research",
      title: "Laboratory Profiles",
      description: "Profiles of the Big Data Analysis Laboratory at UNESA.",
      links: [
        { label: "Laboratory on LinkedIn", href: "https://www.linkedin.com/company/laboratorium-analisis-big-data-fmipa-unesa/" },
        { label: "Laboratory on Instagram", href: "https://www.instagram.com/labbigdataunesa/" },
      ],
    },
    category: "technical",
  },
  {
    title: "Guest Speaker · FRELIVE 2025",
    job: "Data Science Student Association · UNESA",
    date: "Nov 2025",
    contents: [
      "Delivered a webinar on creative freelancing and entrepreneurship, sharing practical approaches to building a freelance career and developing marketable creative skills.",
      "Shared experience working with clients across Indonesia and Malaysia, covering client collaboration, freelance workflows, and career development.",
    ],
    evidence: "/certification/guest_speaker/frelive.jpg",
    documentation: [
      "/assets/projects/creative/picture/frelive_webinar/dokumentasi (1).png",
      "/assets/projects/creative/picture/frelive_webinar/dokumentasi (2).png",
      "/assets/projects/creative/picture/frelive_webinar/dokumentasi (3).png",
      "/assets/projects/creative/picture/frelive_webinar/dokumentasi (4).png",
      "/assets/projects/creative/picture/frelive_webinar/dokumentasi (5).png",
    ],
    category: "creative",
  },
];

export const achievements = [
  {
    id: "brinathon",
    title: "BRINATHON 2026",
    award: "2nd Place",
    year: "2026",
    organizer: "BRIN · Indonesia Research and Innovation Fair",
    description: "Earth, Space, and Maritime Cluster. Spatial flood vulnerability research for the Mahakam Watershed with Team UNESA 1 Langkah Didepan.",
    image: "/certification/competition/brinathon_juara2.jpg",
  },
  {
    id: "iapa",
    title: "IAPA Annual Conference & ICPSH",
    award: "Semifinalist",
    year: "2026",
    organizer: "IAPA · FISIP Universitas Jenderal Soedirman",
    description: "Student competition exploring governance, society, and digital transformation.",
    image: "/certification/competition/iapa.jpg",
  },
  {
    id: "instinct",
    title: "INSTINCT X",
    award: "Semifinalist",
    year: "2026",
    organizer: "Faculty of Economics and Business · Universitas Riau",
    description: "National Essay Competition at Incredible Research and National Competition.",
    image: "/certification/competition/instinct.png",
  },
  {
    id: "screenplay",
    title: "Language Month Film Festival",
    award: "Best Screenplay",
    year: "2024",
    organizer: "SMA Negeri 7 Malang",
    image: "/certification/competition/best_sceneario.jpg",
  },
  {
    id: "review",
    title: "Language Month Film Festival",
    award: "Best Film Review",
    year: "2024",
    organizer: "SMA Negeri 7 Malang",
    image: "/certification/competition/best_review.jpg",
  },
  {
    id: "satru-padu",
    title: "Satru Padu · Film Director",
    award: "Best Short Film",
    year: "2023",
    organizer: "Film Pendek Sabhatansa · SMA Negeri 7 Malang",
  },
  {
    id: "sma-awards",
    title: "SMA Awards East Java",
    award: "2nd Place",
    // The CV lists 2018; leave the year off until confirmed by the owner.
    organizer: "Provincial Cinematography & Videography · SMA Negeri 7 Malang",
  },
];

const dicoding = (title, filename) => ({
  id: `dicoding-${filename}`,
  title,
  provider: "Dicoding",
  issuer: "Dicoding Indonesia",
  kind: "Course completion",
  href: `/certification/dicoding/Sertifikat Dicoding - ${filename}.pdf`,
});
const aws = (title, filename = title) => ({
  id: `aws-${filename}`,
  title,
  provider: "AWS",
  issuer: "Amazon Web Services",
  kind: "Training completion",
  href: `/certification/aws/${filename}.pdf`,
});

export const certifications = [
  dicoding("Dasar Data Science", "Dasar Data Science"),
  aws("AWS Cloud Practitioner Essentials"),
  dicoding("Belajar Machine Learning untuk Pemula", "Belajar Machine Learning untuk Pemula"),
  aws("Cloud Essentials Knowledge Badge Readiness Path", "Cloud Essentials Knowledge Badge Readiness Path Includes Labs"),
  dicoding("Belajar Analisis Data untuk Pemula", "Belajar Analisis Data untuk Pemula"),
  dicoding("Belajar Dasar Structured Query Language (SQL)", "Belajar Dasar Structured Query Language (SQL)"),
  dicoding("Belajar Dasar Visualisasi Data", "Belajar Dasar Visualisasi Data"),
  dicoding("Memulai Pemrograman dengan Python", "Memulai Pemrograman dengan Python"),
  dicoding("Belajar Dasar Git dengan GitHub", "Belajar Dasar Git dengan GitHub"),
  dicoding("Memulai Dasar Pemrograman untuk Menjadi Pengembang", "Memulai Dasar Pemrograman untuk Menjadi Pengembang"),
  dicoding("Pengenalan ke Logika Pemrograman (Programming Logic 101)", "Pengenalan ke Logika Pemrograman (Programming Logic 101)"),
  dicoding("Introduction to Financial Literacy", "Introduction to Financial Literacy"),
  aws("AWS Foundations: Getting Started with the AWS Cloud Essentials", "AWS Foundations Getting Started with the AWS Cloud Essentials"),
  aws("Introduction to Amazon EC2"),
  aws("Introduction to Amazon Simple Storage Service - S3"),
  aws("Introduction to Amazon Virtual Private Cloud - VPC"),
  aws("Introduction to AWS Identity and Access Management - IAM"),
  aws("Introduction to Amazon CloudFront"),
  aws("AWS Billing and Cost Management"),
  aws("Getting Started with Cloud Acquisition"),
  aws("Job Roles in the Cloud"),
];
