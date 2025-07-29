// src/component/EventGallery.jsx
import React from 'react';

// Data placeholder untuk galeri event sebelumnya
const previousEvents = [
  {
    id: 1,
    image: '/src/assets/1.jpeg', // Ganti dengan URL gambar asli
    title: 'The Sephoria 2021',
    description: 'Momen tak terlupakan dari pembukaan tahun lalu.',
    date: '2024-08-15',
  },
  {
    id: 2,
    image: '/src/assets/2.jpeg', // Ganti dengan URL gambar asli
    title: 'SKIN & PLANT CARE 2022',
    description: 'Menjelajahi teknologi terbaru dan ide-ide brilian.',
    date: '2024-09-22',
  },
  {
    id: 3,
    image: '/src/assets/3.jpeg', // Ganti dengan URL gambar asli
    title: 'SKIN & PLANT CARE 2023',
    description: 'Diskusi tentang keberlanjutan dan masa depan bumi.',
    date: '2023-11-01',
  },
  {
    id: 4,
    image: '/src/assets/4.jpeg', // Ganti dengan URL gambar asli
    title: 'SKIN & PLANT CARE 2024',
    description: 'Mengembangkan bakat seni dan ekspresi diri.',
    date: '2023-10-10',
  },
];

function EventGallery() {
  return (
    <section className="py-16 px-4 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
          PREVIOUS EVENT GALLERY
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {previousEvents.map((event) => (
            <div key={event.id} className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
              <img 
                src={event.image} 
                alt={event.title} 
                className="w-full h-48 object-cover" 
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{event.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{event.description}</p>
                <p className="text-gray-500 text-xs">Tanggal: {event.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default EventGallery;