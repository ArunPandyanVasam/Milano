import { useParams } from "react-router-dom";
import digitalLocks from "@/data/digitalLocks"; // Import others similarly

const allProducts = [...digitalLocks]; // combine other categories if needed

const ProductDetail = () => {
  const { id } = useParams();
  const product = allProducts.find((p) => p.id === id);

  if (!product) return <div className="p-6 text-center text-red-600">Product not found.</div>;

  return (
    <div className="max-w-6xl mx-auto p-6 grid md:grid-cols-2 gap-10">
      {/* Image */}
      <div>
        <img src={product.image} alt={product.name} className="rounded-xl w-full" />
      </div>

      {/* Details */}
      <div className="space-y-4">
        <h1 className="text-3xl font-bold">{product.name}</h1>
        <p className="text-gray-600">{product.description}</p>
        <p className="text-sm text-gray-500">Brand: {product.brand}</p>
        <p className="text-sm text-gray-500">SKU: {product.sku}</p>
        <p className="text-sm text-gray-500">Price: {product.price}</p>
        <p className="text-sm text-gray-500">Availability: {product.availability}</p>

        <ul className="list-disc list-inside text-gray-700">
          {product.features?.map((feature, idx) => (
            <li key={idx}>{feature}</li>
          ))}
        </ul>

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
