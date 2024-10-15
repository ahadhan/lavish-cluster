// 'use client'

// import react, { useState, useEffect } from 'react'
// import Image from 'next/image'
// import Link from 'next/link'
// import { FaChevronRight, FaInstagram, FaYoutube, FaTiktok, FaStar, FaBars, FaTimes } from 'react-icons/fa'
// import { FaArrowRightLong } from "react-icons/fa6";
// import { FaLocationArrow } from "react-icons/fa";
// import { motion } from 'framer-motion'
// import hero from '../assets/banner.jpg'
// import '../../app/globals.css'

// const HeroSection = () => {
//   return (
//     <section className="relative h-screen flex items-center justify-around bg-gray-800 text-white ">
//       <Image
//         src={hero} // Online image URL
//         alt="Lavish Clusters Eyelash Kits"
//         fill
//         style={{ objectFit: 'cover' }}
//         className="absolute inset-0 mix-blend-overlay"
//       />

//       <div className=" main-container z-10 text-center px-14 w-[70%] ">

//         <motion.h1
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1 }}
//           className="font-poppins text-8xl font-[800] tracking-wider text-shadow-xl "
//         >
//           LAVISH
//         </motion.h1>
//         <motion.h1
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1 }}
//           className=" italic font-libre text-5xl mb-8 ml-36 font-[800] tracking-wider text-shadow-xl"
//         >
//           Clusters
//         </motion.h1>

//         <motion.h1
//           initial={{ opacity: 0, y: -50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1 }}
//           className="font-poppins text-4xl mt-16 font-extrabold mb-4"
//         >
//           Effortless Glamour in Every Cluster
//         </motion.h1>
//         <motion.p
//           initial={{ opacity: 0, y: 50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1, delay: 0.5 }}
//           className="text-xl mb-8"
//         >
//           Premium eyelash kits for influencers, makeup artists, and professionals
//         </motion.p>

//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 1, delay: 1 }}
//           className='flex justify-center'
//         >

//           <button className="flex items-center gap-2 custom-button bg-skinColor text-gray-800 font-poppins font-[600] border-2 border-gray-800 px-3 py-3 rounded-xl transition-colors duration-300 ease-in-out hover:bg-gray-800 hover:text-gray-200 hover:border-gray-200">
//             Shop Now
//             <FaLocationArrow />
//           </button>
//         </motion.div>
//       </div>

//     </section>
//   )
// }

// export default HeroSection;











// 'use client';

// import React, { useState } from 'react';
// import Link from 'next/link';
// import { FaChevronRight, FaInstagram, FaYoutube, FaTiktok, FaStar, FaBars, FaTimes } from 'react-icons/fa';
// import { FaArrowRightLong } from "react-icons/fa6";
// import { FaLocationArrow } from "react-icons/fa";
// import { motion } from 'framer-motion';
// import '../../app/globals.css';
// import Image from 'next/image';
// import p1 from '../assets/1.png'; // Product 1 image
// import p2 from '../assets/2.png'; // Product 2 image
// import p3 from '../assets/3.png'; // Product 3 image
// import p4 from '../assets/4.png'; // Product 3 image
// import { IoIosArrowForward } from "react-icons/io";
// import { IoIosArrowBack } from "react-icons/io";




// const HeroSection = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const productImages = [p1, p2, p3];

//   const handleNext = () => {
//     setCurrentSlide((prevSlide) => (prevSlide + 1) % productImages.length);
//   };

//   const handlePrevious = () => {
//     setCurrentSlide((prevSlide) => (prevSlide - 1 + productImages.length) % productImages.length);
//   };

//   return (
//     <section className="relative  flex items-center justify-around bg-gray-800 text-white parallax-section  pt-28 pb-10">
//       {/* Parallax Background */}
//       <div className="absolute inset-0 parallax-background"></div>

//       <div className="main-container z-10 text-center px-14 w-[70%]">
//         {/* Main Heading */}
//         <motion.h1
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1 }}
//           className="font-poppins text-8xl font-[800] tracking-wider text-shadow-xl"
//         >
//           LAVISH
//         </motion.h1>
//         <motion.h1
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1 }}
//           className="italic font-libre text-5xl mb-8 ml-36 font-[800] tracking-wider text-shadow-xl"
//         >
//           Clusters
//         </motion.h1>

//         {/* Subheading */}


