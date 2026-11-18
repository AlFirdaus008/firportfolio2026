import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const sections = [
  { id: "about", label: "About" },
  { id: "work", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "achievements", label: "Achievements" },
  { id: "certifications", label: "Certifications" },
  { id: "contact", label: "Contact" },
];

const documents = [
  { label: "Resume", href: "/abdullahalfirdausnuzularesume.pdf" },
  { label: "Portfolio PDF", href: "/abdullahalfirdausnuzulaportfolio.pdf" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [showScrollTop, setShowScrollTop] = useState(false);
  const toggleRef = useRef(null);

  useEffect(() => {
    const update = () => {
      setShowScrollTop(window.scrollY > 500);
      let current = "home";
      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element && element.getBoundingClientRect().top <= 160) current = section.id;
      }
      setActiveSection(current);
    };
    const onEscape = (event) => {
      if (event.key === "Escape" && isOpen) {
        setIsOpen(false);
        toggleRef.current?.focus();
      }
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    window.addEventListener("keydown", onEscape);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
      window.removeEventListener("keydown", onEscape);
    };
  }, [isOpen]);

  const navLinks = sections.map(({ id, label }) => (
    <li key={id}>
      <a href={`#${id}`} onClick={() => setIsOpen(false)} aria-current={activeSection === id ? "location" : undefined} className={`block rounded-sm py-2 text-lg md:text-base transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-aqua ${activeSection === id ? "font-bold text-white" : "text-neutral-400 hover:text-white"}`}>
        {label}
      </a>
    </li>
  ));

  return (
    <>
      <header className="fixed inset-x-0 z-40 w-full border-b border-white/5 bg-primary/60 backdrop-blur-lg">
        <div className="c-space mx-auto flex h-16 max-w-7xl items-center justify-between gap-6">
          <a href="#home" onClick={() => setIsOpen(false)} className="shrink-0 rounded-sm text-2xl font-bold text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-aqua">Al-Firdaus</a>
          <nav aria-label="Main navigation" className="hidden xl:block">
            <ul className="flex items-center gap-5">
              {navLinks}
              <li className="relative">
                <details className="group">
                  <summary className="cursor-pointer rounded-sm py-2 text-lg md:text-base font-bold text-neutral-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-aqua">Documents</summary>
                  <ul className="absolute right-0 mt-3 min-w-44 space-y-1 rounded-xl border border-white/10 bg-midnight p-2 shadow-xl">
                    {documents.map((doc) => <li key={doc.label}><a href={doc.href} target="_blank" rel="noreferrer" className="block rounded-lg px-4 py-3 text-lg md:text-base font-bold text-neutral-300 hover:bg-white/5 hover:text-white focus-visible:outline-2 focus-visible:outline-aqua">{doc.label}<span className="sr-only"> (opens in a new tab)</span></a></li>)}
                  </ul>
                </details>
              </li>
            </ul>
          </nav>
          <button ref={toggleRef} type="button" aria-label={isOpen ? "Close navigation" : "Open navigation"} aria-expanded={isOpen} aria-controls="mobile-navigation" onClick={() => setIsOpen(!isOpen)} className="cursor-pointer rounded-lg p-2 text-white focus-visible:outline-2 focus-visible:outline-aqua xl:hidden">
            <img src={isOpen ? "/assets/close.svg" : "/assets/menu.svg"} alt="" className="size-6" />
          </button>
        </div>
        <AnimatePresence>
          {isOpen && (
            <motion.nav id="mobile-navigation" aria-label="Mobile navigation" initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.2 }} className="overflow-hidden border-t border-white/5 bg-primary xl:hidden">
              <div className="c-space max-h-[calc(100dvh-4rem)] overflow-y-auto pb-6 pt-3">
                <ul className="space-y-1">{navLinks}</ul>
                <div className="mt-4 flex flex-wrap gap-5 border-t border-white/10 pt-4">
                  {documents.map((doc) => <a key={doc.label} href={doc.href} target="_blank" rel="noreferrer" onClick={() => setIsOpen(false)} className="rounded-sm py-2 text-lg md:text-base font-bold text-sand focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-aqua">{doc.label}<span className="sr-only"> (opens in a new tab)</span></a>)}
                </div>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </header>
      {showScrollTop && (
        <button type="button" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} aria-label="Back to top" className="fixed bottom-5 right-5 z-30 flex cursor-pointer items-center gap-3 rounded-full border border-white/10 bg-primary/80 p-3 shadow-lg backdrop-blur-md transition hover:bg-navy focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-aqua sm:px-5">
          <span className="hidden text-xs text-neutral-300 sm:inline">Back to Top</span><img src="/assets/arrow-up.svg" alt="" className="size-4" />
        </button>
      )}
    </>
  );
}
