import { Quote } from "lucide-react";
import { useEffect, useState } from "react";

const testimonials = [
  {
    quote:
      "Tafuri HRMS has been an excellent solution for managing our HR operations efficiently. Its seamless integration of payroll, attendance, leave, and performance management has made our HR tasks more accurate and transparent. We truly appreciate how it simplifies daily HR activities and ensures error-free, smooth operations.",
    name: "S. M. Tanvir Rahman",
    role: "Head of HR, Threads and Accessories Division",
    company: "DBL Group",
  },
  {
    quote:
      "Tafuri HRMS has significantly streamlined our organizational workflows by centralizing employee management and automating attendance tracking. Its intuitive platform helps us efficiently monitor our field sales force, enhancing accountability and operational transparency.",
    name: "Sadman Safiul",
    role: "Senior Product Manager",
    company: "Chhaya Technologies Limited",
  },
  {
    quote:
      "Tafuri HRMS has revolutionized our HR operations by seamlessly automating attendance, leave, and payroll. Its intuitive interface and customizable workflows ensure flawless, transparent processes, while its error-free reporting provides critical data with confidence. Backed by reliable performance and exceptional support, Tafuri HRMS is more than software—it's a strategic partner in driving HR excellence.",
    name: "Md. Atikur Rahman",
    role: "Sr. HR Executive",
    company: "DBL Pharmaceuticals Ltd.",
  },
  {
    quote:
      "It was my first time using Tafuri HRMS and it was so easy to use! I'm glad there is a platform like Tafuri HRMS to allow me carry my responsibilities like a pro user.",
    name: "Monsor Alam Naiem",
    role: "Assistant Manager",
    company: "Moriom Group",
  },
];

export function Testimonials() {
  const [i, setI] = useState(0);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    const id = window.setInterval(() => {
      if (document.visibilityState !== "visible") return;
      setI((v) => (v + 1) % testimonials.length);
    }, 6000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <section className="bg-muted py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">Client voices</p>
          <h2 className="mt-3 text-3xl font-bold text-foreground sm:text-4xl">
            What partners say after the go-live
          </h2>
        </div>

        <div className="relative mt-12 overflow-hidden">
          <div
            className="flex transition-transform duration-700 ease-out"
            style={{ transform: `translateX(-${i * 100}%)` }}
            aria-live="polite"
          >
            {testimonials.map((t) => (
              <figure
                key={t.name}
                className="flex w-full shrink-0 flex-col rounded-xl border border-border bg-card p-8 shadow-[var(--shadow-card)] sm:p-10"
              >
                <Quote className="size-8 text-accent" />
                <blockquote className="mt-4 max-w-3xl text-base leading-relaxed text-foreground sm:text-lg">
                  "{t.quote}"
                </blockquote>
                <figcaption className="mt-6 border-t border-border pt-4">
                  <p className="text-sm font-bold text-foreground">{t.name}</p>
                  <p className="text-xs text-muted-foreground">
                    {t.role} · {t.company}
                  </p>
                </figcaption>
              </figure>
            ))}
          </div>

          <div className="mt-6 flex justify-center gap-2">
            {testimonials.map((t, idx) => (
              <button
                key={t.name}
                type="button"
                onClick={() => setI(idx)}
                aria-label={`Show testimonial ${idx + 1}`}
                className={`h-2 rounded-full transition-all ${
                  idx === i ? "w-6 bg-primary" : "w-2 bg-border"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
