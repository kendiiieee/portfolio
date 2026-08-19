import { CERTIFICATIONS } from '@/lib/constants';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Download, ExternalLink, Award } from 'lucide-react';

export function Certifications() {
  return (
    <section id="certifications" className="px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Credentials"
          title="Certifications"
          description="Professional credentials that support my technical foundation."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {CERTIFICATIONS.map((certification) => (
            <article
              key={certification.id}
              className="overflow-hidden rounded-2xl border border-border bg-surface/50"
            >
              <a
                href={certification.imageUrl}
                target="_blank"
                rel="noreferrer"
                className="block bg-background p-4 transition hover:bg-surface"
                aria-label={`View ${certification.name} certificate`}
              >
                <object
                  data={certification.imageUrl}
                  type="application/pdf"
                  aria-label={`${certification.name} certificate`}
                  className="h-72 w-full"
                >
                  <span className="flex h-full items-center justify-center text-sm text-muted">
                    Open the certificate to view the PDF.
                  </span>
                </object>
              </a>

              <div className="border-t border-border p-6">
                <div className="flex items-start gap-3">
                  <Award className="mt-1 h-5 w-5 shrink-0 text-accent" aria-hidden />
                  <div>
                    <h3 className="font-display text-xl font-bold text-foreground">
                      {certification.name}
                    </h3>
                    <p className="mt-2 text-sm text-muted">
                      {certification.issuer} · {certification.date}
                    </p>
                  </div>
                </div>

                <div className="mt-5 flex flex-wrap gap-3">
                  <a
                    href={certification.imageUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-semibold text-foreground transition hover:border-accent hover:text-accent"
                  >
                    <ExternalLink className="h-4 w-4" aria-hidden />
                    View certificate
                  </a>
                  <a
                    href={certification.imageUrl}
                    download
                    className="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-2 text-sm font-semibold text-white transition hover:bg-accent/90"
                  >
                    <Download className="h-4 w-4" aria-hidden />
                    Download
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
