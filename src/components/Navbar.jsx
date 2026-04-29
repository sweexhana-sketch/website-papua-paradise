import { useState, useEffect } from 'react';
import { ChevronDown, Menu, X, Phone } from 'lucide-react';
import logoSrc from '../data/logo/logo_transparent.png';

const services = [
  { label: 'Jasa Pembuatan Website', icon: '🌐' },
  { label: 'Aplikasi Mobile (Android & iOS)', icon: '📱' },
  { label: 'Sistem Informasi Custom', icon: '⚙️' },
  { label: 'Manajemen Media Sosial', icon: '📣' },
  { label: 'Konsultasi IT', icon: '💡' },
];

const navLinks = [
  { label: 'Beranda', href: '#beranda' },
  { label: 'Produk & Layanan', href: '#layanan', dropdown: services },
  { label: 'Portofolio', href: '#portofolio' },
  { label: 'Tentang Kami', href: '#tentang' },
  { label: 'Kontak', href: '#kontak' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (href) => {
    setMobileOpen(false);
    setDropdownOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled ? 'glass-dark shadow-lg shadow-cyan-900/20 py-3' : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Logo */}
        <button onClick={() => handleNavClick('#beranda')} className="flex items-center gap-3 group">
          <img src={logoSrc} alt="Papua Paradise Teknologi" className="h-14 lg:h-16 w-auto object-contain logo-theme-glow" style={{ transformOrigin: 'left center' }} />
        </button>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) =>
            link.dropdown ? (
              <div key={link.label} className="relative">
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="nav-link flex items-center gap-1"
                  id="dropdown-trigger"
                >
                  {link.label}
                  <ChevronDown size={14} className={`transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} />
                </button>
                {dropdownOpen && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-64 glass-dark rounded-2xl border border-cyan-500/20 shadow-xl shadow-cyan-900/30 overflow-hidden">
                    {services.map((s) => (
                      <button
                        key={s.label}
                        onClick={() => handleNavClick('#layanan')}
                        className="w-full text-left px-5 py-3 text-sm text-blue-100/80 hover:bg-cyan-500/10 hover:text-cyan-400 transition-colors flex items-center gap-3"
                      >
                        <span>{s.icon}</span> {s.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <button key={link.label} onClick={() => handleNavClick(link.href)} className="nav-link">
                {link.label}
              </button>
            )
          )}
        </div>

        {/* CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <a href="tel:+6282293234424" className="flex items-center gap-2 text-sm text-cyan-400 hover:text-white transition-colors">
            <Phone size={15} /> +62 822-9323-4424
          </a>
          <button onClick={() => handleNavClick('#kontak')} className="btn-primary text-sm">
            Konsultasi Gratis
          </button>
        </div>

        {/* Mobile toggle */}
        <button
          id="mobile-menu-btn"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden text-cyan-400 p-2"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden glass-dark border-t border-cyan-500/20 px-4 py-6 space-y-4">
          {navLinks.map((link) => (
            <div key={link.label}>
              <button
                onClick={() => handleNavClick(link.href)}
                className="w-full text-left text-blue-100/80 hover:text-cyan-400 py-2 font-medium text-sm transition-colors"
              >
                {link.label}
              </button>
              {link.dropdown && (
                <div className="pl-4 mt-1 space-y-2">
                  {link.dropdown.map((s) => (
                    <button
                      key={s.label}
                      onClick={() => handleNavClick('#layanan')}
                      className="w-full text-left text-sm text-blue-200/60 hover:text-cyan-400 py-1 transition-colors"
                    >
                      {s.icon} {s.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
          <button onClick={() => handleNavClick('#kontak')} className="btn-primary w-full text-sm mt-2">
            Konsultasi Gratis
          </button>
        </div>
      )}
    </nav>
  );
}
