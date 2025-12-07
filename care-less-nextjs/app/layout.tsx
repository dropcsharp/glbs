import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://care-less.se"),
  title: {
    default: "Care less | Detoxa dina tankemönster",
    template: "%s | Care less",
  },
  description:
    "Care less erbjuder hypnosterapi, coachning, reikihealing och beröringsterapi i Göteborg. Boka ditt gratis introduktionsmöte idag.",
  keywords: [
    "hypnosterapi",
    "hypnos",
    "coachning",
    "reiki",
    "reikihealing",
    "beröringsterapi",
    "terapi",
    "Göteborg",
    "avslappning",
    "personlig utveckling",
  ],
  authors: [{ name: "Maria Larsson" }],
  creator: "Care less",
  openGraph: {
    type: "website",
    locale: "sv_SE",
    url: "https://care-less.se",
    siteName: "Care less",
    title: "Care less | Detoxa dina tankemönster",
    description:
      "Care less erbjuder hypnosterapi, coachning, reikihealing och beröringsterapi i Göteborg.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Care less - Detoxa dina tankemönster",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Care less | Detoxa dina tankemönster",
    description:
      "Care less erbjuder hypnosterapi, coachning, reikihealing och beröringsterapi i Göteborg.",
    images: ["/images/og-image.jpg"],
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
    <html lang="sv">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
