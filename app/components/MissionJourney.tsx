import type { RefObject } from "react";

interface MissionJourneyProps {
  missionRef?: RefObject<HTMLElement | null>;
}

export function MissionJourney({ missionRef }: MissionJourneyProps = {}) {
  return (
    <section
      className="system-journey mission"
      id="mission"
      ref={missionRef}
      aria-label="Digital System Core - Software Engineering Journey"
    >
      <div className="system-sticky mission-sticky">
        {/* Architectural Blueprint Grid */}
        <div className="system-blueprint-canvas" aria-hidden="true">
          <div className="blueprint-grid-lines" />
          <div className="blueprint-caliper caliper-tl" />
          <div className="blueprint-caliper caliper-tr" />
          <div className="blueprint-caliper caliper-bl" />
          <div className="blueprint-caliper caliper-br" />
          <div className="blueprint-axis-x" />
          <div className="blueprint-axis-y" />
        </div>

        {/* Top Architecture Flow HUD */}
        <header className="system-hud mission-hud mono">
          <span className="hud-module">SYSTEM PIPELINE // CORE ARCHITECTURE</span>
          <div className="hud-line">
            <i />
          </div>
          <span className="hud-flow">
            UI <b>→</b> API <b>→</b> DB <b>→</b> DEPLOY
          </span>
        </header>

        {/* The 4 Progressive Software Engineering Beats (strictly non-overlapping) */}
        <div className="system-beats mission-beats">
          {/* Stage 1: Input Signal */}
          <article className="system-beat mission-beat beat-0">
            <p className="mono">00 // INPUT SIGNAL</p>
            <h2>
              Every system starts
              <br />
              with a <em>signal.</em>
            </h2>
            <span>
              From user intent, architecture blueprint, or an ambiguous product
              idea—every robust system begins with an unambiguous direction.
            </span>
          </article>

          {/* Stage 2: Presentation Layer */}
          <article className="system-beat mission-beat beat-1">
            <p className="mono">01 // PRESENTATION LAYER</p>
            <h2>
              Interfaces with
              <br />
              <em>purpose.</em>
            </h2>
            <span>
              Responsive React and React Native experiences built with clear
              visual hierarchy, accessible interactions, and fluid motion.
            </span>
          </article>

          {/* Stage 3: Distributed Core */}
          <article className="system-beat mission-beat beat-2">
            <p className="mono">02 // DISTRIBUTED CORE</p>
            <h2>
              The invisible
              <br />
              <em>architecture.</em>
            </h2>
            <span>
              APIs, relational schemas, realtime pipelines, and cloud services
              engineered for performance, resilience, and scale.
            </span>
          </article>

          {/* Stage 4: Integrated Product Machine */}
          <article className="system-beat mission-beat beat-3">
            <p className="mono">03 // INTEGRATED PRODUCT</p>
            <h2>
              Useful work.
              <br />
              <em>Real systems.</em>
            </h2>
            <span>
              Frontend, backend, data, and deployment coalescing into reliable
              production software ready for real users.
            </span>
          </article>
        </div>

        {/* 3D-Inspired Digital System Core Visualization */}
        <div className="system-core-container" aria-hidden="true">
          <div className="system-machine-stage">
            {/* Background Calibration Rings & Radar Track */}
            <div className="core-orbital-system">
              <div className="system-ring system-ring-outer" />
              <div className="system-ring system-ring-mid" />
              <div className="system-ring system-ring-inner" />
              <div className="system-crosshair-h" />
              <div className="system-crosshair-v" />
              <div className="system-node-dot dot-north mono">NODE // 01</div>
              <div className="system-node-dot dot-east mono">EDGE // 443</div>
              <div className="system-node-dot dot-south mono">GATE // 02</div>
              <div className="system-node-dot dot-west mono">CORE // 80</div>
            </div>

            {/* STAGE 1 VISUAL: Minimal Terminal Cursor / Code Pulse / Spark */}
            <div className="core-layer layer-signal">
              <div className="terminal-pod">
                <div className="terminal-header mono">
                  <span className="terminal-dot dot-red" />
                  <span className="terminal-dot dot-yellow" />
                  <span className="terminal-dot dot-green" />
                  <span className="terminal-title">core.init.ts</span>
                </div>
                <div className="terminal-body mono">
                  <p className="terminal-line line-dim">&gt; system.mount(&quot;production&quot;);</p>
                  <p className="terminal-line line-active">
                    &gt; <span className="terminal-cursor">_</span> signal detected
                  </p>
                  <div className="signal-spark-wrap">
                    <span className="signal-spark" />
                    <span className="signal-wave wave-1" />
                    <span className="signal-wave wave-2" />
                  </div>
                  <div className="signal-specs">
                    <span>FREQ: 60Hz</span>
                    <span>LATENCY: 1.2ms</span>
                    <span>ENTROPY: 0.00</span>
                  </div>
                </div>
              </div>
            </div>

            {/* STAGE 2 VISUAL: Floating UI Panels & Interface Pieces Assembling */}
            <div className="core-layer layer-ui">
              <div className="ui-glass-window">
                <div className="window-topbar">
                  <div className="window-traffic">
                    <i />
                    <i />
                    <i />
                  </div>
                  <div className="window-url mono">app.system.dev/dashboard</div>
                  <div className="window-badge mono">REACT 19</div>
                </div>
                <div className="window-grid">
                  <div className="ui-card card-primary">
                    <div className="ui-card-header mono">
                      <span>METRIC / VELOCITY</span>
                      <strong className="amber-pill">+98.4%</strong>
                    </div>
                    <div className="ui-card-chart">
                      <svg viewBox="0 0 160 40" fill="none" preserveAspectRatio="none">
                        <path
                          d="M0 35 L30 25 L65 30 L100 12 L130 18 L160 5"
                          stroke="var(--amber)"
                          strokeWidth="2"
                          vectorEffect="non-scaling-stroke"
                        />
                        <path
                          d="M0 35 L30 25 L65 30 L100 12 L130 18 L160 5 L160 40 L0 40 Z"
                          fill="var(--amber-glow)"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="ui-card card-secondary">
                    <span className="ui-chip mono">STATUS: ACTIVE</span>
                    <div className="ui-skeleton-lines">
                      <span className="sk-line w-80" />
                      <span className="sk-line w-60" />
                      <span className="sk-line w-40" />
                    </div>
                  </div>
                </div>
              </div>
              {/* Mobile device fragment floating in perspective */}
              <div className="ui-mobile-frame">
                <div className="mobile-speaker" />
                <div className="mobile-pill mono">NATIVE APP</div>
                <div className="mobile-stack">
                  <div className="mobile-card" />
                  <div className="mobile-card small" />
                </div>
              </div>
            </div>

            {/* STAGE 3 VISUAL: Backend Architecture (API Gateway + Database Cylinders) */}
            <div className="core-layer layer-backend">
              {/* API Gateway Cluster */}
              <div className="backend-gateway-cluster">
                <div className="gateway-node node-1 mono">
                  <span className="method get">GET</span>
                  <span className="path">/api/v1/stream</span>
                  <i className="status-dot dot-live" />
                </div>
                <div className="gateway-node node-2 mono">
                  <span className="method post">POST</span>
                  <span className="path">/api/v1/mutate</span>
                  <i className="status-dot dot-live" />
                </div>
                <div className="gateway-bus-lines">
                  <svg className="bus-svg" viewBox="0 0 200 100" fill="none">
                    <path
                      d="M20 20 C80 20, 100 80, 180 80"
                      stroke="var(--amber)"
                      strokeWidth="1.5"
                      strokeDasharray="4 3"
                    />
                    <path
                      d="M20 80 C80 80, 100 20, 180 20"
                      stroke="var(--text-dim)"
                      strokeWidth="1.5"
                    />
                  </svg>
                </div>
              </div>

              {/* Database Storage Tier */}
              <div className="database-isometric-tier">
                <div className="db-cylinder-stack">
                  <div className="db-disk disk-top">
                    <span className="mono">POSTGRES // PRIMARY</span>
                    <i className="db-activity-pulse" />
                  </div>
                  <div className="db-disk disk-mid">
                    <span className="mono">SHARD_01 // ACTIVE</span>
                  </div>
                  <div className="db-disk disk-base">
                    <span className="mono">REDIS CACHE // 0.4ms</span>
                  </div>
                </div>
                <div className="db-specs-panel mono">
                  <div>THROUGHPUT: <b>12.4k req/s</b></div>
                  <div>P99 LATENCY: <b>14ms</b></div>
                  <div>POOL: <b>48 / 50</b></div>
                </div>
              </div>
            </div>

            {/* STAGE 4 VISUAL: Fully Integrated Machine / Product System Core */}
            <div className="core-layer layer-integrated">
              <div className="machine-assembled-core">
                {/* Assembled Isometric System Core */}
                <div className="system-block tier-presentation">
                  <div className="tier-header mono">
                    <span>TIER 01 // CLIENT EDGE</span>
                    <em>WEB + MOBILE</em>
                  </div>
                </div>
                <div className="conduit-channel conduit-1">
                  <span className="conduit-flow" />
                </div>
                <div className="system-block tier-gateway">
                  <div className="tier-header mono">
                    <span>TIER 02 // API ROUTING &amp; AUTH</span>
                    <em>FASTAPI + LARAVEL</em>
                  </div>
                </div>
                <div className="conduit-channel conduit-2">
                  <span className="conduit-flow" />
                </div>
                <div className="system-block tier-data">
                  <div className="tier-header mono">
                    <span>TIER 03 // DATA &amp; STORAGE CLUSTER</span>
                    <em>POSTGRES + REDIS</em>
                  </div>
                </div>

                {/* Deployment / Verification Badges */}
                <div className="deployment-ring">
                  <div className="deploy-tag tag-ready mono">
                    <i className="status-dot dot-live" /> CI/CD: PASS (48/48)
                  </div>
                  <div className="deploy-tag tag-env mono">
                    PROD // CONTAINER ACTIVE
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Engineering System Telemetry Bar */}
        <footer className="system-telemetry mission-telemetry mono" aria-hidden="true">
          <span>STACK</span>
          <b>FULL-STACK TS / NODE / PYTHON / REACT</b>
          <span>STATUS</span>
          <b>200 OK</b>
          <span>LATENCY</span>
          <b>8ms</b>
          <span>ENV</span>
          <b>PRODUCTION</b>
        </footer>
      </div>
    </section>
  );
}

