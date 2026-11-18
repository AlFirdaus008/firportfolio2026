import { useState } from "react";
import { motion } from "motion/react";
import { achievements } from "../constants/portfolioUpdates";
import RecognitionIcon from "../components/RecognitionIcon";
import AchievementDialog from "../components/AchievementDialog";
import "./recognition.css";

const reveal = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.1 },
  transition: { duration: 0.5 },
};

export default function Achievements() {
  const [selected, setSelected] = useState(null);
  const [featured, ...others] = achievements;
  const competitions = others.slice(0, 2);
  const filmAwards = others.slice(2);

  return (
    <section id="achievements" aria-labelledby="achievements-heading" className="c-space recognition-section scroll-mt-24">
      <motion.div {...reveal} className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
        <div>
          <h2 id="achievements-heading" className="text-heading">Achievements</h2>
        </div>
      </motion.div>

      <div className="grid gap-5 lg:grid-cols-5">
        <motion.article {...reveal} className="achievement-feature relative overflow-hidden rounded-2xl border border-sand/20 lg:col-span-3">
          <div className="relative p-6 sm:p-8">
            <div className="flex items-center justify-between gap-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-sand/25 bg-sand/10 px-3 py-1.5 text-xs font-medium text-sand"><RecognitionIcon name="trophy" className="size-4" /> {featured.award}</span>
              <span className="text-sm text-neutral-400">{featured.year}</span>
            </div>
            <h3 className="mt-6 text-3xl font-bold sm:text-4xl">{featured.title}</h3>
            <p className="mt-2 text-sm text-sand">Earth, Space, and Maritime Cluster</p>
            <p className="mt-4 max-w-lg text-sm leading-relaxed text-neutral-300">{featured.description}</p>
          </div>
          <button type="button" onClick={() => setSelected(featured)} className="recognition-focus group relative mx-6 block w-[calc(100%-3rem)] overflow-hidden rounded-xl border border-white/10 bg-midnight p-2 text-left sm:mx-8 sm:w-[calc(100%-4rem)]" aria-label="View BRINATHON 2026 certificate">
            <img src={featured.image} alt="BRINATHON 2026 second-place certificate" width="1755" height="1241" loading="lazy" className="aspect-[1.414] w-full rounded-lg object-contain transition duration-500 group-hover:scale-[1.025]" />
            <span className="absolute bottom-4 right-4 flex items-center gap-2 rounded-full border border-white/20 bg-midnight/90 px-4 py-2 text-xs text-white backdrop-blur-md">View certificate <RecognitionIcon className="size-4" /></span>
          </button>
          <div className="relative flex flex-wrap items-center justify-between gap-3 p-6 text-xs text-neutral-400 sm:px-8">
            <span>BRIN · IRIFair 2026</span>
            <span>Team UNESA 1 Langkah Didepan</span>
          </div>
        </motion.article>

        <div className="grid gap-5 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-1">
          {competitions.map((item, index) => (
            <motion.article key={item.id} {...reveal} transition={{ duration: 0.5, delay: index * 0.08 }} className="achievement-secondary flex flex-col justify-between overflow-hidden rounded-2xl border border-white/10 p-6 sm:p-7">
              <div>
                <div className="flex items-center justify-between text-xs"><span className="text-aqua">{item.award}</span><span className="text-neutral-500">{item.year}</span></div>
                <h3 className="mt-4 text-xl font-bold sm:text-2xl">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-neutral-400">{item.description}</p>
              </div>
              <button type="button" onClick={() => setSelected(item)} className="recognition-focus group mt-6 flex w-full items-center gap-4 rounded-xl border border-white/5 bg-white/[0.025] p-3 text-left transition hover:border-aqua/30 hover:bg-white/5" aria-label={`View ${item.title} certificate`}>
                <img src={item.image} alt="" loading="lazy" className="h-14 w-20 shrink-0 rounded-md bg-white/5 object-contain" />
                <span className="flex-1 text-sm text-neutral-300">View certificate</span>
                <RecognitionIcon className="size-5 shrink-0 text-aqua transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </button>
            </motion.article>
          ))}
        </div>
      </div>

      <motion.div {...reveal} className="mt-12">
        <h3 className="text-2xl font-bold">Film Awards</h3>
        <div className="mt-8 h-px w-full bg-linear-to-r from-transparent via-neutral-700 to-transparent" />
        <div>
          {filmAwards.map((item) => (
            <div key={item.id}>
              <div className="flex flex-col gap-6 py-8 sm:flex-row sm:items-center sm:justify-between sm:gap-10 sm:py-10">
                <div className="min-w-0">
                  <h4 className="text-2xl">{item.award}</h4>
                  <p className="mt-2 text-sm text-sand md:text-base">
                    {item.title}{item.year ? ` · ${item.year}` : ""}
                  </p>
                  <p className="mt-2 text-sm text-neutral-400">{item.organizer}</p>
                </div>
                {item.image && (
                  <button
                    type="button"
                    onClick={() => setSelected(item)}
                    className="recognition-focus hover-animation flex shrink-0 items-center gap-2 self-start rounded-sm sm:self-auto"
                    aria-label={`View ${item.award} certificate`}
                  >
                    View Certificate
                    <img src="/assets/arrow-right.svg" alt="" className="w-5" />
                  </button>
                )}
              </div>
              <div className="h-px w-full bg-linear-to-r from-transparent via-neutral-700 to-transparent" />
            </div>
          ))}
        </div>
      </motion.div>
      {selected && <AchievementDialog achievement={selected} onClose={() => setSelected(null)} />}
    </section>
  );
}
