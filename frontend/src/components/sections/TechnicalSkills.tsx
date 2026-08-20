import { SKILL_CATEGORIES } from '@/lib/constants';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Badge } from '@/components/ui/Badge';
import { Container } from '@/components/ui/Container';

export function TechnicalSkills() {
  return (
    <section id="skills" className="bg-surface pt-12 pb-6">
      <Container>
        <SectionHeading
          index="05"
          eyebrow="Technical Skills"
          title="Craft & tools"
          description="Languages, frameworks, and platforms used across academic systems, mobile games, and product work."
        />

        <div className="grid border border-border md:grid-cols-3">
          {SKILL_CATEGORIES.map((category, index) => (
            <article
              key={category.id}
              className={`bg-background p-6 sm:p-8 ${
                index > 0 ? 'border-t border-border md:border-l md:border-t-0' : ''
              }`}
            >
              <p className="font-display text-4xl font-bold text-accent/80">
                {String(index + 1).padStart(2, '0')}
              </p>
              <h3 className="mt-4 font-display text-2xl font-bold text-foreground">
                {category.title}
              </h3>
              <div className="mt-6 flex flex-wrap gap-2">
                {category.items.map((item) => (
                  <Badge key={item} label={item} />
                ))}
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
