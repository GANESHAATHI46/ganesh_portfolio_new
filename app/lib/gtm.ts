/**
 * Google Tag Manager Integration & Utilities
 * Container ID: GTM-PVLBVJ8V
 * Website: https://ganeshdeveloper.in
 */

export const GTM_ID = "GTM-PVLBVJ8V";

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
  }
}

/**
 * Safely push an event to the Google Tag Manager dataLayer.
 * Guaranteed SSR-safe and non-blocking.
 */
export function pushToDataLayer(payload: Record<string, unknown>): void {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(payload);
}

export interface PageViewOptions {
  pageTitle?: string;
  isInitialLoad?: boolean;
}

/**
 * Track SPA and route page views
 */
export function trackPageView(
  pagePath: string,
  options: PageViewOptions = {}
): void {
  const { pageTitle, isInitialLoad = false } = options;
  pushToDataLayer({
    event: "page_view",
    page_path: pagePath,
    page_title:
      pageTitle || (typeof document !== "undefined" ? document.title : ""),
    page_location: typeof window !== "undefined" ? window.location.href : "",
    is_initial_load: isInitialLoad,
  });
}

/**
 * Track portfolio project interactions (case study view, project card clicks)
 */
export function trackProjectClick(
  projectTitle: string,
  projectNumber?: string,
  details?: Record<string, unknown>
): void {
  pushToDataLayer({
    event: "portfolio_project_click",
    project_title: projectTitle,
    project_number: projectNumber || "",
    ...details,
  });
}

/**
 * Track contact button clicks (e.g. CTA buttons, discuss work)
 */
export function trackContactButtonClick(
  buttonName: string,
  details?: Record<string, unknown>
): void {
  pushToDataLayer({
    event: "contact_button_click",
    button_name: buttonName,
    ...details,
  });
}

/**
 * Track contact form submissions safely.
 * Strictly avoids sending any personal information, emails, phone numbers, or form messages.
 */
export function trackContactFormSubmit(opportunityCategory?: string): void {
  pushToDataLayer({
    event: "contact_form_submit",
    form_id: "recruiter_contact_form",
    opportunity_category: opportunityCategory || "general",
  });
}

/**
 * Track email link clicks (mailto:)
 * Sanitized to never send personal data.
 */
export function trackEmailClick(linkContext?: string): void {
  pushToDataLayer({
    event: "email_link_click",
    link_type: "email",
    link_context: linkContext || "direct_email",
  });
}

/**
 * Track phone number clicks (tel:)
 * Sanitized to never send phone numbers.
 */
export function trackPhoneClick(linkContext?: string): void {
  pushToDataLayer({
    event: "phone_number_click",
    link_type: "phone",
    link_context: linkContext || "direct_call",
  });
}

/**
 * Track WhatsApp button clicks
 */
export function trackWhatsAppClick(linkContext?: string): void {
  pushToDataLayer({
    event: "whatsapp_button_click",
    link_type: "whatsapp",
    link_context: linkContext || "direct_chat",
  });
}

/**
 * Track resume download / request clicks
 */
export function trackResumeClick(linkContext?: string): void {
  pushToDataLayer({
    event: "resume_download_click",
    link_type: "resume",
    link_context: linkContext || "resume_request",
  });
}

/**
 * Track social media link clicks (LinkedIn, GitHub, Instagram)
 */
export function trackSocialClick(
  platform: string,
  destinationDomain?: string
): void {
  pushToDataLayer({
    event: "social_media_link_click",
    social_platform: platform,
    destination_domain: destinationDomain || "",
  });
}

/**
 * Track navigation clicks (header links, footer links, return to top, menu toggles)
 */
export function trackNavigationClick(
  navigationLabel: string,
  navigationTarget: string
): void {
  pushToDataLayer({
    event: "navigation_interaction",
    navigation_label: navigationLabel,
    navigation_target: navigationTarget,
  });
}

