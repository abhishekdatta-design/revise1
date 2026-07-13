import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/layout/PageHeader";
import { BlogPreview } from "@/components/sections/BlogPreview";
import { ContactCTA } from "@/components/sections/ContactCTA";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog & Insights | Neural Soft" },
      { name: "description", content: "Research, playbooks, and field notes on AI in HR, ERP trends, cybersecurity, cloud migration, and digital transformation." },
      { property: "og:title", content: "Blog — Neural Soft" },
      { property: "og:description", content: "Field notes from enterprise software delivery." },
      { property: "og:url", content: "/blog" },
    ],
    links: [{ rel: "canonical", href: "/blog" }],
  }),
  component: () => (
    <>
      <PageHeader
        eyebrow="Insights"
        title="Field notes from enterprise delivery"
        description="Practical writing from the engineers and architects shipping into production every week."
      />
      <BlogPreview />
      <ContactCTA />
    </>
  ),
});
