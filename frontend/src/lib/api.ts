import type {
  ContactFormData,
  ContactResponse,
  AnalyticsStats,
  Project,
  ProjectsResponse,
} from '@/types';

export type AnalyticsEventType =
  | 'visit'
  | 'resume_download';

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:3001/api';

async function fetchJson<T>(path: string, init?: RequestInit): Promise<T> {
  const response = await fetch(`${API_BASE_URL}${path}`, {
    ...init,
    headers: {
      'Content-Type': 'application/json',
      ...init?.headers,
    },
  });

  if (!response.ok) {
    const errorBody = await response.text();
    throw new Error(errorBody || `Request failed with status ${response.status}`);
  }

  return response.json() as Promise<T>;
}

export async function getProjects(): Promise<ProjectsResponse> {
  return fetchJson<ProjectsResponse>('/projects', {
    next: { revalidate: 60 },
  });
}

export async function getFeaturedProjects(): Promise<Project[]> {
  return fetchJson<Project[]>('/projects/featured', {
    next: { revalidate: 60 },
  });
}

export async function submitContactForm(
  data: ContactFormData,
): Promise<ContactResponse> {
  return fetchJson<ContactResponse>('/contact', {
    method: 'POST',
    body: JSON.stringify(data),
  });
}

export async function getAnalyticsStats(): Promise<AnalyticsStats> {
  return fetchJson<AnalyticsStats>('/analytics/stats', {
    next: { revalidate: 15 },
  });
}

export async function recordAnalyticsEvent(
  type: AnalyticsEventType,
): Promise<void> {
  await fetchJson<{ success: true }>('/analytics/events', {
    method: 'POST',
    body: JSON.stringify({ type }),
  });
}
