import React from "react";
import { motion } from "framer-motion";
import {
  FaSearch,
  FaLightbulb,
  FaPalette,
  FaCogs,
  FaRocket,
  FaChartLine,
  FaVial,
  FaCloudUploadAlt,
  FaHeadset,
} from "react-icons/fa";

const steps = [
  {
    icon: <FaSearch />,
    title: "Client Discovery & Requirement Gathering",
    description:
      "Understand your business, goals, and technical/marketing needs. Define KPIs and gather all requirements.",
  },
  {
    icon: <FaLightbulb />,
    title: "Strategic Planning",
    description:
      "Craft tailored strategies for development & marketing. Assign roles, tools, and finalize timelines.",
  },
  {
    icon: <FaPalette />,
    title: "Creative Ideation",
    description:
      "Design wireframes, campaign ideas, keywords, and branding concepts. Tech team plans system architecture.",
  },
  {
    icon: <FaCogs />,
    title: "Design & Development",
    description:
      "Build UI/UX, develop backend/frontend features, perform on-page SEO. QA and iteration cycles run here.",
  },
  {
    icon: <FaChartLine />,
    title: "Digital Marketing & Optimization",
    description:
      "Launch campaigns, monitor KPIs, refine strategy. Weekly reports and data-driven optimization.",
  },
  {
    icon: <FaVial />,
    title: "Testing & Quality Assurance",
    description:
      "Ensure cross-device compatibility, performance, SEO readiness, and security checks.",
  },
  {
    icon: <FaCloudUploadAlt />,
    title: "Launch & Delivery",
    description:
      "Deploy final product, integrate tools, deliver documentation, and monitor for initial feedback.",
  },
  {
    icon: <FaHeadset />,
    title: "Support & Growth",
    description:
      "Offer support, implement growth strategies, continuous monitoring, and scaling opportunities.",
  },
];

const WorkflowSteps = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 text-white w-full overflow-x-auto">
      <div className="text-center mb-16 px-4">
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 drop-shadow-lg">
          Team Workflow
        </h2>
        <p className="text-white/70 max-w-2xl mx-auto">
          Our proven step-by-step process ensures transparency, strategy, and
          success from planning to delivery.
        </p>
      </div>

      <div className="relative w-full min-w-[1200px] flex flex-col items-center px-8">
        {/* Dotted Horizontal Timeline Line */}
        <div className="absolute top-1/2 transform -translate-y-1/2 w-full h-0 z-0">
          <div className="border-t-2 border-dotted border-white/30 w-full"></div>
        </div>

        {/* Step Cards */}
        <div className="relative z-10 flex flex-row flex-wrap justify-center items-center gap-x-6">
          {steps.map((step, index) => {
            const isTop = index % 2 === 0;

            return (
              <div
                key={index}
                className="relative flex flex-col items-center w-[160px] md:w-[200px] mx-2"
              >
                {/* Card above or below */}
                <div
                  className={`absolute left-1/2 -translate-x-1/2 ${
                    isTop ? "-top-[13rem]" : "-bottom-[13rem]"
                  } flex flex-col items-center`}
                  style={{ zIndex: 2 }}
                >
                  {/* Vertical connector */}
                  <div
                    className={`w-1 h-8 border-l-2 border-dotted border-white/60 mb-2 ${
                      isTop ? "" : "rotate-180"
                    }`}
                  ></div>

                  {/* Step Card */}
                  <motion.div
                    initial={{ opacity: 0, y: isTop ? -40 : 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      type: "spring",
                      stiffness: 60,
                      damping: 15,
                      delay: index * 0.1,
                    }}
                    className="bg-white text-blue-900 rounded-2xl shadow-lg p-4 w-[180px] md:w-[220px] border border-transparent hover:border-purple-400 hover:shadow-purple-300 hover:scale-[1.03] transition-all duration-300 text-center"
                  >
                    <div className="text-2xl text-purple-600 mb-2">
                      {step.icon}
                    </div>
                    <h4 className="font-semibold text-sm md:text-base mb-1">
                      {step.title}
                    </h4>
                    <p className="text-xs text-gray-700">{step.description}</p>
                  </motion.div>
                </div>

                {/* Timeline Dot Number */}
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-br from-purple-500 to-blue-600 text-white text-sm font-bold shadow-lg border-2 border-white z-20">
                  {index + 1}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WorkflowSteps;
