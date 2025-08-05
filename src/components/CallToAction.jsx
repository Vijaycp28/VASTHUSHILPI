import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const CallToAction = () => {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 40 }} 
      whileInView={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="bg-green-800 text-white py-14 px-6 text-center"
    >
      <h3 className="text-xl font-semibold mb-2">Not sure which service you need?</h3>
      <p className="mb-6 max-w-xl mx-auto">
        Our experts will analyze your specific requirements and recommend the best Vasthu solution for your space and goals.
      </p>
      <Link to='/contact' className="bg-white text-green-800 px-6 py-3 rounded-full font-semibold hover:bg-green-100 transition">
        Get Free Consultation
      </Link>
    </motion.section>
  );
};

export default CallToAction;