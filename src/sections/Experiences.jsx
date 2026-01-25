import { Timeline } from "../components/Timeline";
import { experiences } from "../constants";
import { motion } from "motion/react";

const Experiences = ({ category }) => {
  const filteredExperiences = experiences.filter(
    (item) => item.category === category
  );

  return (
    <motion.div
      className="w-full"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <Timeline data={filteredExperiences} />
    </motion.div>
  );
};

export default Experiences;
