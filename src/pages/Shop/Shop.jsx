import React, { useState } from "react";

import { Sidebar, ShopCard } from "../../components";
import { useFetch } from "../../hooks";
import { Spinner } from "@material-tailwind/react";
import SearchBar from "../../components/SearchBar/SearchBar";

const Shop = () => {
  const [sidebar, setSidebar] = useState(false);
  const { data: products, loading: loadingProducts } = useFetch("/products/");
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
        />

        <div className="p-4 lg:p-0  relative">
          <SearchBar showSidebar={showSidebar} />
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => {
              return <ShopCard product={product} key={product.id} />;
            })}
            ;
          </div>
        </div>
      </div>
    );
  }

  return <>{content}</>;
};

export default Shop;
