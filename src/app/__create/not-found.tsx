import { useNavigate } from 'react-router';

export default function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center px-4"
      style={{ background: '#020b18', color: '#e2f0ff' }}
    >
      <div className="text-center max-w-lg">
        {/* 404 Number */}
        <h1
          className="text-8xl md:text-9xl font-black mb-4"
          style={{
            background: 'linear-gradient(135deg, #00d4ff, #0077b6)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          404
        </h1>

        {/* Message */}
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
          Halaman Tidak Ditemukan
        </h2>
        <p className="text-blue-200/60 mb-10 text-base leading-relaxed">
          Halaman yang Anda cari tidak tersedia atau telah dipindahkan.
          Silakan kembali ke beranda.
        </p>

        {/* CTA */}
        <button
          type="button"
          onClick={() => navigate('/')}
          className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-white transition-all duration-300 hover:scale-105"
          style={{
            background: 'linear-gradient(135deg, #00b4d8, #0077b6)',
            boxShadow: '0 8px 24px rgba(0,180,216,0.4)',
          }}
        >
          ← Kembali ke Beranda
        </button>
      </div>
    </div>
  );
}
