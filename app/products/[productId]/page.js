'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../lib/firebase'; // Adjust the path to your Firebase config
import { auth } from '../../lib/firebase'; // Firebase auth
import Image from 'next/image';
// import Image from ""

const ProductDetailPage = ({ params: paramsPromise }) => {
  const router = useRouter();
  const [params, setParams] = useState(null); // State to store unwrapped params
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [customer, setCustomer] = useState(null); // State to store customer details

  // Unwrap params to get productId
  useEffect(() => {
    const unwrapParams = async () => {
      const resolvedParams = await paramsPromise;
      setParams(resolvedParams);
    };
    unwrapParams();
  }, [paramsPromise]);

  // Fetch product details by productId
  useEffect(() => {
    const fetchProduct = async () => {
      if (!params?.productId) return;
      setLoading(true);
      setError(null);

      try {
        const docRef = doc(db, 'products', params.productId); // Replace 'products' with your collection name
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setProduct({ id: docSnap.id, ...docSnap.data() });
        } else {
          setError('Product not found.');
        }
      } catch (err) {
        console.error('Error fetching product details:', err);
        setError('Failed to fetch product details.');
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [params]);

  // Fetch customer details (e.g., from Firebase Auth or a custom user service)
  useEffect(() => {
    const fetchCustomer = async () => {
      const user = auth.currentUser; // Assuming user is authenticated via Firebase
      if (user) {
        setCustomer({
          email: user.email,
          address: '123 Street Name, City, Country', // This can be fetched from a user profile document in Firestore
        });
      }
    };

    fetchCustomer();
  }, []);

  if (loading) {
    return (
      <div className="flex flex-col min-h-screen justify-center items-center bg-gradient-bottom-to-top">
        <p className="text-gray-300 text-xl">Loading product details...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col min-h-screen justify-center items-center bg-gradient-bottom-to-top">
        <p className="text-gray-300 text-xl">{error}</p>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="flex flex-col min-h-screen justify-center items-center bg-gradient-bottom-to-top">
        <p className="text-gray-300 text-xl">No product details available.</p>
      </div>
    );
  }

  // Generate the Cloudinary URL for the image
  const getCloudinaryImage = (publicId) => {
    const baseUrl = 'https://res.cloudinary.com/your-cloud-name/image/upload/';
    return `${baseUrl}${publicId}`;
  };

  const thumbnail = product.images[0]
    ? getCloudinaryImage(product.imagePublicId)
    : '/default-image.png'; // Fallback to default image if Cloudinary ID is missing

  return (
    <div className="min-h-screen bg-gradient-bottom-to-top py-12">
      <div className="container mx-auto px-6">
        <h1 className="text-3xl font-bold text-gray-300 mb-6">{product.title}</h1>
        <div className="flex flex-col md:flex-row items-start gap-8">
          <div className="relative w-full md:w-1/2 h-64 md:h-96 bg-gray-200 rounded-lg overflow-hidden">
            <Image
              src={product.images[0] || '/default-image.png'}
              alt={product.title}
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
          <div className="flex-1 space-y-6">
            <ul className="space-y-2">
              {typeof product.description === "string"
                ? product.description.split("\n").map((point, index) => (
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
            <p className="text-xl font-bold text-gray-400">Price: £{product.price}</p>
            {/* <div className="mt-8">
              {customer ? (
                <>
                  <h2 className="text-2xl font-bold text-gray-300">Customer Information</h2>
                  <p className="text-lg text-gray-300">Email: {customer.email}</p>
                  <p className="text-lg text-gray-300">Address: {customer.address}</p>
                </>
              ) : (
                <p className="text-gray-300">Please log in to see your customer details.</p>
              )}
            </div> */}
            <div className="flex gap-4 mt-6">
              <button
                onClick={() => router.push(`/`)}
                className="bg-blue-500 text-white px-6 py-2 rounded-md"
              >
                Add to Cart
              </button>
              <button
                onClick={() => router.push(`../../components/CheckoutPage`)}
                className="bg-green-500 text-white px-6 py-2 rounded-md"
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
