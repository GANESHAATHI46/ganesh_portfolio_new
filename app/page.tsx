import { BurstStory } from "./components/BurstStory";
import { CareerSection } from "./components/CareerSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { MissionJourney } from "./components/MissionJourney";
import { Navbar } from "./components/Navbar";
import { PageEffects } from "./components/PageEffects";
import { ProjectsSection } from "./components/ProjectsSection";
import { ScrollTelemetryController } from "./components/ScrollTelemetryController";
import { SystemsSection } from "./components/SystemsSection";
import { credentialsList, educationList, experienceList } from "./data/career";
import { projects } from "./data/projects";
import { skillGroups } from "./data/skills";

export default function Home() {
  return (
    <main id="top">
      <ScrollTelemetryController />
      <PageEffects />
      <Navbar />
      <Hero />
      <MissionJourney />
      <ProjectsSection projects={projects} />
      <BurstStory />
      <SystemsSection skillGroups={skillGroups} />
      <CareerSection
        education={educationList}
        experience={experienceList}
        credentials={credentialsList}
      />
      <ContactSection />
      <Footer />
    </main>
  );
}

