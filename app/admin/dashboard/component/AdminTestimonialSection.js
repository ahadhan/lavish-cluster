// // components/admin/AdminTestimonials.jsx

// 'use client';

// import React, { useState } from 'react';
// import { collection, addDoc } from 'firebase/firestore';
// import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
// import { db, storage } from '../../../lib/firebase'; // Adjust the path as necessary
// import { useRouter } from 'next/navigation';
// import Image from 'next/image';
// import { FaStar } from 'react-icons/fa';
// import { motion, AnimatePresence } from 'framer-motion';

// const AdminTestimonials = () => {
//   const [name, setName] = useState('');
//   const [role, setRole] = useState('');
//   const [comment, setComment] = useState('');
//   const [rating, setRating] = useState(5);
//   const [image, setImage] = useState(null);
//   const [error, setError] = useState('');
//   const router = useRouter();

//   // State for live preview
//   const [previewImage, setPreviewImage] = useState(null);

//   const handleImageChange = (e) => {
//     if (e.target.files[0]) {
//       setImage(e.target.files[0]);
//       setPreviewImage(URL.createObjectURL(e.target.files[0]));
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Basic validation
//     if (!name || !role || !comment || !rating || !image) {
//       setError('Please fill in all required fields.');
//       return;
//     }

//     try {
//       // Upload image to Firebase Storage
//       const storageRef = ref(storage, `testimonials/${Date.now()}_${image.name}`);
//       const snapshot = await uploadBytes(storageRef, image);
//       const imageUrl = await getDownloadURL(snapshot.ref);

//       // Add testimonial to Firestore
//       await addDoc(collection(db, 'testimonials'), {
//         name,
//         role,
//         comment,
//         rating: Number(rating),
//         imageUrl,
//         createdAt: new Date(),
//       });

//       // Reset form fields
//       setName('');
//       setRole('');
//       setComment('');
//       setRating(5);
//       setImage(null);
//       setPreviewImage(null);
//       setError('');

//       // Redirect or provide success feedback
//       router.push('/admin/testimonials'); // Adjust the path as needed
//     } catch (err) {
//       console.error('Error adding testimonial: ', err);
//       setError('Failed to add testimonial. Please try again.');
//     }
//   };

//   return (
//     <section className="text-white p-6">
//       <h2 className="text-3xl font-bold mb-6">Add New Testimonial</h2>
//       <div className="flex flex-col md:flex-row gap-8">
//         {/* Form Section */}
//         <form onSubmit={handleSubmit} className="flex-1 space-y-6">
//           {/* Name */}
//           <div>
//             <label htmlFor="name" className="block font-semibold mb-2">
//               Name
//             </label>
//             <input
//               type="text"
//               id="name"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               className="w-full p-3 border text-black border-gray-400 rounded-md"
//               required
//             />
//           </div>

//           {/* Role */}
//           <div>
//             <label htmlFor="role" className="block font-semibold mb-2">
//               Role
//             </label>
//             <input
//               type="text"
//               id="role"
//               value={role}
//               onChange={(e) => setRole(e.target.value)}
//               className="w-full p-3 border text-black border-gray-400 rounded-md"
//               required
//             />
//           </div>

//           {/* Comment */}
//           <div>
//             <label htmlFor="comment" className="block font-semibold mb-2">
//               Comment
//             </label>
//             <textarea
//               id="comment"
//               value={comment}
//               onChange={(e) => setComment(e.target.value)}
//               className="w-full p-3 border text-black border-gray-400 rounded-md"
//               rows="4"
//               required
//             ></textarea>
//           </div>

//           {/* Rating */}
//           <div>
//             <label htmlFor="rating" className="block font-semibold mb-2">
//               Rating
//             </label>
//             <select
//               id="rating"
//               value={rating}
//               onChange={(e) => setRating(e.target.value)}
//               className="w-full p-3 border text-black border-gray-400 rounded-md"
//               required
//             >
//               {[5, 4, 3, 2, 1].map((num) => (
//                 <option key={num} value={num}>
//                   {num} Star{num > 1 && 's'}
//                 </option>
//               ))}
//             </select>
//           </div>

//           {/* Image Upload */}
//           <div>
//             <label htmlFor="image" className="block font-semibold mb-2">
//               Profile Image
//             </label>
//             <input
//               type="file"
//               id="image"
//               accept="image/*"
//               onChange={handleImageChange}
//               className="w-full p-3 border text-black border-gray-400 rounded-md"
//               required
//             />
//           </div>

//           {/* Error Message */}
//           {error && <p className="text-red-500">{error}</p>}

