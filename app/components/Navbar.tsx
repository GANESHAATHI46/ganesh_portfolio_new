"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ThemeToggle } from "./ThemeToggle";

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="nav-shell">
      <Link
        className="wordmark"
        href="/#top"
        aria-label="Ganesh A — Full Stack Developer Portfolio"
      >
        <div className="nav-avatar-wrap">
          <Image
            src="/avatar.webp"
            alt="Ganesh A — Full Stack Developer"
            width={28}
            height={28}
            className="nav-avatar-img"
            priority
            fetchPriority="high"
          />
        </div>
        <strong>GA</strong>
        <span>
          FULL STACK
          <br />
          DEVELOPER
        </span>
      </Link>

      <nav
        className={menuOpen ? "main-nav open" : "main-nav"}
        aria-label="Main navigation"
      >
        <Link href="/#about" onClick={closeMenu}>
          About
        </Link>
        <Link href="/#skills" onClick={closeMenu}>
          Skills
        </Link>
        <Link href="/#projects" onClick={closeMenu}>
          Projects
        </Link>
        <Link href="/#education" onClick={closeMenu}>
          Education
        </Link>
        <Link href="/#contact" onClick={closeMenu}>
          Contact
        </Link>
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

