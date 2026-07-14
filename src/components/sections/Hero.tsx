import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { NodeMotif } from "@/components/layout/NodeMotif";

const SPECIALIZATIONS = [
  "AI & Machine Learning",
  "Enterprise Software",
  "Cloud & DevOps",
  "Embedded Systems",
  "Website Development",
  "Mobile Applications",
];

function RotatingSpecialization() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const id = window.setInterval(() => {
      if (document.visibilityState !== "visible") return;
      setI((v) => (v + 1) % SPECIALIZATIONS.length);
    }, 2600);
    return () => window.clearInterval(id);
  }, []);
  return (
    <div
      className="relative mt-6 h-[2.5rem] overflow-hidden sm:h-[3rem] lg:h-[3.5rem]"
      aria-live="polite"
    >
      {SPECIALIZATIONS.map((s, idx) => {
        const active = idx === i;
        const prev =
          idx === (i - 1 + SPECIALIZATIONS.length) % SPECIALIZATIONS.length;
        return (
          <span
            key={s}
            className="absolute inset-0 flex items-center whitespace-nowrap text-2xl font-semibold leading-tight tracking-tight text-primary transition-all duration-500 ease-out sm:text-3xl lg:text-4xl motion-reduce:transform-none motion-reduce:duration-300"
            style={{
              opacity: active ? 1 : 0,
              transform: active
                ? "translateY(0)"
                : prev
                ? "translateY(-100%)"
                : "translateY(100%)",
            }}
          >
            {s}
          </span>
        );
      })}
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-muted to-background">
      <NodeMotif
        className="pointer-events-none absolute inset-0 h-full w-full text-primary"
        opacity={0.08}
      />
      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="max-w-4xl">
          <span className="inline-flex items-center rounded-full bg-accent-soft px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary-dark">
             AI · Enterprise . Custom software
          </span>
          <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Custom Software Solutions for Growing Businesses
          </h1>
          <RotatingSpecialization />
          <p className="mt-8 max-w-2xl text-base text-muted-foreground sm:text-lg">
            We build scalable web, mobile, cloud, AI, and enterprise solutions
            for organizations worldwide — with measurable outcomes, not
            promises.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition-colors hover:bg-primary-dark"
            >
              Book a Consultation <ArrowRight className="size-4" />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center justify-center rounded-md border-2 border-primary bg-transparent px-6 py-3 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
