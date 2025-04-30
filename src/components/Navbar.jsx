"use client";

import { useState } from "react";
import { Mail, Phone, X } from "lucide-react";
import Link from "next/link";

export default function Header({ scrolled }) {
  const [menuOpen, setMenuOpen] = useState(false);
  

  return (
    <>
      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed top-0 right-0 h-full w-64 bg-white z-50 p-6 shadow-xl transition-transform duration-300">
          <div className="flex justify-end">
            <button
              onClick={() => setMenuOpen(false)}
              aria-label="Close Menu"
              className="p-2 rounded-full hover:bg-gray-100"
            >
              <X size={28} className="text-[#19b3b1]" />
            </button>
          </div>

          <nav className="mt-6 flex flex-col gap-5 text-base font-medium text-gray-700">
            {["about-us","pricing", "contact-us"].map((section) => (
              <a
                key={section}
                href={`/${section}`}
                onClick={() => setMenuOpen(false)}
                className="hover:text-[#19b3b1]"
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
            ))}
          </nav>

          <div className="mt-8 text-sm space-y-2">
            <p className="font-semibold">Contact</p>
            <div className="flex items-center gap-2">
              <Mail size={18} className="text-[#19b3b1]" />
              <a href="mailto:washhit2019@gmail.com">washhit2019@gmail.com</a>
            </div>
            <div className="flex items-center gap-2">
              <Phone size={18} className="text-[#19b3b1]" />
              <a href="tel:+919614035555">+91 961 403 5555</a>
            </div>
          </div>
        </div>
      )}

      {/* Main Header */}
      <header
        className={`fixed top-0 left-0 w-full z-40 py-3 px-6 lg:px-20 flex items-center justify-between transition-all duration-300 ${
          scrolled ? "bg-white shadow-md" : "bg-transparent text-white"
        }`}
        style={{ fontFamily: "'Avenir', sans-serif" }}
      >
        {/* Logo */}
        <div className="flex items-center gap-3">
          <Link href="/">
            <img
              src="/logo.svg"
              alt="MR.V Logo"
              className="h-14 w-14 rounded-full object-cover"
            />
          </Link>
          <Link href="/">
          <span
            className={`text-2xl font-bold tracking-wide ${
              scrolled ? "text-gray-800" : "text-white"
            }`}
          >
            Mr. V
          </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav
          className={`hidden lg:flex gap-8 text-sm font-medium ${
            scrolled ? "text-gray-700" : "text-white"
          }`}
        >
          {["about-us", "pricing", "contact-us"].map((item) => (
            <a
              key={item}
              href={`/${item}`}
              className="hover:text-[#19b3b1] transition"
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </a>
          ))}
        </nav>

        {/* Right Action Buttons */}
        <div className="flex items-center gap-4">
          <a
            href="https://wa.me/919614035555"
            target="_blank"
            className="hidden lg:inline-block bg-green-500 hover:bg-green-600 text-white text-sm font-semibold px-4 py-2 rounded-md"
          >
            WhatsApp
          </a>
          <button className="hidden lg:inline-block bg-gradient-to-r from-[#19b3b1] to-[#0c1b2a] text-white text-sm font-semibold px-4 py-2 rounded-md hover:opacity-90">
            Book Now
          </button>
          {/* Hamburger */}
          <div
            className="lg:hidden cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle Menu"
          >
            {menuOpen ? (
              <X size={32} className="text-[#19b3b1]" />
            ) : (
              <div className="space-y-1">
                {[1, 2, 3].map((_, i) => (
                  <span
                    key={i}
                    className={`block w-6 h-1 rounded-full ${
                      scrolled ? "bg-[#19b3b1]" : "bg-white"
                    }`}
                  ></span>
                ))}
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Push Content for Header Space */}
      <div className="pt-24" />
    </>
  );
}
