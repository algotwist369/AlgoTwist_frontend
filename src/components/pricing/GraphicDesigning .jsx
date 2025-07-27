import React, { useEffect } from "react";
import WhatsAppButton from "../common/WhatsAppButton";
const graphicPlans = [
  {
    type: "Starter Pack",
    price: "Starting at ₹4,000",
    features: [
      "Logo Design (1 Concept)",
      "Business Card",
      "Basic Social Media Kit",
      "2 Revisions",
    ],
    idealFor: "Startups and Freelancers",
  },
  {
    type: "Professional Pack",
    price: "Starting at ₹8,000",
    features: [
      "Logo (3 Concepts)",
      "Business Card & Letterhead",
      "Social Media Kit",
      "Brochure / Flyer Design",
      "5 Revisions",
    ],
    idealFor: "Growing Businesses",
  },
  {
    type: "Premium Branding",
    price: "Starting at ₹15,000",
    features: [
      "Complete Branding Kit",
      "Multiple Logo Concepts",
      "Packaging Design",
      "Stationery + Social Media Kit",
      "Unlimited Revisions",
    ],
    idealFor: "Enterprises and Brands",
  },
];

const GraphicDesigning = () => {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  return (
    <div className="bg-[#0f0f0f] min-h-screen py-32 px-4 sm:px-10 lg:px-20 text-white">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Graphic Designing Services
        </h1>
        <p className="text-lg text-gray-300 text-center max-w-3xl mx-auto mb-12">
          Elevate your brand identity with our modern, creative, and impactful
          graphic design services tailored for your business needs.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {graphicPlans.map((plan, idx) => (
            <div
              key={idx}
              className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-2xl p-6 shadow-md hover:shadow-blue-500/30 transition duration-300"
            >
              <h3 className="text-xl font-semibold text-blue-400 mb-2">
                {plan.type}
              </h3>
              <p className="text-green-400 font-bold text-lg mb-3">
                {plan.price}
              </p>
              <ul className="list-disc list-inside text-sm text-gray-300 mb-4 space-y-1">
                {plan.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
              <p className="text-sm italic text-gray-400">
                Ideal for: <span className="text-white">{plan.idealFor}</span>
              </p>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-[#1a1a1a] border border-[#333] rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-3 text-blue-400">
            Why Choose Us?
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto mb-6">
            Our graphic designs don’t just look good — they tell a story. We
            design with purpose, focus on branding, and make sure your visuals
            capture attention across digital and print platforms.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-sm text-left text-gray-300">
            <div>🎨 Unique & Creative Designs</div>
            <div>⚡ Fast Turnaround</div>
            <div>🔁 Unlimited Revisions*</div>
            <div>✅ Brand Consistency Guaranteed</div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-xl font-semibold mb-2">
            Want to build a powerful visual identity?
          </h3>
          <WhatsAppButton text={"Book a Free Design Consultation"} />
        </div>
      </div>
    </div>
  );
};

export default GraphicDesigning;
