"use client";

import Image from "next/image";
import { useState } from "react";
import { ThemeToggle } from "./ThemeToggle";

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="nav-shell">
      <a
        className="wordmark"
        href="#top"
        aria-label="GA Software Developer — Ganesh A. portfolio home"
      >
        <div className="nav-avatar-wrap">
          <Image
            src="/avatar.webp"
            alt="Ganesh - Software Developer"
            width={28}
            height={28}
            className="nav-avatar-img"
            priority
            fetchPriority="high"
          />
        </div>
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
        <a href="#about" onClick={closeMenu}>
          About
        </a>
        <a href="#skills" onClick={closeMenu}>
          Skills
        </a>
        <a href="#projects" onClick={closeMenu}>
          Projects
        </a>
        <a href="#education" onClick={closeMenu}>
          Education
        </a>
        <a href="#contact" onClick={closeMenu}>
          Contact
        </a>
      </nav>

      <div className="nav-right">
        <ThemeToggle />
        <div className="nav-status">
          <i /> Seeking developer roles
        </div>
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

