// src/components/BrandsWeCarry.jsx
import React from "react";
import brands from "../../data/brandsWeCarry";

const BrandsWeCarry = () => {
  return (
    <section className="bg-white dark:bg-gray-950 py-20 px-4 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
          Brands We Carry
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-12">
          We partner with leading manufacturers to bring you the finest in quality,
          durability, and design.
        </p>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
          {brands.map((brand, index) => (
            <div
              key={index}
              className="group relative bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md hover:shadow-xl transition border border-gray-200 dark:border-gray-800"
            >
              <img
                src={brand.logo}
                alt={brand.name}
                className="mx-auto h-16 object-contain transition-transform group-hover:scale-105"
              />
              <div className="mt-4 text-indigo-600 text-sm font-medium">
                {brand.category}
              </div>
              <h4 className="text-lg font-semibold text-gray-800 dark:text-white mt-1">
                {brand.name}
              </h4>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {brand.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandsWeCarry;
