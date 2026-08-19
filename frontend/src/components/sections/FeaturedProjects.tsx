import { FALLBACK_PROJECTS } from '@/lib/constants';
import { getFeaturedProjects } from '@/lib/api';
import { ProjectCard } from '@/components/ui/ProjectCard';
import { SectionHeading } from '@/components/ui/SectionHeading';
import type { Project } from '@/types';

export async function FeaturedProjects() {
  let projects: Project[] = FALLBACK_PROJECTS;

  try {
    projects = await getFeaturedProjects();
  } catch {
    projects = FALLBACK_PROJECTS;
  }

  return (
    <section id="projects" className="px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Featured Projects"
          title="Academic & Personal Work"
          description="A selection of systems and applications spanning property management, reservations, mobile games, and health tracking."
        />

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
