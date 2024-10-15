// import react, { useState, useEffect } from 'react'
// import Image from 'next/image'
// import Link from 'next/link'
// import { FaChevronRight, FaInstagram, FaYoutube, FaTiktok, FaStar, FaBars, FaTimes } from 'react-icons/fa'
// import { motion } from 'framer-motion'
// import hero from '../assets/hero.webp'
// import p1 from '../assets/p1.webp'
// import p2 from '../assets/p2.webp'
// import p3 from '../assets/p3.webp'
// import p4 from '../assets/p4.webp'
// import '../../app/globals.css'

// const TestimonialsSection = () => {
//     const testimonials = [
//       {
//         id: 1,
//         name: 'Jane Doe',
//         role: 'Makeup Artist',
//   image:p1,
//         comment: 'Lavish Clusters has revolutionized my lash game! The application is so easy, and the results are stunning. My clients love the look!',
//       },
//       {
//         id: 2,
//         name: 'Emily Smith',
//         role: 'Beauty Influencer',
//   image:p1,
//         comment: 'The quality of these lashes is unmatched. They last all day without any irritation. Highly recommend Lavish Clusters!',
//       },
//       {
//         id: 3,
//         name: 'Sophia Lee',
//         role: 'Salon Owner',
//   image:p1,
//         comment: 'Our clients are thrilled with the results. Lavish Clusters offers a perfect balance between luxury and ease of use.',
//       },
//     ]
  
//     return (
//       <section id="testimonials" className="py-20 bg-gradient-bottom-to-top text-white">
//         <div className="container mx-auto px-6 ">
//           <motion.h2
//             className="text-4xl font-extrabold  text-center mb-12"
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             transition={{ duration: 1 }}
//           >
//             What Our Customers Say?
//           </motion.h2>
//           <div className="grid md:grid-cols-3 gap-8">
//             {testimonials.map((testimonial) => (
//               <motion.div
//                 key={testimonial.id}
//                 className="bg-secondaryColor rounded-lg p-6 border-2 border-yellow-500 text-gray-200"
//                 initial={{ opacity: 0, y: 50 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5, delay: testimonial.id * 0.2 }}
//               >
//                 <div className="flex  justify-between mb-4">
//                   <div className='flex '>
//                   <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
//                     <Image
//                       src={testimonial.image}
//                       alt={`Customer ${testimonial.name}`}
//                       fill
//                       style={{ objectFit: 'cover' }}
//                     />
//                   </div>
//                   <div>
//                     <h3 className="font-semibold">{testimonial.name}</h3>
//                     <p className="text-gray-500">{testimonial.role}</p>
//                   </div>
//                     </div>
//                   <div className="flex justify-center items-start ">
//                   {[...Array(5)].map((_, index) => (
//                     <FaStar key={index} className="w-4 h-4 text-yellow-400" />
//                   ))}
//                   <span className='text-sm ml-2'> 5.0 </span>
//                 </div>
//                 </div>
//                 <p className="mb-4">"{testimonial.comment}"</p>
                
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>
//     )
//   }

// export default TestimonialsSection





import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { FaStar } from 'react-icons/fa';
import { motion } from 'framer-motion';
import p1 from '../assets/p1.webp';
import '../../app/globals.css';

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Jane Doe',
      role: 'Makeup Artist',
      image: p1,
      comment:
        'Lavish Clusters has revolutionized my lash game! The application is so easy, and the results are stunning. My clients love the look!',
    },
    {
      id: 2,
      name: 'Emily Smith',
      role: 'Beauty Influencer',
      image: p1,
      comment:
        'The quality of these lashes is unmatched. They last all day without any irritation. Highly recommend Lavish Clusters!',
    },
    {
      id: 3,
      name: 'Sophia Lee',
      role: 'Salon Owner',
      image: p1,
      comment:
        'Our clients are thrilled with the results. Lavish Clusters offers a perfect balance between luxury and ease of use.',
    },
  ];

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // Automatically transition to the next testimonial every 8 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prevIndex) =>
        (prevIndex + 1) % testimonials.length
      );
    }, 8000);

    return () => clearInterval(interval); // Clear interval on component unmount
  }, [testimonials.length]);

  const { name, role, image, comment } = testimonials[currentTestimonial];

  return (
    <section className="py-20 bg-gradient-bottom-to-top text-white">
      <div className="container mx-auto px-6 flex flex-col items-center">
        <div className="relative w-full max-w-2xl">
          {/* Top Left Corner: Client Details */}
          <div className="absolute top-0 left-0 flex items-center space-x-4">
            <div className="relative w-14 h-14 rounded-full overflow-hidden">
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

          {/* Centered Testimonial Text */}
          <motion.div
            className="text-center mt-24"
            key={currentTestimonial}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-8xl text-white font-serif leading-tight ">
              &ldquo;
            </p>
            <p className="text-3xl italic text-gray-200">{comment}</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
