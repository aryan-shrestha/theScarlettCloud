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
  NewShop,
} from "./pages";
import AnimatedCursor from "react-animated-cursor";

function App() {
  return (
    <div className="app font-poppins overflow-x-hidden">
      <AnimatedCursor
        innerSize={20}
        outerSize={70}
        innerScale={2}
        outerScale={0}
        hasBlendMode={true}
        innerStyle={{
          backgroundColor: "#fff",
          mixBlendMode: "difference",
        }}
        outerStyle={{
          backgroundColor: "#fff",
          mixBlendMode: "difference",
        }}
        trailingSpeed={20}
      />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/shop-new" element={<NewShop />} />
        <Route path="/shop/:categorySlug" element={<Shop />} />
        <Route path="/shop-new/:categorySlug" element={<Product />} />
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
