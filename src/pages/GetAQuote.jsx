import QuoteForm from "@/components/sections/QuoteForm";
import QuoteHero from "@/components/sections/QuoteHero";
import QuoteTrustBox from "@/components/sections/QuoteTrustBox";
import React from "react";

const GetAQuote = () => {
  return (
    <div className="py-16 space-y-12">
      <QuoteHero />
      <QuoteForm />
      <QuoteTrustBox />
    </div>
  );
};

export default GetAQuote;
