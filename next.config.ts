import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';
const repoName = 'french-internals';

const nextConfig: NextConfig = {
  output: 'export', 
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath: isProd ? `/${repoName}` : '',
  assetPrefix: isProd ? './' : '',
};

export default nextConfig;
