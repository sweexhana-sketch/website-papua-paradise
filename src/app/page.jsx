import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Stats from '../components/Stats';
import Portfolio from '../components/Portfolio';
import About from '../components/About';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import { MessageCircle } from 'lucide-react';

export default function Page() {
  return (
    <div className="min-h-screen bg-[#020b18]">
      {/* Announcement bar */}
      <div
        className="relative z-50 text-center text-xs py-2 px-4 font-medium"
        style={{ background: 'linear-gradient(90deg, #0077b6, #00b4d8, #0077b6)', color: '#fff' }}
      >
        🚀 Promo Spesial April — Gratis Konsultasi & Analisis Kebutuhan Digital Anda!
        <button
          onClick={() => document.querySelector('#kontak')?.scrollIntoView({ behavior: 'smooth' })}
          className="ml-3 bg-white/20 hover:bg-white/30 px-3 py-0.5 rounded-full transition-colors"
          id="announcement-cta"
        >
          Mulai Sekarang →
        </button>
      </div>

      <Navbar />
      <Hero />
      <Services />
      <Stats />
      <Portfolio />
      <About />
      <Testimonials />

      {/* CTA Banner */}
      <section className="py-20 px-4 sm:px-6 relative overflow-hidden">
        <div
          className="max-w-5xl mx-auto rounded-3xl p-12 text-center relative overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, rgba(0,77,182,0.3) 0%, rgba(0,180,216,0.2) 50%, rgba(0,77,182,0.3) 100%)',
            border: '1px solid rgba(0,180,216,0.25)',
          }}
        >
          {/* Decorative rings */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full border border-cyan-500/10 animate-spin-slow pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full border border-cyan-500/15 pointer-events-none"
            style={{ animation: 'counter-rotate-ring 12s linear infinite' }} />

          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full mb-6">
              <span className="w-2 h-2 rounded-full bg-orange-400 animate-pulse" />
              <span className="text-orange-400 text-sm font-medium">Jangan tunda transformasi digital Anda</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-5">
              Siap Wujudkan Visi Digital<br />
              <span className="text-gradient-cyan">Bisnis Anda?</span>
            </h2>
            <p className="text-blue-200/70 text-lg mb-8 max-w-xl mx-auto">
              Hubungi kami hari ini dan dapatkan konsultasi gratis bersama tim ahli kami.
              Tidak ada komitmen, hanya solusi terbaik untuk Anda.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button
                id="cta-banner-main"
                onClick={() => document.querySelector('#kontak')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-primary text-base px-8 py-4"
              >
                Konsultasi Gratis Sekarang
              </button>
              <a
                id="cta-banner-wa"
                href="https://wa.me/6282293234424?text=Halo%20Papua%20Paradise%20Teknologi,%20saya%20ingin%20konsultasi%20gratis"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-white text-base transition-all duration-300 hover:scale-105"
                style={{ background: 'linear-gradient(135deg, #25D366, #128C7E)', boxShadow: '0 8px 24px rgba(37,211,102,0.35)' }}
              >
                <MessageCircle size={20} /> WhatsApp Kami
              </a>
            </div>
          </div>
        </div>
      </section>

      <Contact />
      <Footer />

      {/* Floating WhatsApp button */}
      <a
        id="floating-wa-btn"
        href="https://wa.me/6282293234424?text=Halo%20Papua%20Paradise%20Teknologi"
        target="_blank"
        rel="noreferrer"
        aria-label="Chat WhatsApp"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-110"
        style={{ background: 'linear-gradient(135deg, #25D366, #128C7E)', boxShadow: '0 8px 30px rgba(37,211,102,0.5)' }}
      >
        <MessageCircle size={26} className="text-white" />
      </a>
    </div>
  );
}
