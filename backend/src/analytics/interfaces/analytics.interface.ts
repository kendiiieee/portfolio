export type AnalyticsEventType =
  | 'visit'
  | 'resume_download'
  | 'collaboration_inquiry';

export interface AnalyticsStats {
  visits: number;
  resumeDownloads: number;
  collaborationInquiries: number;
}
