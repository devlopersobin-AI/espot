import React from "react";
import PaymentButton from "./PaymentButton";

export interface CheckoutProps {
  amount: number;
  currency: string;
  provider: "esewa" | "paypal";
  description: string;
  onConfirm: (paymentId: string) => void;
  onCancel: () => void;
}

export default function CheckoutPage({
  amount,
  currency,
  provider,
  description,
  onConfirm,
  onCancel,
}: CheckoutProps) {
  return (
    <div className="max-w-md mx-auto bg-white rounded-2xl shadow-xl p-8 border border-gray-100 mt-10">
      <h2 className="text-2xl font-bold mb-4 text-slate-900">Checkout</h2>
      <div className="mb-6 text-slate-700">
        <div className="mb-2">You are about to pay for:</div>
        <div className="font-semibold text-lg mb-1">{description}</div>
        <div className="text-sm text-slate-500 mb-2">
          Payment Method:{" "}
          <span className="font-bold uppercase">{provider}</span>
        </div>
        <div className="text-xl font-bold text-blue-700 mb-2">
          {currency} {amount}
        </div>
      </div>
      <div className="flex gap-3">
        <button
          className="flex-1 py-2 rounded-lg border border-gray-300 text-gray-700 bg-gray-50 hover:bg-gray-100 font-semibold"
          onClick={onCancel}
        >
          Cancel
        </button>
        <PaymentButton
          amount={amount}
          currency={currency}
          provider={provider}
          description={description}
          onSuccess={onConfirm}
        />
      </div>
    </div>
  );
}
