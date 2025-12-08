import { Metadata } from "next";
import VideoHero from "@/components/VideoHero";
import Button from "@/components/Button";

export const metadata: Metadata = {
  title: "Beröringsterapi",
  description:
    "Beröringsterapi ger djup avslappning och hjälper kroppen att läka sig själv. Terapeutisk beröring för stressreduktion och emotionell balans.",
};

const howItWorks = [
  "Beröringsterapi bygger på kroppens medfödda behov av beröring",
  "Genom medveten, terapeutisk beröring aktiveras nervsystemets lugnande del",
  "Hormonet oxytocin frisätts, vilket skapar känslor av trygghet och välbefinnande",
  "Behandlingen är lugn, respektfull och anpassas efter dina behov",
];

const duringSession = [
  "Du ligger bekvämt, fullt påklädd",
  "Jag använder lugna, medvetna beröringar",
  "Du kan vara helt passiv och bara ta emot",
  "Sessionen varar ca 50 minuter",
  "Efteråt får du tid att landa i lugn och ro",
];

const benefits = [
  "Djup avslappning och stressreduktion",
  "Minskat muskelspänningar",
  "Ökad kroppsmedvetenhet",
  "Emotionell frigörelse och balans",
  "Bättre sömn",
  "Stärkt självkänsla och självacceptans",
];

const helpfulFor = [
  "Stress och utbrändhet",
  "Ångest och oro",
  "Sömnsvårigheter",
  "Beröringsrädsla",
  "Låg självkänsla",
  "Trauma och PTSD",
  "Depression",
  "Ensamhet",
];

export default function BeroringsterapiPage() {
  return (
    <>
      {/* Hero Section */}
      <VideoHero
        videoSrc="/videos/beroringsterapi-ban.mp4"
        posterSrc="/images/beroringsterapi-fallback.jpg"
        height="medium"
      >
        <h1 className="text-h1 text-shadow mb-4">Beröringsterapi</h1>
        <p className="text-body-large text-shadow max-w-2xl mx-auto mb-8">
          Terapeutisk beröring som ger djup avslappning och hjälper dig att återkoppla till din kropp
        </p>
        <Button href="/#booking" variant="primary" size="lg">
          Boka idag
        </Button>
      </VideoHero>

      {/* How It Works Section */}
      <section className="section-spacing bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-h2 mb-6">Hur fungerar beröringsterapi?</h2>
              <p className="text-body text-[#666666] mb-6">
                Beröring är ett av våra mest grundläggande behov. Forskning
                visar att terapeutisk beröring kan ha djupgående effekter på
                både fysisk och psykisk hälsa.
              </p>
              <ul className="space-y-4 mb-8">
                {howItWorks.map((point) => (
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
              <Button href="/#booking" variant="secondary">
                Prova på!
              </Button>
            </div>
            <div className="bg-[#EFEDEB] rounded-2xl aspect-square flex items-center justify-center">
              <div className="text-center text-[#666666]">
                <svg
                  className="w-20 h-20 mx-auto mb-4 opacity-40"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11"
                  />
                </svg>
                <p className="text-sm">Bild placeholder</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* During Session Section */}
      <section className="section-spacing bg-[#EFEDEB]">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-h2 mb-8 text-center">
              Vad händer under en session?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {duringSession.map((step, index) => (
                <div
                  key={step}
                  className="bg-white rounded-xl p-6 text-center"
                >
                  <span className="text-h4 text-[#2969FF] font-bold block mb-3">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="text-body">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-spacing bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-h3 mb-6">Fördelar med beröringsterapi:</h2>
              <ul className="space-y-4">
                {benefits.map((benefit) => (
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
            <div>
              <h2 className="text-h3 mb-6">Särskilt hjälpsamt vid:</h2>
              <ul className="space-y-4">
                {helpfulFor.map((item) => (
                  <li key={item} className="flex items-start gap-3">
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
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                    <span className="text-body">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
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
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
                <p className="text-sm">Bild placeholder</p>
              </div>
            </div>
            <div>
              <h2 className="text-h3 mb-4">Låter det som något för dig?</h2>
              <p className="text-body-large text-[#666666] mb-6">
                Beröringsterapi är för dig som längtar efter djup avslappning
                och vill återkoppla till din kropp på ett tryggt och
                respektfullt sätt.
              </p>
              <p className="text-body text-[#666666] mb-8">
                Boka ett kostnadsfritt introduktionsmöte så berättar jag mer om
                hur beröringsterapi kan hjälpa just dig.
              </p>
              <Button href="/#booking" variant="primary" size="lg">
                BOKA HÄR!
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
