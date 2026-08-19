export interface ContactSubmission {
  id: string;
  name: string;
  email: string;
  inquiryType: 'collaboration' | 'question' | 'opportunity';
  subject: string;
  message: string;
  createdAt: string;
}

export interface ContactResponse {
  success: boolean;
  message: string;
  submission?: ContactSubmission;
}
