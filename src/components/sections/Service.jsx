import React, { useEffect, useState } from "react";
import {
  FaTools,
  FaTruck,
  FaHandshake,
  FaHome,
  FaUsers,
  FaClipboardList,
} from "react-icons/fa";
import { Link } from "react-router-dom"; // Added import for routing

const fadeInClass = "opacity-100 translate-y-0";
const fadeOutClass = "opacity-0 translate-y-8";

const ServiceCard = ({ icon, title, description }) => (
  <div className="flex gap-4 p-6 bg-white rounded-xl shadow-lg border border-gray-200 hover:shadow-2xl transition-shadow duration-300 cursor-default">
    <div className="text-indigo-600 text-4xl flex-shrink-0">{icon}</div>
    <div>
      <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
      <p className="mt-1 text-gray-600">{description}</p>
    </div>
  </div>
);

const QuoteSnippet = ({ quote, author, role }) => (
  <blockquote className="mt-8 italic text-gray-700 border-l-4 border-indigo-500 pl-4 max-w-xl mx-auto">
    “{quote}”
    <footer className="mt-2 font-semibold text-indigo-600">
      — {author}, <span className="font-normal text-gray-600">{role}</span>
    </footer>
  </blockquote>
);

const Service = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-b from-indigo-50 to-white py-16 px-6 sm:px-12 lg:px-24">
      <section
        className={`max-w-5xl mx-auto text-center transition-all duration-700 ease-out transform ${
          visible ? fadeInClass : fadeOutClass
        }`}
      >
        <h1 className="text-4xl font-extrabold text-gray-900 mb-6">Our Services</h1>
        <p className="text-gray-700 max-w-3xl mx-auto mb-16 text-lg">
          Premium door hardware solutions with expert consultation, flexible pricing, and installation support tailored for homeowners and contractors.
        </p>
      </section>

      <section className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
        {/* Overview Cards */}
        <div>
          <h2 className="text-2xl font-bold text-indigo-700 mb-8 border-b-4 border-indigo-300 pb-2">
            Overview of Services
          </h2>
          <div className="space-y-6">
            <ServiceCard
              icon={<FaTools />}
              title="Hardware Consultation"
              description="Expert advice to help you select the perfect hardware for any project."
            />
            <ServiceCard
              icon={<FaHandshake />}
              title="Volume Pricing for Contractors"
              description="Competitive bulk pricing tailored for contractors and builders."
            />
            <ServiceCard
              icon={<FaTruck />}
              title="Delivery & Installation Options"
              description="Flexible delivery and professional installation to suit your schedule."
            />
            <ServiceCard
              icon={<FaHome />}
              title="In-store Pickup & Design Support"
              description="Convenient pickup with design assistance at our showroom."
            />
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-indigo-700 mb-8 border-b-4 border-indigo-300 pb-2">
            Tailored Support
          </h2>

          <div className="mb-12 bg-white rounded-xl shadow-lg p-8 border border-gray-200">
            <h3 className="text-xl font-semibold text-indigo-600 mb-4 flex items-center gap-3">
              <FaUsers className="text-2xl" /> For Homeowners
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Style selection help</li>
              <li>Product suggestions</li>
              <li>In-home or virtual consultation</li>
            </ul>
            <Link
              to="/services"
              className="mt-4 inline-block px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg shadow-md transition transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              Book a Consultation
            </Link>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200">
            <h3 className="text-xl font-semibold text-indigo-600 mb-4 flex items-center gap-3">
              <FaClipboardList className="text-2xl" /> For Contractors & Builders
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Bulk pricing</li>
              <li>Project timeline support</li>
              <li>Dedicated service manager</li>
            </ul>
            <Link
              to="/services"
              className="mt-4 inline-block px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg shadow-md transition transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              Get Volume Pricing
            </Link>
          </div>
        </div>
      </section>

      {/* Quote Snippets */}
      <section className="max-w-5xl mx-auto mt-20 px-6 text-center">
        <h2 className="text-2xl font-bold text-indigo-700 mb-10 border-b-4 border-indigo-300 pb-2">
          What Our Clients Say
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          <QuoteSnippet
            quote="Milano Hardware helped me find the perfect door hardware that elevated my home's style. Their consultation was invaluable!"
            author="Emily R."
            role="Homeowner"
          />
          <QuoteSnippet
            quote="The volume pricing and dedicated service manager made our construction project seamless and cost-effective."
            author="David K."
            role="Contractor"
          />
        </div>
      </section>
    </main>
  );
};

export default Service;
