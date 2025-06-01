import { useParams } from "react-router-dom";
import ProductCard from "@/components/sections/ProductCard";

// Import all category data
import digitalLocks from "@/data/digitalLocks";
import classicPulls from "@/data/classicPulls";
import modernPulls from "@/data/modernPulls";
import towelBars from "@/data/towelBars";
import paperHolders from "@/data/paperHolders";
import cabinetHardware from "@/data/cabinetHardware";
import pullsAndKnobs from "@/data/pullsAndKnobs";

const categories = {
  "digital-locks": {
    title: "Digital Locks",
    description: "Explore our range of smart and secure digital locks.",
    products: digitalLocks,
  },
  "modern-pulls": {
    title: "Modern Pulls",
    description: "Minimalist and modern pulls for a clean aesthetic.",
    products: modernPulls,
  },
  "classic-pulls": {
    title: "Classic Pulls",
    description: "Timeless and elegant pulls for a traditional look.",
    products: classicPulls,
  },
  "towel-bars": {
    title: "Towel Bars",
    description:
      "Keep your towels neat and accessible with our premium towel bars.",
    products: towelBars,
  },
  "paper-holders": {
    title: "Paper Holders",
    description: "Stylish and functional toilet paper holders.",
    products: paperHolders,
  },
  "cabinet-hardware": {
    title: "Cabinet Hardware",
    description: "Sleek and functional hardware for all your cabinets.",
    products: cabinetHardware,
  },
  "pulls-knobs": {
    title: "Pulls",
    description: "Elegant pulls and knobs to match your design vision.",
    products: pullsAndKnobs,
  },
};

const Category = () => {
  const { categorySlug } = useParams();
  const category = categories[categorySlug];

  if (!category) {
    return (
      <div className="p-8 text-center text-red-600">Category not found.</div>
    );
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
