
// // 'use client'

// // import React, { useState } from 'react';
// // import Image from 'next/image';
// // import { motion } from 'framer-motion';
// // import p1 from '../assets/p1.webp';
// // import p2 from '../assets/p2.webp';
// // import p3 from '../assets/p3.webp';
// // import p4 from '../assets/p4.webp';
// // import { GrNext } from "react-icons/gr";
// // import { GrPrevious } from "react-icons/gr";
// // import '../../app/globals.css';

// // const ProductsSection = () => {
// //   const products = [
// //     {
// //       id: 1,
// //       title: 'Classic Elegance',
// //       description: 'Experience timeless beauty with our Classic Elegance lash kit.',
// //       price: '£29.99',
// //       image: p1, // Assuming you have imported this image
// //     },
// //     {
// //       id: 2,
// //       title: 'Voluminous Glam',
// //       description: 'Add volume and glamour with our Voluminous Glam lash kit.',
// //       price: '£34.99',
// //       image: p2, // Assuming you have imported this image
// //     },
// //     {
// //       id: 3,
// //       title: 'Natural Beauty',
// //       description: 'Enhance your natural lashes with our Natural Beauty lash kit.',
// //       price: '£24.99',
// //       image: p3, // Assuming you have imported this image
// //     },
// //     {
// //       id: 4,
// //       title: 'Dramatic Flair',
// //       description: 'Make a statement with our Dramatic Flair lash kit.',
// //       price: '£39.99',
// //       image: p4, // Assuming you have imported this image
// //     },
// //     {
// //       id: 5,
// //       title: 'Everyday Chic',
// //       description: 'Perfect for daily wear, the Everyday Chic lash kit adds subtle beauty.',
// //       price: '£19.99',
// //       image: p1, // Reusing p1 image
// //     },
// //     {
// //       id: 6,
// //       title: 'Bold and Beautiful',
// //       description: 'For a bold and striking look, the Bold and Beautiful lash kit is your go-to.',
// //       price: '£42.99',
// //       image: p2, // Reusing p2 image
// //     },
// //     {
// //       id: 7,
// //       title: 'Sleek Sensation',
// //       description: 'Get sleek and seamless lashes with our Sleek Sensation lash kit.',
// //       price: '£27.99',
// //       image: p3, // Reusing p3 image
// //     },
// //     {
// //       id: 8,
// //       title: 'Glamorous Nights',
// //       description: 'Turn heads at any event with our Glamorous Nights lash kit.',
// //       price: '£45.99',
// //       image: p4, // Reusing p4 image
// //     },
// //     {
// //       id: 9,
// //       title: 'Daytime Charm',
// //       description: 'For a subtle and charming look during the day, try our Daytime Charm lash kit.',
// //       price: '£22.99',
// //       image: p1, // Reusing p1 image
// //     },
// //     {
// //       id: 10,
// //       title: 'Radiant Luxe',
// //       description: 'Bring luxury to your lashes with the Radiant Luxe lash kit.',
// //       price: '£49.99',
// //       image: p2, // Reusing p2 image
// //     }
// //   ];


// //   const itemsPerPage = 4; // Number of products to display per page
// //   const [currentPage, setCurrentPage] = useState(0);
// //   const [quantities, setQuantities] = useState({});


// //   const handleQuantityChange = (id, value) => {
// //     setQuantities((prevQuantities) => ({
// //       ...prevQuantities,
// //       [id]: value,
// //     }));
// //   };


// //   const startIndex = currentPage * itemsPerPage;
// //   const selectedProducts = products.slice(startIndex, startIndex + itemsPerPage);

// //   const handleNext = () => {
// //     if (currentPage < Math.ceil(products.length / itemsPerPage) - 1) {
// //       setCurrentPage((prevPage) => prevPage + 1);
// //     }
// //   };

// //   const handlePrevious = () => {
// //     if (currentPage > 0) {
// //       setCurrentPage((prevPage) => prevPage - 1);
// //     }
// //   };

