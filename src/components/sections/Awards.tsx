import { Award, ShieldCheck, Handshake, BadgeCheck } from "lucide-react";

const items = [
  { icon: ShieldCheck, label: "ISO Certified" },
  { icon: Award, label: "Industry Recognition" },
  { icon: Handshake, label: "Technology Partnerships" },
  { icon: BadgeCheck, label: "Trade Memberships" },
];

export function Awards() {
  return (
    <section className="bg-background py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-semibold uppercase tracking-widest text-muted-foreground">
          Awards & certifications
        </p>
        <div className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-4">
          {items.map((i) => (
            <div key={i.label} className="flex flex-col items-center gap-3 rounded-xl border border-border bg-card p-6 text-center">
              <i.icon className="size-8 text-primary" />
              <span className="text-sm font-semibold text-foreground">{i.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
