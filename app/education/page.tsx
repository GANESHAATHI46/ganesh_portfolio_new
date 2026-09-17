import type { Metadata } from "next";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { CareerSection } from "../components/CareerSection";
import { credentialsList, educationList, experienceList } from "../data/career";

export const metadata: Metadata = {
  title: "Education & Experience | Ganesh A — Full Stack Developer",
  description:
    "Computer science education, software engineering experience at Inpand Technologies, and database credentials of Ganesh A, Full Stack Developer based in Dindigul, Tamil Nadu.",
  alternates: {
    canonical: "https://www.ganeshdeveloper.in/education/",
  },
  openGraph: {
    type: "website",
    title: "Education & Experience | Ganesh A — Full Stack Developer",
    description:
      "Computer science education, software engineering experience at Inpand Technologies, and database credentials of Ganesh A, Full Stack Developer based in Dindigul, Tamil Nadu.",
    url: "https://www.ganeshdeveloper.in/education/",
    siteName: "Ganesh A | Full Stack Developer",
    locale: "en_IN",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Education & Experience | Ganesh A — Full Stack Developer",
      },
    ],
  },
};

const educationPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://www.ganeshdeveloper.in/education/#webpage",
  "url": "https://www.ganeshdeveloper.in/education/",
  "name": "Education & Experience | Ganesh A — Full Stack Developer",
  "description":
    "Computer science education, software engineering experience at Inpand Technologies, and database credentials of Ganesh A, Full Stack Developer based in Dindigul, Tamil Nadu.",
  "about": {
    "@id": "https://www.ganeshdeveloper.in/#person"
  }
};

export default function EducationPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(educationPageJsonLd) }}
      />
      <Navbar />
      <main className="subpage-container" id="top">
        <div className="section-shell">
          <header className="subpage-hero">
            <p className="eyebrow mono">BACKGROUND // CREDENTIALS</p>
            <h1>
              Education &amp;
              <br />
              <span>Experience.</span>
            </h1>
            <p className="subpage-subtitle">
              Academic foundation in Computer Science, professional software engineering at Inpand Technologies,
              and continuous growth in modern full-stack development.
            </p>
          </header>
        </div>
        <CareerSection
          education={educationList}
          experience={experienceList}
          credentials={credentialsList}
        />
      </main>
      <Footer />
    </>
  );
}
