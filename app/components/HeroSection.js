'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaLocationArrow } from "react-icons/fa";
import { motion } from 'framer-motion';
import { Parallax } from 'react-parallax';
import '../../app/globals.css';
import Image from 'next/image';
import p1 from '../assets/1.png'; // Product 1 image
import p2 from '../assets/2.png'; // Product 2 image
import p3 from '../assets/3.png'; // Product 3 image
import bannerImg from '../assets/bgImage.jpg';
import logoImg from '../assets/logo.png';
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const productImages = [p1, p2, p3];

  // Function to move to the next slide
  const handleNext = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % productImages.length);
  };

  // Function to move to the previous slide
  const handlePrevious = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + productImages.length) % productImages.length);
  };

  // Automatic slide movement every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext(); // Move to the next slide automatically
    }, 5000); // 5 seconds interval

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative text-white">
      {/* Parallax Background */}
      <Parallax
        bgImage={bannerImg.src}
        bgImageAlt="Hero Background"
        strength={400}
      >
        <div className="relative flex items-center justify-center py-28" style={{ minHeight: '600px' }}>
          <div className="content text-center px-6 w-full md:w-3/4 lg:w-2/3">
            {/* Logo */}
            <Image
              src={logoImg}
              className="invert w-[40%] md:w-[20%] mx-auto mb-8"
              alt="logo"
            />

            {/* Subheading */}
            <motion.h1
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="font-poppins text-3xl md:text-5xl lg:text-6xl font-extrabold mb-4"
            >
              Effortless Glamour in Every Cluster
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="text-lg md:text-xl lg:text-2xl mb-8"
            >
              Premium eyelash kits for influencers, makeup artists, and professionals
            </motion.p>

            {/* Product Carousel */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="carousel flex items-center justify-center gap-4"
            >
              {/* Previous Button */}
              <button
                onClick={handlePrevious}
                className="text-white hover:text-gray-400 transition text-2xl"
              >
                <IoIosArrowBack />
              </button>

              {/* Image Display */}
              <div className="relative w-60 h-60 md:w-72 md:h-72 lg:w-80 lg:h-80 overflow-hidden rounded-lg shadow-lg">
                <Image
                  src={productImages[currentSlide]}
                  alt={`Product ${currentSlide + 1}`}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Next Button */}
              <button
                onClick={handleNext}
                className="text-white hover:text-gray-400 transition text-2xl"
              >
                <IoIosArrowForward />
              </button>
            </motion.div>

            {/* Shop Now Button */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
              className="flex justify-center mt-8"
            >
              <button className="flex items-center gap-2 custom-button bg-white text-gray-800 font-poppins font-[600] border-2 border-gray-800 px-4 py-2 rounded-lg transition-colors duration-300 ease-in-out hover:bg-gray-800 hover:text-white">
                Shop Now
                <FaLocationArrow />
              </button>
            </motion.div>
          </div>
        </div>
      </Parallax>
    </section>
  );
};

export default HeroSection;
