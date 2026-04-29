import { useState } from 'react';
import { MessageCircle, Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

const contactInfo = [
  { icon: Phone, label: 'Telepon / WhatsApp', value: '+62 822-9323-4424', href: 'https://wa.me/6282293234424', color: 'text-emerald-400' },
  { icon: Mail, label: 'Email', value: 'hello@papuaparadise.tech', href: 'mailto:hello@papuaparadise.tech', color: 'text-cyan-400' },
  { icon: MapPin, label: 'Alamat', value: 'Jl. A. Yani No. 12, Sorong, Papua Barat Daya', href: '#', color: 'text-orange-400' },
];

const services = ['Jasa Pembuatan Website', 'Aplikasi Mobile', 'Sistem Informasi Custom', 'Manajemen Media Sosial', 'Konsultasi IT', 'E-Commerce', 'Lainnya'];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  return (
    <section id="kontak" className="section-darker py-24 px-4 sm:px-6 relative overflow-hidden">
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[800px] h-[300px] rounded-full bg-cyan-500/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full mb-5">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span className="text-emerald-400 text-sm font-medium tracking-wider uppercase">Hubungi Kami</span>
          </div>
          <h2 className="section-title text-white">
            Siap <span className="text-gradient-cyan">Memulai</span> Proyek Anda?
          </h2>
          <p className="section-subtitle mt-4">
            Ceritakan kebutuhan Anda dan tim kami akan merespons dalam 1x24 jam
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left: Contact info */}
          <div className="space-y-6">
            {contactInfo.map((c) => {
              const Icon = c.icon;
              return (
                <a key={c.label} href={c.href} target={c.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer"
                  className="glass-card rounded-2xl p-6 flex items-center gap-5 hover:glow-cyan transition-all duration-300 group block">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center glass-dark border border-cyan-500/20 ${c.color} group-hover:scale-110 transition-transform`}>
                    <Icon size={22} />
                  </div>
                  <div>
                    <div className="text-xs text-blue-200/50 mb-1">{c.label}</div>
                    <div className="text-white font-medium text-sm">{c.value}</div>
                  </div>
                </a>
              );
            })}

            {/* WhatsApp CTA */}
            <a
              id="whatsapp-cta"
              href="https://wa.me/6282293234424?text=Halo%20Papua%20Paradise%20Teknologi,%20saya%20ingin%20konsultasi%20tentang%20layanan%20IT"
              target="_blank" rel="noreferrer"
              className="flex items-center justify-center gap-3 w-full py-4 rounded-2xl font-semibold text-white transition-all duration-300"
              style={{ background: 'linear-gradient(135deg, #25D366, #128C7E)', boxShadow: '0 8px 32px rgba(37,211,102,0.3)' }}
            >
              <MessageCircle size={20} />
              Chat WhatsApp Sekarang
            </a>

            {/* Map placeholder */}
            <div className="glass-card rounded-2xl overflow-hidden h-52 flex items-center justify-center relative">
              <div className="absolute inset-0 opacity-10"
                style={{ backgroundImage: 'linear-gradient(rgba(0,180,216,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(0,180,216,0.5) 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
              <div className="text-center relative z-10">
                <MapPin size={32} className="text-cyan-400 mx-auto mb-2" />
                <p className="text-blue-200/70 text-sm">Sorong, Papua Barat Daya</p>
                <p className="text-blue-200/40 text-xs mt-1">Indonesia</p>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="glass-card rounded-2xl p-8">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="w-20 h-20 rounded-full bg-emerald-500/20 flex items-center justify-center mb-6 animate-pulse-glow">
                  <CheckCircle size={40} className="text-emerald-400" />
                </div>
                <h3 className="text-white text-xl font-bold mb-3">Pesan Terkirim!</h3>
                <p className="text-blue-200/60 text-sm mb-6">Tim kami akan menghubungi Anda dalam 1x24 jam. Terima kasih!</p>
                <button id="send-again-btn" onClick={() => { setSubmitted(false); setForm({ name:'', email:'', phone:'', service:'', message:'' }); }}
                  className="btn-outline text-sm">Kirim Pesan Lagi</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h3 className="text-white font-bold text-lg mb-6">Kirim Pesan</h3>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs text-blue-200/60 mb-2">Nama Lengkap *</label>
                    <input id="form-name" name="name" value={form.name} onChange={handleChange} required
                      placeholder="Nama Anda"
                      className="w-full glass-dark rounded-xl px-4 py-3 text-sm text-white placeholder-blue-200/30 border border-cyan-500/20 focus:border-cyan-500/50 transition-colors" />
                  </div>
                  <div>
                    <label className="block text-xs text-blue-200/60 mb-2">Nomor WhatsApp *</label>
                    <input id="form-phone" name="phone" value={form.phone} onChange={handleChange} required
                      placeholder="08xx-xxxx-xxxx"
                      className="w-full glass-dark rounded-xl px-4 py-3 text-sm text-white placeholder-blue-200/30 border border-cyan-500/20 focus:border-cyan-500/50 transition-colors" />
                  </div>
                </div>

                <div>
                  <label className="block text-xs text-blue-200/60 mb-2">Email</label>
                  <input id="form-email" name="email" type="email" value={form.email} onChange={handleChange}
                    placeholder="email@domain.com"
                    className="w-full glass-dark rounded-xl px-4 py-3 text-sm text-white placeholder-blue-200/30 border border-cyan-500/20 focus:border-cyan-500/50 transition-colors" />
                </div>

                <div>
                  <label className="block text-xs text-blue-200/60 mb-2">Layanan yang Dibutuhkan *</label>
                  <select id="form-service" name="service" value={form.service} onChange={handleChange} required
                    className="w-full glass-dark rounded-xl px-4 py-3 text-sm text-white border border-cyan-500/20 focus:border-cyan-500/50 transition-colors"
                    style={{ background: 'rgba(2,15,30,0.7)' }}>
                    <option value="" style={{ background: '#020b18' }}>-- Pilih Layanan --</option>
                    {services.map((s) => <option key={s} value={s} style={{ background: '#020b18' }}>{s}</option>)}
                  </select>
                </div>

                <div>
                  <label className="block text-xs text-blue-200/60 mb-2">Deskripsi Kebutuhan *</label>
                  <textarea id="form-message" name="message" value={form.message} onChange={handleChange} required rows={4}
                    placeholder="Ceritakan kebutuhan proyek Anda secara singkat..."
                    className="w-full glass-dark rounded-xl px-4 py-3 text-sm text-white placeholder-blue-200/30 border border-cyan-500/20 focus:border-cyan-500/50 transition-colors resize-none" />
                </div>

                <button id="submit-form-btn" type="submit" disabled={loading}
                  className="btn-primary w-full flex items-center justify-center gap-2">
                  {loading ? (
                    <><span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" /> Mengirim...</>
                  ) : (
                    <><Send size={16} /> Kirim Pesan</>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
