import React from 'react';
import otherLogo from '../assets/other.png'; // Impor logo

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-4">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        
        <div className="mb-8 md:mb-0 md:w-1/4 flex justify-center md:justify-start">
          <img 
            src={otherLogo} // Gunakan variabel yang diimpor
            alt="Logo Event" 
            className="h-12" 
          />
        </div>

        <div className="text-center md:w-1/2 mb-8 md:mb-0">
          <p className="text-sm leading-relaxed">© {new Date().getFullYear()} Nutricarevent. All Rights Reserved.</p>
        </div>

        <div className="flex justify-center md:justify-end space-x-6 md:w-1/4">
          <a 
            href="https://facebook.com/your-event-page" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-gray-400 hover:text-blue-500 transition-colors duration-300 text-lg"
            aria-label="Facebook"
          >
            <i className="fab fa-facebook-f"></i> Facebook
          </a>
          <a 
            href="https://instagram.com/your-event-account" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-gray-400 hover:text-pink-500 transition-colors duration-300 text-lg"
            aria-label="Instagram"
          >
            <i className="fab fa-instagram"></i> Instagram
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;