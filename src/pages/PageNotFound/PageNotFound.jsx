import React from "react";
import { images } from "../../assets";

const PageNotFound = () => {
  return (
    <div className="container h-screen flex flex-col items-center mx-auto p-4 space-y-4">
      <img src={images.error404} alt="" className="mt-16" />
      <h1 className="text-center text-neutral-800 text-lg">Page Not Found</h1>
    </div>
  );
};

export default PageNotFound;
