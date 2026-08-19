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

export interface ContactFormData {
  name: string;
  email: string;
  inquiryType: 'collaboration' | 'question' | 'opportunity';
  subject: string;
  message: string;
}

export interface ContactResponse {
  success: boolean;
  message: string;
}

export interface AnalyticsStats {
  visits: number;
  resumeDownloads: number;
  collaborationInquiries: number;
}

export interface TimelineEntry {
  id: string;
  institution: string;
  period: string;
  degree: string;
  status: 'current' | 'completed';
  description?: string;
}

export interface InternshipProject {
  name: string;
  period: string;
  role: string;
  technologies: string[];
  description: string;
}

export interface InternshipExperience {
  company: string;
  title: string;
  period: string;
  locations: string[];
  projects: InternshipProject[];
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  date: string;
  imageUrl: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  items: string[];
}

export interface SoftSkill {
  id: string;
  label: string;
  icon: 'eye' | 'users' | 'sparkles' | 'clock';
}

export interface NavLink {
  href: string;
  label: string;
}

export interface SocialLink {
  id: string;
  label: string;
  href: string;
  icon: 'github' | 'linkedin' | 'mail';
}
