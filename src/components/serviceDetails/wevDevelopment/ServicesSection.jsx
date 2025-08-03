import React from "react";
import Heading from "../../common/Heading";
import {
  FaLaptopCode,
  FaShoppingCart,
  FaMobileAlt,
  FaCogs,
  FaProjectDiagram,
  FaTools,
  FaUserShield,
  FaKey,
  FaPlug 
} from "react-icons/fa";

const servicesData = [
  {
    title: "Custom Website Development",
    description:
      "We design tailor-made websites that reflect your brand identity with built-in admin panels, role-based access, and secure authentication systems using modern front-end and back-end technologies.",
    icon: <FaLaptopCode className="text-4xl text-highlightText mb-4" />,
  },
  {
    title: "eCommerce Website Development",
    description:
      "From advanced product catalogs to admin dashboards, payment gateways, and user authentication, we build scalable eCommerce solutions optimized for performance and security.",
    icon: <FaShoppingCart className="text-4xl text-highlightText mb-4" />,
  },
  {
    title: "Responsive Web Design",
    description:
      "Your website will look stunning and function flawlessly on every device. All layouts are admin-editable and support authentication-aware experiences.",
    icon: <FaMobileAlt className="text-4xl text-highlightText mb-4" />,
  },
  {
    title: "CMS Development",
    description:
      "Manage dynamic content with ease using CMS platforms enhanced with user permissions, login access control, and personalized admin dashboards.",
    icon: <FaCogs className="text-4xl text-highlightText mb-4" />,
  },
  {
    title: "Web Application Development",
    description:
      "We build complex web apps with secure login/signup, JWT or OAuth authentication, multi-role dashboards (admin, user, staff), and real-time data using React, Node.js, or Laravel.",
    icon: <FaProjectDiagram className="text-4xl text-highlightText mb-4" />,
  },
  {
    title: "Website Maintenance",
    description:
      "From admin panel support to database backups and security updates, our maintenance plans ensure your platform runs smoothly and securely 24/7.",
    icon: <FaTools className="text-4xl text-highlightText mb-4" />,
  },
  {
    title: "Authentication & Security",
    description:
      "Implement secure user login, two-factor authentication, encrypted sessions, and permission control using modern auth systems like Firebase Auth, OAuth2, and JWT.",
    icon: <FaKey className="text-4xl text-highlightText mb-4" />,
  },
  {
    title: "Admin Panel & Role Management",
    description:
      "We create intuitive admin dashboards with analytics, content controls, user management, and role-based access for seamless operations.",
    icon: <FaUserShield className="text-4xl text-highlightText mb-4" />,
  },
  {
  title: "API Development & Integration",
  description:
    "We build and integrate robust RESTful and GraphQL APIs to connect your website with third-party services, admin panels, mobile apps, and secure external systems.",
  icon: <FaPlug className="text-4xl text-highlightText mb-4" />,
}
];

const ServicesSection = () => {
  return (
    <section className="bg-backgroundPrimary py-12 px-4 text-textPrimary">
      <div className="max-w-7xl mx-auto text-center">
        <Heading children="Our Website Development Services" />

        <p className="text-lg mb-10 max-w-3xl mx-auto text-textSecondary">
          Transform your online presence with a leading web development company
          in India. We craft stunning, high-performing websites with seamless
          user experiences, cutting-edge designs, and SEO optimization to boost
          engagement, drive conversions, and establish your brand’s digital
          success.
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
