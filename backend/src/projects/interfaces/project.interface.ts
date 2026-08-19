export interface Project {
  id: string;
  name: string;
  slug: string;
  description: string;
  period: string;
  roles: string[];
  techStack: string[];
  category: 'academic' | 'other';
  featured: boolean;
}

export interface ProjectsResponse {
  projects: Project[];
  total: number;
}
