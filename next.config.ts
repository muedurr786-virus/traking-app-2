import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
  // The sandbox preview panel loads the app from *.space-z.ai origins while the
  // dev server runs on localhost — allow these origins for dev assets.
  allowedDevOrigins: ["*.space-z.ai", "preview-chat-970dfde4-3980-4837-bd2a-2b6bfe4488c9.space-z.ai"],
  // These packages read metadata files (bson/json) from their own directory at
  // runtime via fs, so they must stay external to the server bundle.
  serverExternalPackages: ["libphonenumber-geo-carrier", "country-codes-list"],
};

export default nextConfig;
