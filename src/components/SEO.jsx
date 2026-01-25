import { Helmet } from "react-helmet-async";

const SEO = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Al-Firdaus Nuzula",
    "url": "https://alfirdaus.dev", // Ganti dengan domain asli nanti
    "image": "https://alfirdaus.dev/assets/coding-pov.png",
    "jobTitle": ["Data Scientist", "Video Editor", "Creative Director"],
    "worksFor": {
      "@type": "Organization",
      "name": "Freelance"
    },
    "sameAs": [
      "https://www.linkedin.com/in/alfirdausn/",
      "https://www.instagram.com/firdausanzl/",
      "https://www.youtube.com/@alfirdausn",
      "https://github.com/alfirdausn" // Asumsi jika ada
    ],
    "description": "Al-Firdaus Nuzula is a Data Scientist and Professional Video Editor bridging the gap between technical data insights and creative visual storytelling."
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
