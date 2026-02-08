import { FlipWords } from "./FlipWords";
import { motion } from "motion/react";

const HeroText = () => {
  const words = [
    "Creative Ideas",
    "Data Insights",
    "Video Editing",
    "Predictive Models",
  ];
  const variants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };
  return (
    <div className="z-10 mt-20 text-center md:mt-40 md:text-left rounded-3xl bg-clip-text">
      {/* Desktop View */}
      <div className="flex-col hidden md:flex c-space">
        <motion.h1
          className="text-4xl font-medium"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1 }}
        >
          Hi I'm Al-Firdaus
        </motion.h1>
        <div className="flex flex-col items-start">
          <motion.p
            className="text-5xl font-medium text-neutral-300"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.2 }}
          >
            A Data Scientist <br /> and Creative Desingner for
          </motion.p>
          <motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.5 }}
          >
            <FlipWords
              words={words}
              className="font-black text-white text-8xl"
            />
          </motion.div>
          <motion.p
            className="text-2xl font-medium text-neutral-300"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.8 }}
          >
            Where Analytical Logic meets Creative Design.
          </motion.p>
          <motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 2.1 }}
            className="mt-10"
          >
            <a
              href="/abdullahalfirdausnuzulaportfolio.pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white text-black font-bold hover:bg-neutral-200 transition-all group"
            >
              View Slide Portfolio
              <img
                src="/assets/arrow-up.svg"
                alt="arrow"
                className="w-4 h-4 rotate-45 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>
          </motion.div>
        </div>
      </div>
      {/* Mobile View */}
      <div className="flex flex-col items-center justify-center space-y-6 md:hidden w-full px-4">
        <motion.p
          className="text-4xl font-medium"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1 }}
        >
          Hi,I'm Al-Firdaus
        </motion.p>
        <div className="flex flex-col items-center text-center">
          <motion.p
            className="text-4xl font-medium text-neutral-300"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.2 }}
          >
            Building
          </motion.p>
          <motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.5 }}
          >
            <FlipWords
              words={words}
              className="font-bold text-white text-5xl sm:text-7xl"
            />
          </motion.div>
          <motion.p
            className="text-xl sm:text-2xl font-black text-neutral300 mt-2"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.8 }}
          >
            Where Analytical Logic meets Creative Design.
          </motion.p>
          <motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 2.1 }}
            className="mt-8"
          >
            <a
              href="/abdullahalfirdausnuzulaportfolio.pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black font-bold text-sm"
            >
              View Slide Portfolio
              <img
                src="/assets/arrow-up.svg"
                alt="arrow"
                className="w-3 h-3 rotate-45"
              />
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HeroText;
