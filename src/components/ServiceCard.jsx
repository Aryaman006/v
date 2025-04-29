"use client";

import Link from "next/link";
import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";

const ServiceCard = ({ service, index }) => (
  <Link
    href={service.href}
    key={index}
    className="flex-shrink-0 snap-start flex flex-col items-start gap-4 group p-4 sm:p-6 rounded-lg bg-white shadow-lg hover:shadow-xl transition-shadow w-[80vw] sm:w-[250px]"
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
      title: "Laundry Care",
      description: "Fresh, crisp, and professionally handled.",
      href: "/services/laundry-service",
    },
    {
      title: "Dry Cleaning",
      description: "Perfect finish for your premium fabrics.",
      href: "/services/dry-cleaning",
    },
    {
      title: "Shoe Cleaning & Restoration",
      description: "Bring back the shine to every step.",
      href: "/services/shoe-cleaning",
    },
    {
      title: "Bag Cleaning & Refurbishment",
      description: "Restore your luxury bags with expert care.",
      href: "/services/bag-cleaning",
    },
    {
      title: "Carpet and Upholstery Cleaning",
      description: "Deep clean for a fresher, healthier home.",
      href: "/services/carpet-cleaning",
    },
    {
      title: "Premium Fabric Care",
      description: "Customized solutions for delicate garments.",
      href: "/services/fabric-care",
    },
];

  const [activeDot, setActiveDot] = useState(0);
  const scrollRef = useRef(null);
  const intervalRef = useRef(null);

  const startAutoScroll = () => {
    const scrollElement = scrollRef.current;
    if (!scrollElement) return;
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
    }, 3000);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (!scrollRef.current) return;
      const scrollPosition = scrollRef.current.scrollLeft;
      const cardWidth = scrollRef.current.children[0].offsetWidth;
      const newActiveDot = Math.round(scrollPosition / cardWidth);
      setActiveDot(newActiveDot);
    };

    const scrollElement = scrollRef.current;
    scrollElement.addEventListener("scroll", handleScroll);
    scrollElement.addEventListener("mouseenter", () =>
      clearInterval(intervalRef.current)
    );
    scrollElement.addEventListener("mouseleave", () => startAutoScroll());

    startAutoScroll();

    return () => {
      clearInterval(intervalRef.current);
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

  return (
    <section className="relative px-4 sm:px-8 md:px-16 py-16 overflow-hidden">
      <div className="max-w-screen-xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-12">
        {/* LEFT side: Content */}
        <div className="w-full md:w-7/12 space-y-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-blue-600 hover:text-purple-600 transition-colors">
            Washh It Services
          </h2>
          <p className="text-gray-600 text-base sm:text-lg max-w-md">
            Customer satisfaction is our primary mantra which drives us toward
            excellence in service delivery.
          </p>

          {/* Scrollable Cards */}
          <div
            ref={scrollRef}
            className="flex overflow-x-auto gap-6 py-6 snap-x snap-mandatory scroll-smooth scrollbar-hidden"
          >
            {services.map((service, index) => (
              <ServiceCard key={index} service={service} index={index} />
            ))}
          </div>

          <DotNavigation
            services={services}
            activeDot={activeDot}
            handleDotClick={handleDotClick}
          />

          {/* CTA Button */}
          <Link href="/book" passHref>
            <button className="mt-8 bg-custom-gradient text-white font-semibold py-3 px-8 rounded-lg text-lg shadow-lg hover:scale-105 transition-transform transform">
              Request a Pickup
            </button>
          </Link>
        </div>

        {/* RIGHT side: Washing Machine Image */}
        <div className="w-full md:w-5/12 flex justify-center md:justify-end">
          <div className="relative w-[280px] h-[280px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px]">
            <Image
              src="/washing-machine.svg"
              alt="Washing Machine"
              fill
              style={{ objectFit: "contain", objectPosition: "bottom right" }}
              className="absolute"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WashhItServices;
