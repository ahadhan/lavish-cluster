// 'use client';

// import React, { useEffect, useState } from 'react';
// import { collection, getDocs } from 'firebase/firestore';
// import Image from 'next/image';
// import { motion } from 'framer-motion';
// import { FaArrowRightLong } from "react-icons/fa6";
// import { GrNext, GrPrevious } from 'react-icons/gr';
// import { useRouter } from 'next/navigation';
// import { db } from '../lib/firebase';
// import { useProduct } from "../context/ProductContext"; // Import the context


// const ProductSection = () => {
//   const router = useRouter();
//   const { setSelectedProduct } = useProduct(); // Access the context to set selected product
//   const [products, setProducts] = useState([]);
//   const [currentProduct, setCurrentProduct] = useState(0);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const querySnapshot = await getDocs(collection(db, 'products'));
//         const productData = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
//         setProducts(productData);
//       } catch (error) {
//         console.error('Error fetching products:', error);
//       }
//     };

//     fetchProducts();
//   }, []);

//   const handleShopNow = () => {
//     const product = products[currentProduct];
//     if (product) {
//       setSelectedProduct(product); // Set the selected product in context
//       router.push(`/products/cart/${product.id}`);
//     }
//   };


//   const handleNext = () => {
//     setCurrentProduct((prevProduct) => (prevProduct + 1) % products.length);
//   };

//   const handlePrevious = () => {
//     setCurrentProduct((prevProduct) => (prevProduct === 0 ? products.length - 1 : prevProduct - 1));
//   };

//   const current = products[currentProduct];

//   if (products.length === 0) {
//     return (
//       <section id='products' className="py-20 bg-gradient-top-to-bottom text-primaryColor">
//         <div className="container mx-auto px-6">
//           <motion.h2
//             className="text-4xl font-extrabold mb-12 text-center text-gray-300 font-libre italic"
//             initial={{ opacity: 0, y: -30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1 }}
//           >
//             Our Recent Arrivals!
//           </motion.h2>
//           <p className="text-center text-gray-400 text-xl font-semibold">
//             No products to show!
//           </p>
//         </div>
//       </section>
//     );
//   }

//   return (
//     <section id='products' className="py-20 bg-gradient-top-to-bottom text-primaryColor">
//       <div className="container mx-auto px-6">
//         <motion.h2
//           className="text-4xl font-extrabold mb-12 text-center text-gray-300 font-libre italic"
//           initial={{ opacity: 0, y: -30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1 }}
//         >
//           Our Recent Arrivals!
//         </motion.h2>

//         <div className="flex flex-col md:flex-row items-center gap-10">
//           {/* Left Side: Product Image */}
//           <motion.div
//             initial={{ opacity: 0, x: -50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 1 }}
//             className="w-full md:w-1/2"
//           >
//             <div className="relative w-full h-64 md:h-80 bg-gray-200 rounded-lg overflow-hidden shadow-lg">
//               <Image
//                 src={current.imageUrl}
//                 alt={current.title}
//                 layout="fill"
//                 objectFit="cover"
//                 className="rounded-lg"
//               />
//             </div>
//           </motion.div>

//           {/* Right Side: Product Details */}
//           <motion.div
//             initial={{ opacity: 0, x: 50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 1 }}
//             className="w-full md:w-1/2 space-y-6"
//           >
//             <h2 className="text-3xl text-gray-300 font-bold">{current.title}</h2>
//             <p className="text-xl text-gray-300 font-semibold font-libre">£ {current.price}</p>
//             <ul className="space-y-2">
//               {typeof current.description === 'string'
//                 ? current.description.split('\n').map((point, index) => (
//                   <li key={index} className="text-gray-300 flex items-center">
//                     <span className="mr-2 text-skin">•</span> {point}
//                   </li>
//                 ))
//                 : current.description?.map((point, index) => ( // Handle array case
//                   <li key={index} className="text-gray-300 flex items-center">
//                     <span className="mr-2 text-skin">•</span> {point}
//                   </li>
//                 ))}
//             </ul>

//             <motion.div
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               className="flex items-center gap-3 underline hover:text-gray-400 cursor-pointer text-skinColor duration-300"
//               onClick={handleShopNow}
//             >
//               <p className="font-libre ">Shop Now</p>
//               <FaArrowRightLong className="font-[300] mr-2" />
//             </motion.div>
//           </motion.div>
//         </div>

