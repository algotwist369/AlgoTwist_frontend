import React from "react";

const Heading = ({ children, style, textSize = "text-4xl", ...props }) => {
  return (
    <h1
      className={`${textSize} md:text-5xl font-bold mb-6 text-textPrimary ${style}`}
      {...props}
    >
      {children}
    </h1>
  );
};

export default Heading;
