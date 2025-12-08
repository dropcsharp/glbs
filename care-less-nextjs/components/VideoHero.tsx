"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface VideoHeroProps {
  videoSrc?: string;
  posterSrc?: string;
  title?: string;
  subtitle?: string;
  children?: React.ReactNode;
  height?: "full" | "large" | "medium" | "small";
  fadeColor?: string;
  className?: string;
}

export default function VideoHero({
  videoSrc,
  posterSrc,
  title,
  subtitle,
  children,
  height = "large",
  fadeColor = "#FFFFFF",
  className,
}: VideoHeroProps) {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        setVideoError(true);
      });
    }
  }, []);

  const heights = {
    full: "min-h-screen",
    large: "min-h-[60vh]",
    medium: "min-h-[50vh]",
    small: "min-h-[40vh]",
  };

  const showVideo = videoSrc && !videoError;

  return (
    <section
      className={cn(
        "relative flex items-center justify-center overflow-hidden",
        heights[height],
        className
      )}
    >
      {/* Fallback Image Background - always render if posterSrc exists */}
      {posterSrc && (
        <div className="absolute inset-0">
          <Image
            src={posterSrc}
            alt=""
            fill
            className="object-cover"
            priority
          />
        </div>
      )}

      {/* Fallback gradient when no image/video */}
      {!posterSrc && !videoSrc && (
        <div className="absolute inset-0 bg-gradient-to-br from-[#DCE8FF] to-[#95B9FF]" />
      )}

      {/* Video - renders on top of fallback image */}
      {showVideo && (
        <video
          ref={videoRef}
          className={cn(
            "absolute inset-0 w-full h-full object-cover transition-opacity duration-500",
            videoLoaded ? "opacity-100" : "opacity-0"
          )}
          autoPlay
          muted
          loop
          playsInline
          onLoadedData={() => setVideoLoaded(true)}
          onError={() => setVideoError(true)}
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
      )}

      {/* Bottom fade transition to next section */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{
          background: `linear-gradient(to bottom, transparent, ${fadeColor})`,
        }}
      />

      {/* Content with deblur animation */}
      <div className="relative z-10 container-custom text-center text-white">
        {title && (
          <h1 className="text-h1 text-shadow mb-4 hero-deblur">{title}</h1>
        )}
        {subtitle && (
          <p className="text-body-large text-shadow max-w-2xl mx-auto mb-8 hero-deblur-delay-1">
            {subtitle}
          </p>
        )}
        <div className="hero-deblur-delay-2">{children}</div>
      </div>
    </section>
  );
}
