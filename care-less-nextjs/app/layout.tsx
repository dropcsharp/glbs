import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://care-less.se"),
  title: {
    default: "Care less | Coachning, Hypnoterapi, Reiki och Beröringsterapi i Göteborg | Terapier Online",
    template: "%s | Care less",
  },
  description:
    "Care Less - Detoxa dina tankemönster. Vi erbjuder reiki-healing, beröringsterapi, coachning & hyposyntesterapi/hypnoterapi: både online och på plats i Göteborg. Kontakta oss för ett kostnadsfritt introduktionsmöte!",
  keywords: [
    "care less",
    "terapier online",
    "göteborg",
    "hypnosterapi",
    "hypnoterapi",
    "coachning",
    "reiki",
    "reikihealing",
    "beröringsterapi",
    "hyposyntesterapi",
    "terapi",
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
    title: "Care less | Coachning, Hypnoterapi, Reiki och Beröringsterapi i Göteborg",
    description:
      "Care Less - Detoxa dina tankemönster. Vi erbjuder reiki-healing, beröringsterapi, coachning & hyposyntesterapi: både online och på plats i Göteborg.",
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
    title: "Care less | Coachning, Hypnoterapi, Reiki och Beröringsterapi i Göteborg",
    description:
      "Care Less - Detoxa dina tankemönster. Vi erbjuder reiki-healing, beröringsterapi, coachning & hyposyntesterapi: både online och på plats i Göteborg.",
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
