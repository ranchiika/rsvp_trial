// src/components/RSVPForm.jsx
import React, { useState } from 'react';

function RSVPForm({ onRSVPSuccess }) {
  // State untuk menyimpan nilai dari setiap input formulir
  const [formData, setFormData] = useState({
    namaLengkap: '',
    email: '',
    jumlahKehadiran: 1, // Default 1 orang
    permintaanKhusus: ''
  });

  // State untuk menangani status loading saat submit
  const [loading, setLoading] = useState(false);
  // State untuk menangani pesan error jika ada
  const [error, setError] = useState(null);

  // Fungsi untuk mengupdate state setiap kali input berubah
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  // Fungsi untuk menangani submit formulir
  const handleSubmit = async (e) => {
    e.preventDefault(); // Mencegah refresh halaman default
    setLoading(true);
    setError(null);

    try {
      // ⚠️ PENTING: URL ini SEKARANG MENGARAH KE PROXY VITE.
      // Vite akan meneruskan permintaan ini ke URL Google Apps Script yang sebenarnya.
      const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbz1rZaqxVsQCvbi2q44kz-wx_Tv0Tpp8J8GoCSkp500jMvuWo9k9CUP-szl7M5KidhQ/exec'; // Cukup gunakan path proxy yang sudah dikonfigurasi di vite.config.js

      const response = await fetch(SCRIPT_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json' // Penting untuk Google Apps Script
        },
        body: JSON.stringify({
          action: 'submitRSVP', // Aksi yang akan dikenali oleh Apps Script
          data: formData // Mengirim data formulir
        })
      });

      // Periksa apakah respons dari server OK (status 2xx)
      if (!response.ok) {
        const errorText = await response.text(); // Ambil teks error jika ada
        throw new Error(`HTTP error! Status: ${response.status} - ${errorText}`);
      }

      const result = await response.json();

      if (result.success) {
        // Panggil fungsi callback dari parent component (App.jsx)
        // untuk menampilkan konfirmasi dan QR code
        onRSVPSuccess(result.data.idUnik);
        alert('You have Regist the Event, Here is your QR code for attend the event');
        // Opsional: Reset form setelah sukses
        setFormData({
            namaLengkap: '',
            email: '',
            jumlahKehadiran: 1,
            permintaanKhusus: ''
        });
      } else {
        // Jika respons dari Apps Script menunjukkan kegagalan (success: false)
        throw new Error(result.message || 'Terjadi kesalahan saat RSVP.');
      }

    } catch (err) {
      console.error('Error submitting RSVP:', err);
      // Tampilkan pesan error yang lebih user-friendly
      setError('Gagal mengirim RSVP: ' + err.message);
    } finally {
      setLoading(false); // Selesai loading, baik sukses maupun gagal
    }
  };

  return (
    <div className="w-lg p-6 bg-white rounded-lg">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="namaLengkap" className="block text-sm font-medium text-gray-700">Full Name</label>
          <input
            type="text"
            id="namaLengkap"
            name="namaLengkap"
            value={formData.namaLengkap}
            onChange={handleChange}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>
        <div>
          <label htmlFor="jumlahKehadiran" className="block text-sm font-medium text-gray-700">Number of Attendees</label>
          <input
            type="number"
            id="jumlahKehadiran"
            name="jumlahKehadiran"
            value={formData.jumlahKehadiran}
            onChange={handleChange}
            min="1"
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>
        <div>
          <label htmlFor="permintaanKhusus" className="block text-sm font-medium text-gray-700">Additional Notes or Requests (optional)</label>
          <textarea
            id="permintaanKhusus"
            name="permintaanKhusus"
            value={formData.permintaanKhusus}
            onChange={handleChange}
            rows="3"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          ></textarea>
        </div>
        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
        <button
          type="submit"
          disabled={loading} // Tombol dinonaktifkan saat loading
          className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#5E0DA0] hover:bg-[#360062] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          {loading ? 'Sending...' : 'Regist RSVP'}
        </button>
      </form>
    </div>
  );
}

export default RSVPForm;