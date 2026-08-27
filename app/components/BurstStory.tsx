import type { RefObject } from "react";

interface BurstStoryProps {
  burstRef: RefObject<HTMLElement | null>;
}

export function BurstStory({ burstRef }: BurstStoryProps) {
  return (
    <section
      className="burst-story"
      ref={burstRef}
      aria-label="A scroll-controlled energy burst representing product impact"
    >
      <div className="burst-sticky">
        <img
          className="burst-image"
          src="/burst.webp"
          alt="An abstract scientific energy wave expanding through darkness"
        />
        <div className="burst-vignette" aria-hidden="true" />
        <p className="burst-code mono">
          REACTION / CONTROLLED
          <br />
          ENERGY / PRODUCT IMPACT
        </p>
        <div className="burst-copy">
          <h2 className="burst-line burst-0">A SMALL IDEA</h2>
          <h2 className="burst-line burst-1">BUILDS PRESSURE</h2>
          <h2 className="burst-line burst-2">BECOMES A SYSTEM</h2>
          <h2 className="burst-line burst-3">CREATES IMPACT.</h2>
        </div>
        <div className="burst-scale mono">
          <span>
            10<sup>0</sup>
          </span>
          <i />
          <span>
            10<sup>6</sup>
          </span>
        </div>
      </div>
    </section>
  );
}
