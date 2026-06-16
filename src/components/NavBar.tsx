'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useMemo } from 'react';
import i18n from '@/i18n/config';
import { useScrollSpy } from '@/hooks/useScrollSpy';

type Locale = 'en' | 'my';
const supportedLocales: Locale[] = ['en', 'my'];

function getLocaleFromPath(pathname: string): Locale {
  const firstSegment = pathname.split('/')[1];
  return supportedLocales.includes(firstSegment as Locale)
    ? (firstSegment as Locale)
    : 'en';
}

function stripLocale(pathname: string) {
  const segments = pathname.split('/');
  const maybeLocale = segments[1];
  if (supportedLocales.includes(maybeLocale as Locale)) {
    return '/' + segments.slice(2).join('/');
  }
  return pathname;
}

export default function NavBar() {
  const pathname = usePathname();
  const locale = getLocaleFromPath(pathname);
  const basePath = stripLocale(pathname);

  const activeSection = useScrollSpy([
    'home',
    'about',
    'projects',
    'certificates',
    'mails',
    'lovable',
    'github',
    'organizations',
    'apps',
  ]);

  const navItems = useMemo(
    () => [
      { key: 'home', labelKey: 'nav.home', href: `/${locale}`, sectionId: 'home' },
      { key: 'about', labelKey: 'nav.about', href: `/${locale}#about`, sectionId: 'about' },
      { key: 'projects', labelKey: 'nav.projects', href: `/${locale}#projects`, sectionId: 'projects' },
      { key: 'certificates', labelKey: 'nav.certificates', href: `/${locale}#certificates`, sectionId: 'certificates' },
      { key: 'mails', labelKey: 'nav.mails', href: `/${locale}#mails`, sectionId: 'mails' },
      { key: 'lovable', labelKey: 'nav.lovable', href: `/${locale}#lovable`, sectionId: 'lovable' },
      { key: 'github', labelKey: 'nav.github', href: `/${locale}#github`, sectionId: 'github' },
      { key: 'organizations', labelKey: 'nav.organizations', href: `/${locale}#organizations`, sectionId: 'organizations' },
      { key: 'apps', labelKey: 'nav.apps', href: `/${locale}#apps`, sectionId: 'apps' },
    ],
    [locale]
  );

  const switchLocale = locale === 'en' ? 'my' : 'en';
  const switchHref = `/${switchLocale}${basePath === '/' ? '' : basePath}`;

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-primary/20 bg-dark/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        <Link href={`/${locale}`} className="text-xl font-bold text-primary">
          Your Name
        </Link>

        <div className="flex items-center gap-3 overflow-x-auto">
          {navItems.map((item) => {
            const isActive = activeSection === item.sectionId;

            return (
              <Link
                key={item.key}
                href={item.href}
                className={[
                  'rounded-full px-3 py-1 text-sm transition-all duration-200',
                  isActive
                    ? 'bg-primary text-white shadow-lg shadow-primary/20'
                    : 'text-light/80 hover:bg-white/5 hover:text-primary',
                ].join(' ')}
              >
                {i18n.t(item.labelKey)}
              </Link>
            );
          })}

          <Link
            href={switchHref}
            className="rounded-full bg-primary/20 px-3 py-1 text-sm font-semibold text-primary transition-colors hover:bg-primary/30"
          >
            {locale === 'en' ? 'မြ' : 'En'}
          </Link>
        </div>
      </div>
    </nav>
  );
}
