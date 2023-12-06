import React, { useState } from "react";

import { SortMenu, Sidebar } from "../../components";
import Row from "./Components/Row";
import { useFetch } from "../../hooks";

const Shop = () => {
  const [sidebar, setSidebar] = useState(false);
  const { data: categories } = useFetch("/products/category/");

  const toggleSidebar = () => {
    setSidebar(!sidebar);
  };

  return (
    <div className="container mx-auto mt-6 px-4">
      <div className="space-y-6 md:grid md:grid-cols-3 md:gap-4 lg:grid-cols-5 ">
        <SortMenu toggleSidebar={toggleSidebar} />
        <Sidebar
          sidebar={sidebar}
          categories={categories}
          toggleSidebar={toggleSidebar}
        />
        <div className="space-y-6 md:col-span-2 lg:col-span-4 md:pl-4">
          {categories.map((category) => {
            return <Row category={category} key={category.id} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Shop;
