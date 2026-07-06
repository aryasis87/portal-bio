'use client';
import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { AtSign, ArrowDown, ArrowUpRight, MessageCircle, MousePointerClick, Rocket, Link2, Palette, Smartphone, BarChart3, ChevronDown } from 'lucide-react';
import { templates } from './components/templates-data';

const WA = 'https://wa.me/6281339908765?text=Halo%2C%20saya%20tertarik%20template%20link%20in%20bio%20di%20PortalBio';

const KENAPA = [
  { icon: Link2, title: 'Satu link untuk semua', desc: 'IG, TikTok, YouTube, toko, portofolio — muat semuanya tanpa ganti-ganti bio.' },
  { icon: Palette, title: 'Karakter, bukan template polos', desc: 'Terminal hacker, kaset mixtape, kartu pos — bio-mu ikut bercerita.' },
  { icon: Smartphone, title: 'Kencang di ponsel', desc: 'Dibangun ringan; kebuka dalam sekejap bahkan di sinyal pas-pasan.' },
  { icon: BarChart3, title: 'Milikmu selamanya', desc: 'Bukan sewa platform — file & tautan jadi milikmu penuh, bebas biaya bulanan.' },
];

const TANYA = [
  { q: 'Apa bedanya dengan Linktree gratisan?', a: 'Linktree membuat semua orang tampak sama. Di sini bio-mu punya kepribadian — desain khusus yang mengikuti gayamu, tanpa logo pihak ketiga, tanpa batasan fitur, dan tanpa biaya langganan bulanan.' },
  { q: 'Bisakah warna dan isinya diganti sesuai brand-ku?', a: 'Bisa, semuanya: warna, foto, urutan tautan, ikon sosial, sampai teks sapaan. Template hanyalah titik awal — hasil akhirnya 100% kamu.' },
  { q: 'Berapa lama sampai bisa dipakai?', a: 'Umumnya online dalam satu hari kerja setelah kamu kirim isi tautan dan foto. Link langsung siap ditempel di semua bio sosial mediamu.' },
  { q: 'Apakah bisa menambah tautan sendiri nanti?', a: 'Bisa. Kamu mendapat akses penuh, plus panduan singkat cara menambah atau mengubah tautan. Kalau sibuk, kirim WhatsApp saja — kami bantu ubah gratis.' },
];

const LANGKAH = [
  { icon: MousePointerClick, no: '01', title: 'Pilih karaktermu', desc: 'Jelajahi 12 template — dari terminal hacker sampai papan menu warung.' },
  { icon: MessageCircle, no: '02', title: 'Chat via WhatsApp', desc: 'Kirim nama template + isi link-mu. Kami sesuaikan warna & kontennya.' },
  { icon: Rocket, no: '03', title: 'Online dalam sehari', desc: 'Link siap dibagikan di Instagram, TikTok, dan semua bio-mu.' },
];

