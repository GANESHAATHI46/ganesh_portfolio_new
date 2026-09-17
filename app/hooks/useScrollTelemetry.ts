import { type RefObject, useEffect } from "react";

function clamp(value: number, min = 0, max = 1) {
  return Math.min(max, Math.max(min, value));
}

function stageFade(
  progress: number,
  startFadeIn: number,
  peakStart: number,
  peakEnd: number,
  endFadeOut: number,
) {
  if (progress <= startFadeIn || progress >= endFadeOut) return 0;
  if (progress >= peakStart && progress <= peakEnd) return 1;
  if (progress < peakStart) {
    return clamp((progress - startFadeIn) / Math.max(0.001, peakStart - startFadeIn));
  }
  return clamp((endFadeOut - progress) / Math.max(0.001, endFadeOut - peakEnd));
}

interface UseScrollTelemetryProps {
  missionRef?: RefObject<HTMLElement | null>;
  burstRef?: RefObject<HTMLElement | null>;
}

export function useScrollTelemetry({
  missionRef,
  burstRef,
}: UseScrollTelemetryProps = {}) {
  useEffect(() => {
    const root = document.documentElement;
    let raf = 0;

    const progressFor = (element: HTMLElement | null) => {
      if (!element) return 0;
      const rect = element.getBoundingClientRect();
      return clamp(-rect.top / Math.max(1, rect.height - window.innerHeight));
    };

    const render = () => {
      raf = 0;
      const missionEl =
        missionRef?.current ||
        document.getElementById("mission") ||
        document.getElementById("system-core");
      const burstEl =
        burstRef?.current ||
        document.getElementById("burst") ||
        document.querySelector<HTMLElement>(".burst-story");

      const mission = progressFor(missionEl);
      const burst = progressFor(burstEl);
      const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight;

      root.style.setProperty(
        "--page",
        String(maxScroll > 0 ? window.scrollY / maxScroll : 0),
      );
      root.style.setProperty("--mission", mission.toFixed(4));
      root.style.setProperty("--system-progress", mission.toFixed(4));
      root.style.setProperty("--burst", burst.toFixed(4));

      // Calculate active stage (0..3) with retuned dwell thresholds
      let activeStage = 0;
      if (mission >= 0.76) activeStage = 3;
      else if (mission >= 0.50) activeStage = 2;
      else if (mission >= 0.24) activeStage = 1;
      root.style.setProperty("--active-stage", String(activeStage));

      // Retuned generous dwell windows for compacted scroll heights (Beat 0..3)
      const stageWindows: [number, number, number, number][] = [
        [-0.06, 0.00, 0.18, 0.24],
        [0.25, 0.29, 0.45, 0.50],
        [0.51, 0.55, 0.71, 0.76],
        [0.77, 0.81, 1.00, 1.08],
      ];

      stageWindows.forEach(([startIn, peakIn, peakOut, endOut], index) => {
        const value = stageFade(mission, startIn, peakIn, peakOut, endOut);
        root.style.setProperty(`--beat-${index}`, value.toFixed(3));
        root.style.setProperty(`--stage-${index}`, value.toFixed(3));
      });

      // Retuned burst line windows for "A SMALL IDEA"
      const burstWindows: [number, number, number, number][] = [
        [-0.06, 0.00, 0.18, 0.24],
        [0.25, 0.29, 0.45, 0.50],
        [0.51, 0.55, 0.71, 0.76],
        [0.77, 0.81, 1.00, 1.08],
      ];

      burstWindows.forEach(([startIn, peakIn, peakOut, endOut], index) => {
        const value = stageFade(burst, startIn, peakIn, peakOut, endOut);
        root.style.setProperty(`--burst-${index}`, value.toFixed(3));
      });
    };

    const requestRender = () => {
      if (!raf) raf = requestAnimationFrame(render);
    };

    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach(
          (entry) => entry.isIntersecting && entry.target.classList.add("visible"),
        ),
      { threshold: 0.12 },
    );
    document
      .querySelectorAll(".reveal")
      .forEach((node) => observer.observe(node));

    window.addEventListener("scroll", requestRender, { passive: true });
    window.addEventListener("resize", requestRender, { passive: true });
    render();

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", requestRender);
      window.removeEventListener("resize", requestRender);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [missionRef, burstRef]);
}

