'use client';

import '../app/globals.css';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import BundleOptions from './components/BundleOptions';
import OurCustomers from './components/OurCustomers';
import TestimonialsSection from './components/TestimonialsSection';
import FAQs from "./components/FAQs";
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import ProductDescription from './components/ProductDecription';

import { useRouter } from 'next/navigation';

// import { loadStripe } from "@stripe/stripe-js";
// import { Elements } from "@stripe/react-stripe-js";

// import CheckoutForm from "../components/CheckoutForm";
// import CompletePage from "../components/CompletePage";

// Make sure to call loadStripe outside of a component’s render to avoid
// recreating the Stripe object on every render.
// This is your test publishable API key.
// if (process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY === undefined) {
//   throw new Error("NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY is not defined");
// }

// const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

const Page = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <Header />
      <main>
        {/* Hero Section */}
        <HeroSection />
        {/* About Us */}
        <AboutSection />
        {/* Products Showcase */}
        <ProductDescription />
        {/* How It Works */}
        <BundleOptions />
        {/* Customer Showcase */}
        <OurCustomers />
        {/* Testimonials */}
        <TestimonialsSection />
        {/* FAQs */}
        <FAQs />
        {/* Contact Section */}
        <ContactSection />
      </main>
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Page;
