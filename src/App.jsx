// src/App.jsx
import React, { useState } from "react";
// Pastikan jalur import komponen sudah benar, mengarah ke folder 'component'
import RSVPForm from "./component/RSVPForm";
import QRCodeDisplay from "./component/QRCodeDisplay";
import Countdown from "./component/Countdown";
import Footer from "./component/Footer";
import { BiCalendar, BiTime } from "react-icons/bi";
import EventGallery from "./component/EventGallery";

function App() {
  // State untuk menyimpan ID unik QR code setelah RSVP berhasil
  const [qrCodeId, setQrCodeId] = useState(null);

  // Fungsi yang dipanggil dari RSVPForm setelah berhasil submit
  const handleRSVPSuccess = (idUnik) => {
    setQrCodeId(idUnik);
  };

  // Fungsi untuk mereset tampilan dan kembali ke formulir
  const handleReset = () => {
    setQrCodeId(null);
  };

  // PENTING: GANTI TANGGAL DAN WAKTU EVENT-MU DI SINI!
  const eventDateTime = "2025-08-10T14:00:00"; // Contoh: 10 Agustus 2025, jam 2 siang

  const eventName = "SKIN & PLANT CARE 2025";
  const eventDesc =
    "SKIN & PLANT CARE 2025 is a one-day experience that brings together natural skincare lovers and plant enthusiasts in a celebration of beauty, wellness, and sustainability. Join us for a refreshing day filled with interactive workshops, expert talks, and eco-friendly brands — all designed to inspire you to care for your skin and the planet at the same time. Explore nature-powered self-care and grow your green space — inside and out. 🌿💧";
  const eventDateText = "Sunday, August 10, 2025";
  const eventTimeText = "14:00 - Finish";
  const eventLocation = "Grand Ballroom, Jakarta Convention Center";

  return (
    <div className="font-sans leading-relaxed text-gray-800 antialiased bg-gray-100 min-h-screen bg-no-repeat h-screen w-screen bg-cover bg-[url('/src/assets/gradient.gif')]">
      {/* Hero Section */}
      <section 
        className="relative h-screen bg-cover bg-center bg-no-repeat py-24 md:py-36 flex items-center justify-center text-white 
                   bg-[url('/src/assets/bg-bg.png')]"> {/* <-- Gambar latar belakang ditambahkan di sini */}
        <div className="bg-purple-900/30 w-full h-screen  flex items-center justify-center">
          <div className="container mx-auto px-4 text-center">
            <div className="flex justify-center">
              <img
                src="/src/assets/Nutricare.png"
                alt=""
                className="w-70 mb-10 hover:scale-110 ease-in-out transition-transform"
              />
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-lg">
              {eventName}
            </h1>
            <p className="text-lg md:text-2xl drop-shadow-md">
              Where invite you to get ready for unbelievable moment in your
              life!
            </p>

            <a href="#rsvp">
              <button className="bg-[#B13E91] cursor-pointer hover:bg-[#b13e90ca] hover:scale-105 transition-transform hover:shadow-2xl px-5 py-3 text-xl font-bold mt-5 rounded-2xl">
                <p>Regist Now</p>
              </button>
            </a>
          </div>
        </div>
      </section>

      {/* Event description Section */}
      <section className="py-10 px-10 bg-white h-screen">
        <div className="flex items-center justify-center">
          <div>
            <img src="/src/assets/desc.png" className="w-lg" alt="" />
          </div>
          <div className="m-10">
            <h1 className="text-4xl italic mb-2"> What is</h1>
            <h1 className="text-5xl font-bold mb-5 text-[#5E0DA0]">
              {" "}
              SKIN & PLANT CARE?
            </h1>
            <p className="w-2xl text-xl">{eventDesc}</p>
          </div>
        </div>
      </section>

      <EventGallery/>

      {/* Event Details Section */}
      <section className=" bg-white h-screen bg-[url('/src/assets/bg.png')]">
        <div className=" py-16 px-4 bg-[#B13E91]/50 w-full h-screen flex items-center justify-center">
          <div className="w-2xl bg-white text-center p-10 rounded-2xl shadow-2xl">
            <p className="text-xl mb-6 font-bold text-white">
              <span className="bg-[#5E0DA0] rounded-full p-3 w-fit">
                {eventDateText}
              </span>
            </p>
            <p className="text-5xl font-bold mb-3"> {eventLocation}</p>
            <p className="text-2xl">{eventTimeText}</p>
            <div className="mt-6 mb-4 rounded-lg overflow-hidden shadow-lg border border-gray-200">
              {/* GANTI KODE IFRAME DI BAWAH INI DENGAN KODE YANG KAMU SALIN DARI GOOGLE MAPS */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.3713966704345!2d106.80492447499036!3d-6.214653493773262!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f6adbd77af01%3A0x23abed373d7987d2!2sJakarta%20Convention%20Center!5e0!3m2!1sen!2sid!4v1753769411488!5m2!1sen!2sid"
                width="100%" // Sesuaikan lebar
                height="350" // Sesuaikan tinggi map
                style={{ border: 0 }}
                allowFullScreen="true"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Lokasi Event"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Countdown Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          {/* Komponen Countdown akan diletakkan di sini */}
          <Countdown eventDate={eventDateTime} />
        </div>
      </section>

      {/* RSVP Section: Formulir RSVP dan Tampilan QR Code */}
      <section id="rsvp" className="py-16 bg-white">
        <div className="container mx-auto flex">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-3 text-gray-800">
              REGIST YOURSELF!
            </h2>
            <p className="text-lg text-gray-600">
              Let us know you're coming and get your exclusive QR Code.
            </p>
          </div>

          <div className=" mx-auto bg-white rounded-lg shadow-lg">
            {" "}
            {/* Wrapper untuk form/QR */}
            {qrCodeId ? (
              // Jika qrCodeId ada, tampilkan QR Code
              <QRCodeDisplay qrCodeValue={qrCodeId} onReset={handleReset} />
            ) : (
              // Jika belum ada, tampilkan formulir RSVP
              <RSVPForm onRSVPSuccess={handleRSVPSuccess} />
            )}
          </div>
        </div>
      </section>

      {/* Footer Section */}
      {/* Komponen Footer akan diletakkan di sini */}
      <Footer />
    </div>
  );
}

export default App;
