import { useRef, useState } from "react";

const logos = [
  { src: "/logos/doctime.png",            alt: "Doctime" },
  { src: "/logos/media365.png",           alt: "Media365" },
  { src: "/logos/khass-food.png",         alt: "Khass Food" },
  { src: "/logos/petra-products.png",     alt: "Petra Products" },
  { src: "/logos/caritas-bangladesh.png", alt: "Caritas Bangladesh" },
  { src: "/logos/arogga.png",             alt: "Arogga" },
  { src: "/logos/eco-threads-yarns.png",  alt: "Eco Threads & Yarns" },
  { src: "/logos/dbl-pharmaceuticals.png",alt: "DBL Pharmaceuticals" },
];

export function TrustedBy() {
  const trackRef = useRef<HTMLDivElement>(null);
  const dragState = useRef({ active: false, startX: 0, offset: 0 });
  const [paused, setPaused] = useState(false);

  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    const track = trackRef.current;
    if (!track) return;
    (e.target as Element).setPointerCapture?.(e.pointerId);
    dragState.current.active = true;
    dragState.current.startX = e.clientX;
    dragState.current.offset = 0;
    setPaused(true);
  };

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!dragState.current.active || !trackRef.current) return;
    const dx = e.clientX - dragState.current.startX;
    dragState.current.offset = dx;
    trackRef.current.style.transform = `translateX(${dx}px)`;
  };

  const endDrag = () => {
    if (!dragState.current.active) return;
    dragState.current.active = false;
    if (trackRef.current) trackRef.current.style.transform = "";
    setPaused(false);
  };

  return (
    <section className="bg-background py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-semibold uppercase tracking-widest text-muted-foreground">
          Trusted by organizations across sectors
        </p>
        <div
          className="marquee mt-8"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div
            ref={trackRef}
            className="marquee-track"
            style={{ animationPlayState: paused ? "paused" : "running" }}
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={endDrag}
            onPointerCancel={endDrag}
            onPointerLeave={endDrag}
          >
            {[...logos, ...logos].map((logo, i) => (
              <div
                key={i}
                className="flex shrink-0 items-center justify-center px-8 sm:px-14"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  loading="lazy"
                  decoding="async"
                  draggable={false}
                  className="h-20 w-auto object-contain opacity-80 transition-opacity hover:opacity-100 sm:h-26"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
