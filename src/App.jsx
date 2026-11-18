import React, { useState } from "react";
import { Routes, Route, useSearchParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Analytics } from "@vercel/analytics/react";

import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import CurrentWork from "./sections/CurrentWork";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Experiences from "./sections/Experiences";
import Achievements from "./sections/Achievements";
import Certifications from "./sections/Certifications";
import CategoryToggle from "./components/CategoryToggle";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import NotFound from "./sections/NotFound";
import SEO from "./components/SEO";
import { myProjects } from "./constants";
import { findProjectBySlug } from "./utils/projectNavigation";

const Home = () => {
  const [searchParams] = useSearchParams();
  const linkedProject = findProjectBySlug(myProjects, searchParams.get("project"));
  const [chosenCategory, setCategory] = useState(() => linkedProject?.category || "technical");
  const category = linkedProject?.category || chosenCategory;

  return (
    <div className="container mx-auto max-w-7xl">
      <SEO />
      <Navbar />
      <Hero />
      <CurrentWork />
      <About />
      <CategoryToggle category={category} setCategory={setCategory} />
      <Projects key={category} category={category} />
      <Experiences />
      <Achievements />
      <Certifications />
      <Contact />
      <Footer />
    </div>
  );
};

const App = () => {
  return (
    <>
      <Helmet>
        <title>Al-Firdaus | Data Science & AI Researcher | Creative Professional</title>
        <meta
          name="description"
          content="Data science research, predictive analytics, data engineering, and creative production by Al-Firdaus Nuzula. Explore projects, experience, and BRINATHON 2026 documentation."
        />
        <meta name="keywords" content="Data Scientist, Video Editor, Portfolio, React, Python, Creative" />
      </Helmet>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Analytics />
    </>
  );
};

export default App;
