'use client';

import React, { useState } from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { MdSlowMotionVideo } from "react-icons/md";
import aboutContent from '../../../admin/dashboard/data/aboutContent.json';


const AdminAboutSection = ({ initialContent, onSave }) => {
  const [aboutContent, setAboutContent] = useState(initialContent);
  

  const handleInputChange = (section, field, value) => {
    setAboutContent((prevContent) => ({
      ...prevContent,
      [section]: { ...prevContent[section], [field]: value },
    }));
  };

  const handleSectionChange = (index, field, value) => {
    const updatedSections = [...aboutContent.sections];
    updatedSections[index] = { ...updatedSections[index], [field]: value };
    setAboutContent((prevContent) => ({ ...prevContent, sections: updatedSections }));
  };

  const handleSocialLinkChange = (index, field, value) => {
    const updatedLinks = [...aboutContent.socialMediaMarquee.links];
    updatedLinks[index] = { ...updatedLinks[index], [field]: value };
    setAboutContent((prevContent) => ({
      ...prevContent,
      socialMediaMarquee: { ...prevContent.socialMediaMarquee, links: updatedLinks },
    }));
  };

  const saveChanges = () => {
    if (onSave) onSave(aboutContent);
  };

  return (
    <div className="admin-about-section">
      {/* Welcome Line */}
      <div className="form-group">
        <label>Welcome Line</label>
        <input
          type="text"
          value={aboutContent.welcomeLine}
          onChange={(e) => handleInputChange("welcomeLine", e.target.value)}
        />
      </div>

      {/* Logo */}
      <div className="form-group">
        <label>Logo Image URL</label>
        <input
          type="text"
          value={aboutContent.logo.src}
          onChange={(e) => handleInputChange("logo", "src", e.target.value)}
        />
      </div>

      {/* Social Media Links */}
      <div className="form-group">
        <label>Social Media Marquee Text</label>
        <input
          type="text"
          value={aboutContent.socialMediaMarquee.text}
          onChange={(e) => handleInputChange("socialMediaMarquee", "text", e.target.value)}
        />
        {aboutContent.socialMediaMarquee.links.map((link, index) => (
          <div key={index} className="form-group">
            <label>{`Social Media Link ${index + 1} Label`}</label>
            <input
              type="text"
              value={link.label}
              onChange={(e) => handleSocialLinkChange(index, "label", e.target.value)}
            />
            <label>{`Social Media Link ${index + 1} URL`}</label>
            <input
              type="text"
              value={link.href}
              onChange={(e) => handleSocialLinkChange(index, "href", e.target.value)}
            />
          </div>
        ))}
      </div>

      {/* Sections */}
      {aboutContent.sections.map((section, index) => (
        <div key={index} className="form-group">
          <h3>Section {index + 1}</h3>
          <label>Title</label>
          <input
            type="text"
            value={section.title}
            onChange={(e) => handleSectionChange(index, "title", e.target.value)}
          />
          <label>Subtitle</label>
          <input
            type="text"
            value={section.subtitle}
            onChange={(e) => handleSectionChange(index, "subtitle", e.target.value)}
          />
          <label>Description</label>
          <textarea
            value={section.description}
            onChange={(e) => handleSectionChange(index, "description", e.target.value)}
          />
          <label>Blockquote</label>
          <input
            type="text"
            value={section.blockquote || ""}
            onChange={(e) => handleSectionChange(index, "blockquote", e.target.value)}
          />
          {section.buttonText && (
            <div>
              <label>Button Text</label>
              <input
                type="text"
                value={section.buttonText}
                onChange={(e) => handleSectionChange(index, "buttonText", e.target.value)}
              />
            </div>
          )}
        </div>
      ))}

      {/* Save Button */}
      <button onClick={saveChanges} className="save-button">
        Save Changes
      </button>
    </div>
  );
};

export default AdminAboutSection;
