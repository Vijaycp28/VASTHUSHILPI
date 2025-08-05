// src/pages/ContactPage.jsx
import React, { useRef,useState  } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock, FaWhatsapp } from 'react-icons/fa';
 
const ContactPage = () => {
  const form = useRef();
  const [successMessage, setSuccessMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_y9h7rxh', // Your EmailJS service ID
        'template_ni2ceqf', // Your EmailJS template ID
        form.current,
        '_FSmWKbU9mgBvkff5'  // Your EmailJS public key
      )
      .then(
        (result) => {
          console.log("SUCCESS!", result.text);
          setSuccessMessage("Message sent successfully!");
          e.target.reset(); // Clear form

          // Optional: clear message after 5 seconds
          setTimeout(() => {
            setSuccessMessage("");
          }, 5000);
        },
        (error) => {
          console.log("FAILED...", error.text);
          alert("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <div className="font-sans px-6 py-16 bg-gray-50 pt-28 md:pt-32">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-green-800">Contact Us</h2>
        <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
          Ready to transform your space? Get in touch with our Vasthu experts today
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 mb-16">
        {/* Left: Form */}
            <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white p-8 rounded-xl shadow-lg"
        >
          <h3 className="text-xl font-bold text-green-800 mb-6">Send us a Message</h3>


          <form ref={form} onSubmit={sendEmail} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="from_name"
                placeholder="Full Name *"
                className="border border-gray-300 px-4 py-2 rounded w-full"
                required
              />
              <input
                type="text"
                name="from_number"
                placeholder="Phone Number *"
                className="border border-gray-300 px-4 py-2 rounded w-full"
                required
              />
            </div>
            <input
              type="email"
              name="from_email"
              placeholder="Email Address *"
              className="border border-gray-300 px-4 py-2 rounded w-full"
              required
            />
            <select
              name="service"
              className="border border-gray-300 px-4 py-2 rounded w-full"
              required
            >
              <option value="" >Select a service</option>
              <option value="Vasthu Consulting">Vasthu Consulting</option>
              <option value="Vasthu Based Plan">Vasthu Based Plan</option>
              <option value="Plan Correction">Plan Correction</option>
              <option value="Vasthu Correction">Vasthu Correction</option>
            </select>
            <textarea
              name="message"
              placeholder="Message *"
              rows="4"
              className="border border-gray-300 px-4 py-2 rounded w-full"
              required
            ></textarea>
            <button
              type="submit"
              className="w-full cursor-pointer bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition duration-300"
            >
              Send Message
            </button>
            
          {/* Success Message */}
          {successMessage && (
            <div className="mb-4 text-green-700 bg-green-100 px-4 py-2 rounded border border-green-300">
              {successMessage}
            </div>
          )}
          </form>
        </motion.div>

        {/* Right: Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white p-8 rounded-xl shadow-lg"
        >
          <h3 className="text-xl font-bold text-green-800 mb-6">Get in Touch</h3>
          <ul className="space-y-6 text-gray-700 text-sm">
            <li className="flex items-start gap-4">
              <FaPhoneAlt className="text-green-600 mt-1" />
              <div>
                <p className="font-semibold">Phone</p>
                <p><a href="tel:+919744611903">+91 97446 11903</a></p>
                <p><a href="tel:+919947639033">+91 99476 39033</a></p>
                <p><a href="tel:+918547757903">+91 85477 57903</a></p>
                <p>Available 9 AM - 7 PM (Mon–Sat)</p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <FaEnvelope className="text-green-600 mt-1" />
              <div>
                <p className="font-semibold">Email</p>
                <p><a href="mailto:cpmohandas765@gmail.com">cpmohandas765@gmail.com</a> </p>
              
                <p>We'll respond within 24 hours</p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <FaMapMarkerAlt className="text-green-600 mt-1" />
              <div>
                <p className="font-semibold">Office</p>
                <p>Near Icons Hospital Kavalappar Shoranur</p>
                <p>PIN : 679523</p>
                <p>By appointment only</p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <FaClock className="text-green-600 mt-1" />
              <div>
                <p className="font-semibold">Business Hours</p>
                <p>Monday - Saturday: 9:00 AM – 7:00 PM</p>
                <p>Sunday: By appointment</p>
              </div>
            </li>
            <li className="flex items-start gap-4 bg-green-50 p-4 rounded-lg">
              <FaWhatsapp className="text-green-600 mt-1" />
              <div>
                <p className="font-semibold">Quick WhatsApp Chat</p>
                <p>Get instant responses to your queries</p>
                <button className="mt-2 bg-green-600 text-white px-4 py-1 rounded hover:bg-green-700"> 
                         <a
            href="https://wa.me/9947639033"
            target="_blank"
            rel="noopener noreferrer" 
            >Chat Now</a></button>
              </div>
            </li>
          </ul>
        </motion.div>
      </div>

<div className="bg-white py-12 px-4 rounded-xl shadow-md text-center">
  <h3 className="text-lg font-semibold mb-4 text-green-700">Our Location</h3>
  
  {/* Google Maps Embed */}
  <div className="w-full max-w-3xl mx-auto h-64 rounded-lg overflow-hidden">
    <iframe
      title="Google Map"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.588995771305!2d76.29192157408734!3d10.766125159385576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba7dbf4efedab63%3A0x1d86c3388563454f!2sVasthushilpi%20Design%26Interior!5e0!3m2!1sen!2sin!4v1753946867095!5m2!1sen!2sin"
      width="100%"
      height="100%"
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  </div>

  <p className="font-semibold text-green-800 mt-4">
  Near Icons road, Shoranur, Kerala 679523
  </p>
</div>

    </div>
  );
};

export default ContactPage;
