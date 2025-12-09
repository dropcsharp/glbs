import { Metadata } from "next";
import Image from "next/image";
import VideoHero from "@/components/VideoHero";
import Button from "@/components/Button";

export const metadata: Metadata = {
  title: "Hypnosterapi | Online och i Göteborg",
  description:
    "Upptäck hypnoterapins transformerande kraft. Bearbeta trauman, övervinn mentala hinder och skapa positiva förändringar genom djup avslappning. Boka session i Göteborg eller online.",
  keywords: ["hypnosterapi online", "hypnosterapi göteborg", "hypnoterapi", "hyposyntesterapi"],
};

const benefits = [
  "Missbruk",
  "PTSD",
  "Hälsoproblem",
  "Viktförändring",
  "Depression",
  "Ångest",
  "Sömn",
  "Tvångstankar",
  "Prokrastinering",
  "Negativa tankebanor",
];

const features = [
  {
    title: "På distans eller i verkligheten",
    description:
      "Välj att träffas i min mottagning i Göteborg eller online via video. Båda alternativen är lika effektiva och du väljer det som passar dig bäst.",
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
  },
  {
    title: "Effektivt",
    description:
      "Hypnosterapi går djupare än traditionell terapi och når de rotorsaker som skapar dina problem. Vi arbetar med ditt undermedvetna för varaktiga resultat.",
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: "Snabb verkan",
    description:
      "Många upplever förbättring redan efter första sessionen. Vanligtvis ser vi betydande resultat efter 3-5 sessioner, jämfört med år av traditionell terapi.",
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

export default function HypnosterapiPage() {
  return (
    <>
      {/* Hero Section */}
      <VideoHero
        videoSrc="/videos/hypnosterapi-ban.mp4"
        posterSrc="/images/hypnosterapi-fallback.jpg"
        height="medium"
      >
        <h1 className="text-h1 text-shadow mb-4">Hypnosterapi</h1>
        <p className="text-body-large text-shadow max-w-2xl mx-auto mb-8">
          En kraftfull metod för att nå ditt undermedvetna och skapa varaktiga förändringar i ditt liv
        </p>
        <Button href="/#booking" variant="primary" size="lg">
          Boka idag
        </Button>
      </VideoHero>

      {/* Testimonial Feature Section */}
      <section className="section-spacing bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="bg-[#EFEDEB] rounded-2xl p-8 md:p-12">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                {/* Avatar */}
                <div className="flex-shrink-0">
                  <div className="w-24 h-24 rounded-full bg-[#D4D2CF] overflow-hidden relative">
                    <Image
                      src="/images/pontus-testimonial.webp"
                      alt="Pontus"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* Quote */}
                <div className="flex-1 text-center md:text-left">
                  <blockquote className="text-body-large text-[#666666] mb-4">
                    &ldquo;Jag har gått i samtalsterapi av och till under 17 års tid, utan effekt. En session med Maria förändrade mitt liv för alltid, och jag är evigt tacksam.&rdquo;
                  </blockquote>
                  <cite className="not-italic font-semibold text-body">— Pontus L.</cite>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                <Button href="/kontakt" variant="secondary">
                  Ta kontakt
                </Button>
                <Button href="/#booking" variant="primary">
                  Boka idag
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-spacing bg-[#EFEDEB]">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-h2 mb-4">Hypnosterapi kan hjälpa dig med</h2>
            <p className="text-body-large text-[#666666] max-w-2xl mx-auto">
              Hypnosterapi är en effektiv metod för att behandla en rad olika utmaningar
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {benefits.map((benefit, index) => (
              <div
                key={benefit}
                className="bg-white rounded-xl p-6 text-center hover:shadow-md transition-shadow"
              >
                <span className="text-h4 text-[#2969FF] font-bold block mb-2">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="text-body font-medium">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-spacing bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="text-center p-8 rounded-2xl bg-[#EFEDEB]"
              >
                <div className="text-[#2969FF] mb-6 flex justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-h5 mb-4">{feature.title}</h3>
                <p className="text-body text-[#666666]">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/hypnosterapi-cta-bg.webp"
            alt=""
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="relative z-10 container-custom">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-h2 text-shadow mb-4">Redo att ta itu med det som håller dig tillbaka?</h2>
            <p className="text-body-large text-shadow mb-8 max-w-2xl mx-auto">
              Hypnosterapi kan hjälpa dig att bearbeta trauman, bryta negativa mönster och skapa varaktig förändring. Ta första steget idag.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/kontakt" variant="secondary">
                Ta kontakt
              </Button>
              <Button href="/#booking" variant="primary">
                Boka idag
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