//           {/* Submit Button */}
//           <button
//             type="submit"
//             className="bg-blue-500 text-white py-3 px-6 rounded-md font-semibold hover:bg-blue-600 transition duration-300"
//           >
//             Add Testimonial
//           </button>
//         </form>

//         {/* Live Preview Section */}
//         <div className="flex-1">
//           <h3 className="text-2xl font-semibold mb-4">Live Preview</h3>
//           <div className="bg-opacity-70 rounded-xl shadow-lg p-6 md:p-10">
//             <AnimatePresence mode="wait">
//               <motion.div
//                 key={`${name}-${role}-${comment}-${rating}-${previewImage}`}
//                 initial={{ opacity: 0, y: 20, scale: 0.95 }}
//                 animate={{ opacity: 1, y: 0, scale: 1 }}
//                 exit={{ opacity: 0, y: -20, scale: 0.95 }}
//                 transition={{ duration: 0.3, ease: 'easeInOut' }}
//                 className="text-center"
//               >
//                 {/* Profile Image */}
//                 {previewImage ? (
//                   <div className="relative w-24 h-24 mx-auto rounded-full overflow-hidden border-2 border-white mb-4">
//                     <Image
//                       src={previewImage}
//                       alt={`Preview ${name}`}
//                       fill
//                       style={{ objectFit: 'cover' }}
//                     />
//                   </div>
//                 ) : (
//                   <div className="w-24 h-24 mx-auto rounded-full bg-gray-500 mb-4"></div>
//                 )}

//                 {/* Name and Role */}
//                 <h4 className="text-xl font-semibold">{name || 'Your Name'}</h4>
//                 <p className="text-gray-400">{role || 'Your Role'}</p>

//                 {/* Comment */}
//                 <p className="text-lg italic text-gray-200 mt-4">
//                   {comment || 'Your testimonial comment will appear here.'}
//                 </p>

//                 {/* Rating */}
//                 <div className="flex justify-center mt-4">
//                   {[...Array(5)].map((_, i) => (
//                     <FaStar
//                       key={i}
//                       className={`text-yellow-500 ${
//                         i < rating ? 'fill-yellow-500' : 'fill-gray-400'
//                       }`}
//                     />
//                   ))}
//                 </div>
//               </motion.div>
//             </AnimatePresence>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AdminTestimonials;



'use client';

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { db } from '../../../lib/firebase';

