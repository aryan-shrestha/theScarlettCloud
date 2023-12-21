import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ShopCard = ({ product }) => {
  return (
    <div class="p-2 border-[1px] border-neutral-800 w-72 bg-white shadow-md rounded-md duration-500 hover:shadow-xl">
      <Link to={`/product/${product.slug}`} className="space-y-2">
        <img
          src={product.images[0].image}
          alt="Product"
          class="h-80 w-72 object-cover rounded"
        />
        <div class="px-4 w-72 space-y-2">
          <span class="text-neutral-400 uppercase text-xs ">
            {product.category.name}
          </span>
          <p class=" text-neutral-700  line-clamp-1">{product.name}</p>
          {parseInt(product.dis_price) != parseInt(product.og_price) ? (
            <div class="flex items-center">
              <p class="font-semibold text-neutral-800">
                Rs. {product.dis_price}
              </p>
              <del className="ml-2">
                <p class="text-sm text-neutral-500">Rs. {product.og_price}</p>
              </del>
              <div class="ml-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  class="bi bi-bag-plus"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z"
                  />
                  <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                </svg>
              </div>
            </div>
          ) : (
            <div class="flex items-center">
              <p class="font-semibold text-neutral-800">
                Rs. {product.og_price}
              </p>

              <div class="ml-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  class="bi bi-bag-plus"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z"
                  />
                  <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                </svg>
              </div>
            </div>
          )}
        </div>
      </Link>
    </div>
  );
};

export default ShopCard;
