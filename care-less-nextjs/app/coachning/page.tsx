import { Metadata } from "next";
import VideoHero from "@/components/VideoHero";
import Button from "@/components/Button";

export const metadata: Metadata = {
  title: "Coachning",
  description:
    "Personlig coachning som hjälper dig att nå dina mål och skapa positiva förändringar i ditt liv. Individuell coachning och hypnocoaching i Göteborg.",
};

const hypnoCoachingBenefits = [
  "Ökad motivation och fokus",
  "Djupare självkännedom",
  "Bearbetning av blockeringar",
  "Starkare självförtroende",
  "Konkreta handlingsplaner",
];

const coachingProcessSteps = [
  "Nulägesanalys - var du befinner dig idag",
  "Målsättning - vart du vill nå",
  "Identifiera hinder och resurser",
  "Konkreta strategier och handlingsplaner",
  "Uppföljning och justering",
];

const coachingAreas = [
  "Karriär och arbetsliv",
  "Relationer och kommunikation",
  "Personlig utveckling",
  "Stresshantering",
  "Livsstilsförändringar",
  "Självledarskap",
  "Beslutsfattande",
  "Work-life balance",
];

export default function CoachningPage() {
  return (
    <>
      {/* Hero Section - Fixed proportional height */}
      <VideoHero
        videoSrc="/videos/coachning-ban.mp4"
        posterSrc="/images/coachning-fallback.jpg"
        height="medium"
      >
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 max-w-xl mx-auto">
          <h1 className="text-h2 text-black mb-4">Coachning</h1>
          <p className="text-body text-[#666666] mb-6">
            Personlig coachning som hjälper dig att nå dina mål och skapa de
            förändringar du önskar i ditt liv.
          </p>
          <Button href="#individual-coaching" variant="primary">
            Utforska
          </Button>
        </div>
      </VideoHero>

      {/* Individual Coaching Section */}
      <section id="individual-coaching" className="section-spacing bg-white scroll-mt-24">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-h2 mb-4">Individuell coachning</h2>
            <p className="text-body-large text-[#666666] max-w-2xl mx-auto">
              Skräddarsydd coachning för dig som vill skapa förändring och nå dina mål
            </p>
          </div>

          {/* Hypnocoaching Card */}
          <div className="mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-h3 mb-6">Hypnocoaching - en unik kombination</h3>
                <p className="text-body text-[#666666] mb-6">
                  Hypnocoaching kombinerar traditionell coachning med kraften i
                  hypnos. Genom att arbeta med både det medvetna och
                  undermedvetna sinnet kan vi uppnå djupare och mer varaktiga
                  resultat.
                </p>
                <ul className="space-y-3 mb-6">
                  {hypnoCoachingBenefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-3">
                      <svg
                        className="w-5 h-5 text-[#2969FF] flex-shrink-0 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-body">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-[#EFEDEB] rounded-2xl aspect-video flex items-center justify-center">
                <div className="text-center text-[#666666]">
                  <svg
                    className="w-16 h-16 mx-auto mb-4 opacity-40"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    />
                  </svg>
                  <p className="text-sm">Bild placeholder</p>
                </div>
              </div>
            </div>
          </div>

          {/* Coaching Process Card */}
          <div className="mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 bg-[#EFEDEB] rounded-2xl aspect-video flex items-center justify-center">
                <div className="text-center text-[#666666]">
                  <svg
                    className="w-16 h-16 mx-auto mb-4 opacity-40"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                    />
                  </svg>
                  <p className="text-sm">Bild placeholder</p>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <h3 className="text-h3 mb-6">Coachingprocessen</h3>
                <p className="text-body text-[#666666] mb-6">
                  En strukturerad process som tar dig från nuläge till önskat
                  läge, med tydliga steg och konkreta verktyg längs vägen.
                </p>
                <ol className="space-y-3 mb-6">
                  {coachingProcessSteps.map((step, index) => (
                    <li key={step} className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#2969FF] text-white text-sm flex items-center justify-center font-medium">
                        {index + 1}
                      </span>
                      <span className="text-body">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>

          {/* Coaching Areas Card */}
          <div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-h3 mb-6">Områden där coachning kan hjälpa dig</h3>
                <p className="text-body text-[#666666] mb-6">
                  Coachning kan vara till nytta i många olika livssituationer
                  och utmaningar.
                </p>
                <ul className="grid grid-cols-2 gap-3">
                  {coachingAreas.map((area) => (
                    <li key={area} className="flex items-center gap-2">
                      <svg
                        className="w-4 h-4 text-[#2969FF]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                      <span className="text-body-small">{area}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-[#EFEDEB] rounded-2xl aspect-video flex items-center justify-center">
                <div className="text-center text-[#666666]">
                  <svg
                    className="w-16 h-16 mx-auto mb-4 opacity-40"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                  <p className="text-sm">Bild placeholder</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="section-spacing bg-[#EFEDEB]">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-h3 mb-6">Min coachningsfilosofi</h2>
            <p className="text-body-large text-[#666666] mb-6">
              Jag tror på att alla människor har resurser och svar inom sig.
              Min roll som coach är att ställa de rätta frågorna och skapa ett
              tryggt utrymme där du kan utforska dina möjligheter.
            </p>
            <p className="text-body text-[#666666]">
              Genom att kombinera traditionella coachingmetoder med hypnos och
              avslappningstekniker kan vi nå djupare insikter och skapa
              förändringar som verkligen håller. Varje session anpassas efter
              dina unika behov och mål.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-spacing bg-white">
        <div className="container-custom text-center">
          <div className="max-w-2xl mx-auto">
            <div className="text-[#2969FF] mb-6">
              <svg
                className="w-16 h-16 mx-auto"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                />
              </svg>
            </div>
            <h2 className="text-h3 mb-4">Låter det som något för dig?</h2>
            <p className="text-body-large text-[#666666] mb-8">
              Boka ett kostnadsfritt introduktionsmöte så pratar vi igenom dina
              mål och hur jag kan hjälpa dig att nå dem.
            </p>
            <Button href="/#booking" variant="primary" size="lg">
              Boka idag
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
