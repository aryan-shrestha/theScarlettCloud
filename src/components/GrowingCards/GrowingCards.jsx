import React, { useState } from "react";

import Card from "./Card";
const GrowingCards = () => {
  const [activeCard, setActiveCard] = useState(0);

  const images = [
    "https://images.pexels.com/photos/3303615/pexels-photo-3303615.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/1071882/pexels-photo-1071882.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/414706/pexels-photo-414706.jpeg?auto=compress&cs=tinysrgb&w=600",
  ];

  setTimeout(() => {
    if (activeCard > 1) {
      setActiveCard(0);
    } else {
      setActiveCard(activeCard + 1);
    }
  }, 4000);

  return (
    <div className="">
      <div className="flex flex-row space-x-4 h-[60vh]">
        {images.map((src, index) => {
          return (
            <Card
              key={index}
              activeCard={activeCard}
              id={index}
              setActiveCard={() => {
                setActiveCard(index);
              }}
              imageSrc={src}
              to={"/shop/"}
            />
          );
        })}
      </div>
    </div>
  );
};

export default GrowingCards;
