/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/performance-marketing-agency-in-:country",
        destination: "/performance-marketing-agency/:country",
      },
    ];
  },

  async redirects() {
    return [
      {
        source: "/performance-marketing-agency/:country",
        destination: "/performance-marketing-agency-in-:country",
        permanent: true,
      },
      {
      source: "/showcase",
      destination: "/marketing",
      permanent: true,
    },
    ];
  },
};

export default nextConfig;