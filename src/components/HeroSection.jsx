"use client";

import Image from "next/image";

export default function HeroSection() {
  return (
    <section
      className="relative mt-[-230] pb-40 w-full min-h-screen bg-cover bg-center bg-no-repeat text-white"
      style={{ backgroundImage: "url('/image.jpg')" }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#19b3b1]/50 to-[#0a1f44]/70 z-0"></div>

      {/* Content */}
      <div className="relative mt-30 z-10 flex flex-col items-center justify-center min-h-screen px-6 text-center">
        <h1 className="text-4xl mt-20 md:text-5xl font-semibold leading-tight mb-6 drop-shadow-lg">
          Welcome to MR.V – Signature Clean
        </h1>
        <p className="hidden md:block max-w-2xl font-light text-sm md:text-lg mb-10 drop-shadow-md">
          At MR.V, we go beyond basic laundry. We deliver premium garment care,
          dry cleaning, and specialized cleaning services designed to give your
          clothes, shoes, and essentials the attention they deserve.
        </p>

        <div className="flex flex-col items-center gap-4">
          <button className="bg-gradient-to-r from-[#19b3b1] to-[#0c1b2a] text-white px-8 py-4 font-semibold rounded-lg shadow-lg hover:opacity-90 transition">
            Schedule a Pickup
          </button>

          {/* WhatsApp Button (Mobile Only) */}
          <a
            href="https://wa.me/919614035555"
            target="_blank"
            rel="noopener noreferrer"
            className="md:hidden mt-4 bg-green-500 hover:bg-green-600 transition text-white font-semibold px-8 py-4 rounded-md"
          >
            Book via WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
