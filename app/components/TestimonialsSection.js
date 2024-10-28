



// 'use client';

// import React, { useState, useEffect } from 'react';
// import Image from 'next/image';
// import { FaStar } from 'react-icons/fa';
// import { motion, AnimatePresence } from 'framer-motion';
// import p1 from '../assets/p1.webp';
// import '../../app/globals.css';

// const TestimonialsSection = () => {
//   const testimonials = [
//     {
//       id: 1,
//       name: 'Jane Doe',
//       role: 'Makeup Artist',
//       image: p1,
//       comment:
//         'Lavish Clusters has revolutionized my lash game! The application is so easy, and the results are stunning. My clients love the look!',
//     },
//     {
//       id: 2,
//       name: 'Emily Smith',
//       role: 'Beauty Influencer',
//       image: p1,
//       comment:
//         'The quality of these lashes is unmatched. They last all day without any irritation. Highly recommend Lavish Clusters!',
//     },
//     {
//       id: 3,
//       name: 'Sophia Lee',
//       role: 'Salon Owner',
//       image: p1,
//       comment:
//         'Our clients are thrilled with the results. Lavish Clusters offers a perfect balance between luxury and ease of use.',
//     },
//   ];

//   const [currentTestimonial, setCurrentTestimonial] = useState(0);

//   // Automatically transition to the next testimonial every 8 seconds
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentTestimonial((prevIndex) =>
//         (prevIndex + 1) % testimonials.length
//       );
//     }, 8000);

//     return () => clearInterval(interval); // Clear interval on component unmount
//   }, [testimonials.length]);

//   const { name, role, image, comment } = testimonials[currentTestimonial];

//   return (
//     <section id='testimonials' className="py-20 bg-gradient-top-to-bottom text-white">
//       <div className="container mx-auto px-6 flex flex-col items-center">
//         <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-12 font-libre italic">
//           What Our Customers Say
//         </h2>
//         <div className="relative w-full max-w-2xl">
//           <div className="absolute top-0 left-0 flex items-center space-x-4  bg-opacity-50 rounded-full p-3">
//             <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-white">
//               <Image
//                 src={image}
//                 alt={`Customer ${name}`}
//                 fill
//                 style={{ objectFit: 'cover' }}
//               />
//             </div>
//             <div>
//               <h3 className="font-semibold text-lg">{name}</h3>
//               <p className="text-gray-400">{role}</p>
//             </div>
//           </div>

//           {/* Centered Testimonial Text with Framer Motion */}
//           <div className="bg-opacity-70 rounded-xl shadow-lg mt-20 p-6 md:p-10">
//             <AnimatePresence mode="wait">
//               <motion.div
//                 key={currentTestimonial}
//                 initial={{ opacity: 0, y: 20, scale: 0.95 }}
//                 animate={{ opacity: 1, y: 0, scale: 1 }}
//                 exit={{ opacity: 0, y: -20, scale: 0.95 }}
//                 transition={{ duration: 0.6, ease: 'easeInOut' }}
//                 className="text-center"
//               >
//                 <p className="text-8xl text-gray-400 font-serif leading-tight mb-4">
//                   &ldquo;
//                 </p>
//                 <p className="text-xl md:text-2xl italic text-gray-200">
//                   {comment}
//                 </p>
//                 <div className="flex justify-center mt-4">
//                   {[...Array(5)].map((_, i) => (
//                     <FaStar key={i} className="text-yellow-500" />
//                   ))}
//                 </div>
//               </motion.div>
//             </AnimatePresence>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default TestimonialsSection;





'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { FaStar } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import p1 from '../assets/p1.webp'; // Consider using different images for each testimonial
import '../../app/globals.css';

// Configuration Object for Dynamic Content
const testimonialsContent = {
  section: {
    id: 'testimonials',
    heading: 'What Our Customers Say',
  },
  testimonials: [
    {
      id: 1,
      name: 'Jane Doe',
      role: 'Makeup Artist',
      image: p1, // You can replace p1 with different images for each testimonial
      comment:
        'Lavish Clusters has revolutionized my lash game! The application is so easy, and the results are stunning. My clients love the look!',
      rating: 5,
    },
    {
      id: 2,
      name: 'Emily Smith',
      role: 'Beauty Influencer',
      image: p1,
      comment:
        'The quality of these lashes is unmatched. They last all day without any irritation. Highly recommend Lavish Clusters!',
      rating: 5,
    },
    {
      id: 3,
      name: 'Sophia Lee',
      role: 'Salon Owner',
      image: p1,
      comment:
        'Our clients are thrilled with the results. Lavish Clusters offers a perfect balance between luxury and ease of use.',
      rating: 5,
    },
    // Add more testimonials here as needed
  ],
  autoTransitionInterval: 8000, // in milliseconds
};

const TestimonialsSection = () => {
  const { section, testimonials, autoTransitionInterval } = testimonialsContent;
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // Automatically transition to the next testimonial every 8 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, autoTransitionInterval);

    return () => clearInterval(interval); // Clear interval on component unmount
  }, [testimonials.length, autoTransitionInterval]);

  const { name, role, image, comment, rating } = testimonials[currentTestimonial];

  return (
    <section id={section.id} className="py-20 bg-gradient-top-to-bottom text-white">
      <div className="container mx-auto px-6 flex flex-col items-center">
        {/* Dynamic Heading */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-12 font-libre italic">
          {section.heading}
        </h2>

        <div className="relative w-full max-w-2xl">
          {/* Customer Details */}
          <div className="absolute top-0 left-0 flex items-center space-x-4 bg-opacity-50 rounded-full p-3">
            <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-white">
              <Image
                src={image}
                alt={`Customer ${name}`}
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div>
              <h3 className="font-semibold text-lg">{name}</h3>
              <p className="text-gray-400">{role}</p>
            </div>
          </div>

          {/* Centered Testimonial Text with Framer Motion */}
          <div className="bg-opacity-70 rounded-xl shadow-lg mt-20 p-6 md:p-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.95 }}
                transition={{ duration: 0.6, ease: 'easeInOut' }}
                className="text-center"
              >
                <p className="text-8xl text-gray-400 font-serif leading-tight mb-4">
                  &ldquo;
                </p>
                <p className="text-xl md:text-2xl italic text-gray-200">
                  {comment}
                </p>
                <div className="flex justify-center mt-4">
                  {/* Render stars based on rating */}
                  {[...Array(5)].map((_, i) => (
                    <FaStar
                      key={i}
                      className={`text-yellow-500 ${i < rating ? 'fill-yellow-500' : 'fill-gray-400'}`}
                    />
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
