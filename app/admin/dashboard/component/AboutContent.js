


// 'use client';

// import React, { useState } from 'react';
// import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

// const AdminAboutSection = ({ initialContent = {} }) => {
//   const [aboutContent, setAboutContent] = useState({
//     welcomeLine: initialContent.welcomeLine || "",
//     logo: { src: initialContent.logo?.src || "" },
//     socialMediaMarquee: {
//       links: initialContent.socialMediaMarquee?.links || [
//         { label: "Facebook", href: "" },
//         { label: "Instagram", href: "" },
//         { label: "Twitter", href: "" },
//         { label: "YouTube", href: "" },
//       ],
//     },
//     sections: initialContent.sections || [
//       {
//         title: "",
//         subtitle: "",
//         description: "",
//         blockquote: "",
//         buttonText: "",
//       },
//       {
//         title: "Section 2 Title",
//         founder: "",
//         subtitle: "",
//         quote: "",
//       },
//     ],
//   });

//   const handleInputChange = (field, value) => {
//     setAboutContent((prevContent) => ({
//       ...prevContent,
//       [field]: value,
//     }));
//   };

//   const handleSectionChange = (index, field, value) => {
//     setAboutContent((prevContent) => {
//       const updatedSections = [...prevContent.sections];
//       updatedSections[index] = { ...updatedSections[index], [field]: value };
//       return { ...prevContent, sections: updatedSections };
//     });
//   };

//   const handleSocialLinkChange = (index, field, value) => {
//     setAboutContent((prevContent) => {
//       const updatedLinks = [...prevContent.socialMediaMarquee.links];
//       updatedLinks[index] = { ...updatedLinks[index], [field]: value };
//       return {
//         ...prevContent,
//         socialMediaMarquee: { ...prevContent.socialMediaMarquee, links: updatedLinks },
//       };
//     });
//   };

//   const saveChanges = () => {
//     console.log("Saved content:", aboutContent);
//   };

//   return (
//     <div className="p-6 bg-gray-900 min-h-screen flex flex-col gap-8">
//       {/* Form Inputs */}
//       <div className="bg-gray-800 border border-gray-600 p-6 rounded-md shadow-md w-[80%] mx-auto space-y-6">
//         <h2 className="text-3xl font-semibold text-white">Edit About Section</h2>

//         <div className="space-y-4">
//           <label className="text-gray-300">Welcome Line</label>
//           <input
//             type="text"
//             className="w-full border border-gray-700 p-2 rounded-md bg-gray-700 text-white"
//             value={aboutContent.welcomeLine || ""}
//             onChange={(e) => handleInputChange("welcomeLine", e.target.value)}
//           />
//         </div>

//         <div className="space-y-4">
//           <label className="text-gray-300">Logo Image URL</label>
//           <input
//             type="text"
//             className="w-full border border-gray-700 p-2 rounded-md bg-gray-700 text-white"
//             value={aboutContent.logo.src || ""}
//             onChange={(e) => handleInputChange("logo", { src: e.target.value })}
//           />
//         </div>

//         {/* <div className="space-y-4">
//           <label className="text-gray-300">Social Media Marquee Text</label>
//           <input
//             type="text"
//             className="w-full border border-gray-700 p-2 rounded-md bg-gray-700 text-white"
//             value={aboutContent.socialMediaMarquee.text || ""}
//             onChange={(e) => handleInputChange("socialMediaMarquee", { text: e.target.value })}
//           />
//         </div> */}

//         {/* <div className="space-y-4">
//           <h3 className="text-xl font-semibold text-gray-200">Social Media Links</h3>
//           {aboutContent.socialMediaMarquee.links.map((link, index) => (
//             <div key={index} className="space-y-2">
//               <label className="block text-gray-400">{link.label} URL</label>
//               <input
//                 type="text"
//                 className="w-full border border-gray-700 p-2 rounded-md bg-gray-700 text-white"
//                 value={link.href || ""}
//                 onChange={(e) => handleSocialLinkChange(index, "href", e.target.value)}
//               />
//             </div>
//           ))}
//         </div> */}


