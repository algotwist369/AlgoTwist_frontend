// components/CapabilityCard.jsx
import {
  FaSearch,
  FaMailBulk,
  FaFacebookF,
  FaBullhorn,
  FaUsers,
} from "react-icons/fa";
import { SiCanva, SiZapier } from "react-icons/si";
import { BiAnalyse } from "react-icons/bi";

const iconMap = {
  seo: <FaSearch className="text-red-500 text-3xl" />,
  content: <SiCanva className="text-indigo-500 text-3xl" />,
  social: <FaFacebookF className="text-blue-500 text-3xl" />,
  email: <FaMailBulk className="text-yellow-500 text-3xl" />,
  analytics: <BiAnalyse className="text-green-500 text-3xl" />,
  ads: <FaBullhorn className="text-pink-500 text-3xl" />,
  automation: <SiZapier className="text-orange-500 text-3xl" />,
  crm: <FaUsers className="text-purple-500 text-3xl" />,
};

const CapabilityCard = ({ data }) => {
  return (
    <div className="bg-backgroundSecondary border border-borderColor shadow-md shadow-highlightText rounded-xl p-6 transition hover:shadow-xl">
      <div className="flex items-center gap-3 mb-3">
        {iconMap[data.icon]}
        <h3 className="text-lg font-semibold text-textPrimary">{data.title}</h3>
      </div>
      <ul className="pl-5 list-disc marker:text-red-500 text-textSecondary text-sm space-y-1">
        {data.stack.map((tool, index) => (
          <li key={index}>{tool}</li>
        ))}
      </ul>
    </div>
  );
};

export default CapabilityCard;
