/**
 * @format
 */
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  basePath: '/projects',
  output: 'export',
  images: { unoptimized: true },
};

module.exports = nextConfig;
