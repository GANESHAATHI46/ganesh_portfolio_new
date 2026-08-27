import type {
  CredentialItem,
  EducationItem,
  ExperienceItem,
} from "../types/portfolio";

export const educationList: EducationItem[] = [
  {
    period: "JUN 2022 — MAY 2025",
    degree: "B.Sc Computer Science",
    institution: "Sree Vee College · Kiriyampatti, India",
    grade: "GPA 8.06",
  },
  {
    period: "JUN 2020 — APR 2022",
    degree: "Textile Technology Diploma Coursework",
    institution: "The Gandhigram Rural Institute · Gandhigram, India",
    grade: "Academic GPA 8.70 · Final arrear pending",
  },
];

export const experienceList: ExperienceItem[] = [
  {
    period: "APR 2026 — PRESENT",
    role: "Software Developer",
    company: "Inpand Technologies",
    location: "Dindigul, India",
    featured: true,
    points: [
      "Backend development with Python, Django and FastAPI.",
      "Responsive interfaces using React and React Native.",
      "Database, server-side and LangChain/LangGraph workflow development.",
    ],
  },
  {
    period: "MAY 2022 — FEB 2023",
    role: "Quality Control",
    company: "Natchi Apparel Pvt Ltd",
    location: "India",
    summary: "Apparel quality-control experience",
  },
];

export const credentialsList: CredentialItem[] = [
  {
    category: "DATABASE CREDENTIAL",
    date: "MAY 2025",
    title: "Naan Mudhalvan — Database Management",
    description: "Oracle database creation and querying hackathon.",
  },
];
