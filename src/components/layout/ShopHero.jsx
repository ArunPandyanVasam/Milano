import React from "react";

const ShopHero = () => {
  const handleScrollToFooter = () => {
    const footer = document.getElementById("contact");
    if (footer) {
      footer.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      className="relative w-full h-[50vh] md:h-[60vh] flex items-center justify-center text-center text-white bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/images/shop-hero.jpg')", // replace with your actual image path
      }}
    >
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />

      <div className="relative z-10 max-w-2xl px-6">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          Explore Our Product Range
        </h1>
        <p className="text-lg md:text-xl mb-6">
          Premium hardware solutions for every space and style.
        </p>

        <button
          onClick={handleScrollToFooter}
          className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-3 rounded-lg shadow transition cursor-pointer"
        >
          Talk to an Expert
        </button>
      </div>
    </section>
  );
};

export default ShopHero;
