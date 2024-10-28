
// import React from 'react';
// import Image from 'next/image';
// import bundleImage1 from '../assets/1.webp';
// import bundleImage2 from '../assets/2.webp';
// import bundleImage3 from '../assets/3.webp';
// import bundleImage4 from '../assets/4.webp';
// import bundleImage5 from '../assets/5.webp';
// import parallaxImg from '../assets/bgImage.jpg'
// import { Parallax } from 'react-parallax';

// const BundleOptions = () => {
//     return (
//         <section className="text-white relative ">
//             {/* Parallax Background */}
//             <Parallax
//                 bgImage={parallaxImg.src}
//                 bgImageAlt="Bundles Background"
//                 strength={300}
//             >
//                 <div className="mx-auto px-6 py-10 z-10" style={{ minHeight: '600px' }}>
//                     <div className="container mx-auto flex flex-col md:flex-row gap-10 items-center">
//                         {/* Left Side: Bundle Image Gallery */}
//                         <div className="w-full md:w-1/2 grid grid-cols-2 grid-rows-3 gap-2 bg-gray-200 p-2">
//                             {/* Large Image */}
//                             <div className="col-span-2 row-span-2 overflow-hidden ">
//                                 <div className="relative w-full h-64 md:h-80 lg:h-96">
//                                     <Image
//                                         src={bundleImage1}
//                                         alt="Bundle Image 1"
//                                         fill
//                                         className="object-cover "
//                                     />
//                                 </div>
//                             </div>

//                             {/* Smaller Images */}
//                             {[bundleImage2, bundleImage3, bundleImage4, bundleImage5].map((image, index) => (
//                                 <div key={index} className="col-span-1 overflow-hidden ">
//                                     <div className="relative w-full h-32 md:h-40 lg:h-48">
//                                         <Image
//                                             src={image}
//                                             alt={`Bundle Image ${index + 2}`}
//                                             fill
//                                             className="object-cover "
//                                         />
//                                     </div>
//                                 </div>
//                             ))}
//                         </div>

//                         {/* Right Side: Bundle Offers Text */}
//                         <div className="w-full md:w-1/2 space-y-6 px-4">
//                             <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-libre italic">
//                                 Bundle Options
//                             </h2>
//                             <p className="text-md md:text-lg lg:text-xl text-gray-300 italic">
//                                 Take advantage of our exclusive bundle offers and save more with our lash kits.
//                             </p>
//                             <ul className="space-y-4">
//                                 <li className="text-gray-300">
//                                     <span className="font-bold">Buy 4 kits, get 1 free!</span> Perfect for lash lovers or those who want to stock up on our premium kits.
//                                 </li>
//                                 <li className="text-gray-300">
//                                     <span className="font-bold">Subscribe & Save</span> – Get 15% off on your next purchase when you subscribe to our monthly plan.
//                                 </li>
//                                 <li className="text-gray-300 mb-10">
//                                     <span className="font-bold">Free Shipping</span> on all bundle purchases.
//                                 </li>
//                                 <li className="text-gray-300 italic pt-8">
//                                     Our bundles are designed to provide the best value, ensuring you never run out of your favorite lash kits.
//                                 </li>
//                             </ul>
//                             <a
//                                 href="#"
//                                 className="inline-block bg-gray-100 border-2 border-gray-600 text-gray-600 py-2 px-4 rounded-full font-semibold hover:bg-gray-800 hover:text-gray-200 transition duration-300"
//                             >
//                                 Check Out
//                             </a>
//                         </div>
//                     </div>
//                 </div>
//             </Parallax>
//         </section>
//     );
// };

// export default BundleOptions;











'use client';

import React from 'react';
import Image from 'next/image';
import bundleImage1 from '../assets/1.webp';
import bundleImage2 from '../assets/2.webp';
import bundleImage3 from '../assets/3.webp';
import bundleImage4 from '../assets/4.webp';
import bundleImage5 from '../assets/5.webp';
import parallaxImg from '../assets/bgImage.jpg';
import { Parallax } from 'react-parallax';

// Configuration Object for Dynamic Content
const bundleContent = {
  heading: "Bundle Options",
  subheading: "Take advantage of our exclusive bundle offers and save more with our lash kits.",
  listItems: [
    {
      boldText: "Buy 4 kits, get 1 free!",
      description: "Perfect for lash lovers or those who want to stock up on our premium kits.",
    },
    {
      boldText: "Subscribe & Save",
      description: "Get 15% off on your next purchase when you subscribe to our monthly plan.",
    },
    {
      boldText: "Free Shipping",
      description: "On all bundle purchases.",
    },
    {
      italicText:
        "Our bundles are designed to provide the best value, ensuring you never run out of your favorite lash kits.",
    },
  ],
  button: {
    text: "Check Out",
    href: "#", // Update this link as needed
    className:
      "inline-block bg-gray-100 border-2 border-gray-600 text-gray-600 py-2 px-4 rounded-full font-semibold hover:bg-gray-800 hover:text-gray-200 transition duration-300",
  },
  images: {
    largeImage: bundleImage1,
    smallImages: [bundleImage2, bundleImage3, bundleImage4, bundleImage5],
  },
};

const BundleOptions = () => {
  return (
    <section className="text-white relative">
      {/* Parallax Background */}
      <Parallax bgImage={parallaxImg.src} bgImageAlt="Bundles Background" strength={300}>
        <div className="mx-auto px-6 py-10 z-10" style={{ minHeight: '600px' }}>
          <div className="container mx-auto flex flex-col md:flex-row gap-10 items-center">
            {/* Left Side: Bundle Image Gallery */}
            <div className="w-full md:w-1/2 grid grid-cols-2 grid-rows-3 gap-2 bg-gray-200 p-2">
              {/* Large Image */}
              <div className="col-span-2 row-span-2 overflow-hidden">
                <div className="relative w-full h-64 md:h-80 lg:h-96">
                  <Image
                    src={bundleContent.images.largeImage}
                    alt="Bundle Image 1"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Smaller Images */}
              {bundleContent.images.smallImages.map((image, index) => (
                <div key={index} className="col-span-1 overflow-hidden">
                  <div className="relative w-full h-32 md:h-40 lg:h-48">
                    <Image src={image} alt={`Bundle Image ${index + 2}`} fill className="object-cover" />
                  </div>
                </div>
              ))}
            </div>

            {/* Right Side: Bundle Offers Text */}
            <div className="w-full md:w-1/2 space-y-6 px-4">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-libre italic">
                {bundleContent.heading}
              </h2>
              <p className="text-md md:text-lg lg:text-xl text-gray-300 italic">
                {bundleContent.subheading}
              </p>
              <ul className="space-y-4">
                {bundleContent.listItems.map((item, index) => (
                  <li key={index} className="text-gray-300">
                    {item.boldText && <span className="font-bold">{item.boldText}</span>} {item.description}
                    {item.italicText && (
                      <span className="font-bold italic block pt-8">{item.italicText}</span>
                    )}
                  </li>
                ))}
              </ul>
              <a href={bundleContent.button.href} className={bundleContent.button.className}>
                {bundleContent.button.text}
              </a>
            </div>
          </div>
        </div>
      </Parallax>
    </section>
  );
};

export default BundleOptions;
