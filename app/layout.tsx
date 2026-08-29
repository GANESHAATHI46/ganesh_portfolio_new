import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.ganeshdeveloper.in/"),
  title: "Ganesh | Software Developer Portfolio",
  description:
    "Ganesh is a Software Developer specializing in React, React Native, Laravel, Django, FastAPI, databases, DevOps and modern web development. Explore my projects, skills, education and contact information.",
  alternates: {
    canonical: "https://www.ganeshdeveloper.in/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    title: "Ganesh | Software Developer Portfolio",
    description:
      "Ganesh is a Software Developer specializing in React, React Native, Laravel, Django, FastAPI, databases, DevOps and modern web development. Explore my projects, skills, education and contact information.",
    url: "https://www.ganeshdeveloper.in/",
    siteName: "Ganesh Developer",
    locale: "en_IN",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Ganesh | Software Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ganesh | Software Developer Portfolio",
    description:
      "Ganesh is a Software Developer specializing in React, React Native, Laravel, Django, FastAPI, databases, DevOps and modern web development. Explore my projects, skills, education and contact information.",
    images: ["/og.png"],
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://www.ganeshdeveloper.in/#website",
      "url": "https://www.ganeshdeveloper.in/",
      "name": "Ganesh Developer",
      "description":
        "Ganesh is a Software Developer specializing in React, React Native, Laravel, Django, FastAPI, databases, DevOps and modern web development. Explore my projects, skills, education and contact information.",
      "inLanguage": "en"
    },
    {
      "@type": "Person",
      "@id": "https://www.ganeshdeveloper.in/#person",
      "name": "Ganesh",
      "url": "https://www.ganeshdeveloper.in/",
      "image": "https://www.ganeshdeveloper.in/ganesh.jpg",
      "jobTitle": "Software Developer",
      "sameAs": [
        "https://www.linkedin.com/in/ganesh-software-developer/"
      ],
      "knowsAbout": [
        "React",
        "React Native",
        "JavaScript",
        "TypeScript",
        "HTML",
        "CSS",
        "Python",
        "Django",
        "FastAPI",
        "Laravel",
        "REST APIs",
        "PostgreSQL",
        "MySQL",
        "SQLite",
        "LangChain",
        "LangGraph",
        "DevOps",
        "Docker",
        "Linux",
        "Nginx",
        "Cloud Development",
        "Web Development",
        "Full Stack Development"
      ],
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Dindigul",
        "addressRegion": "Tamil Nadu",
        "addressCountry": "IN"
      },
      "alumniOf": [
        {
          "@type": "EducationalOrganization",
          "name": "Sree Vee College"
        },
        {
          "@type": "EducationalOrganization",
          "name": "The Gandhigram Rural Institute"
        }
      ],
      "worksFor": {
        "@type": "Organization",
        "name": "Inpand Technologies"
      }
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-theme="light" suppressHydrationWarning>
      <head>
        <meta name="theme-color" content="#F3F1EB" />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('ganesh-portfolio-theme');if(t==='dark'||t==='light'){document.documentElement.setAttribute('data-theme',t);document.documentElement.style.colorScheme=t;}else{document.documentElement.setAttribute('data-theme','light');document.documentElement.style.colorScheme='light';}}catch(e){document.documentElement.setAttribute('data-theme','light');document.documentElement.style.colorScheme='light';}})();`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
