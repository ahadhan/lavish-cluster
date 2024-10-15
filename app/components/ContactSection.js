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

const ContactSection = () => {
    return (
      <section id="contact" className="py-20 bg-gradient-bottom-to-top text-white ">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <h2 className="text-3xl font-extrabold mb-6">Get in Touch</h2>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 rounded bg-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-gray-600"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 rounded bg-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-gray-600"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-2 rounded bg-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-gray-600"
                    placeholder="Your message..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="bg-white text-gray-900 font-bold py-2 px-6 rounded hover:bg-gray-100 transition transform hover:scale-105 duration-200"
                >
                  Send Message
                </button>
              </form>
            </motion.div>
            {/* Connect With Us */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <h2 className="text-3xl font-extrabold mb-6">Connect With Us</h2>
              <div className="flex space-x-6 mb-8">
                <a
                  href="https://instagram.com/lavishclusters"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-gray-900 p-4 rounded-full hover:bg-gray-100 transition transform hover:scale-110 duration-200"
                >
                  <FaInstagram size={24} />
                </a>
                <a
                  href="https://youtube.com/lavishclusters"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-gray-900 p-4 rounded-full hover:bg-gray-100 transition transform hover:scale-110 duration-200"
                >
                  <FaYoutube size={24} />
                </a>
                <a
                  href="https://tiktok.com/@lavishclusters"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-gray-900 p-4 rounded-full hover:bg-gray-100 transition transform hover:scale-110 duration-200"
                >
                  <FaTiktok size={24} />
                </a>
              </div>
              <h3 className="text-xl font-semibold mb-4">Subscribe to Our Newsletter</h3>
              <form className="flex">
                <input
                  type="email"
                  className="flex-grow px-4 py-2 rounded-l bg-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-gray-600"
                  placeholder="your@email.com"
                />
                <button
                  type="submit"
                  className="bg-white text-gray-900 font-bold py-2 px-6 rounded-r hover:bg-gray-100 transition transform hover:scale-105 duration-200"
                >
                  Subscribe
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    )
  }

export default ContactSection