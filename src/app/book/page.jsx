"use client"
import Footer from '@/components/Footer';
import BookingForm from '@/components/BookingForm';
import Header from '@/components/Navbar';

export default function Book() {
  return (
    <>
    <Header/>
      <main className="p-6">
        <h2 className="text-3xl font-bold text-center mb-6">Book a Pickup</h2>
        <BookingForm />
      </main>
      {/* <Footer /> */}
    </>
  );
}
