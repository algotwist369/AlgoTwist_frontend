import React from "react";

const ServicePopup = ({ show, onClose }) => {
  if (!show) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40 animate-fadeIn">
      <div className="bg-white rounded-2xl shadow-2xl p-10 max-w-md w-full text-center relative border border-purple-100">
        <button
          className="absolute top-3 right-3 text-textPrimary hover:text-textPrimary text-2xl font-bold focus:outline-none"
          onClick={onClose}
          aria-label="Close"
        >
          &times;
        </button>
        <div className="flex items-center justify-center mb-4">
          <span className="bg-green-100 text-green-800 text-xs font-bold px-2 py-1 rounded-full mr-2">Top Rated Agency</span>
          <span className="text-yellow-400 text-2xl">★</span>
        </div>
        <h4 className="text-2xl font-extrabold mb-3 text-purple-600">Let’s Build Your Success Story!</h4>
        <ul className="text-left text-gray-800 mb-5 mx-auto max-w-xs list-disc list-inside space-y-1">
          <li>Free strategy session with our experts</li>
          <li>Custom website tailored to your goals</li>
          <li>1 year of premium support included</li>
          <li>Fast, secure, and SEO-ready</li>
          <li>100% satisfaction guarantee</li>
        </ul>
        <p className="italic text-purple-700 mb-5 font-semibold">“Grow your business online without wasting time or money. Let’s craft a smart, affordable plan - 100% free!”<br/><span className="text-xs text-gray-500">- AlgoTwist Team., Business Owner</span></p>
        <a
          href="#contact"
          className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-extrabold py-3 px-8 rounded-full shadow-lg transition text-lg mt-2"
          onClick={onClose}
        >
          Get My Free Strategy Session
        </a>
        <p className="text-xs text-gray-500 mt-5">No risk. No pressure. Just results. Offer valid for a limited time!</p>
      </div>
    </div>
  );
};

export default ServicePopup; 