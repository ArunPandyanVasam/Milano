import {
    FaAward,
    FaHandshake,
    FaPaintBrush,
    FaLightbulb,
    FaHeadset,
  } from "react-icons/fa";
  
  const CompanyOverview = () => {
    return (
      <section className="relative bg-gradient-to-br from-white to-gray-100 dark:from-gray-900 dark:to-gray-800 py-20 px-4 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight">
            Company Overview
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mb-12">
            Milano Hardware and Interiors is a proudly Canadian business specializing in
            high-quality residential and commercial door hardware, bath accessories,
            kitchen solutions, and architectural finishes. Since 2003, we’ve helped
            homeowners, builders, and designers elevate their spaces with curated,
            durable, and stylish hardware solutions.
          </p>
  
          {/* Mission & Vision */}
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-md hover:shadow-xl transition">
              <h3 className="text-xl font-semibold text-indigo-600 mb-3">
                Our Mission
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                To provide exceptional hardware and interior solutions that combine quality,
                style, and functionality — helping our clients create spaces that reflect
                craftsmanship, comfort, and innovation.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-md hover:shadow-xl transition">
              <h3 className="text-xl font-semibold text-indigo-600 mb-3">
                Our Vision
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                To become Canada’s most trusted name in premium door hardware and interior
                design accessories, known for our design-forward approach, unparalleled
                service, and curated selection of world-class brands.
              </p>
            </div>
          </div>
  
          {/* Core Values */}
          <h3 className="text-3xl font-semibold text-gray-900 dark:text-white mb-8">
            Our Core Values
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <FaAward className="text-indigo-600 text-3xl" />,
                title: "Quality",
                desc: "We only source and deliver products that meet the highest standards.",
              },
              {
                icon: <FaHandshake className="text-indigo-600 text-3xl" />,
                title: "Integrity",
                desc: "We build relationships on transparency, honesty, and long-term value.",
              },
              {
                icon: <FaPaintBrush className="text-indigo-600 text-3xl" />,
                title: "Design-Centric",
                desc: "Aesthetics matter — we bring beauty and purpose into every project.",
              },
              {
                icon: <FaLightbulb className="text-indigo-600 text-3xl" />,
                title: "Innovation",
                desc: "We stay ahead with modern solutions, smart locks, and trending styles.",
              },
              {
                icon: <FaHeadset className="text-indigo-600 text-3xl" />,
                title: "Customer First",
                desc: "We listen, advise, and tailor every experience to our clients’ needs.",
              },
            ].map((value, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-md hover:shadow-xl transition flex items-start space-x-4"
              >
                <div>{value.icon}</div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                    {value.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {value.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default CompanyOverview;