import React from "react";

const WhatsAppButton = ({
  phone = "918591659477", // ✅ No + or spaces
  message = "Hello, I'm interested in your services!", // ✅ Default message
  text,
  active = true,
}) => {
  const whatsappLink = `https://wa.me/${phone}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className={`inline-flex items-center gap-2 px-6 py-3 ${
        active
          ? "bg-buttonPrimary text-textPrimary hover:bg-buttonHover"
          : "border-2 border-buttonPrimary text-textPrimary hover:bg-buttonPrimary"
      } font-semibold rounded-full`}
    >
      {text || "Chat on WhatsApp"}
    </a>
  );
};

export default WhatsAppButton;
