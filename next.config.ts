import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    domains: ['placehold.co'],
  },

  // ✅ Add this to enable middleware on specific routes
  matcher: ['/login', '/dashboard/:path*'],

  /* other config options can go here */
};

export default nextConfig;
