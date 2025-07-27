import React from "react";

const leadGenData = [
  {
    plan: "Starter Leads",
    price: "₹8,000 / campaign",
    platforms: "Meta Lead Ads",
    deliverables: "1 campaign, landing page, basic targeting, CRM export",
    idealFor: "Tutors, consultants, real estate agents"
  },
  {
    plan: "Growth Leads",
    price: "₹20,000 / campaign",
    platforms: "Meta + Google Lead Form",
    deliverables: "High-intent keywords, tracking setup, funnel page",
    idealFor: "Agencies, coaches, clinics"
  },
  {
    plan: "Conversion Pro",
    price: "₹40,000+ / campaign",
    platforms: "Meta + Google + LinkedIn",
    deliverables: "Multi-stage funnel, analytics dashboard, A/B tests",
    idealFor: "B2B SaaS, large-scale lead operations"
  }
];

const LeadGeneration = () => {
  return (
    <section className="bg-white text-gray-800 py-40 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-10 text-green-700">
          Lead Generation Packages
        </h1>

        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-300 text-sm shadow-lg">
            <thead className="bg-green-100 text-gray-900">
              <tr>
                <th className="p-4 border text-left">Plan</th>
                <th className="p-4 border text-left">Price</th>
                <th className="p-4 border text-left">Platforms</th>
                <th className="p-4 border text-left">Deliverables</th>
                <th className="p-4 border text-left">Ideal For</th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {leadGenData.map((item, idx) => (
                <tr key={idx} className="hover:bg-gray-50">
                  <td className="p-4 border font-semibold text-green-700">{item.plan}</td>
                  <td className="p-4 border text-green-700">{item.price}</td>
                  <td className="p-4 border">{item.platforms}</td>
                  <td className="p-4 border">{item.deliverables}</td>
                  <td className="p-4 border text-gray-600">{item.idealFor}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-10 text-center">
          <p className="text-lg text-textPrimary max-w-3xl mx-auto">
            Our lead generation campaigns are focused on real-time conversions, CRM-ready leads, and maximum ROI.
            Launch your lead engine with us today.
          </p>
          <button className="mt-6 px-6 py-3 bg-green-600 text-white rounded-xl shadow hover:bg-green-700 transition">
            Launch Campaign Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default LeadGeneration;
