// src/components/QRCodeDisplay.jsx
import React from 'react';
import { QRCodeSVG } from 'qrcode.react'; // Gunakan named export QRCodeSVG

function QRCodeDisplay({ qrCodeValue, onReset }) {
  if (!qrCodeValue) {
    return (
      <div className="text-center text-gray-600">
        QR Code belum tersedia. Silakan isi form RSVP terlebih dahulu.
        <button
          onClick={onReset}
          className="mt-4 px-4 py-2 bg-[#5E0DA0] text-white rounded-md hover:bg-[#360062]"
        >
          Back to Form
        </button>
      </div>
    );
  }

  // URL yang akan dikodekan dalam QR Code
  // Kamu bisa memilih untuk hanya mengkodekan ID_Unik saja,
  // atau membuat URL yang mengarah ke halaman konfirmasi yang berisi ID_Unik
  // Untuk tujuan check-in, cukup ID_Unik.
  const qrData = qrCodeValue;

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg text-center">
      <h2 className="text-3xl font-bold text-gray-800 mb-4">Here is your QR Attending</h2>
      <p className="text-gray-700 mb-6">
        Thank you for your RSVP. Please show this QR Code upon arrival.
      </p>
      <div className="flex justify-center mb-6 p-2 bg-gray-50 rounded-md border border-gray-200">
        <QRCodeSVG
          value={qrData}
          size={256}
          level="H"
          // renderAs="svg" // renderAs tidak perlu lagi karena sudah QRCodeSVG
        />
      </div>
      <p className="text-sm text-gray-500 mb-4 break-words">
        Your Unique ID: <span className="font-mono text-[#5E0DA0]">{qrCodeValue}</span>
      </p>
      <button
        onClick={onReset}
        className="px-6 mx-5 py-3 bg-[#5E0DA0] text-white font-semibold rounded-lg shadow-md hover:bg-[#360062] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      >
        New RSVP
      </button>

       <button
        onClick={onReset}
        className="px-6 py-3 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      >
        Send to WhatsApp
      </button>

    </div>
  );
}

export default QRCodeDisplay;