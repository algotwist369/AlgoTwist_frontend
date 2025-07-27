import React, { useEffect, useRef } from "react";
import { FaRegHandshake, FaCheckCircle } from "react-icons/fa";
import { BsFillLightningChargeFill } from "react-icons/bs";
import { GiProgression } from "react-icons/gi";
import "./WorkflowAnimation.css";
import MouseGlowCard from "../common/MouseGlowCard";

const workflowItems = [
  {
    icon: <FaRegHandshake className="text-4xl text-textPrimary mb-4 mx-auto" />,
    title: "Client Onboarding",
    description:
      "We begin by understanding your business, goals, and challenges. This helps us craft tailored digital solutions that align perfectly with your vision.",
  },
  {
    icon: (
      <BsFillLightningChargeFill className="text-4xl text-accent mb-4 mx-auto" />
    ),
    title: "Strategy & Execution",
    description:
      "From creative design to clean coding, we follow a clear roadmap. You get regular updates, so you're always in control and informed.",
  },
  {
    icon: <GiProgression className="text-4xl text-textPrimary mb-4 mx-auto" />,
    title: "Launch & Support",
    description:
      "Once launched, we continue to monitor and optimize. Our team stays available for ongoing support, updates, and scaling when needed.",
  },
];

const WorkflowPage = () => {
  const bgRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      const moveX = (clientX - centerX) * 0.02;
      const moveY = (clientY - centerY) * 0.02;

      if (bgRef.current) {
        bgRef.current.style.transform = `translate(${moveX}px, ${moveY}px)`;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="py-20 relative overflow-hidden bg-[#0e0e10] text-white">
      {/* Background shapes that follow the mouse */}
      <div
        ref={bgRef}
        className="absolute inset-0 z-0 pointer-events-none transition-transform duration-100"
      >
        {[...Array(25)].map((_, i) => {
          const size = 8 + Math.random() * 32;
          const delay = Math.random() * 15;
          const duration = 10 + Math.random() * 20;
          const left = Math.random() * 100;
          const top = Math.random() * 100;
          const isCircle = i % 2 === 0;

          return (
            <div
              key={i}
              className={`shape-${isCircle ? "circle" : "square"}`}
              style={{
                width: `${size}px`,
                height: `${size}px`,
                left: `${left}%`,
                top: `${top}%`,
                animationDelay: `${delay}s`,
                animationDuration: `${duration}s`,
                backgroundColor: isCircle ? "#ff4d4f" : "#40a9ff",
              }}
            />
          );
        })}
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-6 leading-tight">
          Our Simple 3-Step Workflow
        </h2>

        <div className="flex items-center justify-center mb-16 gap-3 text-green-400 text-lg md:text-xl font-semibold">
          <FaCheckCircle className="text-3xl" />
          <span>
            Success Guarantee - We're confident in delivering measurable
            results!
          </span>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {workflowItems.map((item, index) => (
            <MouseGlowCard
              key={index}
              className="bg-[#1a1a1d] border border-gray-700 rounded-2xl p-8 text-center hover:bg-[#202024] transition-all duration-300 shadow-md"
            >
              {item.icon}
              <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
              <p className="text-textPrimary text-sm">{item.description}</p>
            </MouseGlowCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkflowPage;
