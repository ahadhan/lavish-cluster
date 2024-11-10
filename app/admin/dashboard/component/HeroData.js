'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { FaLocationArrow } from 'react-icons/fa';
import logoImg from '../../../assets/logo.png';
import p1 from '../../../assets/1.webp';
import p2 from '../../../assets/2.webp';
import p3 from '../../../assets/3.webp';
// import '../../../../global.css';

const AdminHeroSection = () => {
  // State for content values
  const [logo, setLogo] = useState({ src: logoImg, alt: 'logo' });
  const [heading, setHeading] = useState('Effortless Glamour in Every Cluster');
  const [subheading, setSubheading] = useState(
    'Premium eyelash kits for influencers, makeup artists, and professionals'
  );
  const [productImages, setProductImages] = useState([p1, p2, p3]);

  // Handlers for content changes
  const handleLogoChange = (e) => setLogo({ ...logo, src: URL.createObjectURL(e.target.files[0]) });
  const handleHeadingChange = (e) => setHeading(e.target.value);
  const handleSubheadingChange = (e) => setSubheading(e.target.value);
  const handleImageChange = (index, e) => {
    const updatedImages = [...productImages];
    updatedImages[index] = URL.createObjectURL(e.target.files[0]);
    setProductImages(updatedImages);
  };

  // Render the admin fields and preview
  return (
    <section className="p-6 bg-black text-white border-2 border-white rounded-lg mx-5">
      <h2 className="text-2xl font-bold mb-4">Edit Hero Section</h2>
      
      {/* Logo Upload */}
      <div className="mb-4">
        <label className="block mb-2">Logo:</label>
        <input type="file" accept="image/*" onChange={handleLogoChange} />
      </div>

      {/* Heading and Subheading Fields */}
      <div className="mb-4">
        <label className="block mb-2">Heading:</label>
        <input
          type="text"
          value={heading}
          onChange={handleHeadingChange}
          className="w-full p-2 bg-gray-800 border border-gray-600 text-white rounded-lg"
        />
      </div>
      
      <div className="mb-4">
        <label className="block mb-2">Subheading:</label>
        <input
          type="text"
          value={subheading}
          onChange={handleSubheadingChange}
          className="w-full p-2 bg-gray-800 border border-gray-600 text-white rounded-lg"
        />
      </div>

      {/* Product Images Upload */}
      <div className="mb-4">
        <label className="block mb-2">Product Images:</label>
        {productImages.map((img, index) => (
          <div key={index} className="flex items-center mb-2">
            <input type="file" accept="image/*" onChange={(e) => handleImageChange(index, e)} />
          </div>
        ))}
      </div>

      {/* Preview */}
      <div className="mt-8">
        <h3 className="text-xl font-bold mb-2">Preview</h3>
        <div className="text-center">
          <Image src={logo.src} alt={logo.alt} width={100} height={100} className="mx-auto mb-4" />
          <h1 className="text-3xl font-extrabold">{heading}</h1>
          <p className="text-lg mb-4">{subheading}</p>
          <div className="flex justify-center gap-4">
            {productImages.map((img, index) => (
              <Image key={index} src={img} alt={`Product ${index + 1}`} width={80} height={80} className="rounded-lg" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdminHeroSection;
