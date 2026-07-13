import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/layout/PageHeader";
import { CoreServices } from "@/components/sections/CoreServices";
import { WhatWeDo } from "@/components/sections/WhatWeDo";
import { Process } from "@/components/sections/Process";
import { ContactCTA } from "@/components/sections/ContactCTA";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — AI, ERP, Web, Mobile, Cloud & Security | Neural Soft" },
      { name: "description", content: "Six practices delivered by one accountable team: AI/ML, Enterprise Software, Web, Mobile, Cloud & DevOps, and Cyber Security." },
      { property: "og:title", content: "Services — Neural Soft" },
      { property: "og:description", content: "AI, ERP, HRMS, web, mobile, cloud, and cybersecurity engineering." },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: () => (
    <>
      <PageHeader
        eyebrow="Services"
        title="Full-stack engineering, on your terms"
        description="From discovery to 24/7 operations, we deliver every layer of a modern software system under one accountable roof."
      />
      <CoreServices />
      <WhatWeDo />
      <Process />
      <ContactCTA />
    </>
  ),
});
