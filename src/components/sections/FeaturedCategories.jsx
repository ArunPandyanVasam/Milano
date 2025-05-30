import React from "react";
import { Link } from "react-router-dom";
import { featuredCategories } from "../../data/featuredCategories";

const FeaturedCategories = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-10">
        <h2 className="text-4xl font-extrabold mb-14 text-center text-gray-900 tracking-tight">
          Featured Categories
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-10">
          {featuredCategories.map((category) => (
            <Link
              to={category.href}
              key={category.name}
              className="group relative rounded-2xl overflow-hidden shadow-lg bg-white bg-opacity-80 backdrop-blur-md border border-gray-200 hover:border-blue-500 transition-all duration-400 transform hover:scale-[1.05] hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              aria-label={`Explore ${category.name}`}
              style={{ aspectRatio: "1 / 1" }}
            >
              <div className="relative overflow-hidden rounded-2xl h-full w-full">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                  loading="lazy"
                  draggable={false}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-600/30 to-transparent opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-white bg-opacity-80 backdrop-blur-sm p-4 rounded-b-2xl text-center">
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 group-hover:text-blue-600 tracking-wide relative">
                  {category.name}
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none rounded-b-2xl"></span>
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCategories;
