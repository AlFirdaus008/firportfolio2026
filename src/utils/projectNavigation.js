const slugs = {
  technical: {
    1: "foodstock", 2: "cryptography-api", 3: "travel-app", 4: "data-wrangling",
    5: "customer-churn", 6: "youtube-sentiment", 7: "vehicle-audio-classification",
    8: "spectra", 9: "indonesia-disaster-vulnerability", 10: "energy-economy-warehouse", 11: "mortaltrace",
  },
  creative: {
    1: "spartan-2024", 2: "yamaha-fazzio-touring", 3: "yearbook-2024", 4: "agustusan-carnival-2024",
    5: "wedding-malang", 6: "pekan-raya-mahasiswa-2025", 7: "agustusan-2026", 8: "agustusan-tasyakuran-2025",
    9: "agustusan-competitions-2025", 10: "pkk-mothers-day-2025", 11: "halal-bihalal-2025",
    12: "agustusan-competitions-2024", 13: "community-recap", 14: "maxi-turbo-touring",
  },
};

export const getProjectSlug = (project) => slugs[project.category]?.[project.id] || `${project.category}-${project.id}`;
export const getProjectPath = (project) => `/?project=${encodeURIComponent(getProjectSlug(project))}`;
export const findProjectBySlug = (projects, slug) => projects.find((project) => getProjectSlug(project) === slug);

export function withProjectQuery(searchParams, project) {
  const next = new URLSearchParams(searchParams);
  if (project) next.set("project", getProjectSlug(project));
  else next.delete("project");
  return next;
}
