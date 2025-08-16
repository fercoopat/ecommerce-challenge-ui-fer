import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.gosupps.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "www.pharmacys.com.ec",
        port: "",
        pathname:
          "/wcsstore/DF_CatalogAsset/images/catalog/producto/fullimage/**",
      },
      {
        protocol: "https",
        hostname: "m.media-amazon.com",
        port: "",
        pathname: "/**",
      },
    ],
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
