import BrandsCarousel from "@/components/sections/FeaturedBrands";
import FeaturedCategories from "@/components/sections/FeaturedCategories";
import Hero from "@/components/sections/Hero";
import NewsletterSignup from "@/components/sections/NewsletterSignup";
import PromotionsSlider from "@/components/sections/PromotionsSlider";
import TrustBuilders from "@/components/sections/TrustBuilders";
import WhyChooseMilano from "@/components/sections/WhyChooseMilano";
import React from "react";


const Home = () => {
  return (
    <>
      <Hero />
      <FeaturedCategories />
      <WhyChooseMilano />
      <BrandsCarousel />
      <TrustBuilders />
      <PromotionsSlider />
      <NewsletterSignup />
    </>
  );
};

export default Home;