const AdminTestimonial = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null); // Index of the testimonial being edited
  const [newTestimonial, setNewTestimonial] = useState({
    name: '',
    role: '',
    image: '',
    comment: '',
    rating: 5,
  });
  const [successMessage, setSuccessMessage] = useState('');
  const [loading, setLoading] = useState(false);

  // Fetch testimonials from Firebase
  const fetchTestimonials = async () => {
    try {
      const docRef = doc(db, 'content', 'testimonials');
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setTestimonials(docSnap.data().testimonials || []);
      } else {
        console.log('No testimonials found!');
      }
    } catch (error) {
      console.error('Error fetching testimonials:', error);
    }
  };

  useEffect(() => {
    fetchTestimonials();
  }, []);

  // Handle changes in the input fields
  const handleInputChange = (field, value) => {
    setNewTestimonial((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  // Upload image to Cloudinary
  const uploadImageToCloudinary = async (file) => {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', 'lavish_cluster'); // Replace with Cloudinary upload preset

    const response = await axios.post(
      `https://api.cloudinary.com/v1_1/dq6dotbrs/image/upload`,
      formData
    );
    return response.data.secure_url;
  };

  // Save the testimonials back to Firebase
  const saveTestimonials = async (updatedTestimonials) => {
    try {
      const docRef = doc(db, 'content', 'testimonials');
      await setDoc(docRef, { testimonials: updatedTestimonials });
      setSuccessMessage('Testimonials updated successfully!');
      setTimeout(() => setSuccessMessage(''), 3000); // Clear success message after 3 seconds
    } catch (error) {
      console.error('Error saving testimonials:', error);
    }
  };

  // Add a new testimonial
  const addNewTestimonial = async () => {
    try {
      setLoading(true);
      let imageUrl = newTestimonial.image;

      if (newTestimonial.image instanceof File) {
        imageUrl = await uploadImageToCloudinary(newTestimonial.image);
      }

      const updatedTestimonials = [...testimonials, { ...newTestimonial, image: imageUrl }];
      setTestimonials(updatedTestimonials);
      saveTestimonials(updatedTestimonials);

      setNewTestimonial({ name: '', role: '', image: '', comment: '', rating: 5 });
    } catch (error) {
      console.error('Error adding testimonial:', error);
    } finally {
      setLoading(false);
    }
  };

  // Edit an existing testimonial
  const saveEditedTestimonial = async () => {
    try {
      setLoading(true);
      let imageUrl = newTestimonial.image;

      if (newTestimonial.image instanceof File) {
        imageUrl = await uploadImageToCloudinary(newTestimonial.image);
      }

      const updatedTestimonials = testimonials.map((testimonial, index) =>
        index === editingIndex ? { ...newTestimonial, image: imageUrl } : testimonial
      );

      setTestimonials(updatedTestimonials);
      saveTestimonials(updatedTestimonials);

      setEditingIndex(null);
      setNewTestimonial({ name: '', role: '', image: '', comment: '', rating: 5 });
    } catch (error) {
      console.error('Error editing testimonial:', error);
    } finally {
      setLoading(false);
    }
  };

  // Delete a testimonial
  const deleteTestimonial = (index) => {
    const updatedTestimonials = testimonials.filter((_, i) => i !== index);
    setTestimonials(updatedTestimonials);
    saveTestimonials(updatedTestimonials);
  };

  return (
    <div className="p-6 bg-gray-900 min-h-screen flex flex-col gap-8">
      <div className="bg-gray-800 border border-gray-600 p-6 rounded-md shadow-md w-[80%] mx-auto space-y-6">
        <h2 className="text-3xl font-semibold text-white">Manage Testimonials</h2>

        {successMessage && <p className="text-green-400">{successMessage}</p>}

        {/* Testimonials Table */}
        <table className="w-full text-gray-300 border-collapse border border-gray-700">
          <thead>
            <tr className="bg-gray-700 text-left">
              <th className="p-2 border border-gray-600">Name</th>
              <th className="p-2 border border-gray-600">Role</th>
              <th className="p-2 border border-gray-600">Comment</th>
              <th className="p-2 border border-gray-600">Rating</th>
              <th className="p-2 border border-gray-600">Actions</th>
            </tr>
          </thead>
          <tbody>
            {testimonials.map((testimonial, index) => (
              <tr key={index} className="hover:bg-gray-700">
                <td className="p-2 border border-gray-600">{testimonial.name}</td>
                <td className="p-2 border border-gray-600">{testimonial.role}</td>
                <td className="p-2 border border-gray-600">{testimonial.comment}</td>
                <td className="p-2 border border-gray-600">{testimonial.rating}</td>
                <td className="p-2 border border-gray-600 flex gap-2">
                  <button
                    onClick={() => {
                      setEditingIndex(index);
                      setNewTestimonial(testimonials[index]);
                    }}
                    className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => deleteTestimonial(index)}
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Form for Adding/Editing */}
        <h3 className="text-xl text-gray-400">{editingIndex === null ? 'Add New Testimonial' : 'Edit Testimonial'}</h3>
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Name"
            value={newTestimonial.name}
            onChange={(e) => handleInputChange('name', e.target.value)}
            className="w-full p-2 rounded-md bg-gray-800 text-white border border-gray-600"
          />
          <input
            type="text"
            placeholder="Role"
            value={newTestimonial.role}
            onChange={(e) => handleInputChange('role', e.target.value)}
            className="w-full p-2 rounded-md bg-gray-800 text-white border border-gray-600"
          />
          <input
            type="file"
            accept="image/*"
            onChange={(e) => handleInputChange('image', e.target.files[0])}
            className="w-full p-2 rounded-md bg-gray-800 text-white border border-gray-600"
          />
          <textarea
            placeholder="Comment"
            value={newTestimonial.comment}
            onChange={(e) => handleInputChange('comment', e.target.value)}
            className="w-full p-2 rounded-md bg-gray-800 text-white border border-gray-600"
          ></textarea>
          <input
            type="number"
            placeholder="Rating (1-5)"
            value={newTestimonial.rating}
            onChange={(e) => handleInputChange('rating', e.target.value)}
            className="w-full p-2 rounded-md bg-gray-800 text-white border border-gray-600"
          />
        </div>
        <button
          onClick={editingIndex === null ? addNewTestimonial : saveEditedTestimonial}
          className={`w-full bg-blue-500 text-white py-2 rounded-md mt-4 hover:bg-blue-600 transition ${
            loading ? 'opacity-50' : ''
          }`}
          disabled={loading}
        >
          {loading ? 'Saving...' : editingIndex === null ? 'Add Testimonial' : 'Save Changes'}
        </button>
      </div>
    </div>
  );
};

export default AdminTestimonial;
