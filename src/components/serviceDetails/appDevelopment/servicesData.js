import {
  FaMobileAlt,
  FaApple,
  FaAndroid,
  FaLayerGroup,
  FaCogs,
  FaTools,
} from "react-icons/fa";

const servicesData = [
  {
    title: "Custom Mobile App Development",
    description:
      "We build tailored mobile applications that align with your business goals, offering engaging user experiences and top-tier performance.",
    icon: <FaMobileAlt className="text-4xl text-white mb-4" />,
  },
  {
    title: "iOS App Development",
    description:
      "Our experts craft sleek, high-performance iOS apps using Swift and modern Apple frameworks, optimized for App Store success.",
    icon: <FaApple className="text-4xl text-white mb-4" />,
  },
  {
    title: "Android App Development",
    description:
      "We deliver fast, scalable Android apps compatible with the latest devices and OS versions, built with Kotlin and robust architecture.",
    icon: <FaAndroid className="text-4xl text-white mb-4" />,
  },
  {
    title: "Cross-Platform App Development",
    description:
      "Reach more users with cross-platform solutions built on Flutter or React Native — one codebase, multiple platforms, same great experience.",
    icon: <FaLayerGroup className="text-4xl text-white mb-4" />,
  },
  {
    title: "App Backend & API Integration",
    description:
      "We develop secure, scalable app backends with custom APIs and real-time functionalities to power your mobile ecosystem.",
    icon: <FaCogs className="text-4xl text-white mb-4" />,
  },
  {
    title: "App Maintenance & Support",
    description:
      "Keep your apps running smoothly with proactive monitoring, updates, bug fixes, and performance enhancements.",
    icon: <FaTools className="text-4xl text-white mb-4" />,
  },
];

export default servicesData;
