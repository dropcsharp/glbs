"use client";

import { useEffect, useRef, useState, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface AnimateOnScrollProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  threshold?: number;
}

export default function AnimateOnScroll({
  children,
  className,
  delay = 0,
  threshold = 0.1,
}: AnimateOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsExiting(false);
          setIsVisible(true);
        } else {
          // Check if element is above or below viewport
          const rect = entry.boundingClientRect;
          if (rect.top < 0) {
            // Element is above viewport - shrink up
            setIsExiting(true);
            setIsVisible(false);
          } else {
            // Element is below viewport - reset to grow from bottom
            setIsExiting(false);
            setIsVisible(false);
          }
        }
      },
      {
        threshold,
        rootMargin: "-50px 0px -50px 0px",
      }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [threshold]);

  const delayClass = delay > 0 ? `delay-${delay}` : "";

  return (
    <div
      ref={ref}
      className={cn(
        "animate-on-scroll",
        isVisible && "is-visible",
        isExiting && "is-exiting",
        delayClass,
        className
      )}
    >
      {children}
    </div>
  );
}
