import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  title: string;
  description: string;
  href: string;
  imageSrc?: string;
  className?: string;
}

export default function ServiceCard({
  title,
  description,
  href,
  imageSrc,
  className,
}: ServiceCardProps) {
  return (
    <Link href={href} className={cn("group block", className)}>
      <article className="card h-full flex flex-col">
        {/* Image Placeholder */}
        <div className="relative w-full h-48 mb-6 rounded-lg overflow-hidden bg-[#EFEDEB]">
          {imageSrc ? (
            <Image
              src={imageSrc}
              alt={title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
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
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </div>
            </div>
          )}
        </div>

        {/* Content */}
        <h3 className="text-h5 mb-3">{title}</h3>
        <p className="text-body text-[#666666] flex-grow mb-4">{description}</p>

        {/* Link */}
        <span className="text-body font-medium text-[#2969FF] group-hover:underline inline-flex items-center gap-2">
          Läs mer
          <svg
            className="w-4 h-4 transition-transform group-hover:translate-x-1"
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
        </span>
      </article>
    </Link>
  );
}
