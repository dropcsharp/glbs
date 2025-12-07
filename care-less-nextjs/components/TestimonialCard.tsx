import Image from "next/image";
import { cn } from "@/lib/utils";

interface TestimonialCardProps {
  name: string;
  quote: string;
  imageSrc?: string;
  className?: string;
}

export default function TestimonialCard({
  name,
  quote,
  imageSrc,
  className,
}: TestimonialCardProps) {
  return (
    <article
      className={cn(
        "relative overflow-hidden rounded-2xl p-8 min-h-[300px] flex flex-col justify-end",
        className
      )}
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        {imageSrc ? (
          <Image
            src={imageSrc}
            alt=""
            fill
            className="object-cover"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-[#95B9FF] to-[#DCE8FF]" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-white">
        {/* Quote Icon */}
        <svg
          className="w-10 h-10 mb-4 opacity-60"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>

        <blockquote className="text-body-large mb-4 line-clamp-6">
          {quote}
        </blockquote>

        <cite className="not-italic font-semibold text-body">— {name}</cite>
      </div>
    </article>
  );
}
