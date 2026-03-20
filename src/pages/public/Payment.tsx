import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { PACKAGE_TIERS } from "./Membership";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export default function Payment() {
  const query = useQuery();
  const pkg = query.get("package");
  const sub = query.get("sub");
  const navigate = useNavigate();

  // Find the price for the selected package/sub-package
  let amount = "";
  if (pkg) {
    const tier = PACKAGE_TIERS.find((t) => t.tier === pkg);
    if (tier && sub) {
      const subcat = tier.subcategories.find((s) => s.name === sub);
      if (subcat) {
        amount = subcat.price;
      }
    } else if (tier) {
      amount = tier.price;
    }
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full bg-white p-8 rounded-2xl shadow-md">
        <button
          type="button"
          className="mb-6 text-blue-600 hover:text-blue-800 font-semibold flex items-center gap-1"
          onClick={() => navigate(-1)}
        >
          <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
            <path
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Back
        </button>
        <h1 className="text-2xl font-bold text-center mb-6 text-blue-700">
          Checkout
        </h1>
        <div className="mb-4">
          <div className="text-lg font-semibold text-gray-900">
            Selected Package:
          </div>
          <div className="text-blue-700 font-bold text-xl mt-1">{pkg}</div>
          {sub && (
            <div className="text-gray-700 mt-2">
              <span className="font-medium">Option:</span> {sub}
            </div>
          )}
          {amount && (
            <div className="text-2xl font-bold text-green-700 mt-4">
              Amount: {amount}
            </div>
          )}
        </div>
        <div className="space-y-4 mt-8">
          <button
            className="w-full py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-colors flex items-center justify-center gap-2"
            onClick={() => alert("Redirect to eSewa payment gateway")}
          >
            <img
              src="https://esewa.com.np/common/images/esewa-icon.png"
              alt="eSewa"
              className="h-6 w-6"
            />
            Pay with eSewa
          </button>
          <button
            className="w-full py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition-colors flex items-center justify-center gap-2"
            onClick={() => alert("Redirect to PayPal payment gateway")}
          >
            <img
              src="https://www.paypalobjects.com/webstatic/icon/pp258.png"
              alt="PayPal"
              className="h-6 w-6"
            />
            Pay with PayPal
          </button>
        </div>
      </div>
    </div>
  );
}
