import { Apple, MonitorSmartphone, Smartphone, Database, type LucideIcon } from "lucide-react";

type Item = { icon: LucideIcon; title: string; desc: string };

const items: Item[] = [
  {
    icon: Apple,
    title: "iOS & macOS Apps",
    desc: "Native Swift and Objective-C apps built for App Store distribution and enterprise device fleets.",
  },
  {
    icon: MonitorSmartphone,
    title: "Windows Apps",
    desc: "Desktop and WPF applications engineered for Windows 10/11 with rich offline capability.",
  },
  {
    icon: Smartphone,
    title: "Android Apps",
    desc: "Kotlin and Flutter apps delivered to millions across low-bandwidth and premium markets alike.",
  },
  {
    icon: Database,
    title: "Database Management",
    desc: "High-availability PostgreSQL, MSSQL, and MongoDB architectures with 24/7 monitoring.",
  },
];

export function WhatWeDo() {
  return (
    <section className="bg-background py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">What we do</p>
          <h2 className="mt-3 text-3xl font-bold text-foreground sm:text-4xl">
            Full-stack engineering across every surface
          </h2>
          <p className="mt-3 text-muted-foreground">
            From native mobile to enterprise databases — one accountable team,
            one delivery standard.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it) => (
            <div
              key={it.title}
              className="group rounded-xl border border-border bg-card p-6 shadow-[var(--shadow-card)] transition-all hover:-translate-y-1 hover:border-primary/30 hover:shadow-[var(--shadow-elevated)]"
            >
              <div className="inline-flex size-12 items-center justify-center rounded-lg bg-accent-soft text-primary-dark">
                <it.icon className="size-6" />
              </div>
              <h3 className="mt-5 text-lg font-bold text-foreground">{it.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
