import { Globe, Smartphone, Settings, Megaphone, Lightbulb, ShoppingCart, ChevronRight } from 'lucide-react';
import { useState } from 'react';

const services = [
  {
    id: 'website',
    icon: Globe,
    color: 'from-cyan-500 to-blue-600',
    glow: 'rgba(0,180,216,0.3)',
    title: 'Jasa Pembuatan Website',
    desc: 'Website profesional, responsif, dan SEO-friendly untuk bisnis, company profile, toko online, dan portal berita.',
    features: ['Company Profile', 'Landing Page', 'E-Commerce', 'Portal Berita'],
  },
  {
    id: 'mobile',
    icon: Smartphone,
    color: 'from-violet-500 to-purple-700',
    glow: 'rgba(139,92,246,0.3)',
    title: 'Aplikasi Mobile',
    desc: 'Pengembangan aplikasi Android & iOS native maupun cross-platform yang intuitif dan berperforma tinggi.',
    features: ['Android Native', 'iOS Native', 'Flutter / React Native', 'Play Store & App Store'],
  },
  {
    id: 'sistem',
    icon: Settings,
    color: 'from-orange-400 to-amber-600',
    glow: 'rgba(244,162,97,0.3)',
    title: 'Sistem Informasi Custom',
    desc: 'Sistem manajemen, ERP, dan aplikasi web berbasis cloud sesuai kebutuhan bisnis spesifik Anda.',
    features: ['ERP & CRM', 'Manajemen SDM', 'Sistem Laporan', 'Dashboard Analitik'],
  },
  {
    id: 'sosmed',
    icon: Megaphone,
    color: 'from-pink-500 to-rose-600',
    glow: 'rgba(236,72,153,0.3)',
    title: 'Manajemen Media Sosial',
    desc: 'Kelola kehadiran digital brand Anda di Instagram, Facebook, TikTok, dan platform lainnya secara profesional.',
    features: ['Konten Kreatif', 'Iklan Berbayar', 'Community Management', 'Analitik & Laporan'],
  },
  {
    id: 'konsultasi',
    icon: Lightbulb,
    color: 'from-emerald-400 to-teal-600',
    glow: 'rgba(52,211,153,0.3)',
    title: 'Konsultasi IT',
    desc: 'Dapatkan panduan ahli dalam transformasi digital, pemilihan teknologi, dan strategi IT terbaik untuk bisnis Anda.',
    features: ['Audit Teknologi', 'Roadmap Digital', 'Pemilihan Stack', 'Keamanan Siber'],
  },
  {
    id: 'ecommerce',
    icon: ShoppingCart,
    color: 'from-blue-400 to-sky-600',
    glow: 'rgba(56,189,248,0.3)',
    title: 'Toko Online / E-Commerce',
    desc: 'Bangun toko online lengkap dengan sistem pembayaran, manajemen produk, dan pengalaman belanja yang mulus.',
    features: ['Payment Gateway', 'Manajemen Produk', 'Laporan Penjualan', 'Multi-Seller'],
  },
];

function ServiceCard({ service, index }) {
  const [hovered, setHovered] = useState(false);
  const Icon = service.icon;
  return (
    <div
      id={`service-card-${service.id}`}
      className="glass-card rounded-2xl p-6 transition-all duration-400 cursor-default group relative overflow-hidden"
      style={{
        transform: hovered ? 'translateY(-8px)' : 'translateY(0)',
        boxShadow: hovered ? `0 20px 60px ${service.glow}` : 'none',
        animationDelay: `${index * 0.1}s`,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Top gradient line */}
      <div className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${service.color} opacity-60`} />

      {/* Icon */}
      <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} mb-5 shadow-lg`}
        style={{ boxShadow: `0 8px 24px ${service.glow}` }}>
        <Icon size={26} className="text-white" />
      </div>

      <h3 className="text-lg font-bold text-white mb-3">{service.title}</h3>
      <p className="text-blue-200/60 text-sm leading-relaxed mb-5">{service.desc}</p>

      {/* Features */}
      <ul className="space-y-2">
        {service.features.map((f) => (
          <li key={f} className="flex items-center gap-2 text-xs text-blue-200/70">
            <ChevronRight size={12} className="text-cyan-400 flex-shrink-0" />
            {f}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Services() {
  return (
    <section id="layanan" className="section-darker py-24 px-4 sm:px-6 relative">
      {/* Decorative */}
      <div className="absolute top-20 right-10 w-72 h-72 rounded-full bg-cyan-500/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 left-10 w-72 h-72 rounded-full bg-blue-600/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full mb-5">
            <span className="w-2 h-2 rounded-full bg-orange-400" />
            <span className="text-orange-400 text-sm font-medium tracking-wider uppercase">Produk &amp; Layanan</span>
          </div>
          <h2 className="section-title text-white">
            Apa yang <span className="text-gradient-cyan">Kami Tawarkan</span>
          </h2>
          <p className="section-subtitle mt-4">
            Layanan teknologi digital lengkap untuk mempercepat pertumbuhan bisnis Anda
            di era transformasi digital
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <ServiceCard key={s.id} service={s} index={i} />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <button
            onClick={() => { const el = document.querySelector('#kontak'); el?.scrollIntoView({ behavior: 'smooth' }); }}
            className="btn-outline inline-flex items-center gap-2"
            id="services-cta-btn"
          >
            Diskusikan Kebutuhan Anda <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}
