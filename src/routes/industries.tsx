import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/layout/PageHeader";
import { Industries } from "@/components/sections/Industries";
import { ContactCTA } from "@/components/sections/ContactCTA";

export const Route = createFileRoute("/industries")({
  head: () => ({
    meta: [
      { title: "Industries We Serve | Neural Soft" },
      { name: "description", content: "Twelve regulated and scale-critical industries — from BFSI and healthcare to government, manufacturing, and retail." },
      { property: "og:title", content: "Industries — Neural Soft" },
      { property: "og:description", content: "Deep experience across regulated & scale-critical sectors." },
      { property: "og:url", content: "/industries" },
    ],
    links: [{ rel: "canonical", href: "/industries" }],
  }),
  component: () => (
    <>
      <PageHeader
        eyebrow="Industries"
        title="Vertical depth across twelve sectors"
        description="We speak the language of your regulators, auditors, and operations teams — because we've shipped for them."
      />
      <Industries />
      <ContactCTA />
    </>
  ),
});
