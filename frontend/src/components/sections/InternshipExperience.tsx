import { INTERNSHIP_EXPERIENCE } from '@/lib/constants';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { BriefcaseBusiness, MapPin } from 'lucide-react';

export function InternshipExperience() {
  const experience = INTERNSHIP_EXPERIENCE;

  return (
    <section id="experience" className="px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Professional Experience"
          title="Internship Experience"
          description="Applied backend development experience across web and mobile products at Inspire Holdings Incorporated."
        />

        <article className="rounded-2xl border border-border bg-surface/50 p-6 sm:p-8">
          <div className="flex flex-col gap-5 border-b border-border pb-6 md:flex-row md:items-start md:justify-between">
            <div className="flex gap-4">
              <div className="rounded-xl border border-border bg-background p-3 text-accent">
                <BriefcaseBusiness className="h-6 w-6" aria-hidden />
              </div>
              <div>
                <h3 className="font-display text-2xl font-bold text-foreground">
                  {experience.company}
                </h3>
                <p className="mt-1 text-base font-medium text-accent">
                  {experience.title}
                </p>
                <p className="mt-1 text-sm text-muted">{experience.period}</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-muted">
              {experience.locations.map((location) => (
                <span key={location} className="inline-flex items-center gap-1.5">
                  <MapPin className="h-4 w-4 text-accent" aria-hidden />
                  {location}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-8 grid gap-8 lg:grid-cols-2">
            {experience.projects.map((project) => (
              <article
                key={project.name}
                className="rounded-xl border border-border bg-background/60 p-6"
              >
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <h4 className="font-display text-xl font-bold text-foreground">
                      {project.name}
                    </h4>
                    <p className="mt-2 text-sm text-accent">{project.role}</p>
                  </div>
                </div>

                <p className="mt-5 text-sm leading-relaxed text-muted">
                  {project.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full border border-border px-3 py-1 text-xs font-medium text-muted"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </article>
      </div>
    </section>
  );
}
