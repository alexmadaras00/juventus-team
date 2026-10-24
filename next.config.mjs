/** @type {import('next').NextConfig} */
// BASE_PATH is set by the GitHub Actions workflow ("" for <user>.github.io repos, "/<repo>" otherwise).
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''

const nextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath,
  assetPrefix: basePath || undefined,
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
