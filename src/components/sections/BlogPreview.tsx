const categories = ["AI in HR", "ERP Trends", "Cybersecurity", "Cloud Migration", "Digital Transformation"];
const posts = [
  { cat: "AI in HR", title: "Why Generative AI is Rewriting the HR Playbook", read: "6 min read" },
  { cat: "Cloud Migration", title: "A Pragmatic Framework for Legacy-to-Cloud Migration", read: "9 min read" },
  { cat: "Cybersecurity", title: "VAPT Checklist Every Enterprise Should Run Quarterly", read: "5 min read" },
];

export function BlogPreview() {
  return (
    <section className="bg-muted py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">Insights</p>
          <h2 className="mt-3 text-3xl font-bold text-foreground sm:text-4xl">
            Research, playbooks, and field notes
          </h2>
        </div>
        <div className="mt-8 flex flex-wrap gap-2">
          {categories.map((c) => (
            <span key={c} className="rounded-full border border-border bg-card px-4 py-1.5 text-xs font-semibold text-foreground">
              {c}
            </span>
          ))}
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {posts.map((p) => (
            <article key={p.title} className="rounded-xl border border-border bg-card p-6 shadow-[var(--shadow-card)] transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-elevated)]">
              <span className="text-xs font-semibold uppercase tracking-wide text-primary">{p.cat}</span>
              <h3 className="mt-3 text-lg font-bold leading-snug text-foreground">{p.title}</h3>
              <p className="mt-4 text-xs text-muted-foreground">{p.read}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
