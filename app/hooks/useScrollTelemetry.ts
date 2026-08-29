import { type RefObject, useEffect } from "react";

function clamp(value: number, min = 0, max = 1) {
  return Math.min(max, Math.max(min, value));
}

function windowFade(
  progress: number,
  start: number,
  end: number,
  feather = 0.09,
) {
  return Math.min(
    clamp((progress - start) / feather),
    clamp((end - progress) / feather),
  );
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
        missionRef?.current || document.getElementById("mission");
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
      root.style.setProperty("--burst", burst.toFixed(4));

      [
        [0, -0.09, 0.25],
        [1, 0.18, 0.51],
        [2, 0.44, 0.77],
        [3, 0.7, 1.1],
      ].forEach(([index, start, end]) => {
        root.style.setProperty(
          `--beat-${index}`,
          windowFade(mission, start, end).toFixed(3),
        );
      });

      [
        [0, -0.09, 0.29],
        [1, 0.2, 0.54],
        [2, 0.46, 0.79],
        [3, 0.71, 1.1],
      ].forEach(([index, start, end]) => {
        root.style.setProperty(
          `--burst-${index}`,
          windowFade(burst, start, end).toFixed(3),
        );
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

