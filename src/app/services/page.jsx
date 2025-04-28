import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ServiceCard from '@/components/ServiceCard';

const services = [
  { title: "Wash & Fold", description: "Quick and affordable washing & folding." },
  { title: "Dry Cleaning", description: "High-quality fabric care for all garments." },
  { title: "Steam Ironing", description: "Crisp, wrinkle-free finish on clothes." },
  { title: "Shoe Cleaning", description: "Professional shoe laundry & polishing." },
];

export default function Services() {
  return (
    <>
      <Navbar />
      <main className="max-w-5xl mx-auto p-6">
        <h2 className="text-3xl font-bold mb-6">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((s, i) => <ServiceCard key={i} {...s} />)}
        </div>
      </main>
      <Footer />
    </>
  );
}
