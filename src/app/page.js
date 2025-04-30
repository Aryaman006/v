"use client";

import { useEffect, useState } from "react";
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServiceCard';
import PricingSection from "@/components/PricingTablet";
import WhyWashhIt from "@/components/Why";
import Testimonials from "@/components/Testimonials";
import Header from '@/components/Navbar';

export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Header scrolled={scrolled} />
      <HeroSection />
      <ServicesSection />
      <PricingSection />
      <WhyWashhIt />
      <Testimonials />
    </>
  );
}
