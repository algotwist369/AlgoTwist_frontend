import React, { useEffect, useState } from "react";
import ProposalForm from "./ProposalForm";

const FormPopup = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 20000);
    return () => clearTimeout(timer);
  }, []);

  if (!showPopup) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
      <div className=" relative animate-fadeIn ">
        
        {/* Close Button */}
        <button
          className="absolute top-3 right-3 text-textPrimary hover:text-highlightText text-2xl font-bold focus:outline-none"
          onClick={() => setShowPopup(false)}
          aria-label="Close"
        >
          &times;
        </button>

        <ProposalForm width={1} />

   
      </div>
    </div>
  );
};

export default FormPopup;
