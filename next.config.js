/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['lh3.googleusercontent.com', 'res.cloudinary.com', 'www.pointwall.com.ar']
  }
}

module.exports = nextConfig
