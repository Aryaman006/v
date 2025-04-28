import { useState } from 'react';
import { FaCalendarAlt, FaClock, FaMapMarkerAlt } from 'react-icons/fa';

export default function BookingForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    pickupDate: '',
    slot: '',
    area: '',
    address: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Add your API call or further logic here
  };

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h2 className="text-3xl font-semibold mb-8">Pickup Details</h2>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Name */}
        <input
          type="text"
          name="name"
          placeholder="Name *"
          value={formData.name}
          onChange={handleChange}
          required
          className="border rounded-md p-3 w-full"
        />
        
        {/* Phone Number */}
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number *"
          value={formData.phone}
          onChange={handleChange}
          required
          className="border rounded-md p-3 w-full"
        />

        {/* Email */}
        <input
          type="email"
          name="email"
          placeholder="Email *"
          value={formData.email}
          onChange={handleChange}
          required
          className="border rounded-md p-3 w-full"
        />

        {/* Pickup Date */}
        <div className="relative">
          <input
            type="date"
            name="pickupDate"
            value={formData.pickupDate}
            onChange={handleChange}
            required
            className="border rounded-md p-3 w-full"
          />
          <FaCalendarAlt className="absolute right-4 top-1/2 transform -translate-y-1/2 text-blue-500" />
        </div>

        {/* Select Slot */}
        <div className="relative">
          <select
            name="slot"
            value={formData.slot}
            onChange={handleChange}
            required
            className="border rounded-md p-3 w-full"
          >
            <option value="">Select Slot *</option>
            <option value="morning">Morning</option>
            <option value="afternoon">Afternoon</option>
            <option value="evening">Evening</option>
          </select>
          <FaClock className="absolute right-4 top-1/2 transform -translate-y-1/2 text-blue-500" />
        </div>

        {/* Select Area */}
        <div>
          <select
            name="area"
            value={formData.area}
            onChange={handleChange}
            required
            className="border rounded-md p-3 w-full"
          >
            <option value="">Select Area *</option>
            <option value="area1">Area 1</option>
            <option value="area2">Area 2</option>
            <option value="area3">Area 3</option>
          </select>
        </div>

        {/* Address */}
        <div className="md:col-span-2 relative">
          <textarea
            name="address"
            placeholder="Address *"
            value={formData.address}
            onChange={handleChange}
            required
            rows="3"
            className="border rounded-md p-3 w-full resize-none"
          />
          <FaMapMarkerAlt className="absolute right-4 top-4 text-blue-500" />
        </div>

        {/* Minimum Order Notice */}
        <div className="flex items-center">
          <p className="text-red-600 font-semibold">
            Minimum order amount is Rs.300*
          </p>
        </div>

        {/* Submit Button */}
        <div className="md:col-span-3">
          <button
            type="submit"
            className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 rounded-md w-full hover:opacity-90 transition"
          >
            Request a Pickup
          </button>
        </div>
      </form>
    </div>
  );
}
