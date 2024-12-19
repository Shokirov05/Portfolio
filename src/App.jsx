import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Interview from "./pages/InterviewTest";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import useScroll from './hooks/useScroll';
import NotFound from "./pages/NotFound";

const App = () => {
  const scrolled = useScroll(0.05);  

  return (
    <div>
      <Navbar scrolled={scrolled} />  
      <Routes>
        <Route path="/" element={<Home scrolled={scrolled} />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/interview" element={<Interview />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
