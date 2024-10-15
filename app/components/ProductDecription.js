'use client';

import React, { useState } from 'react';
import ProductsSection from './ProductsSection'; // Your product section component
import Cart from './Cart'; // Cart component

const ProductDescription = () => {
  const [cartProduct, setCartProduct] = useState(null);

  const handleProductClick = (product) => {
    setCartProduct(product); // Add the product to the cart
  };

  const handleRemoveFromCart = () => {
    setCartProduct(null); // Remove the product from the cart
  };

  return (
    <div>
      {cartProduct ? (
        <Cart product={cartProduct} onRemoveFromCart={handleRemoveFromCart} />
      ) : (
        <ProductsSection onProductClick={handleProductClick} />
      )}
    </div>
  );
};

export default ProductDescription;
