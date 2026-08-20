'use client';

import { NAV_LINKS, SITE } from '@/lib/constants';
import { ThemeToggle } from '@/components/layout/ThemeToggle';
import { recordAnalyticsEvent } from '@/lib/api';
import { Download, Menu, X } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 16);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b-2 border-accent transition-all duration-300 ${
        isScrolled ? 'bg-background/92 backdrop-blur-xl' : 'bg-background/80'
      }`}
    >
      <div className="mx-auto flex max-w-[1180px] items-center justify-between px-6 py-4 sm:px-8">
        <Link
          href="#about"
          className="font-display text-xl font-semibold tracking-tight text-foreground transition hover:text-accent"
        >
          {SITE.name.split(' ')[0]}
          <span className="text-accent">.</span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Main">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted transition hover:text-accent"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={SITE.resumeUrl}
            download
            onClick={() => {
              void recordAnalyticsEvent('resume_download').catch(() => undefined);
            }}
            className="hidden items-center gap-2 bg-accent px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-white transition hover:bg-accent-deep sm:inline-flex"
          >
            <Download className="h-3.5 w-3.5" />
            Resume
          </a>
          <ThemeToggle />

          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center border border-border bg-surface text-foreground lg:hidden"
            onClick={() => setIsOpen((open) => !open)}
            aria-expanded={isOpen}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
          >
            {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {isOpen ? (
        <nav
          className="border-t border-border bg-background px-6 py-5 lg:hidden"
          aria-label="Mobile"
        >
          <ul className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block px-2 py-2.5 text-sm font-medium text-muted transition hover:text-accent"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <a
                href={SITE.resumeUrl}
                download
                onClick={() => {
                  void recordAnalyticsEvent('resume_download').catch(
                    () => undefined,
                  );
                  setIsOpen(false);
                }}
                className="mt-2 flex items-center gap-2 bg-accent px-3 py-2.5 text-sm font-semibold text-white"
              >
                <Download className="h-4 w-4" />
                Download resume
              </a>
            </li>
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
