// 'use client';

// import React, { useState } from 'react';
// import { motion } from 'framer-motion';
// import '../../app/globals.css';

// const HowItWorks = () => {
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
//   ];

//   // Track the currently selected video
//   const [activeVideo, setActiveVideo] = useState(customerVideos[0]);

//   return (
//     <section id='how-it-works' className="py-20 bg-gradient-bottom-to-top text-white">
//       <div className="container mx-auto px-6 flex flex-col items-center gap-8">
//         {/* Centered Headings */}
//         <motion.h2
//           className="text-3xl md:text-4xl font-extrabold mb-2 text-center font-libre italic"
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           transition={{ duration: 1 }}
//         >
//           How to Apply?
//         </motion.h2>
//         <motion.h3
//           className="text-xl md:text-2xl text-gray-300 mb-8 text-center"
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           transition={{ duration: 1, delay: 0.2 }}
//         >
//           Step-by-step guide
//         </motion.h3>

//         {/* Main Content: Video List and Player */}
//         <div className="flex flex-col md:flex-row gap-8 w-full">
//           {/* Left Side: Vertical Navigation */}
//           <div className="md:w-1/3 w-full">
//             <ul className="space-y-4">
//               {customerVideos.map((video) => (
//                 <motion.li
//                   key={video.id}
//                   className={`cursor-pointer p-3 rounded-lg transition-all duration-300 ${
//                     activeVideo.id === video.id
//                       ? 'bg-gray-700 text-white shadow-lg'
//                       : 'bg-gray-800 text-gray-300 hover:bg-gray-600 hover:text-white'
//                   }`}
//                   onClick={() => setActiveVideo(video)}
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                 >
//                   {video.title}
//                 </motion.li>
//               ))}
//             </ul>
//           </div>

//           {/* Right Side: Video Display */}
//           <div className="md:w-2/3 w-full h-auto flex items-center justify-center">
//             <motion.div
//               key={activeVideo.id}
//               className="bg-gray-800 bg-opacity-80 rounded-xl shadow-2xl overflow-hidden w-full"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ duration: 0.5 }}
//             >
//               <div className="flex justify-center">
//                 <iframe
//                   width="100%"
//                   height="400px"
//                   src={`${activeVideo.videoSrc}&autoplay=1&mute=1`}
//                   title={activeVideo.title}
//                   frameBorder="0"
//                   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                   allowFullScreen
//                   className="rounded-t-xl"
//                 ></iframe>
//               </div>
//               <div className="p-4 text-center">
//                 <h3 className="font-semibold text-white text-lg md:text-xl">{activeVideo.title}</h3>
//               </div>
//             </motion.div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HowItWorks;













'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import '../../app/globals.css';
import { Parallax } from 'react-parallax';

// Configuration Object for Dynamic Content
const howItWorksContent = {
  heading: "How to Apply?",
  subheading: "Step-by-step guide",
  videos: [
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
  ],
};

const HowItWorks = () => {
  // Track the currently selected video
  const [activeVideo, setActiveVideo] = useState(howItWorksContent.videos[0]);

  return (
    <section id='how-it-works' className="py-20 bg-gradient-bottom-to-top text-white">
      {/* Parallax Background */}
      <Parallax
        bgImage="/path-to-your/parallaxImg.jpg" // Update the path if necessary
        bgImageAlt="How It Works Background"
        strength={300}
      >
        <div className="mx-auto px-6 py-10 z-10" style={{ minHeight: '600px' }}>
          <div className="container mx-auto flex flex-col items-center gap-8">
            {/* Dynamic Headings */}
            <motion.h2
              className="text-3xl md:text-4xl font-extrabold mb-2 text-center font-libre italic"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              {howItWorksContent.heading}
            </motion.h2>
            <motion.h3
              className="text-xl md:text-2xl text-gray-300 mb-8 text-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              {howItWorksContent.subheading}
            </motion.h3>

            {/* Main Content: Video List and Player */}
            <div className="flex flex-col md:flex-row gap-8 w-full">
              {/* Left Side: Vertical Navigation */}
              <div className="md:w-1/3 w-full">
                <ul className="space-y-4">
                  {howItWorksContent.videos.map((video) => (
                    <motion.li
                      key={video.id}
                      className={`cursor-pointer p-3 rounded-lg transition-all duration-300 ${
                        activeVideo.id === video.id
                          ? 'bg-gray-700 text-white shadow-lg'
                          : 'bg-gray-800 text-gray-300 hover:bg-gray-600 hover:text-white'
                      }`}
                      onClick={() => setActiveVideo(video)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {video.title}
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Right Side: Video Display */}
              <div className="md:w-2/3 w-full h-auto flex items-center justify-center">
                <motion.div
                  key={activeVideo.id}
                  className="bg-gray-800 bg-opacity-80 rounded-xl shadow-2xl overflow-hidden w-full"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="flex justify-center">
                    <iframe
                      width="100%"
                      height="400px"
                      src={`${activeVideo.videoSrc}&autoplay=1&mute=1`}
                      title={activeVideo.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="rounded-t-xl"
                    ></iframe>
                  </div>
                  <div className="p-4 text-center">
                    <h3 className="font-semibold text-white text-lg md:text-xl">{activeVideo.title}</h3>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </Parallax>
    </section>
  );
};

export default HowItWorks;
