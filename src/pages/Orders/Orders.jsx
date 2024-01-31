import React, { useEffect, useState } from "react";

import axios from "../../axios/axios";
import OrderItem from "./components/OrderItem";
import { Spinner } from "@material-tailwind/react";
import { Link } from "react-router-dom";

const Orders = () => {
  const [order, setOrder] = useState(null);
  const [orderItems, setOrderItems] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const getOrder = async () => {
    try {
      const response = await axios.get("/orders/");
      setOrder(response.data);
      setOrderItems(response.data.items);
      console.log(response.data.items);
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getOrder();
  }, []);

  let content;

  if (isLoading) {
    content = (
      <div className="container mx-auto h-screen w-full p-4 flex items-center justify-center">
        <Spinner />
      </div>
    );
  } else if (!order) {
    content = (
      <div className="container mx-auto h-screen w-full p-4 flex flex-col text-lg items-center justify-center">
        <h3>You have no pending order.</h3>
        <h3>
          Visit{" "}
          <Link
            to="/shop/"
            className="text-primary hover:underline underline-offset-4"
          >
            Shop
          </Link>{" "}
          to order
        </h3>
      </div>
    );
  } else {
    content = (
      <div className="container mx-auto p-4">
        <h1 className="text-xl font-medium text-neutral-800 px-2 py-8">
          Your order
        </h1>
        <div className="flex flex-col gap-4 md:flex-row md:justify-between h-screen">
          <div className="w-full h-fit border-[1px] border-neutral-800 rounded-xl p-4 space-y-2">
            <h3>
              Order No.{" "}
              <span className="text-primary">#{order.order_number}</span>
            </h3>
            <h3>Placed on {order.created_at} </h3>
            <h3>Order status: {order.status}</h3>
            <h3>Order Total: Rs. {order.payment.amount_paid}</h3>
            <h3>Payment method: {order.payment.payment_method}</h3>
          </div>
          <div className="w-full border-[1px] border-neutral-800 rounded-xl h-fit">
            <table className="w-full">
              <thead>
                <tr>
                  <th className="text-left p-4  font-medium">Products</th>
                  <th className="p-4  font-medium">Quanity</th>
                </tr>
              </thead>
              <tbody>
                {orderItems.map((item) => {
                  console.log(item);
                  return <OrderItem item={item} key={item.id} />;
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
  return content;
};

export default Orders;
