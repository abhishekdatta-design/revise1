import { Users, ShoppingCart, Layers, type LucideIcon } from "lucide-react";

type P = { icon: LucideIcon; name: string; category: string; desc: string };

const products: P[] = [
  { icon: Users, name: "Tafuri HRMS", category: "HR & Payroll Automation", desc: "End-to-end human resource and payroll automation for 500-10,000+ employee organizations." },
  { icon: ShoppingCart, name: "Retail POS", category: "Sales & Inventory Management", desc: "Multi-outlet point-of-sale with real-time inventory, offline sync, and unified reporting." },
  { icon: Layers, name: "Custom ERP", category: "Enterprise Resource Planning", desc: "Tailored ERP modules — finance, procurement, projects — replacing brittle spreadsheets." },
];

export function FeaturedProducts() {
  return (
    <section className="bg-background py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">Featured products</p>
          <h2 className="mt-3 text-3xl font-bold text-foreground sm:text-4xl">
            Products we've built, running in production today
          </h2>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {products.map((p) => (
            <div key={p.name} className="group relative overflow-hidden rounded-xl border border-border bg-card p-8 shadow-[var(--shadow-card)] transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-elevated)]">
              <div className="inline-flex size-14 items-center justify-center rounded-lg bg-primary-dark text-primary-foreground">
                <p.icon className="size-7" />
              </div>
              <h3 className="mt-6 text-xl font-bold text-foreground">{p.name}</h3>
              <p className="mt-1 text-sm font-semibold text-primary">{p.category}</p>
              <p className="mt-4 text-sm text-muted-foreground">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
