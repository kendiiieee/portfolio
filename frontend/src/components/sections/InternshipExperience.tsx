import { INTERNSHIP_EXPERIENCE } from '@/lib/constants';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Container } from '@/components/ui/Container';
import { MapPin } from 'lucide-react';

export function InternshipExperience() {
  const experience = INTERNSHIP_EXPERIENCE;

  return (
    <section id="experience" className="bg-surface py-12">
      <Container>
        <SectionHeading
          index="03"
          eyebrow="Professional Experience"
          title="Internship"
          description="Applied backend development across web and mobile products at Inspire Holdings Incorporated."
        />

        <article className="overflow-hidden border border-border bg-background">
          <div className="flex flex-col gap-6 bg-accent p-6 text-white sm:p-8 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-white/75">
                {experience.period}
              </p>
              <h3 className="mt-3 font-display text-4xl font-bold tracking-tight">
                {experience.company}
              </h3>
              <p className="mt-2 font-sans text-xl text-white/85">
                {experience.title}
              </p>
            </div>

            <div className="space-y-2 text-sm text-white/85">
              {experience.locations.map((location) => (
                <span key={location} className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" aria-hidden />
                  {location}
                </span>
              ))}
            </div>
          </div>

          <div className="grid lg:grid-cols-2">
            {experience.projects.map((project, index) => (
              <article
                key={project.name}
                className={`p-6 sm:p-8 ${
                  index === 0 ? 'lg:border-r lg:border-border' : 'border-t border-border lg:border-t-0'
                }`}
              >
                <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-accent">
                  Engagement {String(index + 1).padStart(2, '0')}
                </p>
                <h4 className="mt-3 font-display text-2xl font-bold text-foreground">
                  {project.name}
                </h4>
                <p className="mt-2 text-sm font-medium text-accent">{project.role}</p>
                <p className="mt-5 text-sm leading-relaxed text-muted">
                  {project.description}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="border border-border px-2.5 py-1 text-[11px] font-medium text-muted"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </article>
      </Container>
    </section>
  );
}
