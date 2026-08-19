import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { Geist, Geist_Mono } from 'next/font/google';
import { Footer } from '@/components/layout/Footer';
import { Header } from '@/components/layout/Header';
import { ThemeProvider } from '@/providers/ThemeProvider';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const zuume = localFont({
  src: [
    {
      path: './fonts/zuume_fonts/Zuume-Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/zuume_fonts/Zuume-SemiBold.otf',
      weight: '600',
      style: 'normal',
    },
    {
      path: './fonts/zuume_fonts/Zuume-Bold.otf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-zuume',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Nicole Candelaria | Portfolio',
  description:
    'A Computer Science graduate at University of Makati with hands-on experience in full-stack development and database management.',
  keywords: [
    'Nicole Candelaria',
    'Computer Science',
    'Portfolio',
    'Full-Stack Developer',
    'University of Makati',
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="h-full">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${zuume.variable} min-h-full antialiased`}
      >
        <ThemeProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
