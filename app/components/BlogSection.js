"use client";


import React, { useState, useEffect } from 'react'
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

const BlogSection = () => {
    const blogPosts = [
      {
        id: 1,
        title: '5 Tips for Perfect Lash Application',
        category: 'Tutorial',
  image:p1,
        link: '#',
      },
      {
        id: 2,
        title: 'The History of False Eyelashes',
        category: 'Beauty History',
  image:p1,
        link: '#',
      },
      {
        id: 3,
        title: 'Lash Trends for 2023',
        category: 'Trends',
  image:p1,
        link: '#',
      },
    ]
  
    return (
      <section id="blog" className="py-20 bg-gray-100">
        <div className="container mx-auto px-6">
          <motion.h2
            className="text-3xl font-extrabold text-center mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Latest from Our Blog
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <motion.div
                key={post.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: post.id * 0.2 }}
              >
                <div className="relative w-full h-48">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    style={{ objectFit: 'cover' }}
                    className="w-full h-48 object-cover"
                  />
                </div>
                <div className="p-6">
                  <span className="text-purple-600 font-semibold text-sm mb-2 block">{post.category}</span>
                  <h3 className="font-semibold text-xl mb-2">{post.title}</h3>
                  <Link href={post.link} className="text-purple-600 hover:text-purple-800 inline-flex items-center">
                    Read More <FaChevronRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    )
  }

export default BlogSection