const stats = [
  { value: "50+", label: "Expert Professionals" },
  { value: "60+", label: "Projects Delivered" },
  { value: "3+", label: "Countries Served" },
  { value: "99%", label: "Client Satisfaction" },
];

export function StatsStrip() {
  return (
    <section className="border-y border-border bg-muted">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="font-display text-4xl font-bold text-accent sm:text-5xl">
                {s.value}
              </p>
              <p className="mt-2 text-sm font-medium text-muted-foreground">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
