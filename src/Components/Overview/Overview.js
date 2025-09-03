import React from 'react';
import './Overview.css';

function Overview({ Overview: o1, Overview2: o2, Overview3: o3, Image }) {
  return (
    <section className="section-overview">
      <div className="container-overview">
        {/* Title spans full width above */}
        <h2 className="title-overview">Overview</h2>

        {/* Left: big image (aligned to paragraph on desktop) */}
        <img className="image-overview" src={Image} alt="" />

        {/* Right: paragraph block */}
        <div className="paragraph-overview">
          <p>{o1}</p>
          <p>{o2}</p>
          <p>{o3}</p>
        </div>
      </div>
    </section>
  );
}

export default Overview;
