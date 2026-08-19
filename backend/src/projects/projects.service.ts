import { Injectable } from '@nestjs/common';
import { PROJECTS } from './data/projects.data';
import {
  Project,
  ProjectsResponse,
} from './interfaces/project.interface';

@Injectable()
export class ProjectsService {
  findAll(): ProjectsResponse {
    return {
      projects: PROJECTS,
      total: PROJECTS.length,
    };
  }

  findFeatured(): Project[] {
    return PROJECTS.filter((project) => project.featured);
  }

  findBySlug(slug: string): Project | undefined {
    return PROJECTS.find((project) => project.slug === slug);
  }
}
