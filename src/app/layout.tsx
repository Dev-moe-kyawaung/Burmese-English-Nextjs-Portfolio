import type { Metadata } from 'next';
import './globals.css';
import '@/i18n/config';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'Android Senior Developer Portfolio',
    template: '%s | Android Senior Developer Portfolio',
  },
  description:
    'Professional portfolio website for an Android Senior Developer with Kotlin, Jetpack Compose, MVVM, Clean Architecture, Flutter, and Burmese language support.',
  metadataBase: new URL('https://your-domain.com'),
  keywords: [
    'Android Developer',
    'Senior Android Developer',
    'Kotlin',
    'Jetpack Compose',
    'Flutter',
    'Portfolio',
    'Burmese',
  ],
  authors: [{ name: 'Your Name' }],
  creator: 'Your Name',
  openGraph: {
    title: 'Android Senior Developer Portfolio',
    description:
      'Professional portfolio website for an Android Senior Developer.',
    url: 'https://your-domain.com',
    siteName: 'Android Senior Developer Portfolio',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Android Senior Developer Portfolio',
    description:
      'Professional portfolio website for an Android Senior Developer.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-dark text-light antialiased">
        {children}
      </body>
    </html>
  );
}