export default function PortalBio() {
  const [cat, setCat] = useState('Semua');
  const [buka, setBuka] = useState(0);
  const categories = ['Semua', ...new Set(templates.map((t) => t.category))];
  const list = cat === 'Semua' ? templates : templates.filter((t) => t.category === cat);

  return (
    <div id="top" className="min-h-screen">
      {/* Navbar */}
      <header className="sticky top-0 z-40 border-b-2 border-ink bg-kertas/90 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          <a href="#top" className="flex items-center gap-2 font-display text-lg font-extrabold">
            <span className="grid h-9 w-9 place-items-center rounded-xl border-2 border-ink bg-ungu text-white shadow-[3px_3px_0_var(--color-ink)]"><AtSign size={18} /></span>
            PortalBio
          </a>
          <div className="hidden items-center gap-6 text-sm font-bold text-ink/60 md:flex" role="navigation" aria-label="Navigasi">
            <a href="#templates" className="transition hover:text-ungu">Koleksi</a>
            <a href="#kenapa" className="transition hover:text-ungu">Kenapa</a>
            <a href="#cara" className="transition hover:text-ungu">Cara Pesan</a>
            <a href="#tanya" className="transition hover:text-ungu">FAQ</a>
          </div>
          <a href={WA} target="_blank" rel="noopener noreferrer" className="rounded-full border-2 border-ink bg-kuningx px-5 py-2 text-sm font-bold shadow-[3px_3px_0_var(--color-ink)] transition hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[1px_1px_0_var(--color-ink)]">
            Pesan Template
          </a>
        </nav>
      </header>

      {/* Hero */}
      <section className="dots-bg relative overflow-hidden px-4 pt-16 pb-14 text-center sm:px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="relative mx-auto max-w-4xl">
          <span className="inline-flex items-center gap-2 rounded-full border-2 border-ink bg-white px-4 py-1.5 text-xs font-bold uppercase tracking-wide shadow-[3px_3px_0_var(--color-ink)]">
            ✦ 12 template · 12 kepribadian
          </span>
          <h1 className="mt-7 font-display text-4xl font-extrabold leading-[1.08] sm:text-6xl md:text-7xl">
            Satu link.<br />Seribu <span className="text-ungu">kepribadian</span><span className="text-kuningx">.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg text-mutedx">
            Bio-mu bukan sekadar daftar tautan. Pilih template yang berbicara seperti kamu — lalu bagikan ke dunia.
          </p>
          <a href="#templates" className="mt-9 inline-flex items-center gap-2 rounded-full border-2 border-ink bg-ungu px-8 py-4 font-display text-sm font-semibold text-white shadow-[4px_4px_0_var(--color-ink)] transition hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[1px_1px_0_var(--color-ink)]">
            Lihat Koleksi <ArrowDown size={16} />
          </a>
        </motion.div>
      </section>

      {/* Marquee handle */}
      <div className="overflow-hidden border-y-2 border-ink bg-ungu py-3 text-white">
        <div className="flex w-max animate-marquee-x">
          {[0, 1].map((dup) => (
            <div key={dup} className="flex shrink-0 items-center" aria-hidden={dup === 1}>
              {templates.map((t) => (
                <span key={t.name} className="flex items-center gap-5 px-5 font-display text-lg font-semibold">
                  @{t.name.toLowerCase()} <span className="text-kuningx">✦</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Katalog */}
      <section id="templates" className="scroll-mt-20 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="font-display text-xs font-semibold uppercase tracking-[0.25em] text-ungu">Koleksi</p>
              <h2 className="mt-2 font-display text-3xl font-extrabold md:text-4xl">Pilih kepribadianmu</h2>
            </div>
            {/* Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((c) => (
                <button
                  key={c}
                  onClick={() => setCat(c)}
                  aria-pressed={cat === c}
                  className={`rounded-full border-2 border-ink px-4 py-1.5 text-sm font-bold transition ${cat === c ? 'bg-ink text-kertas shadow-[3px_3px_0_rgba(91,61,245,0.6)]' : 'bg-white hover:bg-kuningx'}`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          {/* Grid ponsel */}
          <motion.div layout className="mt-12 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <AnimatePresence mode="popLayout">
              {list.map((t, i) => (
                <motion.article
                  key={t.name}
                  layout
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0, transition: { delay: (i % 4) * 0.06, duration: 0.45, ease: [0.22, 1, 0.36, 1] } }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="group"
                >
                  <a href={t.url} target="_blank" rel="noopener noreferrer" aria-label={`Lihat demo ${t.name}`} className="block">
                    {/* Bingkai ponsel */}
                    <div className="phone overflow-hidden p-2">
                      <div className="mx-auto mb-1.5 h-1.5 w-16 rounded-full bg-white/25" aria-hidden="true" />
                      <div className="relative aspect-[4/5] overflow-hidden rounded-[1.35rem]">
                        <Image
                          src={t.image}
                          alt={`Preview template ${t.name}`}
                          fill
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                          className="object-cover object-top"
                          priority={i < 4}
                        />
                        <span className="absolute right-3 top-3 rounded-full border-2 border-ink bg-kuningx px-2.5 py-0.5 text-[10px] font-bold">{t.category}</span>
                      </div>
                    </div>
                  </a>
                  {/* Info */}
                  <div className="mt-4 px-1">
                    <div className="flex items-baseline justify-between gap-2">
                      <h3 className="font-display text-xl font-semibold">{t.name}</h3>
                      <span className="font-display text-xs text-ungu">@{t.name.toLowerCase()}</span>
                    </div>
                    <p className="mt-1.5 text-sm leading-relaxed text-mutedx">{t.description}</p>
                    <div className="mt-3 flex flex-wrap items-center gap-1.5">
                      {t.tags.map((tag) => (
                        <span key={tag} className="rounded-full bg-ink/5 px-2.5 py-1 text-[11px] font-semibold text-ink/60">{tag}</span>
                      ))}
                    </div>
                    <a href={t.url} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-ungu underline-offset-4 hover:underline">
                      Lihat demo <ArrowUpRight size={15} />
                    </a>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Kenapa link-in-bio */}
      <section id="kenapa" className="scroll-mt-20 border-t-2 border-ink bg-kertas px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="font-display text-xs font-semibold uppercase tracking-[0.25em] text-ungu">Kenapa perlu</p>
            <h2 className="mt-2 font-display text-3xl font-extrabold md:text-4xl">Bio 150 karakter itu <span className="text-ungu">nggak cukup</span></h2>
            <p className="mx-auto mt-4 max-w-xl text-mutedx">Kamu punya banyak hal untuk ditunjukkan. Link-in-bio adalah etalase mungil yang bekerja 24 jam untukmu.</p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {KENAPA.map((k, i) => (
              <motion.div
                key={k.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ delay: (i % 4) * 0.08, duration: 0.45 }}
                className="rounded-3xl border-2 border-ink bg-white p-6 shadow-[5px_5px_0_var(--color-ink)] transition hover:-translate-y-1 hover:shadow-[7px_7px_0_rgba(91,61,245,0.7)]"
              >
                <span className="grid h-12 w-12 place-items-center rounded-2xl border-2 border-ink bg-ungu text-white"><k.icon size={22} /></span>
                <h3 className="mt-4 font-display text-lg font-semibold">{k.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-mutedx">{k.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Cara pesan */}
      <section id="cara" className="scroll-mt-20 border-t-2 border-ink bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="font-display text-xs font-semibold uppercase tracking-[0.25em] text-ungu">Cara pesan</p>
            <h2 className="mt-2 font-display text-3xl font-extrabold md:text-4xl">Tiga langkah, langsung tampil beda</h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {LANGKAH.map((l, i) => (
              <motion.div
                key={l.no}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="relative rounded-3xl border-2 border-ink bg-kertas p-7 shadow-[5px_5px_0_var(--color-ink)]"
              >
                <span className="absolute right-6 top-5 font-display text-4xl font-extrabold text-ink/10">{l.no}</span>
                <span className="grid h-12 w-12 place-items-center rounded-2xl border-2 border-ink bg-kuningx"><l.icon size={22} /></span>
                <h3 className="mt-4 font-display text-lg font-semibold">{l.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-mutedx">{l.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="tanya" className="scroll-mt-20 border-t-2 border-ink bg-kertas px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <div className="text-center">
            <p className="font-display text-xs font-semibold uppercase tracking-[0.25em] text-ungu">FAQ</p>
            <h2 className="mt-2 font-display text-3xl font-extrabold md:text-4xl">Yang sering <span className="text-ungu">ditanyain</span></h2>
          </div>
          <div className="mt-10 space-y-4">
            {TANYA.map((t, i) => {
              const open = buka === i;
              return (
                <div key={t.q} className={`rounded-2xl border-2 border-ink bg-white transition ${open ? 'shadow-[5px_5px_0_var(--color-ink)]' : 'shadow-[3px_3px_0_var(--color-ink)]'}`}>
                  <button onClick={() => setBuka(open ? -1 : i)} aria-expanded={open} className="flex w-full items-center justify-between gap-4 px-6 py-4 text-left">
                    <span className="font-display text-base font-semibold leading-snug">{t.q}</span>
                    <span className={`grid h-7 w-7 shrink-0 place-items-center rounded-full border-2 border-ink transition ${open ? 'bg-kuningx rotate-180' : 'bg-white'}`}>
                      <ChevronDown size={15} />
                    </span>
                  </button>
                  {open && (
                    <div className="border-t-2 border-ink/10 px-6 py-4">
                      <p className="text-sm leading-relaxed text-mutedx">{t.a}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t-2 border-ink bg-ink px-4 py-20 text-center text-kertas sm:px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.55 }} className="mx-auto max-w-2xl">
          <span className="mx-auto grid h-16 w-16 place-items-center rounded-2xl border-2 border-kertas/30 bg-ungu text-white"><AtSign size={30} /></span>
          <h2 className="mt-6 font-display text-3xl font-extrabold leading-tight md:text-5xl">
            Bio-mu berhak <span className="text-kuningx">tampil beda</span>.
          </h2>
          <p className="mx-auto mt-4 max-w-md text-kertas/65">Konsultasi gratis — ceritakan gayamu, kami rekomendasikan templatenya.</p>
          <a href={WA} target="_blank" rel="noopener noreferrer" className="mt-9 inline-flex items-center gap-2 rounded-full bg-kuningx px-9 py-4 font-display text-sm font-semibold text-ink transition hover:scale-[1.03] active:scale-95">
            <MessageCircle size={17} /> Chat WhatsApp
          </a>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="border-t border-kertas/10 bg-ink px-4 pb-6 pt-10 text-kertas/60">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 text-center sm:grid-cols-3 sm:text-left">
          <div>
            <p className="flex items-center justify-center gap-2 font-display text-lg font-extrabold text-kertas sm:justify-start">
              <span className="grid h-8 w-8 place-items-center rounded-lg border-2 border-kertas/30 bg-ungu text-white"><AtSign size={15} /></span>
              PortalBio
            </p>
            <p className="mt-2 text-sm leading-relaxed">12 template link-in-bio dengan karakter — untuk kreator, musisi, bisnis, dan developer.</p>
          </div>
          <nav aria-label="Tautan footer" className="text-sm">
            <p className="font-display text-xs font-bold uppercase tracking-widest text-kuningx">Jelajahi</p>
            <ul className="mt-3 space-y-2">
              <li><a href="#templates" className="transition hover:text-kertas">Koleksi Template</a></li>
              <li><a href="#kenapa" className="transition hover:text-kertas">Kenapa Link-in-Bio</a></li>
              <li><a href="#cara" className="transition hover:text-kertas">Cara Pesan</a></li>
              <li><a href="#tanya" className="transition hover:text-kertas">FAQ</a></li>
            </ul>
          </nav>
          <div className="text-sm">
            <p className="font-display text-xs font-bold uppercase tracking-widest text-kuningx">Hubungi</p>
            <ul className="mt-3 space-y-2">
              <li><a href={WA} target="_blank" rel="noopener noreferrer" className="transition hover:text-kertas">WhatsApp +62 813 3990 8765</a></li>
              <li><a href="https://pintuweb.com" target="_blank" rel="noopener noreferrer" className="transition hover:text-kertas">pintuweb.com</a></li>
            </ul>
          </div>
        </div>
        <p className="mt-10 border-t border-kertas/10 pt-5 text-center text-xs text-kertas/40">
          © {new Date().getFullYear()} PortalBio · bagian dari PintuWeb — 12 template, satu kamu.
        </p>
      </footer>
    </div>
  );
}
