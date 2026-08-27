"use client";

import { useRef, useState } from "react";
import { BurstStory } from "./components/BurstStory";
import { CareerSection } from "./components/CareerSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { MissionJourney } from "./components/MissionJourney";
import { Navbar } from "./components/Navbar";
import { PageEffects } from "./components/PageEffects";
import { ProjectDialog } from "./components/ProjectDialog";
import { ProjectsSection } from "./components/ProjectsSection";
import { SystemsSection } from "./components/SystemsSection";
import { credentialsList, educationList, experienceList } from "./data/career";
import { projects } from "./data/projects";
import { skillGroups } from "./data/skills";
import { useScrollTelemetry } from "./hooks/useScrollTelemetry";
import type { Project } from "./types/portfolio";

export default function Home() {
  const missionRef = useRef<HTMLElement>(null);
  const burstRef = useRef<HTMLElement>(null);
  const projectDialogRef = useRef<HTMLDialogElement>(null);
  const projectTriggerRef = useRef<HTMLButtonElement | null>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Hook managing scroll progress, CSS custom properties, and reveal animations
  useScrollTelemetry({ missionRef, burstRef });

  const openProject = (project: Project, trigger: HTMLButtonElement) => {
    projectTriggerRef.current = trigger;
    setSelectedProject(project);
    requestAnimationFrame(() => projectDialogRef.current?.showModal());
  };

  const closeProject = () => projectDialogRef.current?.close();

  const handleProjectClosed = () => {
    setSelectedProject(null);
    projectTriggerRef.current?.focus();
  };

  return (
    <main id="top">
      <PageEffects />
      <Navbar />
      <Hero />
      <MissionJourney missionRef={missionRef} />
      <ProjectsSection projects={projects} onOpenProject={openProject} />
      <ProjectDialog
        dialogRef={projectDialogRef}
        project={selectedProject}
        onClose={closeProject}
        onClosed={handleProjectClosed}
      />
      <BurstStory burstRef={burstRef} />
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
