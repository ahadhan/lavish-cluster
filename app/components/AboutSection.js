// 'use client';

// import React, { useState, useEffect } from 'react';
// import Image from 'next/image';
// import { motion } from 'framer-motion';
// import hero from '../assets/hero.webp';
// import AjImg from '../assets/Aj.webp';
// import logoImg from '../assets/logo.png';
// import '../../app/globals.css';
// import { MdSlowMotionVideo } from "react-icons/md";
// import { db } from "../lib/firebase";
// import { doc, getDoc } from "firebase/firestore";
// import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";


// const fadeInVariant = {
//   hidden: { opacity: 0, y: 20 },
//   visible: { opacity: 1, y: 0, transition: { duration: 1 } },
// };

// const AboutSection = () => {
//   const [aboutContent, setAboutContent] = useState(null);

//   useEffect(() => {
//     const fetchAboutContent = async () => {
//       try {
//         const docRef = doc(db, "content", "aboutSection");
//         const docSnap = await getDoc(docRef);

//         if (docSnap.exists()) {
//           setAboutContent(docSnap.data());
//         } else {
//           console.log("No such document!");
//         }
//       } catch (error) {
//         console.error("Error fetching document: ", error);
//       }
//     };

//     fetchAboutContent();
//   }, []);

//   if (!aboutContent)
//     return (
//       <div className="flex items-center justify-center min-h-screen bg-black">
//         <div className="loader"></div>
//       </div>
//     );



'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { db } from "../lib/firebase"; 
import { doc, getDoc } from "firebase/firestore";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { MdSlowMotionVideo } from "react-icons/md";
import defaultImg from '../assets/Aj.webp';

// Define a map for icon names to their corresponding React components
const iconMap = {
  Facebook: FaFacebookF,
  Instagram: FaInstagram,
  Twitter: FaTwitter,
  YouTube: FaYoutube,
  Video: MdSlowMotionVideo, // Assuming you have a label for 'Video'
};

const fadeInVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};

const AboutSection = () => {
  const [aboutContent, setAboutContent] = useState(null);

  useEffect(() => {
    const fetchAboutContent = async () => {
      try {
        const docRef = doc(db, "content", "aboutContent");
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const jsonData = parseJsonString(docSnap.data());
          setAboutContent(jsonData);
          console.log(aboutContent)
        } else {
          console.log("No such document!");
        }
      } catch (error) {
        console.error("Error fetching document: ", error);
      }
    };

    fetchAboutContent();
  }, []);

  function parseJsonString(data) {
    try {
      if (typeof data === 'string') {
        return JSON.parse(data);
      } else {
        return data;
      }
    } catch (error) {
      console.error("Error parsing JSON string:", error);
      return null;
    }
  }

  if (!aboutContent)
    return (
      <div className="flex items-center justify-center min-h-screen bg-black">
        <div className="loader"></div>
      </div>
    );

  // Function to ensure the src is a valid URL
  const isValidImageUrl = (url) => {
    return typeof url === 'string' && url.trim() !== '' && url.startsWith('http');
  };



  return (
    <section id="about" className="py-20 bg-gradient-bottom-to-top">
      <div className="container mx-auto px-4 ">
        {/* Welcome Line */}
        {aboutContent.welcomeLine && (
          <motion.div className="space-y-4" variants={fadeInVariant}>
            <p className="text-gray-200 text-center my-5 text-xl font-libre">
              {aboutContent.welcomeLine}
            </p>
          </motion.div>
        )}

        {/* Logo */}
        {aboutContent.logo?.src && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="flex justify-center mb-16"
          >
            <Image
              src={aboutContent.logo.src}
              alt="logo"
              layout="intrinsic"
              width={200}
              height={200}
              className="w-1/4 invert"
            />
          </motion.div>
        )}

        {/* First Section */}
        <div className="flex flex-col md:flex-row gap-10 items-center justify-between">
                 {/* Hero Image */}
        {isValidImageUrl(aboutContent.heroImg?.src) && (
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="relative w-full md:w-1/2 h-[300px] md:h-[400px] flex justify-center overflow-hidden"
          >
            <Image
              src={aboutContent.heroImg.src || defaultImg} // Use the Cloudinary URL from Firebase
              alt="Lavish Clusters Eyelash Kits"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </motion.div>
        )}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="w-full md:w-1/2 space-y-6 px-4"
          >
            {aboutContent.sections && aboutContent.sections[0] && (
              <>
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
                  {aboutContent.sections[0].blockquote}
                </blockquote>
              </>
            )}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gray-100 text-gray-800 border-2 border-gray-900 hover:border-gray-100 font-semibold py-3 px-4 rounded-full hover:bg-gray-800 hover:text-white transition duration-300 flex items-center gap-2"
            >
              <MdSlowMotionVideo className="text-xl" />
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
            <span className="font-libre italic text-white font-bold">
              Follow Me On
            </span>
            {aboutContent.socialMediaMarquee.links.map((link, index) => {

             const IconComponent = iconMap[link.label];
             return(
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link flex text-white items-center"
              >

                {IconComponent ? (
                  <IconComponent style={{ marginRight: '8px', fontSize: '20px' }} />
                ) :
                  "N A"
                }
                <span>{link.label}</span>
              </a>
              )
})}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;








// 'use client';

