
// 'use client';

// import React, { useState, useEffect } from 'react';
// import Image from 'next/image';
// import Link from 'next/link';
// import { FaChevronRight, FaInstagram, FaYoutube, FaTiktok, FaStar, FaBars, FaTimes } from 'react-icons/fa';
// import { motion } from 'framer-motion';
// import hero from '../assets/hero.webp';
// import p1 from '../assets/p1.webp';
// import p2 from '../assets/p2.webp';
// import p3 from '../assets/p3.webp';
// import p4 from '../assets/p4.webp';
// import '../../app/globals.css';

// const ContactSection = () => {
//   return (
//     <section id="contact" className="py-20 bg-gradient-top-to-bottom text-white">
//       <div className="container mx-auto ">
//         <div className="grid md:grid-cols-2 gap-12">
//           {/* Contact Form */}
//           <motion.div
//             initial={{ opacity: 0, x: -50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 1 }}
//             viewport={{ once: true }}
//           >
//             <h2 className="text-3xl md:text-4xl font-extrabold mb-6 font-libre">Get in Touch</h2>
//             <form className="space-y-6">
//               <div>
//                 <label htmlFor="name" className="block mb-2">
//                   Name
//                 </label>
//                 <input
//                   type="text"
//                   id="name"
//                   className="w-full px-4 py-2 rounded bg-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-gray-600"
//                   placeholder="Your Name"
//                 />
//               </div>
//               <div>
//                 <label htmlFor="email" className="block mb-2">
//                   Email
//                 </label>
//                 <input
//                   type="email"
//                   id="email"
//                   className="w-full px-4 py-2 rounded bg-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-gray-600"
//                   placeholder="your@email.com"
//                 />
//               </div>
//               <div>
//                 <label htmlFor="message" className="block mb-2">
//                   Message
//                 </label>
//                 <textarea
//                   id="message"
//                   rows={4}
//                   className="w-full px-4 py-2 rounded bg-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-gray-600"
//                   placeholder="Your message..."
//                 ></textarea>
//               </div>
//               <motion.button
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 type="submit"
//                 className="bg-white text-gray-900 font-bold py-2 px-6 rounded hover:bg-gray-100 transition duration-200"
//               >
//                 Send Message
//               </motion.button>
//             </form>
//           </motion.div>

//           {/* Connect With Us */}
//           <motion.div
//             initial={{ opacity: 0, x: 50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 1 }}
//             viewport={{ once: true }}
//           >
//             <h2 className="text-3xl md:text-4xl font-extrabold mb-6 font-libre">Connect With Us</h2>
//             <div className="flex space-x-6 mb-8">
//               <motion.a
//                 href="https://instagram.com/lavishclusters"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="bg-white text-gray-900 p-4 rounded-full hover:bg-gray-100 transition transform duration-200"
//                 whileHover={{ scale: 1.1, rotate: 5 }}
//               >
//                 <FaInstagram size={24} />
//               </motion.a>
//               <motion.a
//                 href="https://youtube.com/lavishclusters"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="bg-white text-gray-900 p-4 rounded-full hover:bg-gray-100 transition transform duration-200"
//                 whileHover={{ scale: 1.1, rotate: -5 }}
//               >
//                 <FaYoutube size={24} />
//               </motion.a>
//               <motion.a
//                 href="https://tiktok.com/@lavishclusters"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="bg-white text-gray-900 p-4 rounded-full hover:bg-gray-100 transition transform duration-200"
//                 whileHover={{ scale: 1.1, rotate: 5 }}
//               >
//                 <FaTiktok size={24} />
//               </motion.a>
//             </div>
//             <h3 className="text-xl font-semibold mb-4 font-libre italic">Subscribe to Our Newsletter</h3>
//             <form className="flex">
//               <input
//                 type="email"
//                 className="flex-grow px-4 py-2 rounded-l bg-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-gray-600"
//                 placeholder="your@email.com"
//               />
//               <motion.button
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 type="submit"
//                 className="bg-white text-gray-900 font-bold py-2 px-6 rounded-r hover:bg-gray-100 transition duration-200"
//               >
//                 Subscribe
//               </motion.button>
//             </form>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ContactSection;





'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaInstagram, FaYoutube, FaTiktok } from 'react-icons/fa';
import '../../app/globals.css';

// Configuration Object for Dynamic Content
const contactContent = {
  section: {
    id: 'contact',
  },
  headings: {
    contactForm: 'Get in Touch',
    connectWithUs: 'Connect With Us',
    subscribe: 'Subscribe to Our Newsletter',
  },
  form: {
    name: {
      label: 'Name',
      placeholder: 'Your Name',
    },
    email: {
      label: 'Email',
      placeholder: 'your@email.com',
    },
    message: {
      label: 'Message',
      placeholder: 'Your message...',
    },
    submitButton: {
      text: 'Send Message',
    },
  },
  socialMedia: [
    {
      id: 1,
      platform: 'Instagram',
      href: 'https://instagram.com/lavishclusters',
      icon: <FaInstagram size={24} />,
    },
    {
      id: 2,
      platform: 'YouTube',
      href: 'https://youtube.com/lavishclusters',
      icon: <FaYoutube size={24} />,
    },
    {
      id: 3,
      platform: 'TikTok',
      href: 'https://tiktok.com/@lavishclusters',
      icon: <FaTiktok size={24} />,
    },
  ],
  subscribe: {
    placeholder: 'your@email.com',
    buttonText: 'Subscribe',
  },
};

const ContactSection = () => {
  const { section, headings, form, socialMedia, subscribe } = contactContent;

  return (
    <section id={section.id} className="py-20 bg-gradient-top-to-bottom text-white">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >
            <h2 className="text-3xl md:text-4xl font-extrabold mb-6 font-libre">{headings.contactForm}</h2>
            <form className="space-y-6">
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block mb-2">
                  {form.name.label}
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 rounded bg-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-gray-600"
                  placeholder={form.name.placeholder}
                />
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block mb-2">
                  {form.email.label}
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 rounded bg-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-gray-600"
                  placeholder={form.email.placeholder}
                />
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block mb-2">
                  {form.message.label}
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 rounded bg-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-gray-600"
                  placeholder={form.message.placeholder}
                ></textarea>
              </div>

              {/* Submit Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="bg-white text-gray-900 font-bold py-2 px-6 rounded hover:bg-gray-100 transition duration-200 w-full sm:w-auto"
              >
                {form.submitButton.text}
              </motion.button>
            </form>
          </motion.div>

          {/* Connect With Us */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >
            <h2 className="text-3xl md:text-4xl font-extrabold mb-6 font-libre">{headings.connectWithUs}</h2>
            <div className="flex space-x-6 mb-8 justify-center md:justify-start">
              {socialMedia.map((social) => (
                <motion.a
                  key={social.id}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-gray-900 p-4 rounded-full hover:bg-gray-100 transition transform duration-200"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
            <h3 className="text-xl font-semibold mb-4 font-libre italic text-center md:text-left">
              {headings.subscribe}
            </h3>
            <form className="flex flex-col sm:flex-row">
              <input
                type="email"
                className="flex-grow px-4 py-2 rounded-t sm:rounded-l sm:rounded-r-none bg-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-gray-600"
                placeholder={subscribe.placeholder}
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="bg-white text-gray-900 font-bold py-2 px-6 rounded-b sm:rounded-r hover:bg-gray-100 transition duration-200 mt-2 sm:mt-0"
              >
                {subscribe.buttonText}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