//         {/* Product Carousel Card */}
//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1, delay: 0.5 }}
//           className="carousel bg-transparent p-4 rounded-lg  mx-auto w-3/2 md:w-1/2  flex gap-10 items-center justify-center"
//         >
//           {/* Previous Button */}
//           <button onClick={handlePrevious} className="text-gray-200 hover:text-gray-600 transition text-xl">
//           <IoIosArrowBack />
//           </button>

//           {/* Image Display */}
//           <div className="carousel-image mx-auto w-full ">
//             <Image
//               src={productImages[currentSlide]}
//               alt={`Product ${currentSlide + 1}`}
//               className="rounded-lg"
//               width={300}
//               height={200}
//               style={{ objectFit: 'cover' }}
//             />
//           </div>

//           {/* Next Button */}
//           <button onClick={handleNext} className="text-gray-200 text-3xl hover:text-gray-600 transition">
//           <IoIosArrowForward />

//           </button>
//         </motion.div>

//         {/* Shop Now Button */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 1, delay: 1 }}
//           className="flex justify-center mt-4"
//         >
//           <button className="flex items-center gap-2 custom-button bg-skinColor text-gray-800 font-poppins font-[600] border-2 border-gray-800 px-3 py-3 rounded-xl transition-colors duration-300 ease-in-out hover:bg-gray-800 hover:text-gray-200 hover:border-gray-200">
//             Shop Now
//             <FaLocationArrow />
//           </button>
//         </motion.div>

//         <motion.h1
//           initial={{ opacity: 0, y: -50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1 }}
//           className="font-poppins text-4xl mt-16 font-extrabold mb-4"
//         >
//           Effortless Glamour in Every Cluster
//         </motion.h1>
//         <motion.p
//           initial={{ opacity: 0, y: 50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1, delay: 0.5 }}
//           className="text-xl mb-8"
//         >
//           Premium eyelash kits for influencers, makeup artists, and professionals
//         </motion.p>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;















// 'use client';

// import React, { useState, useEffect } from 'react';
// import Link from 'next/link';
// import { FaLocationArrow } from "react-icons/fa";
// import { motion } from 'framer-motion';
// import '../../app/globals.css';
// import Image from 'next/image';
// import p1 from '../assets/1.png'; // Product 1 image
// import p2 from '../assets/2.png'; // Product 2 image
// import p3 from '../assets/3.png'; // Product 3 image
// import { IoIosArrowForward } from "react-icons/io";
// import { IoIosArrowBack } from "react-icons/io";
// import bannerImg from '../assets/1.png'


// const HeroSection = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const productImages = [p1, p2, p3];

//   // Function to move to the next slide
//   const handleNext = () => {
//     setCurrentSlide((prevSlide) => (prevSlide + 1) % productImages.length);
//   };

//   // Function to move to the previous slide
//   const handlePrevious = () => {
//     setCurrentSlide((prevSlide) => (prevSlide - 1 + productImages.length) % productImages.length);
//   };

//   // Automatic slide movement every 5 seconds
//   useEffect(() => {
//     const interval = setInterval(() => {
//       handleNext(); // Move to the next slide automatically
//     }, 5000); // 5 seconds interval

//     // Cleanup function to clear the interval when the component unmounts
//     return () => clearInterval(interval);
//   }, []); // Empty dependency array ensures the interval runs once when the component mounts

//   return (
//     <section className="relative  flex items-center justify-around  text-white py-10 parallax-section">

//       {/* Parallax Background */}

//       <div className="parallax-background"
//       style={{ 
//         backgroundImage: {bannerImg}, 
//         backgroundPosition: "center", 
//         backgroundSize: "cover", 
//         backgroundAttachment: "fixed", 
//         backgroundRepeat: "no-repeat", 
//         width: "100%", 
//         height: "100%", 
//         position: "absolute", 
//         top: "0", 
//         left: "0", 
//         zIndex: "-1" 
//       }}      ></div>

//       <div className=" content  text-center px-14 w-[70%] mt-28">
//         {/* Main Heading */}
//         <motion.h1
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1 }}
//           className="font-poppins text-8xl font-[800] tracking-wider text-shadow-xl"
//         >
//           LAVISH
//         </motion.h1>
//         <motion.h1
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1 }}
//           className="italic font-libre text-5xl mb-4 ml-36 font-[800] tracking-wider text-shadow-xl"
//         >
//           Clusters
//         </motion.h1>

