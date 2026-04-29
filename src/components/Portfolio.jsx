import { useState } from 'react';
import { ExternalLink, Tag } from 'lucide-react';

const projects = [
  {
    id: 'proj-1',
    title: 'Sistem Informasi Kepegawaian',
    category: 'Sistem Informasi',
    client: 'Pemerintah Daerah Papua',
    desc: 'Platform manajemen data ASN terpadu dengan modul absensi, penggajian, dan pelaporan real-time.',
    color: 'from-cyan-500/20 to-blue-600/20',
    border: 'rgba(0,180,216,0.3)',
    tags: ['React', 'Node.js', 'PostgreSQL'],
    icon: '🏛️',
  },
  {
    id: 'proj-2',
    title: 'E-Commerce UMKM Papua',
    category: 'Toko Online',
    client: 'Dinas Perdagangan Papua',
    desc: 'Platform marketplace untuk produk lokal Papua dengan fitur multi-seller dan integrasi payment gateway.',
    color: 'from-orange-500/20 to-amber-600/20',
    border: 'rgba(244,162,97,0.3)',
    tags: ['Next.js', 'Laravel', 'MySQL'],
    icon: '🛒',
  },
  {
    id: 'proj-3',
    title: 'Aplikasi Mobile Kesehatan',
    category: 'Mobile App',
    client: 'Dinas Kesehatan Papua Barat',
    desc: 'Aplikasi pemantauan kesehatan masyarakat dengan fitur konsultasi dokter online dan rekam medis digital.',
    color: 'from-emerald-500/20 to-teal-600/20',
    border: 'rgba(52,211,153,0.3)',
    tags: ['Flutter', 'Firebase', 'Node.js'],
    icon: '🏥',
  },
  {
    id: 'proj-4',
    title: 'Portal Berita Digital Papua',
    category: 'Website',
    client: 'Media Online Papua',
    desc: 'Portal berita modern dengan CMS custom, manajemen iklan, dan sistem langganan premium.',
    color: 'from-violet-500/20 to-purple-600/20',
    border: 'rgba(139,92,246,0.3)',
    tags: ['React', 'Express', 'MongoDB'],
    icon: '📰',
  },
  {
    id: 'proj-5',
    title: 'Sistem RTLH (Rumah Tidak Layak Huni)',
    category: 'Sistem Informasi',
    client: 'Dinas Perumahan Papua Barat Daya',
    desc: 'Aplikasi pendataan dan monitoring program bedah rumah berbasis GIS dengan dashboard analitik.',
    color: 'from-pink-500/20 to-rose-600/20',
    border: 'rgba(236,72,153,0.3)',
    tags: ['React', 'Hono', 'PostgreSQL'],
    icon: '🏠',
  },
  {
    id: 'proj-6',
    title: 'Dashboard Manajemen Hotel',
    category: 'Web Aplikasi',
    client: 'Hotel Paradise Sorong',
    desc: 'Sistem reservasi, manajemen kamar, laporan keuangan, dan CRM untuk hotel bintang tiga.',
    color: 'from-sky-500/20 to-blue-600/20',
    border: 'rgba(56,189,248,0.3)',
    tags: ['Vue.js', 'Laravel', 'MySQL'],
    icon: '🏨',
  },
];

const categories = ['Semua', 'Website', 'Mobile App', 'Sistem Informasi', 'Toko Online', 'Web Aplikasi'];

export default function Portfolio() {
  const [active, setActive] = useState('Semua');

  const filtered = active === 'Semua' ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="portofolio" className="section-darker py-24 px-4 sm:px-6 relative">
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-violet-600/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full mb-5">
            <span className="w-2 h-2 rounded-full bg-violet-400" />
            <span className="text-violet-400 text-sm font-medium tracking-wider uppercase">Portofolio</span>
          </div>
          <h2 className="section-title text-white">
            Karya <span className="text-gradient-cyan">Terbaik Kami</span>
          </h2>
          <p className="section-subtitle mt-4">
            Beberapa proyek unggulan yang telah kami kerjakan untuk klien di Papua dan sekitarnya
          </p>
        </div>

        {/* Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              id={`filter-${cat.toLowerCase().replace(/\s/g,'-')}`}
              onClick={() => setActive(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                active === cat
                  ? 'btn-primary'
                  : 'glass-card text-blue-200/70 hover:text-cyan-400'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((p) => (
            <div
              key={p.id}
              id={p.id}
              className="glass-card rounded-2xl overflow-hidden group hover:scale-[1.02] transition-all duration-300"
              style={{ '--hover-shadow': p.border }}
            >
              {/* Top visual area */}
              <div className={`bg-gradient-to-br ${p.color} h-44 flex items-center justify-center relative overflow-hidden`}
                style={{ borderBottom: `1px solid ${p.border}` }}>
                <span className="text-6xl group-hover:scale-110 transition-transform duration-300">{p.icon}</span>
                {/* Grid overlay */}
                <div className="absolute inset-0 opacity-10"
                  style={{ backgroundImage: 'linear-gradient(rgba(0,180,216,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(0,180,216,0.3) 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
                {/* Category badge */}
                <div className="absolute top-3 right-3 flex items-center gap-1 glass-dark text-xs text-cyan-400 px-3 py-1 rounded-full">
                  <Tag size={10} /> {p.category}
                </div>
              </div>

              <div className="p-6">
                <div className="text-xs text-blue-200/50 mb-2">{p.client}</div>
                <h3 className="text-white font-bold text-base mb-2 leading-snug">{p.title}</h3>
                <p className="text-blue-200/60 text-sm leading-relaxed mb-4">{p.desc}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {p.tags.map((tag) => (
                    <span key={tag} className="text-xs px-3 py-1 rounded-full"
                      style={{ background: 'rgba(0,180,216,0.08)', color: '#90e0ef', border: '1px solid rgba(0,180,216,0.15)' }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <p className="text-blue-200/50 text-sm">
            Dan masih banyak proyek lainnya ·{' '}
            <button onClick={() => document.querySelector('#kontak')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-cyan-400 hover:underline" id="portfolio-contact-btn">
              Hubungi kami untuk info lebih lanjut
            </button>
          </p>
        </div>
      </div>
    </section>
  );
}
