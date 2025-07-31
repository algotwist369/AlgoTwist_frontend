import React from "react";

const Button = ({
  children,
  className = "",
  onClick,
  disabled = false,
  type = "button",
  ...props
}) => {
  const buttonClasses = `w-full bg-highlightText text-textPrimary font-semibold py-3 rounded-lg hover:bg-opacity-90 transition duration-300`;

  return (
    <button
      type={type}
      className={`${buttonClasses} ${className}`}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
