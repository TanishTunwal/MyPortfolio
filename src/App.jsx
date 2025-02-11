import React, { useState } from "react";
import Header from "./assets/Header";
import Footer from "./assets/Footer";
import Home from "./assets/Home";
import About from "./assets/About";
import Projects from "./assets/Projects";
import Skills from "./assets/Skills";
import BackgroundImagePage from "./assets/BackgroundImagePage";

function App() {
  return (
    <div>
      <BackgroundImagePage>
        <Header /> 
        <div className="snap-y snap-mandatory h-screen overflow-y-scroll scroll-smooth">
          <section id="home" className="snap-start h-screen flex justify-center items-center">
            <Home />
          </section>
          <section id="about" className="snap-start h-screen flex justify-center items-center">
            <About />
          </section>
          <section id="projects" className="snap-start h-screen flex justify-center items-center">
          <Projects />
          </section>
          <section id="skills" className="snap-start h-screen flex justify-center items-center">
            <Skills />
          </section>
        </div>
        <Footer />
      </BackgroundImagePage>
    </div>
  );
}

export default App;
