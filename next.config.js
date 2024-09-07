const { withContentlayer } = require("next-contentlayer")

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],

  images: {
    domains: ["res.cloudinary.com", "images.unsplash.com"],
  },

  swcMinify: true,
}

module.exports = withContentlayer(nextConfig)
