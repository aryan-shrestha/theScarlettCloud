import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { HmacSHA256, enc } from "crypto-js";

const EsewaPayment = ({
  amount,
  vatAmount,
  grandTotal,
  esewaSubmitButtonRef,
}) => {
  const productDeliveryCharge = 100;
  const productServiceCharge = 0;
  const [productCode, setProductCode] = useState("EPAYTEST");
  const [trasactionUuid, setTrasactionUuid] = useState(uuidv4());
  const [signature, setSignature] = useState("");

  const generateSignature = () => {
    let hash = HmacSHA256(
      `total_amount=${grandTotal},transaction_uuid=${trasactionUuid},product_code=${productCode}`,
      "8gBm/:&EnhH.1/q"
    );
    let hashInBase64 = enc.Base64.stringify(hash);
    setSignature(hashInBase64);
  };

  useEffect(() => {
    generateSignature();
  }, [grandTotal]);

  return (
    <div>
      <form
        action="https://rc-epay.esewa.com.np/api/epay/main/v2/form"
        method="POST"
        className="flex flex-col gap-2"
      >
        <input
          type="text"
          id="amount"
          name="amount"
          value={amount}
          required
          readOnly
        />
        <input
          type="text"
          id="tax_amount"
          name="tax_amount"
          value={vatAmount}
          readOnly
          required
        />

        <input
          type="text"
          id="total_amount"
          name="total_amount"
          value={grandTotal}
          readOnly
          required
        />
        <input
          type="text"
          id="transaction_uuid"
          name="transaction_uuid"
          value={trasactionUuid}
          readOnly
          required
        />
        <input
          type="text"
          id="product_code"
          name="product_code"
          value={productCode}
          readOnly
          required
        />
        <input
          type="text"
          id="product_service_charge"
          name="product_service_charge"
          value={productServiceCharge}
          readOnly
          required
        />
        <input
          type="text"
          id="product_delivery_charge"
          name="product_delivery_charge"
          value={productDeliveryCharge}
          readOnly
          required
        />
        <input
          type="text"
          id="success_url"
          name="success_url"
          value={`http://localhost:5173/payment-success`}
          readOnly
          required
        />
        <input
          type="text"
          id="failure_url"
          name="failure_url"
          value="http://localhost:5173/payment-failure"
          readOnly
          required
        />
        <input
          type="text"
          id="signed_field_names"
          name="signed_field_names"
          value="total_amount,transaction_uuid,product_code"
          readOnly
          required
        />
        <input
          type="text"
          id="signature"
          name="signature"
          value={signature}
          readOnly
          required
        />
        <input
          ref={esewaSubmitButtonRef}
          value="Submit"
          type="submit"
          readOnly
          className="bg-green-300"
        />
      </form>
    </div>
  );
};

export default EsewaPayment;
