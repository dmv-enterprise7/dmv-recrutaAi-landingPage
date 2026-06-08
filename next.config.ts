import type { NextConfig } from 'next'

/**
 * GitHub Pages project site: assets must live under /{repo}/.
 * When recruta.ai DNS is pointed at GitHub, remove basePath + restore public/CNAME.
 */
const repo = 'recrutaAI'
const basePath = `/${repo}`

const nextConfig: NextConfig = {
  output: 'export',
  basePath,
  assetPrefix: basePath,
  trailingSlash: true,
  images: { unoptimized: true },
}

export default nextConfig
