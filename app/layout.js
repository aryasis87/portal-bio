import './globals.css';
import { Unbounded, Inter } from 'next/font/google';

const unbounded = Unbounded({ subsets: ['latin'], variable: '--font-unbounded', weight: ['400', '600', '800'] });
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

const __jsonld = {"@context":"https://schema.org","@type":"CollectionPage","name":"PortalBio","description":"Koleksi 12 template link in bio","url":"https://www.pintuweb.com/link-in-bio","isPartOf":{"@type":"WebSite","name":"PintuWeb","url":"https://www.pintuweb.com"},"breadcrumb":{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"PintuWeb","item":"https://www.pintuweb.com"},{"@type":"ListItem","position":2,"name":"Link in Bio","item":"https://www.pintuweb.com/link-in-bio"}]}};

export const metadata = {
  metadataBase: new URL("https://www.pintuweb.com/link-in-bio"),
  title: "PortalBio — Koleksi Template Link in Bio",
  description: "PortalBio: 12 template link in bio dengan karakter unik — untuk kreator, musisi, bisnis, hingga developer.",
  applicationName: "PortalBio",
  keywords: ["template link in bio", "link in bio", "koleksi template", "linktree alternatif"],
  authors: [{ name: "PortalBio" }],
  creator: "PortalBio",
  publisher: "PortalBio",
  alternates: { canonical: "https://www.pintuweb.com/link-in-bio" },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://www.pintuweb.com/link-in-bio",
    siteName: "PortalBio",
    title: "PortalBio — Koleksi Template Link in Bio",
    description: "PortalBio: 12 template link in bio dengan karakter unik — untuk kreator, musisi, bisnis, hingga developer.",
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "PortalBio — Koleksi Template Link in Bio" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "PortalBio — Koleksi Template Link in Bio",
    description: "PortalBio: 12 template link in bio dengan karakter unik — untuk kreator, musisi, bisnis, hingga developer.",
    images: ["/og.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" className={`${unbounded.variable} ${inter.variable}`}>
      <body className="antialiased">
        <main>{children}</main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(__jsonld) }} />
        </body>
    </html>
  );
}
