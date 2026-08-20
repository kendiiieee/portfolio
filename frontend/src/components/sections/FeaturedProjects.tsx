import { FALLBACK_PROJECTS } from '@/lib/constants';
import { getFeaturedProjects } from '@/lib/api';
import { ProjectCard } from '@/components/ui/ProjectCard';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Container } from '@/components/ui/Container';
import type { Project } from '@/types';

export async function FeaturedProjects() {
  let projects: Project[] = FALLBACK_PROJECTS;

  try {
    projects = await getFeaturedProjects();
  } catch {
    projects = FALLBACK_PROJECTS;
  }

  const [featured, ...rest] = projects;

  return (
    <section id="projects" className="py-12">
      <Container>
        <SectionHeading
          index="06"
          eyebrow="Featured Projects"
          title="Selected work"
          description="Systems spanning property management, reservations, mobile games, and health tracking."
        />

        {featured ? (
          <div className="mb-6">
            <ProjectCard project={featured} featured />
          </div>
        ) : null}

        <div className="grid gap-6 md:grid-cols-2">
          {rest.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </Container>
    </section>
  );
}
