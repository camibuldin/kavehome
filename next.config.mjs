/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'c.media.kavehome.com' },
      { protocol: 'https', hostname: 'd.media.kavehome.com' }
    ],
  },
};

export default nextConfig;
