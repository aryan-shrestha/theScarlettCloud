import React, { useState } from "react";

const ProductImage = ({ images }) => {
  const [activeImage, setActiveImage] = useState(images[0].image);

  return (
    <div className="image-container flex flex-col gap-4 p-2 w-full">
      <div className="h-full w-full md:h-fit">
        <img
          src={activeImage}
          className="h-full w-full object-contain max-h-[60vh]"
        />
      </div>
      <div className="images flex gap-4 overflow-x-auto">
        {images.map((image, i) => {
          return (
            <img
              src={image.image}
              key={i}
              alt="image"
              className="h-24"
              onClick={() => {
                setActiveImage(image.image);
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProductImage;
