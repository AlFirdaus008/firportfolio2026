// Copy follows the public repositories and the owner's CV.
export const projectStories = {
  8: {
    shortTitle: "SPECTRA",
    focus: "Geospatial research",
    featuredOrder: 1,
    summary: "Preparing geospatial evidence to study flood vulnerability and spatial priorities in the Mahakam Watershed.",
    result: "2nd Place · BRINATHON 2026",
    description: "SPECTRA brings together land-use and environmental data for flood vulnerability research in the Mahakam Watershed. The team project won second place in BRINATHON 2026's Earth, Space, and Maritime Cluster.",
    caseStudy: [
      { heading: "The problem", text: "Mining permits, plantation permits, and land-cover data arrive in different formats and coordinate systems. They need to be checked and aligned before they can support spatial analysis." },
      { heading: "My contribution", text: "I worked on geospatial data acquisition, validation, and feature preparation with Team UNESA 1 Langkah Didepan. This included checking source records, geometry, coverage, and analytical readiness." },
      { heading: "Approach", text: "The repository records data sources and validation steps, then separates raw data, working copies, and derived features. Readiness checks keep unresolved data issues visible before further analysis." },
      { heading: "Outcome", text: "The project received second place at BRINATHON 2026. The dashboard and repository document the research; the current repository also records outstanding data-validation and reproducibility work." },
    ],
  },
  11: {
    shortTitle: "MortalTrace",
    focus: "Predictive analytics",
    featuredOrder: 2,
    summary: "Examining pneumonia mortality across Indonesian provinces and the factors associated with regional differences.",
    result: "34 provinces · 2018–2023",
    description: "MortalTrace examines pneumonia mortality across 34 Indonesian provinces from 2018 to 2023. It combines regional comparisons, predictive models, and a dashboard for exploring the findings.",
    caseStudy: [
      { heading: "The problem", text: "Mortality differs across provinces. The project examines how those differences relate to poverty, population density, and access to services." },
      { heading: "My contribution", text: "I worked on the data mining and predictive analytics workflow, including regional pattern analysis, model evaluation, and presenting results through the dashboard." },
      { heading: "Approach", text: "The analysis combines clustering, association rules, and ensemble regression. Models train on 2018–2022 data and are tested on 2023; SHAP helps explain the XGBoost predictions." },
      { heading: "Results and limits", text: "XGBoost achieved a test R² of 0.8434, while province-grouped cross-validation R² was 0.1950. That gap limits how confidently the model can generalize across provinces. Poverty was the strongest predictor in the SHAP analysis; this is an association, not proof of causation." },
    ],
  },
  10: {
    shortTitle: "Energy & Economy Data Warehouse",
    focus: "Data engineering",
    featuredOrder: 3,
    summary: "Combining electricity and economic data in a scheduled pipeline so the datasets can be queried together.",
    result: "Daily ETL · PostgreSQL star schema",
    description: "This warehouse combines U.S. electricity data from the EIA with World Bank economic indicators. An Airflow pipeline handles extraction, transformation, and loading into Supabase PostgreSQL.",
    caseStudy: [
      { heading: "The problem", text: "Electricity and economic indicators come from separate sources, with different formats and time periods. Comparing them requires a consistent analytical dataset." },
      { heading: "My contribution", text: "I worked on the Python ETL workflow, data transformation, and dimensional model, connecting the source data to a PostgreSQL warehouse." },
      { heading: "Approach", text: "The Airflow DAG extracts EIA retail and generation data alongside World Bank CSV data. It transforms the records into a star schema and loads the warehouse on a daily schedule." },
      { heading: "Outcome", text: "The repository contains the scheduled DAG, analysis notebooks, and project reports. The warehouse provides structured data for energy and economic queries; this project is documented on GitHub." },
    ],
  },
  9: {
    summary: "Comparing disaster vulnerability across Indonesian provinces through spatial machine learning and an interactive map.",
    description: "This project uses multi-source data and spatial ensemble machine learning to examine disaster vulnerability across Indonesian provinces.",
    caseStudy: [
      { heading: "The problem", text: "Regional disaster risk depends on several factors. A province-level view helps compare vulnerability patterns across Indonesia." },
      { heading: "My contribution", text: "I worked on data integration, spatial machine learning experiments, and presenting regional results through a web dashboard." },
      { heading: "Approach and output", text: "The project combines multiple data sources for regional prediction. The repository includes the experimentation notebook and technical report, with an interactive dashboard for exploring the maps." },
    ],
  },
  1: {
    title: "FoodStock: Restaurant Inventory Management",
    summary: "Tracking kitchen ingredients, stock movements, and items that need replenishing.",
    description: "FoodStock is a Python inventory application built for a Data Structures and Algorithms course. It organizes restaurant ingredients and helps users identify low stock.",
    subDescription: ["Organized ingredients by category and added stock-in and stock-out records.", "Applied Merge Sort and Interpolation Search to organize and retrieve inventory records.", "Used JSON files to save inventory between sessions."],
  },
  2: {
    summary: "Encrypting messages and verifying document integrity through a Python API.",
    description: "A FastAPI service for encrypted communication, digital signatures, and document-integrity checks.",
    subDescription: ["Implemented RSA-PSS, ECDSA, and EdDSA signing, alongside hybrid AES-256-GCM/RSA-OAEP encryption.", "Added JWT authentication for API access and cryptographic hashes for document verification.", "Built a digital notary workflow for signing PDF documents and checking whether their contents changed."],
  },
  3: {
    summary: "Designing travel-booking flows around the needs of different traveler groups.",
    description: "A Figma prototype for a travel-booking application, covering flights, hotels, and transportation.",
    subDescription: ["Used research and personas to distinguish solo, family, business, and backpacker needs.", "Applied K-Means to examine satisfaction patterns and inform interface decisions.", "Designed connected login, home, order, and deal screens with reusable components."],
  },
  4: {
    summary: "Cleaning BPS datasets to compare education, poverty, and unemployment across 38 provinces.",
    description: "A data preparation and exploratory analysis project using BPS data from 2019 to 2023.",
    subDescription: ["Combined CSV, JSON, and PDF sources in a Python ETL workflow.", "Standardized regional names, handled missing values, and checked outliers before comparing indicators.", "Used exploratory analysis to examine relationships between education, unemployment, and poverty. These comparisons describe associations rather than causal effects."],
  },
  5: {
    summary: "Identifying telecom customers at risk of leaving so retention efforts can be better targeted.",
    description: "A comparison of Decision Tree, Naive Bayes, and MLP models for telecom customer churn prediction.",
    subDescription: ["Prepared approximately 4,230 customer records with encoding, scaling, and checks for data leakage.", "Applied SMOTE to address class imbalance and compared recall across the three models.", "Naive Bayes achieved 82% recall, compared with 68% for Decision Tree and 79% for MLP in the project evaluation."],
  },
  6: {
    title: "Indonesian Public Opinion: Sentiment & Forecasting",
    summary: "Analyzing YouTube comments to examine sentiment, discussion topics, and changes over time.",
    description: "An Indonesian-language NLP project using YouTube comments about the finance minister.",
    subDescription: ["Fine-tuned IndoBERT on 1,000 balanced comments, reaching 93.93% validation accuracy in the project evaluation.", "Compared topic-clustering methods, with TF-IDF and K-Means identifying five discussion groups.", "Used Prophet to examine sentiment trends over time, with text preprocessing and visualizations to interpret the comments."],
  },
  7: {
    summary: "Distinguishing eight vehicle sound categories after reducing noise in audio recordings.",
    description: "An acoustic classification project combining adaptive noise filtering, audio feature extraction, and machine learning.",
    subDescription: ["Applied LMS/RLS adaptive filtering before extracting audio features.", "Used Librosa to extract MFCC, spectral centroid, spectral rolloff, and zero-crossing rate.", "Built a Scikit-Learn classification workflow to compare the acoustic patterns of eight vehicle categories."],
  },
};
