import type { NextConfig } from 'next';

const legacyRoutes: Record<string, string> = {
  'index.html': '/', 'about.html': '/about', 'case-studies.html': '/case-studies',
  'case-study-aussies-merch.html': '/case-studies/aussies-merch',
  'case-study-hardbody.html': '/case-studies/hardbody',
  'case-study-linen-tales.html': '/case-studies/linen-tales',
  'case-study-popuptee.html': '/case-studies/popuptee',
  'case-study-moments-with-him.html': '/case-studies/moments-with-him',
  'case-study-twinky.html': '/case-studies/twinky',
  'case-study-us-boot.html': '/case-studies/us-boot',
  'case-study-vape-at-door.html': '/case-studies/vape-at-door',
};

const nextConfig: NextConfig = {
  async redirects() {
    return Object.entries(legacyRoutes).flatMap(([file, destination]) => [
      { source: `/legacy/${file}`, destination, permanent: true },
      { source: `/${file}`, destination, permanent: true },
    ]);
  },
};

export default nextConfig;
