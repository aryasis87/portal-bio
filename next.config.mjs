/** @type {import('next').NextConfig} */
// Portal ini tayang di https://www.pintuweb.com/link-in-bio: PintuWeb meneruskan path /link-in-bio
// ke project ini (pola multi-zone), jadi semua rute & aset hidup di bawah basePath yang sama.
const nextConfig = {
  basePath: '/link-in-bio',
  async redirects() {
    // Alamat lama portal-bio-neon.vercel.app di luar basePath -> alamat utama.
    return [
      { source: '/', destination: 'https://www.pintuweb.com/link-in-bio', basePath: false, permanent: true },
      { source: '/:lama((?!link-in-bio(?:/|$)).+)', destination: 'https://www.pintuweb.com/link-in-bio', basePath: false, permanent: true },
    ];
  },
};

export default nextConfig;
