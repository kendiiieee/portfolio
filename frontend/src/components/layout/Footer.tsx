import { getActiveSocialLinks, SITE } from '@/lib/constants';
import { SocialLinks } from '@/components/ui/SocialLinks';
import { Container } from '@/components/ui/Container';

export function Footer() {
  const year = new Date().getFullYear();
  const socialLinks = getActiveSocialLinks();

  return (
    <footer>
      <div className="bg-accent py-10 text-white">
        <Container className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-display text-4xl font-bold tracking-tight sm:text-5xl">
              {SITE.name.split(' ')[0]}
              <span className="text-white/70">.</span>
            </p>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/85">
              Backend-focused work across APIs, databases, and product systems.
              <span className="mt-1 block">Makati · {year}</span>
            </p>
          </div>
          <SocialLinks links={socialLinks} onAccent />
        </Container>
      </div>
    </footer>
  );
}
