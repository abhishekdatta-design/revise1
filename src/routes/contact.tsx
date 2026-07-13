import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/layout/PageHeader";
import { ContactCTA } from "@/components/sections/ContactCTA";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Neural Soft — Book a Consultation" },
      { name: "description", content: "Talk to Neural Soft about your AI, ERP, HRMS, or custom software project. Response within one business day." },
      { property: "og:title", content: "Contact — Neural Soft" },
      { property: "og:description", content: "Book a consultation with our engineering team." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Tell us what outcome you need"
        description="Share the problem you're solving and any constraints. We'll come back within one business day with a scoped path forward."
      />
      <section className="bg-background py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <form className="grid gap-5 rounded-xl border border-border bg-card p-8 shadow-[var(--shadow-card)]">
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block">
                <span className="text-sm font-semibold text-foreground">Full name</span>
                <input required type="text" className="mt-2 w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus:border-primary" />
              </label>
              <label className="block">
                <span className="text-sm font-semibold text-foreground">Work email</span>
                <input required type="email" className="mt-2 w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus:border-primary" />
              </label>
            </div>
            <label className="block">
              <span className="text-sm font-semibold text-foreground">Company</span>
              <input type="text" className="mt-2 w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus:border-primary" />
            </label>
            <label className="block">
              <span className="text-sm font-semibold text-foreground">Project brief</span>
              <textarea required rows={5} className="mt-2 w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus:border-primary" />
            </label>
            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-dark"
            >
              Send message
            </button>
          </form>
        </div>
      </section>
      <ContactCTA />
    </>
  );
}
