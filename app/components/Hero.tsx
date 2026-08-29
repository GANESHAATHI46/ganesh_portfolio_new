import Image from "next/image";
import { siteConfig } from "../data/siteConfig";

export function Hero() {
  return (
    <section className="opening" aria-labelledby="opening-title">
      <div className="opening-stars" aria-hidden="true" />
      <div className="opening-meta mono">
        <div className="hero-identity">
          <div className="hero-avatar-ring">
            <Image
              src="/ganesh.jpg"
              alt="Ganesh - Software Developer"
              width={26}
              height={26}
              className="hero-avatar-img"
              priority
            />
          </div>
          <span>GANESH A. / PORTFOLIO 2026</span>
        </div>
        <span>{siteConfig.coordinates}</span>
      </div>
      <h1 id="opening-title">
        <span className="sr-only">Ganesh — Software Developer</span>
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

