import Link from 'next/link';

export const metadata = { title: 'Halaman tidak ditemukan', robots: { index: false } };

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-kertas px-6 text-center text-ink">
      <p className="rounded-full border-2 border-ink bg-kuningx px-4 py-1 text-xs font-bold uppercase tracking-widest">@404</p>
      <h1 className="mt-6 font-display text-4xl font-extrabold sm:text-5xl">Tautan ini belum ada di bio mana pun</h1>
      <p className="mt-4 max-w-md text-mutedx">Mungkin alamatnya salah ketik. Dua belas template link-in-bio menunggu di halaman utama.</p>
      <Link href="/" className="mt-8 border-2 border-ink bg-ungu px-6 py-3 font-bold text-white shadow-[4px_4px_0_var(--color-ink)] transition hover:-translate-y-0.5">Lihat koleksi</Link>
    </main>
  );
}