// import React, { useState, useEffect } from 'react';
// import Image from 'next/image';
// import { motion } from 'framer-motion';
// import { db } from "../lib/firebase"; 
// import { doc, getDoc } from "firebase/firestore";
// import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
// import { MdSlowMotionVideo } from "react-icons/md";
// import defaultImg from '../assets/Aj.webp';

// // Define a map for icon names to their corresponding React components
// const iconMap = {
//   FaFacebookF: FaFacebookF,
//   FaInstagram: FaInstagram,
//   FaTwitter: FaTwitter,
//   FaYoutube: FaYoutube,
//   MdSlowMotionVideo: MdSlowMotionVideo, // If needed, add more icons here
// };

// const fadeInVariant = {
//   hidden: { opacity: 0, y: 20 },
//   visible: { opacity: 1, y: 0, transition: { duration: 1 } },
// };

// const AboutSection = () => {
//   const [aboutContent, setAboutContent] = useState(null);

//   useEffect(() => {
//     const fetchAboutContent = async () => {
//       try {
//         const docRef = doc(db, "content", "aboutContent");
//         const docSnap = await getDoc(docRef);

//         if (docSnap.exists()) {
//           const jsonData = parseJsonString(docSnap.data());
//           setAboutContent(jsonData);
//           console.log(aboutContent)
//         } else {
//           console.log("No such document!");
//         }
//       } catch (error) {
//         console.error("Error fetching document: ", error);
//       }
//     };

//     fetchAboutContent();
//   }, []);

//   function parseJsonString(data) {
//     try {
//       if (typeof data === 'string') {
//         return JSON.parse(data);
//       } else {
//         return data;
//       }
//     } catch (error) {
//       console.error("Error parsing JSON string:", error);
//       return null;
//     }
//   }

//   if (!aboutContent)
//     return (
//       <div className="flex items-center justify-center min-h-screen bg-black">
//         <div className="loader"></div>
//       </div>
//     );

//   // Function to ensure the src is a valid URL
//   const isValidImageUrl = (url) => {
//     return typeof url === 'string' && url.trim() !== '' && url.startsWith('http');
//   };

//   return (
//     <section id="about" className="py-20 bg-gradient-bottom-to-top">
//       <div className="container mx-auto px-4 ">
//         {/* Welcome Line */}
//         {aboutContent.welcomeLine && (
//           <motion.div className="space-y-4" variants={fadeInVariant}>
//             <p className="text-gray-200 text-center my-5 text-xl font-libre">
//               {aboutContent.welcomeLine}
//             </p>
//           </motion.div>
//         )}

//         {/* Logo */}
//         {isValidImageUrl(aboutContent.logo?.src) && (
//           <motion.div
//             initial={{ opacity: 0, scale: 0.9 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 1, delay: 0.2 }}
//             className="flex justify-center mb-16"
//           >
//             <Image
//               src={aboutContent.logo.src || defaultImg} // Use the Cloudinary URL from Firebase
//               alt="logo"
//               width={200}
//               height={200}
//               className="w-1/4 invert"
//             />
//           </motion.div>
//         )}

//         {/* Hero Image */}
//         {isValidImageUrl(aboutContent.heroImg?.src) && (
//           <motion.div
//             initial={{ opacity: 0, x: -50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 1 }}
//             className="relative w-full md:w-1/2 h-[300px] md:h-[400px] flex justify-center overflow-hidden"
//           >
//             <Image
//               src={aboutContent.heroImg.src || defaultImg} // Use the Cloudinary URL from Firebase
//               alt="Lavish Clusters Eyelash Kits"
//               layout="fill"
//               objectFit="cover"
//               className="rounded-lg"
//             />
//           </motion.div>
//         )}

//         {/* First Section */}
//         <div className="flex flex-col md:flex-row gap-10 items-center justify-between">
//           <motion.div
//             initial={{ opacity: 0, x: -50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 1 }}
//             className="w-full md:w-1/2 space-y-6 px-4"
//           >
//             {aboutContent.sections && aboutContent.sections[0] && (
//               <>
//                 <h2 className="text-3xl md:text-4xl font-extrabold mb-2 text-gray-100">
//                   {aboutContent.sections[0].title}
//                 </h2>
//                 <h3 className="text-lg md:text-xl text-gray-100 italic">
//                   {aboutContent.sections[0].subtitle}
//                 </h3>
//                 <p className="text-sm md:text-md text-gray-100 text-right italic mb-4">
//                   {aboutContent.sections[0].founder}
//                 </p>
//                 <blockquote className="text-md md:text-lg text-gray-100 border-l-4 border-gray-700 pl-4">
//                   {aboutContent.sections[0].blockquote}
//                 </blockquote>
//               </>
//             )}
//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               className="bg-gray-100 text-gray-800 border-2 border-gray-900 hover:border-gray-100 font-semibold py-3 px-4 rounded-full hover:bg-gray-800 hover:text-white transition duration-300 flex items-center gap-2"
//             >
//               <MdSlowMotionVideo className="text-xl" />
//               Watch Our Story
//             </motion.button>
//           </motion.div>
//         </div>

//         {/* Social Media Links */}
//         <div className="flex justify-center gap-6 mt-16">
//           {aboutContent.socialMediaMarquee?.links?.map((link, index) => {
//             // Retrieve the correct icon component based on the name
//             const IconComponent = iconMap[link.icon];
//             return (
//               <a
//                 key={index}
//                 href={link.href}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-gray-100 text-2xl"
//               >
//                 {/* Render the icon */}
//                 {IconComponent && <IconComponent />}
//               </a>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AboutSection;
