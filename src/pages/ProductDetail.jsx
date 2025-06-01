import { useParams } from "react-router-dom";

// Import all product data
import digitalLocks from "@/data/digitalLocks";
import classicPulls from "@/data/classicPulls";
import levers from "@/data/levers";
import modernPulls from "@/data/modernPulls";
import towelBars from "@/data/towelBars";
import paperHolders from "@/data/paperHolders";
import cabinetHardware from "@/data/cabinetHardware";
import pullsAndKnobs from "@/data/pullsAndKnobs";

// Combine all products into one array
const allProducts = [
  ...digitalLocks,
  ...classicPulls,
  ...levers,
  ...modernPulls,
  ...towelBars,
  ...paperHolders,
  ...cabinetHardware,
  ...pullsAndKnobs,
];

const ProductDetail = () => {
  const { id } = useParams();
  const product = allProducts.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="p-6 text-center text-red-600 text-lg font-medium">
        Product not found.
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto p-6 grid md:grid-cols-2 gap-10">
      {/* Image Section */}
      <div>
        <img
          src={product.image}
          alt={product.name}
          className="rounded-xl w-full object-cover"
        />
      </div>

      {/* Details Section */}
      <div className="space-y-4">
        <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
        <p className="text-gray-600">{product.description}</p>

        <div className="text-sm text-gray-500 space-y-1">
          <p><strong>Brand:</strong> {product.brand}</p>
          <p><strong>SKU:</strong> {product.sku}</p>
          <p><strong>Price:</strong> {product.price}</p>
          <p><strong>Availability:</strong> {product.availability}</p>
        </div>

        <div className="mt-4">
          <h3 className="font-semibold text-gray-800 mb-2">Features:</h3>
          <ul className="list-disc list-inside text-gray-700">
            {product.features?.map((feature, idx) => (
              <li key={idx}>{feature}</li>
            ))}
          </ul>
        </div>

        <div className="mt-6 space-x-4">
          <button className="bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700 transition">
            Request a Quote
          </button>
          <button className="border border-indigo-600 text-indigo-600 px-6 py-2 rounded-md hover:bg-indigo-50 transition">
            Contact to Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
