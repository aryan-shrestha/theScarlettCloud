import React, { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

import { useFetch } from "../../hooks";
import axios from "../../axios/axios";

import ProductImageViewer from "./components/ProductImageViewer";
import { ShopCard } from "../../components";
import FAQSection from "./components/FAQSection";
import ReviewsSection from "./components/ReviewsSection";
import { Spinner } from "@material-tailwind/react";

const Product = () => {
  let { productSlug } = useParams();
  const navigate = useNavigate();
  const [isAddingToCart, setIsAddingToCart] = useState(false);
  const [addToCartBtn, setAddToCartBtn] = useState("Add to cart");

  const { data: product, loading: loadingProduct } = useFetch(
    `/products/${productSlug}/`
  );
  const { data: relatedProduct, loading: loadingRelatedProduct } =
    useFetch("/products/");

  const handleAddToCart = async () => {
    try {
      setIsAddingToCart(true);
      const response = await axios.post("/cart/cart-operations/", {
        product_id: product.id,
      });
      setAddToCartBtn("Item added to cart");
    } catch (err) {
      console.log(err);
    } finally {
      setIsAddingToCart(false);
    }
  };

  let content;
  if (loadingProduct || loadingRelatedProduct) {
    content = (
      <div className="container mx-auto flex justify-center items-center h-screen">
        <Spinner className="w-12 h-12" />
      </div>
    );
  } else {
    content = (
      <div className="product mx-auto container px-4 mt-8 space-y-4 text-neutral-800">
        <button
          className="flex items-center text-primary"
          onClick={() => {
            navigate(-1);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-4 h-6 inline mr-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
            />
          </svg>
          back
        </button>
        <div className="lg:flex space-y-2">
          <ProductImageViewer images={product.images} />
          <div className="product-detail space-y-2 lg:w-3/5">
            <h1 className="text-xl text-neutral-800 font-medium">
              {product.name}
            </h1>
            <Link to="/shop" className="text-primary block">
              {product.category.name}
            </Link>
            <div className="rating flex space-x-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                dataslot="icon"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                />
              </svg>
            </div>
            {parseInt(product.dis_price) != parseInt(product.og_price) ? (
              <p className="text-lg text-neutral-800 font-medium">
                {" "}
                <span className="text-xs line-through font-normal">
                  Rs. {product.og_price}
                </span>{" "}
                Rs. {product.dis_price}{" "}
                <span className="text-primary">-{product.dis_percentage}%</span>
              </p>
            ) : (
              <p className="text-lg">Rs. {product.og_price}</p>
            )}
            <button
              className="flex items-center justify-center bg-neutral-800 w-full py-4 rounded-xl text-white border-[1px] border-neutral-800 hover:bg-white hover:text-neutral-800 transition-all duration-150"
              onClick={handleAddToCart}
            >
              {isAddingToCart ? <Spinner /> : addToCartBtn}
            </button>
            <div className="description leading-7">
              <h3 className="font-medium text-lg">Description</h3>
              <p className="text-neutral-600">{product.description}</p>
            </div>
          </div>
        </div>
        <div className="sticky top-16 bg-white z-30">
          <ul className="flex space-x-4 h-12 items-center">
            <li>
              <a href="#related_items">Related Item</a>
            </li>
            <li>
              <a href="#faqs">FAQs</a>
            </li>
            <li>
              <a href="#reviews">Reviews</a>
            </li>
          </ul>
        </div>
        <div className="related-product" id="related_items">
          <h3 className="font-medium text-lg">Related Items</h3>
          <div className="cards-container flex space-x-4 overflow-x-auto py-2">
            {relatedProduct.map((product) => {
              return <ShopCard product={product} key={product.id} />;
            })}
          </div>
        </div>
        <div className="flex flex-col space-y-8 lg:space-y-0 lg:flex-row lg:justify-between lg:pt-8">
          <FAQSection />
          <ReviewsSection />
        </div>
      </div>
    );
  }

  return <>{content}</>;
};

export default Product;
