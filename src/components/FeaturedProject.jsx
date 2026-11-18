import { getProjectDestination } from "../utils/projectLinks";
import { getProjectPath } from "../utils/projectNavigation";

export default function FeaturedProject({ project, onOpen }) {
  const destination = getProjectDestination(project);
  return (
    <article className="flex h-full min-w-0 flex-col gap-5">
      <a href={destination.href} target="_blank" rel="noopener noreferrer" draggable={false} aria-label={`${destination.label}: ${project.title} (opens in a new tab)`} className="group block shrink-0 cursor-pointer overflow-hidden rounded-xl border border-white/10 bg-navy/40 p-1.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-aqua">
        <img src={project.image} alt={`${project.shortTitle} project cover`} draggable={false} loading="lazy" className="aspect-video w-full rounded-lg object-contain" />
      </a>
      <div className="flex min-w-0 flex-1 flex-col">
        <p className="text-sm text-aqua">{project.focus}</p>
        <h3 className="mt-2 text-xl font-bold sm:text-2xl">{project.shortTitle}</h3>
        <p className="mt-3 text-sm leading-relaxed text-neutral-300">{project.summary}</p>
        <p className="mt-3 text-xs text-sand">{project.result}</p>
        <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-xs text-neutral-400">
          {project.tags.map((tag) => <span key={tag.id}>{tag.name}</span>)}
        </div>
        <div className="mt-auto flex flex-wrap items-center gap-x-5 gap-y-4 pt-6">
          <a href={getProjectPath(project)} onClick={onOpen} className="hover-animation inline-flex min-h-11 cursor-pointer items-center gap-2 rounded-sm text-sm font-medium focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-aqua" aria-label={`Read case study: ${project.title}`}>
            Read Case Study <img src="/assets/arrow-right.svg" alt="" className="w-5" />
          </a>
          <a href={destination.href} target="_blank" rel="noopener noreferrer" className="hover-animation inline-flex items-center gap-2 rounded-sm text-sm text-sand focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-aqua">
            {destination.label} <img src="/assets/arrow-up.svg" alt="" className="size-3 rotate-45" /><span className="sr-only"> (opens in a new tab)</span>
          </a>
        </div>
      </div>
    </article>
  );
}
