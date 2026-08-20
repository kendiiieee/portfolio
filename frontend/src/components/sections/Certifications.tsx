import { CERTIFICATIONS } from '@/lib/constants';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Container } from '@/components/ui/Container';
import { ArrowUpRight, Download } from 'lucide-react';

function credentialMark(name: string): string {
  return name
    .split(/[–-]/)[0]
    .trim()
    .split(/\s+/)
    .map((word) => word[0] ?? '')
    .join('')
    .slice(0, 3)
    .toUpperCase();
}

export function Certifications() {
  return (
    <section id="certifications" className="py-12">
      <Container>
        <SectionHeading
          eyebrow="Credentials"
          title="Certifications"
          description="Verified credentials, kept as a record rather than a gallery."
        />

        <ul className="divide-y divide-border border-y border-border">
          {CERTIFICATIONS.map((certification) => (
            <li
              key={certification.id}
              className="grid gap-5 py-6 md:grid-cols-[auto_1fr_auto] md:items-center md:gap-8"
            >
              <div
                className="flex h-16 w-16 shrink-0 items-center justify-center bg-accent font-display text-2xl font-bold text-white"
                aria-hidden
              >
                {credentialMark(certification.name)}
              </div>

              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-accent">
                  {certification.issuer}
                </p>
                <h3 className="mt-1 font-display text-2xl font-bold leading-tight text-foreground">
                  {certification.name}
                </h3>
                <p className="mt-1 text-sm text-muted">{certification.date}</p>
              </div>

              <div className="flex flex-wrap gap-2 md:justify-end">
                <a
                  href={certification.imageUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 border border-border bg-paper px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-foreground transition hover:border-accent hover:text-accent"
                >
                  View
                  <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
                </a>
                <a
                  href={certification.imageUrl}
                  download
                  className="inline-flex items-center gap-2 bg-accent px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-white transition hover:bg-accent-deep"
                >
                  <Download className="h-3.5 w-3.5" aria-hidden />
                  Download
                </a>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
