'use client';

import { submitContactForm } from '@/lib/api';
import { SITE } from '@/lib/constants';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Container } from '@/components/ui/Container';
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

const fieldClass =
  'w-full rounded-none border border-border bg-paper px-4 py-3 text-sm text-foreground outline-none transition focus:border-accent';

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
    <section id="contact" className="bg-surface py-12">
      <Container>
        <SectionHeading
          index="07"
          eyebrow="Contact"
          title="Let's talk"
          description={`A note for collaborations, questions, or opportunities — replies go to ${SITE.email}.`}
        />

        <div className="grid border border-border lg:grid-cols-[0.85fr_1.15fr]">
          <aside className="bg-accent p-8 text-white sm:p-10">
            <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-white/70">
              Direct line
            </p>
            <h3 className="mt-4 font-display text-4xl font-bold leading-none tracking-tight">
              Get in touch
            </h3>
            <p className="mt-5 font-sans text-lg leading-relaxed text-white/85">
              Open to internships, project collaborations, and roles where
              backend systems and careful analysis matter.
            </p>

            <dl className="mt-10 space-y-6 text-sm">
              <div>
                <dt className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/60">
                  Email
                </dt>
                <dd className="mt-1">{SITE.email}</dd>
              </div>
              <div>
                <dt className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/60">
                  Location
                </dt>
                <dd className="mt-1">{SITE.location}</dd>
              </div>
              <div>
                <dt className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/60">
                  Focus
                </dt>
                <dd className="mt-1 text-white/90">
                  Full-stack development, database design, business analysis
                </dd>
              </div>
            </dl>
          </aside>

          <form
            onSubmit={handleSubmit}
            className="bg-background p-8 sm:p-10"
            noValidate
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-2 block text-xs font-medium uppercase tracking-[0.14em] text-muted">
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
                  className={fieldClass}
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="mb-2 block text-xs font-medium uppercase tracking-[0.14em] text-muted">
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
                  className={fieldClass}
                  placeholder="you@example.com"
                />
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="inquiryType" className="mb-2 block text-xs font-medium uppercase tracking-[0.14em] text-muted">
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
                  className={fieldClass}
                >
                  <option value="collaboration">Project collaboration</option>
                  <option value="opportunity">Job opportunity</option>
                  <option value="question">General question</option>
                </select>
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="subject" className="mb-2 block text-xs font-medium uppercase tracking-[0.14em] text-muted">
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
                  className={fieldClass}
                  placeholder="Project inquiry"
                />
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="message" className="mb-2 block text-xs font-medium uppercase tracking-[0.14em] text-muted">
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
                  className={`${fieldClass} resize-y`}
                  placeholder="Tell me about your project or opportunity..."
                />
              </div>
            </div>

            {feedback ? (
              <div
                className={`mt-5 flex items-start gap-2 border px-4 py-3 text-sm ${
                  status === 'success'
                    ? 'border-emerald-600/30 bg-emerald-500/10 text-emerald-700 dark:text-emerald-400'
                    : 'border-accent/40 bg-accent-soft text-accent'
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
              className="mt-7 inline-flex w-full items-center justify-center gap-2 bg-accent px-6 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-accent-deep disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
            >
              {status === 'loading' ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Sending
                </>
              ) : (
                <>
                  <Send className="h-4 w-4" />
                  Send message
                </>
              )}
            </button>
          </form>
        </div>
      </Container>
    </section>
  );
}
