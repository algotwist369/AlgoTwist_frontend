import React from "react";
import Heading from "../../common/Heading";
import {
  FaLaptopCode,
  FaShoppingCart,
  FaMobileAlt,
  FaUserShield,
  FaKey,
  FaPlug,
} from "react-icons/fa";

const servicesData = [
  {
    title: "Custom Website Design & Development",
    description:
      "We create visually engaging, scalable websites that align with your brand and user goals. From frontend design to backend functionality, every site is optimized for performance, accessibility, and seamless interaction.",
    icon: <FaLaptopCode className="text-4xl text-highlightText mb-4" />,
  },
  {
    title: "eCommerce Solutions & Payment Integration",
    description:
      "We design intuitive eCommerce platforms with smooth product browsing, secure checkouts, and custom admin dashboards. Everything is built for trust, ease of use, and conversion growth.",
    icon: <FaShoppingCart className="text-4xl text-highlightText mb-4" />,
  },
  {
    title: "Responsive & Mobile-First Interfaces",
    description:
      "Every site is crafted to adapt beautifully to any screen. We prioritize mobile-first design, fast load times, and intuitive navigation to ensure your audience enjoys a consistent experience everywhere.",
    icon: <FaMobileAlt className="text-4xl text-highlightText mb-4" />,
  },
  {
    title: "CMS & Admin Dashboards",
    description:
      "Take control with user-friendly admin panels and custom CMS solutions. From content editing to user management, everything is designed to be simple, secure, and role-specific.",
    icon: <FaUserShield className="text-4xl text-highlightText mb-4" />,
  },
  {
    title: "Authentication, Security & Access Control",
    description:
      "We implement secure login systems, multi-role access, and encryption-based authentication methods like JWT or OAuth to safeguard your users and data while keeping the experience seamless.",
    icon: <FaKey className="text-4xl text-highlightText mb-4" />,
  },
  {
    title: "Maintenance, Optimization & API Integration",
    description:
      "We keep your site running smoothly with regular updates, performance tuning, and third-party integrations—ensuring reliability, speed, and connected experiences across platforms.",
    icon: <FaPlug className="text-4xl text-highlightText mb-4" />,
  },
];

const ServicesSection = () => {
  return (
    <section className="bg-backgroundPrimary py-12 px-4 text-textPrimary">
      <div className="max-w-7xl mx-auto text-center">
        <Heading children="Design-Centered Development That Delivers" />

        <p className="text-lg mb-10 max-w-3xl mx-auto text-start text-textSecondary">
          At AlgoTwist, we don’t just build websites - we create intuitive
          digital experiences. Whether you're a startup or an established brand,
          we design responsive, high-performing platforms that feel effortless
          to use and beautiful to explore. Every detail - from layout to loading
          speed - is crafted with your users in mind, helping you stand out,
          rank better, and convert faster.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <article
              key={index}
              className="bg-backgroundPrimary rounded-2xl p-6 shadow-md shadow-highlightText transition duration-300 group border border-borderColor"
            >
              <div className="flex items-center justify-center mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-sm text-textLight">{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
