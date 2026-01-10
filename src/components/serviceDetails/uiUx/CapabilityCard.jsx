// components/CapabilityCard.jsx
import {
  FaReact,
  FaServer,
  FaDatabase,
  FaCloud,
  FaBolt,
  FaStream,
  FaSlidersH,
  FaBrain,
} from "react-icons/fa";

const iconMap = {
  frontend: <FaReact className="text-sky-500 text-3xl" />,
  backend: <FaServer className="text-rose-500 text-3xl" />,
  database: <FaDatabase className="text-green-500 text-3xl" />,
  devops: <FaCloud className="text-indigo-500 text-3xl" />,
  realtime: <FaStream className="text-orange-500 text-3xl" />,
  state: <FaSlidersH className="text-yellow-600 text-3xl" />,
  media: <FaBolt className="text-purple-500 text-3xl" />,
  ai: <FaBrain className="text-pink-600 text-3xl" />,
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
