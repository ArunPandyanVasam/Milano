import React from "react";
import { Card } from "../ui/card";
import { CheckCircle, Truck, DollarSign, Users } from "lucide-react";
import { motion } from "framer-motion";

const WhyChooseMilano = () => {
  const features = [
    {
      title: "Trusted National & Exclusive Brands",
      description:
        "We offer a curated selection of premium, trusted brands you won’t find everywhere.",
      icon: CheckCircle,
    },
    {
      title: "Expert Support for Builders & Designers",
      description:
        "Our knowledgeable team provides personalized assistance tailored to your project needs.",
      icon: Users,
    },
    {
      title: "Competitive Pricing with Volume Discounts",
      description:
        "Save more with special pricing on bulk orders, perfect for large projects.",
      icon: DollarSign,
    },
    {
      title: "In-store Pickup or Delivery Available",
      description:
        "Convenient options to get your products when and how you need them.",
      icon: Truck,
    },
  ];

  return (
    <section className="bg-gradient-to-b from-white to-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-gray-800 mb-12">
          Why Choose Milano?
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ title, description, icon: Icon }, index) => (
            <motion.article
              key={title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.15,
                duration: 0.6,
                ease: "easeInOut",
              }}
              viewport={{ once: true }}
              className="h-full"
              role="region"
              aria-label={title}
            >
              <Card
                className="
                p-6 sm:p-8 
                bg-gradient-to-br from-white to-blue-50 
                rounded-2xl shadow-lg border border-gray-200
                hover:shadow-2xl hover:border-blue-400
                transform hover:scale-[1.04] transition-all duration-400 ease-in-out 
                flex flex-col 
                h-full 
                min-h-[300px] sm:min-h-[350px] 
                text-sm sm:text-base
              "
              >
                <div
                  className="w-16 h-16 mb-6 flex items-center justify-center rounded-full
                  bg-white bg-opacity-70 shadow-md
                  text-blue-700
                  ring-1 ring-blue-300
                  transition-colors duration-300
                  group-hover:bg-blue-600 group-hover:text-white"
                >
                  <Icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900 tracking-wide">
                  {title}
                </h3>
                <p className="text-gray-700 text-base leading-relaxed flex-grow">
                  {description}
                </p>
              </Card>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseMilano;
