import { getProjectDestination } from "../utils/projectLinks";

const Project = ({
  title,
  summary,
  dashboardUrl,
  href,
  links,
  category,
  image,
  tags,
  setPreview,
  onOpen,
  projectPath,
}) => {
  const destination = getProjectDestination({ dashboardUrl, href, links });

  return (
    <>
      <div
        className="flex flex-col gap-6 py-8 md:flex-row md:items-center md:justify-between md:gap-10 md:py-10"
        onMouseEnter={() => {
          if (window.matchMedia("(pointer: fine)").matches) {
            setPreview(image);
          }
        }}
        onMouseLeave={() => setPreview(null)}
      >
        <div className="min-w-0 md:flex-1">
          <h3 className="text-2xl">{title}</h3>
          {summary && <p className="mt-3 max-w-2xl text-sm leading-relaxed text-neutral-400 md:text-base">{summary}</p>}
          <div className="flex flex-wrap gap-x-4 gap-y-2 mt-2 text-sand">
            {tags.map((tag) => (
              <span key={tag.id} className="text-sm md:text-base whitespace-nowrap">{tag.name}</span>
            ))}
          </div>
        </div>
        <div className="flex shrink-0 flex-wrap items-center gap-x-6 gap-y-4">
          {category === "technical" && destination && (
            <a
              href={destination.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${destination.label}: ${title} (opens in a new tab)`}
              className="flex items-center gap-1 rounded-sm text-sand hover-animation focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-aqua"
            >
              {destination.label}
              <img src="/assets/arrow-up.svg" alt="" className="size-4 rotate-45" />
            </a>
          )}
          <a
            href={projectPath}
            onClick={onOpen}
            className="flex min-h-11 items-center gap-1 rounded-sm cursor-pointer hover-animation focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-aqua"
          >
            Read More
            <img src="assets/arrow-right.svg" alt="" className="w-5" />
          </a>
        </div>
      </div>
      <div className="bg-linear-to-r from-transparent via-neutral-700 to-transparent h-px w-full" />
    </>
  );
};

export default Project;
