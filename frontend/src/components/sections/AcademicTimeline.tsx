import { TIMELINE_ENTRIES } from '@/lib/constants';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Container } from '@/components/ui/Container';

export function AcademicTimeline() {
  return (
    <section id="academics" className="py-12">
      <Container>
        <SectionHeading
          index="02"
          eyebrow="Academic Background"
          title="Education"
          description="A continuous path through STEM and computer science, forming the base for full-stack and mobile work."
        />

        <ol className="space-y-4">
          {TIMELINE_ENTRIES.map((entry) => (
            <li
              key={entry.id}
              className="grid gap-6 border border-border bg-surface p-6 md:grid-cols-[11rem_1fr_auto] md:items-center md:p-8"
            >
              <p className="font-mono text-sm font-semibold uppercase tracking-[0.14em] text-accent">
                {entry.period}
              </p>
              <div>
                <h3 className="font-display text-3xl font-bold tracking-tight text-foreground">
                  {entry.institution}
                </h3>
                <p className="mt-2 text-base font-medium text-foreground/90">
                  {entry.degree}
                </p>
                {entry.description ? (
                  <p className="mt-2 font-sans text-sm text-muted">
                    {entry.description}
                  </p>
                ) : null}
              </div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">
                {entry.status === 'current' ? 'Current' : 'Completed'}
              </p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
