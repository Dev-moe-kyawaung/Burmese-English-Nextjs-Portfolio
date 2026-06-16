/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ['en', 'my'],
    defaultLocale: 'en',
    localeDetection: true,
  },
  reactStrictMode: true,
  images: {
    domains: ['github.com', 'vercel.app'],
  },
};

module.exports = nextConfig;
