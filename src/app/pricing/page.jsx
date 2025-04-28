// components/PricingPage.tsx

import React from "react";

const PricingPage = () => {
  return (
    <div className="bg-gray-50 min-h-screen p-6">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-extrabold text-blue-600">washh it</h1>
        <p className="text-gray-600 text-lg mt-2">You drop it, we washh it!</p>
      </div>

      {/* Pricing Table */}
      <div className="bg-white rounded-2xl shadow-xl p-8 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Men's Clothing */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-blue-700 mb-4">Men's Clothing</h2>
            <ul className="list-disc list-inside space-y-3 text-gray-700">
              <li>Shirts/T-Shirts - ₹90</li>
              <li>Trousers/Cargos - ₹90</li>
              <li>Jeans - ₹90</li>
              <li>Kurta (Top only) - ₹120</li>
              <li>Blazer (W/O Hanger) - ₹300</li>
              {/* Add more items... */}
            </ul>
          </div>

          {/* Women's Clothing */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-pink-700 mb-4">Women's Clothing</h2>
            <ul className="list-disc list-inside space-y-3 text-gray-700">
              <li>Tops/Shirts - ₹90</li>
              <li>Party wear Tops - ₹150</li>
              <li>Shorts/Inners - ₹60</li>
              <li>Kurti (Work/Fancy) - ₹150</li>
              <li>Frock (Designer) - ₹300</li>
              {/* Add more items... */}
            </ul>
          </div>

          {/* Household Items */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-green-700 mb-4">Household Items</h2>
            <ul className="list-disc list-inside space-y-3 text-gray-700">
              <li>Napkins - ₹50</li>
              <li>Pillow Covers - ₹60</li>
              <li>Bath Towels - ₹60</li>
              <li>Single Bedsheet - ₹120</li>
              <li>Blanket (Double) - ₹200</li>
              {/* Add more items... */}
            </ul>
          </div>
        </div>
      </div>

      {/* Curtain Pricing Section */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl p-6 shadow-lg text-white text-center">
          <h2 className="text-2xl font-bold mb-4">✨ Curtain Cleaning Pricing ✨</h2>
          <div className="flex flex-col md:flex-row justify-center gap-8">
            <div className="bg-white text-blue-600 p-6 rounded-xl shadow-md">
              <h3 className="text-lg font-semibold mb-2">Curtain Single Layer</h3>
              <p className="text-2xl font-bold">₹8 / sq.ft</p>
            </div>
            <div className="bg-white text-purple-600 p-6 rounded-xl shadow-md">
              <h3 className="text-lg font-semibold mb-2">Curtain Double Layer</h3>
              <p className="text-2xl font-bold">₹15 / sq.ft</p>
            </div>
          </div>
          <p className="mt-6 italic">Freshen up your home with sparkling clean curtains!</p>
        </div>
        <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl p-6 shadow-lg text-white text-center">
          <h2 className="text-2xl font-bold mb-4">✨ Carpet Cleaning Pricing ✨</h2>
          <div className="flex flex-col md:flex-row justify-center gap-8">
            <div className="bg-white text-blue-600 p-6 rounded-xl shadow-md">
              <p className="text-2xl font-bold">₹40 / sq.ft</p>
            </div>
          </div>
          <p className="mt-6 italic">Freshen up your home with sparkling clean carpets!</p>
        </div>
        <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl p-6 shadow-lg text-white text-center">
          <h2 className="text-2xl font-bold mb-4">✨ Footwear Cleaning Pricing ✨</h2>
          <div className="flex flex-col md:flex-row justify-center gap-8">
            <div className="bg-white text-blue-600 p-6 rounded-xl shadow-md">
              <h3 className="text-lg font-semibold mb-2">Sports shoes</h3>
              <p className="text-2xl font-bold">₹350</p>
            </div>
            <div className="bg-white text-purple-600 p-6 rounded-xl shadow-md">
              <h3 className="text-lg font-semibold mb-2">Boots and Sneakers</h3>
              <p className="text-2xl font-bold">₹400</p>
            </div>
            <div className="bg-white text-purple-600 p-6 rounded-xl shadow-md">
              <h3 className="text-lg font-semibold mb-2">Flip Flops</h3>
              <p className="text-2xl font-bold">₹200</p>
            </div>
          </div>
          <p className="mt-6 italic">Freshen up your footwear with professional cleaning!</p>
        </div>
      </div>

      {/* Marketing Callout */}
      <div className="mt-12 bg-yellow-300 p-8 rounded-2xl text-center shadow-lg">
        <h2 className="text-3xl font-extrabold text-gray-800 mb-2">💥 Experience Premium Laundry Care!</h2>
        <p className="text-gray-700 text-lg mb-4">
          Affordable, Reliable, and Fast! Wash, Dry & Fold with Love ❤️
        </p>
        <a
          href="#"
          className="inline-block bg-blue-600 text-white font-bold px-8 py-3 rounded-full hover:bg-blue-700 transition"
        >
          Book Now
        </a>
      </div>

      {/* Final Call to Action */}
      <div className="bg-gradient-to-r from-purple-500 to-blue-500 text-white mt-12 rounded-2xl shadow-lg p-8 text-center">
        <h2 className="text-3xl font-bold mb-4">📍 Book Your Laundry Service Now! 🚀</h2>
        <p className="text-xl mb-4">+91 961403 5555</p>
        <a
          href="#"
          className="inline-block bg-white text-blue-500 font-bold px-6 py-3 rounded-full hover:bg-blue-100 transition"
        >
          Book Now
        </a>
      </div>
    </div>
  );
};

export default PricingPage;
