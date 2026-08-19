import { getActiveSocialLinks, SITE } from '@/lib/constants';
import { SocialLinks } from '@/components/ui/SocialLinks';

export function Footer() {
  const year = new Date().getFullYear();
  const socialLinks = getActiveSocialLinks();

  return (
    <footer className="border-t border-border bg-surface/40">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-10 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-display text-lg font-semibold text-foreground">
            {SITE.name}
          </p>
          <p className="mt-1 text-sm text-muted">
            Built with Next.js & NestJS · {year}
          </p>
        </div>

        <SocialLinks links={socialLinks} />
      </div>
    </footer>
  );
}
