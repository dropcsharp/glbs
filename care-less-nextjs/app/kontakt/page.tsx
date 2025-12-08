import { Metadata } from "next";
import VideoHero from "@/components/VideoHero";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "Kontakta Care less för att boka en tid eller ställa frågor. Vi finns i Göteborg och erbjuder även sessioner online.",
};

export default function KontaktPage() {
  return (
    <>
      {/* Hero Section */}
      <VideoHero
        videoSrc="/videos/kontakt-ban.mp4"
        posterSrc="/images/kontakt-fallback.jpg"
        height="small"
      >
        <h1 className="text-h1 text-shadow">KONTAKT</h1>
      </VideoHero>

      {/* Contact Section */}
      <section className="section-spacing bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-h3 mb-6">Skicka ett meddelande</h2>
              <p className="text-body text-[#666666] mb-8">
                Fyll i formuläret nedan så återkommer jag till dig så snart som
                möjligt.
              </p>
              <ContactForm />
            </div>

            {/* Contact Info */}
            <div>
              <div className="bg-[#EFEDEB] rounded-2xl p-8 sticky top-28">
                <h2 className="text-h3 mb-6">Kontaktuppgifter</h2>

                <div className="space-y-6">
                  {/* Address */}
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#DCE8FF] flex items-center justify-center">
                      <svg
                        className="w-6 h-6 text-[#2969FF]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-h6 mb-1">Adress</h3>
                      <p className="text-body text-[#666666]">
                        Prästgårdsängen 21
                        <br />
                        Göteborg
                      </p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#DCE8FF] flex items-center justify-center">
                      <svg
                        className="w-6 h-6 text-[#2969FF]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-h6 mb-1">E-post</h3>
                      <a
                        href="mailto:kontakt@care-less.se"
                        className="text-body text-[#2969FF] hover:underline"
                      >
                        kontakt@care-less.se
                      </a>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#DCE8FF] flex items-center justify-center">
                      <svg
                        className="w-6 h-6 text-[#2969FF]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-h6 mb-1">Telefon</h3>
                      <a
                        href="tel:+46706978648"
                        className="text-body text-[#2969FF] hover:underline"
                      >
                        070 697 864 8
                      </a>
                    </div>
                  </div>
                </div>

                {/* Opening Hours */}
                <div className="mt-8 pt-8 border-t border-[#D4D2CF]">
                  <h3 className="text-h6 mb-4">Öppettider</h3>
                  <p className="text-body text-[#666666]">
                    Mottagning efter överenskommelse
                  </p>
                  <p className="text-body-small text-[#666666] mt-2">
                    Jag svarar på meddelanden så snart jag kan, vanligtvis inom
                    24 timmar på vardagar.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
