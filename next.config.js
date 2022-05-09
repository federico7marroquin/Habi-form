/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    // ssr and displayName are configured by default
    styledComponents: true,

  },
  i18n: {
    locales: ['es'],
    defaultLocale: 'es',
  },
}

module.exports = nextConfig
