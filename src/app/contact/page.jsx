import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';

export default function Contact() {
  return (
    <>
      <Navbar />
      <main className="p-6">
        <h2 className="text-3xl font-bold text-center mb-6">Contact Us</h2>
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
