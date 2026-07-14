type Tech = { name: string; logo: string };
type Category = { title: string; items: Tech[] };

const stacks: Category[] = [
  {
    title: "Languages",
    items: [
      { name: "Java",       logo: "/logos/tech/java.png" },
      { name: "JavaScript", logo: "/logos/tech/javascript.png" },
      { name: "Python",     logo: "/logos/tech/python.png" },
      { name: "C/C++",      logo: "/logos/tech/c-cpp.png" },
      { name: "PHP",        logo: "/logos/tech/php.png" },
    ],
  },
  {
    title: "Framework & Toolkit",
    items: [
      { name: "Spring Boot",      logo: "/logos/tech/spring-boot.png" },
      { name: "Laravel",          logo: "/logos/tech/laravel.png" },
      { name: "Django",           logo: "/logos/tech/django.png" },
      { name: "WebSocket",        logo: "/logos/tech/websocket.png" },
      { name: "Hibernate",        logo: "/logos/tech/hibernate.png" },
      { name: "SystemC",          logo: "/logos/tech/systemc.png" },
    ],
  },
  {
    title: "OS & Deployment",
    items: [
      { name: "Windows", logo: "/logos/tech/windows.png" },
      { name: "Linux",   logo: "/logos/tech/linux.png" },
      { name: "Jenkins", logo: "/logos/tech/jenkins.png" },
      { name: "AWS",     logo: "/logos/tech/aws.png" },
    ],
  },
  {
    title: "Database",
    items: [
      { name: "MySQL",      logo: "/logos/tech/mysql.png" },
      { name: "PostgreSQL", logo: "/logos/tech/postgresql.png" },
      { name: "MongoDB",    logo: "/logos/tech/mongodb.png" },
    ],
  },
  {
    title: "Frontend",
    items: [
      { name: "React.js",  logo: "/logos/tech/reactjs.png" },
      { name: "Vue.js",    logo: "/logos/tech/vuejs.png" },
      { name: "jQuery",    logo: "/logos/tech/jquery.png" },
    ],
  },
  {
    title: "Mobile Development",
    items: [
      { name: "React Native", logo: "/logos/tech/react-native.png" },
      { name: "Flutter",      logo: "/logos/tech/flutter.png" },
    ],
  },
  {
    title: "UI/UX Design",
    items: [
      { name: "Adobe Illustrator", logo: "/logos/tech/adobe-illustrator.png" },
    ],
  },
];

export function TechStack() {
  return (
    <section className="bg-background py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">Technology stack</p>
          <h2 className="mt-3 text-3xl font-bold text-foreground sm:text-4xl">
            Modern tools, chosen deliberately
          </h2>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {stacks.map((s) => (
            <div key={s.title} className="rounded-xl border border-border bg-card p-6 shadow-[var(--shadow-card)]">
              <h3 className="text-sm font-bold uppercase tracking-wide text-primary-dark">{s.title}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {s.items.map((t) => (
                  <span
                    key={t.name}
                    className="inline-flex items-center gap-2 rounded-full border border-border bg-muted px-3 py-1 text-xs font-semibold text-foreground"
                  >
                    <img
                      src={t.logo}
                      alt={t.name}
                      loading="lazy"
                      decoding="async"
                      className="size-7 object-contain"
                      aria-hidden
                    />
                    {t.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
