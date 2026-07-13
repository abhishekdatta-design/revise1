import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/layout/PageHeader";
import { FeaturedProducts } from "@/components/sections/FeaturedProducts";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/solutions")({
  head: () => ({
    meta: [
      { title: "Solutions — Tafuri HRMS, Retail POS, Custom ERP | Neural Soft" },
      { name: "description", content: "Production-grade enterprise products: Tafuri HRMS, multi-outlet Retail POS, and custom ERP built to your operating model." },
      { property: "og:title", content: "Solutions — Neural Soft" },
      { property: "og:description", content: "Tafuri HRMS, Retail POS, Custom ERP." },
      { property: "og:url", content: "/solutions" },
    ],
    links: [{ rel: "canonical", href: "/solutions" }],
  }),
  component: SolutionsPage,
});

const capabilities = [
  { name: "Tafuri HRMS", items: ["Employee lifecycle", "Payroll automation", "Attendance & leave", "Statutory compliance", "Self-service portal"] },
  { name: "Retail POS", items: ["Multi-outlet sync", "Offline-first checkout", "Real-time inventory", "Loyalty & promotions", "Unified reporting"] },
  { name: "Custom ERP", items: ["Finance & GL", "Procurement workflows", "Project accounting", "SCM & warehousing", "Role-based dashboards"] },
];

function SolutionsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Solutions & products"
        title="Products already running in production"
        description="Battle-tested platforms you can deploy in weeks, then extend without ripping and replacing."
      />
      <FeaturedProducts />
      <section className="bg-muted py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground">What's inside</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {capabilities.map((c) => (
              <div key={c.name} className="rounded-xl border border-border bg-card p-6 shadow-[var(--shadow-card)]">
                <h3 className="text-lg font-bold text-primary-dark">{c.name}</h3>
                <ul className="mt-4 space-y-2">
                  {c.items.map((i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-foreground">
                      <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-accent" /> {i}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
      <ContactCTA />
    </>
  );
}
