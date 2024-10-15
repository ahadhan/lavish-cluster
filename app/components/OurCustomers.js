// 'use client'

// import React from 'react';
// import { motion } from 'framer-motion';
// import '../../app/globals.css';

// const CustomersSection = () => {
//   // Sample YouTube video links for iframe embedding with catchy lines
//   const customerVideos = [

//     {
//       id: 1,
//       title: '“This foundation works wonders!”',
//       videoSrc: "https://www.youtube.com/embed/Fa5ZgRg51mU?si=mqy_7luHTgbLPGHZ", // Replace with a makeup video
//     },
//     {
//       id: 2,
//       title: '“Top 10 makeup products you need!”',
//       videoSrc: "https://www.youtube.com/embed/Fa5ZgRg51mU?si=mqy_7luHTgbLPGHZ", // Replace with a makeup video
//     },
//     {
//       id: 3,
//       title: '“Best eyeshadow palette review!”',
//       videoSrc: "https://www.youtube.com/embed/Fa5ZgRg51mU?si=mqy_7luHTgbLPGHZ", // Replace with a makeup video
//     },
//     {
//       id: 4,
//       title: '“My everyday makeup routine!”',
//       videoSrc: "https://www.youtube.com/embed/Fa5ZgRg51mU?si=mqy_7luHTgbLPGHZ", // Replace with a makeup video
//     },
//     {
//       id: 5,
//       title: '“A flawless foundation routine!”',
//       videoSrc: "https://www.youtube.com/embed/Fa5ZgRg51mU?si=mqy_7luHTgbLPGHZ", // Replace with a makeup video
//     },
//     {
//       id: 6,
//       title: '“Ultimate lip care and lipsticks!”',
//       videoSrc: "https://www.youtube.com/embed/Fa5ZgRg51mU?si=mqy_7luHTgbLPGHZ", // Replace with a makeup video
//     },
//   ];

//   return (
//     <section id="customers" className="py-20 bg-gradient-top-to-bottom text-white">
//       <div className="container mx-auto px-6">
//         {/* Heading Section */}
//         <motion.h2
//           className="text-4xl font-extrabold text-center mb-4"
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           transition={{ duration: 1 }}
//         >
//           Trusted Makeup Artists
//         </motion.h2>
//         <p className="text-center text-gray-300 mb-12 font-libre">
//           Hear from our happy clients who have shared their experiences with our products in the videos below.
//         </p>

//         {/* Video Cards Section with Horizontal Scrolling */}
//         <div className="flex space-x-8 overflow-x-scroll overflow-y-auto no-scrollbar pb-4">
//           {customerVideos.map((video) => (
//             <motion.div
//               key={video.id}
//               className="bg-gray-300 rounded-lg shadow-md min-w-[320px] max-w-[320px] overflow-hidden hover:shadow-xl transition-shadow duration-300"
//               initial={{ opacity: 0, y: 50 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: video.id * 0.2 }}
//             >
//               <div className="relative w-full h-48">
//                 <iframe
//                   width="100%"
//                   height="100%"
//                   src={video.videoSrc}
//                   title={video.title}
//                   frameBorder="0"
//                   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                   allowFullScreen
//                   className="w-full h-full object-cover"
//                 ></iframe>
//               </div>
//               <div className="p-4">
//                 <h3 className="font-semibold text-secondaryColor text-xl mb-2 text-center">{video.title}</h3>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default CustomersSection;





// 'use client';

// import React from 'react';
// import { motion } from 'framer-motion';
// import '../../app/globals.css';

// const CustomersSection = () => {
//   // Sample YouTube video links for iframe embedding with catchy lines
//   const customerVideos = [
//     {
//       id: 1,
//       title: '“This foundation works wonders!”',
//       videoSrc: "https://www.youtube.com/embed/Fa5ZgRg51mU?si=mqy_7luHTgbLPGHZ",
//     },
//     {
//       id: 2,
//       title: '“Top 10 makeup products you need!”',
//       videoSrc: "https://www.youtube.com/embed/Fa5ZgRg51mU?si=mqy_7luHTgbLPGHZ",
//     },
//     {
//       id: 3,
//       title: '“Best eyeshadow palette review!”',
//       videoSrc: "https://www.youtube.com/embed/Fa5ZgRg51mU?si=mqy_7luHTgbLPGHZ",
//     },
//     {
//       id: 4,
//       title: '“My everyday makeup routine!”',
//       videoSrc: "https://www.youtube.com/embed/Fa5ZgRg51mU?si=mqy_7luHTgbLPGHZ",
//     },
//     {
//       id: 5,
//       title: '“A flawless foundation routine!”',
//       videoSrc: "https://www.youtube.com/embed/Fa5ZgRg51mU?si=mqy_7luHTgbLPGHZ",
//     },
//     {
//       id: 6,
//       title: '“Ultimate lip care and lipsticks!”',
//       videoSrc: "https://www.youtube.com/embed/Fa5ZgRg51mU?si=mqy_7luHTgbLPGHZ",
//     },
//   ];

