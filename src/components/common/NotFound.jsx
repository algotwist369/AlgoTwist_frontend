import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-backgroundPrimary text-white flex flex-col items-center justify-center px-6 py-12">
      {/* Replace with your own image if needed */}
      <img
        src="https://res.cloudinary.com/djdrpfhdz/image/upload/v1753789529/Creamy_Aesthetic_Thank_You_Card_dktpsb.png"
        alt="404 Not Found"
        className="w-[50rem] mb-8"
      />
      <p className="text-gray-400 text-lg mb-6 text-center max-w-md">
        Sorry, the page you’re looking for doesn’t exist or has been moved.
      </p>
      <Link
        to="/"
        className="px-6 py-3 bg-highlightText hover:bg-highlightTextSecondary text-textPrimary rounded-lg transition duration-300 font-semibold"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;
