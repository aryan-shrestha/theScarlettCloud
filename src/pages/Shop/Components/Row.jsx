import React from "react";

import { ShopCard } from "../../../components";
import { Link } from "react-router-dom";
import { useFetch } from "../../../hooks";

const Row = ({ category }) => {
  const { data: products } = useFetch(
    `/products/?category__slug=${category.slug}`
  );

  if (products.length === 0) {
    return "";
  } else {
    return (
      <div className="space-y-2">
        <span className="text-neutral-800 text-sm bg-secondary py-1 px-2 border-[1px] border-neutral-800 rounded-md">
          {category.name}
        </span>
        <div className="cards-container products flex space-x-4 overflow-x-auto py-2">
          {products.map((product) => {
            return <ShopCard product={product} key={product.id} />;
          })}
        </div>

        <Link
          className="text-sm text-neutral-800 hover:text-primary flex items-center"
          to={`/shop/${category.slug}/`}
        >
          Browse this category{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-6 inline-block ml-1"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
            />
          </svg>
        </Link>
      </div>
    );
  }
};

export default Row;