// //   return (
// //     <section id="products" className="py-20 bg-gray-300">
// //       <div className="container mx-auto px-6">
// //         <motion.h2
// //           className="text-3xl font-extrabold text-center mb-12"
// //           initial={{ opacity: 0 }}
// //           whileInView={{ opacity: 1 }}
// //           transition={{ duration: 1 }}
// //         >
// //           Our Premium Eyelash Kits
// //         </motion.h2>
// //         <div className="grid md:grid-cols-4 lg:grid-cols-4 gap-8">
// //           {selectedProducts.map((product) => (
// //             <motion.div
// //               key={product.id}
// //               className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
// //               initial={{ opacity: 0, y: 50 }}
// //               whileInView={{ opacity: 1, y: 0 }}
// //               transition={{ duration: 0.5, delay: product.id * 0.2 }}
// //             >
// //               <div className="relative w-full h-48">
// //                 <Image
// //                   src={product.image}
// //                   alt={product.title}
// //                   fill
// //                   style={{ objectFit: 'cover' }}
// //                   className="w-full h-48 object-cover"
// //                 />
// //               </div>
// //               <div className="p-6">
// //                 <h3 className="font-semibold text-xl mb-2">{product.title}</h3>
// //                 <p className="text-gray-600 mb-4">{product.description}</p>
// //                 <div className="flex justify-between items-center mb-4">
// //                   <span className="text-blue-600 text-xl font-bold">{product.price}</span>
// //                   <input
// //                     type="number"
// //                     min="1"
// //                     value={quantities[product.id] || 1 + "QTY"}
// //                     onChange={(e) => handleQuantityChange(product.id, e.target.value)}
// //                     className="w-16 border border-gray-300 rounded p-1 text-center"
// //                     placeholder="Qty"
// //                   />
// //                 </div>
// //                   <button className="bg-white hover:bg-gray-700 text-gray-700 hover:text-white  border-2 border-gray-700 font-bold py-2 px-4 rounded transition transform hover:scale-105 duration-200">
// //                     Add to Cart
// //                   </button>
// //               </div>
// //             </motion.div>
// //           ))}
// //         </div>
// //         <div className="flex justify-center mt-8 space-x-4">
// //           <button
// //             onClick={handlePrevious}
// //             className={`px-3 py-2 bg-gray-600 rounded ${currentPage === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-500'} transition duration-300`}
// //             disabled={currentPage === 0}
// //           >
// //             <GrPrevious className='text-2xl text-white' />

// //           </button>
// //           <button
// //             onClick={handleNext}
// //             className={`px-3 py-1 bg-gray-600 rounded ${currentPage === Math.ceil(products.length / itemsPerPage) - 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-500'} transition duration-300`}
// //             disabled={currentPage === Math.ceil(products.length / itemsPerPage) - 1}
// //           >
// //             <GrNext className='text-2xl text-white' />

// //           </button>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default ProductsSection;








// 'use client'

// import React, { useState } from 'react';
// import Image from 'next/image';
// import { motion } from 'framer-motion';
// import p1 from '../assets/p1.webp';
// import p2 from '../assets/p2.webp';
// import p3 from '../assets/p3.webp';
// import p4 from '../assets/p4.webp';
// import { GrNext, GrPrevious } from 'react-icons/gr';
// import { FaStar } from 'react-icons/fa'; // Import Font Awesome Star icon
// import { FaStarHalfAlt } from 'react-icons/fa'; // Import Font Awesome Star icon
// import '../../app/globals.css';

// const ProductsSection = ( {onProductClick} ) => {
//   const products = [

