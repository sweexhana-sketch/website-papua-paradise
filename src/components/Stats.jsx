import { useEffect, useRef, useState } from 'react';

const stats = [
  { num: 50, suffix: '+', label: 'Proyek Selesai', desc: 'Website, Aplikasi & Sistem' },
  { num: 30, suffix: '+', label: 'Klien Puas', desc: 'Dari berbagai sektor bisnis' },
  { num: 5, suffix: '+', label: 'Tahun Pengalaman', desc: 'Di industri teknologi' },
  { num: 98, suffix: '%', label: 'Tingkat Kepuasan', desc: 'Berdasarkan survei klien' },
];

function CountUp({ target, suffix, duration = 2000 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const start = Date.now();
          const tick = () => {
            const elapsed = Date.now() - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * target));
            if (progress < 1) requestAnimationFrame(tick);
            else setCount(target);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, duration]);

  return (
    <span ref={ref} className="text-5xl font-black text-gradient-cyan">
      {count}{suffix}
    </span>
  );
}

const techStack = [
  'React.js', 'Next.js', 'Node.js', 'Laravel', 'PostgreSQL', 'MySQL',
  'Flutter', 'React Native', 'Docker', 'AWS', 'Firebase', 'TypeScript',
];

export default function Stats() {
  return (
    <section className="section-dark py-24 px-4 sm:px-6 relative overflow-hidden">
      {/* BG glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[300px] rounded-full bg-cyan-500/5 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Stats grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {stats.map((s, i) => (
            <div
              key={s.label}
              id={`stat-${i}`}
              className="glass-card rounded-2xl p-6 text-center group hover:glow-cyan transition-all duration-300"
            >
              <CountUp target={s.num} suffix={s.suffix} />
              <div className="text-white font-semibold mt-2 mb-1">{s.label}</div>
              <div className="text-blue-200/50 text-xs">{s.desc}</div>
            </div>
          ))}
        </div>

        {/* Tech Stack */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full mb-4">
            <span className="w-2 h-2 rounded-full bg-violet-400" />
            <span className="text-violet-400 text-sm font-medium tracking-wider uppercase">Tech Stack</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            Teknologi yang <span className="text-gradient-cyan">Kami Kuasai</span>
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-3">
          {techStack.map((tech) => (
            <div
              key={tech}
              className="glass-card px-5 py-2.5 rounded-full text-sm text-cyan-300/80 font-medium hover:text-cyan-400 hover:border-cyan-400/40 transition-all duration-200 cursor-default"
            >
              {tech}
            </div>
          ))}
        </div>

        {/* Process Steps */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h2 className="section-title text-white">
              Cara <span className="text-gradient-gold">Kerja Kami</span>
            </h2>
            <p className="section-subtitle">Proses transparan dari konsultasi hingga peluncuran</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: '01', icon: '💬', title: 'Konsultasi', desc: 'Diskusi kebutuhan dan tujuan bisnis Anda secara mendalam' },
              { step: '02', icon: '📐', title: 'Desain & Perencanaan', desc: 'Rancang UI/UX dan arsitektur sistem yang optimal' },
              { step: '03', icon: '⚙️', title: 'Pengembangan', desc: 'Proses coding dengan standar kualitas tinggi dan agile' },
              { step: '04', icon: '🚀', title: 'Peluncuran & Support', desc: 'Deploy, testing, dan dukungan purna jual berkelanjutan' },
            ].map((p, i) => (
              <div key={p.step} id={`process-step-${i+1}`} className="relative">
                {i < 3 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-px bg-gradient-to-r from-cyan-500/30 to-transparent z-10" />
                )}
                <div className="glass-card rounded-2xl p-6 text-center h-full relative overflow-hidden group hover:glow-cyan transition-all duration-300">
                  <div className="text-3xl mb-4">{p.icon}</div>
                  <div className="absolute top-4 right-4 text-5xl font-black text-white/5 select-none">{p.step}</div>
                  <div className="text-cyan-400 text-xs font-bold tracking-widest uppercase mb-2">Step {p.step}</div>
                  <h3 className="text-white font-bold text-base mb-2">{p.title}</h3>
                  <p className="text-blue-200/60 text-sm">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
