"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import {
  trackEmailClick,
  trackNavigationClick,
  trackPageView,
  trackPhoneClick,
  trackResumeClick,
  trackSocialClick,
  trackWhatsAppClick,
} from "../lib/gtm";

/**
 * GTMTracker handles SPA page view tracking and client interaction event delegation.
 * Loads asynchronously and non-intrusively without affecting rendering or performance.
 */
export function GTMTracker() {
  const pathname = usePathname();
  const isInitialMount = useRef(true);

  // Track page views on route changes and initial client load
  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
      trackPageView(pathname, {
        isInitialLoad: true,
      });
      return;
    }

    // On client-side SPA navigation, wait briefly for Next.js to update document.title
    const timeout = setTimeout(() => {
      trackPageView(pathname, {
        pageTitle: typeof document !== "undefined" ? document.title : undefined,
        isInitialLoad: false,
      });
    }, 60);

    return () => clearTimeout(timeout);
  }, [pathname]);

  // Global event delegation for interactive elements
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      if (!target) return;

      // Find closest interactive link or button
      const interactiveEl = target.closest("a, button") as HTMLElement | null;
      if (!interactiveEl) return;

      // Skip elements that are explicitly handled or ignored
      if (
        interactiveEl.hasAttribute("data-gtm-ignore") ||
        interactiveEl.hasAttribute("data-gtm-handled")
      ) {
        return;
      }

      // 1. Link interactions
      if (interactiveEl instanceof HTMLAnchorElement) {
        const href = interactiveEl.getAttribute("href") || "";
        const ariaLabel = (interactiveEl.getAttribute("aria-label") || "").trim();
        const text = (interactiveEl.textContent || "").trim();
        const lowerHref = href.toLowerCase();
        const lowerLabel = ariaLabel.toLowerCase();
        const lowerText = text.toLowerCase();

        // Email link (mailto:)
        if (lowerHref.startsWith("mailto:")) {
          // Check if this mailto is a resume request
          if (
            lowerHref.includes("resume") ||
            lowerLabel.includes("resume") ||
            lowerText.includes("resume")
          ) {
            trackResumeClick(ariaLabel || "email_resume_request");
          } else {
            trackEmailClick(ariaLabel || "email_link");
          }
          return;
        }

        // Phone number link (tel:)
        if (lowerHref.startsWith("tel:")) {
          trackPhoneClick(ariaLabel || "phone_link");
          return;
        }

        // WhatsApp link
        if (
          lowerHref.includes("wa.me") ||
          lowerHref.includes("whatsapp.com") ||
          lowerHref.startsWith("whatsapp:")
        ) {
          trackWhatsAppClick(ariaLabel || "whatsapp_link");
          return;
        }

        // Resume download or request link (non-mailto)
        if (
          lowerHref.includes("resume") ||
          lowerLabel.includes("resume") ||
          lowerText.includes("resume")
        ) {
          trackResumeClick(ariaLabel || text || "resume_download");
          return;
        }

        // Social media links
        if (
          lowerHref.includes("linkedin.com") ||
          lowerHref.includes("github.com") ||
          lowerHref.includes("instagram.com") ||
          lowerHref.includes("twitter.com") ||
          lowerHref.includes("x.com")
        ) {
          let platform = "social";
          if (lowerHref.includes("linkedin.com")) platform = "linkedin";
          else if (lowerHref.includes("github.com")) platform = "github";
          else if (lowerHref.includes("instagram.com")) platform = "instagram";
          else if (lowerHref.includes("twitter.com") || lowerHref.includes("x.com")) platform = "twitter";

          try {
            const domain = new URL(href, window.location.href).hostname;
            trackSocialClick(platform, domain);
          } catch {
            trackSocialClick(platform, platform);
          }
          return;
        }

        // Navigation links (nav, header, footer, or hash anchors)
        if (
          interactiveEl.closest("nav, header, footer") ||
          href.startsWith("#") ||
          href.startsWith("/#") ||
          interactiveEl.classList.contains("wordmark")
        ) {
          const label = ariaLabel || text || (interactiveEl.classList.contains("wordmark") ? "logo_home" : "nav_link");
          trackNavigationClick(label, href);
          return;
        }
      }

      // 2. Button interactions
      if (interactiveEl instanceof HTMLButtonElement) {
        // Menu toggle
        if (interactiveEl.classList.contains("menu-toggle")) {
          trackNavigationClick("mobile_menu_toggle", "toggle_menu");
          return;
        }

        // Theme toggle
        if (interactiveEl.classList.contains("theme-toggle")) {
          trackNavigationClick("theme_toggle", "toggle_theme");
          return;
        }

        // Dialog close
        if (interactiveEl.classList.contains("dialog-close")) {
          trackNavigationClick("dialog_close", "close_case_study");
          return;
        }

        // Fallback for any other button interaction
        const ariaLabel = (interactiveEl.getAttribute("aria-label") || "").trim();
        const text = (interactiveEl.textContent || "").trim();
        if (ariaLabel || text) {
          trackNavigationClick(ariaLabel || text, "button_interaction");
        }
      }
    };

    document.addEventListener("click", handleClick, { passive: true });
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  return null;
}
