'use client';

import Image from 'next/image';
import { useState } from 'react';

interface ProfileAvatarProps {
  src?: string;
  name: string;
  className?: string;
}

function getInitials(name: string): string {
  return name
    .split(' ')
    .filter(Boolean)
    .map((part) => part[0]?.toUpperCase())
    .join('')
    .slice(0, 2);
}

export function ProfileAvatar({ src, name, className = '' }: ProfileAvatarProps) {
  const [hasError, setHasError] = useState(false);
  const showImage = Boolean(src) && !hasError;

  return (
    <div className={`relative mx-auto w-full max-w-[440px] lg:mx-0 ${className}`}>
      <div
        className="absolute -bottom-4 -left-4 hidden h-[55%] w-[70%] bg-accent sm:block"
        aria-hidden
      />
      <div className="relative aspect-[4/5] overflow-hidden border-[6px] border-accent bg-surface">
        {showImage ? (
          <Image
            src={src!}
            alt={`Portrait of ${name}`}
            fill
            priority
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 440px"
            onError={() => setHasError(true)}
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-paper">
            <span className="font-display text-8xl font-bold tracking-tight text-accent">
              {getInitials(name)}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
