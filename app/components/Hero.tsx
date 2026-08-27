import { siteConfig } from "../data/siteConfig";

export function Hero() {
  return (
    <section className="opening" aria-labelledby="opening-title">
      <div className="opening-stars" aria-hidden="true" />
      <div className="opening-meta mono">
        <span>GANESH A. / PORTFOLIO 2026</span>
        <span>{siteConfig.coordinates}</span>
      </div>
      <h1 id="opening-title">
        <span>ENGINEER</span>
        <span className="outline">FOR THE</span>
        <span>UNKNOWN.</span>
      </h1>
      <div className="opening-bottom">
        <p>
          I build full-stack web and mobile systems—taking ambitious ideas from
          the first signal to a product people can use.
        </p>
        <a href="#mission">
          <span>Begin mission</span>
          <i>↓</i>
        </a>
      </div>
      <div className="horizon" aria-hidden="true" />
    </section>
  );
}
