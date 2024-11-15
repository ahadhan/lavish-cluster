// 'use client';

// import { useEffect, useState } from 'react';
// import { useRouter } from 'next/navigation';
// import { useParams } from 'next/navigation';
// import { motion } from 'framer-motion';
// import { doc, getDoc } from 'firebase/firestore';
// import { db } from '../../lib/firebase'; // Your Firebase setup
// import Image from 'next/image';
// import Header from '../../components/Header';
// import Footer from '../../components/Footer';

// const ProductDetails = () => {
//   const { productId } = useParams(); // Get productId from URL
//   const router = useRouter();

//   const [product, setProduct] = useState(null);
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchProduct = async () => {
//       try {
//         const docRef = doc(db, 'products', productId); // Fetch product by ID
//         const docSnap = await getDoc(docRef);

//         if (docSnap.exists()) {
//           setProduct(docSnap.data());
//         } else {
//           console.error('No such product!');
//         }
//       } catch (error) {
//         console.error('Error fetching product:', error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProduct();
//   }, [productId]);

//   useEffect(() => {
//     if (product?.images?.length > 1) {
//       const interval = setInterval(() => {
//         setCurrentImageIndex((prevIndex) => (prevIndex + 1) % product.images.length);
//       }, 5000);
//       return () => clearInterval(interval);
//     }
//   }, [product]);

//   if (loading) {
//     return <div className="text-center text-gray-400 mt-10">Loading product details...</div>;
//   }

//   if (!product) {
//     return <div className="text-center text-red-500 mt-10">Product not found</div>;
//   }

//   const addToCart = () => {
//     alert(`${product.title} has been added to your cart!`);
//   };

//   return (
//     <div className="flex flex-col min-h-screen justify-between bg-gradient-bottom-to-top">
//       {/* Header */}
//       <Header />

//       {/* Go Back Button */}
//       <div className="container mx-auto px-6 pt-36 pb-8">
//         <motion.button
//           onClick={() => router.back()}
//           whileHover={{ scale: 1.05 }}
//           className="bg-gray-200 text-gray-800 py-2 px-4 rounded-lg shadow-md hover:bg-gray-300 transition duration-300"
//         >
//           ← Go Back
//         </motion.button>
//       </div>

//       {/* Product Details Section */}
//       <div className="flex flex-col items-center justify-center flex-grow mx-8">
//         <h1 className="text-white text-3xl text-center font-libre italic font-bold my-10">Product Preview</h1>
//         <motion.div
//           initial={{ opacity: 0, y: -50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="bg-black shadow-lg p-6 max-w-2xl w-full border-2 border-white"
//         >
//           {/* Product Image Carousel */}
//           <div className="w-full h-64 bg-gray-200 overflow-hidden mb-6 relative">
//             <Image
//               src={product.images[currentImageIndex]}
//               alt={product.title}
//               fill
//               style={{ objectFit: 'cover' }}
//             />
//           </div>

//           {/* Product Info */}
//           <h1 className="text-3xl font-bold text-gray-200 mb-4">{product.title}</h1>
//           <p className="text-gray-400 text-md mb-6">{product.description}</p>

//           {/* Additional Information */}
//           <p className="text-gray-400 font-libre">
//             <strong>Brand:</strong> {product.brand || 'Unknown'}
//           </p>
//           <p className="text-gray-400 font-libre">
//             <strong>Category:</strong> {product.category || 'Miscellaneous'}
//           </p>
//           <p className="text-gray-400 mb-4 font-libre">
//             <strong>Stock:</strong> {product.stock > 0 ? `${product.stock} in stock` : 'Out of stock'}
//           </p>

//           {/* Product Price */}
//           <div className="text-2xl font-semibold text-gray-200 mb-4">£ {product.price}</div>

//           {/* Add to Cart Button */}
//           <motion.button
//             whileHover={{ scale: 1.05 }}
//             className="text-gray-900 font-semibold bg-white border-2 border-gray-200 py-2 px-4 rounded-lg text-md hover:bg-secondaryColor hover:text-white transition duration-300"
//             onClick={addToCart}
//           >
//             Add to Cart
//           </motion.button>
//         </motion.div>
//       </div>

//       {/* Footer */}
//       <Footer />
//     </div>
//   );
// };

// export default ProductDetails;












'use client';

import { useState } from 'react';
import { db } from "../../../lib/firebase"; // Firebase setup
import { collection, addDoc } from "firebase/firestore";
import axios from 'axios';

const CreateProduct = () => {
  const [productData, setProductData] = useState({
    title: "",
    description: "",
    price: "",
    brand: "",
    category: "",
    stock: "",
    images: [], // To store Cloudinary URLs
  });

  const [imageFiles, setImageFiles] = useState([]); // Local file uploads
  const [isUploading, setIsUploading] = useState(false);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle image file selection
  const handleImageChange = (e) => {
    setImageFiles([...e.target.files]);
  };

  // Upload a single file to Cloudinary
  const uploadToCloudinary = async (file) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "lavish_cluster"); // Cloudinary upload preset

    try {
      const response = await axios.post(
        "https://api.cloudinary.com/v1_1/dq6dotbrs/image/upload", // Cloudinary endpoint
        formData
      );
      return response.data.secure_url; // Return uploaded image URL
    } catch (error) {
      console.error("Error uploading image to Cloudinary:", error);
      throw error;
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (imageFiles.length === 0) {
      alert("Please upload at least one image.");
      return;
    }

    setIsUploading(true);

    try {
      // Upload all images to Cloudinary
      const uploadedImages = await Promise.all(
        imageFiles.map((file) => uploadToCloudinary(file))
      );

      // Save product data to Firestore
      await addDoc(collection(db, "products"), {
        ...productData,
        images: uploadedImages, // Save Cloudinary URLs
        createdAt: new Date(),
      });

      alert("Product created successfully!");
      setProductData({
        title: "",
        description: "",
        price: "",
        brand: "",
        category: "",
        stock: "",
        images: [],
      });
      setImageFiles([]);
    } catch (error) {
      console.error("Error creating product:", error);
      alert("Error creating product. Please try again.");
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className="p-10 bg-black border-2 border-white text-white rounded-lg shadow-md max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Create a New Product</h2>
      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Product Title */}
        <div>
          <label htmlFor="title" className="block text-sm font-medium">
            Product Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={productData.title}
            onChange={handleChange}
            required
            className="mt-1 p-2 w-full bg-gray-700 text-white rounded"
          />
        </div>

        {/* Description */}
        <div>
          <label htmlFor="description" className="block text-sm font-medium">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={productData.description}
            onChange={handleChange}
            required
            className="mt-1 p-2 w-full bg-gray-700 text-white rounded"
          />
        </div>

        {/* Price */}
        <div>
          <label htmlFor="price" className="block text-sm font-medium">
            Price (£)
          </label>
          <input
            type="number"
            id="price"
            name="price"
            value={productData.price}
            onChange={handleChange}
            required
            min="0"
            step="0.01"
            className="mt-1 p-2 w-full bg-gray-700 text-white rounded"
          />
        </div>

        {/* Brand */}
        <div>
          <label htmlFor="brand" className="block text-sm font-medium">
            Brand
          </label>
          <input
            type="text"
            id="brand"
            name="brand"
            value={productData.brand}
            onChange={handleChange}
            className="mt-1 p-2 w-full bg-gray-700 text-white rounded"
          />
        </div>

        {/* Category */}
        <div>
          <label htmlFor="category" className="block text-sm font-medium">
            Category
          </label>
          <input
            type="text"
            id="category"
            name="category"
            value={productData.category}
            onChange={handleChange}
            className="mt-1 p-2 w-full bg-gray-700 text-white rounded"
          />
        </div>

        {/* Stock */}
        <div>
          <label htmlFor="stock" className="block text-sm font-medium">
            Stock Quantity
          </label>
          <input
            type="number"
            id="stock"
            name="stock"
            value={productData.stock}
            onChange={handleChange}
            required
            min="0"
            className="mt-1 p-2 w-full bg-gray-700 text-white rounded"
          />
        </div>

        {/* Images */}
        <div>
          <label htmlFor="images" className="block text-sm font-medium">
            Upload Images (Multiple Allowed)
          </label>
          <input
            type="file"
            id="images"
            accept="image/*"
            onChange={handleImageChange}
            multiple
            className="mt-1 w-full text-white bg-gray-700"
          />
          {imageFiles.length > 0 && (
            <p className="mt-2 text-sm text-gray-400">
              {imageFiles.map((file) => file.name).join(", ")}
            </p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isUploading}
          className="w-full py-2 bg-indigo-600 rounded"
        >
          {isUploading ? "Uploading..." : "Create Product"}
        </button>
      </form>
    </div>
  );
};

export default CreateProduct;
