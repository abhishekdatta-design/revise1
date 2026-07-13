import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/layout/PageHeader";
import { CaseStudies } from "@/components/sections/CaseStudies";
import { Testimonials } from "@/components/sections/Testimonials";
import { ContactCTA } from "@/components/sections/ContactCTA";

export const Route = createFileRoute("/case-studies")({
  head: () => ({
    meta: [
      { title: "Successful Projects — Measured Outcomes | Neural Soft" },
      { name: "description", content: "Real projects, real numbers: 70% faster HR ops, 42 outlets unified, 50% procurement cycle cut, and more." },
      { property: "og:title", content: "Successful Projects — Neural Soft" },
      { property: "og:description", content: "Metric-led project outcomes across HRMS, POS, and ERP engagements." },
      { property: "og:url", content: "/case-studies" },
    ],
    links: [{ rel: "canonical", href: "/case-studies" }],
  }),
  component: () => (
    <>
      <PageHeader
        eyebrow="Successful projects"
        title="Outcomes, quantified"
        description="Every project below is measured by a business KPI our client cared about — not vanity engineering metrics."
      />
      <CaseStudies />
      <Testimonials />
      <ContactCTA />
    </>
  ),
});
