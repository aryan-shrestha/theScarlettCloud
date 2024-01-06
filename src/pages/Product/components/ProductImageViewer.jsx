import React, { useEffect, useState } from "react";

const ProductImageViewer = ({ images }) => {
  const [currentImage, setCurrentImage] = useState(images[0].image);

  useEffect(() => {
    setCurrentImage(images[0].image);
  }, [images]);

  return (
    <div className="image w-full space-y-4">
      <div className="active-image h-[40vh]">
        <img
          src={currentImage}
          className="h-full w-full object-contain"
          alt=""
        />
      </div>
      <div className="flex h-24 space-x-4 ">
        {images.map((image, index) => {
          return (
            <img
              key={index}
              src={image.image}
              className="cursor-pointer rounded-lg"
              onClick={() => setCurrentImage(image.image)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProductImageViewer;
