import React from "react";

import CartItem from "./components/CartItem";
import { Link, useNavigate } from "react-router-dom";

const Cart = () => {
  const navigate = useNavigate();

  let content;

  content = (
    <div className="cart container mx-auto pt-10 px-4">
      <div className="space-y-8">
        <button
          className="flex items-center text-primary"
          onClick={() => {
            navigate(-1);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-4 h-6 inline mr-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
            />
          </svg>
          back
        </button>
        <div className="space-y-8 lg:flex">
          <div className="space-y-4">
            <h1 className="text-2xl">Your Cart</h1>
            <p className="text-sm text-primary">n items</p>
            <div className="grid grid-cols-4">
              <div className="col-span-2 md:col-span-1">PRODUCT</div>
              <div>PRICE</div>
              <div>QUANTITY</div>
              <div className="hidden md:block">TOTAL</div>
            </div>
            {/* <CartItem key={item.id} item={item} />; */}
          </div>
          <div className="h-fit space-y-4 p-4 border-[1px] border-neutral-800 rounded-xl">
            <div className=" space-y-1">
              <label htmlFor="discountCoupon" className="text-sm">
                Discount Code
              </label>
              <input
                type="text"
                placeholder="XDQIR3"
                className="p-2 w-full border-[1px] border-neutral-800 rounded-lg"
              />
            </div>
            <div className="flex justify-between">
              <span>Discount</span>
              <span>25%</span>
            </div>
            <div className="flex justify-between">
              <span>Total</span>
              <span>Rs. 99999</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping</span>
              <span>Rs. 99999</span>
            </div>
            <div className="flex justify-between">
              <span>Grand total</span>
              <span>Rs. 99999</span>
            </div>
            <Link
              to=""
              className="flex justify-center items-center w-full bg-neutral-800 text-white p-2 border-[1px] border-neutral-800 rounded-2xl hover:bg-white hover:text-neutral-800 transition-all duration-200"
            >
              Checkout
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5 inline-block ml-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );

  return content;
};

export default Cart;
