import type { MetadataRoute } from "next";

// Tells search engines the whole site may be indexed.
export default function robots(): MetadataRoute.Robots {
  return { rules: { userAgent: "*", allow: "/" } };
}
