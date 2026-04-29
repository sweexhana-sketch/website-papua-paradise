import { CheckCircle, Award, Users, Target } from 'lucide-react';
import logoSrc from '../data/logo/logo_transparent.png';

const values = [
  { icon: Target, color: 'text-cyan-400', title: 'Berorientasi Hasil', desc: 'Setiap solusi kami dirancang untuk memberikan dampak nyata bagi bisnis Anda.' },
  { icon: Award, color: 'text-orange-400', title: 'Kualitas Terjamin', desc: 'Standar pengembangan tinggi dengan proses QA ketat di setiap tahap proyek.' },
  { icon: Users, color: 'text-violet-400', title: 'Tim Profesional', desc: 'Tim berpengalaman dengan latar belakang teknis dan kreatif yang solid.' },
  { icon: CheckCircle, color: 'text-emerald-400', title: 'Support Berkelanjutan', desc: 'Dukungan purna jual dan maintenance untuk memastikan sistem berjalan optimal.' },
];

const whyUs = [
  'Berdomisili & berpengalaman di Papua — mengerti konteks lokal',
  'Harga kompetitif dengan kualitas enterprise-grade',
  'Komunikasi transparan dan laporan berkala',
  'Garansi revisi dan maintenance gratis 3 bulan',
  'Tim multidisiplin: developer, designer, PM & QA',
  'Pengalaman menangani proyek pemerintah & swasta',
];

export default function About() {
  return (
    <section id="tentang" className="section-dark py-24 px-4 sm:px-6 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-cyan-500/5 blur-3xl pointer-events-none" />
      <div className="absolute top-20 right-0 w-72 h-72 rounded-full bg-orange-500/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Visual */}
          <div className="relative flex justify-center items-center">
            {/* Rotating rings */}
            <div className="absolute w-80 h-80 rounded-full border border-cyan-500/15 hud-ring" />
            <div className="absolute w-60 h-60 rounded-full border border-orange-400/10 hud-ring-counter" />
            <div className="absolute w-40 h-40 rounded-full border border-cyan-400/20 hud-ring" style={{ animationDuration: '8s' }} />

            {/* Logo */}
            <div className="relative z-10 animate-float" style={{ width: 340 }}>
              <img src={logoSrc} alt="Papua Paradise Teknologi" className="w-full object-contain logo-theme-glow" />
            </div>

            {/* Corner HUD accents */}
            {[
              { style: { top: 20, left: 20 }, label: 'Founded 2019' },
              { style: { bottom: 20, right: 20 }, label: 'Sorong, Papua' },
            ].map(({ style, label }) => (
              <div key={label}
                className="absolute glass-dark rounded-xl px-4 py-2 text-xs text-cyan-400 border border-cyan-500/20"
                style={style}>
                {label}
              </div>
            ))}
          </div>

          {/* Right: Content */}
          <div>
            <div className="inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full mb-6">
              <span className="w-2 h-2 rounded-full bg-cyan-400" />
              <span className="text-cyan-400 text-sm font-medium tracking-wider uppercase">Tentang Kami</span>
            </div>

            <h2 className="section-title text-white mb-5">
              Mitra Digital{' '}
              <span className="text-gradient-gold">Terpercaya</span>{' '}
              dari Bumi Cendrawasih
            </h2>

            <p className="text-blue-200/70 leading-relaxed mb-6">
              Papua Paradise Teknologi adalah perusahaan IT yang berpusat di Sorong, Papua Barat Daya.
              Kami hadir untuk menjembatani kebutuhan digitalisasi bisnis dan pemerintahan di wilayah Papua
              dengan solusi teknologi modern yang handal dan terjangkau.
            </p>
            <p className="text-blue-200/60 leading-relaxed mb-8">
              Dengan tim yang berpengalaman dan pemahaman mendalam tentang ekosistem Papua,
              kami telah membantu puluhan organisasi bertransformasi secara digital — dari
              pemerintah daerah, UMKM, hingga korporasi swasta.
            </p>

            {/* Why Us checklist */}
            <div className="space-y-3 mb-8">
              {whyUs.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle size={16} className="text-cyan-400 flex-shrink-0 mt-0.5" />
                  <span className="text-blue-200/75 text-sm">{item}</span>
                </div>
              ))}
            </div>

            <button
              id="about-cta-btn"
              onClick={() => document.querySelector('#kontak')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-primary inline-flex items-center gap-2"
            >
              Mulai Proyek Bersama Kami
            </button>
          </div>
        </div>

        {/* Values grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-20">
          {values.map((v, i) => {
            const Icon = v.icon;
            return (
              <div key={v.title} id={`value-${i}`} className="glass-card rounded-2xl p-6 text-center hover:glow-cyan transition-all duration-300 group">
                <Icon size={32} className={`${v.color} mx-auto mb-4 group-hover:scale-110 transition-transform`} />
                <h3 className="text-white font-bold text-sm mb-2">{v.title}</h3>
                <p className="text-blue-200/55 text-xs leading-relaxed">{v.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
