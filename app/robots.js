export default function robots() {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://portal-bio-neon.vercel.app/sitemap.xml",
    host: "https://portal-bio-neon.vercel.app",
  };
}
