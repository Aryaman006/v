"use client";

import { useState } from "react";
import { Mail, Phone, X } from "lucide-react";
import Image from "next/image";

export default function HeroSection() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="relative">
      {/* Mobile Sidebar Menu */}
      
      {/* Hero Section */}
      <section
        className="relative h-screen bg-cover bg-center bg-no-repeat text-white"
        style={{ backgroundImage: "url('/image.jpg')" }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#19b3b1]/50 to-[#0a1f44]/70"></div>

        {/* Main Hero Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Best Dry Cleaners in Hyderabad
          </h1>
          <p className="hidden md:block max-w-2xl text-lg md:text-xl mb-10">
            We provide the best Dry Cleaning & Laundry services in the business combined with exceptional customer service and convenient pickup and delivery at times that suit you @ Doorstep.
          </p>

          <div className="flex flex-col items-center gap-4">
            <button className="bg-gradient-to-r from-[#19b3b1] to-[#0c1b2a] text-white px-8 py-4 font-semibold rounded-lg shadow-lg hover:opacity-90 transition">
              Schedule a Pickup
            </button>

            {/* Mobile WhatsApp Button */}
            <a
              href="https://wa.me/919614035555"
              target="_blank"
              rel="noopener noreferrer"
              className="md:hidden mt-4 bg-green-500 hover:bg-green-600 transition text-white font-semibold  px-8 py-4 rounded-md"
            >
              Book via Whatsapp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
