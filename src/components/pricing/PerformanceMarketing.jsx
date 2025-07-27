import React from "react";

const performanceMarketingData = [
    {
        plan: "Starter Plan",
        price: "₹15,000 / month",
        platforms: "Facebook Ads, Instagram Boosting",
        deliverables: "1 Campaign, 2 Ad Sets, 5 Creatives, Basic Targeting, Weekly Report",
        idealFor: "Small local businesses, new product promotions"
    },
    {
        plan: "Growth Plan",
        price: "₹35,000 / month",
        platforms: "Meta Ads, Google Ads",
        deliverables: "3 Campaigns, A/B testing, Conversion Tracking, Pixel Setup, Bi-weekly Optimization",
        idealFor: "D2C brands, mid-scale startups, eCommerce"
    },
    {
        plan: "Pro Plan",
        price: "₹75,000+ / month",
        platforms: "Meta, Google, LinkedIn, YouTube",
        deliverables: "5+ Campaigns, Full Funnel Ads, Custom Landing Pages, Heatmaps, Dedicated Manager",
        idealFor: "Established brands, performance-driven agencies"
    }
];

const PerformanceMarketing = () => {
    return (
        <section className="bg-white text-gray-800 py-40 px-4">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-4xl font-bold text-center mb-10 text-purple-700">
                    🚀 Performance Marketing Plans
                </h1>

                <div className="overflow-x-auto">
                    <table className="min-w-full border border-gray-300 text-sm shadow-lg">
                        <thead className="bg-purple-100 text-gray-900">
                            <tr>
                                <th className="p-4 border text-left">Plan</th>
                                <th className="p-4 border text-left">Price</th>
                                <th className="p-4 border text-left">Platforms Covered</th>
                                <th className="p-4 border text-left">Deliverables</th>
                                <th className="p-4 border text-left">Ideal For</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white">
                            {performanceMarketingData.map((item, idx) => (
                                <tr key={idx} className="hover:bg-gray-50">
                                    <td className="p-4 border font-semibold text-purple-700">{item.plan}</td>
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
                        We don't just run ads — we drive measurable ROI through intelligent audience targeting,
                        creative testing, and conversion optimization. Book a free strategy call today.
                    </p>
                    <button className="mt-6 px-6 py-3 bg-purple-600 text-white rounded-xl shadow hover:bg-purple-700 transition">
                        Book Free Strategy Call
                    </button>
                </div>
            </div>
        </section>
    );
};

export default PerformanceMarketing;
