// app/components/WhyWashhIt.jsx

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const WhyWashhIt = () => {
  const features = [
    {
      title: "Superior Quality",
      description:
        "We do believe in gaining customer’s trust and that can only be achieved while we provide the best quality to surpass his expectation.",
      icon: "/quality.svg", // replace with your own icons
    },
    {
      title: "Convenience",
      description:
        "We understand your busy schedule and value your time. From doorstep pickup to delivery, we got you covered in this hectic environment.",
      icon: "/convenience.svg",
    },
    {
      title: "Reliable",
      description:
        "Reliability is the key for a long term relationship. We value our customers so they can rely on us without a doubt!",
      icon: "/reliable.svg",
    },
  ];

  return (
    <section className="py-16 bg-gray-50 text-center">
      <h2 className="text-4xl font-bold text-blue-600 mb-4">Why Washh it ?</h2>
      <p className="text-gray-600 max-w-2xl mx-auto mb-12">
        We at Washh it doesn’t only clean your clothes, we also give the fine-tuning in your life that you long for.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {features.map((feature, index) => (
          <div key={index} className="flex flex-col items-center px-4">
            <div className="w-24 h-24 mb-6">
              <Image
                src={feature.icon}
                alt={feature.title}
                width={96}
                height={96}
                className="object-contain"
              />
            </div>
            <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-12">
      <Link href="/book" passHref>
    <button className="mt-8 bg-custom-gradient text-white font-semibold py-3 px-8 rounded-lg text-lg shadow-lg hover:scale-105 transition-transform transform">
    Request a Pickup
    </button>
  </Link>
        {/* <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white py-3 px-6 rounded-lg hover:opacity-90 transition">
          Request a Pickup
        </button> */}
      </div>
    </section>
  );
};

export default WhyWashhIt;
