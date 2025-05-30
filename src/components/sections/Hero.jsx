import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section
      className="relative h-[500px] md:h-[650px] flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/images/hero/hero-background.jpg')",
      }}
    >
      {/* Animated Overlay with subtle vignette + gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/80 z-0" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-black/60 to-black/90 opacity-60 pointer-events-none z-10" />

      {/* Content */}
      <div
        className="relative z-20 text-white text-center px-6 max-w-4xl mx-auto"
        style={{ animation: "floatUp 6s ease-in-out infinite" }}
      >
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-6 drop-shadow-[0_4px_8px_rgba(0,0,0,0.75)] tracking-wide">
          Premium Hardware for Modern Living
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl mb-12 text-white/90 tracking-wide drop-shadow-[0_2px_6px_rgba(0,0,0,0.6)] max-w-3xl mx-auto">
          Top brands, exclusive selections, and expert support for contractors
          and homeowners.
        </p>

        <div className="flex flex-wrap justify-center gap-6">
          <Link
            to="/shop"
            className="px-8 py-3 bg-gradient-to-r from-indigo-600 to-indigo-500 shadow-lg rounded-full text-white font-semibold tracking-wide transition transform hover:scale-105 hover:shadow-xl"
          >
            Shop Now
          </Link>
          <Link
            to="/get-a-quote"
            className="px-8 py-3 rounded-full border-2 border-white text-white bg-white/10 backdrop-blur-sm font-semibold tracking-wide transition transform hover:bg-white hover:text-indigo-700 hover:scale-105 hover:shadow-lg"
          >
            Get a Quote
          </Link>
          {/* <Link
            to="/categories"
            className="px-8 py-3 rounded-full border-2 border-white text-white bg-white/10 backdrop-blur-sm font-semibold tracking-wide transition transform hover:bg-white hover:text-indigo-700 hover:scale-105 hover:shadow-lg"
          >
            Explore Categories
          </Link> */}
        </div>
      </div>

      <style>{`
        @keyframes floatUp {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
      `}</style>
    </section>
  );
};

export default Hero;
