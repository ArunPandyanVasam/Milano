import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { shopDropdown } from "@/data/shopCategories";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileShopOpen, setMobileShopOpen] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef(null);

  const isActive = (href) => location.pathname === href;

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Shop", isShop: true },
    { label: "Services", href: "/services" },
    { label: "About Us", href: "/about" },
  ];

  const handleScrollToFooter = () => {
    const footer = document.getElementById("contact");
    if (footer) {
      footer.scrollIntoView({ behavior: "smooth" });
    }
  };

  const toggleDropdown = (idx) => {
    setOpenDropdown(openDropdown === idx ? null : idx);
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpenDropdown(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/90 border-b border-gray-200 shadow-md">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-24 py-4 flex items-center justify-between">
        <Link
          to="/"
          className="text-2xl font-extrabold tracking-wide text-gray-900 select-none"
        >
          Milano
        </Link>

        {/* Desktop Nav */}
        <nav
          ref={dropdownRef}
          className="hidden md:flex items-center gap-8"
          aria-label="Primary navigation"
        >
          {navItems.map((item, idx) =>
            item.isShop ? (
              <div key="shop" className="relative">
                <button
                  type="button"
                  onClick={() => toggleDropdown(idx)}
                  className="flex items-center gap-1 text-gray-800 font-semibold tracking-wide transition-colors duration-300 hover:text-indigo-600"
                  aria-expanded={openDropdown === idx}
                  aria-haspopup="true"
                >
                  Shop
                  <svg
                    className={`w-4 h-4 transform transition-transform duration-300 ${
                      openDropdown === idx ? "rotate-180" : ""
                    }`}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                <div
                  className={`absolute left-1/2 -translate-x-1/2 top-full mt-2 w-auto min-w-[750px] bg-white border border-gray-200 rounded-lg shadow-lg py-4 px-6 transition-opacity duration-300 z-50 ${
                    openDropdown === idx
                      ? "opacity-100 visible"
                      : "opacity-0 invisible pointer-events-none"
                  }`}
                >
                  <div className="grid grid-cols-3 gap-6">
                    {shopDropdown.categories.map((cat) => (
                      <div key={cat.title}>
                        <h4 className="text-sm font-semibold text-gray-900 mb-2">
                          {cat.title}
                        </h4>
                        <ul className="space-y-1">
                          {cat.items.map((item) => (
                            <li key={item}>
                              <Link
                                to={`/shop/${item
                                  .toLowerCase()
                                  .replace(/ /g, "-")}`}
                                className="text-sm text-gray-700 hover:text-indigo-600 transition"
                              >
                                {item}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={item.label}
                to={item.href}
                className={`text-gray-800 font-semibold tracking-wide transition-colors duration-300 hover:text-indigo-600 ${
                  isActive(item.href)
                    ? "text-indigo-600 underline underline-offset-4"
                    : ""
                }`}
              >
                {item.label}
              </Link>
            )
          )}

          <button
            type="button"
            onClick={handleScrollToFooter}
            className="text-gray-800 font-semibold tracking-wide transition-colors duration-300 hover:text-indigo-600 cursor-pointer"
          >
            Contact
          </button>

          <Link
            to="/get-a-quote"
            className="ml-6 px-5 py-2 rounded-lg bg-gradient-to-r from-indigo-600 to-indigo-500 text-white font-semibold shadow-md hover:from-indigo-700 hover:to-indigo-600 transition"
          >
            Get a Quote
          </Link>
        </nav>

        {/* Mobile menu icon */}
        <div className="md:hidden flex items-center gap-4">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600"
          >
            {menuOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden px-6 py-6 border-t border-gray-200 bg-white transition-all ${
          menuOpen ? "block" : "hidden"
        }`}
      >
        {navItems.map((item) => (
          <div key={item.label} className="mb-4">
            {item.isShop ? (
              <>
                <button
                  onClick={() => setMobileShopOpen(!mobileShopOpen)}
                  className="w-full flex justify-between items-center font-semibold text-gray-800"
                >
                  Shop
                  <span>{mobileShopOpen ? "−" : "+"}</span>
                </button>
                {mobileShopOpen && (
                  <div className="mt-2 ml-4 space-y-2">
                    {shopDropdown.categories.map((cat) => (
                      <div key={cat.title}>
                        <p className="font-medium text-gray-700">
                          {cat.title}
                        </p>
                        <ul className="pl-4">
                          {cat.items.map((item) => (
                            <li key={item}>
                              <Link
                                to={`/shop/${item
                                  .toLowerCase()
                                  .replace(/ /g, "-")}`}
                                className="block text-sm text-gray-600 hover:text-indigo-600"
                              >
                                {item}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}
              </>
            ) : (
              <Link
                to={item.href}
                className="block font-semibold text-gray-800 hover:text-indigo-600"
              >
                {item.label}
              </Link>
            )}
          </div>
        ))}

        <button
          type="button"
          onClick={() => {
            handleScrollToFooter();
            setMenuOpen(false);
          }}
          className="block mt-2 font-semibold text-gray-800 hover:text-indigo-600 w-full text-left cursor-pointer"
        >
          Contact
        </button>

        <Link
          to="/get-a-quote"
          className="block mt-4 px-4 py-2 bg-indigo-600 text-white text-center rounded-lg font-semibold shadow hover:bg-indigo-700"
        >
          Get a Quote
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