// {aboutContent.socialMediaMarquee.links.map((link, index) => (
//             <div key={index} className="space-y-2">
//               <label className="block text-gray-500">{`Social Media Link ${index + 1} Label`}</label>
//               <input
//                 type="text"
//                 className="w-full border border-gray-300 p-2 rounded-md"
//                 value={link.label || ""}
//                 onChange={(e) => handleSocialLinkChange(index, "label", e.target.value)}
//               />
//               <label className="block text-gray-500">{`Social Media Link ${index + 1} URL`}</label>
//               <input
//                 type="text"
//                 className="w-full border border-gray-300 p-2 rounded-md"
//                 value={link.href || ""}
//                 onChange={(e) => handleSocialLinkChange(index, "href", e.target.value)}
//               />
//               <label className="block text-gray-500">Icon</label>
//               <select
//                 className="w-full border border-gray-300 p-2 rounded-md"
//                 value={link.icon || ""}
//                 onChange={(e) => handleSocialLinkChange(index, "icon", e.target.value)}
//               >
//                 <option value="">Select Icon</option>
//                 <option value="FaFacebook">Facebook</option>
//                 <option value="FaInstagram">Instagram</option>
//                 <option value="FaTwitter">Twitter</option>
//                 <option value="FaYoutube">YouTube</option>
//               </select>
//             </div>
//           ))}

//         {aboutContent.sections.map((section, index) => (
//           <div key={index} className="space-y-4 border-t border-gray-700 pt-4">
//             <h3 className="text-lg font-semibold text-gray-300">Section {index + 1}</h3>
//             <div className="space-y-2">
//               <label className="text-gray-400">Title</label>
//               <input
//                 type="text"
//                 className="w-full border border-gray-700 p-2 rounded-md bg-gray-700 text-white"
//                 value={section.title || ""}
//                 onChange={(e) => handleSectionChange(index, "title", e.target.value)}
//               />
//               <label className="text-gray-400">Subtitle</label>
//               <input
//                 type="text"
//                 className="w-full border border-gray-700 p-2 rounded-md bg-gray-700 text-white"
//                 value={section.subtitle || ""}
//                 onChange={(e) => handleSectionChange(index, "subtitle", e.target.value)}
//               />
//               <label className="text-gray-400">Description</label>
//               <textarea
//                 className="w-full border border-gray-700 p-2 rounded-md bg-gray-700 text-white"
//                 value={section.description || ""}
//                 onChange={(e) => handleSectionChange(index, "description", e.target.value)}
//               />
//               <label className="text-gray-400">Blockquote</label>
//               <input
//                 type="text"
//                 className="w-full border border-gray-700 p-2 rounded-md bg-gray-700 text-white"
//                 value={section.blockquote || ""}
//                 onChange={(e) => handleSectionChange(index, "blockquote", e.target.value)}
//               />
//               {section.buttonText && (
//                 <div className="space-y-2">
//                   <label className="text-gray-400">Button Text</label>
//                   <input
//                     type="text"
//                     className="w-full border border-gray-700 p-2 rounded-md bg-gray-700 text-white"
//                     value={section.buttonText || ""}
//                     onChange={(e) => handleSectionChange(index, "buttonText", e.target.value)}
//                   />
//                 </div>
//               )}
//             </div>
//           </div>
//         ))}

//         <button onClick={saveChanges} className="w-full bg-blue-500 text-white py-2 rounded-md mt-4 hover:bg-blue-600 transition">
//           Save Changes
//         </button>
//       </div>

//       {/* Preview Section */}
//       <div className="bg-gray-800 p-6 rounded-md shadow-md w-[80%] mx-auto space-y-4 mt-8">
//         <h2 className="text-2xl font-semibold text-gray-200">Preview</h2>
//         <p><strong>Welcome Line:</strong> {aboutContent.welcomeLine}</p>
//         <img src={aboutContent.logo.src} alt="Logo Preview" className="max-w-20" />
//         <p><strong>Social Media Marquee:</strong> {aboutContent.socialMediaMarquee.text}</p>
//         <div className="flex gap-4">
//           {aboutContent.socialMediaMarquee.links.map((link, index) => (
//             <a key={index} href={link.href} target="_blank" rel="noopener noreferrer" className="text-blue-400 underline">
//               {link.label}
//             </a>
//           ))}
//         </div>

//         {aboutContent.sections.map((section, index) => (
//           <div key={index} className="border-t border-gray-600 pt-4 space-y-2">
//             <h3 className="text-lg font-semibold text-gray-200">{section.title}</h3>
//             <h4 className="text-gray-400">{section.subtitle}</h4>
//             <p className="text-gray-300">{section.description}</p>
//             <blockquote className="text-gray-500 italic">{section.blockquote}</blockquote>
//             {section.buttonText && <button className="bg-blue-500 text-white py-1 px-4 rounded-md">{section.buttonText}</button>}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default AdminAboutSection;




'use client';

import React, { useState } from 'react';
import axios from 'axios';
import Image from 'next/image';
import { doc, setDoc } from "firebase/firestore";
import { db } from '../../../lib/firebase';
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube, FaTiktok } from 'react-icons/fa';
import { icons } from 'lucide-react';


