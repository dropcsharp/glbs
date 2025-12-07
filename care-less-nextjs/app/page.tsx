import VideoHero from "@/components/VideoHero";
import Button from "@/components/Button";
import ServiceCard from "@/components/ServiceCard";
import TestimonialCard from "@/components/TestimonialCard";
import BookingCard from "@/components/BookingCard";

const services = [
  {
    title: "Hypnoterapi",
    description:
      "Genom hypnos kan vi nå ditt undermedvetna och bearbeta djupt rotade mönster och blockeringar.",
    href: "/hypnosterapi",
  },
  {
    title: "Coachning",
    description:
      "Personlig coachning som hjälper dig att nå dina mål och skapa positiva förändringar i ditt liv.",
    href: "/coachning",
  },
  {
    title: "Reikihealing",
    description:
      "En avslappnande healing som balanserar din energi och främjar kroppens naturliga läkningsförmåga.",
    href: "/reiki",
  },
  {
    title: "Beröringsterapi",
    description:
      "Terapeutisk beröring som ger djup avslappning och lindrar stress och spänningar.",
    href: "/beroringsterapi",
  },
];

const bookingServices = [
  {
    id: "intro",
    title: "Introduktionsmöte",
    duration: "30 min",
    price: "Gratis",
  },
  {
    id: "coachning",
    title: "Coachning",
    duration: "50 min",
    price: "950 kr",
  },
  {
    id: "reiki",
    title: "Reiki-healing",
    duration: "50 min",
    price: "950 kr",
  },
  {
    id: "hyposyntes",
    title: "Hyposyntes-Coachning",
    duration: "1h 30min",
    price: "1 450 kr",
  },
  {
    id: "beroringsterapi",
    title: "Beröringsterapi",
    duration: "50 min",
    price: "850 kr",
  },
  {
    id: "coachning-online",
    title: "Coachning: Online",
    duration: "50 min",
    price: "950 kr",
  },
  {
    id: "hypnosterapi-online",
    title: "Hypnosterapi - online",
    duration: "50 min",
    price: "950 kr",
  },
];

const testimonials = [
  {
    id: "tommy",
    name: "Tommy",
    quote:
      "Jag kände mig avslappnad till kropp och själ efter både beröringsmassage och hypnosyntes.",
  },
  {
    id: "ann-helene",
    name: "Ann-Helene",
    quote:
      "Maria är alltid närvarande på ett väldigt fint sätt när hon arbetar med sina klienter. Genuin och inkännande med stor förmåga att veta vad som behövs i stunden. Maria är en varm och proffsig person där man som klient alltid känner sig trygg och sedd. Jag kan varmt rekommendera henne!",
  },
  {
    id: "maria-testimonial",
    name: "Maria",
    quote:
      "För mig som har svårt att komma ner i varv så gav Maria Reiki. Efteråt kände jag mig djupt avslappnad och fick mer energi. En väldigt bra upplevelse! Rekommenderas!",
  },
  {
    id: "pontus",
    name: "Pontus",
    quote:
      "Jag har gått i samtalsterapi av och till under 17 års tid, utan effekt. En session med Maria förändrade mitt liv för alltid, och jag är evigt tacksam.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <VideoHero
        videoSrc="/videos/home-ban.mp4"
        posterSrc="/images/hero-fallback.jpg"
        height="large"
        overlay="medium"
      >
        <h1 className="text-h1 text-shadow mb-6">Detoxa dina tankemönster</h1>
        <Button href="/#booking" variant="primary" size="lg">
          Boka Idag
        </Button>
      </VideoHero>

      {/* Services Section */}
      <section className="section-spacing bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-h2 mb-4">Våra tjänster</h2>
            <p className="text-body-large text-[#666666] max-w-2xl mx-auto">
              Du förtjänar att må bättre
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service) => (
              <ServiceCard
                key={service.href}
                title={service.title}
                description={service.description}
                href={service.href}
              />
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section-spacing bg-[#EFEDEB]">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative">
              <div className="aspect-square max-w-md mx-auto rounded-full overflow-hidden bg-[#D4D2CF]">
                <div className="w-full h-full flex items-center justify-center">
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
            </div>

            {/* Content */}
            <div>
              <h2 className="text-h2 mb-6">Om oss</h2>
              <p className="text-body-large text-[#666666] mb-6">
                Vårt förhållningssätt är att alla har svaren inuti sig själva.
                Genom mina behandlingar hjälper jag dig att hitta din inre kraft
                och skapa positiva förändringar i ditt liv.
              </p>
              <p className="text-body text-[#666666] mb-8">
                Jag heter Maria och arbetar som hyposyntesterapeut, reikihealer
                och beröringsterapeut i Göteborg. Min passion är att hjälpa
                människor att må bättre och nå sin fulla potential.
              </p>
              <Button href="/om-oss" variant="secondary">
                Läs mer
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section id="booking" className="section-spacing bg-white scroll-mt-24">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-h2 mb-4">Utforska din lösning</h2>
            <p className="text-body-large text-[#666666] max-w-2xl mx-auto">
              Boka ett kostnadsfritt introduktionsmöte och låt oss tillsammans
              hitta rätt väg för dig
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {bookingServices.map((service) => (
              <BookingCard
                key={service.id}
                title={service.title}
                duration={service.duration}
                price={service.price}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-spacing bg-[#EFEDEB]">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-h2 mb-4">Recensioner</h2>
            <p className="text-body-large text-[#666666] max-w-2xl mx-auto">
              Vad mina klienter säger
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((testimonial) => (
              <TestimonialCard
                key={testimonial.id}
                name={testimonial.name}
                quote={testimonial.quote}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#95B9FF] to-[#DCE8FF]">
          <div className="absolute inset-0 bg-black/30" />
        </div>

        {/* Content */}
        <div className="relative z-10 container-custom text-center text-white py-20">
          <h2 className="text-h2 text-shadow mb-6 max-w-3xl mx-auto">
            Berika ditt liv, lär känna dig själv
          </h2>
          <p className="text-body-large text-shadow max-w-2xl mx-auto mb-8">
            Läk förflutna sår och lär känna ditt ultimata jag.
          </p>
          <Button href="/#booking" variant="primary" size="lg">
            Boka Idag
          </Button>
        </div>
      </section>
    </>
  );
}
