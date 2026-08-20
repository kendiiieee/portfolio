import { SITE } from '@/lib/constants';
import { Globe, Sparkle } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export function Hero() {
  return (
    <section
      id="about"
      className="relative isolate overflow-hidden bg-[#0c0b0b] text-[#f4ece6]"
    >
      <div className="relative z-30 mx-auto flex max-w-[1320px] items-start justify-end px-6 pt-5 sm:px-10" />

      <div className="relative mx-auto max-w-[1320px] px-6 pb-12 pt-2 sm:px-10">
        <div
          className="pointer-events-none relative z-0 -mb-8 select-none text-center font-editorial uppercase leading-[0.72] tracking-[-0.045em] sm:-mb-12"
          aria-hidden
        >
          <span className="block translate-x-[-3vw] text-[18vw] text-[#efe6dc] sm:text-[13vw] lg:text-[9.5rem]">
            Nicole
          </span>
          <span className="block translate-x-[3vw] text-[14vw] text-transparent [-webkit-text-stroke:1px_var(--accent)] sm:text-[10vw] lg:text-[7.5rem]">
            Candelaria
          </span>
        </div>

        <div className="relative z-10 -mt-10 grid items-end gap-8 lg:-mt-28 lg:grid-cols-[1fr_minmax(280px,400px)_1fr] lg:gap-6">
          <div className="order-2 max-w-md lg:order-1 lg:pb-6">
            <h1 className="text-[1.55rem] font-semibold uppercase leading-[1.18] tracking-[0.04em] text-white sm:text-[1.75rem]">
              I build web and mobile systems that stay reliable
            </h1>
            <Link
              href="#projects"
              className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/70 px-5 py-2.5 text-[11px] font-medium uppercase tracking-[0.16em] text-white transition hover:border-accent hover:text-accent"
            >
              Available for work
              <Sparkle className="h-3.5 w-3.5 fill-current" />
            </Link>
            <p className="mt-8 font-display text-2xl font-semibold uppercase tracking-[0.08em] text-accent sm:text-3xl">
              {SITE.name}
            </p>
          </div>

          <div className="order-1 mx-auto w-full max-w-[400px] lg:order-2">
            <div className="relative mx-auto aspect-[3/4] w-full overflow-hidden">
              <Image
                src={SITE.profileImage}
                alt={`Portrait of ${SITE.name}`}
                fill
                priority
                quality={95}
                className="object-cover object-[center_12%]"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 800px"
              />
              <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#0c0b0b] to-transparent" />
            </div>
          </div>

          <div className="order-3 max-w-sm lg:justify-self-end lg:pb-6">
            <p className="text-sm leading-relaxed text-white/70">
              {SITE.tagline} Focused on APIs, databases, and product systems
              across web and mobile.
            </p>
            <p className="mt-8 flex items-center gap-2 text-[10px] font-medium uppercase tracking-[0.18em] text-white/80 lg:justify-end">
              <Globe className="h-3.5 w-3.5 text-accent" />
              Based in Makati / Open worldwide
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}