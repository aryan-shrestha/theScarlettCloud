import React, { useEffect, useState, useRef } from "react";
import { Spinner } from "@material-tailwind/react";

import CartItem from "./components/CartItem";
import { Link } from "react-router-dom";
import axios from "../../axios/axios";

const Cart = () => {
  const [cartItems, setCartItems] = useState(null);
  const [cartSubTotal, setCartSubTotal] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [vatAmount, setvatAmount] = useState(0);
  const [grandTotal, setGrandTotal] = useState(0);

  const prevCartItemsRef = useRef();

  const removeFromCart = (itemId) => {
    const updatedCart = cartItems.filter((item) => item.id != itemId);
    setCartItems(updatedCart);
  };

  const calculateVatAmount = () => {
    const amt = ((13 / 100) * cartSubTotal).toFixed(2);
    setvatAmount(amt);
  };

  const calculateGrandTotal = () => {
    let deliveryCharge = 100;
    const amt =
      parseFloat(cartSubTotal) +
      parseFloat(vatAmount) +
      parseFloat(deliveryCharge);
    setGrandTotal(amt);
  };

  const getCart = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get("/cart/");
      setCartSubTotal(response.data.cart.total);
      setCartItems(response.data.cart_items);
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    // set the previous cartItems value in the ref
    prevCartItemsRef.current = cartItems;
  }, [cartItems]);

  useEffect(() => {
    if (prevCartItemsRef.current !== cartItems) {
      getCart();
    }
  }, [cartItems]);

  useEffect(() => {
    calculateVatAmount();
  }, [cartSubTotal]);

  useEffect(() => {
    calculateGrandTotal();
  }, [cartSubTotal, vatAmount]);

  useEffect(() => {
    getCart();
  }, []);

  let content;

  if (isLoading) {
    content = (
      <div className="container mx-auto h-screen w-full p-4 flex items-center justify-center">
        <Spinner />
      </div>
    );
  } else {
    content = (
      <div className="container mx-auto p-4 mt-20 h-screen bg-white text-black">
        <div className="flex flex-col lg:flex-row w-full  justify-between gap-6">
          <div className="w-full ">
            <h1 className="text-3xl px-4 font-semibold font-playfairDisplay">
              Your Cart
            </h1>
            {cartItems.length <= 0 ? (
              <div className="p-4 ">
                <span>
                  Your cart is empty. Visit{" "}
                  <Link
                    to="/shop"
                    className="text-primary underline underline-offset-2"
                  >
                    Shop
                  </Link>
                </span>
              </div>
            ) : (
              <table className="w-full">
                <thead>
                  <tr>
                    <th className="text-left p-4  font-medium">Product</th>
                    <th className="p-4  font-medium">Quanity</th>
                    <th className="p-4  font-medium">Total</th>
                    <th className="p-4  font-medium"></th>
                  </tr>
                </thead>

                <tbody>
                  {cartItems.map((item) => {
                    return (
                      <CartItem
                        item={item}
                        key={item.id}
                        removeFromCart={removeFromCart}
                        updateCartTotal={setCartSubTotal}
                      />
                    );
                  })}
                </tbody>
              </table>
            )}
          </div>
          <div className="mt-2 h-fit lg:w-[40%] border-[1px] border-neutral-800 rounded-xl w-full p-4 space-y-4">
            <Link
              to={"/shop"}
              className="inline-flex items-center hover:underline underline-offset-4 transition-all duration-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5 mr-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
                />
              </svg>
              Continue shopping
            </Link>
            <h1 className="font-medium text-2xl">Cart Detail</h1>
            <div className="flex justify-between">
              <h3>Sub Total</h3>
              <span>Rs. {cartSubTotal}</span>
            </div>
            <div className="flex justify-between">
              <h3>13% VAT</h3>
              <span>Rs. {vatAmount}</span>
            </div>
            <div className="flex justify-between">
              <h3>Delivery Charge</h3>
              <span>Rs. 100</span>
            </div>
            <div className="flex justify-between">
              <h3>Grand Total</h3>
              <span>Rs. {grandTotal}</span>
            </div>
            <div className="flex flex-col gap-4">
              <Link
                to="/shop/checkout"
                className="bg-neutral-800 w-full py-3 text-white text-center rounded-lg border-[1px] border-neutral-800 hover:bg-white hover:text-black transition-all duration-200 font-medium"
              >
                Checkout
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return content;
};

export default Cart;
