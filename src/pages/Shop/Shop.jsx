import React from "react";

import { useFetch } from "../../hooks";
import Card from "./components/Card";

import { Spinner } from "@material-tailwind/react";

const Shop = () => {
  let categories = [];
  let isLoading = true;

  const result = useFetch("/products/category/products/");

  const filteredArray = result.data?.filter(
    (category) => category.products && category.products.length > 0
  );
  categories = filteredArray;
  isLoading = result.loading;

  let content;

  if (isLoading) {
    content = (
      <div className="w-full h-screen flex items-center justify-center">
        <Spinner className="h-10 w-10" />
      </div>
    );
  } else {
    content = (
      <div className="container mx-auto p-8 bg-white text-black space-y-36">
        {categories.map((category) => {
          return (
            <div key={category.name}>
              <h1 className="text-outline uppercase text-5xl md:text-7xl font-semibold text-center m-12">
                {category.name}
              </h1>
              <div className="grid md:grid-cols-3 xl:grid-cols-4 gap-16">
                {category.products.slice(0, 4).map((product) => {
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
          );
        })}
      </div>
    );
  }

  return content;
};

export default Shop;
