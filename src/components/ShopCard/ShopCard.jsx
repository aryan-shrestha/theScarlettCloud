import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ShopCard = ({ product }) => {
  return (
    <div className="p-2 rounded-xl bg-white hover:shadow-lg border-[1px] border-neutral-800 transition-all ease-in duration-200">
      <Link to={`/product/${product.slug}`}>
        <img
          src={product.images[0].image}
          alt={`${product.name} image`}
          className="rounded-lg h-80 w-96 object-cover"
        />
      </Link>
      <div className="px-4 py-3 space-y-2">
        <span className="text-gray-400 uppercase text-sm">
          {product.category.name}
        </span>
        <p className="font-medium block truncate capitalize text-neutral-800">
          {product.name}
        </p>
        <div className="flex items-center">
          {product.dis_percentage > 0 ? (
            <>
              <p className="text-lg font-semibold text-neutral-800">
                Rs. {product.dis_price}
              </p>
              <del>
                <p className="text-sm text-gray-600 ml-2">
                  Rs. {product.og_price}
                </p>
              </del>
            </>
          ) : (
            <p className="text-lg font-semibold">Rs. {product.og_price}</p>
          )}

          <div className="ml-auto">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopCard;
