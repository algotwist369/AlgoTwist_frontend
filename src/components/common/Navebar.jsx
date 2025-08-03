import React, { useState, useEffect, useRef } from "react";
import {
  Menu,
  X,
} from "lucide-react";
import { Link } from "react-router-dom";
import WhatsAppButton from "./WhatsAppButton";
import MilestoneBanner from "./MilestoneBanner";

const Navebar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const [pricingDropdown, setPricingDropdown] = useState(false);
  const servicesDropdownRef = useRef(null);
  const pricingDropdownRef = useRef(null);
 
  const url1 =
    "https://res.cloudinary.com/djdrpfhdz/image/upload/v1753774027/ALGO_TWIST_fiprfh.png";

  const menuItems = [];
 
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        servicesDropdown &&
        servicesDropdownRef.current &&
        !servicesDropdownRef.current.contains(event.target)
      ) {
        setServicesDropdown(false);
      }
      if (
        pricingDropdown &&
        pricingDropdownRef.current &&
        !pricingDropdownRef.current.contains(event.target)
      ) {
        setPricingDropdown(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [servicesDropdown, pricingDropdown]);

  return (
    <>
      <nav className="w-full z-50 bg-backgroundPrimary">
        {/* <MilestoneBanner /> */}
        <div className="max-w-[90rem] w-full mx-auto px-4 sm:px-6 py-3 sm:py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-3">
              <img
                src={url1}
                alt="Logo"
                className="h-12 sm:h-16 w-auto object-contain"
              />
            </Link>

            <div className="hidden md:flex items-center space-x-8">
              {menuItems.map((item) => null)}
              <WhatsAppButton active={false} text={"Free Consultation"} />
            </div>

            <div className="md:hidden flex items-center space-x-2">
              <button
                className="p-2"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? (
                  <X className="w-6 h-6 text-white" />
                ) : (
                  <Menu className="w-6 h-6 text-white" />
                )}
              </button>
            </div>
          </div>

          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-border bg-backgroundPrimary">
              <div className="flex flex-col space-y-2 mt-4">
                <WhatsAppButton active={false} text={"Free Consultation"} />
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navebar;
