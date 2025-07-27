import React, { useEffect, useState } from "react";
import {
  websiteTypes,
  servicePricing,
  mergedWebsitePackages,
} from "../../data/pricingData";
import ServicePopup from "./common/ServicePopup";
// import BannerImage from "./common/BannerImage";
import WhatsAppButton from "../common/WhatsAppButton";

const TableRow = ({ pkg }) => (
  <tr className="hover:bg-gray-800 border-b border-gray-700">
    <td className="p-2 md:p-3 text-xs md:text-sm font-semibold text-white whitespace-nowrap">
      {pkg.type}
    </td>
    <td className="p-2 md:p-3 text-xs md:text-sm text-gray-300">{pkg.price}</td>
    <td className="p-2 md:p-3 text-xs md:text-sm text-gray-300">
      {pkg.features}
    </td>
    <td className="p-2 md:p-3 text-xs md:text-sm text-gray-300">
      {pkg.idealFor}
    </td>
    <td className="p-2 md:p-3 text-xs md:text-sm text-gray-300">
      {pkg.bonusServices.join(", ")}
    </td>
  </tr>
);

const WebDevelopment = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 15000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="bg-[#0e0e0e] text-white pt-20">
      {/* Popup */}
      <ServicePopup show={showPopup} onClose={() => setShowPopup(false)} />
      {/* <BannerImage /> */}

      <div className="py-10 md:py-16 px-2 md:px-4">
        <div className="max-w-7xl mx-auto">
          {/* Website Packages Table */}
          <div className="overflow-x-auto p-2 md:p-4">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-center text-textPrimary">
              Affordable Website Packages - Get All-in-One Value
            </h2>

            <div className="w-full min-w-[600px] md:min-w-0">
              <table className="min-w-full bg-[#1a1a1a] border border-gray-700 rounded-lg shadow-lg text-xs md:text-sm">
                <thead className="bg-blue-900 text-textPrimary">
                  <tr>
                    <th className="p-2 md:p-3 text-left font-semibold">
                      Package Type
                    </th>
                    <th className="p-2 md:p-3 text-left font-semibold">
                      Price Range
                    </th>
                    <th className="p-2 md:p-3 text-left font-semibold">
                      Features
                    </th>
                    <th className="p-2 md:p-3 text-left font-semibold">
                      Ideal For
                    </th>
                    <th className="p-2 md:p-3 text-left font-semibold">
                      Bonus Services
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {mergedWebsitePackages.map((pkg, idx) => (
                    <TableRow key={idx} pkg={pkg} />
                  ))}
                </tbody>
              </table>
            </div>

            <p className="mt-3 md:mt-4 text-xs md:text-sm font-semibold text-yellow-300 bg-yellow-900/20 border border-yellow-600 rounded-md px-4 py-2 text-center">
              * All packages include 1 year free maintenance, free SSL, hosting
              setup, and free website audit.
            </p>
          </div>

          {/* Service Breakdown Table */}
          <div className="mb-6 md:mb-10 text-center">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2 text-textPrimary">
              Service-wise Pricing Breakdown
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto text-xs md:text-base">
              Detailed breakdown of our web development services. Get exactly
              what you need, nothing you don’t.
            </p>
          </div>

          <div className="overflow-x-auto mb-8">
            <div className="bg-[#1a1a1a] rounded-xl shadow-lg border border-gray-700 overflow-hidden min-w-[500px] md:min-w-0">
              <table className="min-w-full text-xs md:text-sm">
                <thead className="bg-blue-900 text-left font-semibold text-textPrimary">
                  <tr>
                    <th className="p-2 md:p-4 border-b border-gray-600">
                      Service
                    </th>
                    <th className="p-2 md:p-4 border-b border-gray-600">
                      Price Range (INR ₹)
                    </th>
                    <th className="p-2 md:p-4 border-b border-gray-600">
                      Applicable To
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-[#1a1a1a]">
                  {servicePricing.map((item, index) => (
                    <tr key={index} className="hover:bg-gray-800 transition">
                      <td className="p-2 md:p-4 border-b border-gray-700 font-medium text-white">
                        {item.service}
                      </td>
                      <td className="p-2 md:p-4 border-b border-gray-700 text-green-400 font-semibold">
                        {item.price}
                      </td>
                      <td className="p-2 md:p-4 border-b border-gray-700 text-gray-400">
                        {item.includedIn.join(", ")}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-8 md:mt-12 flex flex-col items-center justify-center px-2 md:px-0 text-center">
            <h3 className="text-lg md:text-xl lg:text-2xl font-semibold text-white mb-2">
              Ready to build your dream website?
            </h3>
            <p className="text-gray-400 mb-4 text-xs md:text-base">
              Contact us today for a free consultation and personalized quote.
            </p>
            <WhatsAppButton text={"Book a Free Design Consultation"} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WebDevelopment;
