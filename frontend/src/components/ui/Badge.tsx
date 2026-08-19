interface BadgeProps {
  label: string;
  variant?: 'default' | 'accent' | 'muted';
}

export function Badge({ label, variant = 'default' }: BadgeProps) {
  const styles = {
    default:
      'border-border bg-surface text-foreground hover:border-accent/40 hover:text-accent',
    accent: 'border-accent/30 bg-accent/10 text-accent',
    muted: 'border-border/60 bg-background text-muted',
  };

  return (
    <span
      className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium transition ${styles[variant]}`}
    >
      {label}
    </span>
  );
}
