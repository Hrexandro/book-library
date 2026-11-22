import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
  remotePatterns: [
    {
      protocol: "https",
      hostname: "mmtquvoyyuceurgioueq.supabase.co",
      pathname: "/storage/v1/object/public/book-covers/**",
    },
  ],
},
};

export default nextConfig;
