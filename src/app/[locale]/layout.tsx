import type { ReactNode } from 'react';
import { notFound } from 'next/navigation';

const locales = ['en', 'my'] as const;

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: { locale: string };
}) {
  if (!locales.includes(params.locale as (typeof locales)[number])) {
    notFound();
  }

  return <>{children}</>;
}
