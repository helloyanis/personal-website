import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/navbar";
import './i18n';
import FairyDustCursor from "./components/fairydust-cursor";
import Link from "next/link";

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        <h1 className="hidden">helloyanis</h1>
        <Navbar />
        <FairyDustCursor />
        <Link rel="me" href="https://piaille.fr/@helloyanis" className="hidden">Mastodon</Link>
        {children}
      </body>
    </html>
  );
}
