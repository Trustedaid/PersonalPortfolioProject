import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import profile from "../data/profile.json";
import Navbar from "./Navbar";
import { LanguageProvider } from "./hooks/LanguageContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: profile.title,
  description: profile.about,
};

const siteUrl = "https://erenoguz.dev";
const siteName = "Eren OĞUZ Portfolio";
const keywords = [
  "Eren Oğuz",
  ".NET Core Developer",
  ".NET Core",
  "React",
  "Next.js",
  "Tailwind CSS",
  "Portfolio",
  "Yazılım Geliştirici",
  "AI Developer",
  "Web Developer",
  "Freelance Developer",

];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#18181b" />
        <title>{profile.title}</title>
        <meta name="description" content={profile.about} />
        <meta name="keywords" content={keywords.join(", ")} />
        <meta name="author" content="Eren OĞUZ" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={siteUrl} />
        <link rel="icon" href="/favicon.ico" />
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={profile.title} />
        <meta property="og:description" content={profile.about} />
        <meta property="og:url" content={siteUrl} />
        <meta property="og:site_name" content={siteName} />
        <meta property="og:locale" content="tr_TR" />
        <meta property="og:image" content="/globe.svg" />
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={profile.title} />
        <meta name="twitter:description" content={profile.about} />
        <meta name="twitter:site" content="@ernoguz" />
        <meta name="twitter:creator" content="@ernoguz" />
        <meta name="twitter:image" content="/globe.svg" />
        {/* Structured Data */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Eren OĞUZ",
            "url": siteUrl,
            "image": `${siteUrl}/globe.svg`,
            "sameAs": [
              "https://github.com/trustedaid",
              "https://www.linkedin.com/in/ernoguz/"
            ],
            "jobTitle": "Full Stack Developer",
            "worksFor": {
              "@type": "Organization",
              "name": siteName
            },
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "İstanbul",
              "addressCountry": "Türkiye"
            }
          })
        }} />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <LanguageProvider>
          <Navbar />
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
