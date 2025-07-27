import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaCode,
  FaMobileAlt,
  FaPaintBrush,
  FaRocket,
  FaPenNib,
  FaTools,
} from "react-icons/fa";
import { TiMessages } from "react-icons/ti";
import { GrDocumentVideo } from "react-icons/gr";

const services = [
  {
    title: "Web Development",
    link: "/web-development",
    startingPrice: 4000,
    icon: <FaCode size={28} className="text-accent" />,
    description:
      "Robust, scalable, and SEO-optimized websites tailored to your business goals.",
  },
  {
    title: "App Development",
    link: "/app-development",
    startingPrice: 5000,
    icon: <FaMobileAlt size={28} className="text-accent" />,
    description:
      "Cutting-edge native and cross-platform mobile apps built for performance.",
  },
  {
    title: "Digital Marketing",
    link: "/digital-marketing",
    startingPrice: 3000,
    icon: <FaRocket size={28} className="text-accent" />,
    description:
      "Full-funnel digital strategies that maximize your brand's reach and ROI.",
  },
  {
    title: "UI/UX Design",
    link: "/ui-ux-design",
    startingPrice: 2500,
    icon: <FaPaintBrush size={28} className="text-accent" />,
    description:
      "User-centered, visually compelling interfaces for intuitive navigation.",
  },
  {
    title: "Graphic Designing",
    link: "/graphic-designing",
    startingPrice: 2000,
    icon: <FaPenNib size={28} className="text-accent" />,
    description:
      "Brand identities, illustrations, and marketing creatives that stand out.",
  },
  {
    title: "Web/App Maintenance",
    link: "/web-development",
    startingPrice: 1500,
    icon: <FaTools size={28} className="text-accent" />,
    description:
      "Proactive monitoring and updates to keep your digital platforms running smoothly.",
  },
  {
    title: "Social Media Marketing",
    link: "/social-media-marketing",
    startingPrice: 3500,
    icon: <TiMessages size={28} className="text-accent" />,
    description:
      "Engaging content creation and community management, marketing to boost your online presence.",
  },
  {
    title: "Photography, 360° Photo Shoot & Videography",
    link: "/photography",
    startingPrice: 6000,
    icon: <GrDocumentVideo size={28} className="text-accent" />,
    description:
      "Premium visuals through photography, 360° shoots, and videography for standout branding.",
  },
];

const ServicesPage = () => {
  return (
    <section className="min-h-screen bg-backgroundPrimary text-textPrimary px-6 py-24 md:px-20 overflow-hidden">
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
          <Link to={`/pricing${service.link}`} key={index}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-secondary_bg rounded-2xl p-6 shadow-md hover:shadow-lg hover:shadow-accent/40 transition duration-300 group border border-borderColor cursor-pointer"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-hover_bg rounded-full transition group-hover:scale-105">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-white group-hover:text-accent transition">
                  {service.title}
                </h3>
              </div>
              <p className="text-textSecondary text-base leading-relaxed mb-2">
                {service.description}
              </p>
              {/* <p className="text-green-300 font-semibold text-sm">
                Starting ₹{service.startingPrice}
              </p> */}
            </motion.div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default ServicesPage;
