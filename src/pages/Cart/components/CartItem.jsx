import React, { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";

const CartItem = ({ item }) => {
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(item.quantity);
  const [total, setTotal] = useState(0);

  function calculateItemTotal(quantity, discounted_price, org_price) {
    let price;
    if (parseInt(discounted_price) === parseInt(org_price)) {
      price = org_price;
    } else {
      price = discounted_price;
    }
    return parseInt(quantity) * price;
  }

  useEffect(() => {
    setTotal(
      calculateItemTotal(
        quantity,
        item.product.dis_price,
        item.product.og_price
      )
    );
  }, [quantity]);

  return (
    <div className="grid grid-cols-4 text-sm">
      <div className="flex items-center col-span-2 md:col-span-1">
        <img
          src="http://res.cloudinary.com/djwyoxnkk/image/upload/v1703150396/ciavb5apsqjhc8jkonqf.jpg"
          alt=""
          className="h-20 w-20 object-contain"
        />
        <span className="ml-1 line-clamp-2 leading-6">{item.product.name}</span>
      </div>
      <div className="h-full w-full  flex items-center">
        {item.product.dis_price !== 0 ? `${item.product.dis_price}` : ""}
      </div>
      <div className="h-full w-full  flex items-center space-x-3">
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 12H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
        </button>
        <span>{quantity}</span>
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
        </button>
      </div>
      <div className="h-full w-full  items-center hidden md:flex">{total}</div>
    </div>
  );
};

export default CartItem;
