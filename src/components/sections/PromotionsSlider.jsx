import React, { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { motion } from "framer-motion";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { Gift, Tag, PackageCheck } from "lucide-react";
import { Link } from "react-router-dom";

const promotions = [
  {
    title: "New Arrival: Emtek Electronic Levers",
    description: "Explore the latest in modern security and design.",
    icon: Gift,
    color:
      "from-blue-200 to-blue-100 dark:from-blue-800 dark:to-blue-700 text-blue-900 dark:text-blue-100 border-blue-300 dark:border-blue-600",
    cta: "Shop Now",
    link: "/shop?filter=emtek-electronic",
  },
  {
    title: "Spring Sale – Up to 25% Off Bath Sets",
    description: "Freshen up your space with seasonal savings.",
    icon: Tag,
    color:
      "from-green-200 to-green-100 dark:from-green-800 dark:to-green-700 text-green-900 dark:text-green-100 border-green-300 dark:border-green-600",
    cta: "Explore Deals",
    link: "/shop?filter=spring-sale",
  },
  {
    title: "Bundle & Save for Contractors",
    description: "Special pricing for large-volume orders.",
    icon: PackageCheck,
    color:
      "from-yellow-200 to-yellow-100 dark:from-yellow-800 dark:to-yellow-700 text-yellow-900 dark:text-yellow-100 border-yellow-300 dark:border-yellow-600",
    cta: "Get Quote",
    link: "/services#contractor",
  },
];

const PromotionsSlider = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    skipSnaps: false,
  });
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    onSelect();

    const autoplay = setInterval(() => emblaApi.scrollNext(), 6000);
    return () => {
      clearInterval(autoplay);
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  return (
    <section className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24 overflow-hidden">
      <motion.div
        className="absolute top-0 left-0 w-full h-full pointer-events-none z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.15 }}
        style={{
          background:
            "radial-gradient(circle at 20% 40%, #93c5fd, transparent 50%)",
        }}
      />

      <h2 className="text-4xl font-extrabold text-center text-gray-900 dark:text-white mb-12 tracking-tight z-10 relative">
        Promotions & Featured Products
      </h2>

      <div
        className="overflow-hidden rounded-3xl shadow-xl z-10 relative"
        ref={emblaRef}
      >
        <div className="flex gap-6 px-6">
          {promotions.map((item, idx) => (
            <motion.div
              key={idx}
              className="min-w-[80%] sm:min-w-[60%] md:min-w-[45%] lg:min-w-[33%]"
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <Card
                className={`p-8 sm:p-10 flex flex-col items-center text-center rounded-3xl border-2 bg-gradient-to-tr ${item.color} shadow-md hover:shadow-2xl transition-shadow h-full`}
              >
                <div className="mb-6">
                  <item.icon className="w-12 h-12" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-gray-700 dark:text-gray-200 mb-6">
                  {item.description}
                </p>
                <Button
                  asChild
                  variant="secondary"
                  className="text-base font-semibold px-6 py-2 tracking-wide"
                >
                  <Link to={item.link}>{item.cta}</Link>
                </Button>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="flex justify-center mt-8 gap-3 z-10 relative">
        {promotions.map((_, idx) => (
          <button
            key={idx}
            onClick={() => emblaApi?.scrollTo(idx)}
            className={`w-4 h-4 rounded-full transition-colors ${
              selectedIndex === idx
                ? "bg-blue-600 dark:bg-blue-400 shadow-lg"
                : "bg-gray-300 dark:bg-gray-600 hover:bg-gray-400"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default PromotionsSlider;
