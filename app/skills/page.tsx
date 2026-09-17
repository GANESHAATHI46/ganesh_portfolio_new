import type { Metadata } from "next";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { SystemsSection } from "../components/SystemsSection";
import { skillGroups } from "../data/skills";

export const metadata: Metadata = {
  title: "Skills & Systems | Ganesh A — Full Stack Developer",
  description:
    "Technical stack, frontend architectures, backend APIs, and database engineering capabilities of Ganesh A, Full Stack Developer based in Dindigul, Tamil Nadu.",
  alternates: {
    canonical: "https://www.ganeshdeveloper.in/skills/",
  },
  openGraph: {
    type: "website",
    title: "Skills & Systems | Ganesh A — Full Stack Developer",
    description:
      "Technical stack, frontend architectures, backend APIs, and database engineering capabilities of Ganesh A, Full Stack Developer based in Dindigul, Tamil Nadu.",
    url: "https://www.ganeshdeveloper.in/skills/",
    siteName: "Ganesh A | Full Stack Developer",
    locale: "en_IN",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Skills & Systems | Ganesh A — Full Stack Developer",
      },
    ],
  },
};

const skillsPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://www.ganeshdeveloper.in/skills/#webpage",
  "url": "https://www.ganeshdeveloper.in/skills/",
  "name": "Skills & Systems | Ganesh A — Full Stack Developer",
  "description":
    "Technical stack, frontend architectures, backend APIs, and database engineering capabilities of Ganesh A, Full Stack Developer based in Dindigul, Tamil Nadu.",
  "about": {
    "@id": "https://www.ganeshdeveloper.in/#person"
  }
};

export default function SkillsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(skillsPageJsonLd) }}
      />
      <Navbar />
      <main className="subpage-container" id="top">
        <div className="section-shell">
          <header className="subpage-hero">
            <p className="eyebrow mono">ENGINEERING STACK // SYSTEMS</p>
            <h1>
              Skills &amp;
              <br />
              <span>Capabilities.</span>
            </h1>
            <p className="subpage-subtitle">
              Comprehensive technical capabilities spanning client-side React and React Native,
              server-side Python, Django, FastAPI, and relational database systems.
            </p>
          </header>
        </div>
        <SystemsSection skillGroups={skillGroups} />
      </main>
      <Footer />
    </>
  );
}
