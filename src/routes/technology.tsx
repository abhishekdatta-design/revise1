import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/layout/PageHeader";
import { TechStack } from "@/components/sections/TechStack";
import { ContactCTA } from "@/components/sections/ContactCTA";

export const Route = createFileRoute("/technology")({
  head: () => ({
    meta: [
      { title: "Technology Stack | Neural Soft" },
      { name: "description", content: "Frontend, backend, mobile, and AI technologies we deploy in production — chosen deliberately for scale and longevity." },
      { property: "og:title", content: "Technology Stack — Neural Soft" },
      { property: "og:description", content: "React, .NET, Laravel, Flutter, TensorFlow and more." },
      { property: "og:url", content: "/technology" },
    ],
    links: [{ rel: "canonical", href: "/technology" }],
  }),
  component: () => (
    <>
      <PageHeader
        eyebrow="Technology"
        title="A stack we can defend in an architecture review"
        description="We standardize on mature, well-supported technologies — and pair them with modern AI tooling where it earns its keep."
      />
      <TechStack />
      <ContactCTA />
    </>
  ),
});
