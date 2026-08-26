import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://ganesh-4d-portfolio.ganeshaathi46.chatgpt.site"),
  title: "Ganesh A. — Software Developer",
  description: "Ganesh A. is a software developer building full-stack web, mobile and realtime products from Tamil Nadu, India.",
  openGraph: {
    title: "Ganesh A. — Software Developer",
    description: "Engineer for the unknown — full-stack web, mobile and product engineering.",
    type: "website",
    url: "https://ganesh-4d-portfolio.ganeshaathi46.chatgpt.site",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Ganesh A. — Software Developer" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ganesh A. — Software Developer",
    description: "Engineer for the unknown — full-stack web, mobile and product engineering.",
    images: ["/og.png"],
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
