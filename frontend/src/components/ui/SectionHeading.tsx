interface SectionHeadingProps {
  index?: string;
  eyebrow: string;
  title: string;
  description?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="mb-7 grid gap-4 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-end">
      <div className="border-l-4 border-accent pl-5">
        <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-accent">
          {eyebrow}
        </span>
        <h2 className="mt-3 font-display text-[2.6rem] font-bold leading-[0.92] tracking-tight text-foreground sm:text-5xl">
          {title}
        </h2>
      </div>
      {description ? (
        <p className="max-w-xl font-sans text-lg leading-relaxed text-muted lg:justify-self-end">
          {description}
        </p>
      ) : null}
    </div>
  );
}
