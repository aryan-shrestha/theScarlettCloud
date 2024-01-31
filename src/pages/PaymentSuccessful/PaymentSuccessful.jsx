import React, { useState } from "react";
import { images } from "../../assets";
import { Link, useSearchParams } from "react-router-dom";
import { enc } from "crypto-js";

const PaymentSuccessful = () => {
  const [searchParams] = useSearchParams();
  let encodedData = searchParams.get("data");
  let decodedData;
  if (encodedData) {
    decodedData = JSON.parse(atob(encodedData));
  }
  console.log(decodedData);

  const [isLoading, setIsLoading] = useState(true);

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
          to={"/shop/orders"}
          className="text-primary hover:underline underline-offset-4"
        >
          View orders
        </Link>
      </p>
    </div>
  );
};

export default PaymentSuccessful;
