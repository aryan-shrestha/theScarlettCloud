import React, { useEffect, useState } from "react";

import axios from "../../../axios/axios";

const CartItem = ({ item, removeFromCart, updateCartTotal }) => {
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

  const handleIncrease = async () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
    try {
      const response = await axios.patch("/cart/cart-operations/", {
        product_id: item.product.id,
        operation: "increase",
      });

      updateCartTotal(response.data.cart_total);
    } catch (err) {
      console.log(err);
    }
  };

  const handleDecrease = async () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
      try {
        const response = await axios.patch("/cart/cart-operations/", {
          product_id: item.product.id,
          operation: "decrease",
        });
        updateCartTotal(response.data.cart_total);
      } catch (err) {
        console.log(err);
      }
    } else {
      return;
    }
  };

  const handleRemove = async () => {
    removeFromCart(item.id);
    try {
      const response = await axios.delete(`/cart/cart-operations/${item.id}/`);
      updateCartTotal(response.data.cart_total);
    } catch (err) {
      console.log(err);
    }
  };

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
    <tr className="">
      <td className="p-4">
        <div className="flex items-center">
          <img
            src={item.product.images[0].image}
            alt={`${item.product.name} image`}
            className="hidden md:block w-20 rounded-lg mr-4"
          />
          <div className="flex flex-col">
            <span className="line-clamp-1">{item.product.name}</span>
            <span className="text-xs text-neutral-400">
              Rs. {item.product.og_price}
            </span>
          </div>
        </div>
      </td>
      <td className="p-4">
        <div className="flex items-center justify-center space-x-2">
          <button className="p-2 font-semibold" onClick={handleDecrease}>
            -
          </button>
          <span>{quantity}</span>
          <button className="p-2 font-semibold" onClick={handleIncrease}>
            +
          </button>
        </div>
      </td>
      <td className="text-center p-4">{total}</td>
      <td className="text-center p-4">
        <button onClick={handleRemove}>
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
              d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
            />
          </svg>
        </button>
      </td>
    </tr>
  );
};

export default CartItem;
