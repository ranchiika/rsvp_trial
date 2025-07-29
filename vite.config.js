// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // String yang ingin kamu jadikan prefix untuk request ke backend
      // Contoh: fetch('/api/submitRSVP', ...)
      '/api': {
        // Ini adalah target URL Google Apps Script kamu
        target: 'https://script.google.com/macros/s/AKfycbz1rZaqxVsQCvbi2q44kz-wx_Tv0Tpp8J8GoCSkp500jMvuWo9k9CUP-szl7M5KidhQ/exec',
        changeOrigin: true, // Penting untuk mengubah header Origin ke target
        rewrite: (path) => path.replace(/^\/api/, ''), // Menghapus '/api' dari path sebelum diteruskan
        // Penting: Pastikan ini HTTPS karena targetnya HTTPS
        secure: true, 
      },
    },
  },
});