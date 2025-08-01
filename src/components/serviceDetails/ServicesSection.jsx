import React from "react";
import Heading from "../common/Heading";
import {
  FaLaptopCode,
  FaShoppingCart,
  FaMobileAlt,
  FaCogs,
  FaProjectDiagram,
  FaTools,
} from "react-icons/fa";

const servicesData = [
  {
    title: "Custom Website Development",
    description:
      "We design tailor-made websites that reflect your brand identity and deliver unique user experiences using the latest front-end and back-end technologies.",
    icon: <FaLaptopCode className="text-4xl text-highlightText mb-4" />,
  },
  {
    title: "eCommerce Website Development",
    description:
      "From intuitive product catalogs to seamless payment integrations, our eCommerce web solutions are conversion-driven and mobile-ready.",
    icon: <FaShoppingCart className="text-4xl text-highlightText mb-4" />,
  },
  {
    title: "Responsive Web Design",
    description:
      "Your website will look stunning on every device. We use responsive frameworks to ensure pixel-perfect visuals across desktops, tablets, and mobiles.",
    icon: <FaMobileAlt className="text-4xl text-highlightText mb-4" />,
  },
  {
    title: "CMS Development",
    description:
      "Manage your content easily with CMS-based websites that are flexible, scalable, and easy to maintain.",
    icon: <FaCogs className="text-4xl text-highlightText mb-4" />,
  },
  {
    title: "Web Application Development",
    description:
      "Build custom web apps with real-time features, complex logic, or third-party integrations using tech like React, Node.js, Laravel, and more.",
    icon: <FaProjectDiagram className="text-4xl text-highlightText mb-4" />,
  },
  {
    title: "Website Maintenance",
    description:
      "Keep your site running smoothly with regular updates, security patches, and performance monitoring from our expert support team.",
    icon: <FaTools className="text-4xl text-highlightText mb-4" />,
  },
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
              className="bg-secondary_bg rounded-2xl p-6 shadow-md shadow-highlightText transition duration-300 group border border-borderColor hover:scale-105"
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
