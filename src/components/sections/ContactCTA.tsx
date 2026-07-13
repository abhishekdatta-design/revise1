import { Mail, Phone, MapPin, MessageCircle, Calendar } from "lucide-react";
import { NodeMotif } from "@/components/layout/NodeMotif";

export function ContactCTA() {
  return (
    <section className="relative overflow-hidden bg-primary-dark text-primary-foreground">
      <NodeMotif className="pointer-events-none absolute inset-0 h-full w-full text-white/40" opacity={0.08} />
      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="text-3xl font-bold sm:text-4xl lg:text-5xl">
              Let's Build Something Great Together
            </h2>
            <p className="mt-4 max-w-xl text-white/80">
              Tell us about the outcome you need. We'll come back within one
              business day with a scoped path forward.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="mailto:sales@nsoft.com.bd"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-accent px-6 py-3 text-sm font-semibold text-primary-dark transition-transform hover:-translate-y-0.5"
              >
                <Calendar className="size-4" /> Book a Meeting
              </a>
              <a
                href="https://wa.me/8801000000000"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-md border-2 border-white/30 bg-transparent px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-accent hover:text-accent"
              >
                <MessageCircle className="size-4" /> WhatsApp Us
              </a>
            </div>
          </div>
          <ul className="grid gap-4 sm:grid-cols-1">
            <li className="flex items-start gap-4 rounded-xl border border-white/10 bg-white/5 p-5">
              <Mail className="mt-0.5 size-5 text-accent" />
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-white/60">Email</p>
                <a href="mailto:sales@nsoft.com.bd" className="text-lg font-bold text-white hover:text-accent">sales@nsoft.com.bd</a>
              </div>
            </li>
            <li className="flex items-start gap-4 rounded-xl border border-white/10 bg-white/5 p-5">
              <Phone className="mt-0.5 size-5 text-accent" />
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-white/60">Phone</p>
                <a href="tel:+8801000000000" className="text-lg font-bold text-white hover:text-accent">+880 1XXXXXXXXX</a>
              </div>
            </li>
            <li className="flex items-start gap-4 rounded-xl border border-white/10 bg-white/5 p-5">
              <MapPin className="mt-0.5 size-5 text-accent" />
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-white/60">Office</p>
                <p className="text-lg font-bold text-white">Dhaka, Bangladesh</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
