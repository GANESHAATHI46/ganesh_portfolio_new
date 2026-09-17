import Image from "next/image";
import { siteConfig } from "../data/siteConfig";

export function Hero() {
  return (
    <section className="opening" aria-labelledby="opening-title">
      <div className="hero-blueprint-grid" aria-hidden="true" />
      <div className="opening-meta mono">
        <div className="hero-identity">
          <div className="hero-avatar-ring">
            <Image
              src="/avatar.webp"
              alt="Ganesh A — Full Stack Developer"
              width={26}
              height={26}
              className="hero-avatar-img"
              priority
              fetchPriority="high"
            />
          </div>
          <span>GANESH A // FULL STACK DEVELOPER</span>
        </div>
        <span>{siteConfig.coordinates}</span>
      </div>
      <h1 id="opening-title">
        <span className="sr-only">Ganesh A — Full Stack Developer in Dindigul, Tamil Nadu</span>
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
          <span>Explore Architecture</span>
          <i>↓</i>
        </a>
      </div>
      <div className="horizon" aria-hidden="true" />
    </section>
  );
}

