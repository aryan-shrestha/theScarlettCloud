import React, { useState } from "react";

import { Sidebar, ShopCard } from "../../components";
import { useFetch } from "../../hooks";
import { Spinner } from "@material-tailwind/react";
import SearchBar from "../../components/SearchBar/SearchBar";
import { useParams } from "react-router-dom";

const Shop = () => {
  let { categorySlug } = useParams();
  const [sidebar, setSidebar] = useState(false);

  let products;
  let loadingProducts;

  if (categorySlug) {
    const result = useFetch(`/products/?category__slug=${categorySlug}`);
    products = result.data;
    loadingProducts = result.loading;
  } else {
    const result = useFetch("/products/");
    products = result.data;
    loadingProducts = result.loading;
  }

  const { data: categories, loading: loadingCategories } =
    useFetch("/category/");

  const showSidebar = () => {
    setSidebar(true);
  };

  const closeSidebar = () => {
    setSidebar(false);
  };
  let content;

  if (loadingProducts || loadingCategories) {
    content = (
      <div className="container mx-auto h-screen flex items-center justify-center">
        <Spinner className="h-10 w-10" />
      </div>
    );
  } else {
    content = (
      <div className="container mx-auto lg:p-4 lg:flex lg:gap-8">
        <Sidebar
          sidebar={sidebar}
          closeSidebar={closeSidebar}
          categories={categories}
          products={products}
        />

        <div className="p-4 lg:p-0  relative">
          <SearchBar showSidebar={showSidebar} />
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {products.length > 0 ? (
              products.map((product) => {
                return <ShopCard product={product} key={product.id} />;
              })
            ) : (
              <p>No products available</p>
            )}
          </div>
        </div>
      </div>
    );
  }

  return <>{content}</>;
};

export default Shop;
