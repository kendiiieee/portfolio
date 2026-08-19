import { SOFT_SKILLS } from '@/lib/constants';
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
    <section className="px-6 pb-10">
      <div className="mx-auto max-w-6xl">
        <div className="rounded-2xl border border-border bg-gradient-to-br from-surface/80 to-background p-8">
          <h3 className="mb-6 font-display text-2xl font-bold text-foreground">
            Soft Skills
          </h3>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {SOFT_SKILLS.map((skill) => {
              const Icon = iconMap[skill.icon];

              return (
                <div
                  key={skill.id}
                  className="flex items-start gap-3 rounded-xl border border-border/70 bg-background/60 p-4"
                >
                  <div className="rounded-lg bg-accent/10 p-2 text-accent">
                    <Icon className="h-4 w-4" />
                  </div>
                  <p className="text-sm font-medium leading-relaxed text-foreground">
                    {skill.label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
