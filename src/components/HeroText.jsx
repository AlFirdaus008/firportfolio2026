import { FlipWords } from "./FlipWords";
import { motion } from "motion/react";
import { currentWorkSummary } from "../constants/currentWork";

const words = ["Data Insights", "Predictive Models", "Video Editing", "Motion Graphics"];
const variants = { hidden: { opacity: 0, x: -35 }, visible: { opacity: 1, x: 0 } };

const HeroText = () => (
  <div className="relative z-10 mt-28 w-full min-w-0 text-center md:mt-40 md:w-[75%] md:text-left">
    <motion.h1 variants={variants} initial="hidden" animate="visible" transition={{ delay: 0.6 }} className="text-3xl font-medium sm:text-4xl">
      Hi, I'm Al-Firdaus
    </motion.h1>
    <motion.div variants={variants} initial="hidden" animate="visible" transition={{ delay: 0.8 }} className="mt-6">
      <FlipWords words={words} className="max-w-full text-center text-[clamp(1.75rem,7.5vw,2.25rem)] font-black text-white sm:text-6xl md:text-left lg:text-7xl" />
    </motion.div>
    <motion.p variants={variants} initial="hidden" animate="visible" transition={{ delay: 1 }} className="mx-auto mt-3 max-w-2xl text-lg font-medium leading-relaxed text-neutral-300 sm:text-2xl md:mx-0">
      Data Science & AI Researcher | Creative Professional
    </motion.p>
    <motion.div variants={variants} initial="hidden" animate="visible" transition={{ delay: 1.2 }}>
      <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-neutral-300 sm:text-base md:mx-0">{currentWorkSummary}</p>
      <div className="mt-7 flex flex-wrap items-center justify-center gap-4 md:justify-start">
        <a href="#work" className="inline-flex items-center gap-3 rounded-full bg-white px-6 py-3 font-bold text-black transition hover:bg-neutral-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-aqua sm:px-8 sm:py-4">
          View Projects <img src="/assets/arrow-right.svg" alt="" className="size-4 brightness-0" />
        </a>
        <a href="/abdullahalfirdausnuzularesume.pdf" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-neutral-200 transition hover:border-white/40 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-aqua sm:py-4">
          Resume <img src="/assets/arrow-up.svg" alt="" className="size-4 rotate-45" /><span className="sr-only"> (opens in a new tab)</span>
        </a>
      </div>
    </motion.div>
  </div>
);

export default HeroText;
