import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = ({
  phone = "7388480128",
  message = "Hello, I'm interested in your services!",
  text,
}) => {
  const whatsappLink = `https://wa.me/${phone}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 px-6 py-3 bg-blue-500 text-white font-semibold rounded-full hover:bg-blue-600 transition duration-300 shadow-lg"
    >
    
      {text ? text : "Chat on WhatsApp"}
    </a>
  );
};

export default WhatsAppButton;
