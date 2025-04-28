import Link from 'next/link';
import { FaFacebookF, FaPinterestP, FaTwitter, FaInstagram, FaWhatsapp } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* About */}
        <div>
          <div className="flex items-center mb-4">
            <div className="bg-blue-500 rounded-full p-2 mr-2">
              <span className="text-white font-bold text-xl">W</span>
            </div>
            <h1 className="text-2xl font-bold">washh it</h1>
          </div>
          <p className="text-sm leading-relaxed">
            An unconventional start-up focused on solving the most pressing yet undermined daily problems of life. 
            You give your clothes to us and rest assured, it becomes our foremost priority.
          </p>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold text-blue-500 mb-4">Services</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/laundry-service" className="hover:underline">Laundry Services</Link></li>
            <li><Link href="/wash-fold" className="hover:underline">Wash & Fold</Link></li>
            <li><Link href="/steam-ironing" className="hover:underline">Steam Ironing</Link></li>
            <li><Link href="/saree-rolling" className="hover:underline">Saree Rolling</Link></li>
            <li><Link href="/curtains-carpets-dry-cleaning" className="hover:underline">Curtains Carpets Dry Cleaning</Link></li>
            <li><Link href="/toys-dry-cleaning" className="hover:underline">Toys Dry Cleaning</Link></li>
          </ul>

          {/* Social Icons */}
          <div className="mt-6">
            <h3 className="text-lg font-semibold text-blue-500 mb-2">Follow Us</h3>
            <div className="flex space-x-4 text-xl">
              <FaFacebookF className="hover:text-blue-400 cursor-pointer" />
              <FaPinterestP className="hover:text-red-400 cursor-pointer" />
              <FaTwitter className="hover:text-sky-400 cursor-pointer" />
              <FaInstagram className="hover:text-pink-400 cursor-pointer" />
              <FaWhatsapp className="hover:text-green-400 cursor-pointer" />
            </div>
          </div>
        </div>

        {/* Others */}
        <div>
          <h3 className="text-lg font-semibold text-blue-500 mb-4">Others</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/pricing" className="hover:underline">Pricing</Link></li>
            <li><Link href="/packages" className="hover:underline">Packages</Link></li>
            <li><Link href="/blog" className="hover:underline">Blog</Link></li>
            <li><Link href="/about-us" className="hover:underline">About Us</Link></li>
            <li><Link href="/contact-us" className="hover:underline">Contact Us</Link></li>
          </ul>
        </div>

        {/* Address */}
        <div>
          <h3 className="text-lg font-semibold text-blue-500 mb-4">Address</h3>
          <p className="text-sm mb-4">
            H No 1-60/30/8/1,<br />
            Anjaiah Nagar, Gachibowli,<br />
            Hotel Samskruthi Lane,<br />
            Hyderabad - 500032.
          </p>
          <iframe
            src="https://maps.google.com/maps?q=Gachibowli,Hyderabad&t=&z=13&ie=UTF8&iwloc=&output=embed"
            className="w-full h-32 rounded-md"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-blue-700 text-center text-sm py-4 mt-10 px-6 flex flex-col md:flex-row justify-between items-center">
        <p>© Copyrights by washhit.</p>
        <div className="flex space-x-6 mt-2 md:mt-0">
          <Link href="/terms-conditions" className="hover:underline">Terms & Conditions</Link>
          <Link href="/privacy-policy" className="hover:underline">Privacy Policy</Link>
        </div>
        <p>Powered by Truly Tech Solutions</p>
      </div>
    </footer>
  );
}
