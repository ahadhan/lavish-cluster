'use client'

import '../app/globals.css'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import ProductsSection from './components/ProductsSection'
import BundleOptions from './components/BundleOptions'
import HowToApply from './components/HowToApply'
import OurCustomers from './components/OurCustomers'
// import HowItWorksSection from './components/HowItWorksSection'
import TestimonialsSection from './components/TestimonialsSection'
import GallerySection from './components/GallerySection'
import BlogSection from './components/BlogSection'
import FAQs from "./components/FAQs"
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'
import ProductDescription from './components/ProductDecription'




const Page = () => {

  

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <Header />
      <main className="">
        {/* Hero Section */}
        <HeroSection />
        {/* About Us */}
        <AboutSection />
        {/* Products Showcase */}
        <ProductDescription />
        {/* How It Works */}
        <BundleOptions />
        {/* <HowToApply /> */}
        <OurCustomers />
        {/* Testimonials */}
        <TestimonialsSection />

        <FAQs />

        <ContactSection />
      </main>
      {/* Footer */}
      <Footer />
    </div>
  )
}

export default Page
