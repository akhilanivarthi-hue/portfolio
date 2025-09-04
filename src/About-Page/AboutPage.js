import React, { useEffect } from "react";
import "./About.css";

function AboutPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const meSrc = `${process.env.PUBLIC_URL}/images/about-images/me.jpg`;

  return (
    <section className="section-about">
      <div className="container-about">
        <h1 className="title-about">
          Hi everyone! I'm <span className="name-about">Akhila</span>
        </h1>

        <div className="intro-about">
          <div className="content-about">
            <p>
              I’m a recent UC San Diego grad, now building front-end experiences
              as a React developer at Wells Fargo. My Cognitive Science degree,
              with a focus on Human–Computer Interaction, has equipped me with
              the research and design skills to create products people remember
              and appreciate—I believe everyone deserves an incredible
              experience. Ambition and a drive to make a difference keep me
              moving.
            </p>
            <p>
              Outside of design, I’m into reading (mostly fiction and fantasy),
              singing, and binge-worthy TV.
            </p>
          </div>

          <img
            className="image-about"
            src={meSrc}
            alt="Akhila"
            loading="lazy"
          />
        </div>

        <p className="funfact-about">
          Fun fact: this website is coded fully in React by me!
        </p>

        <h2 className="experience-overview-about">
          A quick overview of my experience...
        </h2>

        <ul className="experience-list-about">
          <li className="experience-item-about">
            <span className="experience-role-about">
              Wells Fargo — React Developer
            </span>
            <span className="experience-time-about">
              September 2024 – present
            </span>
          </li>
          <li className="experience-item-about">
            <span className="experience-role-about">
              IBM — Client Engineering Design Intern
            </span>
            <span className="experience-time-about">
              June 2023 – August 2023
            </span>
          </li>
          <li className="experience-item-about">
            <span className="experience-role-about">
              Wifire Labs — Design Intern
            </span>
            <span className="experience-time-about">
              June 2022 – September 2022
            </span>
          </li>
          <li className="experience-item-about">
            <span className="experience-role-about">
              IBM Accelerate — Design Track
            </span>
            <span className="experience-time-about">
              June 2022 – August 2022
            </span>
          </li>
          <li className="experience-item-about">
            <span className="experience-role-about">
              Sony — Connected Learning Pathway
            </span>
            <span className="experience-time-about">
              September 2021 – November 2021
            </span>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default AboutPage;
