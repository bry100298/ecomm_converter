// next.config.js

const path = require("path");

module.exports = {
  async rewrites() {
    return [
      {
        source: "/ecconvtrv1/:path*", // Match any path after /ecconvtrv1/
        destination: "/:path*", // Forward the request to the root with the same path
      },
    ];
  },
  // distDir: "build", // Set the build output directory to 'build'
  distDir: ".next", // Set the build output directory to '.next'
  // Set the basePath to '/ecconvtrv1' to serve the Next.js app from this path
  basePath: "/ecconvtrv1",
  // Set the assetPrefix to '/ecconvtrv1/' to prefix all asset URLs with this path
  // assetPrefix: "/ecconvtrv1/build/",
  assetPrefix: "/ecconvtrv1/",
  env: {
    baseUrl: process.env.BASE_URL || "https://portal.benby.com/ecconvtrv1",
  },
  images: {
    domains: ["portal.benby.com", "portal.benby.com/ecconvtrv1"],
  },
};
