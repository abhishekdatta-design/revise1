import { NodeMotif } from "./NodeMotif";

interface PageHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
}

export function PageHeader({ eyebrow, title, description }: PageHeaderProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-muted to-background">
      <NodeMotif className="pointer-events-none absolute inset-0 h-full w-full text-primary" opacity={0.06} />
      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        {eyebrow && (
          <span className="inline-flex rounded-full bg-accent-soft px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary-dark">
            {eyebrow}
          </span>
        )}
        <h1 className="mt-4 text-4xl font-bold text-foreground sm:text-5xl">{title}</h1>
        {description && <p className="mt-4 max-w-3xl text-lg text-muted-foreground">{description}</p>}
      </div>
    </section>
  );
}
