
"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  FaChevronRight,
  FaInstagram,
  FaYoutube,
  FaTiktok,
  FaBars,
  FaTimes,
} from 'react-icons/fa';
import { motion } from 'framer-motion';
import logoImg from '../assets/logo.png';
import '../globals.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll to change navbar background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-gray-900 shadow-md text-gray-200' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center text-white">
        <Link href="/">
          <Image
            src={logoImg}
            className={`invert ${
              isScrolled ? 'w-20 md:w-24' : 'w-24 md:w-32'
            }`}
            alt="logo"
          />
        </Link>
        
        {/* Navigation Menu */}
        <nav className="hidden md:flex space-x-6 font-poppins">
          {['about', 'products', 'how-it-works', 'testimonials', 'contact'].map(
            (item) => (
              <Link
                key={item}
                href={`#${item}`}
                className="text-lg font-medium hover:text-gray-300 transition-colors duration-200"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </Link>
            )
          )}
        </nav>

        {/* Desktop Social Icons */}
        <div className="hidden md:flex space-x-4">
          <a
            href="https://instagram.com/lavishclusters"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-300 transition-colors duration-200"
          >
            <FaInstagram size={20} />
          </a>
          <a
            href="https://youtube.com/lavishclusters"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-300 transition-colors duration-200"
          >
            <FaYoutube size={20} />
          </a>
          <a
            href="https://tiktok.com/@lavishclusters"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-300 transition-colors duration-200"
          >
            <FaTiktok size={20} />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.nav
          initial={{ height: 0 }}
          animate={{ height: 'auto' }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-gray-800 text-white shadow-md"
        >
          <div className="px-6 py-4 space-y-4">
            {['about', 'products', 'how-it-works', 'testimonials', 'contact'].map(
              (item) => (
                <Link
                  key={item}
                  href={`#${item}`}
                  className="block text-lg hover:text-gray-300 transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </Link>
              )
            )}

            {/* Mobile Social Icons */}
            <div className="flex space-x-4 mt-4 justify-center">
              <a
                href="https://instagram.com/lavishclusters"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-gray-100 transition-colors duration-200"
              >
                <FaInstagram size={20} />
              </a>
              <a
                href="https://youtube.com/lavishclusters"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-gray-100 transition-colors duration-200"
              >
                <FaYoutube size={20} />
              </a>
              <a
                href="https://tiktok.com/@lavishclusters"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-gray-100 transition-colors duration-200"
              >
                <FaTiktok size={20} />
              </a>
            </div>
          </div>
        </motion.nav>
      )}
    </header>
  );
};

export default Header;