//         <div className="flex justify-center mt-10 space-x-4">
//           <motion.button
//             whileHover={{ scale: 1.1 }}
//             onClick={handlePrevious}
//             className={`px-3 py-2 bg-gray-600 rounded-full ${products.length > 1 ? 'hover:bg-gray-500' : 'opacity-50 cursor-not-allowed'
//               } transition duration-300`}
//           >
//             <GrPrevious className="text-2xl text-gray-100" />
//           </motion.button>
//           <motion.button
//             whileHover={{ scale: 1.1 }}
//             onClick={handleNext}
//             className={`px-3 py-2 bg-gray-600 rounded-full ${products.length > 1 ? 'hover:bg-gray-500' : 'opacity-50 cursor-not-allowed'
//               } transition duration-300`}
//           >
//             <GrNext className="text-2xl text-gray-100" />
//           </motion.button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ProductSection;












// "use client";

// import React, { useEffect, useState } from "react";
// import { collection, getDocs } from "firebase/firestore";
// // import Image from "next/image";
// import { motion } from "framer-motion";
// import { FaArrowRightLong } from "react-icons/fa6";
// import { GrNext, GrPrevious } from "react-icons/gr";
// import { useRouter } from "next/navigation";
// import { db } from "../lib/firebase";
// import { useProduct } from "../context/ProductContext"; // Import the context

// const ProductSection = () => {
//   const router = useRouter();
//   const { setSelectedProduct } = useProduct(); // Access the context to set selected product
//   const [products, setProducts] = useState([]);
//   const [currentProduct, setCurrentProduct] = useState(0);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const querySnapshot = await getDocs(collection(db, "products"));
//         const productData = querySnapshot.docs.map((doc) => ({
//           id: doc.id,
//           ...doc.data(),
//         }));
//         setProducts(productData);
//       } catch (error) {
//         console.error("Error fetching products:", error);
//       }
//     };

//     fetchProducts();
//   }, []);

//   const handleShopNow = () => {
//     const product = products[currentProduct];
//     if (product) {
//       setSelectedProduct(product); // Set the selected product in context
//       router.push(`/products/${product.id}`);
//     }
//   };

//   const handleNext = () => {
//     setCurrentProduct((prevProduct) => (prevProduct + 1) % products.length);
//   };

//   const handlePrevious = () => {  
//     setCurrentProduct((prevProduct) =>
//       prevProduct === 0 ? products.length - 1 : prevProduct - 1
//     );
//   };

//   if (products.length === 0) {
//     return (
//       <section id="products" className="py-20 bg-gradient-top-to-bottom text-primaryColor">
//         <div className="container mx-auto px-6">
//           <motion.h2
//             className="text-4xl font-extrabold mb-12 text-center text-gray-300 font-libre italic"
//             initial={{ opacity: 0, y: -30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1 }}
//           >
//             Our Recent Arrivals!
//           </motion.h2>
//           <p className="text-center text-gray-400 text-xl font-semibold">
//             No products to show!
//           </p>
//         </div>
//       </section>
//     );
//   }

//   const current = products[currentProduct];

//   return (
//     <section id="products" className="py-20 bg-gradient-top-to-bottom text-primaryColor">
//       <div className="container mx-auto px-6">
//         <motion.h2
//           className="text-4xl font-extrabold mb-12 text-center text-gray-300 font-libre italic"
//           initial={{ opacity: 0, y: -30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1 }}
//         >
//           Our Recent Arrivals!
//         </motion.h2>

//         <div className="flex flex-col md:flex-row items-center gap-10">
//           <motion.div
//             initial={{ opacity: 0, x: -50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 1 }}
//             className="w-full md:w-1/2"
//           >
//             <div className="relative w-full h-64 md:h-80 bg-gray-200 rounded-lg overflow-hidden shadow-lg">
//               <Image
//                 src={current.imageUrl}
//                 alt={current.title}
//                 layout="fill"
//                 objectFit="cover"
//                 className="rounded-lg"
//               />
//             </div>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, x: 50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 1 }}
//             className="w-full md:w-1/2 space-y-6"
//           >
//             <h2 className="text-3xl text-gray-300 font-bold">{current.title}</h2>
//             <p className="text-xl text-gray-300 font-semibold font-libre">£ {current.price}</p>
//             <ul className="space-y-2">
//               {typeof current.description === "string"
//                 ? current.description.split("\n").map((point, index) => (
//                     <li key={index} className="text-gray-300 flex items-center">
//                       <span className="mr-2 text-skin">•</span> {point}
//                     </li>
//                   ))
//                 : current.description?.map((point, index) => (
//                     <li key={index} className="text-gray-300 flex items-center">
//                       <span className="mr-2 text-skin">•</span> {point}
//                     </li>
//                   ))}
//             </ul>

//             <motion.div
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               className="flex items-center gap-3 underline hover:text-gray-400 cursor-pointer text-skinColor duration-300"
//               onClick={handleShopNow}
//             >
//               <p className="font-libre ">Shop Now</p>
//               <FaArrowRightLong className="font-[300] mr-2" />
//             </motion.div>
//           </motion.div>
//         </div>