const AdminAboutSection = ({ initialContent = {} }) => {
  const [aboutContent, setAboutContent] = useState({
    welcomeLine: initialContent.welcomeLine || "",
    logo: { src: initialContent.logo?.src || "" },
    heroImg: { src: initialContent.heroImg?.src || "" },
    AjImg: { src: initialContent.AjImg?.src || "" },
    socialMediaMarquee: {
      links: initialContent.socialMediaMarquee?.links || [
        { label: "Facebook", href: "", icon: {FaFacebookF} },
        { label: "Instagram", href: "", icon: {FaInstagram}  },
        { label: "Twitter", href: "", icon: {FaTwitter} },
        { label: "YouTube", href: "", icon: {FaYoutube} },
      ],
    },
    sections: initialContent.sections || [
      {
        title: "Section 1 Title",
        subtitle: "",
        founder: "",
        description: "",
        blockquote: "",
        buttonText: "",
      },
      {
        title: "Section 2 Title",
        founder: "",
        subtitle: "",
        quote: "",
      },
    ],
  });

  const handleInputChange = (field, value) => {
    setAboutContent((prevContent) => ({
      ...prevContent,
      [field]: value,
    }));
  };

  const handleSectionChange = (index, field, value) => {
    setAboutContent((prevContent) => {
      const updatedSections = [...prevContent.sections];
      updatedSections[index] = { ...updatedSections[index], [field]: value };
      return { ...prevContent, sections: updatedSections };
    });
  };

  const uploadImageToCloudinary = async (file) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "your_upload_preset"); // Replace with your Cloudinary upload preset
    const response = await axios.post(`https://api.cloudinary.com/v1_1/your_cloud_name/image/upload`, formData);
    return response.data.secure_url;
  };

  const handleImageChange = async (field, file) => {
    const url = await uploadImageToCloudinary(file);
    setAboutContent((prevContent) => ({
      ...prevContent,
      [field]: { src: url, file }
    }));
  };

  const handleSocialMediaLinkChange = (index, field, value) => {
    setAboutContent((prev) => {
      const updatedLinks = [...prev.socialMediaMarquee.links];
      updatedLinks[index] = { ...updatedLinks[index], [field]: value };

      return {
        ...prev,
        socialMediaMarquee: {
          ...prev.socialMediaMarquee,
          links: updatedLinks,
        },
      };
    });
  };


  const saveChanges = async () => {
    try {
      // Upload images if new files are set
      const logoUrl = aboutContent.logo.file
        ? await uploadImageToCloudinary(aboutContent.logo.file)
        : aboutContent.logo.src;
      const heroImgUrl = aboutContent.heroImg.file
        ? await uploadImageToCloudinary(aboutContent.heroImg.file)
        : aboutContent.heroImg.src;
      const AjImgUrl = aboutContent.AjImg.file
        ? await uploadImageToCloudinary(aboutContent.AjImg.file)
        : aboutContent.AjImg.src;

      // Update image URLs directly in aboutContent
      const contentToSave = {
        ...aboutContent,
        logo: { src: logoUrl },
        heroImg: { src: heroImgUrl },
        AjImg: { src: AjImgUrl },
      };

      const docRef = doc(db, "content", "aboutSection");
      await setDoc(docRef, contentToSave);

      console.log("Data successfully uploaded to Firestore.");
      alert("About section content saved successfully!");
    } catch (error) {
      console.error("Error uploading document:", error);
      alert("Failed to save content. Please try again.");
    }
  };

  return (
    <div className="p-6 bg-gray-900 min-h-screen flex flex-col gap-8">
      {/* Form Inputs */}
      <div className="bg-gray-800 border border-gray-600 p-6 rounded-md shadow-md w-[80%] mx-auto space-y-6">
        <h2 className="text-3xl font-semibold text-white">Edit About Section</h2>

        {/* Welcome Line */}
        <div className="space-y-4">
          <label className="text-gray-300">Welcome Line</label>
          <input
            type="text"
            className="w-full border border-gray-700 p-2 rounded-md bg-gray-700 text-white"
            value={aboutContent.welcomeLine || ""}
            onChange={(e) => handleInputChange("welcomeLine", e.target.value)}
          />
        </div>

        {/* Logo Upload */}
        <div className="space-y-4">
          <label className="text-gray-300">Logo Image</label>
          <input
            type="file"
            onChange={(e) => handleImageChange("logo", e.target.files[0])}
            className="w-full border border-gray-700 p-2 rounded-md bg-gray-700 text-white"
          />
          {aboutContent.logo.src && (
            <Image src={aboutContent.logo.src} alt="Logo Preview" width={100} height={100} className="rounded-lg" />
          )}
        </div>

        {/* Hero Image Upload */}
        <div className="space-y-4">
          <label className="text-gray-300">Hero Image</label>
          <input
            type="file"
            onChange={(e) => handleImageChange("heroImg", e.target.files[0])}
            className="w-full border border-gray-700 p-2 rounded-md bg-gray-700 text-white"
          />
          {aboutContent.heroImg.src && (
            <Image src={aboutContent.heroImg.src} alt="Hero Image Preview" width={100} height={100} className="rounded-lg" />
          )}
        </div>

        {/* Aj Image Upload */}
        <div className="space-y-4">
          <label className="text-gray-300">Aj Image</label>
          <input
            type="file"
            onChange={(e) => handleImageChange("AjImg", e.target.files[0])}
            className="w-full border border-gray-700 p-2 rounded-md bg-gray-700 text-white"
          />
          {aboutContent.AjImg.src && (
            <Image src={aboutContent.AjImg.src} alt="Aj Image Preview" width={100} height={100} className="rounded-lg" />
          )}
        </div>

        {/* Sections */}
        {aboutContent.sections.map((section, index) => (
          <div key={index} className="space-y-4 border-t border-gray-700 pt-4">
            <h3 className="text-lg font-semibold text-gray-300">Section {index + 1}</h3>
            <label className="text-gray-400">Title</label>
            <input
              type="text"
              className="w-full border border-gray-700 p-2 rounded-md bg-gray-700 text-white"
              value={section.title || ""}
              onChange={(e) => handleSectionChange(index, "title", e.target.value)}
            />
            <label className="text-gray-400">Subtitle</label>
            <input
              type="text"
              className="w-full border border-gray-700 p-2 rounded-md bg-gray-700 text-white"
              value={section.subtitle || ""}
              onChange={(e) => handleSectionChange(index, "subtitle", e.target.value)}
            />
            <label className="text-gray-400">Founder Name</label>
            <input
              type="text"
              className="w-full border border-gray-700 p-2 rounded-md bg-gray-700 text-white"
              value={section.founder || ""}
              onChange={(e) => handleSectionChange(index, "founder", e.target.value)}
            />
            <label className="text-gray-400">Description</label>
            <textarea
              className="w-full border border-gray-700 p-2 rounded-md bg-gray-700 text-white"
              value={section.description || ""}
              onChange={(e) => handleSectionChange(index, "description", e.target.value)}
            />
            <label className="text-gray-400">Blockquote</label>
            <input
              type="text"
              className="w-full border border-gray-700 p-2 rounded-md bg-gray-700 text-white"
              value={section.blockquote || ""}
              onChange={(e) => handleSectionChange(index, "blockquote", e.target.value)}
            />
            <label className="text-gray-400">Button Text</label>
            <input
              type="text"
              className="w-full border border-gray-700 p-2 rounded-md bg-gray-700 text-white"
              value={section.buttonText || ""}
              onChange={(e) => handleSectionChange(index, "buttonText", e.target.value)}
            />
          </div>
        ))}

        {/* <div className="bg-gray-800 border border-gray-600 p-6 rounded-md shadow-md w-[80%] mx-auto space-y-6"> */}
          <h2 className="text-3xl font-semibold text-white">Edit Social Media Links</h2>

          <div className="space-y-4">
            <h3 className="text-xl text-gray-300">Social Media Links</h3>
            {aboutContent.socialMediaMarquee.links.map((link, index) => (
              <div key={index} className="space-y-2">
                {/* Label Field */}
                <label className="text-gray-400">{`Link ${index + 1} Label`}</label>
                <input
                  type="text"
                  value={link.label}
                  onChange={(e) => handleSocialMediaLinkChange(index, "label", e.target.value)}
                  className="w-full p-2 rounded-md bg-gray-800 text-white border border-gray-600"
                />

                {/* URL Field */}
                <label className="text-gray-400">{`Link ${index + 1} URL`}</label>
                <input
                  type="text"
                  value={link.href}
                  onChange={(e) => handleSocialMediaLinkChange(index, "href", e.target.value)}
                  className="w-full p-2 rounded-md bg-gray-800 text-white border border-gray-600"
                />
              </div>
            ))}
          </div>
        {/* </div> */}


        {/* Save Changes Button */}
        <button onClick={saveChanges} className="w-full bg-blue-500 text-white py-2 rounded-md mt-4 hover:bg-blue-600 transition">
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default AdminAboutSection;
