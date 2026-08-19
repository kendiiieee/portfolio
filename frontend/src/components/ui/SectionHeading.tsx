interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
}: SectionHeadingProps) {
  const alignment =
    align === 'center' ? 'items-center text-center' : 'items-start text-left';

  return (
    <div className={`mb-10 flex flex-col gap-4 ${alignment}`}>
      <span className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
        <span className="h-px w-8 bg-accent" aria-hidden />
        {eyebrow}
      </span>
      <h2 className="max-w-3xl font-display text-4xl font-bold leading-none tracking-tight text-foreground sm:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="max-w-2xl text-base