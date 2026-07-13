import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin } from "lucide-react";
const LOGO_SRC = "/logos/neural-soft-logo.png";
import { NodeMotif } from "./NodeMotif";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-primary-dark text-primary-foreground">
      <NodeMotif className="pointer-events-none absolute inset-0 h-full w-full text-white/30" opacity={0.06} />
      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="inline-flex items-center gap-2 rounded-md bg-white p-2">
              <img src={LOGO_SRC} alt="Neural Soft" className="h-10 w-auto" />
            </div>
            <p className="mt-4 text-sm text-white/80">
              Engineering the future with AI & enterprise software. Trusted by
              organizations across three continents.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide text-white">Company</h4>
            <ul className="mt-4 space-y-2 text-sm text-white/80">
              <li><Link to="/about" className="hover:text-accent">About Us</Link></li>
              <li><Link to="/careers" className="hover:text-accent">Careers</Link></li>
              <li><Link to="/case-studies" className="hover:text-accent">Successful Projects</Link></li>
              <li><Link to="/blog" className="hover:text-accent">Blog</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide text-white">Explore</h4>
            <ul className="mt-4 space-y-2 text-sm text-white/80">
              <li><Link to="/services" className="hover:text-accent">Services</Link></li>
              <li><Link to="/solutions" className="hover:text-accent">Solutions</Link></li>
              <li><Link to="/industries" className="hover:text-accent">Industries</Link></li>
              <li><Link to="/technology" className="hover:text-accent">Technology Stack</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide text-white">Contact</h4>
            <ul className="mt-4 space-y-3 text-sm text-white/80">
              <li className="flex items-start gap-2">
                <Mail className="mt-0.5 size-4 text-accent" />
                <a href="mailto:sales@nsoft.com.bd" className="hover:text-accent">sales@nsoft.com.bd</a>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="mt-0.5 size-4 text-accent" />
                <a href="tel:+8801000000000" className="hover:text-accent">+880 1XXXXXXXXX</a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 size-4 text-accent" />
                <span>Dhaka, Bangladesh</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-white/10 pt-6 text-xs text-white/60 sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} Neural Soft. All rights reserved.</p>
          <p>Custom software, enterprise-grade delivery.</p>
        </div>
      </div>
    </footer>
  );
}
