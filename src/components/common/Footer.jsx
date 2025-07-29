import React from "react";
import {
  FaInstagram,
  FaTwitter,
  FaFacebookF,
  FaLinkedinIn,
} from "react-icons/fa";
import { FaArrowUpLong } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#1F1F1F] text-white pt-12 pb-8">
      <div className="w-11/12 max-w-7xl mx-auto px-4 sm:px-6">
        {/* Logo & Description */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-10">
          <div className="flex items-center space-x-4">
            <img
              src="https://res.cloudinary.com/djdrpfhdz/image/upload/v1753774027/ALGO_TWIST_fiprfh.png"
              alt="Logo"
              className="h-12 sm:h-16 w-auto object-contain"
            />
          </div>
          <p className="text-center md:text-left text-gray-400 text-sm max-w-xl leading-relaxed">
            We craft scalable, secure, and high-performance digital services to
            grow your brand and business globally.
          </p>
        </div>

        {/* Links & Social */}
        {/* <div className="flex flex-col md:flex-row justify-between items-center border-t border-gray-700 pt-6 pb-6 gap-6">
          <div className="flex space-x-6 text-sm">
            {["Privacy", "Terms", "Security", "Contact"].map((link, i) => (
              <a
                key={i}
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                {link}
              </a>
            ))}
          </div>

          <div className="flex space-x-4">
            <a
              href="#"
              className="text-gray-400 hover:text-[#E1306C] transition duration-300"
              aria-label="Instagram"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-[#1DA1F2] transition duration-300"
              aria-label="Twitter"
            >
              <FaTwitter size={20} />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-[#1877F2] transition duration-300"
              aria-label="Facebook"
            >
              <FaFacebookF size={20} />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-[#0A66C2] transition duration-300"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn size={20} />
            </a>
          </div>
        </div> */}

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500 text-center">
            &copy; 2025 <span className="font-semibold">AlgoTwist</span>. All
            rights reserved.
          </p>
          <a
            href="#top"
            className="flex items-center text-sm text-gray-400 hover:text-white scroll-smooth transition"
          >
            <FaArrowUpLong className="mr-2" />
            Back to top
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
