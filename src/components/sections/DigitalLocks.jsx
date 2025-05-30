import React from "react";
import { Link } from "react-router-dom";
import digitalLocks from "@/data/digitalLocks";

const DigitalLocks = () => {
  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Digital Locks</h1>
      <p className="text-gray-600 mb-8">
        Explore our advanced digital locks designed for modern security and style.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {digitalLocks.map((product) => (
          <Link to={`/product/${product.id}`} key={product.id}>
            <div className="border rounded-lg shadow hover:shadow-lg transition">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold">{product.name}</h2>
                <p className="text-sm text-gray-600">{product.description}</p>
                <span className="text-indigo-600 font-medium">{product.price}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default DigitalLocks;
