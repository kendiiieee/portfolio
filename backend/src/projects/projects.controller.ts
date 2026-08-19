import { Controller, Get, NotFoundException, Param } from '@nestjs/common';
import { ProjectsService } from './projects.service';
import type { Project, ProjectsResponse } from './interfaces/project.interface';

@Controller('projects')
export class ProjectsController {
  constructor(private readonly projectsService: ProjectsService) {}

  @Get()
  getAllProjects(): ProjectsResponse {
    return this.projectsService.findAll();
  }

  @Get('featured')
  getFeaturedProjects(): Project[] {
    return this.projectsService.findFeatured();
  }

  @Get(':slug')
  getProjectBySlug(@Param('slug') slug: string): Project {
    const project = this.projectsService.findBySlug(slug);

    if (!project) {
      throw new NotFoundException(`Project with slug "${slug}" not found`);
    }

    return project;
  }
}
