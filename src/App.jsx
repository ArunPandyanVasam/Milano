import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import ScrollToTop from "./components/layout/ScrollToTop"; // adjust path if needed

const Home = lazy(() => import("./pages/Home"));
const Shop = lazy(() => import("./pages/Shop"));
const About = lazy(() => import("./pages/About"));
const Services = lazy(() => import("./pages/Services"));
const GetAQuote = lazy(() => import("./pages/GetAQuote"));
const Category = lazy(() => import("./pages/Category"));
const ProductDetail = lazy(() => import("./pages/ProductDetail"));

function App() {
  return (
    <>
      <Navbar />
      <ScrollToTop />
      <Suspense fallback={<div className="text-center py-10">Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/get-a-quote" element={<GetAQuote />} />
          <Route path="/shop/:slug" element={<Category />} />
          <Route path="/products/:id" element={<ProductDetail />} />
        </Routes>
      </Suspense>
      <Footer />
    </>
  );
}

export default App;
