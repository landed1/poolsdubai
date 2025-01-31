/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  basePath: isProd ? "" : "",
  output: "export",
  images: { unoptimized: true },
  async redirects() {
    return [
      // Basic redirect
      {
        source: "/pool-chemicals-supply-dubai/",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