//     {
//       id: 1,
//       title: 'Classic Elegance',
//       description: 'Experience timeless beauty with our Classic Elegance lash kit.',
//       price: 29.99,
//       discountedPrice: 24.99,
//       category: 'Beauty',
//       brand: 'Lavish Clusters',
//       stockStatus: 'In Stock',
//       features: ['Waterproof bond', 'Long-lasting', 'Easy application'],
//       howToUse: 'Cleanse your lashes, apply the lash primer, and enjoy a flawless look.',
//       image: '/assets/p1.webp', // Replace with your image path
//       rating: 4.8, // Out of 5
//     },
//     {
//       id: 2,
//       title: 'Voluminous Glam',
//       description: 'Add volume and drama to your eyes with the Voluminous Glam lash kit.',
//       price: 34.99,
//       discountedPrice: 29.99,
//       category: 'Beauty',
//       brand: 'Glamour Essentials',
//       stockStatus: 'In Stock',
//       features: ['Bold volume', 'Easy to apply', 'All-day wear'],
//       howToUse: 'Align the lash cluster with your natural lash line and press gently for a voluminous look.',
//       image: '/assets/p2.webp', // Replace with your image path
//       rating: 4.5, // Out of 5
//     },
//     {
//       id: 3,
//       title: 'Natural Beauty',
//       description: 'Enhance your natural lashes with our lightweight Natural Beauty lash kit.',
//       price: 24.99,
//       discountedPrice: null,
//       category: 'Beauty',
//       brand: 'Naturals Collection',
//       stockStatus: 'Out of Stock',
//       features: ['Lightweight', 'Subtle look', 'Comfortable for long wear'],
//       howToUse: 'Gently place the lash clusters on your lash line for a seamless and natural finish.',
//       image: '/assets/p3.webp', // Replace with your image path
//       rating: 4.1, // Out of 5
//     },
//     {
//       id: 4,
//       title: 'Dramatic Flair',
//       description: 'Create a bold and dramatic look with our Dramatic Flair lash kit.',
//       price: 39.99,
//       discountedPrice: 35.99,
//       category: 'Beauty',
//       brand: 'High Impact Lashes',
//       stockStatus: 'In Stock',
//       features: ['Dramatic volume', 'Perfect for evening wear', 'Reusable'],
//       howToUse: 'Apply the lash adhesive and carefully place the lash clusters along the lash line for a bold effect.',
//       image: '/assets/p4.webp', // Replace with your image path
//       rating: 4.9, // Out of 5
//     },
//     {
//       id: 5,
//       title: 'Everyday Chic',
//       description: 'Achieve a simple, chic look with our Everyday Chic lash kit.',
//       price: 19.99,
//       discountedPrice: null,
//       category: 'Beauty',
//       brand: 'Daily Glam',
//       stockStatus: 'In Stock',
//       features: ['Lightweight', 'Natural finish', 'Ideal for daily wear'],
//       howToUse: 'Apply the lash clusters to your lash line for a comfortable, everyday look.',
//       image: '/assets/p5.webp', // Replace with your image path
//       rating: 4.2, // Out of 5
//     },
//     {
//       id: 6,
//       title: 'Bold and Beautiful',
//       description: 'For a striking, bold appearance, use the Bold and Beautiful lash kit.',
//       price: 42.99,
//       discountedPrice: 38.99,
//       category: 'Beauty',
//       brand: 'Bold Beauty',
//       stockStatus: 'In Stock',
//       features: ['Bold look', 'Waterproof bond', 'Durable for long wear'],
//       howToUse: 'Cleanse your lashes, apply the clusters for a bold, dramatic finish, and enjoy long-lasting wear.',
//       image: '/assets/p6.webp', // Replace with your image path
//       rating: 4.7, // Out of 5
//     },
//     {
//       id: 7,
//       title: 'Glamorous Nights',
//       description: 'Turn heads at any event with our Glamorous Nights lash kit.',
//       price: 45.99,
//       discountedPrice: 40.99,
//       category: 'Beauty',
//       brand: 'Night Glamour',
//       stockStatus: 'In Stock',
//       features: ['Full volume', 'Long-lasting hold', 'Perfect for parties'],
//       howToUse: 'Use the applicator to apply the lash clusters, ensuring a glamorous finish for any evening event.',
//       image: '/assets/p7.webp', // Replace with your image path
//       rating: 4.6, // Out of 5
//     },
//     {
//       id: 8,
//       title: 'Daytime Charm',
//       description: 'For a soft, charming daytime look, try our Daytime Charm lash kit.',
//       price: 22.99,
//       discountedPrice: null,
//       category: 'Beauty',
//       brand: 'Charm Collection',
//       stockStatus: 'In Stock',
//       features: ['Natural charm', 'Comfortable', 'Lightweight for all-day wear'],
//       howToUse: 'Gently place the lash clusters along your natural lash line for a soft daytime look.',
//       image: '/assets/p8.webp', // Replace with your image path
//       rating: 4.0, // Out of 5
//     },
//     {
//       id: 9,
//       title: 'Radiant Luxe',
//       description: 'Bring luxury to your lashes with the Radiant Luxe lash kit.',
//       price: 49.99,
//       discountedPrice: 44.99,
//       category: 'Beauty',
//       brand: 'Luxe Lashes',
//       stockStatus: 'In Stock',
//       features: ['Luxury finish', 'Soft and comfortable', 'Durable for multiple uses'],
//       howToUse: 'Place the lash clusters on your lash line and blend for a luxurious finish that lasts.',
//       image: '/assets/p9.webp', // Replace with your image path
//       rating: 4.9, // Out of 5
//     }

