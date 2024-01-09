import React from "react";
import { images } from "../../assets";
import { Link } from "react-router-dom";

const PaymentSuccessful = () => {
  return (
    <div className="container mx-auto p-4 flex flex-col items-center space-y-4">
      <img src={images.paymentSuccess} />
      <p className="pt-4">
        Your order is on the way.{" "}
        <Link
          to="/shop"
          className="text-primary hover:underline underline-offset-4"
        >
          Shop more.
        </Link>
      </p>
      <p>
        <Link
          to="#"
          className="text-primary hover:underline underline-offset-4"
        >
          View orders
        </Link>
      </p>
    </div>
  );
};

export default PaymentSuccessful;
