import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useFetch } from "../../hooks";
import axios from "../../axios/axios";
import { Spinner } from "@material-tailwind/react";
import ProductImage from "./ProductImage";
import ReviewStar from "../Shop/components/ReviewStar";

const Product = () => {
  const { productSlug } = useParams();
  const [isAddingToCart, setIsAddingToCart] = useState(false);

  const [addToCartBtnLabel, setaddToCartBtnLabel] = useState("Add To Cart");

  const { data, loading } = useFetch(`/products/${productSlug}/`);

  const handleAddToCart = async (productId) => {
    try {
      setIsAddingToCart(true);
      const response = await axios.post("/cart/cart-operations/", {
        product_id: productId,
      });
      setaddToCartBtnLabel("Item Added To Cart");
    } catch (err) {
      console.log(err);
    } finally {
      setIsAddingToCart(false);
    }
  };

  let content;
  if (loading) {
    content = (
      <div className="w-full h-screen flex items-center justify-center bg-white text-black">
        <Spinner className="h-10 w-10" />
      </div>
    );
  } else {
    content = (
      <div className="container mx-auto min-h-screen p-4 mt-[8vh] bg-white text-black">
        <div className="flex flex-col gap-8 lg:flex-row">
          <ProductImage images={data.images} />
          <div className="flex flex-col gap-4 w-full">
            <h1 className="font-playfairDisplay text-xl font-semibold lg:text-3xl">
              {data.name}
            </h1>
            <Link
              to={`/shop/${data.category.slug}`}
              className="text-neutral-700"
            >
              {data.category.name}
            </Link>
            <div className="flex gap-2">
              <ReviewStar />
              <ReviewStar />
              <ReviewStar />
              <ReviewStar />
            </div>
            <h2>Rs. {data.og_price}</h2>
            <button
              className="w-full flex items-center justify-center p-4 bg-black text-white font-medium rounded-md border-white border-[1px] hover:bg-white hover:text-black hover:border-black transition-all duration-200"
              onClick={() => {
                handleAddToCart(data.id);
              }}
            >
              {isAddingToCart ? <Spinner /> : addToCartBtnLabel}
            </button>
            <p className="lg:leading-7">{data.description}</p>
          </div>
        </div>
      </div>
    );
  }
  return content;
};

export default Product;
