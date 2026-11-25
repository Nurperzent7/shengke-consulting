import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.shengkeconsulting.kz" }],
        destination: "https://shengkeconsulting.kz/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
