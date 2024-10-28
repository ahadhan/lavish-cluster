'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube, FaTiktok } from 'react-icons/fa';
import hero from '../assets/hero.webp';
import AjImg from '../assets/Aj.webp';
import logoImg from '../assets/logo.png';
import '../../app/globals.css';
import { MdSlowMotionVideo } from "react-icons/md";

// Configuration Object for Headings and Social Media Marquee
const aboutContent = {
  welcomeLine: "Welcome to your new partner to help you in your self-care routine",
  logo: {
    src: logoImg,
    alt: "logo",
    className: "invert w-[60%] md:w-[30%]",
  },
  sections: [
    {
      id: 1,
      title: "Our Mission",
      subtitle: '"At Lavish Clusters, we believe that luxury should be effortless."',
      founder: "Founded by Ade Jones",
      description: "Our mission is to empower beauty lovers with premium, easy-to-use lash kits that bring salon-quality results to your home...",
      buttonText: "Watch Our Story",
    },
    {
      id: 2,
      title: "Meet Aj,",
      subtitle: "Founder of Lavish Clusters",
      description: "I’m Aj, a 33-year-old beauty enthusiast with a lifelong passion for helping others feel glamorous...",
      blockquote: '"Lavish Clusters represents more than just lashes—it\'s about empowerment..."',
    },
  ],
  socialMediaMarquee: {
    text: "Follow me on:",
    links: [
      {
        href: "https://facebook.com",
        icon: <FaFacebookF className="icon mr-2" />,
        label: "Facebook",
      },
      {
        href: "https://instagram.com",
        icon: <FaInstagram className="icon mr-2" />,
        label: "Instagram",
      },
      {
        href: "https://twitter.com",
        icon: <FaTwitter className="icon mr-2" />,
        label: "Twitter",
      },
      {
        href: "https://youtube.com",
        icon: <FaYoutube className="icon mr-2" />,
        label: "Youtube",
      },
    ],
  },
};

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-gradient-bottom-to-top">
      <div className="container mx-auto px-4">
        {/* Welcome Line */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className='welcome-line text-center text-white text-lg md:text-xl mb-10'
        >
          {aboutContent.welcomeLine}
        </motion.div>

        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="flex justify-center mb-16"
        >
          <Image 
            src={aboutContent.logo.src}
            className={aboutContent.logo.className}
            alt={aboutContent.logo.alt}
          />
        </motion.div>
        
        {/* First Section: Image Left, Text Right */}
        <div className='flex flex-col md:flex-row gap-10 items-center justify-between'>
          {/* Left Side: Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="relative w-full md:w-1/2 h-[300px] md:h-[400px] flex justify-center overflow-hidden"
          >
            <div className="w-[70%] h-[90%] bg-gray-400 relative rounded-lg shadow-lg">
              <div className="w-full h-full absolute -top-2 -left-2 z-10">
                <Image
                  src={hero}
                  alt="Lavish Clusters Eyelash Kits"
                  fill
                  style={{ objectFit: 'cover' }}
                  className="rounded-lg"
                />
              </div>
            </div>
          </motion.div>

          {/* Right Side: Text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="w-full md:w-1/2 space-y-6 px-4"
          >
            <h2 className="text-3xl md:text-4xl font-extrabold mb-2 text-gray-100">
              {aboutContent.sections[0].title}
            </h2>
            <h3 className="text-lg md:text-xl text-gray-100 italic">
              {aboutContent.sections[0].subtitle}
            </h3>
            <p className="text-sm md:text-md text-gray-100 text-right italic mb-4">
              {aboutContent.sections[0].founder}
            </p>
            <blockquote className="text-md md:text-lg text-gray-100 border-l-4 border-gray-700 pl-4">
              {aboutContent.sections[0].description}
            </blockquote>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gray-100 text-gray-800 border-2 border-gray-900 hover:border-gray-100 font-semibold py-3 px-4 rounded-full hover:bg-gray-800 hover:text-white transition duration-300 flex items-center gap-2"
            >
              <MdSlowMotionVideo className='text-xl' />
              {aboutContent.sections[0].buttonText}
            </motion.button>
          </motion.div>
        </div>

        {/* Social Media Marquee */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="marquee my-10 bg-transparent"
        >
          <div className="marquee-content flex gap-4 justify-center items-center">
            <span className='font-libre italic text-white font-bold'>{aboutContent.socialMediaMarquee.text}</span>
            {aboutContent.socialMediaMarquee.links.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link flex text-white items-center"
              >
                {link.icon}
                <span>{link.label}</span>
              </a>
            ))}
          </div>
        </motion.div>

        {/* Second Section: Image Right, Text Left */}
        <div className="container mx-auto flex flex-col md:flex-row-reverse gap-10 items-center py-2">
          {/* Right Side: Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="relative w-full md:w-1/2 h-[300px] md:h-[400px] flex justify-center overflow-hidden"
          >
            <div className="w-[70%] h-[90%] bg-gray-400 relative rounded-lg shadow-lg">
              <div className="w-full h-full absolute -top-2 -left-2 z-10">
                <Image
                  src={AjImg}
                  alt="Lavish Clusters Founder"
                  fill
                  style={{ objectFit: 'cover', objectPosition: 'top' }}
                  className="rounded-lg"
                />
              </div>
            </div>
          </motion.div>

          {/* Left Side: Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="w-full md:w-1/2 space-y-6 px-4"
          >
            <h2 className="text-3xl md:text-4xl font-extrabold mb-2 text-gray-100">
              {aboutContent.sections[1].title}
            </h2>
            <h3 className="text-xl md:text-2xl font-bold mb-4 text-gray-100 italic">
              {aboutContent.sections[1].subtitle}
            </h3>
            <p className="text-sm md:text-lg text-gray-100">
              {aboutContent.sections[1].description}
            </p>
            {aboutContent.sections[1].blockquote && (
              <blockquote className="text-md md:text-lg text-gray-100 border-l-4 border-gray-800 pl-4 italic">
                {aboutContent.sections[1].blockquote}
              </blockquote>
            )}
            {aboutContent.sections[1].socialLinks && (
              <div className="flex gap-4 mt-6 text-gray-100">
                <p>Follow on:</p>
                {aboutContent.sections[1].socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
