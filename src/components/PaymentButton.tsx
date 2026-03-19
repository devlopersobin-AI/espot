import React from "react";

export type PaymentProvider = "esewa" | "paypal";

export interface PaymentProps {
  amount: number;
  currency: string;
  provider: PaymentProvider;
  onSuccess: (paymentId: string) => void;
  onError?: (error: any) => void;
  description?: string;
}

export default function PaymentButton({
  amount,
  currency,
  provider,
  onSuccess,
  onError,
  description,
}: PaymentProps) {
  const handlePay = () => {
    if (provider === "esewa") {
      // TODO: Integrate eSewa payment gateway here
      alert("eSewa payment flow (mock)");
      onSuccess("esewa-mock-id");
    } else if (provider === "paypal") {
      // TODO: Integrate PayPal payment gateway here
      alert("PayPal payment flow (mock)");
      onSuccess("paypal-mock-id");
    }
  };

  return (
    <button
      type="button"
      onClick={handlePay}
      className="w-full py-2 bg-green-600 text-white text-sm font-semibold rounded-lg hover:bg-green-700 transition-colors mt-2"
    >
      Pay {currency} {amount} with {provider === "esewa" ? "eSewa" : "PayPal"}
    </button>
  );
}
