import React from "react";

const OrderItems = ({ item }) => {
  return (
    <tr>
      <td className="p-4">
        <div className="flex items-center">
          <img
            src={item.product.images[0].image}
            alt="Product image"
            className="hidden md:block w-20 rounded-lg mr-4"
          />
          <div className="flex flex-col">
            <span className="line-clamp-1">{item.product.name}</span>
            {parseFloat(item.product.dis_price) <
            parseFloat(item.product.og_price) ? (
              <span className="text-xs text-neutral-400">
                Rs. {item.product.dis_price}{" "}
              </span>
            ) : (
              <span className="text-xs text-neutral-400">
                Rs. {item.product.og_price}{" "}
              </span>
            )}
          </div>
        </div>
      </td>
      <td className="p-4">
        <div className="flex items-center justify-center space-x-2">
          <span>{item.quantity}</span>
        </div>
      </td>
    </tr>
  );
};

export default OrderItems;
