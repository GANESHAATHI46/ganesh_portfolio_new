import type { RefObject } from "react";

interface MissionJourneyProps {
  missionRef?: RefObject<HTMLElement | null>;
}

export function MissionJourney({ missionRef }: MissionJourneyProps = {}) {
  return (
    <section
      className="mission"
      id="mission"
      ref={missionRef}
      aria-label="Scroll-driven developer journey"
    >
      <div className="mission-sticky">
        <div className="starfield stars-near" aria-hidden="true" />
        <div className="starfield stars-far" aria-hidden="true" />

        <div className="orbital-diagram" aria-hidden="true">
          <div className="orbit-ring orbit-ring-outer" />
          <div className="orbit-ring orbit-ring-inner" />
          <div className="orbit-planet" />
          <div className="orbit-marker" />
        </div>

        <img
          className="mission-craft mission-craft-dark"
          src="/rocket.webp"
          alt="An original spacecraft travelling through deep space"
          width={1672}
          height={941}
          loading="lazy"
          decoding="async"
        />
        <img
          className="mission-craft mission-craft-light"
          src="/rocket-transparent.webp"
          alt="An original spacecraft travelling through deep space"
          width={1672}
          height={941}
          loading="lazy"
          decoding="async"
        />

        <div className="engine-trail" aria-hidden="true" />

        <div className="mission-hud mono">
          <span>MISSION / GA-26</span>
          <div className="hud-line">
            <i />
          </div>
          <span>
            SCROLL VECTOR <b>↓</b>
          </span>
        </div>

        <div className="mission-beats">
          <article className="mission-beat beat-0">
            <p className="mono">00 / IGNITION</p>
            <h2>
              Every system starts
              <br />
              with a <em>signal.</em>
            </h2>
            <span>
              I turn unclear requirements into a buildable product direction.
            </span>
          </article>
          <article className="mission-beat beat-1">
            <p className="mono">01 / ORBIT</p>
            <h2>
              Interfaces with
              <br />
              <em>gravity.</em>
            </h2>
            <span>
              Responsive React experiences with hierarchy, performance and
              purposeful motion.
            </span>
          </article>
          <article className="mission-beat beat-2">
            <p className="mono">02 / DEEP SPACE</p>
            <h2>
              The invisible
              <br />
              <em>architecture.</em>
            </h2>
            <span>
              APIs, data, realtime communication and infrastructure that keep
              the product moving.
            </span>
          </article>
          <article className="mission-beat beat-3">
            <p className="mono">03 / ARRIVAL</p>
            <h2>
              Useful work.
              <br />
              <em>Delivered.</em>
            </h2>
            <span>Keep scrolling to inspect five selected systems.</span>
          </article>
        </div>

        <div className="telemetry mono" aria-hidden="true">
          <span>ALT</span>
          <b>∞</b>
          <span>VEL</span>
          <b>27.4</b>
          <span>SYS</span>
          <b>NOMINAL</b>
        </div>
      </div>
    </section>
  );
}
