'use client'
import React from 'react';

export default function ProductsTable({ products }) {

    
  const handleSectionChange = (sectionName) => {
    onSectionChange(sectionName);
  };


  return (
    <div className="overflow-x-auto mx-5 p-6 bg-gray-800 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold text-white mb-4">Product List</h2>
      <table className="min-w-full bg-gray-900 text-white">
        <thead>
          <tr>
            <th className="py-3 px-6 bg-gray-700">Title</th>
            <th className="py-3 px-6 bg-gray-700">Description</th>
            <th className="py-3 px-6 bg-gray-700">Price</th>
            <th className="py-3 px-6 bg-gray-700">Image URL</th>
            <th className="py-3 px-6 bg-gray-700">Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={index} className="border-b border-gray-700">
              <td className="py-3 px-6">{product.title}</td>
              <td className="py-3 px-6">{product.description}</td>
              <td className="py-3 px-6">${product.price.toFixed(2)}</td>
              <td className="py-3 px-6">
                <a href={product.imageUrl} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
                  {product.imageUrl}
                </a>
              </td>
              <td className="py-3 px-6 flex space-x-4">
                <button className="px-3 py-1 bg-blue-600 hover:bg-blue-700 text-white rounded">
                  Edit
                </button>
                <button className="px-3 py-1 bg-red-600 hover:bg-red-700 text-white rounded">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