//   ];

//   const itemsPerPage = 4; // Number of products to display per page
//   const [currentPage, setCurrentPage] = useState(0);

//   const startIndex = currentPage * itemsPerPage;
//   const selectedProducts = products.slice(startIndex, startIndex + itemsPerPage);

//   const handleNext = () => {
//     if (currentPage < Math.ceil(products.length / itemsPerPage) - 1) {
//       setCurrentPage((prevPage) => prevPage + 1);
//     }
//   };

//   const handlePrevious = () => {
//     if (currentPage > 0) {
//       setCurrentPage((prevPage) => prevPage - 1);
//     }
//   };


//   const renderRating = (rating) => {
//     const fullStars = Math.floor(rating);
//     const halfStar = rating - fullStars >= 0.5;
//     const totalStars = fullStars + (halfStar ? 1 : 0);

//     return (
//       <div className="flex ">
//         {/* Full stars */}
//         {Array(fullStars).fill(0).map((_, index) => (
//           <FaStar key={index} className="text-yellow-500 mr-1" />
//         ))}
//         {/* Half star */}
//         {halfStar && <FaStarHalfAlt className="text-yellow-500 mr-1" />}
//         {/* Numeric rating */}
//         <span className="ml-2 text-xs text-gray-700">{rating}</span>
//       </div>
//     );
//   };

//   return (
//     <section id="products" className="py-20 bg-secondaryColor">
//       <div className="container mx-auto px-6">
//         <motion.h2
//           className="text-4xl font-extrabold text-primaryColor text-center mb-12"
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           transition={{ duration: 1 }}
//         >
//           Our Premium Eyelash Kits
//         </motion.h2>
//         <div className="grid md:grid-cols-4 lg:grid-cols-4 gap-8 ">
//           {selectedProducts.map((product) => (
//             <motion.div
//               key={product.id}
//               className="bg-primaryColor rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
//               initial={{ opacity: 0, y: 50 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: product.id * 0.2 }}
//               onClick={() => onProductClick(product)}
//             >
//               <div className="relative w-full h-48 bg-gray-200">
//                 <Image
//                   src={product.image}
//                   alt={product.title}
//                   fill
//                   style={{ objectFit: 'cover' }}
//                   className="w-full h-48 object-cover"
//                 />
//               </div>
//               <div className="p-6">
//                 <h3 className="font-semibold text-xl mb-2">{product.title}</h3>
//                 <p className="text-gray-600 mb-2">{product.description}</p>

//                 {/* Display star rating */}
//                 <div className="flex mb-4">
//                   {renderRating(product.rating)}
//                 </div>

//                 <div className="flex justify-between items-center mb-4">
//                   <span className="text-blue-600 text-2xl font-bold">{product.price}</span>
//                 <button className="bg-white hover:bg-gray-700 text-gray-700 hover:text-white border-2 border-gray-700 font-bold py-2 px-4 rounded transition transform hover:scale-105 duration-200">
//                   Add to Cart
//                 </button>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//         <div className="flex justify-center mt-8 space-x-4">
//           <button
//             onClick={handlePrevious}
//             className={`px-3 py-2 bg-gray-600 rounded ${currentPage === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-500'} transition duration-300`}
//             disabled={currentPage === 0}
//           >
//             <GrPrevious className='text-2xl text-white' />
//           </button>
//           <button
//             onClick={handleNext}
//             className={`px-3 py-1 bg-gray-600 rounded ${currentPage === Math.ceil(products.length / itemsPerPage) - 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-500'} transition duration-300`}
//             disabled={currentPage === Math.ceil(products.length / itemsPerPage) - 1}
//           >
//             <GrNext className='text-2xl text-white' />
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ProductsSection;



// 'use client';

// import React from 'react';
// import Image from 'next/image';
// import { FaArrowRightLong } from "react-icons/fa6";
// import productImage from '../assets/p1.webp'; // Replace with your actual product image path

