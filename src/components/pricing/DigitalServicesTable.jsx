import React, { useEffect } from "react";
import { digitalServices } from "../../data/pricingData";

const DigitalServicesTable = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section className="py-10 bg-white px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
          Digital & Marketing Services
        </h2>

        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-300 text-sm">
            <thead className="bg-purple-100 text-gray-900">
              <tr>
                <th className="border p-3 text-left">Service</th>
                <th className="border p-3 text-left">Price Range (INR ₹)</th>
                <th className="border p-3 text-left">Details</th>
                <th className="border p-3 text-left">Ideal For</th>
              </tr>
            </thead>
            <tbody className="bg-white text-textPrimary">
              {digitalServices.map((item, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="border p-3 font-medium">{item.service}</td>
                  <td className="border p-3 text-green-700">{item.price}</td>
                  <td className="border p-3">{item.details}</td>
                  <td className="border p-3">{item.idealFor}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default DigitalServicesTable;
