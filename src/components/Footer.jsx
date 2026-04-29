import logoSrc from '../data/logo/logo_transparent.png';
import { Phone, Mail, MapPin, Instagram, Facebook, Twitter, Youtube, ArrowUp } from 'lucide-react';

const footerLinks = {
  'Layanan': ['Jasa Pembuatan Website', 'Aplikasi Mobile', 'Sistem Informasi Custom', 'Manajemen Media Sosial', 'Konsultasi IT'],
  'Perusahaan': ['Tentang Kami', 'Portofolio', 'Blog & Artikel', 'Karir', 'Partner'],
  'Dukungan': ['FAQ', 'Hubungi Kami', 'Kebijakan Privasi', 'Syarat & Ketentuan'],
};

const socials = [
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Twitter, href: '#', label: 'Twitter / X' },
  { icon: Youtube, href: '#', label: 'YouTube' },
];

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="relative bg-[#010913] border-t border-cyan-500/10 pt-16 pb-8 px-4 sm:px-6">
      {/* Top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand col */}
          <div className="lg:col-span-2">
            <img src={logoSrc} alt="Papua Paradise Teknologi" className="h-20 w-auto object-contain mb-6 logo-theme-glow" style={{ transformOrigin: 'left center' }} />
            <p className="text-blue-200/55 text-sm leading-relaxed mb-6 max-w-xs">
              Perusahaan IT terpercaya dari Sorong, Papua. Kami hadir untuk mendorong transformasi digital
              bisnis dan pemerintahan di wilayah Papua dengan teknologi terbaik.
            </p>

            {/* Contact brief */}
            <div className="space-y-3">
              {[
                { Icon: Phone, text: '+62 822-9323-4424', href: 'tel:+6282293234424' },
                { Icon: Mail, text: 'hello@papuaparadise.tech', href: 'mailto:hello@papuaparadise.tech' },
                { Icon: MapPin, text: 'Sorong, Papua Barat Daya', href: '#' },
              ].map(({ Icon, text, href }) => (
                <a key={text} href={href} className="flex items-center gap-3 text-sm text-blue-200/60 hover:text-cyan-400 transition-colors">
                  <Icon size={14} className="text-cyan-400 flex-shrink-0" />
                  {text}
                </a>
              ))}
            </div>

            {/* Socials */}
            <div className="flex gap-3 mt-6">
              {socials.map(({ icon: Icon, href, label }) => (
                <a key={label} href={href} aria-label={label}
                  className="w-9 h-9 glass-card rounded-lg flex items-center justify-center text-blue-200/60 hover:text-cyan-400 hover:border-cyan-500/40 transition-all duration-200">
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Link cols */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-white font-semibold text-sm mb-5 tracking-wider uppercase">{title}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-blue-200/55 text-sm hover:text-cyan-400 transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent mb-8" />

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-blue-200/40 text-xs text-center sm:text-left">
            © {new Date().getFullYear()} Papua Paradise Teknologi. Hak Cipta Dilindungi.
            <span className="mx-2">·</span>
            Dibuat dengan ❤️ di Sorong, Papua
          </p>
          <button
            id="scroll-to-top-btn"
            onClick={scrollToTop}
            className="w-10 h-10 glass-card rounded-full flex items-center justify-center text-cyan-400 hover:glow-cyan hover:border-cyan-500/40 transition-all duration-200"
            aria-label="Scroll to top"
          >
            <ArrowUp size={18} />
          </button>
        </div>
      </div>
    </footer>
  );
}
