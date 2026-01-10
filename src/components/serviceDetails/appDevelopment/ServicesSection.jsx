import React from "react";
import Heading from "../../common/Heading";
  import {
  FaMobileAlt,
  FaApple,
  FaAndroid,
  FaLayerGroup,
  FaCogs,
  FaTools,
  FaUserShield,
  FaKey,
  FaPlug
} from "react-icons/fa";

const servicesData = [
  {
    title: "Custom Mobile App Development",
    description:
      "We design and build high-performance mobile applications that align with your business goals. From planning to deployment, we ensure secure, scalable, and engaging experiences.",
    icon: <FaMobileAlt className="text-4xl text-highlightText mb-4" />,
  },
  {
    title: "iOS App Development",
    description:
      "We create sleek, user-centric iOS applications using Swift and the latest Apple technologies, fully optimized for performance, security, and App Store guidelines.",
    icon: <FaApple className="text-4xl text-highlightText mb-4" />,
  },
  {
    title: "Android App Development",
    description:
      "From modern UI/UX to robust backend integration, we develop Android apps with native performance using Kotlin, optimized for all major devices and OS versions.",
    icon: <FaAndroid className="text-4xl text-highlightText mb-4" />,
  },
  {
    title: "Cross-Platform App Development",
    description:
      "Reach both iOS and Android users with a single codebase. We use Flutter and React Native to build efficient cross-platform apps with a native look and feel.",
    icon: <FaLayerGroup className="text-4xl text-highlightText mb-4" />,
  },
  {
    title: "App Backend & API Integration",
    description:
      "We build powerful backends and REST/GraphQL APIs for real-time data sync, authentication, and third-party integrations across mobile ecosystems.",
    icon: <FaPlug className="text-4xl text-highlightText mb-4" />,
  },
  {
    title: "Authentication & Security",
    description:
      "Secure your apps with modern authentication systems including biometrics, 2FA, token-based auth (JWT, OAuth2), and role-based permission control.",
    icon: <FaKey className="text-4xl text-highlightText mb-4" />,
  },
  {
    title: "Admin Panel & Role Management",
    description:
      "We develop admin dashboards for mobile apps to manage users, content, analytics, and access control with multi-role support.",
    icon: <FaUserShield className="text-4xl text-highlightText mb-4" />,
  },
  {
    title: "Maintenance & App Updates",
    description:
      "Keep your app running at its best with ongoing updates, bug fixes, performance monitoring, and OS compatibility support.",
    icon: <FaTools className="text-4xl text-highlightText mb-4" />,
  },
  {
    title: "App Performance Optimization",
    description:
      "We fine-tune mobile apps for speed, memory usage, and responsiveness to ensure a smooth experience across devices.",
    icon: <FaCogs className="text-4xl text-highlightText mb-4" />,
  },
];



const ServicesSection = () => {
  return (
    <section className="bg-backgroundPrimary py-12 px-4 text-textPrimary">
      <div className="max-w-7xl mx-auto text-center">
     <Heading children="Our Mobile App Development Services" />

<p className="text-lg mb-10 max-w-3xl mx-auto text-textSecondary">
  Launch powerful, user-focused mobile apps with a trusted app development company in India. 
  We specialize in building secure, high-performance iOS, Android, and cross-platform apps that 
  drive user engagement, streamline operations, and scale effortlessly with your business.
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
