// src/pages/ServicesPage.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { FaCheckCircle, FaClock, FaMoneyBillWave } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const services = [
  {
    title: 'Vasthu Consulting',
    subtitle: 'Complete Space Analysis & Guidance',
    description: 'Comprehensive analysis of your existing space using traditional Vasthu principles combined with modern insights for optimal energy flow and harmony.',
    duration: '1–3 hours',
    investment: 'Starting from ₹5,000',
    includes: [
      'Detailed site analysis and energy assessment',
      'Directional guidance and element balancing',
      'Personalized recommendations report',
      'Follow-up consultation call',
      'Digital floor plan with corrections',
      'Remedial solutions for immediate improvements'
    ],
    process: [
      'Initial consultation and requirement analysis',
      'On-site visit and energy assessment',
      'Detailed report preparation',
      'Presentation of findings and recommendations'
    ]
  },
  {
    title: 'Vasthu Based Plan',
    subtitle: 'Sacred Architecture for New Constructions',
    description: 'Custom architectural planning incorporating ancient Vasthu guidelines from foundation to finishing for new constructions that align with cosmic energies.',
    duration: '1–2 weeks',
    investment: 'Starting from ₹15,000',
    includes: [
      'Complete floor planning with Vasthu principles',
      'Room positioning and size optimization',
      'Element balance and energy flow design',
      'Sacred geometry integration',
      'Material and color recommendations',
      'Construction phase guidance'
    ],
    process: [
      'Site analysis and energy mapping',
      'Initial design concepts and layouts',
      'Detailed architectural drawings',
      'Final plan approval and handover'
    ]
  },
  {
    title: 'Plan Correction',
    subtitle: 'Optimize Existing Architectural Plans',
    description: 'Modify and enhance existing building plans to align with Vasthu principles while maintaining functionality, aesthetics, and structural integrity.',
    duration: '3–5 days',
    investment: 'Starting from ₹8,000',
    includes: [
      'Comprehensive plan review and analysis',
      'Specific correction suggestions',
      'Alternative layout options',
      'Implementation guidance',
      'Cost-effective modification strategies',
      'Detailed correction documentation'
    ],
    process: [
      'Plan submission and initial review',
      'Detailed analysis and correction planning',
      'Revised plan creation',
      'Final delivery with implementation support'
    ]
  },
  {
    title: 'Vasthu Correction',
    subtitle: 'Transform Existing Spaces',
    description: 'On-site remedies and corrections for existing spaces to enhance positive energy and harmony without requiring major renovations or structural changes.',
    duration: '1–3 hours',
    investment: 'Starting from ₹12,000',
    includes: [
      'Complete site visit and energy audit',
      'Immediate remedy implementations',
      'Energy balancing techniques',
      'Placement corrections and adjustments',
      'Follow-up support for 3 months',
      'Maintenance and care instructions'
    ],
    process: [
      'Detailed space assessment',
      'Identification of energy blocks',
      'Implementation of corrections',
      'Energy activation and blessing'
    ]
  }
];

const ServiceCard = ({ service }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
    className="bg-white p-6 rounded-xl shadow-md "
  >
    <h3 className="text-xl font-bold text-green-800 ">{service.title}</h3>
    <p className="text-sm text-green-600 mb-2">{service.subtitle}</p>
    <p className="text-gray-600 mb-4">{service.description}</p>
    {/* <div className="flex flex-wrap gap-6 mb-4">
      <div className="flex items-center gap-2">
        <FaClock className="text-green-600" />
        <div>
          <p className="text-sm text-gray-600">Duration</p>
          <p className="font-medium">{service.duration}</p>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <FaMoneyBillWave className="text-green-600" />
        <div>
          <p className="text-sm text-gray-600">Investment</p>
          <p className="font-medium">{service.investment}</p>
        </div>
      </div>
    </div> */}
    <div className="mb-4">
      <h4 className="font-semibold text-green-700 mb-2">What's Included</h4>
      <ul className="space-y-1 text-sm text-gray-700">
        {service.includes.map((item, idx) => (
          <li key={idx} className="flex items-start gap-2"><FaCheckCircle className="text-green-500 mt-1" />{item}</li>
        ))}
      </ul>
    </div>
    <div>
      <h4 className="font-semibold text-green-700 mb-2">Our Process</h4>
      <ol className="list-decimal list-inside text-sm text-gray-700 space-y-1 mb-4">
        {service.process.map((step, idx) => (
          <li key={idx}>{step}</li>
        ))}
      </ol>
    </div>
    <Link to='/contact' className="mt-10 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
      Book This Service
    </Link>
  </motion.div>
);

const ServicesPage = () => {
  return (
    <div className="font-sans px-6 py-16 bg-gray-50 pt-28 md:pt-32">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-green-800">Our Vasthu Services</h2>
        <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
          Comprehensive Vasthu solutions designed to bring harmony, prosperity, and positive energy into your life
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {services.map((service, index) => (
          <ServiceCard key={index} service={service} />
        ))}
      </div>

      <div className="text-center mt-16">
        <h3 className="text-xl font-semibold text-green-800 mb-4">Ready to Transform Your Space?</h3>
        <p className="text-gray-600 max-w-xl mx-auto mb-6">
          Choose the service that best fits your needs, or let our experts guide you to the perfect solution
        </p>
        <div className="flex justify-center gap-4">
          <button  className="bg-green-600 text-white px-5 py-2 rounded hover:bg-green-700">
             <a
            href="https://wa.me/9947639033"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-white bg-green-600 hover:bg-green-700 px-3 py-1 rounded"
          >Get Free Consultation</a>
            </button>
          
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
