import "./App.css";
import { Routes, Route } from "react-router-dom";

import { Navbar, Footer } from "./components";
import {
  Blog,
  Cart,
  Checkout,
  Home,
  Orders,
  PageNotFound,
  PaymentFailure,
  PaymentSuccessful,
  Product,
  Shop,
} from "./pages";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/shop/:categorySlug" element={<Shop />} />
        {/* <Route path="/blog" element={<Blog />} /> */}
        <Route path="/product/:productSlug" element={<Product />} />
        <Route path="/shop/cart" element={<Cart />} />
        <Route path="/shop/checkout" element={<Checkout />} />
        <Route path="/shop/orders" element={<Orders />} />
        <Route path="/payment-success/" element={<PaymentSuccessful />} />
        <Route path="/payment-failure/" element={<PaymentFailure />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
