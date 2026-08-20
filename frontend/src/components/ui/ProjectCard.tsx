import type { Project } from '@/types';
import { Badge } from '@/components/ui/Badge';
import { Calendar } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  featured?: boolean;
}

export function ProjectCard({ project, featured = false }: ProjectCardProps) {
  return (
    <article
      className={`group flex h-full flex-col border border-border bg-surface p-6 transition duration-300 hover:border-accent ${
        featured ? 'sm:p-8 lg:flex-row lg:gap-10' : ''
      }`}
    >
      <div
        className={`relative mb-6 overflow-hidden bg-accent-deep ${
          featured ? 'lg:mb-0 lg:w-[46%] lg:shrink-0' : 'aspect-[16/10]'
        }`}
        aria-hidden
      >
        <div className={`${featured ? 'aspect-[16/11] h-full min-h-[220px]' : 'h-full'} relative`}>
          <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.08)_0%,transparent_42%),repeating-linear-gradient(90deg,transparent,transparent_31px,rgba(255,255,255,0.05)_32px)]" />
          <div className="absolute left-5 top-5 font-mono text-[10px] uppercase tracking-[0.28em] text-white/70">
            {project.category === 'academic' ? 'Academic' : 'Selected'}
          </div>
          <div className="absolute bottom-5 left-5 right-5">
            <p className="font-display text-3xl font-bold leading-none text-white">
              {project.name}
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-1 flex-col">
        <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.24em] text-accent">
          {project.category === 'academic' ? 'Academic Project' : 'Other Project'}
        </p>
        <h3 className="font-display text-2xl font-bold tracking-tight text-foreground">
          {project.name}
        </h3>

        <p className="mt-4 flex-1 text-sm leading-relaxed text-muted">
          {project.description}
        </p>

        <div className="mt-5 flex items-center gap-2 text-xs text-muted">
          <Calendar className="h-3.5 w-3.5 text-accent" />
          <span>{project.period}</span>
        </div>

        <div className="mt-5">
          <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.2em] text-foreground/55">
            Roles
          </p>
          <div className="flex flex-wrap gap-2">
            {project.roles.map((role) => (
              <Badge key={role} label={role} variant="accent" />
            ))}
          </div>
        </div>

        <div className="mt-4">
          <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.2em] text-foreground/55">
            Tech Stack
          </p>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <Badge key={tech} label={tech} />
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}
