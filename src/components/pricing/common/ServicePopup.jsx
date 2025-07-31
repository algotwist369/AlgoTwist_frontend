import React, { useEffect, useState } from "react";
import WhatsAppButton from "../../common/WhatsAppButton";

const ServicePopup = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 10000);
    return () => clearTimeout(timer);
  }, []);

  if (!showPopup) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40 p-4 sm:p-6">
      <div className="bg-backgroundSecondary rounded-2xl shadow-2xl w-full max-w-lg sm:max-w-xl text-center relative border border-borderColor p-6 sm:p-10 animate-fadeIn">
        
        {/* Close Button */}
        <button
          className="absolute top-3 right-3 text-textPrimary hover:text-highlightText text-2xl font-bold focus:outline-none"
          onClick={() => setShowPopup(false)}
          aria-label="Close"
        >
          &times;
        </button>

        {/* Badge & Star */}
        <div className="flex items-center justify-center mb-4">
          <span className="bg-green-100 text-green-800 text-xs font-bold px-2 py-1 rounded-full mr-2">
            Top Rated Agency
          </span>
          <span className="text-yellow-400 text-2xl">★</span>
        </div>

        {/* Heading */}
        <h4 className="text-xl sm:text-2xl font-extrabold mb-3 text-highlightText">
          Let’s Build Your Success Story!
        </h4>

        {/* Bullet Points */}
        <ul className="text-left text-textPrimary mb-5 mx-auto max-w-md list-disc list-inside space-y-2 text-sm sm:text-base">
          <li>Kickstart with a free strategy call - no strings attached</li>
          <li>Web & app solutions built for performance, not just looks</li>
          <li>Designs that speak your brand - UI/UX, graphics & beyond</li>
          <li>Marketing that actually moves the needle - digital & social</li>
          <li>Reliable support, long after launch - we’ve got your back</li>
        </ul>

        {/* Quote */}
        <p className="italic text-highlightTextSecondary mb-5 font-semibold text-sm sm:text-base">
          “Grow your business online without wasting time or money. Let’s craft
          a smart, affordable plan - 100% free!”
          <br />
          <span className="text-xs text-textSecondary">
            - AlgoTwist Team., Business Owner
          </span>
        </p>

        {/* CTA Button */}
        <div className="flex justify-center">
          <WhatsAppButton text={"Get Your Free Strategy Session"} />
        </div>

        {/* Footer Note */}
        <p className="text-xs text-textSecondary mt-5">
          No risk. No pressure. Just results. Offer valid for a limited time!
        </p>
      </div>
    </div>
  );
};

export default ServicePopup;
