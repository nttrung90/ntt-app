import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Xuất web tĩnh hoàn toàn: deploy Vercel chỉ cần connect repo, không cần server
  output: "export",
};

export default nextConfig;
