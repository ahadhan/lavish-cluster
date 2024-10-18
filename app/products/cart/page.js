'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';
import Image from 'next/image';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const CartPage = () => {
  const searchParams = useSearchParams(); // Get query params from the URL
  const router = useRouter();

  // Retrieve product data from query params
  const name = searchParams.get('name');
  const price = parseFloat(searchParams.get('price').replace('£', '')); // Convert price to number
  const image = searchParams.get('image');
  const description = "High-quality lash kit that enhances the look of your lashes."; // Placeholder description
  const id = searchParams.get('id');

  // State for quantity and shipping location
  const [quantity, setQuantity] = useState(1); // Default quantity of 1
  const [shippingLocation, setShippingLocation] = useState(''); // Placeholder for shipping location
  const [displayedAddress, setDisplayedAddress] = useState(''); // To display the shipping address above the input

  // Shipping cost
  const shippingCost = 5.0; // Fixed shipping cost
  const subtotal = price * quantity; // Calculate subtotal
  const total = subtotal + shippingCost; // Total amount

  // Handle changing the quantity
  const handleQuantityChange = (e) => {
    const value = Math.max(1, parseInt(e.target.value)); // Ensure quantity is at least 1
    setQuantity(value);
  };

  // Handle displaying the shipping address
  const handleDisplayAddress = () => {
    if (shippingLocation.trim()) {
      setDisplayedAddress(shippingLocation);
    } else {
      alert('Please enter a valid shipping address.');
    }
  };

  return (
    <div className="flex flex-col min-h-screen justify-between  bg-gradient-bottom-to-top">
      <Header />

      {/* Cart Layout */}
      <div className="container mx-auto px-6 py-32 grid grid-cols-1 md:grid-cols-3  gap-6">
        {/* Left Section (Product Card) */}
        <div className="bg-gray-900 p-6 rounded-lg shadow-lg col-span-2">
          <h2 className="text-3xl font-bold text-white mb-6">Your Cart</h2>

          <div className="flex items-start gap-6">
            <div className="w-32 h-32 bg-gray-200 rounded-lg overflow-hidden">
              <Image src={image} alt={name} width={128} height={128} className="object-cover" />
            </div>

            <div className="flex-1">
              <h3 className="text-xl font-bold text-white mb-2">{name}</h3>
              <p className="text-md text-gray-400 mb-4">{description}</p>

              {/* Quantity Selector */}
              <label className="block text-gray-400 mb-2">Quantity:</label>
              <input
                type="number"
                min="1"
                value={quantity}
                onChange={handleQuantityChange}
                className="w-20 p-2 bg-gray-800 text-white rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-secondaryColor"
              />
            </div>
          </div>

          {/* Displayed Shipping Address */}
          {displayedAddress && (
            <div className="mt-6 text-gray-300">
              <strong>Shipping to:</strong> {displayedAddress}
            </div>
          )}

          {/* Shipping Location Input */}
          <div className="mt-6">
            <label className="block text-gray-400 mb-2">Shipping Location:</label>
            <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-4">
              <input
                type="text"
                value={shippingLocation}
                onChange={(e) => setShippingLocation(e.target.value)}
                className="flex-1 p-2 bg-gray-800 text-white rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-secondaryColor w-full"
              />
              <button
                className="bg-gray-700 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition duration-300 w-full md:w-auto"
                onClick={handleDisplayAddress}
              >
                Confirm Address
              </button>
            </div>
          </div>

        </div>

        {/* Right Section (Summary) */}
        <div className="bg-gray-900 p-6 rounded-lg shadow-lg ">
          <h3 className="text-2xl font-bold text-white mb-6">Summary</h3>

          {/* Subtotal */}
          <div className="flex justify-between mb-4">
            <span className="text-lg text-gray-400">Subtotal:</span>
            <span className="text-lg text-gray-300">£{subtotal.toFixed(2)}</span>
          </div>

          {/* Shipping Cost */}
          <div className="flex justify-between mb-4">
            <span className="text-lg text-gray-400">Shipping Cost:</span>
            <span className="text-lg text-gray-300">£{shippingCost.toFixed(2)}</span>
          </div>

          {/* Total Amount */}
          <div className="flex justify-between font-bold text-xl text-white mb-6">
            <span>Total:</span>
            <span>£{total.toFixed(2)}</span>
          </div>

          {/* Payment Button */}
          <button
            className="w-full bg-white text-gray-900 font-bold border-2 border-gray-950 py-3 px-4 rounded-lg hover:bg-gray-800 hover:text-white transition duration-300"
            onClick={() => alert('Proceed to payment!')}
          >
            Proceed to Payment
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CartPage;
