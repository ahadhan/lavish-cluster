
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import step1 from '../assets/eyelash-1.jpg'; // Replace with actual image path
import step2 from '../assets/eyelash-1.jpg'; // Replace with actual image path
import step3 from '../assets/eyelash-1.jpg'; // Replace with actual image path
import step4 from '../assets/eyelash-1.jpg'; // Replace with actual image path
import step5 from '../assets/eyelash-1.jpg'; // Replace with actual image path

const ApplicationGuideline = () => {
  // Step data with images
  const steps = [
    {
      step: 1,
      title: 'Ensure Clean Lashes',
      description: 'Ensure lashes are clean and mascara free, apply a small amount of coco bond (glue) to the root of your natural lashes (not your entire lashes) wait 30 seconds for the coco bond to go tacky.',
      image: step1,
    },
    {
      step: 2,
      title: 'Apply the Lash Cluster',
      description: 'Then take our lavish tweezers, carefully remove the lash cluster, position the cluster beneath your natural lashes by gently lifting it against the root of your own lashes.',
      image: step2,
    },
    {
      step: 3,
      title: 'Seal the Lashes',
      description: 'Lightly dab the seal onto the lower and upper sides of your finished lashes to lock them in place (do not brush seal through your cluster lashes).',
      image: step3,
    },
    {
      step: 4,
      title: 'Secure the Lashes',
      description: 'Once lashes are nicely settled, take your lash tweezers, place your lashes in between your tweezers, and press them down gently to secure the individuals to your lash line. Your lashes will last between 7/10 days.',
      image: step4,
    },
    {
      step: 5,
      title: 'Remove the Lashes',
      description: 'To remove your individual lashes, use our remover which is infused with castor oil. Gently apply the remover to the top and bottom part of your lashes and they should easily release.',
      image: step5,
    }
  ];

  return (
    <section id="application-guide" className="py-20 bg-primaryColor">
      <div className="container mx-auto px-6">
        {/* Heading Section */}
        <motion.h2
          className="text-4xl font-extrabold mb-12 text-center text-gray-800"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Learn How To Apply?
        </motion.h2>
        
        {/* Steps Section */}
        <div className="space-y-16">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className={`flex flex-col md:flex-row items-center gap-6 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              {/* Step Image */}
              <div className="w-[250px] h-[200px]">
                <Image
                  src={step.image}
                  alt={`Step ${step.step}`}
                  className="rounded-xl "
                  style={{ objectFit: 'cover' }}
                />
              </div>

              {/* Step Content */}
              <div className="w-full md:w-2/5 space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-darkGray text-gray-800 font-bold rounded-full flex items-center justify-center text-7xl">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">{step.title}</h3>
                </div>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ApplicationGuideline;

