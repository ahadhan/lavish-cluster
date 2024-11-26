// app/products/cart/page.js

'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

const CartPage = () => {
  const searchParams = useSearchParams(); // Get query params from the URL
  const router = useRouter();

  // Retrieve product data from query params with safety checks
  const name = searchParams.get('name') || 'Default Product Name';
  const priceParam = searchParams.get('price');
  const price = priceParam ? parseFloat(priceParam.replace('£', '')) : 0;
  const image = searchParams.get('image') || '/default-image.png'; // Provide a default image path
  const id = searchParams.get('id') || 'default-id';

  // State for quantity, shipping location, customer email, and loading
  const [quantity, setQuantity] = useState(1); // Default quantity of 1
  const [shippingLocation, setShippingLocation] = useState(''); // Placeholder for shipping location
  const [displayedAddress, setDisplayedAddress] = useState(''); // To display the shipping address above the input
  const [loading, setLoading] = useState(false); // Loading state for the payment process
  const [customerEmail, setCustomerEmail] = useState(''); // Customer email input
  const [error, setError] = useState(null); // Error message

  // Calculate shipping cost, subtotal, and total
  const shippingCost = 5.0; // Fixed shipping cost
  const subtotal = price * quantity; // Calculate subtotal
  const total = subtotal + shippingCost; // Total amount

  // Handle changing the quantity
  const handleQuantityChange = (e) => {
    const value = Math.max(1, parseInt(e.target.value) || 1); // Ensure quantity is at least 1 and a valid number
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

  // Convert amount to subcurrency (e.g., dollars to cents)
  const convertToSubcurrency = (amount) => {
    return Math.round(amount * 100); // Assuming USD (1 dollar = 100 cents)
  };

  // Handle the checkout process with email verification
  const handleCheckout = async () => {
    setLoading(true);
    setError(null);

    // Validate customer email
    if (!customerEmail.trim()) {
      setError('Please enter a valid email address.');
      setLoading(false);
      return;
    }

    try {
      // Prepare cart data
      const items = [
        {
          name: name, // Product name from searchParams
          price: convertToSubcurrency(price), // Price in cents
          quantity: quantity, // Quantity selected by the user
        },
      ];

      // Step 1: Create a Stripe Checkout session and send email verification
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          items,
          email: customerEmail, // User email input
        }),
      });

      const data = await response.json();

      if (response.status !== 200) {
        throw new Error(data.error || 'Failed to create a session');
      }

      const { sessionId } = data;

      if (!sessionId) {
        throw new Error('Session ID not returned by API');
      }

      // Step 2: Redirect to Stripe Checkout
      const stripe = await stripePromise;
      const { error: stripeError } = await stripe.redirectToCheckout({
        sessionId,
      });

      if (stripeError) {
        console.error('Stripe Checkout error:', stripeError);
        setError(stripeError.message);
      }
    } catch (err) {
      console.error('Checkout error:', err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Early return if critical query parameters are missing
  if (!name || !priceParam || !image || !id) {
    return (
      <div className="flex flex-col min-h-screen justify-center items-center bg-gradient-bottom-to-top">
        <p className="text-white text-xl">Invalid product details. Please go back and try again.</p>
      </div>
    );
  }

  const handleAddToCart = (product) => {
  const { title, price, images, id } = product; // Extract product details

  // Build the URL query string with product details
  const queryParams = new URLSearchParams({
    name: title,
    price: `£${price}`, // Include the currency symbol
    image: images[0], // Use the first image URL
    id: id,
  }).toString();

  // Redirect to the cart page with query parameters
  router.push(`/products/cart?${queryParams}`);
};


  return (
    <div className="flex flex-col min-h-screen justify-between bg-gradient-bottom-to-top">
      {/* Header is already included in the layout */}

      {/* Cart Layout */}
      <div className="container mx-auto px-6 py-32 grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Left Section (Product Card) */}
        <div className="bg-gray-900 p-6 rounded-lg shadow-lg col-span-2">
          <h2 className="text-3xl font-bold text-white mb-6">Your Cart</h2>

          <div className="flex items-start gap-6">
            <div className="w-32 h-32 bg-gray-200 rounded-lg overflow-hidden">
              <Image src={image} alt={name} width={128} height={128} className="object-cover" />
            </div>

            <div className="flex-1">
              <h3 className="text-xl font-bold text-white mb-2">{name}</h3>
              <p className="text-md text-gray-400 mb-4">High-quality product that meets your needs.</p>

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
        <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
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

          {/* Email Input for Verification */}
          <div className="my-6">
            <label className="block text-white mb-2">Email Address:</label>
            <input
              type="email"
              value={customerEmail}
              onChange={(e) => setCustomerEmail(e.target.value)}
              className="w-full p-2 bg-gray-800 text-white rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-secondaryColor"
              placeholder="Enter your email for verification"
            />
          </div>

          {error && <div className="text-red-500 mb-4">{error}</div>}

          {/* Payment Button */}
          <button
            className="w-full bg-white text-gray-900 font-bold border-2 border-gray-950 py-3 px-4 rounded-lg hover:bg-gray-800 hover:text-white transition duration-300"
            onClick={handleCheckout}
            disabled={loading}
          >
            {loading ? 'Processing...' : 'Proceed to Payment'}
          </button>
        </div>
      </div>

    </div>
  );
};

export default CartPage;
