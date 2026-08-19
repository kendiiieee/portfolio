'use client';

import { submitContactForm } from '@/lib/api';
import { SITE } from '@/lib/constants';
import { SectionHeading } from '@/components/ui/SectionHeading';
import type { ContactFormData } from '@/types';
import { Loader2, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { FormEvent, useState } from 'react';

type FormStatus = 'idle' | 'loading' | 'success' | 'error';

const initialFormState: ContactFormData = {
  name: '',
  email: '',
  inquiryType: 'collaboration',
  subject: '',
  message: '',
};

export function ContactForm() {
  const [form, setForm] = useState<ContactFormData>(initialFormState);
  const [status, setStatus] = useState<FormStatus>('idle');
  const [feedback, setFeedback] = useState('');

  const handleChange = (
    field: keyof ContactFormData,
    value: string,
  ): void => {
    setForm((current) => ({ ...current, [field]: value }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus('loading');
    setFeedback('');

    try {
      const response = await submitContactForm(form);
      setStatus('success');
      setFeedback(response.message);
      setForm(initialFormState);
    } catch (error) {
      setStatus('error');
      setFeedback(
        error instanceof Error
          ? error.message
          : 'Something went wrong. Please try again.',
      );
    }
  };

  return (
    <section id="contact" className="px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Contact"
          title="Let's Connect"
          description={`Interested in collaborating or have a question? Send a message and I'll get back to you at ${SITE.email}.`}
        />

        <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr]">
          <aside className="rounded-2xl border border-border bg-surface/50 p-8">
            <h3 className="font-display text-xl font-bold text-foreground">
              Get in touch
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              I&apos;m open to internships, project collaborations, and
              opportunities to grow as a developer and analyst.
            </p>

            <dl className="mt-8 space-y-4 text-sm">
              <div>
                <dt className="font-semibold text-foreground">Email</dt>
                <dd className="mt-1 text-muted">{SITE.email}</dd>
              </div>
              <div>
                <dt className="font-semibold text-foreground">Location</dt>
                <dd className="mt-1 text-muted">{SITE.location}</dd>
              </div>
              <div>
                <dt className="font-semibold text-foreground">Focus Areas</dt>
                <dd className="mt-1 text-muted">
                  Full-stack development, database design, business analysis
                </dd>
              </div>
            </dl>
          </aside>

          <form
            onSubmit={handleSubmit}
            className="rounded-2xl border border-border bg-surface/50 p-8"
            noValidate
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="sm:col-span-1">
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium text-foreground"
                >
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  minLength={2}
                  maxLength={100}
                  value={form.name}
                  onChange={(event) => handleChange('name', event.target.value)}
                  className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/20"
                  placeholder="Your name"
                />
              </div>

              <div className="sm:col-span-1">
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-foreground"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  maxLength={255}
                  value={form.email}
                  onChange={(event) => handleChange('email', event.target.value)}
                  className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/20"
                  placeholder="you@example.com"
                />
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="inquiryType"
                  className="mb-2 block text-sm font-medium text-foreground"
                >
                  Inquiry type
                </label>
                <select
                  id="inquiryType"
                  name="inquiryType"
                  value={form.inquiryType}
                  onChange={(event) =>
                    handleChange(
                      'inquiryType',
                      event.target.value as ContactFormData['inquiryType'],
                    )
                  }
                  className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/20"
                >
                  <option value="collaboration">Project collaboration</option>
                  <option value="opportunity">Job opportunity</option>
                  <option value="question">General question</option>
                </select>
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="subject"
                  className="mb-2 block text-sm font-medium text-foreground"
                >
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  minLength={3}
                  maxLength={150}
                  value={form.subject}
                  onChange={(event) =>
                    handleChange('subject', event.target.value)
                  }
                  className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/20"
                  placeholder="Project inquiry"
                />
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-foreground"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  minLength={10}
                  maxLength={2000}
                  rows={6}
                  value={form.message}
                  onChange={(event) =>
                    handleChange('message', event.target.value)
                  }
                  className="w-full resize-y rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/20"
                  placeholder="Tell me about your project or opportunity..."
                />
              </div>
            </div>

            {feedback ? (
              <div
                className={`mt-5 flex items-start gap-2 rounded-xl border px-4 py-3 text-sm ${
                  status === 'success'
                    ? 'border-emerald-500/30 bg-emerald-500/10 text-emerald-400'
                    : 'border-red-500/30 bg-red-500/10 text-red-400'
                }`}
                role="alert"
              >
                {status === 'success' ? (
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" />
                ) : (
                  <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
                )}
                <span>{feedback}</span>
              </div>
            ) : null}

            <button
              type="submit"
              disabled={status === 'loading'}
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-accent px-6 py-3 text-sm font-semibold text-white transition hover:bg-accent/90 disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
            >
              {status === 'loading' ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send className="h-4 w-4" />
                  Send Message
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
