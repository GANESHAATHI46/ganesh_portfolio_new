import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.ganeshdeveloper.in/"),
  title: {
    default: "Ganesh A | Full Stack Developer in Dindigul",
    template: "%s | Ganesh A",
  },
  description:
    "Ganesh A is a Full Stack Developer based in Dindigul, Tamil Nadu, building modern web applications, React and React Native apps, Python/Django/FastAPI APIs, Laravel systems, PostgreSQL applications, automation tools and production deployments.",
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
    title: "Ganesh A | Full Stack Developer in Dindigul",
    description:
      "Ganesh A is a Full Stack Developer based in Dindigul, Tamil Nadu, building modern web applications, React and React Native apps, Python/Django/FastAPI APIs, Laravel systems, PostgreSQL applications, automation tools and production deployments.",
    url: "https://www.ganeshdeveloper.in/",
    siteName: "Ganesh A | Full Stack Developer",
    locale: "en_IN",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Ganesh A | Full Stack Developer in Dindigul",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ganesh A | Full Stack Developer in Dindigul",
    description:
      "Ganesh A is a Full Stack Developer based in Dindigul, Tamil Nadu, building modern web applications, React and React Native apps, Python/Django/FastAPI APIs, Laravel systems, PostgreSQL applications, automation tools and production deployments.",
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
      "name": "Ganesh A | Full Stack Developer",
      "alternateName": ["Ganesh Developer", "Ganesh A Developer"],
      "description":
        "Portfolio and engineering systems of Ganesh A, a Full Stack Developer based in Dindigul, Tamil Nadu.",
      "inLanguage": "en-IN",
      "publisher": {
        "@id": "https://www.ganeshdeveloper.in/#person"
      },
      "author": {
        "@id": "https://www.ganeshdeveloper.in/#person"
      }
    },
    {
      "@type": "Person",
      "@id": "https://www.ganeshdeveloper.in/#person",
      "name": "Ganesh A",
      "alternateName": [
        "Ganesh Developer",
        "Ganesh A Developer"
      ],
      "url": "https://www.ganeshdeveloper.in/",
      "image": "https://www.ganeshdeveloper.in/ganesh.jpg",
      "jobTitle": "Full Stack Developer",
      "description":
        "Full Stack Developer based in Dindigul, Tamil Nadu building web applications, mobile apps, backend APIs, automation tools and production-ready digital products.",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Dindigul",
        "addressRegion": "Tamil Nadu",
        "addressCountry": "IN"
      },
      "sameAs": [
        "https://www.linkedin.com/in/ganesh-software-developer/",
        "https://github.com/GANESHAATHI46",
        "https://www.instagram.com/ganesh__official___"
      ],
      "knowsAbout": [
        "Full Stack Development",
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
        "Web Performance Optimization"
      ],
      "alumniOf": [
        {
          "@type": "EducationalOrganization",
          "name": "Sree Vee College",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Kiriyampatti",
            "addressRegion": "Tamil Nadu",
            "addressCountry": "IN"
          }
        },
        {
          "@type": "EducationalOrganization",
          "name": "The Gandhigram Rural Institute",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Gandhigram",
            "addressRegion": "Tamil Nadu",
            "addressCountry": "IN"
          }
        }
      ],
      "worksFor": {
        "@type": "Organization",
        "name": "Inpand Technologies",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Dindigul",
          "addressRegion": "Tamil Nadu",
          "addressCountry": "IN"
        }
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
