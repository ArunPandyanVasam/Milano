import React from "react";
import brands from "../../data/featuredBrands";

const BrandsCarousel = () => {
  return (
    <section className="bg-gradient-to-b from-white to-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-10">
          Featured Brands
        </h2>

        <div className="overflow-hidden">
          <div className="flex animate-marquee gap-6">
            {[...brands, ...brands].map(({ name, src }, idx) => (
              <div
                key={idx}
                className="min-w-[150px] sm:min-w-[180px] md:min-w-[200px] lg:min-w-[220px] bg-white border border-gray-100 shadow-sm rounded-xl p-4 flex items-center justify-center"
              >
                <img
                  src={src}
                  alt={`${name} logo`}
                  className="max-h-16 object-contain grayscale hover:grayscale-0 transition duration-300"
                  loading="lazy"
                  draggable={false}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default BrandsCarousel;
