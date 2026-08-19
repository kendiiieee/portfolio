'use client';

import { useTheme } from 'next-themes';
import { Moon, Sun } from 'lucide-react';
import { useSyncExternalStore } from 'react';

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const mounted = useSyncExternalStore(
    () => () => undefined,
    () => true,
    () => false,
  );

  if (!mounted) {
    return (
      <div
        className="h-10 w-10 rounded-full border border-border bg-surface"
        aria-hidden
      />
    );
  }

  const isDark = (resolvedTheme ?? theme) === 'dark';

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className="group inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface text-foreground transition hover:border-accent hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {isDark ? (
        <Sun className="h-4 w-4 transition group-hover:rotate-12" />
      ) : (
        <Moon className="h-4 w-4 transition group-hover:-rotate-12" />
      )}
    </button>
  );
}
