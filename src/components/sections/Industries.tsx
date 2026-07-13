const industries = [
  "IT & SaaS", "Healthcare", "Government", "NGO", "Finance", "Manufacturing",
  "Education", "Retail", "Logistics", "BFSI", "Automotive", "Real Estate",
];

export function Industries() {
  return (
    <section className="bg-muted py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">Industries</p>
          <h2 className="mt-3 text-3xl font-bold text-foreground sm:text-4xl">
            Deep experience across regulated & scale-critical sectors
          </h2>
        </div>
        <div className="mt-10 flex flex-wrap gap-3">
          {industries.map((i) => (
            <span
              key={i}
              className="rounded-full border border-border bg-card px-5 py-2.5 text-sm font-semibold text-foreground transition-all hover:border-primary hover:bg-primary hover:text-primary-foreground"
            >
              {i}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
