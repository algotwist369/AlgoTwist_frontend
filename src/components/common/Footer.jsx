import React from "react";
import {
  FaInstagram,
  FaTwitter,
  FaFacebookF,
  FaLinkedinIn,
} from "react-icons/fa";
import { FaArrowUpLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-backgroundSecondary text-textPrimary pt-12 pb-8">
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
          <p className="text-center md:text-left text-disabledText text-sm max-w-xl leading-relaxed">
            We craft scalable, secure, and high-performance digital services to
            grow your brand and business globally.
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-borderColor pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-col md:flex-row md:items-center gap-3">
            <p className="text-sm text-gray-500">
              &copy; 2025 <span className="font-semibold">AlgoTwist</span>. All rights reserved.
            </p>

            {/* Inline Links */}
            <div className="flex gap-4 text-sm text-gray-400">
              <Link to="/spa-review-generator" className="hover:text-white transition">spa-review gen</Link>
              <Link to="/finance-review-generator" className="hover:text-white transition">finance-review gen</Link>
              {/* <a href="/projects" className="hover:text-white transition">Projects</a>
              <a href="/contact" className="hover:text-white transition">Contact</a> */}
            </div>
          </div>

          {/* Social Media */}
          <div className="flex space-x-4">
            <a href="https://www.facebook.com/people/AlgoTwist/61579430124404/" target="_blank" rel="noreferrer" className="hover:text-blue-500 transition">
              <FaFacebookF />
            </a>
            <a href="https://www.facebook.com/people/AlgoTwist/61579430124404/" target="_blank" rel="noreferrer" className="hover:text-sky-400 transition">
              <FaTwitter />
            </a>
            <a href="https://www.instagram.com/accounts/login/?next=%2Falgotwist_%2F&source=omni_redirect" target="_blank" rel="noreferrer" className="hover:text-pink-500 transition">
              <FaInstagram />
            </a>
            <a href="https://www.linkedin.com/in/algotwist-software-and-digital-solutions-45ba35376/?originalSubdomain=in" target="_blank" rel="noreferrer" className="hover:text-blue-400 transition">
              <FaLinkedinIn />
            </a>
          </div>

          {/* Back to top */}
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
