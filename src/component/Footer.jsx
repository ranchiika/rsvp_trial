// src/component/Footer.jsx
import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-4">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        
        {/* Bagian Logo (Kiri untuk desktop, Atas untuk mobile) */}
        <div className="mb-8 md:mb-0 md:w-1/4 flex justify-center md:justify-start">
          {/* GANTI DENGAN PATH LOGO ASLI KAMU */}
          <img 
            src="/src/assets/other.png" // Placeholder logo
            alt="Logo Event" 
            className="h-12" // Ukuran tinggi logo
          />
        </div>

        {/* Bagian Hak Cipta & Informasi (Tengah) */}
        <div className="text-center md:w-1/2 mb-8 md:mb-0">
          <p className="text-sm leading-relaxed">&copy; {new Date().getFullYear()} Nutricarevent. Semua Hak Cipta Dilindungi.</p>
        </div>

        {/* Bagian Tautan Sosial (Kanan untuk desktop, Bawah untuk mobile) */}
        <div className="flex justify-center md:justify-end space-x-6 md:w-1/4">
          <a 
            href="https://facebook.com/your-event-page" // GANTI DENGAN LINK FACEBOOK ASLI
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-gray-400 hover:text-blue-500 transition-colors duration-300 text-lg"
            aria-label="Facebook"
          >
            {/* Contoh ikon sederhana, jika pakai library seperti Heroicons/FontAwesome, bisa diganti */}
            <i className="fab fa-facebook-f"></i> Facebook
          </a>
          <a 
            href="https://instagram.com/your-event-account" // GANTI DENGAN LINK INSTAGRAM ASLI
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-gray-400 hover:text-pink-500 transition-colors duration-300 text-lg"
            aria-label="Instagram"
          >
            {/* Contoh ikon sederhana, jika pakai library seperti Heroicons/FontAwesome, bisa diganti */}
            <i className="fab fa-instagram"></i> Instagram
          </a>
          {/* Tambahkan link lain jika perlu (misal: TikTok, Twitter, LinkedIn) */}
        </div>
      </div>
    </footer>
  );
}

export default Footer;