import React, { useEffect, useState } from "react";
import Card from "./components/Card";
import { useParams } from "react-router-dom";
import axios from "../../axios/axios";
import { Spinner } from "@material-tailwind/react";

const Shop = () => {
  let { categorySlug } = useParams();
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await axios.get("/products/category/products/");
      const filteredArray = response.data.filter(
        (category) => category.products && category.products.length > 0
      );
      setCategories(filteredArray);
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  if (isLoading) {
    return (
      <div className="w-full h-screen flex items-center justify-center">
        <Spinner className="h-10 w-10" />
      </div>
    );
  } else {
    return (
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
};

export default Shop;
