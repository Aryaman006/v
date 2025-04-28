"use client";

import Image from "next/image";
import Link from "next/link";

export default function PricingSection() {
  return (
    <div className="w-full bg-cover bg-center relative" style={{ backgroundImage: "url('/image2.jpg')" }}>
      {/* Background Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#3e2723]/50 to-[#7b5e57]/70 z-0"></div>

      <section className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-12 px-6 py-16 md:py-28 max-w-7xl mx-auto">
        
        {/* Left Side - Text Content */}
        <div className="flex-1 text-white">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight text-balance drop-shadow-lg">
            Premium Dry Cleaning <br /> Services at Affordable Prices
          </h2>
          <p className="mb-4 leading-relaxed text-lg text-white/90">
            Your clothes are your signature, your mark of elegance — and you can’t risk your reputation. We understand your concern, and as your trusted problem-solvers, it's our foremost duty to care for your clothing.
          </p>
          <p className="mb-6 leading-relaxed text-lg text-white/90">
            From everyday washing to delicate dry cleaning, we've got you covered. Whether it's a formal client meeting or a casual dinner date, you can trust us to keep your wardrobe spotless — while keeping your pocket happy.
          </p>
          <p className="leading-relaxed text-lg text-white/90">
            Now serving Jubilee Hills, Banjara Hills, Madhapur, Gachibowli, Miyapur, Pragathi Nagar, and more.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap gap-4">
          <Link href="/pricing" passHref>
    <button className="mt-8 bg-custom-gradient text-white font-semibold py-3 px-8 rounded-lg text-lg shadow-lg hover:scale-105 transition-transform transform">
      See Pricing
    </button>
  </Link>
          <Link href="/book" passHref>
    <button className="mt-8 bg-custom-gradient text-white font-semibold py-3 px-8 rounded-lg text-lg shadow-lg hover:scale-105 transition-transform transform">
      Book Service
    </button>
  </Link>
            {/* <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg shadow-md hover:opacity-90 focus:ring-2 focus:ring-blue-400 transition">
              See Pricing
            </button> */}
            {/* <button className="px-6 py-3 bg-white text-blue-600 border border-blue-600 font-semibold rounded-lg hover:bg-blue-50 focus:ring-2 focus:ring-blue-400 transition">
              See Our Process
            </button> */}
          </div>
        </div>

        {/* Right Side - Pricing Card */}
        <div className="flex-1 max-w-sm w-full bg-white/90 backdrop-blur-lg rounded-2xl shadow-2xl p-8 relative hover:shadow-3xl transition">
          {/* Tag */}
          <div className="absolute -top-6 left-6 bg-blue-600 text-white px-4 py-1 rounded-full text-md font-semibold tracking-wide shadow-md">
            Starting At @
          </div>

          <div className="space-y-8 mt-10">
            {/* Service 1 */}
            <div className="flex items-center gap-4">
              <Image
                src="/fold.svg"
                alt="Wash & Fold Service Icon"
                width={100}
                height={100}
                className="object-contain"
              />
              <div>
                <h4 className="font-bold text-lg">Wash & Fold</h4>
                <p className="text-gray-600 text-sm">Rs. 69 / Kg</p>
              </div>
            </div>

            {/* Service 2 */}
            <div className="flex items-center gap-4 border-t pt-6">
              <Image
                src="/press.svg"
                alt="Laundry & Press Service Icon"
                width={100}
                height={100}
                className="object-contain"
              />
              <div>
                <h4 className="font-bold text-lg">Laundry & Press</h4>
                <p className="text-gray-600 text-sm">Rs. 99 / Kg</p>
              </div>
            </div>

            {/* Service 3 */}
            <div className="flex items-center gap-4 border-t pt-6">
              <Image
                src="/dry.svg"
                alt="Dry Cleaning Service Icon"
                width={100}
                height={100}
                className="object-contain"
              />
              <div>
                <h4 className="font-bold text-lg">Dry Cleaning</h4>
                <p className="text-gray-600 text-sm">Rs. 75 / Piece</p>
              </div>
            </div>
          </div>
        </div>

      </section>
    </div>
  );
}
