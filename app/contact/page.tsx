import type { Metadata } from "next";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { ContactSection } from "../components/ContactSection";

export const metadata: Metadata = {
  title: "Contact Ganesh A | Full Stack Developer in Dindigul",
  description:
    "Get in touch with Ganesh A, Full Stack Developer based in Dindigul, Tamil Nadu. Reach out for web application development, mobile apps, and backend API engineering.",
  alternates: {
    canonical: "https://www.ganeshdeveloper.in/contact/",
  },
  openGraph: {
    type: "website",
    title: "Contact Ganesh A | Full Stack Developer in Dindigul",
    description:
      "Get in touch with Ganesh A, Full Stack Developer based in Dindigul, Tamil Nadu. Reach out for web application development, mobile apps, and backend API engineering.",
    url: "https://www.ganeshdeveloper.in/contact/",
    siteName: "Ganesh A | Full Stack Developer",
    locale: "en_IN",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Contact Ganesh A | Full Stack Developer in Dindigul",
      },
    ],
  },
};

const contactPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "@id": "https://www.ganeshdeveloper.in/contact/#contactpage",
  "url": "https://www.ganeshdeveloper.in/contact/",
  "name": "Contact Ganesh A | Full Stack Developer in Dindigul",
  "description":
    "Contact channels, email, phone, and verified public profiles for Ganesh A, Full Stack Developer in Dindigul, Tamil Nadu.",
  "about": {
    "@id": "https://www.ganeshdeveloper.in/#person"
  }
};

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageJsonLd) }}
      />
      <Navbar />
      <main className="subpage-container" id="top">
        <div className="section-shell">
          <header className="subpage-hero">
            <p className="eyebrow mono">INQUIRIES // COLLABORATION</p>
            <h1>
              Contact
              <br />
              <span>Ganesh A.</span>
            </h1>
            <p className="subpage-subtitle">
              Available for Full Stack Developer roles, commercial web applications,
              mobile products, and backend engineering projects.
            </p>
          </header>
        </div>
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
