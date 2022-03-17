/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["localhost:3000", "m.media-amazon.com", "ia.media-imdb.com"]
  }
}

module.exports = nextConfig
