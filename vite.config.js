// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()], // HANYA INI! Plugin tailwindcss yang salah sudah Dihapus.
  server: {
    proxy: {
      '/api': {
        target: 'https://script.google.com/macros/s/AKfycbz1rZaqxVsQCvbi2q44kz-wx_Tv0Tpp8J8GoCSkp500jMvuWo9k9CUP-szl7M5KidhQ/exec',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
        secure: true, 
      },
    },
  },
  // Properti 'base' secara default adalah '/', yang sudah benar untuk Netlify.
  // Tidak perlu ditambahkan secara eksplisit kecuali kamu deploy ke sub-path.
});