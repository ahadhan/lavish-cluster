import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { db } from '../lib/firebase';
import { doc, getDoc } from 'firebase/firestore';
import bannerImg from '../assets/bgImage.jpg';
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { FaLocationArrow } from "react-icons/fa";
import { motion } from 'framer-motion';
import { Parallax } from 'react-parallax';

const HeroSection = () => {
  const [content, setContent] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const docRef = doc(db, 'heroSection', 'content');
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setContent(docSnap.data());
      } else {
        console.log('No such document!');
      }
    };
    fetchData();
  }, []);

  const handleNext = () => setCurrentSlide((prev) => (prev + 1) % content.productImages.length);
  const handlePrevious = () => setCurrentSlide((prev) => (prev - 1 + content.productImages.length) % content.productImages.length);

  if (!content)
    return (
      <div className="flex items-center justify-center min-h-screen bg-black">
        <div className="spinner"></div>
      </div>
    );

  return (
    <section className="relative text-white">
      <Parallax bgImage={bannerImg.src} bgImageAlt="Hero Background" strength={400}>
        <div className="relative flex items-center justify-center py-28" style={{ minHeight: '600px' }}>
          <div className="content text-center px-6 w-full md:w-3/4 lg:w-2/3">
            <Image src={content.logo} alt="logo" width={100} height={100} className="invert w-[40%] md:w-[20%] mx-auto mb-8" />
            <motion.h1 className="font-poppins text-3xl md:text-5xl lg:text-6xl font-extrabold mb-4">
              {content.heading}
            </motion.h1>
            <motion.p className="text-lg md:text-xl lg:text-2xl mb-8">{content.subheading}</motion.p>
            <div className="carousel flex items-center justify-center gap-4">
              <button onClick={handlePrevious} className="text-white text-2xl">
                <IoIosArrowBack />
              </button>
              <div className="relative w-60 h-60 overflow-hidden rounded-lg">
                <Image src={content.productImages[currentSlide]} alt={`Product ${currentSlide + 1}`} fill className="object-cover" />
              </div>
              <button onClick={handleNext} className="text-white text-2xl">
                <IoIosArrowForward />
              </button>
            </div>

            <button className="mt-10 flex mx-auto items-center gap-2 custom-button bg-white text-gray-800 font-poppins font-[600] border-2 border-gray-800 px-4 py-2 rounded-lg transition-colors duration-300 ease-in-out hover:bg-gray-800 hover:text-white">
              Shop Now <FaLocationArrow />
            </button>
          </div>
        </div>
      </Parallax>
    </section>
  );
};

export default HeroSection;

