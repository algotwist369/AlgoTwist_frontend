import React, { useEffect } from "react";
import WhatsAppButton from "../common/WhatsAppButton";

const smmPlans = [
  {
    type: "Starter",
    price: "₹4000/month",
    features: [
      "2 Platforms (FB & Instagram)",
      "12 Posts / Month",
      "Basic Hashtag Research",
      "Monthly Analytics Report",
      "Basic Ad Campaign Support",
    ],
    idealFor: "Small businesses & local brands",
  },
  {
    type: "Professional",
    price: "₹9000/month",
    features: [
      "4 Platforms (FB, Insta, LinkedIn, Twitter)",
      "20 Posts + 5 Reels / Month",
      "Targeted Hashtag Strategy",
      "Advanced Ad Campaigns (₹2000 Ad Credit)",
      "Weekly Performance Reports",
    ],
    idealFor: "Growing startups & influencers",
  },
  {
    type: "Enterprise",
    price: "₹18000/month",
    features: [
      "All Platforms + YouTube Shorts",
      "Unlimited Creative Content",
      "Full-Fledged Paid Ad Strategy (₹5000 Ad Credit)",
      "Dedicated Manager",
      "Daily Reports + Competitor Analysis",
    ],
    idealFor: "Brands & Enterprises",
  },
];

const SocialMediaMarketing = () => {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  return (
    <div className="bg-[#0f0f0f] text-white min-h-screen py-40 px-4 sm:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-blue-400 mb-4">
          Social Media Marketing Plans
        </h1>
        <p className="text-lg text-gray-300 text-center max-w-3xl mx-auto mb-10">
          Boost your brand visibility and engagement with our custom social
          media marketing solutions tailored for every stage of your business
          growth.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {smmPlans.map((plan, idx) => (
            <div
              key={idx}
              className="bg-gradient-to-br from-[#1a1a1a] to-[#222] border border-blue-400 shadow-lg rounded-2xl p-6 hover:shadow-blue-500/20 transition"
            >
              <h3 className="text-xl font-semibold text-blue-300 mb-2">
                {plan.type}
              </h3>
              <p className="text-green-400 font-bold text-lg mb-3">
                {plan.price}
              </p>
              <ul className="list-disc list-inside text-sm text-gray-300 mb-4 space-y-1">
                {plan.features.map((feature, i) => (
                  <li key={i}>✅ {feature}</li>
                ))}
              </ul>
              <p className="text-sm italic text-textPrimary">
                Ideal for: <span className="text-white">{plan.idealFor}</span>
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-[#1a1a1a] border border-blue-500 rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold text-blue-300 mb-2">
            Why Choose Us?
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto mb-6">
            We don’t just post content — we build communities. Our team crafts
            engaging visuals, runs ad campaigns, analyzes your performance, and
            keeps your audience growing consistently.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-sm text-left">
            <div>📈 Guaranteed Growth</div>
            <div>🎨 Creative Visuals & Captions</div>
            <div>📊 Advanced Analytics & Reporting</div>
            <div>👨‍💼 Dedicated Social Media Manager</div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-xl font-semibold mb-2 text-blue-200">
            Let us build your social media empire!
          </h3>
          <WhatsAppButton phone="9769769273" text={"Book a Free Design Consultation"} />
        </div>
      </div>
    </div>
  );
};

export default SocialMediaMarketing;
