import { Injectable } from '@nestjs/common';
import {
  AnalyticsEventType,
  AnalyticsStats,
} from './interfaces/analytics.interface';

@Injectable()
export class AnalyticsService {
  private readonly stats: AnalyticsStats = {
    visits: 0,
    resumeDownloads: 0,
    collaborationInquiries: 0,
  };

  recordEvent(type: AnalyticsEventType): void {
    if (type === 'visit') {
      this.stats.visits += 1;
    }

    if (type === 'resume_download') {
      this.stats.resumeDownloads += 1;
    }

    if (type === 'collaboration_inquiry') {
      this.stats.collaborationInquiries += 1;
    }
  }

  getStats(): AnalyticsStats {
    return { ...this.stats };
  }
}
