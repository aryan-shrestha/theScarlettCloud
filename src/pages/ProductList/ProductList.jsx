import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { useFetch } from "../../hooks";
import Card from "../Shop/components/Card";
import { Spinner } from "@material-tailwind/react";

const ProductList = () => {
  const { categorySlug } = useParams();
  let products = [];
  let isLoading = true;

  const result = useFetch(`/products/?category__slug=${categorySlug}`);

  products = result?.data;
  isLoading = result?.loading;

  let content;

  if (isLoading) {
    content = (
      <div className="w-full h-screen flex items-center justify-center bg-white text-black">
        <Spinner className="h-10 w-10" />
      </div>
    );
  } else {
    if (products.length <= 0) {
      content = (
        <div className="w-full h-screen flex items-center justify-center bg-white text-black">
          <h1>No product found in this category</h1>
        </div>
      );
    } else {
      content = (
        <div className="container mx-auto p-8 bg-white text-black space-y-36">
          <div>
            <h1 className="text-outline uppercase text-5xl md:text-7xl font-semibold text-center m-12">
              {products[0].category.name}
            </h1>
            <div className="grid md:grid-cols-3 xl:grid-cols-4 gap-16">
              {products.map((product) => {
                return (
                  <Card
                    key={product.id}
                    productImage={product.images[0].image}
                    productName={product.name}
                    productPrice={product.og_price}
                    productSlug={product.slug}
                  />
                );
              })}
            </div>
          </div>
        </div>
      );
    }
  }

  return content;
};

export default ProductList;
