import { Helmet } from "react-helmet-async";

const SEO = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Al-Firdaus Nuzula",
    "url": "https://alfirdaus.vercel.app",
    "jobTitle": ["Data Science & AI Researcher", "Creative Professional"],
    "worksFor": {
      "@type": "Organization",
      "name": "Freelance"
    },
    "sameAs": [
      "https://www.linkedin.com/in/alfirdausn/",
      "https://www.instagram.com/firdausanzl/",
      "https://www.youtube.com/@alfirdausn",
      "https://github.com/AlFirdaus008"
    ],
    "description": "Al-Firdaus Nuzula is a Data Science student in the International Class at State University of Surabaya, class of 2024. His work includes AI research, data analysis, and creative production."
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schemaData)}
      </script>
    </Helmet>
  );
};

export default SEO;
