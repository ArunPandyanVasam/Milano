// src/components/shop/CategoryHighlights.jsx

import React from "react";
import { categoryHighlights } from "../../data/categoryHighlights";
import { Link } from "react-router-dom";

const CategoryHighlights = () => {
  return (
    <section className="px-4 py-12 lg:px-8">
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
        Discover by Category
      </h2>

      <div className="flex gap-6 overflow-x-auto pb-4">
        {categoryHighlights.map((item, idx) => (
          <div
            key={idx}
            className="min-w-[250px] sm:min-w-[300px] lg:min-w-[350px] bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition group"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="p-5">
              <h3 className="text-lg font-semibold text-gray-800 mb-1">{item.title}</h3>
              <p className="text-sm text-gray-600 mb-4">{item.description}</p>
              <Link
                to={item.link}
                className="text-indigo-600 font-medium hover:underline"
              >
                Shop Now →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategoryHighlights;
