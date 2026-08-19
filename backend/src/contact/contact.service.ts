import { Injectable, Logger } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { CreateContactDto } from './dto/create-contact.dto';
import {
  ContactResponse,
  ContactSubmission,
} from './interfaces/contact.interface';
import { AnalyticsService } from '../analytics/analytics.service';

@Injectable()
export class ContactService {
  private readonly logger = new Logger(ContactService.name);
  private readonly submissions: ContactSubmission[] = [];

  constructor(private readonly analyticsService: AnalyticsService) {}

  create(dto: CreateContactDto): ContactResponse {
    const submission: ContactSubmission = {
      id: randomUUID(),
      name: dto.name.trim(),
      email: dto.email.trim().toLowerCase(),
      inquiryType: dto.inquiryType,
      subject: dto.subject.trim(),
      message: dto.message.trim(),
      createdAt: new Date().toISOString(),
    };

    this.submissions.push(submission);

    if (submission.inquiryType === 'collaboration') {
      this.analyticsService.recordEvent('collaboration_inquiry');
    }

    this.logger.log(
      `New contact submission from ${submission.email}: "${submission.subject}"`,
    );

    return {
      success: true,
      message: 'Thank you for reaching out. Your message has been received.',
      submission,
    };
  }

  findAll(): ContactSubmission[] {
    return [...this.submissions];
  }
}
