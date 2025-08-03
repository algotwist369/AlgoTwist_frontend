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
    icon: <FaLaptopCode className="text-4xl text-white mb-4" />,
  },
  {
    title: "eCommerce Website Development",
    description:
      "From intuitive product catalogs to seamless payment integrations, our eCommerce web solutions are conversion-driven and mobile-ready.",
    icon: <FaShoppingCart className="text-4xl text-white mb-4" />,
  },
  {
    title: "Responsive Web Design",
    description:
      "Your website will look stunning on every device. We use responsive frameworks to ensure pixel-perfect visuals across desktops, tablets, and mobiles.",
    icon: <FaMobileAlt className="text-4xl text-white mb-4" />,
  },
  {
    title: "CMS Development",
    description:
      "Manage your content easily with CMS-based websites that are flexible, scalable, and easy to maintain.",
    icon: <FaCogs className="text-4xl text-white mb-4" />,
  },
  {
    title: "Web Application Development",
    description:
      "Build custom web apps with real-time features, complex logic, or third-party integrations using tech like React, Node.js, Laravel, and more.",
    icon: <FaProjectDiagram className="text-4xl text-white mb-4" />,
  },
  {
    title: "Website Maintenance",
    description:
      "Keep your site running smoothly with regular updates, security patches, and performance monitoring from our expert support team.",
    icon: <FaTools className="text-4xl text-white mb-4" />,
  },
];

export default servicesData;
