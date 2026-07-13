import { Brain, Building, Code2, Smartphone, Cloud, type LucideIcon } from "lucide-react";

type Service = { icon: LucideIcon; title: string; desc: string; tech: string };

const services: Service[] = [
  { icon: Brain, title: "AI & Machine Learning", tech: "Generative AI · Chatbots · NLP · Computer Vision", desc: "Production-grade AI systems — from RAG pipelines to fine-tuned vision models — deployed on your data." },
  { icon: Building, title: "Enterprise Software", tech: "ERP · HRMS · CRM · POS · SCM", desc: "Modular platforms that replace fragmented tools and unify operations across departments and regions." },
  { icon: Code2, title: "Web Development", tech: "Laravel · ASP.NET · Node.js · React", desc: "High-performance web platforms engineered for scale, SEO, and 99.9% uptime." },
  { icon: Smartphone, title: "Mobile Apps", tech: "Flutter · Android · iOS", desc: "Cross-platform and native apps shipped to production with CI/CD and full observability." },
  { icon: Cloud, title: "Cloud & DevOps", tech: "AWS · Azure · Kubernetes · Docker", desc: "Cloud-native architectures, automated pipelines, and infrastructure-as-code you can audit." },
];

export function CoreServices() {
  return (
    <section className="bg-muted py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">Core services</p>
          <h2 className="mt-3 text-3xl font-bold text-foreground sm:text-4xl">
            Six practices. One accountable partner.
          </h2>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div
              key={s.title}
              className="rounded-xl border border-border bg-card p-6 shadow-[var(--shadow-card)] transition-all hover:-translate-y-1 hover:border-primary/30 hover:shadow-[var(--shadow-elevated)]"
            >
              <div className="inline-flex size-12 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <s.icon className="size-6" />
              </div>
              <h3 className="mt-5 text-lg font-bold text-foreground">{s.title}</h3>
              <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-accent">{s.tech}</p>
              <p className="mt-3 text-sm text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
