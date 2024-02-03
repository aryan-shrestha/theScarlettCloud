import React from "react";
import ReviewStar from "./ReviewStar";
import { Link } from "react-router-dom";

const Card = ({ productImage, productName, productPrice, productSlug }) => {
  return (
    <div className="group w-full flex flex-col items-center gap-4">
      <div className="relative w-full">
        <img
          src={productImage}
          alt=""
          className="w-full h-[50vh] object-cover rounded-md"
        />
        <button className="absolute left-[50%] -translate-x-[50%] bottom-2 w-[95%] bg-white text-black capitalize py-4 hover:bg-black hover:text-white opacity-0 pointer-events-none transition-all duration-300 group-hover:opacity-100 group-hover:pointer-events-auto font-bold">
          Add to cart
        </button>
      </div>
      <Link to={`/product/${productSlug}`}>
        <h3 className="capitalize text-xl md:text-2xl text-center font-semibold font-playfairDisplay">
          {productName}
        </h3>
      </Link>
      <div>
        <ReviewStar />
        <ReviewStar />
        <ReviewStar />
        <ReviewStar />
      </div>
      <h3 className="text-xl font-medium">Rs. {productPrice}</h3>
    </div>
  );
};

export default Card;
