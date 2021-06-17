const withPlugins = require("next-compose-plugins");
const withOptimizedImages = require("next-optimized-images");

// next.js configuration
// next.js configuration
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/admin/rekisa/products/",
        permanent: true,
      },
    ];
  },
};

module.exports = withPlugins([withOptimizedImages], nextConfig);
