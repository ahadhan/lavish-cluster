/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["res.cloudinary.com"], // Allow images from Cloudinary
  },
  webpack: (config) => {
    // Add any necessary custom configurations here if needed
    return config;
  },
};

module.exports = nextConfig;
