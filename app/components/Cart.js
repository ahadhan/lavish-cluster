
import React from 'react';
import Image from 'next/image';

const Cart = ({ product, onRemoveFromCart }) => {
  if (!product) {
    return <div>Your cart is empty</div>; // If no product is selected
  }

  const { title, image, description, category, price, discountedPrice, brand, stockStatus, features, howToUse } = product;

  return (
    <section className="p-10 bg-gray-100">
      <div className="container mx-auto bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-3xl font-extrabold mb-6 text-center">{title}</h2>

        <div className="flex flex-col md:flex-row justify-between gap-6">
          {/* Product Image */}
          <div className="md:w-1/3">
            <Image src={image} alt={title} width={400} height={400} className="rounded-lg" />
          </div>

          {/* Product Details */}
          <div className="md:w-2/3">
            <p className="text-gray-600 mb-4">
              <strong>Category:</strong> {category}
            </p>
            <p className="text-gray-600 mb-4">
              <strong>Brand:</strong> {brand}
            </p>
            <p className="text-gray-600 mb-4">
              <strong>Stock Status:</strong> {stockStatus}
            </p>
            <p className="text-gray-600 mb-4">
              <strong>Description:</strong> {description}
            </p>

            {/* Features */}
            <ul className="list-disc list-inside mb-4">
              <strong>Features:</strong>
              {features.map((feature, index) => (
                <li key={index} className="text-gray-600">
                  {feature}
                </li>
              ))}
            </ul>

            {/* How to Use */}
            <p className="text-gray-600 mb-4">
              <strong>How to Use:</strong> {howToUse}
            </p>

            {/* Price */}
            <div className="text-2xl font-bold mb-4">
              {discountedPrice ? (
                <>
                  <span className="line-through text-gray-500 mr-4">£{price}</span>
                  <span className="text-green-600">£{discountedPrice}</span>
                </>
              ) : (
                <span className="text-blue-600">£{price}</span>
              )}
            </div>

            {/* Remove from Cart Button */}
            <button
              onClick={onRemoveFromCart}
              className="bg-red-600 text-white px-6 py-3 rounded-full mt-4 hover:bg-red-700 transition"
            >
              Remove from Cart
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
