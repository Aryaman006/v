"use client"
import { useEffect, useState } from "react";
import Footer from '@/components/Footer';
import Link from 'next/link';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServiceCard';
import Header from '@/components/Navbar';
import PricingSection from "@/components/PricingTablet";
import WhyWashhIt from "@/components/Why";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  const [showHeader, setShowHeader] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // When user scrolls more than 100px, show header
      if (window.scrollY > window.innerHeight - 100) {
        setShowHeader(true);
      } else {
        setShowHeader(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* {showHeader && <Header />} */}
      <HeroSection />
      <ServicesSection />
      <PricingSection/>
      <WhyWashhIt/>
      <Testimonials/>
      {/* <Footer /> */}
    </>
  );
}
