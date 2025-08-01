import React from "react";
import { TiArrowBackOutline } from "react-icons/ti";
import { useNavigate } from "react-router-dom";

const GoBack = () => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(-1)}
      className="text-highlightText font-extrabold cursor-pointer"
    >
      <TiArrowBackOutline className="text-4xl  hover:scale-75" />
    </button>
  );
};

export default GoBack;
