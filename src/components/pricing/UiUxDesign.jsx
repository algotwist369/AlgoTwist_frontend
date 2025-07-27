import React, { useEffect } from "react";
import WhatsAppButton from "../common/WhatsAppButton";

const uiuxPlans = [
  {
    type: "Starter UI Pack",
    price: "Starting at ₹4,000",
    features: [
      "2-3 App/Web Screens",
      "Wireframing & Moodboard",
      "Color Palette & Typography",
      "Responsive Layout",
    ],
    idealFor: "Basic MVPs & Landing Pages",
  },
  {
    type: "Professional UX Suite",
    price: "Starting at ₹10,000",
    features: [
      "10-15 Screens UI/UX",
      "Interactive Prototypes (Figma)",
      "User Flow & Journey Mapping",
      "Design System & Components",
      "UX Audit + Suggestions",
    ],
    idealFor: "Startups & Growing Products",
  },
  {
    type: "Enterprise Design System",
    price: "Starting at ₹20,000",
    features: [
      "30+ Screens / Module-based Design",
      "Full Design System Setup",
      "Component Library (Figma/Adobe XD)",
      "Developer Handoff Files",
      "Brand Consistency & Accessibility",
    ],
    idealFor: "Large Applications & SaaS Products",
  },
];

const UiUxDesign = () => {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  return (
    <div className="bg-[#0e0e0e] min-h-screen py-36 px-4 sm:px-10 lg:px-20 text-white">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 text-white">
          UI/UX Design Services
        </h1>
        <p className="text-lg text-gray-300 text-center max-w-3xl mx-auto mb-10">
          We create stunning user interfaces and seamless user experiences with
          a focus on usability, aesthetics, and functionality.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {uiuxPlans.map((plan, idx) => (
            <div
              key={idx}
              className="bg-gradient-to-br from-[#1a1a1a] to-[#111] border border-[#2c2c2c] shadow-lg rounded-2xl p-6 hover:shadow-xl transition"
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

        <div className="mt-16 bg-[#1a1a1a] border border-[#2c2c2c] rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-2">
            Why Our UI/UX Design Stands Out?
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto mb-6">
            We blend creativity with strategy to design intuitive, elegant, and
            accessible user interfaces that users love.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-sm text-left">
            <div>✅ Figma, Adobe XD, and Sketch Expertise</div>
            <div>✅ Mobile-First & Responsive Design</div>
            <div>✅ Design Systems & Component Libraries</div>
            <div>✅ UX Research & Testing</div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-xl font-semibold mb-2">
            Want to turn your idea into a stunning design?
          </h3>
          <WhatsAppButton text={"Book a Free Design Consultation"} />
        </div>
      </div>
    </div>
  );
};

export default UiUxDesign;
