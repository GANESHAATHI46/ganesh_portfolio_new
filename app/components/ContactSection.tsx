"use client";

import { type CSSProperties, type FormEvent, useState } from "react";
import { siteConfig } from "../data/siteConfig";
import { ArrowIcon } from "./icons/ArrowIcon";

export function ContactSection() {
  const [formStatus, setFormStatus] = useState("");

  const handleContact = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    // Honeypot spam check
    if (data.get("website")) return;

    const name = String(data.get("name") || "");
    const email = String(data.get("email") || "");
    const company = String(data.get("company") || "Not specified");
    const role = String(data.get("role") || "Software developer opportunity");
    const message = String(data.get("message") || "");
    const subject = encodeURIComponent(`${role} — ${company}`);
    const body = encodeURIComponent(
      `Hi Ganesh,\n\n${message}\n\nName: ${name}\nEmail: ${email}\nCompany: ${company}\nOpportunity: ${role}`,
    );

    setFormStatus("Opening your email app…");
    window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section className="contact" id="contact">
      <div className="contact-stars" aria-hidden="true" />
      <div className="contact-content">
        <div className="contact-copy reveal">
          <p className="eyebrow mono">NEXT MISSION</p>
          <h2>
            LET&apos;S BUILD
            <br />
            <span>WHAT&apos;S NEXT.</span>
          </h2>
          <p>
            Open to software developer opportunities across full-stack web,
            mobile and product engineering.
          </p>
          <div className="contact-links">
            <a href={`mailto:${siteConfig.email}`}>
              <span className="mono">EMAIL</span>
              {siteConfig.email}
            </a>
            <a href={`tel:${siteConfig.phone.replace(/\s+/g, "")}`}>
              <span className="mono">PHONE</span>
              {siteConfig.phone}
            </a>
            <a href={siteConfig.linkedin} target="_blank" rel="noreferrer">
              <span className="mono">LINKEDIN</span>
              ganesh-a-8a9b992ab ↗
            </a>
            <a
              href={`mailto:${siteConfig.email}?subject=Resume%20request%20for%20Ganesh%20A`}
            >
              <span className="mono">RESUME</span>Available on request →
            </a>
          </div>
          <p className="contact-location mono">{siteConfig.location.toUpperCase()}</p>
        </div>

        <form
          className="contact-form reveal"
          onSubmit={handleContact}
          style={{ "--delay": "120ms" } as CSSProperties}
        >
          <div className="form-heading">
            <span className="mono">RECRUITER CHANNEL / OPEN</span>
            <i aria-hidden="true" />
          </div>
          <div className="form-grid">
            <label>
              Name
              <input
                name="name"
                type="text"
                autoComplete="name"
                placeholder="Your name"
                maxLength={80}
                required
              />
            </label>
            <label>
              Email
              <input
                name="email"
                type="email"
                autoComplete="email"
                placeholder="you@company.com"
                maxLength={120}
                required
              />
            </label>
            <label>
              Company
              <input
                name="company"
                type="text"
                autoComplete="organization"
                placeholder="Company name"
                maxLength={100}
              />
            </label>
            <label>
              Role / opportunity
              <input
                name="role"
                type="text"
                placeholder="Software developer"
                maxLength={120}
              />
            </label>
          </div>
          <label className="message-field">
            Message
            <textarea
              name="message"
              rows={5}
              placeholder="Tell me about the role, team and what you are building."
              maxLength={1500}
              required
            />
          </label>
          <label className="website-field" aria-hidden="true">
            Website
            <input name="website" tabIndex={-1} autoComplete="off" />
          </label>
          <div className="form-footer">
            <button type="submit">
              Send opportunity <ArrowIcon />
            </button>
            <span className="mono" role="status" aria-live="polite">
              {formStatus || "OPENS YOUR EMAIL APP"}
            </span>
          </div>
        </form>
      </div>
    </section>
  );
}
