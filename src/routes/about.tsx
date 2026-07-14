import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/layout/PageHeader";
import { StatsStrip } from "@/components/sections/StatsStrip";
import { Awards } from "@/components/sections/Awards";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { Target, Compass, Users, Sparkles } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Neural Soft — Enterprise Software Partner in Dhaka" },
      { name: "description", content: "50+ engineers delivering AI, ERP, HRMS and cloud systems for enterprises across three continents." },
      { property: "og:title", content: "About Neural Soft" },
      { property: "og:description", content: "Who we are and how we deliver." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const values = [
  { icon: Target, title: "Outcome-first", desc: "We commit to metrics, not activities. Every engagement ties to a business KPI." },
  { icon: Compass, title: "Engineering rigour", desc: "Code reviews, CI/CD, and observability are non-negotiable defaults." },
  { icon: Users, title: "Long partnerships", desc: "Most of our clients renew — because we operate as their in-house team." },
  { icon: Sparkles, title: "Applied AI", desc: "We ship AI that changes P&L, not slideware demos." },
];

function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About us"
        title="An enterprise software partner engineered for outcomes"
        description="Neural Soft Limited is a leading software solutions company dedicated to helping businesses accelerate their digital transformation through innovative, scalable, and secure technology. We combine deep technical expertise with a customer-centric approach to develop solutions that solve complex business challenges and drive sustainable growth."
      />
  <section className="bg-background py-20">
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div className="max-w-4xl space-y-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
      <p>
        Neural Soft Limited is a leading software solutions company dedicated to helping businesses accelerate their digital transformation through innovative, scalable, and secure technology. We combine deep technical expertise with a customer-centric approach to develop solutions that solve complex business challenges and drive sustainable growth.
      </p>
      <p>
        With a strong focus on quality, innovation, and long-term partnerships, we work closely with clients to understand their unique requirements and deliver technology solutions that are reliable, scalable, and future-ready. Our experienced team follows industry best practices and agile methodologies to ensure timely delivery, exceptional user experiences, and measurable business value.
      </p>
    </div>
      
      <StatsStrip />
          <div className="mt-16 grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold text-foreground">Our mission</h2>
              <p className="mt-4 text-muted-foreground">
                To empower businesses with innovative, reliable, and scalable software solutions that accelerate digital transformation and drive sustainable growth.
              </p>
              <h2 className="mt-10 text-3xl font-bold text-foreground">How we work</h2>
              <p className="mt-4 text-muted-foreground">
                We collaborate closely with our clients, combining agile development, technical excellence, and industry best practices to deliver high-quality solutions tailored to their business needs.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {values.map((v) => (
                <div key={v.title} className="rounded-xl border border-border bg-card p-6 shadow-[var(--shadow-card)]">
                  <v.icon className="size-7 text-primary" />
                  <h3 className="mt-4 text-lg font-bold text-foreground">{v.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Awards />
      <ContactCTA />
    </>
  );
}
