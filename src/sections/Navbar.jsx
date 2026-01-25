import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Navigation({ setCategory, isMobile, activeSection }) {
  const handleWorkClick = (cat) => {
    if (setCategory) {
      setCategory(cat);
    }
    const section = document.querySelector("#work");
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Work", href: "#work", isDropdown: true },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <ul className="nav-ul">
      {navLinks.map((link) => (
        <li key={link.name} className="nav-li group relative">
          <a
            className={`nav-link transition-colors duration-300 ${
              activeSection === link.name.toLowerCase()
                ? "text-white font-bold after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-0.5 after:bg-white after:rounded-full"
                : "text-neutral-400 hover:text-white"
            }`}
            href={link.href}
            onClick={link.isDropdown && isMobile ? (e) => e.preventDefault() : undefined}
          >
            {link.name}
          </a>
          
          {link.isDropdown && !isMobile && (
            <div className="absolute left-1/2 -translate-x-1/2 pt-4 hidden group-hover:block transition-all duration-300">
              <div className="bg-black/90 backdrop-blur-xl border border-white/10 rounded-xl p-2 flex flex-col gap-1 shadow-[0_0_20px_rgba(0,0,0,0.5)] min-w-40">
                <button
                  onClick={() => handleWorkClick("technical")}
                  className="text-left text-sm font-medium text-gray-300 hover:text-cyan-400 hover:bg-white/5 px-4 py-3 rounded-lg transition-all duration-200"
                >
                  Data Science
                </button>
                <button
                  onClick={() => handleWorkClick("creative")}
                  className="text-left text-sm font-medium text-gray-300 hover:text-purple-400 hover:bg-white/5 px-4 py-3 rounded-lg transition-all duration-200"
                >
                  Creative
                </button>
              </div>
            </div>
          )}
        </li>
      ))}
      
      <li className="nav-li">
        <a
          href="/abdullahalfirdausnuzularesume.pdf"
          target="_blank"
          rel="noreferrer"
          className="nav-link font-bold text-gray-300 hover:text-white cursor-pointer"
        >
          Resume
        </a>
      </li>
    </ul>
  );
}

const Navbar = ({ setCategory }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Scroll to Top Button Logic
      if (window.scrollY > 500) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }

      // Active Section Logic
      const sections = ["home", "about", "work", "contact"];
      const scrollPosition = window.scrollY + 200; // Offset for better detection

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div className="fixed inset-x-0 z-40 w-full backdrop-blur-lg bg-primary/40 border-b border-white/5">
        <div className="mx-auto c-space max-w-7xl">
          <div className="flex items-center justify-between py-4 sm:py-0 h-16 sm:h-auto">
            <a
              href="/"
              className="text-2xl font-bold transition-colors text-white hover:text-gray-300"
            >
              Al-Firdaus
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex cursor-pointer text-white hover:text-gray-300 focus:outline-none sm:hidden"
            >
              <img
                src={isOpen ? "./assets/close.svg" : "./assets/menu.svg"}
                className="w-6 h-6"
                alt="toggle"
              />
            </button>
            <nav className="hidden sm:flex">
              <Navigation setCategory={setCategory} isMobile={false} activeSection={activeSection} />
            </nav>
          </div>
        </div>
        {isOpen && (
          <motion.div
            className="block overflow-hidden text-center sm:hidden bg-primary"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <nav className="py-5">
              <Navigation setCategory={setCategory} isMobile={true} activeSection={activeSection} />
            </nav>
          </motion.div>
        )}
      </div>

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            onClick={scrollToTop}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-8 right-8 z-50 flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 backdrop-blur-md shadow-2xl transition-all duration-500 group"
          >
            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-white/60 group-hover:text-white transition-colors">
              Back to Top
            </span>
            <div className="w-px h-4 bg-white/20 group-hover:bg-white/40 transition-colors" />
            <img
              src="/assets/arrow-up.svg"
              alt="Scroll to top"
              className="w-3 h-3 brightness-0 invert group-hover:-translate-y-1 transition-all duration-500"
            />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;