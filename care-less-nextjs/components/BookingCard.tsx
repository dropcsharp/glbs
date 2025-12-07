import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface BookingCardProps {
  title: string;
  duration: string;
  price: string;
  imageSrc?: string;
  className?: string;
}

export default function BookingCard({
  title,
  duration,
  price,
  imageSrc,
  className,
}: BookingCardProps) {
  // Create a mailto link with the service pre-filled
  const mailtoLink = `mailto:kontakt@care-less.se?subject=Bokningsförfrågan: ${encodeURIComponent(title)}&body=${encodeURIComponent(`Hej!

Jag vill gärna boka:
Tjänst: ${title}
Längd: ${duration}
Pris: ${price}

Vänligen kontakta mig för att boka en tid.

Med vänlig hälsning,
[Ditt namn]
[Ditt telefonnummer]`)}`;

  return (
    <article
      className={cn(
        "bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover-scale",
        className
      )}
    >
      {/* Image */}
      <div className="relative h-48 bg-[#EFEDEB]">
        {imageSrc ? (
          <Image
            src={imageSrc}
            alt={title}
            fill
            className="object-cover"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 rounded-full bg-[#DCE8FF] flex items-center justify-center">
              <svg
                className="w-8 h-8 text-[#2969FF]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </div>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-h6 mb-2">{title}</h3>
        <div className="flex items-center gap-2 text-[#666666] mb-4">
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span className="text-body-small">{duration}</span>
        </div>

        <p className="text-h5 font-semibold mb-4">{price}</p>

        <Link
          href={mailtoLink}
          className="btn btn-primary w-full text-center"
        >
          Gör en bokningsförfrågan
        </Link>
      </div>
    </article>
  );
}
