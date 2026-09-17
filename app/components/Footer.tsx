import Link from "next/link";
import { siteConfig } from "../data/siteConfig";

export function Footer() {
  return (
    <footer>
      <span>{siteConfig.name.toUpperCase()} © 2026</span>
      <span>{siteConfig.role} · Dindigul, Tamil Nadu</span>
      <div className="footer-links" style={{ display: "flex", gap: "18px", flexWrap: "wrap" }}>
        <a
          href={siteConfig.linkedin}
          target="_blank"
          rel="me noopener noreferrer"
          aria-label="LinkedIn profile of Ganesh A"
        >
          LinkedIn
        </a>
        <a
          href={siteConfig.github}
          target="_blank"
          rel="me noopener noreferrer"
          aria-label="GitHub profile of Ganesh A"
        >
          GitHub
        </a>
        <a
          href={siteConfig.instagram}
          target="_blank"
          rel="me noopener noreferrer"
          aria-label="Instagram profile of Ganesh A"
        >
          Instagram
        </a>
        <Link href="/about" aria-label="About Ganesh A">
          About
        </Link>
      </div>
      <a href="#top">RETURN TO TOP ↑</a>
    </footer>
  );
}
