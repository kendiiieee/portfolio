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
    <div
      className={`relative mx-auto aspect-square h-[60vh] max-h-[650px] min-h-[350px] overflow-hidden rounded-[2.5rem] border border-border bg-surface shadow-2xl shadow-accent/10 lg:mx-0 ${className}`}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-transparent to-sky-400/10" />

      {showImage ? (
        <Image
          src={src!}
          alt={`Portrait of ${name}`}
          fill
          priority
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 60vw"
          onError={() => setHasError(true)}
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-surface to-background">
          <span className="font-display text-8xl font-bold text-accent/80 md:text-9xl tracking-tight">
            {getInitials(name)}
          </span>
        </div>
      )}
    </div>
  );
}