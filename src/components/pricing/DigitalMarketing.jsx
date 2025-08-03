import React, { useEffect } from "react";
import WhatsAppButton from "../common/WhatsAppButton";

const digitalMarketingPlans = [
  {
    type: "Paid Advertisement (All Platforms)",
    price: "Starting at ₹8000",
    features: [
      "Campaign Strategy & Planning",
      "Creative Designing (Image/Video)",
      "Multi-Platform Ads: Google, Meta, LinkedIn",
      "Reporting & ROI Optimization",
    ],
    idealFor: "Businesses scaling with ads",
  },
  {
    type: "SEO (Search Engine Optimization)",
    price: "Starting at ₹4000",
    features: [
      "Keyword Research",
      "On-page Optimization",
      "Backlink Building",
      "Monthly SEO Reports",
    ],
    idealFor: "Websites looking to rank higher on Google",
  },
  {
    type: "SMM (Social Media Marketing)",
    price: "Starting at ₹5000",
    features: [
      "Facebook & Instagram Ads",
      "Engagement Campaigns",
      "Post Scheduling & Design",
      "Analytics & Optimization",
    ],
    idealFor: "Brands aiming for social presence",
  },
  {
    type: "Content Marketing",
    price: "Starting at ₹4500",
    features: [
      "Blog Strategy & Writing",
      "Visual Content Creation",
      "Infographics & eBooks",
      "Content Distribution",
    ],
    idealFor: "Business building brand authority",
  },
  {
    type: "Email Marketing",
    price: "Starting at ₹3000",
    features: [
      "Newsletter Campaigns",
      "Email Automation",
      "Lead Nurturing",
      "A/B Testing",
    ],
    idealFor: "Businesses nurturing leads or customers",
  },
];

const DigitalMarketingPricing = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="bg-[#0c0c0c] text-white min-h-screen pt-32 px-4 sm:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 text-textPrimary">
          Digital Marketing Services
        </h1>
        <p className="text-lg text-gray-300 text-center max-w-3xl mx-auto mb-12">
          We offer powerful marketing solutions tailored to boost your digital
          presence, drive traffic, and generate high-quality leads.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {digitalMarketingPlans.map((plan, idx) => (
            <div
              key={idx}
              className="bg-backgroundSecondary border border-borderColor shadow-md rounded-2xl p-6 shadow-highlightText transition"
            >
              <h3 className="text-xl font-semibold text-textPrimary mb-2">
                {plan.type}
              </h3>
              {/* <p className="text-green-400 font-bold text-lg mb-3">
                {plan.price}
              </p> */}
              <ul className="list-disc list-inside text-sm text-textPrimary mb-4 space-y-1 marker:text-highlightText">
                {plan.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>

              <p className="text-sm italic text-textSecondary">
                Ideal for: <span>{plan.idealFor}</span>
              </p>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-backgroundSecondary border border-borderColor rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold text-textPrimary mb-2">
            Why Choose Our Marketing Team?
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto mb-6">
            From data-driven strategy to ad creatives, our approach is crafted
            to deliver results, grow your brand, and optimize for every rupee
            you invest.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-sm text-left text-white">
            <div>✅ Campaigns that Convert</div>
            <div>✅ Creative Ads with Strategy</div>
            <div>✅ Budget-Optimized ROI</div>
            <div>✅ Ongoing Analysis & Reports</div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <WhatsAppButton active={0} text={"Let's build your brand together"} />
        </div>
      </div>
    </div>
  );
};

export default DigitalMarketingPricing;