//         <div className="flex justify-center mt-10 space-x-4">
//           <motion.button
//             whileHover={{ scale: 1.1 }}
//             onClick={handlePrevious}
//             className={`px-3 py-2 bg-gray-600 rounded-full ${
//               products.length > 1 ? "hover:bg-gray-500" : "opacity-50 cursor-not-allowed"
//             } transition duration-300`}
//           >
//             <GrPrevious className="text-2xl text-gray-100" />
//           </motion.button>
//           <motion.button
//             whileHover={{ scale: 1.1 }}
//             onClick={handleNext}
//             className={`px-3 py-2 bg-gray-600 rounded-full ${
//               products.length > 1 ? "hover:bg-gray-500" : "opacity-50 cursor-not-allowed"
//             } transition duration-300`}
//           >
//             <GrNext className="text-2xl text-gray-100" />
//           </motion.button>
//         </div>
//       </div>
//     </section>
//   );
// };
 
// export default ProductSection;






'use client';

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { collection, getDocs } from "firebase/firestore";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { FaArrowRightLong } from "react-icons/fa6";
import { GrNext, GrPrevious } from "react-icons/gr";
import { db } from "../lib/firebase";
import { useProduct } from "../context/ProductContext"; // Import the context
import defaultImg from '../assets/Aj.webp';


const ProductSection = () => {
  const router = useRouter();
  const { setSelectedProduct } = useProduct(); // Access the context to set selected product
  const [products, setProducts] = useState([]);
  const [currentProduct, setCurrentProduct] = useState(0);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "products"));
        const productData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setProducts(productData);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const handleShopNow = () => {
    const product = products[currentProduct];
    if (product) {
      setSelectedProduct(product); // Set the selected product in context
      router.push(`/products/${product.id}`);
    }
  };

  const handleNext = () => {
    setCurrentProduct((prevProduct) => (prevProduct + 1) % products.length);
  };

  const handlePrevious = () => {  
    setCurrentProduct((prevProduct) =>
      prevProduct === 0 ? products.length - 1 : prevProduct - 1
    );
  };

  if (products.length === 0) {
    return (
      <section id="products" className="py-20 bg-gradient-top-to-bottom text-primaryColor">
        <div className="container mx-auto px-6">
          <motion.h2
            className="text-4xl font-extrabold mb-12 text-center text-gray-300 font-libre italic"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Our Recent Arrivals!
          </motion.h2>
          <p className="text-center text-gray-400 text-xl font-semibold">
            No products to show!
          </p>
        </div>
      </section>
    );
  }

  const current = products[currentProduct];

  // Function to check if the image URL is valid
  // const isValidImageUrl = (url) => {
  //   return typeof url === "string" && url.trim() !== "" && url.startsWith("http");
  // };

  return (
    <section id="products" className="py-20 bg-gradient-top-to-bottom text-primaryColor">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-4xl font-extrabold mb-12 text-center text-gray-300 font-libre italic"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Our Recent Arrivals!
        </motion.h2>

        <div className="flex flex-col md:flex-row items-center gap-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="w-full md:w-1/2"
          >
            <div className="relative w-full h-64 md:h-80 bg-gray-200 rounded-lg overflow-hidden shadow-lg">
              
                <Image
                  src={current.images[0] || defaultImg}
                  alt={current.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />

            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="w-full md:w-1/2 space-y-6"
          >
            <h2 className="text-3xl text-gray-300 font-bold">{current.title}</h2>
            <p className="text-xl text-gray-300 font-semibold font-libre">£ {current.price}</p>
            <ul className="space-y-2">
              {typeof current.description === "string"
                ? current.description.split("\n").map((point, index) => (
                    <li key={index} className="text-gray-300 flex items-center">
                      <span className="mr-2 text-skin">•</span> {point}
                    </li>
                  ))
                : current.description?.map((point, index) => (
                    <li key={index} className="text-gray-300 flex items-center">
                      <span className="mr-2 text-skin">•</span> {point}
                    </li>
                  ))}
            </ul>
            <button
              onClick={handleShopNow}
              className=" text-skinColor  rounded-full flex items-center gap-2 hover:underline"
            >
              Shop Now <FaArrowRightLong />
            </button>
          </motion.div>
        </div>

        <div className="flex justify-center mt-12">
          <button
            onClick={handlePrevious}
            className="bg-gray-800 text-white py-2 px-4 rounded-full"
          >
            <GrPrevious />
          </button>
          <button
            onClick={handleNext}
            className="bg-gray-800 text-white py-2 px-4 rounded-full ml-4"
          >
            <GrNext />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
