type LogoMarkProps = {
  className?: string;
};

export function LogoMark({ className = "h-10 w-10" }: LogoMarkProps) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M50 4 L11 27 L11 73 L50 96"
        stroke="var(--gold)"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M50 4 L89 27 L89 73 L50 96"
        stroke="#f5f2ea"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="50" cy="4" r="5.5" fill="var(--gold)" />
      <circle cx="11" cy="27" r="5.5" fill="var(--gold)" />
      <circle cx="11" cy="73" r="5.5" fill="var(--gold)" />
      <circle cx="50" cy="96" r="5.5" fill="var(--gold)" />
      <circle cx="89" cy="27" r="5.5" fill="#f5f2ea" />
      <circle cx="89" cy="73" r="5.5" fill="#f5f2ea" />
      <text
        x="50"
        y="58"
        textAnchor="middle"
        fontFamily="var(--font-mono, monospace)"
        fontSize="22"
        fontWeight="700"
        fill="var(--gold)"
      >
        &gt;_
      </text>
    </svg>
  );
}

type LogoProps = {
  className?: string;
  markClassName?: string;
  showTagline?: boolean;
  light?: boolean;
};

export function Logo({
  className = "",
  markClassName = "h-11 w-11",
  showTagline = false,
}: LogoProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <LogoMark className={markClassName} />
      <div className="leading-none">
        <span className="font-display text-xl font-bold tracking-tight text-foreground">
          BI<span className="text-gold">OS</span>
        </span>
        {showTagline && (
          <div className="mt-0.5 text-[10px] font-semibold uppercase tracking-[0.25em] text-muted">
            Black <span className="text-gold">in</span> Open Source
          </div>
        )}
      </div>
    </div>
  );
}
