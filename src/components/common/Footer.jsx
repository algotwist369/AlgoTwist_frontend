import React from "react";
import { Code } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#1F1F1F] text-white py-12">
      <div className="w-11/12 max-w-7xl mx-auto px-4 sm:px-6">
        {/* Logo + Description */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <Code className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold">AlgoTwist</span>
          </div>
          <p className="text-center md:text-left text-gray-400 max-w-xl text-sm">
            We build scalable, secure, and high-performance digital solutions to
            elevate your business.
          </p>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500">
            &copy; 2025 AlgoTwist. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0 text-sm text-gray-400">
            {["Privacy", "Terms", "Security"].map((link, index) => (
              <a
                key={index}
                href="#"
                className="hover:text-white transition-colors"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
