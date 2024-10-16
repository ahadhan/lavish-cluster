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
          Welcome to your new partner to help you in your self-care routine
        </motion.div>

        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="flex justify-center mb-16"
        >
          <Image 
            src={logoImg}
            className="invert w-[60%] md:w-[30%]"
            alt='logo'
          />
        </motion.div>
        
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
              Our Mission
            </h2>
            <h3 className="text-lg md:text-xl text-gray-100 italic">
              "At Lavish Clusters, we believe that luxury should be effortless."
            </h3>
            <p className="text-sm md:text-md text-gray-100 text-right italic mb-4">
              Founded by Ade Jones
            </p>
            <blockquote className="text-md md:text-lg text-gray-100 border-l-4 border-gray-700 pl-4">
              Our mission is to empower beauty lovers with premium, easy-to-use lash kits that bring salon-quality results to your home...
            </blockquote>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gray-100 text-gray-800 border-2 border-gray-900 hover:border-gray-100 font-semibold py-3 px-4 rounded-full hover:bg-gray-800 hover:text-white transition duration-300 flex items-center gap-2"
            >
              <MdSlowMotionVideo className='text-xl' />
              Watch Our Story
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
            <span className='font-libre italic text-white font-bold'>Follow me on:</span>
            <a href="https://facebook.com" target="_blank" className="social-link flex text-white items-center">
              <FaFacebookF className="icon mr-2" />
              <span>Facebook</span>
            </a>
            <a href="https://instagram.com" target="_blank" className="social-link flex text-white items-center">
              <FaInstagram className="icon mr-2" />
              <span>Instagram</span>
            </a>
            <a href="https://twitter.com" target="_blank" className="social-link flex text-white items-center">
              <FaTwitter className="icon mr-2" />
              <span>Twitter</span>
            </a>
            <a href="https://youtube.com" target="_blank" className="social-link flex text-white items-center">
              <FaYoutube className="icon mr-2" />
              <span>Youtube</span>
            </a>
          </div>
        </motion.div>

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
                  alt="Lavish Clusters Eyelash Kits"
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
              Meet Aj,
            </h2>
            <h3 className="text-xl md:text-2xl font-bold mb-4 text-gray-100 italic">
              Founder of Lavish Clusters
            </h3>
            <p className="text-sm md:text-lg text-gray-100">
              I’m Aj, a 33-year-old beauty enthusiast with a lifelong passion for helping others feel glamorous...
            </p>
            <blockquote className="text-md md:text-lg text-gray-100 border-l-4 border-gray-800 pl-4 italic">
              "Lavish Clusters represents more than just lashes—it's about empowerment..."
            </blockquote>
            <div className="flex gap-4 mt-6 text-gray-100">
              <p>Follow on:</p>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="text-2xl hover:text-gray-500 transition duration-300" />
              </a>
              <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
                <FaYoutube className="text-2xl hover:text-gray-500 transition duration-300" />
              </a>
              <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer">
                <FaTiktok className="text-2xl hover:text-gray-500 transition duration-300" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
