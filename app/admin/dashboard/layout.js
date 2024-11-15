"use client"

import { useState } from "react";
import MainContent from "../dashboard/component/MainContent";
import OrdersSection from "./component/OrdersTable";
import ProductsTable from "../dashboard/component/ProductsTable";
import CreateProduct from "../dashboard/component/CreateProduct";
import Sidebar from "../dashboard/component/Sidebar";
import Header from "../dashboard/component/Header";
import AboutSection from "../dashboard/component/AboutContent";
import HeroData from "./component/HeroData";
import BundleOptions from "@/app/components/BundleOptions";
import AdminBundleOptions from "./component/AdminBundleOption";
import TestimonialsSection from "@/app/components/TestimonialsSection";
import AdminHowItWorksSection from "./component/AdminHowItWorks";
import AdminTestimonialSection from "./component/AdminTestimonialSection";
import AdminFAQSection from "./component/AdminFAQ's";
import HowItWorks from "@/app/components/OurCustomers";

export default function DashboardLayout({ children }) {
  const [currentSection, setCurrentSection] = useState("Dashboard");


  const ordersData = [
    {
      orderId: '12345',
      bookerName: 'John Doe',
      productName: 'Product A',
      price: 29.99,
      paymentMethod: 'Credit Card',
      status: 'Pending',
    },
    {
      orderId: '12346',
      bookerName: 'Jane Smith',
      productName: 'Product B',
      price: 49.99,
      paymentMethod: 'PayPal',
      status: 'Successful',
    },
    {
      orderId: '12347',
      bookerName: 'Jane Smith',
      productName: 'Product B',
      price: 49.99,
      paymentMethod: 'PayPal',
      status: 'Successful',
    },
    {
      orderId: '12348',
      bookerName: 'Jane Smith',
      productName: 'Product B',
      price: 49.99,
      paymentMethod: 'PayPal',
      status: 'Returned',
    },
    // Add more orders as needed
  ];




  const renderSection = () => {
    switch (currentSection) {
      case "Dashboard":
        return <MainContent />;
      case "Orders":
        return <OrdersSection ordersData={ordersData} />;
      case "List Of Products":
        const products = [
          { title: "Product 1", description: "Description 1", price: 29.99, imageUrl: "http://example.com/image1.jpg" },
          { title: "Product 2", description: "Description 2", price: 19.99, imageUrl: "http://example.com/image2.jpg" },
          // Add more products as needed
        ];
        return <ProductsTable products={products} />;
      case "Create Product":
        return <CreateProduct />;
      case "About Section":
        return <AboutSection />;
      case "Hero Section":
        return <HeroData />;
      case "Bundle Options":
        return <AdminBundleOptions />;
      case "Client Testimonials":
        return <AdminTestimonialSection/>;
      case "FAQ's":
        return <AdminFAQSection/>;
      case "Contact Section":
        return <Admin/>;
      case "How It Works":
        return <AdminHowItWorksSection/>
      default:
        return <MainContent />;
    }
  };

  const fakeContentList = [
    {
      id: 1,
      title: "Introduction",
      subtitle: "Welcome to Lavisha Cluster",
      content: "Lavisha Cluster is a premier community offering a blend of luxury, comfort, and convenience. Our residential and commercial spaces cater to diverse needs with world-class amenities and a harmonious environment.",
    },
    {
      id: 2,
      title: "Mission",
      subtitle: "Our Vision",
      content: "At Lavisha Cluster, our mission is to provide exceptional living and working spaces that inspire creativity, enhance quality of life, and foster a sense of community.",
    },
    {
      id: 3,
      title: "Features",
      subtitle: "What Sets Us Apart",
      content: "Our cluster offers modern amenities like smart homes, 24/7 security, recreational areas, eco-friendly initiatives, and easy access to transportation hubs.",
    },
    {
      id: 4,
      title: "Contact",
      subtitle: "Get in Touch",
      content: "For more information or inquiries, feel free to reach out to our support team. We are here to assist you with any questions regarding the Lavisha Cluster community.",
    },
  ];

  return (
    <div className="flex p-2 bg-black ">
      <Sidebar onSectionChange={setCurrentSection} />
      <div className="flex-1">
        <Header sectionName={currentSection} />
        {renderSection()}
        {/* {children} This renders any default content or additional routes */}
      </div>
    </div>
  );
}
