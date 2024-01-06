import "./App.css";
import { Routes, Route } from "react-router-dom";

import { Navbar, Footer } from "./components";
import { Blog, Cart, Home, PageNotFound, Product, Shop } from "./pages";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/product/:productSlug" element={<Product />} />
        <Route path="/shop/cart" element={<Cart />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
