import React from 'react';
import { motion, number } from 'framer-motion';
import { FaCalendarAlt, FaRegFileAlt, FaClipboardCheck, FaBolt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const steps = [
  {
    title: 'Schedule',
    description: 'Book a consultation at your convenience. Choose your preferred date, time, and service type. We’ll confirm your appointment within 24 hours.',
    icon: <FaCalendarAlt className="text-3xl text-green-600" />,
    number:1,
  },
  {
    title: 'Share Plan / Visit',
    description: 'Share your building plans or schedule an on-site visit for comprehensive analysis. Our experts will study your space layout, direction, and existing energy patterns.',
    icon: <FaRegFileAlt className="text-3xl text-green-600" />,
    number:2,
  },
  {
    title: 'Review & Correction',
    description: 'Receive detailed analysis with practical recommendations and correction strategies. Get a comprehensive report with actionable solutions tailored to your specific needs.',
    icon: <FaClipboardCheck className="text-3xl text-green-600" />,
    number:3,
  },
  {
    title: 'Energy Aligned',
    description: 'Implement the recommendations and experience transformed energy in your space. Follow our guidance to create a harmonious environment that supports your well-being.',
    icon: <FaBolt className="text-3xl text-green-600" />,
    number:4,
  },
];

const HowItWorks = () => {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 40 }} 
      whileInView={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="bg-white py-20 px-6"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4 text-green-800">How It Works</h2>
        <p className="text-center mb-12 text-gray-600 max-w-3xl mx-auto">
          Our simple 4-step process ensures you get the best Vasthu guidance for your space
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white shadow-lg rounded-2xl p-6   text-center"
            >
              <div className="mb-4 flex justify-between">
                {step.icon} 
                <p className='bg-gray-600 text-white p-2 rounded-b-full'>{step.number}</p>
                </div>
              <h3 className="text-lg font-semibold mb-2 text-green-800">{step.title}</h3>
              <p className="text-sm text-gray-600">{step.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <h3 className="text-xl font-semibold mb-4 text-green-800">Ready to Begin Your Vasthu Journey?</h3>
          <p className="mb-6 text-gray-600 max-w-xl mx-auto">
            Take the first step towards creating a harmonious and prosperous space
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Link to='/contact' className="bg-green-600 hover:bg-green-700 px-6 py-3 rounded-full text-white font-semibold transition">
              Schedule Consultation
            </Link>
            <Link to='/services' className="bg-white text-green-600 border border-green-600 px-6 py-3 rounded-full font-semibold hover:bg-green-50 transition">
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default HowItWorks;