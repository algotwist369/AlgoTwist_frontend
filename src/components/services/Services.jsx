import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaCode,
  FaMobileAlt,
  FaPaintBrush,
  FaRocket,
  FaPenNib,
  FaTools,
  FaTimes,
} from "react-icons/fa";
import { TiMessages } from "react-icons/ti";
import { websiteTypes } from "../../data/pricingData.js";
import PricingForm from "./PricingForm.jsx";

const services = [
  {
    title: "Web Development",
    link: "/web-development",
    startingPrice: 4000,
    icon: <FaCode size={28} className="text-highlightText" />,
    description:
      "Robust, scalable, and SEO-optimized websites tailored to your business goals.",
  },
  {
    title: "App Development",
    link: "/app-development",
    startingPrice: 5000,
    icon: <FaMobileAlt size={28} className="text-highlightText" />,
    description:
      "Cutting-edge native and cross-platform mobile apps built for performance.",
  },
  {
    title: "Digital Marketing",
    link: "/digital-marketing",
    startingPrice: 3000,
    icon: <FaRocket size={28} className="text-highlightText" />,
    description:
      "Full-funnel digital strategies that maximize your brand's reach and ROI.",
  },
  {
    title: "UI/UX Design",
    link: "/ui-ux-design",
    startingPrice: 2500,
    icon: <FaPaintBrush size={28} className="text-highlightText" />,
    description:
      "User-centered, visually compelling interfaces for intuitive navigation.",
  },
  {
    title: "Graphic Designing",
    link: "/graphic-designing",
    startingPrice: 2000,
    icon: <FaPenNib size={28} className="text-highlightText" />,
    description:
      "Brand identities, illustrations, and marketing creatives that stand out.",
  },
  {
    title: "Social Media Marketing",
    link: "/social-media-marketing",
    startingPrice: 3500,
    icon: <TiMessages size={28} className="text-highlightText" />,
    description:
      "Engaging content creation and community management, marketing to boost your online presence.",
  },
];

const ServicesPage = () => {
  const [showForm, setShowForm] = useState(false);
  const [selectedService, setSelectedService] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    businessType: "",
    description: "",
    budget: "",
    timeline: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const openFormWithService = (serviceTitle) => {
    setSelectedService(serviceTitle);
    setFormData((prev) => ({
      ...prev,
      businessType: serviceTitle,
    }));
    setShowForm(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Here you would typically send this data to your backend
    // For now, we'll just simulate a successful submission
    setSubmitted(true);
    setTimeout(() => {
      setShowForm(false);
      setSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        businessType: "",
        description: "",
        budget: "",
        timeline: "",
      });
    }, 3000);
  };

  return (
    <section className="min-h-screen bg-backgroundPrimary text-textPrimary px-6 py-24 md:px-20 overflow-hidden relative">
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-3xl mx-auto mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-textPrimary mb-4">
          Elevate Your Business with Our Expert Services
        </h2>
        <p className="text-textSecondary text-lg">
          End-to-end digital solutions crafted by professionals, designed to
          grow your brand.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
        {services.map((service, index) => (
          <div key={index}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-secondary_bg rounded-2xl p-6 shadow-md hover:shadow-lg hover:shadow-highlightText/40 transition duration-300 group border border-borderColor cursor-pointer"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-hover_bg rounded-full transition group-hover:scale-105">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-white group-hover:text-highlightText transition">
                  {service.title}
                </h3>
              </div>
              <p className="text-textSecondary text-base leading-relaxed mb-4">
                {service.description}
              </p>
              <div className="flex justify-between items-center mt-2">
                <Link
                  to={`/pricing${service.link}`}
                  className="text-highlightText hover:underline text-sm"
                >
                  View Details
                </Link>
                <motion.button
                  onClick={(e) => {
                    e.preventDefault();
                    openFormWithService(service.title);
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-4 py-2 bg-highlightText text-textPrimary text-sm font-medium rounded-lg hover:bg-opacity-90 transition duration-300"
                >
                  Get Pricing
                </motion.button>
              </div>
            </motion.div>
          </div>
        ))}
      </div>

      {/* Custom Pricing Form Modal */}
      {showForm && (
        <div>
          <PricingForm
            selectedService={selectedService}
            formData={formData}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            submitted={submitted}
            setShowForm={setShowForm}
          />
        </div>
      )}
    </section>
  );
};

export default ServicesPage;
