import { Metadata } from "next";
import VideoHero from "@/components/VideoHero";
import Button from "@/components/Button";
import { Instagram, Facebook } from "lucide-react";

export const metadata: Metadata = {
  title: "Om Maria",
  description:
    "Lär känna Maria Larsson - hyposyntesterapeut, reikihealer och beröringsterapeut i Göteborg. Mitt förhållningssätt är att alla har svaren inuti sig själva.",
  keywords: ["Maria Larsson", "hyposyntesterapeut", "reikihealer", "beröringsterapeut", "Göteborg"],
};

const expertiseAreas = [
  {
    title: "Hyposyntesterapeut",
    description:
      "Genom hypnosyntes hjälper jag dig att nå ditt undermedvetna och bearbeta djupt rotade mönster.",
  },
  {
    title: "Reikihealer",
    description:
      "Reiki är en energihealing som hjälper till att balansera din energi och främja välmående.",
  },
  {
    title: "Beröringsterapeut",
    description:
      "Beröringsterapi ger djup avslappning och hjälper kroppen att läka sig själv.",
  },
];

const certifications = [
  "Certifierad Hyposyntesterapeut",
  "Certifierad Reikihealer Nivå 2",
  "Certifierad Beröringsterapeut",
];

const qualifications = [
  "Utbildning i kognitiv beteendeterapi",
  "Grundkurs i motiverande samtal",
  "Traumamedveten omsorg",
];

export default function OmOssPage() {
  return (
    <>
      {/* Hero Section */}
      <VideoHero
        videoSrc="/videos/omoss-ban.mp4"
        posterSrc="/images/omoss-fallback.jpg"
        height="medium"
      >
        <h1 className="text-h1 text-shadow">OM MIG</h1>
      </VideoHero>

      {/* Main Content Section */}
      <section className="section-spacing bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Image Column */}
            <div className="lg:col-span-4">
              <div className="sticky top-28">
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-[#EFEDEB] mb-4">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-[#666666]">
                      <svg
                        className="w-24 h-24 mx-auto mb-4 opacity-40"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                      </svg>
                      <p className="text-sm">Maria Larsson</p>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div className="flex items-center gap-4">
                  <a
                    href="https://www.instagram.com/careless.detoxatankemonster/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[#2969FF] hover:underline"
                  >
                    <Instagram className="w-5 h-5" />
                    <span>Instagram</span>
                  </a>
                  <a
                    href="https://www.facebook.com/profile.php?id=61566114849831"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[#2969FF] hover:underline"
                  >
                    <Facebook className="w-5 h-5" />
                    <span>Facebook</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Content Column */}
            <div className="lg:col-span-8">
              <h2 className="text-h3 mb-8">
                Mitt förhållningssätt är att alla har svaren inuti sig själva.
              </h2>

              <div className="prose prose-lg max-w-none text-[#666666]">
                <p className="text-body-large mb-6">
                  Jag heter Maria och har arbetat med personlig utveckling och
                  terapi i många år. Min passion är att hjälpa människor att
                  hitta sin inre kraft och skapa positiva förändringar i sina
                  liv.
                </p>

                <p className="text-body mb-6">
                  Min resa började med en egen transformation. Efter att ha
                  upplevt kraften i hypnosyntes och energiarbete bestämde jag
                  mig för att utbilda mig och hjälpa andra att uppleva samma
                  frigörelse och läkning.
                </p>

                <p className="text-body mb-6">
                  Jag arbetar med ett holistiskt perspektiv där jag ser hela
                  människan - kropp, sinne och själ. Varje klient är unik och
                  jag anpassar alltid mina metoder efter dina individuella behov
                  och mål.
                </p>

                <p className="text-body mb-6">
                  Min mottagning ligger i Göteborg, men jag erbjuder även
                  sessioner online för dig som föredrar att träffas digitalt
                  eller bor på annan ort.
                </p>

                <p className="text-body mb-8">
                  Jag tror på att möta varje person med respekt, värme och
                  genuint engagemang. Tillsammans hittar vi vägen till ditt
                  bästa jag.
                </p>
              </div>

              {/* Expertise Areas */}
              <div className="mt-12">
                <h3 className="text-h4 mb-6">Mina specialområden</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {expertiseAreas.map((area) => (
                    <div
                      key={area.title}
                      className="p-6 bg-[#EFEDEB] rounded-xl"
                    >
                      <h4 className="text-h6 mb-3">{area.title}</h4>
                      <p className="text-body-small text-[#666666]">
                        {area.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="section-spacing bg-[#EFEDEB]">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Certifications */}
            <div>
              <h3 className="text-h4 mb-6">Certifieringar</h3>
              <ul className="space-y-4">
                {certifications.map((cert, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <svg
                      className="w-6 h-6 text-[#2969FF] flex-shrink-0 mt-0.5"
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
                    <span className="text-body">{cert}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Qualifications */}
            <div>
              <h3 className="text-h4 mb-6">Kvalifikationer</h3>
              <ul className="space-y-4">
                {qualifications.map((qual, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <svg
                      className="w-6 h-6 text-[#2969FF] flex-shrink-0 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                      />
                    </svg>
                    <span className="text-body">{qual}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-spacing bg-white">
        <div className="container-custom text-center">
          <h2 className="text-h3 mb-4">Redo att ta nästa steg?</h2>
          <p className="text-body-large text-[#666666] max-w-2xl mx-auto mb-8">
            Boka ett kostnadsfritt introduktionsmöte så tar vi reda på hur jag
            bäst kan hjälpa dig.
          </p>
          <Button href="/#booking" variant="primary" size="lg">
            Boka Idag
          </Button>
        </div>
      </section>
    </>
  );
}
