import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Allow accessing the dev server (and its /_next resources) from the LAN IP.
  allowedDevOrigins: ["192.168.1.10"],
};

export default nextConfig;
