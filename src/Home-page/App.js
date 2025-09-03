import './App.css';
import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

function App() {
  const navigate = useNavigate();
  const { hash } = useLocation();

  // Smooth-scroll to in-page anchors (e.g., #projects, #goldenticket)
  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.replace('#', ''));
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [hash]);

  const handleAboutClick = (e) => {
    e.preventDefault();
    navigate('/about');
  };

  return (
    <section className="hero-home">
      <div className="container-home">
        <p className="intro-home">
          <a href="/about" className="name-home" onClick={handleAboutClick}>Akhila</a>
          &nbsp;is an aspiring product designer focused on thoughtful, memorable user experiences.
        </p>

        <div className="info-home">
          <h2>
            Currently: Working at{" "}
            <a className="name-home" target="_blank" rel="noopener noreferrer" href="https://www.wellsfargo.com/">
              Wells Fargo
            </a>{" "}
            as a react developer
          </h2>
          <h2>
            Previously: Worked at{" "}
            <a className="name-home" target="_blank" rel="noopener noreferrer" href="https://www.ibm.com/us-en">
              IBM
            </a>{" "}
            as a design intern
          </h2>
          <h2>
            Education:{" "}
            <a className="name-home" target="_blank" rel="noopener noreferrer" href="https://cogsci.ucsd.edu/">
              Cognitive Science
            </a>{" "}
            (Design and Interaction) at UC San Diego
          </h2>
        </div>
      </div>
    </section>
  );
}

export default App;
