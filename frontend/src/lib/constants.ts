import type {
  InternshipExperience,
  NavLink,
  Certification,
  SkillCategory,
  SocialLink,
  SoftSkill,
  TimelineEntry,
} from '@/types';

export const SITE = {
  name: 'Nicole Candelaria',
  title: 'Backend-focused Computer Science graduate building web and mobile applications',
  tagline:
    'Experience developing APIs, managing databases, and supporting reliable web and mobile products.',
  email: 'andreanicolecandelaria@gmail.com',
  location: 'Makati, Metro Manila, Philippines',
  resumeUrl: '/Candelaria - Resume.pdf',
  /** Drop your photo at public/images/profile.jpg (or update this path). */
  profileImage: '/images/profile.jpg',
} as const;

/** Add your URLs below. Links with an empty href are hidden automatically. */
export const SOCIAL_LINKS: SocialLink[] = [
  {
    id: 'github',
    label: 'GitHub',
    href: 'https://github.com/nicolecandelaria',
    icon: 'github',
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/nicole-candelaria/',
    icon: 'linkedin',
  },
  {
    id: 'email',
    label: 'Email',
    href: 'mailto:andreanicolecandelaria@gmail.com',
    icon: 'mail',
  },
];

export function getActiveSocialLinks(): SocialLink[] {
  return SOCIAL_LINKS.filter((link) => link.href.trim().length > 0);
}

export const NAV_LINKS: NavLink[] = [
  { href: '#about', label: 'About' },
  { href: '#academics', label: 'Academics' },
  { href: '#experience', label: 'Experience' },
  { href: '#certifications', label: 'Certifications' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
];

export const TIMELINE_ENTRIES: TimelineEntry[] = [
  {
    id: 'umak',
    institution: 'University of Makati',
    period: '2022 – 2026',
    degree: 'Bachelor of Science in Computer Science',
    status: 'completed',
    description: 'Major in Application Development',
  },
  {
    id: 'pitogo',
    institution: 'Pitogo High School',
    period: '2017 - 2021',
    degree: 'Science, Technology, Engineering, Mathematics (STEM)',
    status: 'completed',
    description: 'STEM Track',
  },
];

export const INTERNSHIP_EXPERIENCE: InternshipExperience = {
  company: 'Inspire Holdings Incorporated',
  title: 'Software Developer Intern',
  period: 'February – May 2026',
  locations: ['Uptown Bonifacio, BGC, Taguig City'],
  projects: [
    {
      name: 'Loopwork V1 Website',
      period: 'February – May 2026',
      role: 'Backend',
      technologies: ['NestJS', 'Next.js', 'Firebase'],
      description:
        'Refactored and optimized pre-existing NestJS APIs for core Schedule and Document Management features, diagnosing and fixing architectural bugs to improve system uptime and performance.',
    },
    {
      name: 'Loopwork V2 Website and Mobile',
      period: 'February – May 2026',
      role: 'Backend',
      technologies: ['NestJS', 'Next.js', 'Supabase', 'Expo Go', 'EmailJS'],
      description:
        'Scaled backend architecture for Project Management modules and integrated EmailJS to support contact functionality across web and mobile platforms.',
    },
  ],
};

export const CERTIFICATIONS: Certification[] = [
  {
    id: 'its-databases',
    name: 'Information Technology Specialist – Databases',
    issuer: 'Certiport / Pearson',
    date: 'December 5, 2025',
    imageUrl:
      '/certifications/Information Technology Specialist - Databases - Nicole Candelaria.pdf',
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'languages',
    title: 'Programming Languages',
    items: ['Java', 'JavaScript', 'PHP', 'C#', 'Python', 'TypeScript'],
  },
  {
    id: 'frameworks',
    title: 'Frameworks & Libraries',
    items: ['CodeIgniter', 'Next.js', 'NestJS', 'React'],
  },
  {
    id: 'tools',
    title: 'Development Tools & IDEs',
    items: [
      'Visual Studio Code',
      'Microsoft Visual Studio',
      'Android Studio',
      'Unity',
      'Google Colab',
      'Expo Go',
    ],
  },
];

export const SOFT_SKILLS: SoftSkill[] = [
  { id: 'detail', label: 'Attention to Detail', icon: 'eye' },
  { id: 'teamwork', label: 'Teamwork & Collaboration', icon: 'users' },
  {
    id: 'adaptability',
    label: 'Adaptability & Willingness to Learn',
    icon: 'sparkles',
  },
  {
    id: 'time',
    label: 'Time Management & Organization',
    icon: 'clock',
  },
];

export const FALLBACK_PROJECTS = [
  {
    id: '1',
    name: 'ForeRent',
    slug: 'forerent',
    description:
      'Rental Property Management System for streamlining property listings, tenant records, and rental workflows.',
    period: '2024 – 2026',
    roles: [
      'Business Analyst',
      'Tester',
      'Project Documentation',],
    techStack: ['Laravel', 'Docker', 'HTML', 'Tailwind CSS', 'PHP', 'MySQL'],
    category: 'academic' as const,
    featured: true,
  },
  {
    id: '2',
    name: 'ReadySeatGo',
    slug: 'readyseatgo',
    description:
      'Seat Reservation System enabling efficient booking and management of seating availability.',
    period: '2024 – 2025',
    roles: ['Frontend & Backend Developer', 'Project Documentation'],
    techStack: ['PHP', 'CodeIgniter', 'MySQL', 'Bootstrap'],
    category: 'academic' as const,
    featured: true,
  },
  {
    id: '3',
    name: "The Merchant's Seeker",
    slug: 'the-merchants-seeker',
    description:
      'Object Finding Mobile Game where players explore environments to locate hidden merchant items.',
    period: '2023 – 2024',
    roles: [
      'Frontend & Backend Developer',
      'Database Creation & Management',
    ],
    techStack: ['Unity', 'C#', 'Android Studio', 'Firebase'],
    category: 'academic' as const,
    featured: true,
  },
  {
    id: '4',
    name: 'PillFluence',
    slug: 'pillfluence',
    description:
      'Mobile Medication Tracker helping users manage prescriptions and adherence reminders.',
    period: '2023 – 2024',
    roles: [
      'Frontend & Backend Developer',
      'Database Creation & Management',
    ],
    techStack: ['Java', 'Android Studio', 'SQLite', 'Firebase'],
    category: 'academic' as const,
    featured: true,
  },
  {
    id: '5',
    name: 'DelveSense',
    slug: 'delvesense',
    description:
      'Library Management System for cataloging books and tracking borrow/return cycles.',
    period: '2023 – 2024',
    roles: ['Frontend & Backend Developer', 'Project Documentation'],
    techStack: ['PHP', 'CodeIgniter', 'MySQL', 'JavaScript'],
    category: 'other' as const,
    featured: true,
  },
];
