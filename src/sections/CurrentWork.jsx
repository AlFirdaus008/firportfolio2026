import { currentOrganizations } from "../constants/currentWork";
import { formatWorkPeriod, getWorkDuration } from "../utils/workDuration";

export default function CurrentWork() {
  return (
    <section aria-labelledby="current-work-heading" className="c-space relative z-10 mt-8">
      <h2 id="current-work-heading" className="mb-4 text-sm font-medium text-neutral-400">Current Work</h2>
      <div className="grid border-y border-white/10 sm:grid-cols-3">
        {currentOrganizations.map((organization) => (
          <a key={organization.id} href={organization.href} target="_blank" rel="noopener noreferrer" className="group flex min-w-0 items-center gap-4 rounded-sm py-6 transition-colors hover:bg-white/[0.025] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-aqua sm:flex-col sm:items-start sm:pr-5 lg:flex-row lg:items-center">
            <span className="flex h-16 w-28 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-white px-2 py-1.5">
              <img src={organization.logo} alt={`${organization.name} logo`} width="112" height="64" className="h-full w-full object-contain" />
            </span>
            <span className="min-w-0">
              <span className="block text-sm font-medium text-neutral-200 group-hover:text-white">{organization.name}</span>
              <span className="mt-1.5 block text-xs leading-relaxed text-neutral-400">{organization.role}</span>
              <span className="mt-2 block text-xs leading-relaxed text-neutral-400"><time dateTime={organization.startMonth}>{formatWorkPeriod(organization.startMonth)}</time></span>
              <span className="mt-1 block text-xs text-sand">{getWorkDuration(organization.startMonth)}</span>
            </span>
            <span className="sr-only"> (opens the organization profile in a new tab)</span>
          </a>
        ))}
      </div>
    </section>
  );
}
