import React from 'react';
import App from './App';
import Projects from './Projects';
import wifire from './images/wifire.png';
import gitlit from './images/gitlit.png';
import garden from './images/garden.png';
import sonylearningpathway from './images/sonylearningpathway.png';

function HomePage() {
  return (
    <>
      <App />

      {/* Projects section heading + anchor */}
      <section id="projects" className="projects-section-home">
        <h2 className="projects-heading-home">Projects</h2>
      </section>

      {/* NEW: grid wrapper for 2x2 layout on desktop */}
      <section className="projects-grid-home">
        {/* Edit colors here (ImgBg) */}
        <Projects
          Title="WIFIRE Internship"
          Label="An interactive game that teaches people about prescribed burns."
          Image={wifire}
          Href="/wifire"
          ImgBg="#d8540c"        // orange
        />
        <Projects
          Title="Sony Connected Learning Pathway"
          Label="A phone-first concept that personalizes the shared TV experience."
          Image={sonylearningpathway}
          Href="/sony"
          ImgBg="#4884f4"        // blue
        />
        <Projects
          Title="GitLit"
          Label="A collaborative reading platform that combines reading, discussion, and examination."
          Image={gitlit}
          Href="https://sites.google.com/u/1/d/1AtBccyHbSBNCnykaTJlcBBonuqyAU3J7/p/1_tzXmUfkNIi9O5sjzC3t5PtW7McvLQEe/preview?authuser=1"
          ImgBg="#fcd464"        // yellow
        />
        <Projects
          Title="Garden of War"
          Label="A voice helper that keeps plant care on track."
          Image={garden}
          Href="/garden"
          ImgBg="#588c2c"        // green
        />
      </section>
    </>
  );
}

export default HomePage;
