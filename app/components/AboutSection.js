'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube, FaTiktok } from 'react-icons/fa'; // Importing icons from react-icons
import hero from '../assets/hero.webp';
import AjImg from '../assets/Aj.webp';
import logoImg from '../assets/logo.png'

import '../../app/globals.css';
import { MdSlowMotionVideo } from "react-icons/md";


const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-gradient-bottom-to-top">
      <div className="container mx-auto  ">
        <div className='welcome-line text-center text-white font-500 text-xl  mb-16'>
          Welcome to your new partner to help you in your self-care routine
        </div>
        
          <Image 
            src={logoImg}
            className={` invert w-[30%] mx-auto mb-32 `}
            alt='logo'
            />
        
        <div className='flex flex-col md:flex-row gap-10 items-center justify-between'>
        {/* Left Side: Image with Reduced Width inside a Full-Width Container */}
        <div
          className="relative w-full md:w-1/2 flex justify-center items-center h-[400px]    overflow-hidden"

        >
          <div className="w-[60%] h-[90%] bg-gray-400 relative   ">

            <div className="w-[100%] h-[100%] absolute -top-4 -left-4 mx-auto z-10">
              <Image
                src={hero}
                alt="Lavish Clusters Eyelash Kits"
                fill
                style={{ objectFit: 'cover' }}
                className=" "
              />
            </div>
          </div>
        </div>

        {/* Right Side: Text with Fixed Half-Screen Width */}
        <div
          className="w-full md:w-1/2 space-y-6 px-4"

        >
          <h2 className="text-4xl font-extrabold mb-4 text-gray-100 font-libre  ">Our Mission</h2>
          <h3 className="text-xl font-extrabold text-gray-100 italic font-libre">
            "At Lavish Clusters, we believe that luxury should be effortless."
          </h3>

          <p className="text-md text-gray-100 text-right italic font-libre mb-8  ">
            Founded by Ade Jones --
          </p>

          <blockquote className="text-lg text-gray-100 border-l-4 border-gray-700 pl-4 ">
            Our mission is to empower beauty lovers with premium, easy-to-use lash kits that bring salon-quality results to your home. Our cluster lashes, paired with our long-lasting, waterproof bond, are designed to save time without sacrificing style. Whether you’re an influencer, a makeup artist, or simply someone who loves a bold, beautiful look, Lavish Clusters makes achieving glamour a breeze. With each kit, we offer more than just lashes—we offer confidence, convenience, and a touch of elegance
          </blockquote>


          <button className="bg-gray-100 text-gray-800 border-2 border-gray-900 hover:border-gray-100 font-[600] py-3 px-4 rounded-full hover:bg-gray-800 hover:text-gray-100 transition duration-300 flex items-center gap-2">
            <MdSlowMotionVideo className='text-xl' />
            Watch Our Story
          </button>

        </div>
      </div>


      <div class="marquee my-10 bg-transparent ">
        <div class="marquee-content flex">
          <span className='font-libre  italic text-white font-bold'>Follow me on: </span>
          <a href="https://facebook.com" target="_blank" className=" social-link flex text-white">
            <FaFacebookF className="icon" />
            <span> Facebook</span>
          </a>
          <a href="https://instagram.com" target="_blank" className=" social-link flex text-white">
            <FaInstagram className="icon" />
            <span> Instagram</span>
          </a>
          <a href="https://twitter.com" target="_blank" className=" social-link flex text-white">
            <FaTwitter className="icon" />
            <span> Twitter</span>
          </a>
          <a href="https://youtube.com" target="_blank" className=" social-link flex text-white">
            <FaYoutube className="icon" />
            <span> Youtube</span>
          </a>
        </div>
      </div>



      <div className="container mx-auto flex flex-col md:flex-row-reverse gap-10 items-center py-2">

        {/* Right Side: Image with Reduced Width inside a Full-Width Container */}
        <div
          className="relative w-full md:w-1/2 flex justify-center items-center h-[400px]    overflow-hidden"

        >
          <div className="w-[60%] h-[95%] bg-gray-400 relative   ">

            <div className="w-[100%] h-full absolute -top-4 -left-4 mx-auto z-10">
              <Image
                src={AjImg}  // Keep this image as you mentioned; you can change it later.
                alt="Lavish Clusters Eyelash Kits"
                fill
                style={{ objectFit: 'cover', objectPosition: "top" }}
                className=" "
              />
            </div>
          </div>
        </div>

        {/* Left Side: Text with Fixed Half-Screen Width */}
        <div
          className="w-full md:w-1/2 space-y-6 px-4"

        >
          <h2 className="text-4xl font-extrabold -mb-4 text-gray-100  ">Meet Aj, </h2>
          <h3 className="text-2xl font-bold mb-4 text-gray-100 font-libre italic ">Founder of Lavish Clusters </h3>
          <p className="text-lg text-gray-100 ">
            I’m Aj, a 33-year-old beauty enthusiast with a lifelong passion for helping others feel glamorous. Growing up with five brothers, I found my escape in beauty, often inspired by my mother, who loved fashion and jewelry. Watching her dress up with elegance sparked my love for all things beauty.
          </p>

          <p className="text-md text-gray-100">
            In 2019, during the pandemic, I discovered the art of lashing, and what started as a personal hobby became a passion. My husband encouraged me to take it further, and now Lavish Clusters is my way of sharing luxury and confidence with others. When I’m not building the brand, I enjoy traveling and spending time with family. Lavish Clusters is a reflection of my journey, and I’m thrilled to share it with you.
          </p>

          <blockquote className="text-lg text-gray-100 border-l-4 border-gray-800 pl-4 font-libre italic">
            "Lavish Clusters represents more than just lashes—it's about empowerment, confidence, and bringing luxury to every person who uses our products."
          </blockquote>

          <div className="flex gap-4 mt-6 text-gray-100">
            <p> Follow on -- </p>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-2xl text-gray-100 hover:text-gray-500 transition duration-300" />
            </a>
            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
              <FaYoutube className="text-2xl text-gray-100 hover:text-gray-500 transition duration-300" />
            </a>
            <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer">
              <FaTiktok className="text-2xl text-gray-100 hover:text-gray-500 transition duration-300" />
            </a>
          </div>
        </div>
        </div>
        </div>

    </section>
  );
};

export default AboutSection;
