import react, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaChevronRight, FaInstagram, FaYoutube, FaTiktok, FaStar, FaBars, FaTimes } from 'react-icons/fa'
import { motion } from 'framer-motion'
import hero from '../assets/hero.webp'
import p1 from '../assets/p1.webp'
import p2 from '../assets/p2.webp'
import p3 from '../assets/p3.webp'
import p4 from '../assets/p4.webp'
import '../../app/globals.css'

const Footer = () => {
    return (
      <footer className="bg-gradient-top-to-bottom text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="text-lg">&copy; {new Date().getFullYear()} Lavish Clusters. All rights reserved.</p>
          <div className="mt-4 space-x-4">
            <Link href="#" className="text-sm hover:underline transition-colors duration-200">
              Privacy Policy
            </Link>
            <Link href="#" className="text-sm hover:underline transition-colors duration-200">
              Terms of Service
            </Link>
            <Link href="#" className="text-sm hover:underline transition-colors duration-200">
              Shipping & Returns
            </Link>
          </div>
        </div>
      </footer>
    )
  }

export default Footer