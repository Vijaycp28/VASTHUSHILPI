// src/pages/AboutPage.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { FaRegHeart, FaRegCompass, FaRegLightbulb, FaHandsHelping, FaStar, FaUsers, FaInfinity } from 'react-icons/fa';

const AboutPage = () => {
  return (
    <div className="font-sans">
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-20 px-6 bg-gray-50 text-center pt-28 md:pt-32"
      >
        <h2 className="text-3xl font-bold text-green-800 mb-2">About Vasthushilpi</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Bridging ancient wisdom with modern living to create spaces that nurture prosperity, health, and happiness
        </p>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-16 px-6 bg-white"
      >
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 grid-cols-2 gap-8 items-start">
          <div>
            <h3 className="text-2xl font-semibold text-green-800 mb-4">Our Mission</h3>
            <p className="text-gray-600 mb-6">
              At Vasthushilpi, we believe that your living space should be more than just a shelter—it should be a sanctuary that supports your well-being, enhances your prosperity, and brings harmony to your life.
            </p>
            <p className="text-gray-600 mb-6">
              Our mission is to make the ancient science of Vasthu accessible to modern families through practical, scientifically-backed solutions that respect both tradition and contemporary lifestyle needs.
            </p>
            <div className="flex gap-10">
              <div className="text-center">
                <p className="text-2xl text-green-800 font-bold">1000+</p>
                <p className="text-sm text-gray-600">Happy Families</p>
              </div>
              <div className="text-center">
                <p className="text-2xl text-green-800 font-bold">35+</p>
                <p className="text-sm text-gray-600">Years Experience</p>
              </div>
            </div>
          </div>

          <div className="bg-green-100 p-6 rounded-xl mt-32 lg:mt-0 md:mt-0">
            <h4 className="text-lg font-semibold text-green-800 mb-4">Our Core Values</h4>
            <ul className="space-y-4 text-lg text-green-800">
              <li className="flex items-center gap-3 "><FaHandsHelping className="text-green-600" /> Compassionate guidance for every family</li>
              <li className="flex items-center gap-3"><FaStar className="text-green-600" /> Excellence in traditional wisdom</li>
              <li className="flex items-center gap-3"><FaUsers className="text-green-600" /> Community-focused approach</li>
              <li className="flex items-center gap-3"><FaInfinity className="text-green-600" /> Timeless solutions for modern problems</li>
            </ul>
          </div>
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-20 px-6 bg-gray-50"
      >
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-2xl font-semibold text-green-800 mb-6">Why Choose Vasthushilpi?</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div className="bg-white shadow-md p-6 rounded-xl">
              <FaRegCompass className="text-3xl mx-auto text-green-600 mb-4" />
              <h4 className="font-semibold text-green-800 mb-2">Proven Results</h4>
              <p className="text-sm text-gray-600">
                Our track record of 1000+ successful transformations speaks for our expertise and commitment to excellence.
              </p>
            </div>
            <div className="bg-white shadow-md p-6 rounded-xl">
              <FaRegHeart className="text-3xl mx-auto text-green-600 mb-4" />
              <h4 className="font-semibold text-green-800 mb-2">Personal Approach</h4>
              <p className="text-sm text-gray-600">
                Every consultation is tailored to your unique needs, lifestyle, and goals for a truly personalized experience.
              </p>
            </div>
            <div className="bg-white shadow-md p-6 rounded-xl">
              <FaRegLightbulb className="text-3xl mx-auto text-green-600 mb-4" />
              <h4 className="font-semibold text-green-800 mb-2">Ongoing Support</h4>
              <p className="text-sm text-gray-600">
                We provide continuous guidance and support throughout your journey to ensure lasting positive changes.
              </p>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default AboutPage;