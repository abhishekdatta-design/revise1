type CaseStudy = { tag: string; title: string; desc: string; tech: string; impact: string };

const cases: CaseStudy[] = [
  {
    tag: "HRMS / ENTERPRISE",
    title: "Streamlining HR Operations with Tafuri HRMS",
    desc: "A comprehensive HR management platform covering employee records, attendance, leave, payroll, recruitment, performance management, and employee self-service.",
    tech: "Tafuri HRMS",
    impact: "70% Faster End-to-End HR Automation",
  },
  {
    tag: "ASSET / ENTERPRISE",
    title: "Digitizing Enterprise Asset Management with Barcode Tracking",
    desc: "Enabled complete asset lifecycle management through barcode-based tracking, inventory control, asset allocation, maintenance scheduling, and real-time reporting",
    tech: "Barcode Tracking System",
    impact: "10k+ Asset Visibility",
  },
  {
    tag: "Custom Software",
    title: "Building Custom Enterprise Solutions for Digital Transformation",
    desc: "Developed scalable business applications and process automation systems that improve operational efficiency across multiple industries.",
    tech: "Custom Enterprise Software",
    impact: "50% Faster Workflows",
  },
];

export function CaseStudies() {
  return (
    <section className="bg-background py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-accent">Successful projects</p>
            <h2 className="mt-3 text-3xl font-bold text-foreground sm:text-4xl">
              Outcomes we've measured, not just shipped
            </h2>
          </div>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {cases.map((c) => (
            <article
              key={c.title}
              className="flex flex-col rounded-xl border border-border bg-card p-6 shadow-[var(--shadow-card)] transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-elevated)]"
            >
              <span className="inline-flex w-fit rounded-full bg-accent-soft px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary-dark">
                {c.tag}
              </span>
              <h3 className="mt-4 text-lg font-bold leading-snug text-foreground">{c.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground">{c.desc}</p>
              <div className="mt-6 space-y-2 border-t border-border pt-4">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-semibold uppercase tracking-wide text-muted-foreground">Technology</span>
                  <span className="font-semibold text-foreground">{c.tech}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Impact</span>
                  <span className="font-display text-2xl font-bold text-accent">{c.impact}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
