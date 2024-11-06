'use client';

import React, { useState } from 'react';
// import aboutContent from '../component/';

const AboutSectionContentList = ({ initialContent, onSave }) => {
  const [contentList, setContentList] = useState(initialContent);

  const handleInputChange = (sectionIndex, field, value) => {
    const updatedList = [...contentList];
    updatedList[sectionIndex][field] = value;
    setContentList(updatedList);
  };

  const handleSave = () => {
    // Save changes (can be through API or passed-up state)
    onSave(contentList);
  };

  return (
    <div className="admin-content-list p-6 bg-gray-100 rounded-md">
      <h2 className="text-2xl font-bold mb-4">Edit About Section Content</h2>
      {contentList.map((section, index) => (
        <div key={section.id} className="mb-6">
          <h3 className="font-bold text-xl mb-2">{section.title}</h3>
          <label className="block mb-1">Subtitle:</label>
          <input
            type="text"
            value={section.subtitle}
            onChange={(e) => handleInputChange(index, 'subtitle', e.target.value)}
            className="w-full mb-2 p-2 border border-gray-300 rounded"
          />

          <label className="block mb-1">Description:</label>
          <textarea
            value={section.description}
            onChange={(e) => handleInputChange(index, 'description', e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            rows={4}
          />

          {section.buttonText && (
            <>
              <label className="block mb-1">Button Text:</label>
              <input
                type="text"
                value={section.buttonText}
                onChange={(e) => handleInputChange(index, 'buttonText', e.target.value)}
                className="w-full mb-2 p-2 border border-gray-300 rounded"
              />
            </>
          )}
        </div>
      ))}
      <button
        onClick={handleSave}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
      >
        Save Changes
      </button>
    </div>
  );
};

export default AboutSectionContentList;
