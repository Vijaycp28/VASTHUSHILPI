import React from 'react';
import { FaUsers, FaCheckCircle } from 'react-icons/fa';
import { motion } from 'framer-motion';
import home from '../assets/home.png';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="relative text-white py-20 px-4 md:px-8 lg:px-12 xl:px-20 overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={home}
          alt="Vasthu Home"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto  pt-28 md:pt-32">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
          Align Your Space with <p className="text-yellow-400">Positive Energy</p>
        </h1>
        <p className="text-base sm:text-lg md:text-xl mb-6 max-w-2xl leading-relaxed">
          Transform your home and life with ancient Vasthu wisdom combined with modern design principles.
        </p>

        <ul className="mb-8 space-y-2 text-sm sm:text-base">
          <li>✔ Vasthu-based Planning, Correction & Consultation</li>
          <li>✔ Create harmony between your space and cosmic energies</li>
        </ul>

        {/* Buttons */}
        <div className="flex flex-wrap gap-4 mb-10">
          <a
                    href="https://wa.me/9744611903"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-white bg-green-600 hover:bg-green-700 px-3 py-1 rounded-3xl"
                  >
                 Get a Free Consultation
                  </a>
          <Link to='/about' className="bg-white text-green-600 border border-green-600 px-6 py-3 rounded-full font-semibold hover:bg-green-50 transition">
            Learn More
          </Link>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 sm:grid-cols-3 gap-6 text-center">
          <motion.div whileHover={{ scale: 1.05 }} className="transition">
            <FaUsers className="text-3xl sm:text-4xl mx-auto text-green-400" />
            <p className="font-bold mt-2 text-sm sm:text-base">1000+<br />Happy Families</p>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} className="transition">
            <FaCheckCircle className="text-3xl sm:text-4xl mx-auto text-green-400" />
            <p className="font-bold mt-2 text-sm sm:text-base">100%<br />Satisfaction Guaranteed</p>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} className="transition">
            <p className="text-3xl sm:text-4xl font-bold text-green-400">35+</p>
            <p className="font-bold mt-2 text-sm sm:text-base">Years Experience</p>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default HeroSection;
