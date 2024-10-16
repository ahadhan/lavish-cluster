'use client'

import '../app/globals.css'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import BundleOptions from './components/BundleOptions'
import OurCustomers from './components/OurCustomers'
import TestimonialsSection from './components/TestimonialsSection'
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
