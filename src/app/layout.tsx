import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import { siteContent } from "@/content/site";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  weight: "400",
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-instrument-serif",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0B1220",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteContent.meta.url),
  title: {
    default: siteContent.meta.title,
    template: "%s | Audacious Dreams Foundation",
  },
  description: siteContent.meta.description,
  keywords: [
    "Audacious Dreams Foundation",
    "ADF Vellore",
    "youth development India",
    "institutional partnership",
    "higher education enrichment",
    "Global Immersion Programme",
    "GIIP",
    "GCIP",
    "UNICEF LTA youth",
    "international student exchange",
    "sustainable development goals",
  ],
  authors: [{ name: "Audacious Dreams Foundation" }],
  creator: "Audacious Dreams Foundation",
  publisher: "Audacious Dreams Foundation",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: siteContent.meta.locale,
    url: siteContent.meta.url,
    title: siteContent.meta.ogTitle,
    description: siteContent.meta.ogDescription,
    siteName: siteContent.meta.siteName,
  },
  twitter: {
    card: "summary_large_image",
    title: siteContent.meta.ogTitle,
    description: siteContent.meta.ogDescription,
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geist.variable} ${geistMono.variable} ${instrumentSerif.variable} scroll-smooth`}
    >
      <body className="min-h-screen bg-paper text-ink font-sans selection:bg-accent selection:text-ink antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2.5 focus:bg-accent focus:text-ink focus:font-mono focus:text-xs focus:font-semibold focus:border focus:border-ink focus:outline-none"
        >
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
