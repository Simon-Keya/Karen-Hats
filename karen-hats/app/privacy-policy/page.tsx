// src/app/help/privacy-policy/page.tsx
"use client";

const PrivacyPolicy = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
      
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">1. Introduction</h2>
        <p className="text-gray-700">
          We value your privacy and are committed to protecting your personal information. This Privacy Policy outlines the types of information we collect from you, how we use it, and the measures we take to safeguard your information.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">2. Information We Collect</h2>
        <p className="text-gray-700">
          We may collect various types of information from you, including:
        </p>
        <ul className="list-disc list-inside text-gray-700">
          <li>Personal Information: Name, email address, phone number, and other contact details.</li>
          <li>Usage Data: Information about how you interact with our platform, including pages visited, time spent on the site, and other related data.</li>
          <li>Device Information: Details about the device you use to access our platform, such as IP address, browser type, and operating system.</li>
          <li>Cookies: We may use cookies to enhance your experience on our platform.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">3. How We Use Your Information</h2>
        <p className="text-gray-700">
          We use the information we collect for various purposes, including:
        </p>
        <ul className="list-disc list-inside text-gray-700">
          <li>To provide and maintain our services.</li>
          <li>To improve our platform and enhance user experience.</li>
          <li>To communicate with you, including sending updates, promotional materials, and other information.</li>
          <li>To analyze usage patterns and trends to better understand our users.</li>
          <li>To comply with legal obligations and protect our rights.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">4. Sharing Your Information</h2>
        <p className="text-gray-700">
          We do not sell your personal information to third parties. However, we may share your information with:
        </p>
        <ul className="list-disc list-inside text-gray-700">
          <li>Service providers who assist us in operating our platform and providing our services.</li>
          <li>Law enforcement agencies or regulatory bodies if required by law.</li>
          <li>Third parties in connection with a merger, acquisition, or sale of assets.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">5. Data Security</h2>
        <p className="text-gray-700">
          We take data security seriously and implement various measures to protect your information. These measures include encryption, access controls, and regular security assessments. However, please be aware that no method of transmission over the internet or method of electronic storage is 100% secure.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">6. Your Rights</h2>
        <p className="text-gray-700">
          You have certain rights regarding your personal information, including:
        </p>
        <ul className="list-disc list-inside text-gray-700">
          <li>The right to access and obtain a copy of your personal data.</li>
          <li>The right to request the correction of inaccurate or incomplete information.</li>
          <li>The right to request the deletion of your personal data.</li>
          <li>The right to object to the processing of your data for certain purposes.</li>
          <li>The right to withdraw consent at any time where we rely on your consent to process your data.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">7. Changes to This Policy</h2>
        <p className="text-gray-700">
          We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any significant changes by posting the new policy on our platform with an updated revision date.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">8. Contact Us</h2>
        <p className="text-gray-700">
          If you have any questions about this Privacy Policy or our data practices, please contact us at [Your Contact Information].
        </p>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
