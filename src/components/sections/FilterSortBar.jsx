import React, { useState } from "react";
import ProductGrid from "./ProductGrid";

const categories = ["Door Hardware", "Stylish Door Pulls", "Bathroom Accessories", "Kitchen & Cabinet"];
const brands = ["Emtek", "Taymor", "Weiser", "Richelieu"];
const finishes = ["Brushed Nickel", "Oil-Rubbed Bronze", "Polished Chrome"];

const FilterSortBar = () => {
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedFinishes, setSelectedFinishes] = useState([]);

  const toggleFilter = (value, selectedList, setSelectedList) => {
    if (selectedList.includes(value)) {
      setSelectedList(selectedList.filter((v) => v !== value));
    } else {
      setSelectedList([...selectedList, value]);
    }
  };

  return (
    <>
      <div className="flex flex-col sm:flex-row">
        {/* Sidebar for desktop */}
        <aside className="hidden sm:block w-72 sticky top-20 self-start border rounded-md p-6 space-y-6 bg-white dark:bg-gray-800 shadow-md h-[calc(100vh-80px)] overflow-y-auto">
          <FilterSection
            title="Category"
            options={categories}
            selected={selectedCategories}
            toggle={(val) =>
              toggleFilter(val, selectedCategories, setSelectedCategories)
            }
          />
          <FilterSection
            title="Brand"
            options={brands}
            selected={selectedBrands}
            toggle={(val) =>
              toggleFilter(val, selectedBrands, setSelectedBrands)
            }
          />
          <FilterSection
            title="Finish / Style"
            options={finishes}
            selected={selectedFinishes}
            toggle={(val) =>
              toggleFilter(val, selectedFinishes, setSelectedFinishes)
            }
          />
        </aside>

        {/* Mobile filter drawer */}
        {filtersOpen && (
          <aside className="sm:hidden fixed inset-0 bg-black bg-opacity-50 z-50">
            <div className="absolute left-0 top-0 bottom-0 w-72 bg-white dark:bg-gray-900 p-6 overflow-y-auto shadow-xl">
              <button
                onClick={() => setFiltersOpen(false)}
                className="mb-4 px-4 py-2 rounded bg-red-500 text-white font-semibold"
              >
                Close
              </button>
              <FilterSection
                title="Category"
                options={categories}
                selected={selectedCategories}
                toggle={(val) =>
                  toggleFilter(val, selectedCategories, setSelectedCategories)
                }
              />
              <FilterSection
                title="Brand"
                options={brands}
                selected={selectedBrands}
                toggle={(val) =>
                  toggleFilter(val, selectedBrands, setSelectedBrands)
                }
              />
              <FilterSection
                title="Finish / Style"
                options={finishes}
                selected={selectedFinishes}
                toggle={(val) =>
                  toggleFilter(val, selectedFinishes, setSelectedFinishes)
                }
              />
            </div>
          </aside>
        )}

        {/* Main content */}
        <main className="flex-1 p-4">
          <section className="mb-8 px-4 sm:px-0 text-center">
            <div className="flex flex-col items-center mb-4">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white">
                Explore Our Products
              </h2>
              <button
                onClick={() => setFiltersOpen(!filtersOpen)}
                className="sm:hidden mt-2 px-4 py-2 bg-indigo-600 text-white rounded-md font-semibold"
              >
                {filtersOpen ? "Close Filters" : "Filter"}
              </button>
            </div>
            <p className="text-gray-600 dark:text-gray-300 max-w-xl mx-auto text-base sm:text-lg">
              Discover premium hardware and accessories to elevate every space —
              from entry doors to bath and cabinetry.
            </p>
          </section>

          <ProductGrid />
        </main>
      </div>
    </>
  );
};

const FilterSection = ({ title, options, selected, toggle }) => (
  <div>
    <h4 className="font-semibold text-lg mb-3">{title}</h4>
    <div className="space-y-2 max-h-40 overflow-auto">
      {options.map((option) => (
        <label
          key={option}
          className="flex items-center space-x-3 cursor-pointer select-none"
        >
          <input
            type="checkbox"
            checked={selected.includes(option)}
            onChange={() => toggle(option)}
            className="form-checkbox h-5 w-5 text-indigo-600"
          />
          <span>{option}</span>
        </label>
      ))}
    </div>
  </div>
);

export default FilterSortBar;
