"use client";

import { useState, useEffect } from "react";

const testimonials = [
  {
    quote: "As a bachelor I work 6 days a week and almost 9 hours. When I am way back home I always worry about laundry. But now with Washh It I just schedule for pick and drop facility. Thanks to their services life have been easier.",
    name: "Kiran Kumar G",
    title: "Student",
  },
  {
    quote: "It's a really good laundry service in Hyderabad. I had a very great experience. Everything is done properly in time. I loved it.",
    name: "Bala Raju",
    title: "Business Man",
  },
  {
    quote: "I have been there customer for months as they have been our hostel. It provides us with effective services of Ironing and discounts on bulk items.",
    name: "Madhuri Vipparla",
    title: "IT Employee",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 3000); // Change every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-12 bg-white text-center">
      <h2 className="text-4xl font-bold text-blue-700 mb-4">
        What do our customers say<span className="text-blue-500">?</span>
      </h2>
      <p className="text-gray-600 mb-8 max-w-3xl mx-auto">
        Our customers are our true purveyors – they provide the best support that we can ever ask for – their feedback!
      </p>

      <div className="flex justify-center items-center gap-6 flex-wrap">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className={`p-6 rounded-lg shadow-md w-80 h-[380px] transition-all duration-500 ${
              index === current ? "bg-blue-500 text-white" : "bg-green-50 text-gray-700"
            }`}
          >
            <div className="text-5xl mb-4">❝</div>
            <p className="mb-4 text-lg md:text-xl">{testimonial.quote}</p>
            <h4 className="font-semibold">{testimonial.name}</h4>
            <p className="text-sm text-gray-500">{testimonial.title}</p>
          </div>
        ))}
      </div>

      {/* Dots Navigation */}
      <div className="flex justify-center mt-6 space-x-2">
        {testimonials.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === current ? "bg-blue-500 scale-150" : "bg-gray-300"
            }`}
          ></div>
        ))}
      </div>
    </section>
  );
}
