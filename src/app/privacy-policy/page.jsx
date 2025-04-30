"use client";

export default function PrivacyPolicy() {
  return (
    <div className="bg-white text-gray-800 py-12">
      <div className="bg-custom-gradient py-20 mt-[-65] mb-20 text-white">
        <h1 className="text-3xl md:text-4xl md:ml-40 font-semibold ml-4 w-screen">Privacy Policy</h1>
      </div>
      <div className="max-w-4xl mx-auto px-4">
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-[#0071f3] mb-4">Introduction</h2>
          <p className="text-lg text-gray-700">
            Welcome to <span className="font-semibold text-[#5b42f3]">Mr. V</span>. This privacy notice explains how we handle your personal data and outlines the choices available to you regarding our data practices. We are committed to protecting your privacy and safeguarding your personal information. This policy, along with our Terms of Use, governs how we collect, use, and protect your data.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-[#0071f3] mb-4">Who Are We?</h2>
          <p className="text-lg text-gray-700">
            We are a leading organized laundry chain in Hyderabad, offering services such as cleaning, ironing, and dyeing for various garment types.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-[#0071f3] mb-4">Who Does This Policy Apply To?</h2>
          <p className="text-lg text-gray-700">
            This notice applies to all our customers including individuals, businesses, organizations, employees, agents, and contractors using our services. By using our site or services, you accept this privacy policy.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-[#0071f3] mb-4">Data We Collect</h2>
          <p className="text-lg text-gray-700 mb-4">
            We collect personal data to improve and deliver our services efficiently. This includes:
          </p>
          <ul className="list-disc ml-6 space-y-2 text-gray-700">
            <li>Name, email address, phone number, and contact information</li>
            <li>Login ID and password</li>
            <li>Preferences, service experience, and background information</li>
            <li>Cookies and website usage data for analytics and user experience enhancement</li>
          </ul>
          <p className="text-lg text-gray-700 mt-4">
            Cookies help us analyze traffic and improve our site. You may choose to accept or decline cookies in your browser settings.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-[#0071f3] mb-4">Purpose of Data Usage</h2>
          <ul className="list-disc ml-6 space-y-2 text-gray-700">
            <li>Maintaining internal records</li>
            <li>Enhancing our services and offerings</li>
            <li>Processing bookings and managing orders</li>
            <li>Sending promotional emails about offers and updates</li>
          </ul>
          <p className="text-lg text-gray-700 mt-4">
            If you wish to opt-out of marketing communications, please send a request to{" "}
            <span className="text-[#5b42f3]">unsubscribe@Mr. V.com</span> from your registered email.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-[#0071f3] mb-4">Data Sharing</h2>
          <p className="text-lg text-gray-700 mb-4">
            We only share personal data when necessary and ensure it's managed with strict confidentiality. Data may be shared with:
          </p>
          <ul className="list-disc ml-6 space-y-2 text-gray-700">
            <li>Payment processors and system administrators</li>
            <li>Marketing service providers</li>
            <li>Legal entities for compliance and legal obligations</li>
            <li>Social media platforms and third-party applications as necessary</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-[#0071f3] mb-4">Your Rights</h2>
          <p className="text-lg text-gray-700">
            You have rights under data protection laws, including the right to access, update, or delete your personal information. We process data only as described in this notice and to support our legitimate business interests.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-[#0071f3] mb-4">Policy Updates</h2>
          <p className="text-lg text-gray-700">
            We may update this Privacy Policy occasionally. Changes will be communicated via email or posted on our website. Please review this page regularly for the latest updates.
          </p>
        </section>
      </div>
    </div>
  );
}
