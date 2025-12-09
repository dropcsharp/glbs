"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const services = [
  { label: "Hypnosterapi", href: "/hypnosterapi" },
  { label: "Reiki", href: "/reiki" },
  { label: "Coachning", href: "/coachning" },
  { label: "Beröringsterapi", href: "/beroringsterapi" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [logoError, setLogoError] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white shadow-md"
          : "bg-white/95 backdrop-blur-sm"
      )}
    >
      <div className="container-custom">
        <nav className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            {!logoError ? (
              <Image
                src="/images/logo.webp"
                alt="Care less"
                width={150}
                height={150}
                className="w-36 h-36 object-contain"
                onError={() => setLogoError(true)}
              />
            ) : (
              <div className="flex flex-col">
                <span className="text-2xl font-semibold tracking-tight">
                  <span style={{ color: "#DCE8FF" }}>Care</span>{" "}
                  <span className="text-black">less</span>
                </span>
                <span className="text-xs tracking-wide" style={{ color: "#666666" }}>
                  Detoxa dina tankemönster
                </span>
              </div>
            )}
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/om-oss"
              className="text-body hover:text-blue transition-colors"
              style={{ color: "#000000" }}
            >
              Om oss
            </Link>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button
                className="flex items-center gap-1 text-body hover:text-blue transition-colors"
                style={{ color: "#000000" }}
                aria-expanded={isServicesOpen}
                aria-haspopup="true"
              >
                Tjänster
                <ChevronDown
                  className={cn(
                    "w-4 h-4 transition-transform",
                    isServicesOpen && "rotate-180"
                  )}
                />
              </button>

              {isServicesOpen && (
                <div className="absolute top-full left-0 pt-2">
                  <div className="bg-white rounded-lg shadow-lg border border-gray-100 py-2 min-w-[200px]">
                    {services.map((service) => (
                      <Link
                        key={service.href}
                        href={service.href}
                        className="block px-4 py-2 text-body hover:bg-beige transition-colors"
                        style={{ color: "#000000" }}
                      >
                        {service.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/#booking"
              className="text-body hover:text-blue transition-colors"
              style={{ color: "#000000" }}
            >
              Boka
            </Link>

            <Link
              href="/kontakt"
              className="text-body hover:text-blue transition-colors"
              style={{ color: "#000000" }}
            >
              Kontakt
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Stäng meny" : "Öppna meny"}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="py-4 space-y-1">
              <Link
                href="/om-oss"
                className="block px-4 py-3 text-body hover:bg-beige transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Om oss
              </Link>

              <div className="px-4 py-3">
                <button
                  className="flex items-center gap-1 text-body w-full text-left"
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                  aria-expanded={isServicesOpen}
                >
                  Tjänster
                  <ChevronDown
                    className={cn(
                      "w-4 h-4 transition-transform",
                      isServicesOpen && "rotate-180"
                    )}
                  />
                </button>

                {isServicesOpen && (
                  <div className="mt-2 ml-4 space-y-1">
                    {services.map((service) => (
                      <Link
                        key={service.href}
                        href={service.href}
                        className="block py-2 text-body-small hover:text-blue transition-colors"
                        style={{ color: "#666666" }}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {service.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                href="/#booking"
                className="block px-4 py-3 text-body hover:bg-beige transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Boka
              </Link>

              <Link
                href="/kontakt"
                className="block px-4 py-3 text-body hover:bg-beige transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Kontakt
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
