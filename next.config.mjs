/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        dangerouslyAllowSVG: true,
        remotePatterns: [
            {
            protocol: 'https',
            hostname: 'img.shields.io',
            port: '',
            pathname: '/badge/**',
            },
        ],
    },
  };
  
  export default nextConfig;
