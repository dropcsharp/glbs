import { Metadata } from "next";
import Button from "@/components/Button";

export const metadata: Metadata = {
  title: "Tillgänglighetsredogörelse",
  description:
    "Tillgänglighetsredogörelse för care-less.se. Läs om vårt arbete för att göra webbplatsen tillgänglig för alla.",
};

export default function TillganglighetPage() {
  return (
    <>
      {/* Header Spacer */}
      <div className="h-24" />

      {/* Content */}
      <section className="section-spacing bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-h2 mb-8">Tillgänglighetsredogörelse</h1>

            <div className="prose prose-lg max-w-none text-[#666666]">
              <p className="text-body-large mb-6">
                Care less strävar efter att göra webbplatsen care-less.se
                tillgänglig för alla användare, oavsett funktionsvariation.
              </p>

              <h2 className="text-h4 text-black mt-8 mb-4">
                Vår ambition
              </h2>
              <p className="text-body mb-6">
                Vi arbetar kontinuerligt för att webbplatsen ska uppfylla
                tillgänglighetskraven enligt Web Content Accessibility
                Guidelines (WCAG) 2.1 nivå AA.
              </p>

              <h2 className="text-h4 text-black mt-8 mb-4">
                Vad vi har gjort
              </h2>
              <ul className="list-disc pl-6 space-y-2 text-body mb-6">
                <li>Semantisk HTML-struktur för skärmläsare</li>
                <li>Tillräcklig färgkontrast enligt WCAG-standarder</li>
                <li>Tydliga fokusindikatorer för tangentbordsnavigering</li>
                <li>Alternativtexter för bilder</li>
                <li>Responsiv design för olika enheter</li>
                <li>Tydliga formuläretiketter och felmeddelanden</li>
              </ul>

              <h2 className="text-h4 text-black mt-8 mb-4">
                Kända begränsningar
              </h2>
              <p className="text-body mb-6">
                Vi är medvetna om att vissa delar av webbplatsen kan förbättras
                ytterligare och arbetar aktivt med detta.
              </p>

              <h2 className="text-h4 text-black mt-8 mb-4">
                Kontakta oss
              </h2>
              <p className="text-body mb-6">
                Om du upplever problem med tillgängligheten på vår webbplats,
                vänligen kontakta oss så hjälper vi dig gärna.
              </p>
              <p className="text-body mb-8">
                E-post:{" "}
                <a
                  href="mailto:kontakt@care-less.se"
                  className="text-[#2969FF] hover:underline"
                >
                  kontakt@care-less.se
                </a>
              </p>

              <p className="text-body-small">
                Senast uppdaterad: December 2024
              </p>
            </div>

            <div className="mt-12">
              <Button href="/" variant="secondary">
                Tillbaka till startsidan
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
