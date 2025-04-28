import React from "react";

const plans = [
  {
    type: "Wash & Iron",
    packages: [
      {
        plan: "Plan A",
        price: "Rs.660/-",
        pieces: "30 - Pieces",
        pickup: "1 Free Pickup Per Month",
      },
      {
        plan: "Plan B",
        price: "Rs.1199/-",
        pieces: "60 - Pieces",
        pickup: "2 Free Pickup Per Month",
      },
      {
        plan: "Plan C",
        price: "Rs.1799/-",
        pieces: "100 - Pieces",
        pickup: "3 Free Pickup Per Month",
      },
    ],
  },
  {
    type: "Wash & Fold",
    packages: [
      {
        plan: "Plan A",
        price: "Rs.420/-",
        pieces: "30 - Pieces",
        pickup: "1 Free Pickup Per Month",
      },
      {
        plan: "Plan B",
        price: "Rs.720/-",
        pieces: "60 - Pieces",
        pickup: "2 Free Pickup Per Month",
      },
      {
        plan: "Plan C",
        price: "Rs.999/-",
        pieces: "100 - Pieces",
        pickup: "3 Free Pickup Per Month",
      },
    ],
  },
];

const PackageCard = ({ plan, price, pieces, pickup }) => (
  <div className="relative bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
    <div className="absolute -top-5">
      <div className="bg-gradient-to-r from-purple-500 to-blue-400 text-white px-4 py-2 rounded-full font-semibold">
        {plan}
      </div>
    </div>
    <div className="mt-8 text-center">
      <h3 className="text-gray-600 font-medium mb-2">Monthly Package</h3>
      <p className="text-2xl font-bold mb-4">{price}</p>
      <div className="space-y-2 text-gray-600 text-sm">
        <p>{pieces}</p>
        <p>{pickup}</p>
        <p>Delivery Time 72 Hours*</p>
        <p>Casual Wear only</p>
      </div>
    </div>
    <button className="mt-6 bg-gray-200 text-gray-700 font-semibold py-2 px-6 rounded hover:bg-gray-300 transition">
      Book Now
    </button>
  </div>
);

const WashItPackages = () => {
  return (
    <div className="bg-gray-50 py-12 px-4 md:px-12">
      <h2 className="text-3xl font-bold text-center mb-12">Wash it packages</h2>

      {plans.map((section, idx) => (
        <div key={idx} className="mb-16">
          <h3 className="text-xl font-semibold mb-8">{section.type}</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {section.packages.map((pkg, idx2) => (
              <PackageCard key={idx2} {...pkg} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default WashItPackages;
