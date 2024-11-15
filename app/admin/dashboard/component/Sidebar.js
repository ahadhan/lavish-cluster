'use client'
import Link from "next/link";
import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp, IoMdArrowBack  } from "react-icons/io";

export default function Sidebar({ onSectionChange }) {
  const [openDropdown, setOpenDropdown] = useState(null);

  // Toggle dropdown visibility
  const toggleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  const handleSectionChange = (sectionName) => {
    onSectionChange(sectionName);
  };

  return (
    <aside className="w-64 min-h-screen p-6 bg-black rounded-md border-2 border-white text-white flex flex-col justify-between">
      {/* Admin Panel Heading */}
      <div className="h-full">
      <div className="flex items-center  mb-8">
          <Link href="/" className="mr-4 text-white">
            <IoMdArrowBack size={24} />
          </Link>
          <h2 className="text-2xl font-semibold font-roboto">Admin Panel</h2>
        </div>

      {/* Profile Section */}
      <div className="flex flex-col items-center mb-8">
        <img
          src="/path/to/profile.jpg" // Replace with actual profile image path
          alt="Admin Profile"
          className="w-20 h-20 rounded-full border border-gray-600 mb-4"
        />
        <h3 className="text-lg font-semibold">John Doe</h3>
        <p className="text-sm text-gray-400">@johndoe</p>
        <p className="text-sm text-gray-500">Admin</p>
        <div className="w-[80px] h-[1px] mx-auto my-2 bg-white"></div>
      </div>

      {/* Navigation with Dropdown Items */}
      <nav className="space-y-4">
        {/* Product Section */}
        <div>
          <button
            className="flex justify-between w-full py-2 px-4 text-left rounded hover:bg-gray-700 items-center font-roboto"
            onClick={() => {
              toggleDropdown(0);
              handleSectionChange("Product Section");
            }}
          >
            Product Section
            <span>{openDropdown === 0 ? <IoIosArrowUp /> : <IoIosArrowDown />}</span>
          </button>
          {openDropdown === 0 && (
            <div className="pl-4 space-y-1">
              <button
                className="block py-1 px-2 hover:bg-gray-700 rounded"
                onClick={() => handleSectionChange("Create Product")}
              >
                Create Product
              </button>
              <button
                onClick={() => onSectionChange("List Of Products")}
                className="block py-1 px-2 hover:bg-gray-700 rounded text-left w-full"
              >
                List of Products
              </button>
            </div>
          )}
        </div>

        {/* Content Section */}
        <div>
          <button
            className="flex justify-between w-full py-2 px-4 text-left rounded hover:bg-gray-700 items-center"
            onClick={() => {
              toggleDropdown(1);
              handleSectionChange("Content Section");
            }}
          >
            Content Section
            <span>{openDropdown === 1 ? <IoIosArrowUp /> : <IoIosArrowDown />}</span>
          </button>
          {openDropdown === 1 && (
            <div className="pl-4 space-y-1">
              <Link
                href="/admin/dashboard/"
                className="block py-1 px-2 hover:bg-gray-700 rounded"
                onClick={() => handleSectionChange("Hero Section")}
              >
                Hero
              </Link>
              <Link
                href="/admin/dashboard/"
                className="block py-1 px-2 hover:bg-gray-700 rounded"
                onClick={() => handleSectionChange("About Section")}
              >
                About
              </Link>
              <Link
                href="/admin/dashboard/"
                className="block py-1 px-2 hover:bg-gray-700 rounded"
                onClick={() => handleSectionChange("How It Works")}
              >
                Video Guidelines
              </Link>
              <Link
                href="/admin/dashboard/"
                className="block py-1 px-2 hover:bg-gray-700 rounded"
                onClick={() => handleSectionChange("Bundle Options")}
              >
                Bundle Options
              </Link>
              <Link
                href="/admin/dashboard/"
                className="block py-1 px-2 hover:bg-gray-700 rounded"
                onClick={() => handleSectionChange("Client Testimonials")}
              >
                Client Testimonials
              </Link>
              <Link
                href="/admin/dashboard/"
                className="block py-1 px-2 hover:bg-gray-700 rounded"
                onClick={() => handleSectionChange("FAQ's")}
              >
                FAQ's
              </Link>
            
            </div>
          )}
        </div>


        <button
          className="flex justify-between w-full py-2 px-4 text-left rounded hover:bg-gray-700"
          onClick={() => {
            onSectionChange("Orders");
          }}
        >
          Orders
        </button>

        {/* Dashboard */}
        <div>
          <button
            className="flex justify-between w-full py-2 px-4 text-left rounded hover:bg-gray-700 items-center"
            onClick={() => {
              toggleDropdown(2);
              handleSectionChange("Dashboard");
            }}
          >
            Dashboard
            <span>{openDropdown === 2 ? <IoIosArrowUp /> : <IoIosArrowDown />}</span>
          </button>
          {openDropdown === 2 && (
            <div className="pl-4 space-y-1">
              <Link
                href="/admin/dashboard/total-sales"
                className="block py-1 px-2 hover:bg-gray-700 rounded"
                onClick={() => handleSectionChange("Total Sales")}
              >
                Total Sales
              </Link>
              <Link
                href="/admin/dashboard/orders"
                className="block py-1 px-2 hover:bg-gray-700 rounded"
                onClick={() => handleSectionChange("Orders")}
              >
                Orders
              </Link>
              <Link
                href="/admin/dashboard/pending-orders"
                className="block py-1 px-2 hover:bg-gray-700 rounded"
                onClick={() => handleSectionChange("Pending Orders")}
              >
                Pending Orders
              </Link>
            </div>
          )}
        </div>
      </nav>

      {/* Logout Button */}
      <button className="mt-8 w-full py-2 bg-red-600 rounded hover:bg-red-700 text-center font-medium">
        Logout
      </button>
      </div>

    </aside>
  );
}
