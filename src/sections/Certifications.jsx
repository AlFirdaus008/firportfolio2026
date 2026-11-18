import { useState } from "react";
import { motion } from "motion/react";
import { certifications } from "../constants/portfolioUpdates";
import "./recognition.css";

const INITIAL_COUNT = 6;
const providers = ["All", "Dicoding", "AWS"];

export default function Certifications() {
  const [provider, setProvider] = useState("All");
  const [expanded, setExpanded] = useState(false);
  const filtered = certifications.filter((item) => provider === "All" || item.provider === provider);
  const visible = expanded ? filtered : filtered.slice(0, INITIAL_COUNT);

  return (
    <section id="certifications" aria-labelledby="certifications-heading" className="c-space recognition-section scroll-mt-24">
      <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.5 }}>
        <h2 id="certifications-heading" className="text-heading">Certifications & Training</h2>
        <div className="min-w-0">
          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2" role="group" aria-label="Filter certificates by provider">
            {providers.map((name) => (
              <button
                key={name}
                type="button"
                aria-pressed={provider === name}
                aria-controls="credential-list"
                onClick={() => { setProvider(name); setExpanded(false); }}
                className={`recognition-focus border-b pb-2 text-base transition-colors ${provider === name ? "border-sand text-sand" : "border-transparent text-neutral-400 hover:text-white"}`}
              >
                {name}
              </button>
            ))}
          </div>
          <p role="status" className="sr-only">Showing {visible.length} of {filtered.length} certificates{provider !== "All" ? ` from ${provider}` : ""}</p>
          <div className="mt-6 h-px w-full bg-linear-to-r from-transparent via-neutral-700 to-transparent" />
          <div id="credential-list">
            {visible.map((item) => (
              <div key={item.id}>
                <div className="flex flex-col gap-6 py-8 sm:flex-row sm:items-center sm:justify-between sm:gap-10 sm:py-10">
                  <div className="min-w-0">
                    <h3 className="text-2xl">{item.title}</h3>
                    <p className="mt-2 text-sm text-sand md:text-base">{item.issuer}</p>
                  </div>
                  <a
                    href={encodeURI(item.href)}
                    target="_blank"
                    rel="noreferrer"
                    className="recognition-focus hover-animation flex shrink-0 items-center gap-2 self-start rounded-sm sm:self-auto"
                    aria-label={`View certificate: ${item.title} (opens in a new tab)`}
                  >
                    View Certificate
                    <img src="/assets/arrow-right.svg" alt="" className="w-5" />
                  </a>
                </div>
                <div className="h-px w-full bg-linear-to-r from-transparent via-neutral-700 to-transparent" />
              </div>
            ))}
          </div>
          {filtered.length > INITIAL_COUNT && (
            <button
              type="button"
              aria-expanded={expanded}
              aria-controls="credential-list"
              onClick={() => setExpanded(!expanded)}
              className="recognition-focus hover-animation mt-8 inline-flex items-center gap-2 rounded-sm"
            >
              {expanded ? "Show Less" : "View All Certificates"}
              <img src="/assets/arrow-right.svg" alt="" className={`w-5 ${expanded ? "-rotate-90" : "rotate-90"}`} />
            </button>
          )}
        </div>
      </motion.div>
    </section>
  );
}
