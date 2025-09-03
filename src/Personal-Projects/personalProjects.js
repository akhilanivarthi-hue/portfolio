import React from "react";
import "./personalProjects.css";

function Personal() {
  return (
    <section className="personal-container">
      <h1 className="personal-h1">Work Experience</h1>

      {/* Wells Fargo */}
      <article className="experience-card card--wf">
        <header className="experience-header">
          <h2 className="experience-company">Wells Fargo</h2>
          <div className="experience-divider" />
        </header>

        <p className="experience-body">
          I build accessible, responsive interfaces with HTML, JavaScript, and reusable React components on a Scrum team.
          Week to week, I collaborate with designers and backend engineers to plan, implement, and ship new screens for
          the Wells Fargo app (WebView) and the mobile browser experience. Our team introduced a decoupled front-end
          architecture for the first time at the company, establishing shared component patterns and clean data contracts
          that make features easier to build, test, and extend. I also authored most of our BDD test scripts and wired
          automation into the pipeline to keep releases fast and reliable. We validate cross-browser/device behavior with
          BrowserStack, track work in Jira, and ship via Jenkins CI/CD. Throughout, I focus on performance, accessibility,
          and polishing UX details so complex flows feel simple.
        </p>

        <h3 className="highlights-title">Highlights</h3>
        <ul className="highlights-list">
          <li className="highlight-item">
            Introduced and helped roll out the org’s first decoupled front-end architecture (clear interfaces, shared
            components, parallel delivery).
          </li>
          <li className="highlight-item">
            Built and shipped WebView and mobile-web screens end-to-end with React.
          </li>
          <li className="highlight-item">
            Wrote the majority of BDD scripts for the project and integrated automated testing.
          </li>
          <li className="highlight-item">
            Ensured coverage with BrowserStack; managed scope/velocity in Jira; automated pipelines with Jenkins.
          </li>
          <li className="highlight-item">
            Ensured features meet accessibility standards.
          </li>
        </ul>
      </article>

      {/* IBM */}
      <article className="experience-card card--ibm">
        <header className="experience-header">
          <h2 className="experience-company">IBM — Client Engineering Design</h2>
          <div className="experience-divider" />
        </header>

        <p className="experience-body">
          I worked with IBM’s Client Engineering design team on fast-paced engagements, balancing facilitation, research,
          and hands-on design. I facilitated a workshop for the FSM design community, built collaboration boards for
          client sessions (including New York Life), explored Watson Code Assistant through rapid research and a team
          presentation, and contributed wireframes and a lightweight web page concept using Figma and W3 Publisher.
          The focus was clear communication, tight feedback loops, and artifacts teams could use right away.
        </p>

        <h3 className="highlights-title">Highlights</h3>
        <ul className="highlights-list">
          <li className="highlight-item">
            Facilitation & leadership: planned and led a workshop for the FSM design community, sharpening facilitation,
            pacing, and group dynamics.
          </li>
          <li className="highlight-item">
            Client collaboration assets: built Mural boards and activities for client engagements (incl. New York Life) to
            align stakeholders, capture needs, and map flows.
          </li>
          <li className="highlight-item">
            Product research: investigated Watson Code Assistant, synthesized findings, presented to the team, and
            incorporated constructive feedback.
          </li>
          <li className="highlight-item">
            Design & prototyping: created wireframes in Figma and explored W3 Publisher to design a simple web page
            concept, contributing production-ready artifacts.
          </li>
        </ul>
      </article>
    </section>
  );
}

export default Personal;
