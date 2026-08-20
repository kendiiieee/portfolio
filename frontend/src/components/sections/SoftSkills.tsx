import { SOFT_SKILLS } from '@/lib/constants';
import { Container } from '@/components/ui/Container';
import { Clock, Eye, Sparkles, Users } from 'lucide-react';
import type { SoftSkill } from '@/types';

const iconMap: Record<SoftSkill['icon'], typeof Eye> = {
  eye: Eye,
  users: Users,
  sparkles: Sparkles,
  clock: Clock,
};

export function SoftSkills() {
  return (
    <section className="bg-surface pb-12">
      <Container>
        <div className="grid overflow-hidden border border-border lg:grid-cols-[220px_1fr]">
          <div className="bg-accent px-6 py-8 text-white sm:px-8">
            <h3 className="font-display text-3xl font-bold tracking-tight">
              How I work
            </h3>
            <p className="mt-3 font-sans text-base text-white/80">
              Soft skills carried into every project.
            </p>
          </div>
          <div className="grid bg-background sm:grid-cols-2">
            {SOFT_SKILLS.map((skill) => {
              const Icon = iconMap[skill.icon];

              return (
                <div
                  key={skill.id}
                  className="flex items-start gap-3 border-t border-border p-5 sm:border-l sm:even:border-l-0 lg:even:border-l"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center bg-accent text-white">
                    <Icon className="h-4 w-4" />
                  </div>
                  <p className="pt-1.5 text-sm font-medium leading-relaxed text-foreground">
                    {skill.label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
