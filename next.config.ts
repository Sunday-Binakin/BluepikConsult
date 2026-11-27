import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // nodemailer must run in Node.js, not be bundled for the edge.
  serverExternalPackages: ["nodemailer"],
};

export default nextConfig;
