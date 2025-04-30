"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Navbar";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const isHome = pathname === "/"
  // const [scrolled, setScrolled] = useState(false);
  
  //   useEffect(() => {
  //     const handleScroll = () => {
  //       setScrolled(window.scrollY >= 0);
  //     };
  //     window.addEventListener('scroll', handleScroll);
  //     return () => window.removeEventListener('scroll', handleScroll);
  //   }, []);
  return (
    <>
    {!isHome && <Header scrolled={true} />}
      {children}
      <Footer />
    </>
  );
}
