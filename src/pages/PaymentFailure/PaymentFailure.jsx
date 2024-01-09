import React from "react";
import { images } from "../../assets";
import { Link } from "react-router-dom";

const PaymentFailure = () => {
  return (
    <div className="container mx-auto p-4 flex flex-col items-center space-y-4">
      <img
        src={images.PaymentFailure}
        alt="payment failure image"
        className="h-80"
      />
      <p className="pt-2 text-center">
        Sorry! Your payment request couldn't be completed.{" "}
      </p>
      <p>
        Go back to{" "}
        <Link
          to="/shop/cart"
          className="text-primary hover:underline underline-offset-4"
        >
          cart
        </Link>{" "}
        to try again.
      </p>
    </div>
  );
};

export default PaymentFailure;
