"use client";

import { useState } from "react";

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="nav-shell">
      <a className="wordmark" href="#top" aria-label="Ganesh A. portfolio home">
        <strong>GA</strong>
        <span>
          SOFTWARE
          <br />
          DEVELOPER
        </span>
      </a>

      <nav
        className={menuOpen ? "main-nav open" : "main-nav"}
        aria-label="Main navigation"
      >
        <a href="#mission" onClick={closeMenu}>
          Mission
        </a>
        <a href="#work" onClick={closeMenu}>
          Work
        </a>
        <a href="#systems" onClick={closeMenu}>
          Systems
        </a>
        <a href="#education" onClick={closeMenu}>
          Education
        </a>
        <a href="#contact" onClick={closeMenu}>
          Contact
        </a>
      </nav>

      <div className="nav-status">
        <i /> Seeking developer roles
      </div>

      <button
        className="menu-toggle"
        type="button"
        aria-label="Toggle menu"
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span />
        <span />
      </button>
    </header>
  );
}
