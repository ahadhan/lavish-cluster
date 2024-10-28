'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaLocationArrow } from "react-icons/fa";
import { motion } from 'framer-motion';
import { Parallax } from 'react-parallax';
import '../../app/globals.css';
import Image from 'next/image';
import bannerImg from '../assets/bgImage.jpg';
import logoImg from '../assets/logo.png';
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

// Importing product images
import p1 from '../assets/1.webp';
import p2 from '../assets/2.webp';
import p3 from '../assets/3.webp';

// Content Configuration
const content = {
  logo: {
    src: logoImg,
    alt: "logo",
    className: "invert w-[40%] md:w-[20%] mx-auto mb-8"
  },
  heading: "Effortless Glamour in Every Cluster",
  subheading: "Premium eyelash kits for influencers, makeup artists, and professionals",
  shopButton: {
    text: "Shop Now",
    icon: <FaLocationArrow />,
    className: "flex items-center gap-2 custom-button bg-white text-gray-800 font-poppins font-[600] border-2 border-gray-800 px-4 py-2 rounded-lg transition-colors duration-300 ease-in-out hover:bg-gray-800 hover:text-white"
  },
  animation: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 1, delay: 1 }
  }
};

// Product Configuration
const products = [
  {
    id: 1,
    image: p1,
    alt: "Product 1"
  },
  {
    id: 2,
    image: p2,
    alt: "Product 2"
  },
  {
    id: 3,
    image: p3,
    alt: "Product 3"
  }
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const productImages = products.map(product => product.image);

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
              src={content.logo.src}
              className={content.logo.className}
              alt={content.logo.alt}
            />

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="font-poppins text-3xl md:text-5xl lg:text-6xl font-extrabold mb-4"
            >
              {content.heading}
            </motion.h1>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="text-lg md:text-xl lg:text-2xl mb-8"
            >
              {content.subheading}
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
                aria-label="Previous Slide"
              >
                <IoIosArrowBack />
              </button>

              {/* Image Display */}
              <div className="relative w-60 h-60 md:w-72 md:h-72 lg:w-80 lg:h-80 overflow-hidden rounded-lg shadow-lg">
                <Image
                  src={products[currentSlide].image}
                  alt={products[currentSlide].alt}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Next Button */}
              <button
                onClick={handleNext}
                className="text-white hover:text-gray-400 transition text-2xl"
                aria-label="Next Slide"
              >
                <IoIosArrowForward />
              </button>
            </motion.div>

            {/* Shop Now Button */}
            <motion.div
              initial={content.animation.initial}
              animate={content.animation.animate}
              transition={content.animation.transition}
              className="flex justify-center mt-8"
            >
              <button className={content.shopButton.className}>
                {content.shopButton.text}
                {content.shopButton.icon}
              </button>
            </motion.div>
          </div>
        </div>
      </Parallax>
    </section>
  );
};

export default HeroSection;