//   return (
//     <section id="customers" className="py-20 bg-gradient-top-to-bottom text-white">
//       <div className="container mx-auto px-6">
//         {/* Heading Section */}
//         <motion.h2
//           className="text-4xl font-extrabold text-center mb-4"
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           transition={{ duration: 1 }}
//         >
//           Trusted Makeup Artists
//         </motion.h2>
//         <p className="text-center text-gray-300 mb-12 font-libre">
//           Hear from our happy clients who have shared their experiences with our products in the videos below.
//         </p>

//         {/* Video Cards Section with Horizontal Scrolling */}
//         <div className="relative">
//           <div className="flex space-x-8 overflow-x-scroll overflow-y-hidden no-scrollbar pb-4 snap-x snap-mandatory">
//             {customerVideos.map((video) => (
//               <motion.div
//                 key={video.id}
//                 className="bg-gray-800 bg-opacity-60 rounded-xl shadow-lg min-w-[320px] max-w-[320px] snap-center hover:scale-105 transition-transform duration-300"
//                 initial={{ opacity: 0, y: 50 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5, delay: video.id * 0.2 }}
//               >
//                 <div className="relative w-full h-48">
//                   <iframe
//                     width="100%"
//                     height="100%"
//                     src={video.videoSrc}
//                     title={video.title}
//                     frameBorder="0"
//                     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                     allowFullScreen
//                     className="w-full h-full object-cover rounded-t-xl"
//                   ></iframe>
//                 </div>
//                 <div className="p-4 text-center">
//                   <h3 className="font-semibold text-white text-xl mb-2">{video.title}</h3>
//                 </div>
//               </motion.div>
//             ))}
//           </div>

//           {/* Optional decorative background for aesthetics */}
//           <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent to-gray-900 opacity-50 pointer-events-none"></div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default CustomersSection;




'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import '../../app/globals.css';

const VerticalStackCustomersSection = () => {
  // Sample YouTube video links for iframe embedding with catchy lines
  const customerVideos = [
    {
      id: 1,
      title: '“This foundation works wonders!”',
      videoSrc: "https://www.youtube.com/embed/Fa5ZgRg51mU?si=mqy_7luHTgbLPGHZ",
    },
    {
      id: 2,
      title: '“Top 10 makeup products you need!”',
      videoSrc: "https://www.youtube.com/embed/Fa5ZgRg51mU?si=mqy_7luHTgbLPGHZ",
    },
    {
      id: 3,
      title: '“Best eyeshadow palette review!”',
      videoSrc: "https://www.youtube.com/embed/Fa5ZgRg51mU?si=mqy_7luHTgbLPGHZ",
    },
  ];

  // Track the currently selected video
  const [activeVideo, setActiveVideo] = useState(customerVideos[0]);

  return (
    <section className="py-20 bg-gradient-top-to-bottom text-white">
      <div className="container mx-auto px-6 flex flex-col md:flex-row">
        {/* Left Side: Vertical Navigation */}

        <div>
          <h2> How to Apply?</h2>
        </div>
        <div className="md:w-1/3 w-full mb-8 md:mb-0">
          <motion.h2
            className="text-4xl font-extrabold mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Select a Video
          </motion.h2>
          <ul className="space-y-4">
            {customerVideos.map((video, index) => (
              <li
                key={video.id}
                className={`cursor-pointer p-2 rounded-lg ${
                  activeVideo.id === video.id ? 'bg-gray-700 text-white' : 'bg-gray-800 text-gray-300'
                }`}
                onClick={() => setActiveVideo(video)}
              >
                {video.title}
              </li>
            ))}
          </ul>
        </div>

        {/* Right Side: Video Display */}
        <div className="md:w-2/3 w-full h-auto pl-0 md:pl-8">
          <motion.div
            key={activeVideo.id}
            className="bg-gray-900 bg-opacity-70 rounded-xl shadow-lg overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex justify-center">
              <iframe
                width="100%"  // Width will be 100% for full responsiveness
                height="450px" // Fixed height for all screens
                src={`${activeVideo.videoSrc}&autoplay=1&mute=1`}  // Autoplay and mute
                title={activeVideo.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="object-cover"
              ></iframe>
            </div>
            <div className="p-2 text-center">
              <h3 className="font-semibold text-white text-xl">{activeVideo.title}</h3>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default VerticalStackCustomersSection;
