import React, { useState, useEffect } from 'react';
import { db } from '../../../lib/firebase';
import { doc, getDoc, setDoc } from 'firebase/firestore';

const AdminHowItWorksSection = () => {
  const [content, setContent] = useState({
    heading: '',
    subheading: '',
    videos: [],
  });

  const fetchContent = async () => {
    const docRef = doc(db, 'content', 'howItWorksSection');
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      setContent(docSnap.data());
    }
  };

  const handleSave = async () => {
    const docRef = doc(db, 'content', 'howItWorksSection');
    await setDoc(docRef, content);
    alert('Content updated!');
  };

  useEffect(() => {
    fetchContent();
  }, []);

  return (
    <div>
      <h1>Admin - How It Works Section</h1>
      <input
        type="text"
        value={content.heading}
        onChange={(e) => setContent({ ...content, heading: e.target.value })}
      />
      <input
        type="text"
        value={content.subheading}
        onChange={(e) => setContent({ ...content, subheading: e.target.value })}
      />
      <button onClick={handleSave}>Save Changes</button>
    </div>
  );
};

export default AdminHowItWorksSection;
