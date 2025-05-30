import React, { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Card } from "../ui/card";
import { Quote, Star } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
  {
    quote:
      "Milano helped us spec out our entire build — smooth experience and great products!",
    name: "Liam, General Contractor",
    avatar: "/images/testimonials/liam.jpg",
    rating: 5,
  },
  {
    quote:
      "Their designer support made all the difference. Clients were thrilled!",
    name: "Ava, Interior Designer",
    avatar: "/images/testimonials/ava.jpg",
    rating: 5,
  },
  {
    quote: "Reliable, professional, and great discounts for our bulk order.",
    name: "Noah, Renovation Lead",
    avatar: "/images/testimonials/noah.jpg",
    rating: 4,
  },
];

const badges = [
  "20+ Years Industry Experience",
  "Design Support Available",
  "Contractor Approved",
];

const TrustBuilders = () => {
  const [emblaRef] = useEmblaCarousel({
    loop: true,
    align: "start",
    breakpoints: { "(min-width: 768px)": { active: false } },
  });

  return (
    <section className="relative mt-12 md:mt-20 bg-gradient-to-br from-blue-50 via-white to-blue-50 py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto rounded-xl shadow-xl">
      <h2 className="text-4xl font-extrabold text-center text-blue-900 mb-16 drop-shadow-md">
        Trust Builders
      </h2>

      {/* Carousel for mobile, grid for desktop */}
      <div className="md:hidden overflow-hidden" ref={emblaRef}>
        <div className="flex gap-6">
          {testimonials.map(({ quote, name, avatar, rating }, idx) => (
            <Card
              key={idx}
              className="min-w-[85%] p-6 ml-4 mr-4 last:mr-6 first:ml-6 rounded-2xl shadow-lg border border-blue-100 bg-white flex flex-col justify-between"
            >
              <Quote className="w-8 h-8 text-blue-400 mb-4" />
              <blockquote className="text-gray-700 italic mb-4">
                “{quote}”
              </blockquote>
              <div className="flex items-center gap-4 mt-auto">
                <img
                  src={avatar}
                  alt={name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-blue-200"
                />
                <div>
                  <p className="font-semibold text-blue-700">{name}</p>
                  <div className="flex text-yellow-500">
                    {[...Array(rating)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        fill="currentColor"
                        className="text-yellow-500"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Grid layout for medium+ screens */}
      <div className="hidden md:grid gap-10 md:grid-cols-3 mb-16">
        {testimonials.map(({ quote, name, avatar, rating }, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Card className="p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow bg-white border border-blue-100 flex flex-col justify-between h-full">
              <Quote className="w-8 h-8 text-blue-400 mb-4" />
              <blockquote className="text-gray-700 italic text-base leading-relaxed mb-6">
                “{quote}”
              </blockquote>
              <div className="flex items-center gap-4 mt-auto">
                <img
                  src={avatar}
                  alt={name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-blue-200"
                />
                <div>
                  <p className="text-blue-700 font-semibold">{name}</p>
                  <div className="flex text-yellow-500">
                    {[...Array(rating)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        fill="currentColor"
                        className="text-yellow-500"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Badges */}
      <motion.div
        className="flex flex-wrap justify-center gap-6 mt-10 md:mt-0"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        viewport={{ once: true }}
      >
        {badges.map((badge, idx) => (
          <span
            key={idx}
            className="bg-white text-blue-800 text-sm font-semibold px-6 py-3 rounded-full border-2 border-blue-300 shadow-md hover:shadow-lg transition-shadow cursor-default select-none"
          >
            {badge}
          </span>
        ))}
      </motion.div>
    </section>
  );
};

export default TrustBuilders;
