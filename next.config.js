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
  webpack(config, { isServer }) {
    // Resolve images from public directory
    config.module.rules.push({
      test: /\.(png|jpe?g|gif|svg)$/i,
      include: [path.resolve(__dirname, "public")],
      use: [
        {
          loader: "file-loader",
          options: {
            publicPath: "/_next/",
            outputPath: "static/images/",
          },
        },
      ],
    });

    // Resolve images from src/app directory
    config.module.rules.push({
      test: /\.(png|jpe?g|gif|svg)$/i,
      include: [path.resolve(__dirname, "src/app")],
      use: [
        {
          loader: "file-loader",
          options: {
            publicPath: "/_next/",
            outputPath: "static/images/",
          },
        },
      ],
    });

    return config;
  },
};
