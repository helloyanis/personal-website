import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";
import Navbar from "../components/navbar";
import './i18n';
import FairyDustCursor from "../components/fairydust-cursor";
import Link from "next/link";
import React from "react";
import AnalyticsAlert from "../components/analyticsAlert";
import ReactGA from "react-ga4";

export const metadata: Metadata = {
  title: "helloyanis",
  description: "🦊 My personal website with lots of cool stuff!",
  openGraph: {
    title: "helloyanis",
    description: "🦊 My personal website with lots of cool stuff!",
    type: "website",
    locale: "en",
    siteName: "helloyanis",
    images: [
      {
        url: "https://xn--0ci5768mq9c.ws/assets/images/profile.png",
        width: 1248,
        height: 1248,
        alt: "helloyanis",
      },
    ],
  },
  keywords: ["helloyanis", "yanis", "web", "developer", "portfolio", "rucoy calculator"],
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const gpcHeader = (await headers()).get('sec-gpc');
  const doNotTrack = (await headers()).get('dnt');
  const shouldLoadAnalytics = gpcHeader !== '1' || doNotTrack !== '1';
  if(shouldLoadAnalytics) {
    ReactGA.initialize("G-RZHWSNTY6V");
  }
  return (
    <html lang="en">
      <body className="antialiased">
      <h1 className="hidden">helloyanis</h1>
      <Navbar />
      <FairyDustCursor />
      <Link rel="me" href="https://piaille.fr/@helloyanis" className="hidden">Mastodon</Link>
      <Link rel="me" href="https://github.com/helloyanis" className="hidden">GitHub</Link>
      {children}
      <AnalyticsAlert shouldLoadAnalytics={shouldLoadAnalytics} />
      </body>
    </html>
  );
}
