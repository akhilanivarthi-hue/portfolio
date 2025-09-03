import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="section-footer fullbleed-footer">
      <div className="container-footer">
        <p className="heading-footer">Connect with me!</p>

        <div className="columns-footer">
          <div className="col-footer">
            <a className="link-footer" href="mailto:akhila.nivarthi@gmail.com">Email</a>
            <a
              className="link-footer"
              href="/akhila nivarthi-resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>
          </div>

          <div className="col-footer">
            <a
              className="link-footer"
              href="https://www.linkedin.com/in/akhila-nivarthi/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a
              className="link-footer"
              href="https://calendar.google.com/calendar/u/0?cid=NTVmNjEzNzg3Y2E3ODkyOTg0NzhkNDg1MzViMDA1ZTc0MjJkMWMzZGExMGUzYmVjOTViODc1OGM1OGQ1ODIwY0Bncm91cC5jYWxlbmRhci5nb29nbGUuY29t"
              target="_blank"
              rel="noopener noreferrer"
            >
              Calendar
            </a>
          </div>
        </div>
      </div>

      {/* Corner disclaimer */}
      <div className="disclaimer-footer">© 2025 Akhila Nivarthi</div>
    </footer>
  );
}

export default Footer;
