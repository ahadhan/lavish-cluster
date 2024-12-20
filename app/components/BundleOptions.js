


// 'use client';

// import React from 'react';
// import Image from 'next/image';
// import bundleImage1 from '../assets/1.webp';
// import bundleImage2 from '../assets/2.webp';
// import bundleImage3 from '../assets/3.webp';
// import bundleImage4 from '../assets/4.webp';
// import bundleImage5 from '../assets/5.webp';
// import parallaxImg from '../assets/bgImage.jpg';
// import { Parallax } from 'react-parallax';

// // Configuration Object for Dynamic Content
// const bundleContent = {
//   heading: "Bundle Options",
//   subheading: "Take advantage of our exclusive bundle offers and save more with our lash kits.",
//   listItems: [
//     {
//       boldText: "Buy 4 kits, get 1 free!",
//       description: "Perfect for lash lovers or those who want to stock up on our premium kits.",
//     },
//     {
//       boldText: "Subscribe & Save",
//       description: "Get 15% off on your next purchase when you subscribe to our monthly plan.",
//     },
//     {
//       boldText: "Free Shipping",
//       description: "On all bundle purchases.",
//     },
//     {
//       italicText:
//         "Our bundles are designed to provide the best value, ensuring you never run out of your favorite lash kits.",
//     },
//   ],
//   button: {
//     text: "Check Out",
//     href: "#", // Update this link as needed
//     className:
//       "inline-block bg-gray-100 border-2 border-gray-600 text-gray-800 py-2 px-4 rounded-full font-semibold hover:bg-gray-800 hover:text-gray-200 transition duration-300",
//   },
//   images: {
//     largeImage: bundleImage1,
//     smallImages: [bundleImage2, bundleImage3, bundleImage4, bundleImage5],
//   },
// };

// const BundleOptions = () => {
//   return (
//     <section className="text-white relative">
//       {/* Parallax Background */}
//       <Parallax bgImage={parallaxImg.src} bgImageAlt="Bundles Background" strength={300}>
//         <div className="mx-auto px-6 py-10 z-10" style={{ minHeight: '600px' }}>
//           <div className="container mx-auto flex flex-col md:flex-row gap-10 items-center">
//             {/* Left Side: Bundle Image Gallery */}
//             <div className="w-full md:w-1/2 grid grid-cols-2 grid-rows-3 gap-2 bg-gray-200 p-2">
//               {/* Large Image */}
//               <div className="col-span-2 row-span-2 overflow-hidden">
//                 <div className="relative w-full h-64 md:h-80 lg:h-96">
//                   <Image
//                     src={bundleContent.images.largeImage}
//                     alt="Bundle Image 1"
//                     fill
//                     className="object-cover"
//                   />
//                 </div>
//               </div>

//               {/* Smaller Images */}
//               {bundleContent.images.smallImages.map((image, index) => (
//                 <div key={index} className="col-span-1 overflow-hidden">
//                   <div className="relative w-full h-32 md:h-40 lg:h-48">
//                     <Image src={image} alt={`Bundle Image ${index + 2}`} fill className="object-cover" />
//                   </div>
//                 </div>
//               ))}
//             </div>

//             {/* Right Side: Bundle Offers Text */}
//             <div className="w-full md:w-1/2 space-y-6 px-4">
//               <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-libre italic">
//                 {bundleContent.heading}
//               </h2>
//               <p className="text-md md:text-lg lg:text-xl text-gray-300 italic">
//                 {bundleContent.subheading}
//               </p>
//               <ul className="space-y-4">
//                 {bundleContent.listItems.map((item, index) => (
//                   <li key={index} className="text-gray-300">
//                     {item.boldText && <span className="font-bold">{item.boldText}</span>} {item.description}
//                     {item.italicText && (
//                       <span className="font-bold italic block pt-8">{item.italicText}</span>
//                     )}
//                   </li>
//                 ))}
//               </ul>
//               <a href={bundleContent.button.href} className={bundleContent.button.className}>
//                 {bundleContent.button.text}
//               </a>
//             </div>
//           </div>
//         </div>
//       </Parallax>
//     </section>
//   );
// };

