import React from "react";
import { NavLink } from "react-router-dom";
import "./homeButton.css";

function Button() {
  return (
    <section className="homebtn-wrap" aria-label="Back navigation">
      <NavLink to="/#top" className="project-button">
        Back to home
      </NavLink>
    </section>
  );
}

export default Button;
