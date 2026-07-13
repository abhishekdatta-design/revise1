import { Search, Palette, Code, Beaker, Rocket, LifeBuoy, ChevronRight, type LucideIcon } from "lucide-react";

type Step = { icon: LucideIcon; title: string; desc: string };

const steps: Step[] = [
  { icon: Search, title: "Discovery", desc: "Requirements, KPIs, risk mapping" },
  { icon: Palette, title: "UI / UX", desc: "Design system, prototypes, review" },
  { icon: Code, title: "Development", desc: "Sprint delivery with CI/CD" },
  { icon: Beaker, title: "Testing", desc: "QA, security, performance" },
  { icon: Rocket, title: "Deployment", desc: "Cloud release, monitoring" },
  { icon: LifeBuoy, title: "Support", desc: "SLA-backed 24/7 operations" },
];

export function Process() {
  return (
    <section className="bg-muted py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">Our process</p>
          <h2 className="mt-3 text-3xl font-bold text-foreground sm:text-4xl">
            Six stages. Predictable delivery.
          </h2>
        </div>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-6 lg:gap-2">
          {steps.map((s, i) => (
            <div key={s.title} className="relative flex flex-col items-center text-center">
              <div className="relative z-10 flex size-16 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-[var(--shadow-elevated)]">
                <s.icon className="size-7" />
                <span className="absolute -top-2 -right-2 flex size-6 items-center justify-center rounded-full bg-accent text-xs font-bold text-primary-dark">
                  {i + 1}
                </span>
              </div>
              <h3 className="mt-4 text-sm font-bold text-foreground">{s.title}</h3>
              <p className="mt-1 text-xs text-muted-foreground">{s.desc}</p>
              {i < steps.length - 1 && (
                <ChevronRight className="absolute right-[-14px] top-4 hidden size-6 text-primary/40 lg:block" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
