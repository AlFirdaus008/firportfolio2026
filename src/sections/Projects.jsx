import { useState } from "react";
import Project from "../components/Project";
import ProjectDetails from "../components/ProjectDetails";
import { myProjects } from "../constants";
import {
  motion,
  useMotionValue,
  useSpring,
  AnimatePresence,
} from "motion/react";

const Projects = ({ category }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { damping: 10, stiffness: 50 });
  const springY = useSpring(y, { damping: 10, stiffness: 50 });

  const handleMouseMove = (e) => {
    x.set(e.clientX + 20);
    y.set(e.clientY + 20);
  };

  const [preview, setPreview] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = myProjects.filter(
    (project) => project.category === category
  );

  const currentProjectIndex = selectedProject
    ? filteredProjects.findIndex((p) => p.id === selectedProject.id)
    : -1;

  const handleNext = () => {
    if (currentProjectIndex < filteredProjects.length - 1) {
      setSelectedProject(filteredProjects[currentProjectIndex + 1]);
    }
  };

  const handlePrev = () => {
    if (currentProjectIndex > 0) {
      setSelectedProject(filteredProjects[currentProjectIndex - 1]);
    }
  };

  return (
    <section
      onMouseMove={handleMouseMove}
      className="relative c-space section-spacing"
    >
      <h2 className="text-heading">
        {category === "technical" ? "Selected Projects" : "Creative Works"}
      </h2>
      <div className="bg-linear-to-r from-transparent via-neutral-700 to-transparent mt-12 h-px w-full" />

      <AnimatePresence mode="wait">
        <motion.div
          key={category}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project) => (
              <Project
                key={project.id}
                {...project}
                setPreview={setPreview}
                onOpen={() => setSelectedProject(project)}
              />
            ))
          ) : (
            <div className="text-center text-neutral-400 mt-10">
              <p>No projects listed for this category yet.</p>
            </div>
          )}
        </motion.div>
      </AnimatePresence>

      <AnimatePresence>
        {selectedProject && (
          <ProjectDetails
            key={selectedProject.id} // Add key to force re-render/animation on change if desired, or remove for smooth prop update
            {...selectedProject}
            closeModal={() => setSelectedProject(null)}
            onNext={handleNext}
            onPrev={handlePrev}
            hasNext={currentProjectIndex < filteredProjects.length - 1}
            hasPrev={currentProjectIndex > 0}
          />
        )}
      </AnimatePresence>

      {preview && (
        <motion.img
          className="fixed top-0 left-0 z-50 object-cover w-[320px] h-[224px] rounded-lg shadow-2xl pointer-events-none border border-white/10"
          src={preview}
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
