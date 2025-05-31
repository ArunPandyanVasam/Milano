import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition">
      <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
      <div className="p-4 space-y-2">
        <h3 className="text-lg font-bold">{product.name}</h3>
        <p className="text-gray-600 text-sm">{product.description}</p>
        <Link
          to={`/product/${product.id}`}
          className="inline-block mt-2 text-indigo-600 hover:underline text-sm font-medium"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
