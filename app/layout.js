import './globals.css';
import { Unbounded, Inter } from 'next/font/google';

const unbounded = Unbounded({ subsets: ['latin'], variable: '--font-unbounded', weight: ['400', '600', '800'] });
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata = {
  title: 'PortalBio — Koleksi Template Link in Bio',
  description: 'PortalBio: 12 template link in bio dengan karakter unik — untuk kreator, musisi, bisnis, hingga developer.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className={`${unbounded.variable} ${inter.variable} antialiased`}>
        <main>{children}</main>
      </body>
    </html>
  );
}