// const ProductSection = () => {
//   // Sample product data
//   const product = {
//     name: 'Classic Elegance Lash Kit',
//     description: [
//       'Waterproof and long-lasting bond',
//       'Soft and comfortable to wear',
//       'Easy application with tweezers',
//       'Reusable up to 10 times',
//     ],
//     price: '£29.99',
//     image: productImage,
//   };

//   return (
//     <section className="py-20 bg-secondaryColor text-white">
//       <div className="container mx-auto px-6">
//         {/* Product Row */}
//         <div className="flex flex-col md:flex-row items-center gap-10">

//           {/* Left Side: Product Image */}

//           <div className="w-full md:w-1/2 text-shadow-light-white">
//             <Image
//               src={product.image}
//               alt={product.name}
//               className="rounded-lg"
//               width={500}
//               height={500}
//               style={{ objectFit: 'cover' }}
//             />
//           </div>

//           {/* Right Side: Product Details */}
//           <div className="w-full md:w-1/2 space-y-6">
//             {/* Product Name */}
//             <h2 className="text-4xl font-bold text-white">{product.name}</h2>

//             {/* Product Price */}
//             <p className="text-xl text-skin font-semibold font-libre"> {product.price}</p>

//             {/* Product Description */}
//             <ul className="space-y-2">
//               {product.description.map((point, index) => (
//                 <li key={index} className="text-gray-300 flex items-center">
//                   <span className="mr-2 text-skin">•</span> {point}
//                 </li>
//               ))}
//             </ul>

//             {/* Shop Now Button */}
//             <div className='flex items-center gap-3 underline hover:text-gray-400 cursor-pointer text-skinColor duration-300'>
//             <p className='font-libre italic '>Shop Now</p> <FaArrowRightLong className='font-[300] mr-2 ' />
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ProductSection;




// 'use client';

// import React from 'react';
// import Image from 'next/image';
// import { FaArrowRightLong } from "react-icons/fa6";
// import productImage from '../assets/p1.webp'; // Replace with your actual product image path

// const ProductSection = () => {
//   // Sample product data
//   const product = {
//     name: 'Classic Elegance Lash Kit',
//     description: [
//       'Waterproof and long-lasting bond',
//       'Soft and comfortable to wear',
//       'Easy application with tweezers',
//       'Reusable up to 10 times',
//     ],
//     price: '£29.99',
//     image: productImage,
//   };

//   return (
//     <section className="py-20 bg-secondaryColor text-white">
//       <div className="container mx-auto px-6">
//         {/* Product Row */}
//         <div className="flex flex-col md:flex-row items-center gap-10">

//           {/* Left Side: Product Image */}
//           <div className="w-full md:w-1/2 text-shadow-light-white">
//             <Image
//               src={product.image}
//               alt={product.name}
//               className="rounded-lg"
//               width={500}
//               height={500}
//               style={{ objectFit: 'cover' }}
//             />
//           </div>

//           {/* Right Side: Product Details */}
//           <div className="w-full md:w-1/2 space-y-6">
//             {/* Product Name */}
//             <h2 className="text-4xl font-bold text-white">{product.name}</h2>

//             {/* Product Price */}
//             <p className="text-xl text-skin font-semibold font-libre"> {product.price}</p>

//             {/* Product Description */}
//             <ul className="space-y-2">
//               {product.description.map((point, index) => (
//                 <li key={index} className="text-gray-300 flex items-center">
//                   <span className="mr-2 text-skin">•</span> {point}
//                 </li>
//               ))}
//             </ul>

//             {/* Shop Now Button */}
//             <div className='flex items-center gap-3 underline hover:text-gray-400 cursor-pointer text-skinColor duration-300'>
//               <p className='font-libre italic '>Shop Now</p> 
//               <FaArrowRightLong className='font-[300] mr-2 ' />
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ProductSection;


// 'use client';

// import React, { useState } from 'react';
// import { motion } from 'framer-motion';
// import Image from 'next/image';
// import { FaArrowRightLong } from "react-icons/fa6";
// import { GrNext, GrPrevious } from 'react-icons/gr'; // Pagination icons
// import productImage1 from '../assets/1.png'; // Replace with actual image path
// import productImage2 from '../assets/2.png'; // Replace with actual image path
// import productImage3 from '../assets/3.png'; // Replace with actual image path
// import productImage4 from '../assets/4.png'; // Replace with actual image path
// import productImage5 from '../assets/5.png'; // Replace with actual image path

