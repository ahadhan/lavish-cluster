

'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaArrowRightLong } from "react-icons/fa6";
import { GrNext, GrPrevious } from 'react-icons/gr'; // Pagination icons
import productImage1 from '../assets/1.png'; // Replace with actual image path
import productImage2 from '../assets/2.png'; // Replace with actual image path
import productImage3 from '../assets/3.png'; // Replace with actual image path
import productImage4 from '../assets/4.png'; // Replace with actual image path
import productImage5 from '../assets/5.png'; // Replace with actual image path
import { useRouter } from 'next/navigation';


const ProductSection = () => {

  const router = useRouter();

  const handleShopNow = (productId) => {
    router.push(`/product/${productId}`);
  };

  // Product data array
  const products = [
    {
      name: 'Classic Elegance Lash Kit',
      description: [
        'Waterproof and long-lasting bond',
        'Soft and comfortable to wear',
        'Easy application with tweezers',
        'Reusable up to 10 times',
      ],
      price: '£ 29.99',
      image: productImage1,
    },
    {
      name: 'Voluminous Glam Lash Kit',
      description: [
        'Adds volume to your lashes',
        'Comfortable for daily use',
        'Reusable for multiple applications',
        'Lightweight and durable',
      ],
      price: '£ 34.99',
      image: productImage2,
    },
    {
      name: 'Natural Beauty Lash Kit',
      description: [
        'Enhances your natural lashes',
        'Perfect for everyday wear',
        'Lightweight and easy to apply',
        'Long-lasting hold with soft texture',
      ],
      price: '£ 24.99',
      image: productImage3,
    },
  ];

  // State to manage current product
  const [currentProduct, setCurrentProduct] = useState(0);

  // Function to go to the next product
  const handleNext = () => {
    setCurrentProduct((prevProduct) =>
      prevProduct === products.length - 1 ? 0 : prevProduct + 1
    );
  };

  // Function to go to the previous product
  const handlePrevious = () => {
    setCurrentProduct((prevProduct) =>
      prevProduct === 0 ? products.length - 1 : prevProduct - 1
    );
  };

  return (
    <section className="py-20 bg-gradient-top-to-bottom text-primaryColor">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-4xl font-extrabold mb-12 text-center text-gray-300"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Our Recent Arrivals!
        </motion.h2>

        {/* Product Row */}
        <div className="flex flex-col md:flex-row items-center gap-10">
          {/* Left Side: Product Image */}
          <div className="w-full md:w-1/2">
            <div className="relative w-full h-64 md:h-80 bg-gray-200 rounded-lg overflow-hidden">
              <Image
                src={products[currentProduct].image}
                alt={products[currentProduct].name}
                fill
                style={{ objectFit: 'cover' }}
                className="rounded-lg"
              />
            </div>
          </div>

          {/* Right Side: Product Details */}
          <div className="w-full md:w-1/2 space-y-6">
            {/* Product Name */}
            <h2 className="text-3xl text-gray-300 font-bold ">
              {products[currentProduct].name}
            </h2>

            {/* Product Price */}
            <p className="text-xl text-gray-300 font-semibold font-libre">
              {products[currentProduct].price}
            </p>

            {/* Product Description */}
            <ul className="space-y-2">
              {products[currentProduct].description.map((point, index) => (
                <li key={index} className="text-gray-300 flex items-center">
                  <span className="mr-2 text-skin">•</span> {point}
                </li>
              ))}
            </ul>

            {/* Shop Now Button */}
            <div className="flex items-center gap-3 underline hover:text-gray-400 cursor-pointer text-skinColor duration-300">
              <p className="font-libre italic ">Shop Now</p>
              <FaArrowRightLong className="font-[300] mr-2 " />
            </div>
          </div>
        </div>

        {/* Pagination Controls */}
        <div className="flex justify-center mt-10 space-x-4">
          <button
            onClick={handlePrevious}
            className={`px-3 py-2 bg-gray-600 rounded-full ${currentProduct === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-500'} transition duration-300`}
            disabled={currentProduct === 0}
          >
            <GrPrevious className="text-2xl text-gray-100" />
          </button>
          <button
            onClick={handleNext}
            className={`px-3 py-2 bg-gray-600 rounded-full ${currentProduct === products.length - 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-500'} transition duration-300`}
            disabled={currentProduct === products.length - 1}
          >
            <GrNext className="text-2xl text-gray-100" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
