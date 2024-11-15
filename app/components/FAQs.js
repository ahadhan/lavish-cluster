// 'use client';

// import React, { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import '../../app/globals.css';

// // Configuration Object for Dynamic Content
// const faqContent = {
//   section: {
//     id: 'testimonials', // Update to 'faq' if necessary
//     heading: 'Frequently Asked Questions',
//   },
//   faqs: [
//     {
//       id: 1,
//       question: 'How long do cluster lashes stay on for?',
//       answer:
//         'These extensions usually last between 10 to 14 days as long as they are applied correctly.',
//     },
//     {
//       id: 2,
//       question: 'What are the pros of cluster lashes?',
//       answer:
//         'Customizable: With cluster lashes, you can control the level of volume and length you wish to achieve.',
//     },
//     {
//       id: 3,
//       question: 'Can you shower with cluster lashes?',
//       answer: 'Yes, the Coco bond (glue) is waterproof.',
//     },
//     {
//       id: 4,
//       question: 'Should I overlap cluster lashes?',
//       answer:
//         'If you choose to not overlap, you may notice your segments begin to separate. We recommend overlapping at least a cluster length.',
//     },
//     {
//       id: 5,
//       question: 'Are lash clusters better than strips?',
//       answer:
//         'Offers a longer wear time than strip lashes, lasting around 10 to 14 days.',
//     },
//     // Add more FAQs here as needed
//   ],
// };

// const FAQSection = () => {
//   const { section, faqs } = faqContent;
//   const [activeIndex, setActiveIndex] = useState(null); // Track the active question

//   const toggleAnswer = (index) => {
//     if (activeIndex === index) {
//       setActiveIndex(null); // Close if the same question is clicked again
//     } else {
//       setActiveIndex(index); // Open the clicked question
//     }
//   };

//   return (
//     <section id={section.id} className="py-20 bg-gradient-bottom-to-top text-white mb-2">
//       <div className="container mx-auto px-6">
//         {/* Dynamic Heading */}
//         <motion.h2
//           className="text-3xl md:text-4xl font-bold text-center mb-10 font-libre italic"
//           initial={{ opacity: 0, y: -20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1 }}
//         >
//           {section.heading}
//         </motion.h2>

//         {/* FAQ List */}
//         <div className="space-y-4">
//           {faqs.map((faq, index) => (
//             <motion.div
//               key={faq.id}
//               className="border-b border-gray-600 pb-4"
//               initial={{ x: index % 2 === 0 ? -100 : 100, opacity: 0 }}
//               whileInView={{ x: 0, opacity: 1 }}
//               transition={{ duration: 0.6, ease: 'easeInOut' }}
//               viewport={{ once: true }}
//             >
//               {/* Question */}
//               <button
//                 onClick={() => toggleAnswer(index)}
//                 className="w-full text-left text-lg md:text-xl font-semibold flex justify-between items-center focus:outline-none"
//               >
//                 <span className="text-white">{faq.question}</span>
//                 <motion.span
//                   className="ml-2 text-2xl"
//                   initial={{ rotate: 0 }}
//                   animate={{ rotate: activeIndex === index ? 180 : 0 }}
//                   transition={{ duration: 0.3 }}
//                 >
//                   {activeIndex === index ? '-' : '+'}
//                 </motion.span>
//               </button>

//               {/* Answer */}
//               <AnimatePresence>
//                 {activeIndex === index && (
//                   <motion.p
//                     className="mt-2 text-gray-400"
//                     initial={{ opacity: 0, height: 0 }}
//                     animate={{ opacity: 1, height: 'auto' }}
//                     exit={{ opacity: 0, height: 0 }}
//                     transition={{ duration: 0.4, ease: 'easeInOut' }}
//                   >
//                     {faq.answer}
//                   </motion.p>
//                 )}
//               </AnimatePresence>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default FAQSection;




// // components/admin/AdminFAQs.jsx



'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../../app/globals.css';
import { db } from '../lib/firebase'; // Firebase setup
import { doc, getDoc } from 'firebase/firestore';

const FAQSection = () => {
  const [faqs, setFaqs] = useState([]);
  const [activeIndex, setActiveIndex] = useState(null);

  // Fetch FAQs from Firebase
  const fetchFaqs = async () => {
    try {
      const docRef = doc(db, 'content', 'faqSection');
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setFaqs(docSnap.data().faqs || []);
      } else {
        console.log('No FAQs found!');
      }
    } catch (error) {
      console.error('Error fetching FAQs:', error);
    }
  };

  useEffect(() => {
    fetchFaqs();
  }, []);

  const toggleAnswer = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  if (faqs.length === 0) return <div>Loading FAQs...</div>;

  return (
    <section id="faq" className="py-20 bg-gradient-bottom-to-top text-white mb-2">
      <div className="container mx-auto px-6">
        {/* Dynamic Heading */}
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-10 font-libre italic"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Frequently Asked Questions
        </motion.h2>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.id}
              className="border-b border-gray-600 pb-4"
              initial={{ x: index % 2 === 0 ? -100 : 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, ease: 'easeInOut' }}
              viewport={{ once: true }}
            >
              {/* Question */}
              <button
                onClick={() => toggleAnswer(index)}
                className="w-full text-left text-lg md:text-xl font-semibold flex justify-between items-center focus:outline-none"
              >
                <span className="text-white">{faq.question}</span>
                <motion.span
                  className="ml-2 text-2xl"
                  initial={{ rotate: 0 }}
                  animate={{ rotate: activeIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {activeIndex === index ? '-' : '+'}
                </motion.span>
              </button>

              {/* Answer */}
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.p
                    className="mt-2 text-gray-400"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.4, ease: 'easeInOut' }}
                  >
                    {faq.answer}
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
