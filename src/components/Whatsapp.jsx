import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

function Whatsapp() {
  return (
    <div className="fixed bottom-4 right-4 z-50">
      {/* WhatsApp button */}
      <a
        href="https://wa.me/9744611903"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 text-white bg-green-600 hover:bg-green-700 px-4 py-2 rounded-full shadow-lg text-sm"
      >
        <FaWhatsapp className="text-white text-lg" />
        WhatsApp
      </a>
    </div>
  );
}

export default Whatsapp;
