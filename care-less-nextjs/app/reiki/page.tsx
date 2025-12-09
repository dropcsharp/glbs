import { Metadata } from "next";
import Image from "next/image";
import VideoHero from "@/components/VideoHero";
import Button from "@/components/Button";

export const metadata: Metadata = {
  title: "Reikihealing i Göteborg",
  description:
    "Balansera kropp och själ med professionell Reikihealing. Upplev djup avslappning, stressreducering och förbättrat välbefinnande genom universell energi. Boka din session idag.",
  keywords: ["reiki", "reikihealing", "energihealing", "Göteborg"],
};

const duringSessionPoints = [
  "Du ligger bekvämt, fullt påklädd på en behandlingsbänk",
  "Jag placerar mina händer lätt på eller strax ovanför din kropp",
  "Du kan känna värme, stickningar eller djup avslappning",
  "Sessionen varar ca 50 minuter",
  "Efteråt får du tid att komma tillbaka i lugn takt",
];

const potentialBenefits = [
  "Djup avslappning och stressreduktion",
  "Ökad energi och vitalitet",
  "Bättre sömn",
  "Lindring av fysisk smärta",
  "Emotionell balans",
  "Stärkt immunförsvar",
  "Ökad klarhet och fokus",
];

const complementaryUses = [
  "Kronisk smärta",
  "Ångest och depression",
  "Sömnproblem",
  "Stress och utbrändhet",
  "Under cancerbehandling (som komplement)",
  "Före och efter operationer",
];

export default function ReikiPage() {
  return (
    <>
      {/* Hero Section */}
      <VideoHero
        videoSrc="/videos/reiki-ban.mp4"
        posterSrc="/images/reiki-fallback.jpg"
        height="medium"
      >
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 max-w-xl mx-auto">
          <h1 className="text-h2 text-black mb-4">Reikihealing</h1>
          <p className="text-body text-[#666666]">
            En avslappnande energihealing som balanserar din energi och främjar
            kroppens naturliga läkningsförmåga.
          </p>
        </div>
      </VideoHero>

      {/* What is Reiki Section */}
      <section className="section-spacing bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-h2 mb-6 text-center">Vad är reiki?</h2>
            <p className="text-body-large text-[#666666] mb-6">
              Reiki är en japansk healingmetod som arbetar med kroppens
              energisystem. Ordet &ldquo;Reiki&rdquo; betyder &ldquo;universell livsenergi&rdquo; och
              metoden grundades i Japan i början av 1900-talet av Mikao Usui.
            </p>
            <p className="text-body text-[#666666] mb-6">
              Genom lätta handpåläggningar kanaliseras läkande energi till
              mottagaren, vilket hjälper till att balansera kroppens
              energicentra (chakran) och främja självläkning på fysisk,
              emotionell och andlig nivå.
            </p>
            <p className="text-body text-[#666666]">
              Reiki är en icke-invasiv behandling som passar de flesta. Du
              behöver inte tro på något speciellt för att det ska fungera -
              energin arbetar oavsett.
            </p>
          </div>
        </div>
      </section>

      {/* During Session Section */}
      <section className="section-spacing bg-[#EFEDEB]">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="bg-[#D4D2CF] rounded-2xl aspect-video flex items-center justify-center">
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
                    d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                  />
                </svg>
                <p className="text-sm">Bild placeholder</p>
              </div>
            </div>
            <div>
              <h2 className="text-h3 mb-6">Under en Reikibehandling:</h2>
              <ul className="space-y-4">
                {duringSessionPoints.map((point) => (
                  <li key={point} className="flex items-start gap-3">
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
                    <span className="text-body">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Potential Benefits Section */}
      <section className="section-spacing bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-h3 mb-6">Potentiella fördelar:</h2>
              <ul className="space-y-4">
                {potentialBenefits.map((benefit) => (
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
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
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
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
                <p className="text-sm">Bild placeholder</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Complementary Medicine Section */}
      <section className="section-spacing bg-[#EFEDEB]">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="bg-[#D4D2CF] rounded-2xl aspect-video flex items-center justify-center order-2 lg:order-1">
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
                    d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                  />
                </svg>
                <p className="text-sm">Bild placeholder</p>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-h3 mb-6">Reiki som komplementär behandling</h2>
              <p className="text-body text-[#666666] mb-6">
                Reiki ersätter inte medicinsk behandling, men kan användas som
                ett värdefullt komplement för att stödja kroppens läkning och
                öka välbefinnandet. Det är särskilt hjälpsamt vid:
              </p>
              <ul className="space-y-3">
                {complementaryUses.map((use) => (
                  <li key={use} className="flex items-center gap-3">
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
                    <span className="text-body">{use}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/reiki-cta-bg.webp"
            alt=""
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="relative z-10 container-custom text-center text-white">
          <h2 className="text-h2 text-shadow mb-4">PROVA IDAG!</h2>
          <p className="text-body-large text-shadow max-w-2xl mx-auto mb-8">
            Boka ett kostnadsfritt introduktionsmöte och upplev kraften i reiki.
          </p>
          <Button href="/#booking" variant="primary" size="lg">
            BOKA INTRODUKTIONSMÖTE
          </Button>
        </div>
      </section>
    </>
  );
}
