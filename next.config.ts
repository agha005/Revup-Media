import type { NextConfig } from 'next';

const legacyRoutes: Record<string, string> = {
  'index.html': '/', 'about.html': '/about', 'case-studies.html': '/case-studies',
  'case-study-aussies-merch.html': '/case-studies/aussies-merch',
  'case-study-hardbody.html': '/case-studies/hardbody',
  'case-study-popuptee.html': '/case-studies/popuptee',
  'case-study-oz-smart.html': '/case-studies/oz-smart',
  'case-study-twinky.html': '/case-studies/twinky',
  'case-study-us-boot.html': '/case-studies/us-boot',
  'case-study-vape-at-door.html': '/case-studies/vape-at-door',
};

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: '/case-studies/moments-with-him', destination: '/case-studies', permanent: true },
      { source: '/case-study-moments-with-him.html', destination: '/case-studies', permanent: true },
      { source: '/legacy/case-study-moments-with-him.html', destination: '/case-studies', permanent: true },
      ...Object.entries(legacyRoutes).flatMap(([file, destination]) => [
      { source: `/legacy/${file}`, destination, permanent: true },
      { source: `/${file}`, destination, permanent: true },
    ])];
  },
};

export default nextConfig;
