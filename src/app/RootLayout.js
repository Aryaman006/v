"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Navbar";

export default function RootLayout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
