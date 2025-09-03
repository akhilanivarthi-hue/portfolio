import React from "react";
import "./White.css";

function White({ Title, Image, Summary, Summary2, children, fullScreen = false }) {
  return (
    <section className={`background-white fullbleed-white ${fullScreen ? "hero-white" : ""}`}>
      <div className="container-white">
        {/* Left column: title on top, logo directly underneath */}
        <header className="heading-white">
          <p className="title-white">{Title}</p>
          <img className="logo-white" src={Image} alt="" />
        </header>

        {/* Right column: paragraph, aligned to top with the title */}
        <div className="paragraph-white">
          <p>{Summary}</p>
          <p>{Summary2}</p>
        </div>
      </div>

      <div className="children-white">{children}</div>
    </section>
  );
}

export default White;
