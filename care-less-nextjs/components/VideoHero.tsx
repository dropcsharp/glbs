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
  overlay?: "light" | "medium" | "dark";
  className?: string;
}

export default function VideoHero({
  videoSrc,
  posterSrc = "/images/hero-fallback.jpg",
  title,
  subtitle,
  children,
  height = "large",
  overlay = "medium",
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

  const overlays = {
    light: "bg-black/20",
    medium: "bg-black/40",
    dark: "bg-black/60",
  };

  return (
    <section
      className={cn(
        "relative flex items-center justify-center overflow-hidden",
        heights[height],
        className
      )}
    >
      {/* Video or Fallback Image Background */}
      {videoSrc && !videoError ? (
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
          poster={posterSrc}
          onLoadedData={() => setVideoLoaded(true)}
          onError={() => setVideoError(true)}
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
      ) : (
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

      {/* Fallback background when no video/image */}
      {!videoSrc && !posterSrc && (
        <div className="absolute inset-0 bg-gradient-to-br from-[#DCE8FF] to-[#95B9FF]" />
      )}

      {/* Overlay */}
      <div className={cn("absolute inset-0", overlays[overlay])} />

      {/* Content */}
      <div className="relative z-10 container-custom text-center text-white">
        {title && (
          <h1 className="text-h1 text-shadow mb-4">{title}</h1>
        )}
        {subtitle && (
          <p className="text-body-large text-shadow max-w-2xl mx-auto mb-8">
            {subtitle}
          </p>
        )}
        {children}
      </div>
    </section>
  );
}
