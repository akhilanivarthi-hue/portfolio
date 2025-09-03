import React from 'react';
import './Title.css';

function Title({ Title: titleText, Label, Duration, Team, Role, Color }) {
  return (
    <section className="section-title">
      <div
        className="container-title"
        style={Color ? { ['--accent-title']: Color } : undefined}
      >
        <header className="heading-title">
          <h1 className="title-main-title">{titleText}</h1>
          <h2 className="title-label-title">{Label}</h2>
        </header>

        {/* Divider just under the heading */}
        <div className="divider-title" aria-hidden="true" />

        <div className="meta-title">
          <p><span style={{ color: Color }}>Duration: </span>{Duration}</p>
          <p><span style={{ color: Color }}>Team: </span>{Team}</p>
          <p><span style={{ color: Color }}>Role: </span>{Role}</p>
        </div>
      </div>
    </section>
  );
}

export default Title;
