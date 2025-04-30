"use client";

export default function TermsAndConditions() {
  return (
    <main className="bg-white text-gray-800">
      {/* Header Section with Gradient */}
      <div className="bg-custom-gradient mt-[-30] text-white py-16 px-6 md:px-20">
        <h1 className="md:text-4xl text-3xl font-semibold md:ml-40">Terms & Conditions</h1>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        <p className="text-lg mb-8 text-gray-700">
          Please read the following terms and conditions carefully as it sets out the terms
          of a legally binding agreement between you (the reader) and
          <span className="font-semibold text-[#5b42f3]"> Mr V Private Limited.</span>
        </p>

        {/* Payment Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-[#0071f3] mb-4">Payment:</h2>
          <ul className="list-disc ml-6 space-y-2 text-gray-700">
            <li>Applicable taxes will be charged extra and shown in the invoice.</li>
            <li>All advance payments must be mentioned in this pickup delivery invoice.</li>
            <li>
              For any loss or damage of a garment, the compensation amount shall not exceed
              5 times the cost of processing that garment.
            </li>
            <li>The final invoice will be provided at the time of delivery.</li>
          </ul>
        </section>

        {/* Delivery Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-[#0071f3] mb-4">Delivery:</h2>
          <ul className="list-disc ml-6 space-y-2 text-gray-700">
            <li>Delivery will be made within 36–72 hours.</li>
            <li>We are closed on national/regional holidays and Sundays.</li>
            <li>Special instructions must be mentioned in the pickup/delivery invoice.</li>
            <li>
              Please check all garment belongings before pickup. We are not responsible for
              lost items post-pickup.
            </li>
            <li>We do not accept items that cannot be processed.</li>
            <li>
              Any detachable item from garments will be counted and charged separately.
            </li>
            <li>
              Please count garments before handing them over and upon delivery. No claims for
              loss will be entertained after payment.
            </li>
          </ul>
        </section>

        {/* Quality Section */}
        <section>
          <h2 className="text-2xl font-semibold text-[#0071f3] mb-4">Quality:</h2>
          <ul className="list-disc ml-6 space-y-2 text-gray-700">
            <li>No responsibility will be held for already damaged or torn clothes.</li>
            <li>
              Quality-related concerns must be reported within 24 hours of delivery.
            </li>
            <li>No guarantee is provided for color blending issues.</li>
            <li>Rates are subject to change without prior notice.</li>
            <li>
              In case of a dispute, the jurisdiction will lie with the courts in Hyderabad.
            </li>
          </ul>
        </section>
      </div>
    </main>
  );
}
