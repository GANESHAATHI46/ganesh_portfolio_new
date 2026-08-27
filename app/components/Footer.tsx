import { siteConfig } from "../data/siteConfig";

export function Footer() {
  return (
    <footer>
      <span>{siteConfig.name.toUpperCase()} © 2026</span>
      <span>{siteConfig.role}</span>
      <a href="#top">RETURN TO ORIGIN ↑</a>
    </footer>
  );
}
