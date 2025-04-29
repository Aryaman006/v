"use client";

import { useState } from "react";
import { Mail, Phone, X } from "lucide-react";
import Link from "next/link"; // import Link from Next.js

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {menuOpen && (
        <div className="fixed top-0 right-0 w-auto h-full bg-white text-black shadow-lg z-50 p-6 flex flex-col gap-6 lg:hidden rounded-xl">
          {/* Close Button inside menu (mobile only) */}
          <div className="flex justify-end">
            <button
              onClick={() => setMenuOpen(false)}
              className="bg-gray-200 p-2 rounded-full hover:bg-gray-300 transition-all"
            >
              <X size={28} className="text-[#19b3b1]" />
            </button>
          </div>

          {/* Menu Links */}
          <nav className="flex flex-col gap-6 mt-6">
            <a
              href="#about"
              className="flex items-center gap-3 text-lg font-medium hover:text-blue-600 transition-all group"
            >
              <span className="text-blue-500 group-hover:rotate-45 transition-transform duration-300">W</span>
              About Washh It
            </a>
            <a
              href="#services"
              className="flex items-center gap-3 text-lg font-medium hover:text-blue-600 transition-all group"
            >
              <span className="text-blue-500">🧺</span> Services
            </a>
            <a
              href="#pricing"
              className="flex items-center gap-3 text-lg font-medium hover:text-blue-600 transition-all group"
            >
              <span className="text-blue-500">₹</span> Pricing
            </a>
            <a
              href="#contact"
              className="flex items-center gap-3 text-lg font-medium hover:text-blue-600 transition-all group"
            >
              <span className="text-blue-500">📞</span> Contact Us
            </a>
          </nav>

          {/* Contact Information */}
          <div className="flex flex-col gap-4 mt-6 text-sm text-gray-700">
            <div className="flex items-center gap-2">
              <Mail size={20} className="text-[#19b3b1]" />
              <a href="mailto:washhit2019@gmail.com" className="hover:text-blue-600">washhit2019@gmail.com</a>
            </div>
            <div className="flex items-center gap-2">
              <Phone size={20} className="text-[#19b3b1]" />
              <a href="tel:+919614035555" className="hover:text-blue-600">+91 961 403 5555</a>
            </div>
          </div>

          {/* Email Subscription */}
          <div className="mt-8">
            <p className="text-sm font-semibold mb-2">For Upcoming Offers</p>
            <p className="text-xs text-gray-500 mb-4">Drop your Email Here...</p>
            <div className="flex">
              <input
                type="email"
                placeholder="Email ID"
                className="border border-gray-300 px-3 py-2 rounded-l-md flex-1 text-sm focus:outline-none"
              />
              <button className="bg-gradient-to-r from-[#19b3b1] to-[#0c1b2a] text-white px-4 rounded-r-md text-sm">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Desktop Card Menu */}
      {menuOpen && (
        <div className="hidden lg:block absolute top-24 right-10 bg-white text-black shadow-xl rounded-xl p-8 w-auto z-40">
          <nav className="flex flex-col gap-6">
            <a
              href="#about"
              className="flex items-center gap-3 text-lg font-semibold hover:text-blue-600 transition-all group"
            >
              <span className="text-blue-500 group-hover:rotate-45 transition-transform duration-300">W</span>
              About Washh It
            </a>
            <a
              href="#services"
              className="flex items-center gap-3 text-lg font-semibold hover:text-blue-600 transition-all group"
            >
              <span className="text-blue-500">🧺</span> Services
            </a>
            <a
              href="#pricing"
              className="flex items-center gap-3 text-lg font-semibold hover:text-blue-600 transition-all group"
            >
              <span className="text-blue-500">₹</span> Pricing
            </a>
            <a
              href="#contact"
              className="flex items-center gap-3 text-lg font-semibold hover:text-blue-600 transition-all group"
            >
              <span className="text-blue-500">📞</span> Contact Us
            </a>
          </nav>

          {/* Email Subscription */}
          <div className="mt-10">
            <p className="text-sm font-semibold mb-2">For Upcoming Offers</p>
            <p className="text-xs text-gray-500 mb-4">Drop your Email Here...</p>
            <div className="flex">
              <input
                type="email"
                placeholder="Email ID"
                className="border border-gray-300 px-3 py-2 rounded-l-md flex-1 text-sm focus:outline-none"
              />
              <button className="bg-gradient-to-r from-[#19b3b1] to-[#0c1b2a] text-white px-4 rounded-r-md text-sm">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Header */}
      <header className="fixed top-0 left-0 w-full z-30 px-6 py-2 flex items-center justify-between bg-white shadow-md">
        {/* Left Side */}
        <div className="flex items-center gap-2 md:ml-40">
          <Link href="/">
            <img
              src="/logo.svg"
              alt="WashhIt Logo"
              className="h-28 w-28 rounded-full bg-white object-cover cursor-pointer"
            />
          </Link>
          <span className="text-4xl font-extrabold tracking-wide text-gray-800">Mr. V</span>
        </div>

        {/* Desktop Email and Phone */}
        <div className="hidden lg:flex items-center gap-6 text-sm text-gray-700">
          <div className="flex items-center gap-2">
            <Mail size={20} className="text-[#19b3b1]" />
            <a href="mailto:washhit2019@gmail.com" className="hover:text-blue-600">washhit2019@gmail.com</a>
          </div>
          <div className="flex items-center gap-2">
            <Phone size={20} className="text-[#19b3b1]" />
            <a href="tel:+919614035555" className="hover:text-blue-600">+91 961 403 5555</a>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-3 md:gap-6 md:mr-36">
          {/* Desktop Buttons */}
          <a
            href="https://wa.me/919614035555"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:block bg-green-500 hover:bg-green-600 transition-all text-white font-medium text-xs md:text-base px-3 md:px-5 py-2 rounded-md"
          >
            Book via Whatsapp
          </a>
          <button className="hidden lg:block bg-gradient-to-r from-[#19b3b1] to-[#0c1b2a] hover:opacity-90 transition-all text-white font-medium text-xs md:text-base px-4 md:px-5 py-2 rounded-md">
            Book Now
          </button>

          {/* Hamburger or Desktop Close Button */}
          <div
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex items-center justify-center md:w-10 md:h-10 md:cursor-pointer"
            aria-label={menuOpen ? "Close Menu" : "Open Menu"}
          >
            {menuOpen ? (
              <X size={40} className="text-[#19b3b1]" />
            ) : (
              <div className="flex flex-col gap-2">
                <span className="w-10 h-1 bg-gradient-to-r from-[#19b3b1] to-[#0c1b2a] rounded-full"></span>
                <span className="w-10 h-1 bg-gradient-to-r from-[#19b3b1] to-[#0c1b2a] rounded-full"></span>
                <span className="w-10 h-1 bg-gradient-to-r from-[#19b3b1] to-[#0c1b2a] rounded-full"></span>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Content Padding to avoid overlap */}
      <div className="pt-32"></div>
    </>
  );
}