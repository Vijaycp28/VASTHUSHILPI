// components/Navbar.jsx
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaWhatsapp } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 w-full bg-white shadow-md px-6 py-4 z-50">
      {/* Top bar: logo center, WhatsApp right */}
      <div className="max-w-7xl mx-auto flex items-center justify-between relative">
        {/* Spacer for alignment */}
        <div className="w-8 md:w-12" />

        {/* Centered logo */}
        <Link
          to="/"
          className="absolute left-1/2 transform -translate-x-1/2 text-2xl font-bold text-green-500"
        >
          Vasthushilpi
        </Link>

        {/* WhatsApp button */}
        <a
          href="https://wa.me/9744611903"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 text-white bg-green-600 hover:bg-green-700 px-3 py-1 rounded text-sm"
        >
          <FaWhatsapp className="text-white" /> WhatsApp
        </a>
        
      </div>
      

      {/* Navigation links */}
      <div className="mt-4 flex justify-center gap-6 text-sm font-medium">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? 'text-green-500 font-semibold'
              : 'text-gray-600 hover:text-green-600 transition'
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive
              ? 'text-green-500 font-semibold'
              : 'text-gray-600 hover:text-green-600 transition'
          }
        >
          About
        </NavLink>
        <NavLink
          to="/services"
          className={({ isActive }) =>
            isActive
              ? 'text-green-500 font-semibold'
              : 'text-gray-600 hover:text-green-600 transition'
          }
        >
          Services
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive
              ? 'text-green-500 font-semibold'
              : 'text-gray-600 hover:text-green-600 transition'
          }
        >
          Contact
        </NavLink>
      </div>
      
    </nav>
  );
};

export default Navbar;
