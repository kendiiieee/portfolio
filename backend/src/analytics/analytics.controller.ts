import { Body, Controller, Get, Post } from '@nestjs/common';
import { AnalyticsService } from './analytics.service';
import type {
  AnalyticsEventType,
  AnalyticsStats,
} from './interfaces/analytics.interface';

@Controller('analytics')
export class AnalyticsController {
  constructor(private readonly analyticsService: AnalyticsService) {}

  @Get('stats')
  getStats(): AnalyticsStats {
    return this.analyticsService.getStats();
  }

  @Post('events')
  recordEvent(@Body('type') type: AnalyticsEventType): { success: true } {
    this.analyticsService.recordEvent(type);
    return { success: true };
  }
}
