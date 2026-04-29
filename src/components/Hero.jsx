import { useEffect, useRef } from 'react';
import { ArrowRight, Zap } from 'lucide-react';

// Animated circuit SVG nodes
function CircuitSVG() {
  return (
    <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#00b4d8" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#00b4d8" stopOpacity="0" />
        </radialGradient>
      </defs>
      {/* Horizontal lines */}
      {[100, 200, 300, 400, 500].map((y) => (
        <line key={y} x1="0" y1={y} x2="100%" y2={y} stroke="rgba(0,180,216,0.12)" strokeWidth="1" />
      ))}
      {/* Vertical lines */}
      {[150, 350, 550, 750, 950].map((x) => (
        <line key={x} x1={x} y1="0" x2={x} y2="100%" stroke="rgba(0,180,216,0.08)" strokeWidth="1" />
      ))}
      {/* Glowing nodes */}
      {[[150,100],[350,200],[550,300],[750,100],[950,400],[250,400],[650,200]].map(([cx,cy],i) => (
        <circle key={i} cx={cx} cy={cy} r="3" fill="#00b4d8" opacity="0.6" />
      ))}
    </svg>
  );
}

// Particles
function Particles() {
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    animationDelay: `${Math.random() * 5}s`,
    animationDuration: `${4 + Math.random() * 4}s`,
    size: Math.random() > 0.5 ? 3 : 2,
  }));
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute bottom-0 rounded-full"
          style={{
            left: p.left,
            width: p.size,
            height: p.size,
            background: Math.random() > 0.5 ? '#00b4d8' : '#f4a261',
            animation: `particle ${p.animationDuration} ${p.animationDelay} ease-in infinite`,
          }}
        />
      ))}
    </div>
  );
}

// Rotating HUD Ring
function HudRing({ size, delay, color, counter }) {
  return (
    <div
      className="absolute rounded-full border pointer-events-none"
      style={{
        width: size,
        height: size,
        borderColor: color,
        animation: `${counter ? 'counter-rotate-ring' : 'rotate-ring'} ${15 + delay * 5}s linear infinite`,
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
      }}
    />
  );
}

export default function Hero() {
  const handleScroll = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="beranda" className="relative min-h-screen hero-bg flex items-center overflow-hidden">
      <CircuitSVG />
      <Particles />

      {/* HUD Rings decorative */}
      <div className="absolute right-10 top-1/2 -translate-y-1/2 w-[500px] h-[500px] hidden xl:block">
        <HudRing size={480} delay={0} color="rgba(0,180,216,0.15)" />
        <HudRing size={360} delay={1} color="rgba(0,180,216,0.2)" counter />
        <HudRing size={240} delay={2} color="rgba(244,162,97,0.15)" />
        <HudRing size={120} delay={3} color="rgba(0,180,216,0.3)" counter />
        {/* Center glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-cyan-400/20 blur-xl animate-pulse" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-cyan-400 animate-pulse-glow" />
        {/* Dots on ring */}
        {[0, 60, 120, 180, 240, 300].map((deg) => (
          <div
            key={deg}
            className="absolute w-2 h-2 rounded-full bg-cyan-400/60"
            style={{
              top: `${50 + 48 * Math.sin((deg * Math.PI) / 180)}%`,
              left: `${50 + 48 * Math.cos((deg * Math.PI) / 180)}%`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-24 pb-16">
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full mb-8 animate-fade-up">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-cyan-400 text-sm font-medium tracking-wider uppercase">
              IT Company Papua · Inovasi Digital Terdepan
            </span>
          </div>

          {/* Heading */}
          <h1 className="section-title text-white animate-fade-up" style={{ animationDelay: '0.1s' }}>
            Solusi{' '}
            <span className="text-gradient-cyan">Teknologi</span>
            <br />
            untuk{' '}
            <span className="text-gradient-gold">Papua</span>
            <br />
            yang Lebih Maju
          </h1>

          <p className="text-blue-200/70 text-lg mt-6 mb-10 leading-relaxed animate-fade-up" style={{ animationDelay: '0.2s' }}>
            Papua Paradise Teknologi hadir sebagai mitra digital terpercaya — membangun
            website, aplikasi, dan sistem informasi untuk mendorong pertumbuhan bisnis
            Anda di era digital.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 animate-fade-up" style={{ animationDelay: '0.3s' }}>
            <button onClick={() => handleScroll('#kontak')} className="btn-primary flex items-center gap-2">
              Konsultasi Gratis <ArrowRight size={16} />
            </button>
            <button onClick={() => handleScroll('#layanan')} className="btn-outline flex items-center gap-2">
              <Zap size={16} /> Lihat Layanan
            </button>
          </div>

          {/* Quick stats */}
          <div className="flex flex-wrap gap-8 mt-14 animate-fade-up" style={{ animationDelay: '0.4s' }}>
            {[
              { num: '50+', label: 'Proyek Selesai' },
              { num: '30+', label: 'Klien Puas' },
              { num: '5+', label: 'Tahun Pengalaman' },
            ].map((s) => (
              <div key={s.label} className="flex flex-col">
                <span className="text-3xl font-bold text-gradient-cyan">{s.num}</span>
                <span className="text-sm text-blue-200/60 mt-1">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#020b18] to-transparent" />
    </section>
  );
}
