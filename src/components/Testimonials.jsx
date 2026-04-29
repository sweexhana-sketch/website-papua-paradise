import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 't1',
    name: 'Budi Santoso',
    role: 'Kepala Dinas Perdagangan',
    org: 'Kota Sorong',
    rating: 5,
    text: 'Papua Paradise Teknologi berhasil membangun sistem e-commerce UMKM yang luar biasa. Tim yang profesional, komunikatif, dan hasil akhirnya melebihi ekspektasi kami.',
    avatar: '👨‍💼',
  },
  {
    id: 't2',
    name: 'Maria Wenda',
    role: 'Direktur',
    org: 'PT. Cendrawasih Mandiri',
    rating: 5,
    text: 'Website perusahaan kami sekarang tampil jauh lebih profesional dan modern. Traffic meningkat 3x lipat dalam 2 bulan setelah diluncurkan. Sangat puas!',
    avatar: '👩‍💼',
  },
  {
    id: 't3',
    name: 'Andi Prasetyo',
    role: 'CEO',
    org: 'Hotel Paradise Sorong',
    rating: 5,
    text: 'Sistem manajemen hotel yang mereka bangun benar-benar mengubah cara kami beroperasi. Reservasi online, laporan otomatis — semuanya berjalan sempurna.',
    avatar: '👨‍💻',
  },
  {
    id: 't4',
    name: 'dr. Sari Lestari',
    role: 'Kepala Puskesmas',
    org: 'Dinas Kesehatan Papua Barat',
    rating: 5,
    text: 'Aplikasi kesehatan dari Papua Paradise memudahkan kami dalam pendataan pasien dan pelaporan. Tim support mereka selalu siap membantu 24 jam.',
    avatar: '👩‍⚕️',
  },
];

export default function Testimonials() {
  return (
    <section className="section-dark py-24 px-4 sm:px-6 relative overflow-hidden">
      <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-violet-600/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-72 h-72 rounded-full bg-cyan-500/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full mb-5">
            <span className="w-2 h-2 rounded-full bg-yellow-400" />
            <span className="text-yellow-400 text-sm font-medium tracking-wider uppercase">Testimoni</span>
          </div>
          <h2 className="section-title text-white">
            Apa Kata <span className="text-gradient-cyan">Klien Kami</span>
          </h2>
          <p className="section-subtitle mt-4">
            Kepercayaan klien adalah motivasi terbesar kami untuk terus berinovasi
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.id}
              id={t.id}
              className="glass-card rounded-2xl p-6 flex flex-col gap-4 hover:glow-cyan transition-all duration-300 group relative"
            >
              {/* Quote icon */}
              <Quote size={24} className="text-cyan-500/30 absolute top-4 right-4" />

              {/* Stars */}
              <div className="flex gap-1">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} size={13} className="text-yellow-400 fill-yellow-400" />
                ))}
              </div>

              {/* Text */}
              <p className="text-blue-200/70 text-sm leading-relaxed flex-1">"{t.text}"</p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-2 border-t border-cyan-500/10">
                <div className="w-10 h-10 rounded-full glass-dark flex items-center justify-center text-xl flex-shrink-0">
                  {t.avatar}
                </div>
                <div>
                  <div className="text-white font-semibold text-sm">{t.name}</div>
                  <div className="text-blue-200/50 text-xs">{t.role} · {t.org}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust badges row */}
        <div className="mt-16 text-center">
          <p className="text-blue-200/40 text-sm mb-6 uppercase tracking-widest">Dipercaya oleh</p>
          <div className="flex flex-wrap justify-center gap-6">
            {[
              'Pemerintah Kota Sorong',
              'Dinas Kesehatan Papua Barat',
              'UMKM Papua Digital',
              'Hotel Paradise Group',
              'Media Papua Online',
            ].map((org) => (
              <div key={org} className="glass-card px-5 py-2.5 rounded-full text-xs text-blue-200/60 border border-cyan-500/10">
                {org}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
