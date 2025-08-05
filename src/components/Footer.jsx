import React from 'react';
import { FaInstagram, FaYoutube, FaWhatsapp } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-green-900 text-white py-10 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {/* Brand and Social Icons */}
        <div>
          <h4 className="text-xl font-bold mb-2">Vasthushilpi</h4>
          <p className="text-sm">
            Transforming lives through ancient Vasthu wisdom and modern architectural principles. 
            Create harmony in your space and prosperity in your life.
          </p>
          <div className="flex gap-4 mt-4 text-xl">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="hover:text-green-300 transition" />
            </a>
            <a href="https://wa.me/9744611903" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp className="hover:text-green-300 transition" />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
              <FaYoutube className="hover:text-green-300 transition" />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-2">Quick Links</h4>
          <ul className="text-sm space-y-1">
            <li><Link to="/" className="hover:text-green-300">Home</Link></li>
            <li><Link to="/about" className="hover:text-green-300">About Us</Link></li>
            <li><Link to="/services" className="hover:text-green-300">Services</Link></li>
            <li><Link to="/contact" className="hover:text-green-300">Contact</Link></li>
          </ul>
        </div>

        {/* Services List */}
        <div>
          <h4 className="text-lg font-semibold mb-2">Our Services</h4>
          <ul className="text-sm space-y-1">
            <li>Vasthu Consulting</li>
            <li>Vasthu Based Plan</li>
            <li>Plan Correction</li>
            <li>Vasthu Correction</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-semibold mb-2">Contact Us</h4>
          <p className="text-sm">
            <a href="tel:+919744611903" className="hover:text-green-300 block">+91 9744611903</a>
            <a href="mailto:cpmohandas765@gmail.com" className="hover:text-green-300 block">cpmohandas765@gmail.com</a>
            Near Icons Road, Shoranur, Kerala 679523
          </p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-green-700 mt-8 pt-4 text-center text-sm text-green-300">
        © 2024 Vasthushilpi. All rights reserved. | 
        <span className="underline ml-1 cursor-pointer hover:text-white">Privacy Policy</span> | 
        <span className="underline ml-1 cursor-pointer hover:text-white">Terms of Service</span>
      </div>
    </footer>
  );
};

export default Footer;
