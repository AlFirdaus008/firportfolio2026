import { useCallback, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Project from "../components/Project";
import ProjectCarousel from "../components/ProjectCarousel";
import ProjectDetails from "../components/ProjectDetails";
import { myProjects } from "../constants";
import { creativeFilters, filterCreativeProjects } from "../constants/creativeFilters";
import { findProjectBySlug, getProjectPath, withProjectQuery } from "../utils/projectNavigation";
import {
  motion as Motion,
  useMotionValue,
  useSpring,
  AnimatePresence,
} from "motion/react";

const Projects = ({ category }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { damping: 10, stiffness: 50 });
  const springY = useSpring(y, { damping: 10, stiffness: 50 });
  const previewRef = useRef(null);
  const pointerRef = useRef({ x: 0, y: 0 });

  const positionPreview = (clientX, clientY) => {
    const margin = 16;
    const gap = 20;
    const width = previewRef.current?.offsetWidth || 320;
    const height = previewRef.current?.offsetHeight || 224;
    const maxX = Math.max(margin, window.innerWidth - width - margin);
    const maxY = Math.max(margin, window.innerHeight - height - margin);
    const nextX = clientX + gap <= maxX ? clientX + gap : clientX - width - gap;
    const nextY = clientY + gap <= maxY ? clientY + gap : clientY - height - gap;

    x.set(Math.min(maxX, Math.max(margin, nextX)));
    y.set(Math.min(maxY, Math.max(margin, nextY)));
  };

  const handleMouseMove = (e) => {
    pointerRef.current = { x: e.clientX, y: e.clientY };
    positionPreview(e.clientX, e.clientY);
  };

  const [preview, setPreview] = useState(null);
  const [expanded, setExpanded] = useState(false);
  const [creativeFilter, setCreativeFilter] = useState("All");
  const location = useLocation();
  const navigate = useNavigate();
  const linkedProject = findProjectBySlug(myProjects, new URLSearchParams(location.search).get("project"));
  const selectedProject = linkedProject?.category === category ? linkedProject : null;

  const categoryProjects = myProjects.filter(
    (project) => project.category === category
  ).sort((a, b) => (a.featuredOrder || Infinity) - (b.featuredOrder || Infinity));
  const filteredProjects = category === "creative" ? filterCreativeProjects(categoryProjects, creativeFilter) : categoryProjects;
  const featuredProjects = filteredProjects.filter((project) => project.featuredOrder);
  const additionalProjects = filteredProjects.filter((project) => !project.featuredOrder);

  const setProjectLocation = useCallback((project, replace = false) => {
    const search = withProjectQuery(location.search, project).toString();
    navigate({ pathname: location.pathname, search: search ? `?${search}` : "", hash: location.hash }, { replace, preventScrollReset: true });
  }, [location.pathname, location.search, location.hash, navigate]);

  const closeProject = useCallback(() => setProjectLocation(null, true), [setProjectLocation]);

  const openProject = (project, event) => {
    if (event && (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0)) return;
    event?.preventDefault();
    setPreview(null);
    setProjectLocation(project);
  };

  // A shared URL can point to a film outside the currently selected filter.
  const navigationProjects = selectedProject && !filteredProjects.includes(selectedProject) ? categoryProjects : filteredProjects;
  const currentProjectIndex = selectedProject
    ? navigationProjects.findIndex((p) => p.id === selectedProject.id)
    : -1;

  const handleNext = () => {
    if (currentProjectIndex < navigationProjects.length - 1) {
      setProjectLocation(navigationProjects[currentProjectIndex + 1], true);
    }
  };

  const handlePrev = () => {
    if (currentProjectIndex > 0) {
      setProjectLocation(navigationProjects[currentProjectIndex - 1], true);
    }
  };

  return (
    <section
      onMouseMove={handleMouseMove}
      id="projects"
      aria-labelledby="projects-heading"
      className="relative c-space mt-8 mb-8 scroll-mt-24"
    >
      <h2 id="projects-heading" className="text-heading">
        {category === "technical" ? "Selected Projects" : "Creative Works"}
      </h2>
      <div className="bg-linear-to-r from-transparent via-neutral-700 to-transparent mt-12 h-px w-full" />
      {category === "creative" && (
        <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 border-b border-white/10 pb-3" role="group" aria-label="Filter creative projects">
          {creativeFilters.map((filter) => (
            <button key={filter} type="button" aria-pressed={creativeFilter === filter} aria-controls="additional-projects" onClick={() => { setPreview(null); setCreativeFilter(filter); }} className={`min-h-11 cursor-pointer rounded-sm border-b-2 px-1 text-sm transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-aqua ${creativeFilter === filter ? "border-sand text-white" : "border-transparent text-neutral-400 hover:text-white"}`}>
              {filter}<span className="ml-2 text-xs text-neutral-400">{filterCreativeProjects(categoryProjects, filter).length}</span>
            </button>
          ))}
          <p className="sr-only" role="status">{filteredProjects.length} creative projects shown.</p>
        </div>
      )}

      <AnimatePresence mode="wait">
        <Motion.div
          key={category}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          {filteredProjects.length > 0 ? (
            <>
              {featuredProjects.length > 0 && <ProjectCarousel projects={featuredProjects} onOpen={openProject} />}
              {featuredProjects.length > 0 && additionalProjects.length > 0 && (
                <button type="button" aria-expanded={expanded} aria-controls="additional-projects" onClick={() => { setPreview(null); setExpanded(!expanded); }} className="hover-animation my-8 inline-flex items-center gap-3 rounded-sm text-neutral-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-aqua">
                  {expanded ? "Show Fewer Projects" : `View All ${filteredProjects.length} Projects`}
                  <img src="/assets/arrow-right.svg" alt="" className={`w-5 ${expanded ? "-rotate-90" : "rotate-90"}`} />
                </button>
              )}
              <div id="additional-projects" hidden={featuredProjects.length > 0 && !expanded}>
                {featuredProjects.length > 0 && <h3 className="mb-2 mt-3 text-xl font-medium text-neutral-300">More Projects</h3>}
                {additionalProjects.map((project) => (
                  <Project
                    key={project.id}
                    {...project}
                    projectPath={getProjectPath(project)}
                    setPreview={setPreview}
                    onOpen={(event) => openProject(project, event)}
                  />
                ))}
              </div>
            </>
          ) : (
            <div className="text-center text-neutral-400 mt-10">
              <p>No projects listed for this category yet.</p>
            </div>
          )}
        </Motion.div>
      </AnimatePresence>

      <AnimatePresence>
        {selectedProject && (
          <ProjectDetails
            key="project-details"
            {...selectedProject}
            projectPath={getProjectPath(selectedProject)}
            closeModal={closeProject}
            onNext={handleNext}
            onPrev={handlePrev}
            hasNext={currentProjectIndex < navigationProjects.length - 1}
            hasPrev={currentProjectIndex > 0}
          />
        )}
      </AnimatePresence>

      {preview && (
        <Motion.img
          ref={previewRef}
          className="fixed top-0 left-0 z-50 h-auto w-auto max-w-[min(320px,calc(100vw-32px))] max-h-[min(224px,calc(100dvh-32px))] object-contain rounded-lg bg-midnight shadow-2xl pointer-events-none border border-white/10"
          src={preview}
          alt=""
          onLoad={() => positionPreview(pointerRef.current.x, pointerRef.current.y)}
          style={{ x: springX, y: springY }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
        />
      )}
    </section>
  );
};

export default Projects;
