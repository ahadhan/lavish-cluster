import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaChevronRight, FaInstagram, FaYoutube, FaTiktok, FaStar, FaBars, FaTimes } from 'react-icons/fa'
import { motion } from 'framer-motion'
import logoImg from '../assets/logo.png'
import '../globals.css'


const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)
  
    // Handle scroll to change navbar background
    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 50) {
          setIsScrolled(true)
        } else {
          setIsScrolled(false)
        }
      }
  
      window.addEventListener('scroll', handleScroll)
      return () => window.removeEventListener('scroll', handleScroll)
    }, [])
  
    return (
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-gray-900  ${
          isScrolled ? 'bg-gray-900 shadow-md text-gray-200 ' : 'bg-transparent '}`}
      >
        <div className={`container mx-auto px-6 py-2 flex justify-between items-center text-white ${ isScrolled ? ' text-gray-100 ' : ""} `}>
          <Link href="/" >
            <Image 
            src={logoImg}
            className={` invert ${ isScrolled ? 'w-[20%]' : "w-[30%]"} `}
            alt='logo'
            />
          </Link>
          <nav className="hidden md:flex space-x-8 font-poppins ">
            <Link href="#about" className="text-lg font-[500]  hover:text-gray-300 transition-colors duration-200">
              About
            </Link>
            <Link href="#products" className="text-lg font-[500]   hover:text-gray-300 transition-colors duration-200">
              Products
            </Link>
            <Link href="#how-it-works" className="text-lg font-[500]   hover:text-gray-300 transition-colors duration-200">
              How It Works
            </Link>
            <Link href="#testimonials" className="text-lg font-[500]   hover:text-gray-300 transition-colors duration-200">
              Testimonials
            </Link>
            
            <Link href="#contact" className="text-lg font-[500]   hover:text-gray-300 transition-colors duration-200">
              Contact
            </Link>
          </nav>
          {/* Desktop Social Icons */}
          <div className="hidden md:flex space-x-4">
            <a href="https://instagram.com/lavishclusters" target="_blank" rel="noopener noreferrer" className={`text-white hover:text-gray-300 transition-colors duration-200 ${isScrolled ? "text-white" : ""} `}>
              <FaInstagram size={20} />
            </a>
            <a href="https://youtube.com/lavishclusters" target="_blank" rel="noopener noreferrer" className={`text-white hover:text-gray-300 transition-colors duration-200 ${isScrolled ? "text-white" : ""} `}>
              <FaYoutube size={20} />
            </a>
            <a href="https://tiktok.com/@lavishclusters" target="_blank" rel="noopener noreferrer" className={`text-white hover:text-gray-300 transition-colors duration-200 ${isScrolled ? "text-white" : ""} `}>
              <FaTiktok size={20} />
            </a>
          </div>
          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-800 focus:outline-none"
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
            className="md:hidden bg-white shadow-md"
          >
            <div className="px-6 py-4 space-y-4">
              <Link href="#about" className="block text-lg   hover:text-gray-600 transition-colors duration-200" onClick={() => setIsMenuOpen(false)}>
                About
              </Link>
              <Link href="#products" className="block text-lg   hover:text-gray-600 transition-colors duration-200" onClick={() => setIsMenuOpen(false)}>
                Products
              </Link>
              <Link href="#how-it-works" className="block text-lg   hover:text-gray-600 transition-colors duration-200" onClick={() => setIsMenuOpen(false)}>
                How It Works
              </Link>
              <Link href="#testimonials" className="block text-lg   hover:text-gray-600 transition-colors duration-200" onClick={() => setIsMenuOpen(false)}>
                Testimonials
              </Link>
              
              <Link href="#contact" className="block text-lg   hover:text-gray-600 transition-colors duration-200" onClick={() => setIsMenuOpen(false)}>
                Contact
              </Link>
              {/* Mobile Social Icons */}
              <div className="flex space-x-4 mt-4 justify-center">
                <a href="https://instagram.com/lavishclusters" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-gray-600 transition-colors duration-200">
                  <FaInstagram size={20} />
                </a>
                <a href="https://youtube.com/lavishclusters" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-gray-600 transition-colors duration-200">
                  <FaYoutube size={20} />
                </a>
                <a href="https://tiktok.com/@lavishclusters" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-gray-600 transition-colors duration-200">
                  <FaTiktok size={20} />
                </a>
              </div>
            </div>
          </motion.nav>
        )}
      </header>
    )
  }

export default Header