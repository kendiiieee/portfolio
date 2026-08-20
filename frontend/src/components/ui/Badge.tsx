interface BadgeProps {
  label: string;
  variant?: 'default' | 'accent' | 'muted';
}

export function Badge({ label, variant = 'default' }: BadgeProps) {
  const styles = {
    default:
      'border-border bg-paper text-foreground/85',
    accent: 'border-accent/25 bg-accent-soft text-accent',
    muted: 'border-border/70 bg-background text-muted',
  };

  return (
    <span
      className={`inline-flex items-center rounded-sm border px-2.5 py-1 text-[11px] font-medium tracking-wide ${styles[variant]}`}
    >
      {label}
    </span>
  );
}
