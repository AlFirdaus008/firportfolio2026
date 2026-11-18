export const getProjectDestination = ({ dashboardUrl, href, links = [] }) => {
  if (dashboardUrl) return { href: dashboardUrl, label: "Live Dashboard" };

  const githubLink = [href, ...links.map((link) => link.href)].find((url) =>
    url?.startsWith("https://github.com/")
  );
  if (githubLink) return { href: githubLink, label: "View GitHub" };

  const fallback = href || links[0]?.href;
  return fallback ? { href: fallback, label: "View Project" } : null;
};
