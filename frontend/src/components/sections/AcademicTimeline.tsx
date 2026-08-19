import { TIMELINE_ENTRIES } from '@/lib/constants';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { GraduationCap } from 'lucide-react';

export function AcademicTimeline() {
  return (
    <section id="academics" className="px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Academic Background"
          title="Education & Training"
          description="A continuous journey in computer science and STEM, building the foundation for full-stack and mobile development."
        />

        <div className="relative">
          <div
            className="absolute left-4 top-0 hidden h-full w-px bg-gradient-to-b from-accent via-border to-transparent sm:left-8 md:block"
            aria-hidden
          />

          <ol className="space-y-8">
            {TIMELINE_ENTRIES.map((entry) => (
              <li key={entry.id} className="relative md:pl-20">
                <div
                  className="absolute left-0 top-1 hidden h-4 w-4 rounded-full border-4 border-background bg-accent shadow-[0_0_0_4px_rgba(99,102,241,0.15)] md:left-6 md:block"
                  aria-hidden
                />

                <article className="rounded-2xl border border-border bg-surface/50 p-6 transition hover:border-accent/30 hover:bg-surface">
                  <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className="rounded-xl border border-border bg-background p-2 text-accent">
                        <GraduationCap className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-display text-xl font-bold text-foreground">
                          {entry.institution}
                        </h3>
                        <p className="text-sm text-accent">{entry.period}</p>
                      </div>
                    </div>
                    <span className="rounded-full border border-border bg-background px-3 py-1 text-xs font-medium text-muted">
                      {entry.status === 'current' ? 'Current' : 'Completed'}
                    </span>
                  </div>

                  <p className="text-base font-medium text-foreground">
                    {entry.degree}
                  </p>
                  {entry.description ? (
                    <p className="mt-2 text-sm text-muted">{entry.description}</p>
                  ) : null}
                </article>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