// const ProductSection = () => {
//   // Product data array
//   const products = [
//     {
//       name: 'Classic Elegance Lash Kit',
//       description: [
//         'Waterproof and long-lasting bond',
//         'Soft and comfortable to wear',
//         'Easy application with tweezers',
//         'Reusable up to 10 times',
//       ],
//       price: '£ 29.99',
//       image: productImage1,
//     },
//     {
//       name: 'Voluminous Glam Lash Kit',
//       description: [
//         'Adds volume to your lashes',
//         'Comfortable for daily use',
//         'Reusable for multiple applications',
//         'Lightweight and durable',
//       ],
//       price: '£ 34.99',
//       image: productImage2,
//     },
//     {
//       name: 'Natural Beauty Lash Kit',
//       description: [
//         'Enhances your natural lashes',
//         'Perfect for everyday wear',
//         'Lightweight and easy to apply',
//         'Long-lasting hold with soft texture',
//       ],
//       price: '£ 24.99',
//       image: productImage3,
//     },
//   ];

//   // State to manage current product
//   const [currentProduct, setCurrentProduct] = useState(0);

//   // Function to go to the next product
//   const handleNext = () => {
//     setCurrentProduct((prevProduct) =>
//       prevProduct === products.length - 1 ? 0 : prevProduct + 1
//     );
//   };

//   // Function to go to the previous product
//   const handlePrevious = () => {
//     setCurrentProduct((prevProduct) =>
//       prevProduct === 0 ? products.length - 1 : prevProduct - 1
//     );
//   };

//   return (
//     <section className="py-20 bg-gradient-top-to-bottom text-primaryColor">
//       <div className="container mx-auto px-6">

//       <motion.h2
//           className="text-4xl font-extrabold mb-12 text-center text-gray-300"
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           transition={{ duration: 1 }}
//         >
//           Our Recent Arrivals!
//         </motion.h2>

//         {/* Product Row */}
//         <div className="flex flex-col md:flex-row items-center gap-10">
//           {/* Left Side: Product Image */}
//           <div className="w-full md:w-1/2 text-shadow-light-white">
//             <Image
//               src={products[currentProduct].image}
//               alt={products[currentProduct].name}
//               className="rounded-lg"
//               width={500}
//               height={500}
//               style={{ objectFit: 'cover' }}
//             />
//           </div>

//           {/* Right Side: Product Details */}
//           <div className="w-full md:w-1/2 space-y-6">
//             {/* Product Name */}
//             <h2 className="text-3xl text-gray-300 font-bold ">{products[currentProduct].name}</h2>

//             {/* Product Price */}
//             <p className="text-xl text-gray-300 font-semibold font-libre"> {products[currentProduct].price}</p>

//             {/* Product Description */}
//             <ul className="space-y-2">
//               {products[currentProduct].description.map((point, index) => (
//                 <li key={index} className="text-gray-300 flex items-center">
//                   <span className="mr-2 text-skin">•</span> {point}
//                 </li>
//               ))}
//             </ul>

//             {/* Shop Now Button */}
//             <div className='flex items-center gap-3 underline hover:text-gray-400 cursor-pointer text-skinColor duration-300'>
//               <p className='font-libre italic '>Shop Now</p> 
//               <FaArrowRightLong className='font-[300] mr-2 ' />
//             </div>
//           </div>
//         </div>

//         {/* Pagination Controls */}
//         <div className="flex justify-center mt-10 space-x-4">
//           <button
//             onClick={handlePrevious}
//             className={`px-3 py-2 bg-gray-600 rounded-full ${currentProduct === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-500'} transition duration-300`}
//             disabled={currentProduct === 0}
//           >
//             <GrPrevious className="text-2xl text-gray-100" />
//           </button>
//           <button
//             onClick={handleNext}
//             className={`px-3 py-2 bg-gray-600 rounded-full ${currentProduct === products.length - 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-500'} transition duration-300`}
//             disabled={currentProduct === products.length - 1}
//           >
//             <GrNext className="text-2xl text-gray-100" />
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ProductSection;




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
