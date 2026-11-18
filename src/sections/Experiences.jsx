import { Timeline } from "../components/Timeline";
import { experiences } from "../constants";
import { motion } from "motion/react";

const Experiences = () => {
  const technical = experiences.filter((item) => item.category === "technical");
  const creative = experiences.filter((item) => item.category === "creative");

  return (
    <motion.div
      id="experience"
      aria-labelledby="experience-heading"
      className="c-space mt-20 w-full scroll-mt-24 md:mt-30"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <h2 id="experience-heading" className="text-heading">Experience</h2>
      <div className="mt-8 border-y border-white/10 py-6 sm:flex sm:items-start sm:justify-between sm:gap-8">
        <div>
          <h3 className="text-lg font-medium">BSc Data Science · State University of Surabaya</h3>
          <p className="mt-2 text-sm leading-relaxed text-neutral-400">
            <a href="https://datascience.fmipa.unesa.ac.id/" target="_blank" rel="noopener noreferrer" title="Data Science · State University of Surabaya" className="rounded-sm underline decoration-white/25 underline-offset-4 transition-colors hover:text-aqua hover:decoration-aqua focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-aqua">
              International Class<span className="sr-only"> (opens the study program website in a new tab)</span>
            </a>
            {" · Class of 2024 · Year 3 · Semester 5"}
          </p>
        </div>
        <p className="mt-3 shrink-0 text-sm text-sand sm:mt-1">2024 – Present</p>
      </div>
      <Timeline data={technical} title="Research & Teaching" />
      <Timeline data={creative} title="Creative Production" />
    </motion.div>
  );
};

export default Experiences;
