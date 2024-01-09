import React, { useEffect, useState, useRef } from "react";

import axios from "../../axios/axios";
import { images } from "../../assets";

const Checkout = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [cartSubTotal, setCartSubTotal] = useState(0);
  const [vatAmount, setVatAmount] = useState(0);
  const [grandTotal, setGrandTotal] = useState(0);
  const [errMessage, setErrMessage] = useState("");

  // form input state
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [contactNo, setContactNo] = useState("");
  const [addressLine1, setAddressLine1] = useState("");
  const [addressLine2, setAddressLine2] = useState("");
  const [orderNote, setOrderNote] = useState("");

  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
  const emailAddressRef = useRef(null);
  const contactNoRef = useRef(null);
  const addressLine1Ref = useRef(null);
  const addressLine2Ref = useRef(null);

  const validateFields = () => {
    console.log("validating");
    if (!firstName.trim()) {
      firstNameRef.current.focus();
      setErrMessage("Enter first name");
      return false;
    }
    if (!lastName.trim()) {
      setErrMessage("Enter last name");
      lastNameRef.current.focus();
      return false;
    }
    if (!emailAddress.trim()) {
      setErrMessage("Enter email address name");
      emailAddressRef.current.focus();
      return false;
    }
    if (!contactNo.trim()) {
      setErrMessage("Enter valid contact no");
      contactNoRef.current.focus();
      return false;
    }
    if (!addressLine1.trim()) {
      setErrMessage("Enter address line 1");
      addressLine1Ref.current.focus();
      return false;
    }
    if (!addressLine2.trim()) {
      setErrMessage("Enter address line 2");
      addressLine2Ref.current.focus();
      return false;
    }

    return true; // All fields are valid
  };

  const handleKhaltiPayment = async () => {
    if (validateFields()) {
      try {
        const response = await axios.post("/orders/khalti-initiate/", {
          first_name: firstName,
          last_name: lastName,
          phone_no: contactNo,
          email: emailAddress,
          address_line_1: addressLine1,
          address_line_2: addressLine2,
          order_note: orderNote,
          grand_total: grandTotal,
          vat: vatAmount,
        });
        console.log(response.data);
        window.location.replace(response.data.payment_url);
      } catch (err) {
        console.log(err);
      }
    }
  };

  const getCartTotal = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get("/cart/");
      setCartSubTotal(response.data.cart.total);
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  const calculateVatAmount = () => {
    const amt = ((13 / 100) * cartSubTotal).toFixed(2);
    setVatAmount(amt);
  };

  const calculateGrandTotal = () => {
    let deliveryCharge = 100;
    const amt =
      parseFloat(cartSubTotal) +
      parseFloat(vatAmount) +
      parseFloat(deliveryCharge);
    setGrandTotal(amt);
  };

  useEffect(() => {
    getCartTotal();
    calculateVatAmount();
    calculateGrandTotal();
  }, []);

  useEffect(() => {
    calculateVatAmount();
  }, [cartSubTotal]);

  useEffect(() => {
    calculateGrandTotal();
  }, [cartSubTotal, vatAmount]);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl px-2 font-semibold mt-8">Checkout</h1>
      <div className="flex flex-col mt-8 space-y-6 lg:flex-row lg:space-x-12 ">
        <div className="flex flex-col  space-y-2 p-1 w-full">
          {errMessage ? (
            <div className="p-2 border-[1px] border-red-300 text-red-300 rounded-xl">
              <p>{errMessage} !</p>
            </div>
          ) : (
            ""
          )}

          <h1 className="text-lg font-medium px-2 ">Customer Information</h1>

          <div className="flex flex-col gap-2 lg:flex-row lg:justify-between lg:gap-8">
            <div className="flex flex-col w-full">
              <label htmlFor="firstName" className="block p-2">
                First name
              </label>
              <input
                type="text"
                name="firstName"
                id="firstName"
                className="border-[1px] border-neutral-800 p-2 rounded-xl"
                placeholder="John"
                value={firstName}
                onChange={(e) => {
                  setFirstName(e.target.value);
                }}
                ref={firstNameRef}
              />
            </div>
            <div className="flex flex-col w-full">
              <label htmlFor="lastName" className="block p-2">
                Last name
              </label>
              <input
                type="text"
                name="lastName"
                id="lastName"
                className="border-[1px] border-neutral-800 p-2 rounded-xl"
                placeholder="Doe"
                value={lastName}
                onChange={(e) => {
                  setLastName(e.target.value);
                }}
                ref={lastNameRef}
              />
            </div>
          </div>
          <div className="flex flex-col gap-2 lg:flex-row lg:justify-between lg:gap-8">
            <div className="flex flex-col w-full">
              <label htmlFor="email" className="block p-2">
                Email address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="border-[1px] border-neutral-800 p-2 rounded-xl"
                placeholder="johndoe@email.com"
                value={emailAddress}
                onChange={(e) => {
                  setEmailAddress(e.target.value);
                }}
                ref={emailAddressRef}
              />
            </div>
            <div className="flex flex-col w-full">
              <label htmlFor="phoneNo" className="block p-2">
                Contact No.
              </label>
              <input
                type="text"
                name="phoneNo"
                id="phoneNo"
                className="border-[1px] border-neutral-800 p-2 rounded-xl"
                placeholder="9800000001"
                value={contactNo}
                onChange={(e) => {
                  setContactNo(e.target.value);
                }}
                ref={contactNoRef}
              />
            </div>
          </div>

          <div className="flex flex-col gap-2 lg:flex-row lg:justify-between lg:gap-8">
            <div className="flex flex-col w-full">
              <label htmlFor="addressLine1" className="block p-2">
                Address line 1
              </label>
              <input
                type="text"
                name="addressLine1"
                id="addressLine1"
                className="border-[1px] border-neutral-800 p-2 rounded-xl"
                placeholder="Town/city name"
                value={addressLine1}
                onChange={(e) => {
                  setAddressLine1(e.target.value);
                }}
                ref={addressLine1Ref}
              />
            </div>
            <div className="flex flex-col w-full">
              <label htmlFor="addressLine2" className="block p-2">
                Address line 2
              </label>
              <input
                type="text"
                name="addressLine2"
                id="addressLine2"
                className="border-[1px] border-neutral-800 p-2 rounded-xl"
                placeholder="Street/tol name"
                value={addressLine2}
                onChange={(e) => {
                  setAddressLine2(e.target.value);
                }}
                ref={addressLine2Ref}
              />
            </div>
          </div>
          <div className="flex flex-col">
            <label htmlFor="orderNote" className="block p-2">
              Order note
            </label>
            <textarea
              name="orderNote"
              id="orderNote"
              className="border-[1px] border-neutral-800 p-2 rounded-xl"
              value={orderNote}
              onChange={(e) => {
                setOrderNote(e.target.value);
              }}
            ></textarea>
          </div>
        </div>
        <div className="flex flex-col h-fit lg:w-[40%] space-y-4 p-4 border-[1px] border-neutral-800 rounded-xl text-neutral-800">
          <h1 className="text-lg font-medium">Order summary</h1>

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
          <div className="pt-4 flex flex-col space-y-4">
            <button
              className="py-2 h-14 flex items-center justify-center border-[1px] border-[#5C2D91] text-[#5C2D91] font-medium rounded-xl"
              onClick={handleKhaltiPayment}
            >
              Pay with
              <img src={images.khaltiLogo} alt="" className="ml-2 h-6" />
            </button>
            <button className="py-2 h-14 flex items-center justify-center border-[1px] border-[#61BC47] text-[#61BC47] font-medium rounded-xl">
              Pay with <img src={images.esewaLogo} alt="" className="h-10 " />
            </button>
            <button className="py-2 h-14 flex items-center justify-center border-[1px] border-neutral-800 text-neutral-800 font-medium rounded-xl">
              Cash on delivery
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 ml-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
