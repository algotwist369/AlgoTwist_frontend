import React from "react";

const digitalPRData = [
  {
    plan: "Basic Coverage",
    price: "₹25,000",
    platforms: "Local news portals, startup blogs",
    deliverables: "1 press release, 2-3 placements, social mentions",
    idealFor: "New startups, product launches"
  },
  {
    plan: "Brand Builder",
    price: "₹60,000",
    platforms: "Top-tier media: YourStory, Business Standard",
    deliverables: "3–5 articles, backlinking, PR copywriting",
    idealFor: "Growing brands, seeking credibility"
  },
  {
    plan: "Influence Booster",
    price: "₹1,50,000+",
    platforms: "Forbes, Entrepreneur, Times Group",
    deliverables: "7+ placements, influencer shoutouts, full PR campaign",
    idealFor: "National branding, funding announcements"
  }
];

const DigitalPR = () => {
  return (
    <section className="bg-white text-gray-800 py-40 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-10 text-red-700">
          📢 Digital PR Packages
        </h1>

        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-300 text-sm shadow-lg">
            <thead className="bg-red-100 text-gray-900">
              <tr>
                <th className="p-4 border text-left">Plan</th>
                <th className="p-4 border text-left">Price</th>
                <th className="p-4 border text-left">Media Coverage</th>
                <th className="p-4 border text-left">Deliverables</th>
                <th className="p-4 border text-left">Ideal For</th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {digitalPRData.map((item, idx) => (
                <tr key={idx} className="hover:bg-gray-50">
                  <td className="p-4 border font-semibold text-red-700">{item.plan}</td>
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
            Get featured in India’s most trusted media houses and create an impact that builds brand trust.
            Let's position your brand where it matters the most.
          </p>
          <button className="mt-6 px-6 py-3 bg-red-600 text-white rounded-xl shadow hover:bg-red-700 transition">
            Request Custom PR Strategy
          </button>
        </div>
      </div>
    </section>
  );
};

export default DigitalPR;
