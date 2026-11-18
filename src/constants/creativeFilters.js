export const creativeFilters = ["All", "Events", "Automotive", "Motion Graphics", "Wedding"];

const projectTypes = { 2: "Automotive", 14: "Automotive", 5: "Wedding", 6: "Motion Graphics" };

// Each film has one primary category; general event films use Events.
export function getCreativeType(project) {
  return projectTypes[project.id] || "Events";
}

export function filterCreativeProjects(projects, filter) {
  return filter === "All" ? projects : projects.filter((project) => getCreativeType(project) === filter);
}
