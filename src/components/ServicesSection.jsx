import React from 'react';
import { motion } from 'framer-motion';
import { FaCheckCircle } from 'react-icons/fa';
import { MdOutlineLocationOn } from 'react-icons/md';
import { GiArchitectMask } from 'react-icons/gi';
import { Link } from 'react-router-dom';

const services = [
  {
    title: 'Vasthu Consulting',
    description: [
      'Site Analysis',
      'Energy Assessment',
      'Directional Guidance',
      'Personalized Report'
    ],
    price: '₹5,000',
    icon: <MdOutlineLocationOn className="text-3xl text-green-600" />,
  },
   {
    title: 'Plan Correction',
    description: [
      'Plan Review',
      'Correction Suggestions',
      'Alternative Layouts',
      'Implementation Guide'
    ],
    price: '₹8,000',
    icon: <FaCheckCircle className="text-3xl text-green-600" />,
  },
  {
    title: 'Vasthu Based Plan',
    description: [
      'Floor Planning',
      'Room Positioning',
      'Element Balance',
      'Sacred Geometry'
    ],
    price: '₹15,000',
    icon: <GiArchitectMask className="text-3xl text-green-600" />,
  },
 
  {
    title: 'Vasthu Correction',
    description: [
      'Site Visit',
      'Energy Balancing',
      'Remedy Solutions',
      'Follow-up Support'
    ],
    price: '₹12,000',
    icon: <FaCheckCircle className="text-3xl text-green-600" />,
  },
];

const ServicesSection = () => {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 40 }} 
      whileInView={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="bg-white py-20 px-6"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4 text-green-800">Our Vasthu Services</h2>
        <p className="text-center mb-12 text-gray-600 max-w-3xl mx-auto">
          Transform your space with our comprehensive Vasthu solutions designed to bring harmony, prosperity, and positive energy into your life.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white shadow-xl rounded-2xl p-6  hover:shadow-2xl transition-all duration-300"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-lg font-semibold mb-2 text-green-800">{service.title}</h3>
              <ul className="text-sm text-gray-600 mb-4 space-y-1">
                {service.description.map((item, i) => <li key={i}>• {item}</li>)}
              </ul>
              {/* <p className="text-green-700 font-semibold mb-3">Starting from {service.price}</p> */}
              <Link to='/contact' className="text-sm bg-green-600 text-white px-4 py-2 rounded-full hover:bg-green-700 transition">
                Get Service →
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default ServicesSection;
