import { NextRequest, NextResponse } from 'next/server';

const locales = ['en', 'my'] as const;
const defaultLocale = 'en';

type Locale = (typeof locales)[number];

function detectLocale(request: NextRequest): Locale {
  const header = request.headers.get('accept-language') || '';
  const preferred = header
    .split(',')
    .map((part) => part.split(';')[0].trim().slice(0, 2))
    .find((lang) => locales.includes(lang as Locale)) as Locale | undefined;

  return preferred || defaultLocale;
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const hasLocale = locales.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`)
  );

  if (hasLocale) {
    return NextResponse.next();
  }

  const locale = detectLocale(request);
  const url = request.nextUrl.clone();
  url.pathname = `/${locale}${pathname === '/' ? '' : pathname}`;

  return NextResponse.redirect(url);
}

export const config = {
  matcher: ['/((?!api|_next|.*\\..*|favicon.ico|robots.txt|sitemap.xml).*)'],
};
