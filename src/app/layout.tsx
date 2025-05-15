import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";
import Navbar from "../components/navbar";
import './i18n';
import FairyDustCursor from "../components/fairydust-cursor";
import Link from "next/link";
import React from "react";
import AnalyticsAlert from "../components/analyticsAlert";
import { GoogleAnalytics } from '@next/third-parties/google'

export const metadata: Metadata = {
  title: "🦊 helloyanis",
  description: "My personal website with lots of cool stuff! Learn about my latest projects and find out more about me!",
  openGraph: {
    title: "helloyanis",
    description: "My personal website with lots of cool stuff! Learn about my latest projects and find out more about me!",
    type: "website",
    locale: "en",
    siteName: "helloyanis",
    images: [
      {
        url: "https://xn--3s8h30f.ws/assets/images/profile.png",
        width: 1248,
        height: 1248,
        alt: "helloyanis",
      },
    ],
  },
  keywords: ["helloyanis", "yanis", "web", "website", "developer", "portfolio", "rucoy calculator"],
  authors: [{name:"helloyanis", url:"https://xn--3s8h30f.ws"}],
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const gpcHeader = (await headers()).get('sec-gpc');
  const doNotTrack = (await headers()).get('dnt');
  let shouldLoadAnalytics = true;
  if(gpcHeader === '1' || doNotTrack === '1') {
    shouldLoadAnalytics = false;
  }
  return (
    <html lang="en">
      <body className="antialiased">
      <h1 className="hidden">helloyanis</h1>
      <link rel="alternate" hrefLang="fr" href="https://xn--3s8h30f.ws" />
      <link rel="alternate" hrefLang="en" href="https://xn--3s8h30f.ws" />
      <Navbar />
      <FairyDustCursor />
      <Link rel="me" href="https://piaille.fr/@helloyanis" className="hidden">Mastodon</Link>
      <Link rel="me" href="https://furries.club/@helloyanis" className="hidden">Mastodon</Link>
      <Link rel="me" href="https://github.com/helloyanis" className="hidden">GitHub</Link>
      {children}
      <AnalyticsAlert shouldLoadAnalytics={shouldLoadAnalytics} />
      {(shouldLoadAnalytics) && <GoogleAnalytics gaId="G-X4R5V1RGB2"/>}
      </body>
    </html>
  );
}
