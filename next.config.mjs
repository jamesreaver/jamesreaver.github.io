import nextMDX from '@next/mdx'
import remarkGfm from 'remark-gfm'
import rehypePrism from '@mapbox/rehype-prism'

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'mdx'],
  reactStrictMode: true,
  images: {
    unoptimized: true
  },
  experimental: {
    scrollRestoration: true,
  },
  async redirects() {
    return [
      {
        source: '/romolo-tucano',
        destination: '/books/romolo-tucano',
        permanent: true,
      },
      {
        source: '/russel-toucan',
        destination: '/books/russel-toucan',
        permanent: true,
      },
      {
        source: '/hero-of-mistpeak',
        destination: '/books/hero-of-mistpeak',
        permanent: true,
      },
    ];
  },
}

const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypePrism],
  },
})

export default withMDX(nextConfig)
