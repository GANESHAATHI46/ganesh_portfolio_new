import type { Metadata } from "next";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { ProjectsSection } from "../components/ProjectsSection";
import { projects } from "../data/projects";

export const metadata: Metadata = {
  title: "Projects by Ganesh A | Full Stack Developer",
  description:
    "Explore software engineering projects by Ganesh A, Full Stack Developer in Dindigul, Tamil Nadu. Including React web platforms, mobile apps, and Python APIs.",
  alternates: {
    canonical: "https://www.ganeshdeveloper.in/projects/",
  },
  openGraph: {
    type: "website",
    title: "Projects by Ganesh A | Full Stack Developer",
    description:
      "Explore software engineering projects by Ganesh A, Full Stack Developer in Dindigul, Tamil Nadu. Including React web platforms, mobile apps, and Python APIs.",
    url: "https://www.ganeshdeveloper.in/projects/",
    siteName: "Ganesh A | Full Stack Developer",
    locale: "en_IN",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Projects by Ganesh A | Full Stack Developer",
      },
    ],
  },
};

const collectionPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "@id": "https://www.ganeshdeveloper.in/projects/#collection",
  "url": "https://www.ganeshdeveloper.in/projects/",
  "name": "Projects by Ganesh A | Full Stack Developer",
  "description":
    "Explore software engineering projects by Ganesh A, Full Stack Developer in Dindigul, Tamil Nadu.",
  "creator": {
    "@id": "https://www.ganeshdeveloper.in/#person"
  }
};

export default function ProjectsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionPageJsonLd) }}
      />
      <Navbar />
      <main className="subpage-container" id="top">
        <div className="section-shell">
          <header className="subpage-hero">
            <p className="eyebrow mono">PORTFOLIO // PRODUCTION ARCHITECTURES</p>
            <h1>
              Projects by
              <br />
              <span>Ganesh A.</span>
            </h1>
            <p className="subpage-subtitle">
              Software engineering systems, web platforms, and mobile products engineered
              for real users, high performance, and reliable delivery.
            </p>
          </header>
        </div>
        <ProjectsSection projects={projects} />
      </main>
      <Footer />
    </>
  );
}
