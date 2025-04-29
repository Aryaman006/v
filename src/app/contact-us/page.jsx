import React from 'react';

const ContactUs = () => {
  return (
    <div className="bg-white">
      {/* Header */}
      <div className="bg-custom-gradient py-12 text-center text-white">
        <h1 className="text-4xl font-semibold">Contact Us</h1>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto p-8 grid md:grid-cols-2 gap-12">
        {/* Left Section - Address */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Address</h2>
          <p className="mb-6">
            H No 1-60/30/8/1, Anjaiah Nagar,<br />
            Anjaiah Nagar-Gachibowli,<br />
            Hotel Samskruthi Lane,<br />
            Hyderabad - 500032.
          </p>

          <h2 className="text-xl font-semibold mb-2">Mobile Number</h2>
          <p className="mb-6">+91 961 403 5555</p>

          <h2 className="text-xl font-semibold mb-2">Email ID</h2>
          <p className="text-blue-600">washhit2019[at]gmail[dot]com</p>
        </div>

        {/* Right Section - Form */}
        <div className="bg-gray-100 p-8 rounded-md">
          <h2 className="text-xl font-semibold mb-6">Contact Details</h2>
          <form className="space-y-4">
            <input type="text" placeholder="Name" className="w-full p-2 border rounded" />
            <input type="text" placeholder="Phone Number" className="w-full p-2 border rounded" />
            <input type="email" placeholder="Email ID" className="w-full p-2 border rounded" />
            <input type="text" placeholder="Location" className="w-full p-2 border rounded" />
            <textarea placeholder="Enter Message" className="w-full p-2 border rounded h-32"></textarea>
            <button
              type="submit"
              className="bg-custom-gradient text-white py-2 px-6 rounded hover:opacity-90"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
