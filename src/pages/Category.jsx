import { useParams } from "react-router-dom";
import ProductCard from "@/components/sections/ProductCard";

// Import all category data
import digitalLocks from "@/data/digitalLocks";
// import classicPulls from "@/data/classicPulls"; // add more later

const categories = {
  "digital-locks": {
    title: "Digital Locks",
    description: "Explore our range of smart and secure digital locks.",
    products: digitalLocks,
  },
  // Add more category mappings here
};

const Category = () => {
  const { categorySlug } = useParams();
  const category = categories[categorySlug];

  if (!category) {
    return <div className="p-8 text-center text-red-600">Category not found.</div>;
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold text-gray-900">{category.title}</h1>
      <p className="text-gray-600 mt-2">{category.description}</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10">
        {category.products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Category;