//         {/* Subheading */}
//         <motion.h1
//           initial={{ opacity: 0, y: -50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1 }}
//           className="font-poppins text-4xl mt-8 font-extrabold mb-4"
//         >
//           Effortless Glamour in Every Cluster
//         </motion.h1>
//         <motion.p
//           initial={{ opacity: 0, y: 50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1, delay: 0.5 }}
//           className="text-xl mb-8"
//         >
//           Premium eyelash kits for influencers, makeup artists, and professionals
//         </motion.p>

//         {/* Product Carousel Card */}
//          <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1, delay: 0.5 }}
//           className="carousel bg-transparent p-4   mx-auto w-3/2 md:w-2/3  flex gap-10 items-center justify-center"
//         >
//           {/* Previous Button */}
//           <button onClick={handlePrevious} className="text-gray-200 hover:text-gray-600 transition text-xl">
//           <IoIosArrowBack />
//           </button>

//           {/* Image Display */}
//           <div className="carousel-image mx-auto w-full ">
//             <Image
//               src={productImages[currentSlide]}
//               alt={`Product ${currentSlide + 1}`}
//               className="shadow-lg"
//               width={400}
//               height={300}
//               style={{ objectFit: 'cover' }}
//             />
//           </div>

//           {/* Next Button */}
//           <button onClick={handleNext} className="text-gray-200 text-3xl hover:text-gray-600 transition">
//           <IoIosArrowForward />

//           </button>
//         </motion.div>


//         {/* Shop Now Button */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 1, delay: 1 }}
//           className="flex justify-center mt-8"
//         >
//           <button className="flex items-center gap-2 custom-button bg-skinColor text-gray-800 font-poppins font-[600] border-2 border-gray-800 px-3 py-3 rounded-xl transition-colors duration-300 ease-in-out hover:bg-gray-800 hover:text-gray-200 hover:border-gray-200">
//             Shop Now
//             <FaLocationArrow />
//           </button>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;




'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaLocationArrow } from "react-icons/fa";
import { motion } from 'framer-motion';
import '../../app/globals.css';
import Image from 'next/image';
import p1 from '../assets/1.png'; // Product 1 image
import p2 from '../assets/2.png'; // Product 2 image
import p3 from '../assets/3.png'; // Product 3 image
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import bannerImg from '../assets/1.png';

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

    // Cleanup function to clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, []); // Empty dependency array ensures the interval runs once when the component mounts

  return (
    <section className="relative flex items-center justify-around text-white py-10 parallax-section">
      {/* Parallax Background */}
      <div
        className="parallax-background"
        style={{
          backgroundImage: `url(${bannerImg.src})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
          backgroundRepeat: "no-repeat",
          width: "100%",
          height: "100%",
          position: "absolute",
          top: "0",
          left: "0",
          zIndex: "-1"
        }}
      ></div>

      <div className="content text-center px-14 w-[70%] mt-28">
        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="font-poppins text-8xl font-[800] tracking-wider text-shadow-xl"
        >
          LAVISH
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="italic font-libre text-5xl mb-4 ml-36 font-[800] tracking-wider text-shadow-xl"
        >
          Clusters
        </motion.h1>

        {/* Subheading */}
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="font-poppins text-4xl mt-8 font-extrabold mb-4"
        >
          Effortless Glamour in Every Cluster
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-xl mb-8"
        >
          Premium eyelash kits for influencers, makeup artists, and professionals
        </motion.p>

        {/* Product Carousel Card */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="carousel bg-transparent p-4 mx-auto w-3/2 md:w-2/3 flex gap-10 items-center justify-center"
        >
          {/* Previous Button */}
          <button
            onClick={handlePrevious}
            className="text-gray-200 hover:text-gray-600 transition text-xl"
          >
            <IoIosArrowBack />
          </button>

          {/* Image Display */}
          <div className="carousel-image relative w-80 h-80 overflow-hidden ">
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
            className="text-gray-200 text-3xl hover:text-gray-600 transition"
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
          <button className="flex items-center gap-2 custom-button bg-white text-gray-800 font-poppins font-[600] border-2 border-gray-800 px-3 py-3 rounded-xl transition-colors duration-300 ease-in-out hover:bg-gray-800 hover:text-gray-200 hover:border-gray-200">
            Shop Now
            <FaLocationArrow />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
