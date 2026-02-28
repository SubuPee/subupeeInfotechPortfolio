/** @type {import('next').NextConfig} */
const repoName = "subupeeInfotechPortfolio";

const nextConfig = {
  output: "export",

  basePath: `/${repoName}`,
  assetPrefix: `/${repoName}/`,

  trailingSlash: true,

  images: {
    unoptimized: true,
  },

  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
