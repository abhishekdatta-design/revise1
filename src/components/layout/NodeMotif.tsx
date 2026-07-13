interface NodeMotifProps {
  className?: string;
  opacity?: number;
}

/** Subtle background motif echoing the Neural Soft logo: blue nodes connected
 * by lines with small green dot accents. Purely decorative. */
export function NodeMotif({ className, opacity = 0.08 }: NodeMotifProps) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 800 500"
      className={className}
      style={{ opacity }}
      preserveAspectRatio="xMidYMid slice"
    >
      <g fill="none" stroke="currentColor" strokeWidth="2">
        <line x1="80" y1="120" x2="240" y2="220" />
        <line x1="240" y1="220" x2="400" y2="100" />
        <line x1="400" y1="100" x2="560" y2="240" />
        <line x1="560" y1="240" x2="720" y2="140" />
        <line x1="240" y1="220" x2="320" y2="380" />
        <line x1="560" y1="240" x2="480" y2="400" />
      </g>
      <g fill="currentColor">
        <circle cx="80" cy="120" r="14" />
        <circle cx="240" cy="220" r="22" />
        <circle cx="400" cy="100" r="18" />
        <circle cx="560" cy="240" r="26" />
        <circle cx="720" cy="140" r="14" />
        <circle cx="320" cy="380" r="12" />
        <circle cx="480" cy="400" r="16" />
      </g>
      <g fill="var(--color-accent)">
        <circle cx="180" cy="80" r="6" />
        <circle cx="340" cy="180" r="8" />
        <circle cx="500" cy="140" r="6" />
        <circle cx="640" cy="320" r="7" />
        <circle cx="260" cy="340" r="5" />
        <circle cx="420" cy="320" r="6" />
      </g>
    </svg>
  );
}
