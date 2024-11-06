'use client'
import { useState } from "react";

export default function CreateProduct() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [imageFile, setImageFile] = useState(null);

  const handleImageChange = (e) => {
    setImageFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!imageFile) {
      alert("Please upload an image file.");
      return;
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("price", price);
    formData.append("image", imageFile);

    // Handle form data (e.g., send it to your server)
    console.log("Product created:", {
      title,
      description,
      price,
      imageFileName: imageFile.name,
    });

    // Reset form fields after submission
    setTitle("");
    setDescription("");
    setPrice("");
    setImageFile(null);
  };

  return (
    <div className="p-10 bg-black border-2 border-white text-white rounded-lg shadow-md max-w-2xl mx-auto">
      {/* <h2 className="text-2xl font-semibold mb-4">Create Product</h2> */}
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-200">
            Product Title
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className="mt-1 p-2 w-full bg-gray-700 rounded text-white border border-gray-300 focus:border-indigo-500 focus:outline-none"
          />
        </div>

        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-200">
            Description
          </label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            className="mt-1 p-2 w-full bg-gray-700 rounded text-white border border-gray-300 focus:border-indigo-500 focus:outline-none"
          />
        </div>

        <div>
          <label htmlFor="price" className="block text-sm font-medium text-gray-200">
            Price ($)
          </label>
          <input
            type="number"
            id="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
            min="0"
            step="0.01"
            className="mt-1 p-2 w-full bg-gray-700 rounded text-white border border-gray-300 focus:border-indigo-500 focus:outline-none"
          />
        </div>

        <div>
          <label htmlFor="image" className="block text-sm font-medium text-gray-200">
            Upload Image
          </label>
          <input
            type="file"
            id="image"
            accept="image/*"
            onChange={handleImageChange}
            required
            className="mt-1 w-full border border-white rounded bg-gray-700 text-white"
          />
          {imageFile && <p className="text-gray-200 mt-2">{imageFile.name}</p>}
        </div>

        <button
          type="submit"
          className="w-full py-2 mt-6 bg-indigo-600 hover:bg-indigo-700 rounded text-white font-medium"
        >
          Create Product
        </button>
      </form>
    </div>
  );
}