// export default BundleOptions;



// BundleOptions.jsx

'use client';

import React, { useEffect, useState } from 'react';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import Image from 'next/image';
import bundleImage1 from '../assets/bgImage.jpg'; // Fallback image
import { Parallax } from 'react-parallax';
import { db } from "../lib/firebase"; // Import the Firebase setup
import { doc, getDoc } from 'firebase/firestore';
import { FaLocationArrow } from "react-icons/fa";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
// import { MdArrowForward } from 'react-icons/md';



const BundleOptions = () => {
  const [bundleData, setBundleData] = useState({
    heading: "",
    subheading: "",
    images: {
      largeImage: "",        // Empty string for large image URL
      smallImages: [],       // Empty array for small images
      parallaxImages: "",    // Empty string for parallax image URL
    },
    points: [],
  });

  useEffect(() => {
    const fetchBundleData = async () => {
      try {
        const docRef = doc(db, 'content', 'bundleOptions');  // Reference to the specific document
        const docSnapshot = await getDoc(docRef);  // Fetch the document snapshot

        if (docSnapshot.exists()) {
          const data = docSnapshot.data(); // Get the document data
          console.log(data);  // Or set it to your state
          setBundleData(data)
        } else {
          console.log("No such document!");
        }
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchBundleData();
  }, []); // Empty dependency array means this runs once when the component mounts


  if (!bundleData) {
    return <p>Loading...</p>;
  }

  return (
    <section className="text-white relative">
      <Parallax bgImage={bundleData.images.parallaxImage || bundleImage1.src} bgImageAlt="Bundles Background" strength={300}>
        <div className="mx-auto px-6 py-10 z-10" style={{ minHeight: '600px' }}>
          <div className="container mx-auto flex flex-col md:flex-row gap-10 items-center">
            {/* Left Side: Bundle Image Gallery */}
            <div className="w-full md:w-1/2 grid grid-cols-2 grid-rows-3 gap-2 bg-gray-200 p-2">
              {/* Large Image */}
              <div className="col-span-2 row-span-2 overflow-hidden">
                <div className="relative w-full h-64 md:h-80 lg:h-96">
                  <Image src={bundleData.images.largeImage || bundleImage1.src} alt="Bundle Image" layout="fill" objectFit="cover" />
                </div>
              </div>
              {Array.isArray(bundleData.images.smallImages) && bundleData.images.smallImages.length > 0 ? (
                bundleData.images.smallImages.map((image, index) => (
                  <div key={index} className="overflow-hidden relative w-full h-44">
                    <Image src={image} alt={`Small Image ${index}`} layout="fill" objectFit="cover" />
                  </div>
                ))
              ) : ""}
            </div>

            {/* Right Side: Bundle Text and Button */}
            <div className="w-full md:w-1/2 text-center md:text-left">
              <h2 className="text-4xl font-semibold my-3">{bundleData.heading}</h2>
              <p className="text-xl text-gray-400">{bundleData.subheading}</p>
              <div className="mt-6">
                {bundleData.points.map((item, index) => (
                  <p key={index} className="text-lg my-2 flex gap-2 items-center  text-gray-200"><IoIosArrowForward /> {item}</p>
                ))}
              </div>
              <a
                href={"/"}
                className=" flex w-fit gap-2 items-center box-content  mt-6 py-2 px-3 font-semibold bg-gray-200 text-black rounded-lg hover:bg-gray-800 hover:text-white hover:border-2 duration-300"
              >
                Check Out <FaLocationArrow />
              </a>
            </div>
          </div>
        </div>
      </Parallax>
    </section>
  );
};

export default BundleOptions;
