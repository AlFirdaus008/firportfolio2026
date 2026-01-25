import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Analytics } from "@vercel/analytics/react";

import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Experiences from "./sections/Experiences";
import CategoryToggle from "./components/CategoryToggle";
import Testimonial from "./sections/Testimonial";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import NotFound from "./sections/NotFound";
import SEO from "./components/SEO";

const Home = () => {
  const [category, setCategory] = useState("technical");

  return (
    <div className="container mx-auto max-w-7xl">
      <SEO />
      <Navbar setCategory={setCategory} />
      <Hero />
      <About />
      <CategoryToggle category={category} setCategory={setCategory} />
      <Projects category={category} />
      <Experiences category={category} />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  );
};

const App = () => {
  return (
    <>
      <Helmet>
        <title>Al-Firdaus | Data Scientist & Video Editor</title>
        <meta
          name="description"
          content="Portfolio of Al-Firdaus Nuzula. Bridging data insights with creative storytelling through Data Science and Professional Video Editing."
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