import type { Project } from '@/types';
import { Badge } from '@/components/ui/Badge';
import { Calendar, Image as ImageIcon, Layers } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group flex h-full flex-col rounded-2xl border border-border bg-surface/60 p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-lg hover:shadow-accent/5">
      <div className="mb-4 flex items-start justify-between gap-4">
        <div>
          <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-accent">
            {project.category === 'academic' ? 'Academic Project' : 'Other Project'}
          </p>
          <h3 className="font-display text-xl font-bold text-foreground">
            {project.name}
          </h3>
        </div>
        <div className="rounded-full border border-border bg-background p-2 text-muted transition group-hover:border-accent/30 group-hover:text-accent">
          <Layers className="h-4 w-4" />
        </div>
      </div>

      <div
        className="mb-6 flex aspect-video items-center justify-center rounded-xl border border-dashed border-accent/40 bg-background/70 px-4 text-center"
        aria-label={`Screenshot placeholder for ${project.name}`}
      >
        <div className="flex flex-col items-center gap-2 text-muted">
          <ImageIcon className="h-7 w-7 text-accent/70" aria-hidden />
          <span className="text-sm font-medium">Screenshot coming soon</span>
          <span className="text-xs">Add a project preview here</span>
        </div>
      </div>

      <p className="mb-4 flex-1 text-sm leading-relaxed text-muted">
        {project.description}
      </p>

      <div className="mb-4 flex items-center gap-2 text-xs text-muted">
        <Calendar className="h-3.5 w-3.5" />
        <span>{project.period}</span>
      </div>

      <div className="mb-4">
        <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-foreground/70">
          Roles
        </p>
        <div className="flex flex-wrap gap-2">
          {project.roles.map((role) => (
            <Badge key={role} label={role} variant="accent" />
          ))}
        </div>
      </div>

      <div>
        <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-foreground/70">
          Tech Stack
        </p>
        <div className="flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <Badge key={tech} label={tech} />
          ))}
        </div>
      </div>
    </article>
  );
}
