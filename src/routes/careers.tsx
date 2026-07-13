import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/layout/PageHeader";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { MapPin, Briefcase } from "lucide-react";

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: "Careers | Neural Soft" },
      { name: "description", content: "Join a 50+ engineer team building AI, ERP, and enterprise systems for global clients from Dhaka." },
      { property: "og:title", content: "Careers — Neural Soft" },
      { property: "og:description", content: "Open roles in engineering, product, and design." },
      { property: "og:url", content: "/careers" },
    ],
    links: [{ rel: "canonical", href: "/careers" }],
  }),
  component: CareersPage,
});

const roles = [
  { title: "Senior Full-Stack Engineer", team: "Engineering", location: "Dhaka / Remote" },
  { title: "AI / ML Engineer", team: "AI Practice", location: "Dhaka" },
  { title: "Product Designer (Enterprise)", team: "Design", location: "Dhaka / Remote" },
  { title: "DevOps Engineer", team: "Platform", location: "Dhaka" },
  { title: "QA Automation Lead", team: "Quality", location: "Dhaka" },
];

function CareersPage() {
  return (
    <>
      <PageHeader
        eyebrow="Careers"
        title="Build software that matters, with people who care"
        description="We hire senior operators who like ownership, mentorship, and shipping to real users."
      />
      <section className="bg-background py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-foreground">Open roles</h2>
          <ul className="mt-8 divide-y divide-border rounded-xl border border-border bg-card">
            {roles.map((r) => (
              <li key={r.title} className="flex flex-col gap-2 p-6 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-lg font-bold text-foreground">{r.title}</p>
                  <p className="mt-1 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1"><Briefcase className="size-4" /> {r.team}</span>
                    <span className="flex items-center gap-1"><MapPin className="size-4" /> {r.location}</span>
                  </p>
                </div>
                <a href="mailto:careers@nsoft.com.bd" className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:bg-primary-dark">
                  Apply
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <ContactCTA />
    </>
  );
}
