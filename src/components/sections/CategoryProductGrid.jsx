import React from "react";

const CategoryProductGrid = ({ products }) => (
  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
    {products.map((product) => (
      <div
        key={product.id}
        className="bg-white rounded-lg shadow p-4 transition hover:shadow-lg"
      >
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover rounded"
        />
        <h3 className="text-lg font-semibold mt-3">{product.name}</h3>
        <p className="text-sm text-gray-600">{product.description}</p>
      </div>
    ))}
  </div>
);

export default CategoryProductGrid;
