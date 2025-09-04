import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

function Header() {
  const [open, setOpen] = useState(false);

  // Close on Escape + lock body scroll while open
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    document.addEventListener('keydown', onKey);
    if (open) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.removeEventListener('keydown', onKey);
        document.body.style.overflow = prev;
      };
    }
    return () => document.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <nav className="nav-header fullbleed-header" aria-label="Primary">
      <div id="top" />
      <div className="container-header">
        {/* Mobile menu button (left) */}
        <button
          className="menu-toggle-header"
          aria-controls="menu-panel-header"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          <span className="menu-icon-header" aria-hidden="true">
            <span />
            <span />
            <span />
          </span>
          Menu
        </button>

        {/* Desktop inline row (hidden on mobile):
           Home on the left; Resume/About/Projects on the right */}
        <div className="inline-nav-header">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? 'link-header active-link push-right' : 'link-header push-right'
            }
          >
            Home
          </NavLink>

          <a
            href="/akhila nivarthi-resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="link-header"
          >
            Resume
          </a>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? 'link-header active-link' : 'link-header'
            }
          >
            About
          </NavLink>
          <NavLink
            to="/work-experience"
            className={({ isActive }) =>
              isActive ? 'link-header active-link' : 'link-header'
            }
          >
            Work Experience
          </NavLink>
        </div>
      </div>

      {/* LEFT slide-out panel (contains ALL links, incl. Home) */}
      <aside
        id="menu-panel-header"
        className={`menu-panel-header left ${open ? 'open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation"
      >
        <button className="close-header" aria-label="Close menu" onClick={() => setOpen(false)}>
          ×
        </button>
        <nav className="menu-list-header">
          <NavLink
            to="/"
            onClick={() => setOpen(false)}
            className={({ isActive }) =>
              isActive ? 'link-header active-link' : 'link-header'
            }
          >
            Home
          </NavLink>
          <a
            href="/akhila nivarthi-resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="link-header"
            onClick={() => setOpen(false)}
          >
            Resume
          </a>
          <NavLink
            to="/about"
            onClick={() => setOpen(false)}
            className={({ isActive }) =>
              isActive ? 'link-header active-link' : 'link-header'
            }
          >
            About
          </NavLink>
          <NavLink
            to="/work-experience"
            onClick={() => setOpen(false)}
            className={({ isActive }) =>
              isActive ? 'link-header active-link' : 'link-header'
            }
          >
            Work Experience
          </NavLink>
        </nav>
      </aside>

      {/* Backdrop */}
      <div
        className={`backdrop-header ${open ? 'show' : ''}`}
        onClick={() => setOpen(false)}
        aria-hidden="true"
      />
    </nav>
  );
}

export default Header;
