// components/CapabilityCard.jsx
import {
  FaMobileAlt,
  FaApple,
  FaAndroid,
  FaServer,
  FaKey,
  FaBell,
  FaStream,
  FaVial,
} from "react-icons/fa";

const iconMap = {
  mobile: <FaMobileAlt className="text-sky-500 text-3xl" />,
  ios: <FaApple className="text-gray-600 text-3xl" />,
  android: <FaAndroid className="text-green-600 text-3xl" />,
  backend: <FaServer className="text-rose-500 text-3xl" />,
  auth: <FaKey className="text-yellow-500 text-3xl" />,
  notifications: <FaBell className="text-orange-500 text-3xl" />,
  realtime: <FaStream className="text-blue-500 text-3xl" />,
  testing: <FaVial className="text-purple-600 text-3xl" />,
};

const CapabilityCard = ({ data }) => {
  return (
    <div className="bg-backgroundSecondary border border-borderColor shadow-md shadow-highlightText rounded-xl p-6 transition">
      <div className="flex items-center gap-3 mb-3">
        {iconMap[data.icon]}
        <h3 className="text-lg font-semibold text-textPrimary">{data.title}</h3>
      </div>
      <ul className="pl-5 list-disc text-textSecondary text-sm space-y-1">
        {data.stack.map((tool, index) => (
          <li key={index}>{tool}</li>
        ))}
      </ul>
    </div>
  );
};

export default CapabilityCard;
