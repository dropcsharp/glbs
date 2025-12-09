import Link from "next/link";
import { Instagram, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#606055] text-white">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h3 className="text-h6 font-semibold mb-6">Kontakt</h3>
            <address className="not-italic space-y-3 text-body">
              <p>Prästgårdsängen 21, Göteborg</p>
              <p>
                <a
                  href="mailto:kontakt@care-less.se"
                  className="hover:underline"
                >
                  kontakt@care-less.se
                </a>
              </p>
              <p>
                <a href="tel:+46706978648" className="hover:underline">
                  070 697 864 8
                </a>
              </p>
            </address>

            {/* Social Links */}
            <div className="flex gap-4 mt-6">
              <a
                href="https://www.instagram.com/careless.detoxatankemonster/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="hover:opacity-80 transition-opacity"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61566114849831"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="hover:opacity-80 transition-opacity"
              >
                <Facebook className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-h6 font-semibold mb-6">Navigation</h3>
            <nav className="space-y-3">
              <Link href="/" className="block hover:underline">
                Hem
              </Link>
              <Link href="/om-oss" className="block hover:underline">
                Om oss
              </Link>
              <Link href="/hypnosterapi" className="block hover:underline">
                Hypnosterapi
              </Link>
              <Link href="/coachning" className="block hover:underline">
                Coachning
              </Link>
              <Link href="/reiki" className="block hover:underline">
                Reiki
              </Link>
              <Link href="/beroringsterapi" className="block hover:underline">
                Beröringsterapi
              </Link>
              <Link href="/kontakt" className="block hover:underline">
                Kontakt
              </Link>
            </nav>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-body-small">
          <p>&copy; {new Date().getFullYear()} av lindbergdigital.se</p>
          <Link href="/tillganglighet" className="hover:underline">
            Tillgänglighetsredogörelse
          </Link>
        </div>
      </div>
    </footer>
  );
}
