/**
 * @format
 */
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  basePath: '/projects', // Change to '/projects' when deploying
  output: 'export',
  images: { unoptimized: true },
  env: {
    basePath: '/projects',
  },
};

module.exports = nextConfig;
