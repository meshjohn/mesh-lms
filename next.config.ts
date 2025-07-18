import type { NextConfig } from "next";
//@ts-ignore
const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "mesh-lms.fly.storage.tigris.dev",
        port: "",
        protocol: "https",
      },
    ],
  },

};

export default nextConfig;
