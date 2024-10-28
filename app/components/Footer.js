"use client";

import Link from 'next/link'
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