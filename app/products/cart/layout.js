// app/products/cart/layout.js

'use client'; // Declare as a client component

import React, { Suspense } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const CartLayout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen justify-between bg-gradient-bottom-to-top">
      <Header />

      {/* Suspense Boundary */}
      <Suspense fallback={<div className="text-center text-white py-10">Loading cart...</div>}>
        {children}
      </Suspense>

      <Footer />
    </div>
  );
};

export default CartLayout;
