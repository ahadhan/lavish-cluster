'use client';

import React, { useState } from 'react';

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null); // Track the active question

  const toggleAnswer = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null); // Close if the same question is clicked again
    } else {
      setActiveIndex(index); // Open the clicked question
    }
  };

  // Array of FAQ questions and answers
  const faqData = [
    {
      question: 'How long do cluster lashes stay on for?',
      answer: 'These extensions usually last between 10 to 14 days as long as they are applied correctly.',
    },
    {
      question: 'What are the pros of cluster lashes?',
      answer: 'Customizable: With cluster lashes, you can control the level of volume and length you wish to achieve.',
    },
    {
      question: 'Can you shower with cluster lashes?',
      answer: 'Yes, the Coco bond (glue) is waterproof.',
    },
    {
      question: 'Should I overlap cluster lashes?',
      answer: 'If you choose to not overlap, you may notice your segments begin to separate. We recommend overlapping at least a cluster length.',
    },
    {
      question: 'Are lash clusters better than strips?',
      answer: 'Offers a longer wear time than strip lashes, lasting around 10 to 14 days.',
    },
  ];

  return (
    <section className="py-20 bg-gradient-top-to-bottom text-white mb-2">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-10 font-libre italic">Frequently Asked Questions</h2>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <div key={index} className="border-b border-gray-600 pb-4">
              {/* Question */}
              <button
                onClick={() => toggleAnswer(index)}
                className="w-full text-left text-xl font-semibold text-white flex justify-between items-center focus:outline-none"
              >
                {faq.question}
                <span className="ml-2">
                  {activeIndex === index ? '-' : '+'}
                </span>
              </button>

              {/* Answer */}
              {activeIndex === index && (
                <p className="mt-2 text-gray-400">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
