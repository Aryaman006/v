"use client";

import Link from "next/link";
import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";

const ServiceCard = ({ service, index }) => (
  <Link
    href={service.href}
    key={index}
    className="flex flex-col items-start gap-4 group p-6 rounded-lg bg-white shadow-lg hover:shadow-xl transition-shadow min-w-[250px]"
  >
    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center group-hover:bg-blue-200 transition-colors">
      <Image src="/sparkle.svg" alt="icon" width={24} height={24} />
    </div>
    <div>
      <h3 className="text-lg font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">
        {service.title}
      </h3>
      <p className="text-gray-500 text-sm">{service.description}</p>
    </div>
  </Link>
);

const DotNavigation = ({ services, activeDot, handleDotClick }) => (
  <div className="flex justify-center gap-2 mt-4">
    {services.map((_, index) => (
      <button
        key={index}
        onClick={() => handleDotClick(index)}
        className={`w-3 h-3 rounded-full bg-blue-500 transition-all duration-300 ${
          activeDot === index ? "scale-150 bg-blue-700" : "bg-opacity-50"
        }`}
        aria-label={`Go to service ${index + 1}`}
      ></button>
    ))}
  </div>
);

const WashhItServices = () => {
  const services = [
    {
      title: "Wet Cleaning",
      description: "It becomes a pain to wash the clothes if required measures aren’t taken. We come for your rescue.",
      href: "/services/wet-cleaning",
    },
    {
      title: "Steam Pressing",
      description: "The most untouched and underestimated part reveals the true importance of fine clothing and washing.",
      href: "/services/steam-pressing",
    },
    {
      title: "Saree Rolling",
      description: "Women are extremely particular about their loved belongings and when it comes to sarees, it must match their yardstick of quality.",
      href: "/services/saree-rolling",
    },
    {
      title: "Stain Removal",
      description: "Specialized cleaning for those stubborn stains that need extra care.",
      href: "/services/stain-removal",
    },
    {
      title: "Ironing & Folding",
      description: "We ensure that your clothes come back as fresh as new with perfect folds.",
      href: "/services/ironing-folding",
    },
  ];

  const [activeDot, setActiveDot] = useState(0);
  const scrollRef = useRef(null);
  const intervalRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = scrollRef.current.scrollLeft;
      const cardWidth = scrollRef.current.children[0].offsetWidth;
      const newActiveDot = Math.round(scrollPosition / cardWidth);
      setActiveDot(newActiveDot);
    };

    const scrollElement = scrollRef.current;
    scrollElement.addEventListener("scroll", handleScroll);

    return () => {
      scrollElement.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleDotClick = (index) => {
    const cardWidth = scrollRef.current.children[0].offsetWidth;
    scrollRef.current.scrollTo({
      left: index * cardWidth,
      behavior: "smooth",
    });
    setActiveDot(index);
  };

  // 🛞 Auto Carousel Effect
  useEffect(() => {
    startAutoScroll();

    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);

  const startAutoScroll = () => {
    const scrollElement = scrollRef.current;
    const cardWidth = scrollElement.children[0].offsetWidth;

    intervalRef.current = setInterval(() => {
      setActiveDot((prevIndex) => {
        const nextIndex = (prevIndex + 1) % services.length;
        scrollElement.scrollTo({
          left: nextIndex * cardWidth,
          behavior: "smooth",
        });
        return nextIndex;
      });
    }, 3000); // every 3 seconds
  };

  return (
    <section className="relative md:ml-40 md:mr-0 py-20 px-6 md:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between relative z-10 space-y-8 md:space-y-0">
        
        {/* LEFT side: Content */}
        <div className="w-full md:w-7/12 space-y-6">
          <h2 className="text-4xl md:text-5xl font-extrabold text-blue-600 hover:text-purple-600 transition-colors">
            Washh It Services
          </h2>
          <p className="text-gray-600 text-lg max-w-md">
            Customer satisfaction is our primary mantra which drives us toward excellence in service delivery.
          </p>

          {/* Horizontal scroll container for services */}
          <div
            ref={scrollRef}
            className="flex overflow-x-auto gap-6 scroll-smooth py-6 scrollbar-hidden"
          >
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                service={service}
                index={index}
              />
            ))}
          </div>

          {/* Dot Navigation */}
          <DotNavigation
            services={services}
            activeDot={activeDot}
            handleDotClick={handleDotClick}
          />

          {/* Button */}
          <Link href="/book" passHref>
            <button className="mt-8 bg-custom-gradient text-white font-semibold py-3 px-8 rounded-lg text-lg shadow-lg hover:scale-105 transition-transform transform">
              Request a Pickup
            </button>
          </Link>
        </div>

        {/* RIGHT side: Washing Machine Image */}
        <div className="w-full md:w-5/12 flex justify-end mt-12 md:mt-0">
          <div className="relative w-[400px] h-[400px] md:w-[500px] md:h-[500px]">
            <Image
              src="/washing-machine.svg"
              alt="Washing Machine"
              fill
              style={{ objectFit: "contain", objectPosition: "bottom right" }}
              className="absolute bottom-0 right-0"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WashhItServices;
