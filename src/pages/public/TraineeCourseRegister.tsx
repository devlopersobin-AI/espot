import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CheckoutPage from "../../components/CheckoutPage";
import Hero from "../../components/Hero";

const courses = [
  { title: "Corporate Leadership Training", price: 499 },
  { title: "Digital Skills Bootcamp", price: 299 },
  { title: "Executive Coaching Program", price: 1299 },
  { title: "Team Performance Workshop", price: 199 },
];

export default function TraineeCourseRegister() {
  // Hero section image and text
  const heroImage =
    "https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=1200&q=80";
  const [selected, setSelected] = useState(null);
  const [showCheckout, setShowCheckout] = useState(false);
  const navigate = useNavigate();

  const handleRegister = () => {
    setShowCheckout(true);
  };

  const handlePayment = () => {
    // Mark as paid (mock)
    localStorage.setItem("traineePaid", "true");
    navigate("/dashboard/member");
  };

  return (
    <>
      <Hero
        title="Register for Training"
        subtitle="Choose your course and unlock new skills with E-SPOT Club."
        label="Training"
        image={heroImage}
      />
      <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50">
        <div className="bg-white p-8 rounded-2xl shadow-xl max-w-md w-full">
          <h2 className="text-xl font-bold mb-4 text-slate-900">
            Select Your Training
          </h2>
          <div className="space-y-4 mb-6">
            {courses.map((c, i) => (
              <label key={i} className="flex items-center gap-3 cursor-pointer">
                <input
                  type="radio"
                  name="course"
                  value={c.title}
                  checked={selected?.title === c.title}
                  onChange={() => setSelected(c)}
                />
                <span className="font-semibold">{c.title}</span>
                <span className="ml-auto text-blue-700 font-bold">
                  ${c.price}
                </span>
              </label>
            ))}
          </div>
          <button
            className="w-full py-2.5 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
            disabled={!selected}
            onClick={handleRegister}
          >
            Continue to Payment
          </button>
        </div>
        {showCheckout && selected && (
          <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
            <CheckoutPage
              amount={selected.price}
              currency="USD"
              provider="esewa"
              description={selected.title}
              onConfirm={handlePayment}
              onCancel={() => setShowCheckout(false)}
            />
          </div>
        )}
      </div>
    </>
  );
}
