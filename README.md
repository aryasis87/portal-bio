# PortalBio — Koleksi Template Link in Bio

PortalBio: 12 template link in bio dengan karakter unik — untuk kreator, musisi, bisnis, hingga developer.

**Demo live:** https://portal-bio-neon.vercel.app

![Tangkapan layar PortalBio](public/og.jpg)

> Katalog demo milik PintuWeb. Setiap kartu menautkan ke demo live yang bisa dicoba.

## Konsep

Katalog template link-in-bio. Neo-pop dengan font Unbounded, kartu berbingkai ponsel, dan marquee @handle.

## Varian yang dipamerkan (12)

- [Arsip](https://linkinbio-arsip.vercel.app) — Kreator. Surat bergaris untuk penulis — buku dengan satu puisi utuh, surat Jumat, dan kelas menulis. Halaman: `/`, `/buku`, `/surat`.
- [Atlas](https://linkinbio-atlas.vercel.app) — Bisnis. Kartu nama split-screen bergaya Swiss — indeks karya, layanan berharga tetap, dan pemilih slot pertemuan. Halaman: `/`, `/karya`, `/layanan`.
- [Cipher](https://linkinbio-cipher.vercel.app) — Teknologi. Terminal CRT untuk peneliti keamanan — writeup CTF, kebijakan pengungkapan, dan talks. Halaman: `/`, `/writeups`, `/talks`.
- [Disko](https://linkinbio-disko.vercel.app) — Musik. Poster Memphis untuk band — tur enam kota dengan pemilih tiket dan merch berstok per ukuran. Halaman: `/`, `/jadwal`, `/merch`.
- [Jajan](https://linkinbio-jajan.vercel.app) — Bisnis. Papan menu warung — buka/tutup menurut jam WIB, menu lengkap, dan PO acara dengan minimal H-2. Halaman: `/`, `/menu`, `/pesan`.
- [Kaset](https://linkinbio-kaset.vercel.app) — Musik. Mixtape analog untuk radio komunitas — siaran berikutnya dihitung otomatis dan arsip bertracklist. Halaman: `/`, `/siaran`, `/mixtape`.
- [Mellow](https://linkinbio-mellow.vercel.app) — Kreator. Papan stiker pastel untuk ilustrator — toko sticker berkeranjang dan komisi dengan estimasi harga langsung. Halaman: `/`, `/toko`, `/komisi`.
- [Nova](https://linkinbio-nova.vercel.app) — Kreator. Aurora gelap untuk creative technologist — studi kasus bernomor dan halaman kolaborasi bertarif. Halaman: `/`, `/karya`, `/kolaborasi`.
- [Pulse](https://linkinbio-pulse.vercel.app) — Kreator. Tautan tipografi neon untuk motion designer — lembar cue showreel yang bisa digeser dan rate card. Halaman: `/`, `/showreel`, `/hire`.
- [Vendra](https://linkinbio-vendra.vercel.app) — Bisnis. Etalase kedai kopi — status buka menurut jam WIB, menu lengkap, dan pre-order dengan jam ambil. Halaman: `/`, `/menu`, `/pesan`.
- [Vinyl](https://linkinbio-vinyl.vercel.app) — Musik. Piringan berputar untuk musisi — album dengan penggalan lirik, tur akustik, dan pengingat tiket. Halaman: `/`, `/album`, `/tur`.
- [Zen](https://linkinbio-zen.vercel.app) — Lifestyle. Ruang teduh serif untuk coach mindfulness — kelas, retret, dan pemandu napas interaktif. Halaman: `/`, `/kelas`, `/napas`.

## Halaman

`/`

## Teknologi

- Next.js 15.5 (App Router) dan React 19
- Tailwind CSS v4
- JavaScript
- Framer Motion, Lucide (ikon)
- Font: Unbounded, Inter (next/font)
- Pratinjau 4:5 tiap varian ditangkap dari demo live di lebar ponsel (1 Okt 2026), `public/images/bio/`
- SEO: metadata per halaman, Open Graph, JSON-LD, sitemap.xml, dan robots.txt

## Menjalankan secara lokal

```bash
npm install
npm run dev
```

Buka http://localhost:3000. Untuk build produksi: `npm run build` lalu `npm start`.

---

Dibuat oleh [PintuWeb](https://pintuweb.com), jasa pembuatan website.
