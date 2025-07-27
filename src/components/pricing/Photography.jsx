import React, { useEffect } from "react";
import WhatsAppButton from "../common/WhatsAppButton";

const photographyPlans = [
  {
    type: "Basic Photography Package",
    price: "Starting at ₹4000",
    features: [
      "Up to 20 edited photos",
      "1-hour indoor/outdoor shoot",
      "Basic retouching",
      "Delivered in 3 days",
    ],
    idealFor: "Personal profiles, LinkedIn, Portfolio shoots",
  },
  {
    type: "360° Product Shoot",
    price: "Starting at ₹8000",
    features: [
      "360° rotating product views",
      "High-resolution product capture",
      "Multi-angle lighting setup",
      "Delivered with video + GIF formats",
    ],
    idealFor: "E-commerce, Product catalogues",
  },
  {
    type: "Professional Videography",
    price: "Starting at ₹12000",
    features: [
      "Up to 2-minute edited video",
      "Script support & transitions",
      "Professional-grade equipment",
      "Raw + Edited footage delivered",
    ],
    idealFor: "Events, Brand shoots, Commercials",
  },
];

const Photography = () => {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  return (
    <div className="bg-[#0F0F0F] min-h-screen text-white py-24 px-4 sm:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-white mb-4">
          Photography & Videography Services
        </h1>
        <p className="text-lg text-gray-400 text-center max-w-3xl mx-auto mb-10">
          From stunning visuals to 360° product shoots, we provide high-end
          photography and video solutions tailored for brands, events, and
          e-commerce.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {photographyPlans.map((plan, idx) => (
            <div
              key={idx}
              className="bg-[#1A1A1A] border border-gray-800 rounded-2xl p-6 hover:shadow-lg transition duration-300"
            >
              <h3 className="text-xl font-semibold text-yellow-400 mb-2">
                {plan.type}
              </h3>
              <p className="text-green-400 font-bold text-lg mb-3">
                {plan.price}
              </p>
              <ul className="list-disc list-inside text-sm text-gray-300 mb-4 space-y-1">
                {plan.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
              <p className="text-sm italic text-gray-500">
                Ideal for:{" "}
                <span className="text-gray-300">{plan.idealFor}</span>
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-[#1A1A1A] border border-gray-700 rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-2">
            Why Choose Our Creative Team?
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto mb-6">
            We blend creativity with cutting-edge equipment to deliver
            compelling visuals that elevate your brand, product, or personal
            presence.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-sm text-left text-gray-300">
            <div>📸 DSLR & 4K Equipment</div>
            <div>🎥 Studio & Outdoor Setup</div>
            <div>🖌️ Expert Editing & Retouch</div>
            <div>🚚 Fast Delivery & Support</div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-xl font-semibold mb-2">
            Need premium visual content for your brand?
          </h3>
          <WhatsAppButton text={"Book a shoot"} />
        </div>
      </div>
    </div>
  );
};

export default Photography;
