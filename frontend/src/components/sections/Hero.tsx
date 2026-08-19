import { getActiveSocialLinks, SITE } from '@/lib/constants';
import { ProfileAvatar } from '@/components/ui/ProfileAvatar';
import { SocialLinks } from '@/components/ui/SocialLinks';
import { ArrowDown } from 'lucide-react';
import Link from 'next/link';

export function Hero() {
  const socialLinks = getActiveSocialLinks();

  return (
    <section
      id="about"
      className="relative overflow-hidden px-6 pb-20 pt-16 sm:pt-24"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(99,102,241,0.18),transparent_45%),radial-gradient(circle_at_bottom_left,rgba(14,165,233,0.12),transparent_40%)]" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1fr_auto] lg:gap-16">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-accent">
            Welcome to my portfolio
          </p>
          <h1 className="font-display text-5xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-6xl lg:text-7xl">
            Hello, I&apos;m{' '}
            <span className="bg-gradient-to-r from-accent to-sky-400 bg-clip-text text-transparent">
              Nicole
            </span>
          </h1>
          <p className="mt-6 text-xl font-medium text-foreground/90 sm:text-2xl">
            {SITE.title}
          </p>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
            {SITE.tagline}
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              href="#projects"
              className="inline-flex items-center justify-center rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white transition hover:bg-accent/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              View Projects
            </Link>
            <Link
              href="#contact"
              className="inline-flex items-center justify-center rounded-full border border-border bg-surface px-6 py-3 text-sm font-semibold text-foreground transition hover:border-accent/40 hover:text-accent"
            >
              Contact Me
            </Link>
          </div>

          <SocialLinks links={socialLinks} className="mt-8" />
        </div>

        <ProfileAvatar src={SITE.profileImage} name={SITE.name} />
      </div>

      <div className="relative mx-auto max-w-6xl">
        <Link
          href="#academics"
          className="mt-16 inline-flex items-center gap-2 text-sm text-muted transition hover:text-accent"
          aria-label="Scroll to academic background"
        >
          <ArrowDown className="h-4 w-4 animate-bounce" />
          Explore more
        </Link>
      </div>
    </section>
  );
}
