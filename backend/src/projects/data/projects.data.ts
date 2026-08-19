import { Project } from '../interfaces/project.interface';

export const PROJECTS: Project[] = [
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
      'Project Documentation',
    ],
    techStack: ['Laravel', 'Docker', 'HTML/CSS', 'Tailwind CSS', 'MySQL'],
    category: 'academic',
    featured: true,
  },
  {
    id: '2',
    name: 'ReadySeatGo',
    slug: 'readyseatgo',
    description:
      'Seat Reservation System enabling efficient booking, scheduling, and management of seating availability.',
    period: '2024 – 2025',
    roles: ['Frontend & Backend Developer', 'Project Documentation'],
    techStack: ['PHP', 'CodeIgniter', 'MySQL', 'JavaScript', 'Bootstrap'],
    category: 'academic',
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
      'Project Documentation',
    ],
    techStack: ['Unity', 'C#', 'Android Studio', 'SQLite', 'Firebase'],
    category: 'academic',
    featured: true,
  },
  {
    id: '4',
    name: 'PillFluence',
    slug: 'pillfluence',
    description:
      'Mobile Medication Tracker helping users manage prescriptions, schedules, and adherence reminders.',
    period: '2023 – 2024',
    roles: [
      'Frontend & Backend Developer',
      'Database Creation & Management',
      'Project Documentation',
    ],
    techStack: ['Java', 'Android Studio', 'SQLite', 'Firebase', 'XML'],
    category: 'academic',
    featured: true,
  },
  {
    id: '5',
    name: 'DelveSense',
    slug: 'delvesense',
    description:
      'Library Management System for cataloging books, tracking borrow/return cycles, and managing inventory.',
    period: '2023 – 2024',
    roles: ['Frontend & Backend Developer', 'Project Documentation'],
    techStack: ['PHP', 'CodeIgniter', 'MySQL', 'JavaScript', 'Bootstrap'],
    category: 'other',
    featured: true,
  },
];
