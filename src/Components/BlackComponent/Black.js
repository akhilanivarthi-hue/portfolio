import React from "react";
import "./Black.css";

function Black({ Title, Image, Summary, Summary2, children, fullScreen = false }) {
  return (
    <section className={`section-black ${fullScreen ? "hero-black" : ""}`}>
      <div className="container-black">
        {/* Left: title + logo (stacked) */}
        <header className="heading-black">
          <p className="title-black">{Title}</p>
          <img className="logo-black" src={Image} alt="" />
        </header>

        {/* Right: paragraph */}
        <div className="paragraph-black">
          <p>{Summary}</p>
          <p>{Summary2}</p>
        </div>
      </div>

      <div className="children-black">{children}</div>
    </section>
  );
}

export default Black;
