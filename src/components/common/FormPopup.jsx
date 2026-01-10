import React, { useEffect, useState } from "react";
import ProposalForm from "./ProposalForm";

const FormPopup = ({ onClose }) => {


  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
      <div className="relative animate-fadeIn">

        {/* Close Button */}
        <button
          className="absolute top-3 right-3 text-textPrimary hover:text-highlightText text-2xl font-bold focus:outline-none"
          onClick={onClose}
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
