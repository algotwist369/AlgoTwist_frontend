import React, { useEffect, useState } from "react";
import {
  websiteTypes,
  servicePricing,
  mergedWebsitePackages,
} from "../../data/pricingData";
import ServicePopup from "./common/ServicePopup";
import BannerImage from "./common/BannerImage";

const TableRow = ({ pkg }) => (
  <tr className="hover:bg-gray-100 border-b">
    <td className="p-2 md:p-3 text-xs md:text-sm font-semibold text-gray-900 whitespace-nowrap">
      {pkg.type}
    </td>
    <td className="p-2 md:p-3 text-xs md:text-sm text-gray-700">{pkg.price}</td>
    <td className="p-2 md:p-3 text-xs md:text-sm text-gray-700">{pkg.features}</td>
    <td className="p-2 md:p-3 text-xs md:text-sm text-gray-700">{pkg.idealFor}</td>
    <td className="p-2 md:p-3 text-xs md:text-sm text-gray-700">
      {pkg.bonusServices.join(", ")}
    </td>
  </tr>
);

const WebDevelopment = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 15000); // 15 seconds
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="bg-gray-50">
      {/* Popup Modal */}
      <ServicePopup show={showPopup} onClose={() => setShowPopup(false)} />
      {/* Banner with overlay and text */}
      <BannerImage />

      {/* Content Section */}
      <div className="py-10 md:py-16 px-2 md:px-4">
        <div className="max-w-7xl mx-auto">
          {/* Website Pricing Packages - Improved Section */}
          <div className="overflow-x-auto p-2 md:p-4">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-center text-purple-700">
              Affordable Website Packages - Get All-in-One Value
            </h2>
            <div className="w-full min-w-[600px] md:min-w-0">
              <table className="min-w-full bg-white border rounded-lg shadow-md text-xs md:text-sm">
                <thead className="bg-purple-100 text-purple-700">
                  <tr>
                    <th className="p-2 md:p-3 text-left text-xs md:text-sm font-semibold">
                      Package Type
                    </th>
                    <th className="p-2 md:p-3 text-left text-xs md:text-sm font-semibold">
                      Price Range
                    </th>
                    <th className="p-2 md:p-3 text-left text-xs md:text-sm font-semibold">
                      Features
                    </th>
                    <th className="p-2 md:p-3 text-left text-xs md:text-sm font-semibold">
                      Ideal For
                    </th>
                    <th className="p-2 md:p-3 text-left text-xs md:text-sm font-semibold">
                      Bonus Services Included
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
            <p className="mt-3 md:mt-4 text-xs md:text-sm font-semibold text-yellow-800 bg-yellow-100 border border-yellow-300 rounded-md px-2 md:px-4 py-2 text-center">
              * All packages include 1 year free maintenance, free SSL, hosting setup, and free website audit.
            </p>
          </div>

          {/* Service-wise Pricing Breakdown */}
          <div className="mb-6 md:mb-10 text-center">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-1 md:mb-2 text-purple-700">
              Service-wise Pricing Breakdown
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto text-xs md:text-base">
              Detailed breakdown of our web development services. Get exactly what you need, nothing you don't.
            </p>
          </div>
          <div className="overflow-x-auto mb-6 md:mb-8">
            <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden min-w-[500px] md:min-w-0">
              <table className="min-w-full text-xs md:text-sm">
                <thead className="bg-purple-100 text-left text-xs md:text-sm font-semibold">
                  <tr>
                    <th className="p-2 md:p-4 border-b text-gray-900">Service</th>
                    <th className="p-2 md:p-4 border-b text-gray-900">Price Range (INR ₹)</th>
                    <th className="p-2 md:p-4 border-b text-gray-900">Applicable To</th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  {servicePricing.map((item, index) => (
                    <tr key={index} className="hover:bg-purple-50 transition">
                      <td className="p-2 md:p-4 border-b font-medium text-gray-900">
                        {item.service}
                      </td>
                      <td className="p-2 md:p-4 border-b text-green-700 font-semibold">
                        {item.price}
                      </td>
                      <td className="p-2 md:p-4 border-b text-gray-600">
                        {item.includedIn.join(", ")}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-8 md:mt-12 flex flex-col items-center justify-center px-2 md:px-0">
            <h3 className="text-lg md:text-xl lg:text-2xl font-semibold text-gray-900 mb-1 md:mb-2 text-center">
              Ready to build your dream website?
            </h3>
            <p className="text-gray-600 mb-3 md:mb-4 text-center text-xs md:text-base">
              Contact us today for a free consultation and personalized quote.
            </p>
            <a
              href="#contact"
              className="inline-block bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 md:py-3 px-6 md:px-8 rounded-full shadow-lg transition text-xs md:text-base"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WebDevelopment;
