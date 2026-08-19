'use client';

import { getAnalyticsStats, recordAnalyticsEvent } from '@/lib/api';
import type { AnalyticsStats } from '@/types';
import { Download, Eye, Handshake } from 'lucide-react';
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
    { label: 'Visits', value: stats.visits, icon: Eye },
    { label: 'Resume downloads', value: stats.resumeDownloads, icon: Download },
    {
      label: 'Collaboration inquiries',
      value: stats.collaborationInquiries,
      icon: Handshake,
    },
  ];

  return (
    <section aria-label="Portfolio activity" className="px-6 pb-20 pt-8 sm:pt-12">
      <div className="mx-auto grid max-w-6xl gap-4 sm:grid-cols-3">
        {metrics.map(({ label, value, icon: Icon }) => (
          <div
            key={label}
            className="flex items-center gap-4 rounded-2xl border border-border bg-surface/50 p-5"
          >
            <Icon className="h-5 w-5 shrink-0 text-accent" aria-hidden />
            <div>
              <p className="text-2xl font-bold text-foreground">{value}</p>
              <p className="text-sm text-muted">{label}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
