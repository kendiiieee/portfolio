'use client';

import { getAnalyticsStats, recordAnalyticsEvent } from '@/lib/api';
import type { AnalyticsStats } from '@/types';
import { Container } from '@/components/ui/Container';
import { useEffect, useState } from 'react';

const initialStats: AnalyticsStats = {
  visits: 0,
  resumeDownloads: 0,
  collaborationInquiries: 0,
};

export function SiteStats() {
  const [stats, setStats] = useState<AnalyticsStats>(initialStats);

  useEffect(() => {
    const loadStats = async () => {
      try {
        const currentStats = await getAnalyticsStats();
        setStats(currentStats);

        if (!sessionStorage.getItem('portfolio-visit-recorded')) {
          await recordAnalyticsEvent('visit');
          sessionStorage.setItem('portfolio-visit-recorded', 'true');
          setStats((current) => ({ ...current, visits: current.visits + 1 }));
        }
      } catch {
        // Analytics should never prevent the portfolio from rendering.
      }
    };

    void loadStats();
  }, []);

  const metrics = [
    { label: 'Visits', value: stats.visits, featured: true },
    { label: 'Resume downloads', value: stats.resumeDownloads, featured: false },
    {
      label: 'Collaboration inquiries',
      value: stats.collaborationInquiries,
      featured: false,
    },
  ];

  return (
    <section aria-label="Portfolio activity" className="pb-4">
      <Container>
        <div className="grid overflow-hidden border border-border sm:grid-cols-3">
          {metrics.map(({ label, value, featured }) => (
            <div
              key={label}
              className={`flex items-end justify-between gap-4 px-6 py-8 ${
                featured
                  ? 'bg-accent text-white'
                  : 'border-t border-border bg-surface sm:border-l sm:border-t-0'
              }`}
            >
              <p className="font-display text-5xl font-bold leading-none">
                {value}
              </p>
              <p
                className={`max-w-[7rem] text-right text-xs leading-relaxed ${
                  featured ? 'text-white/80' : 'text-muted'
                }`}
              >
                {label}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
