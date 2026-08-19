import { SKILL_CATEGORIES } from '@/lib/constants';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Badge } from '@/components/ui/Badge';
import { Code2, Wrench } from 'lucide-react';

const categoryIcons: Record<string, typeof Code2> = {
  languages: Code2,
  frameworks: Code2,
  tools: Wrench,
};

export function TechnicalSkills() {
  return (
    <section id="skills" className="px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Technical Skills"
          title="Tools, Languages & Frameworks"
          description="Technologies and platforms used across academic projects—from web systems to mobile games and medication trackers."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SKILL_CATEGORIES.map((category) => {
            const Icon = categoryIcons[category.id] ?? Code2;

            return (
              <article
                key={category.id}
                className="rounded-2xl border border-border bg-surface/50 p-6 transition hover:border-accent/30"
              >
                <div className="mb-5 flex items-center gap-3">
                  <div className="rounded-xl border border-border bg-background p-2 text-accent">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-foreground">
                    {category.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.items.map((item) => (
                    <Badge key={item} label={item} />
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
