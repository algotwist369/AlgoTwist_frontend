import React, { useMemo } from "react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaFigma,
  FaAws,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaPython,
  FaGitAlt,
  FaInstagram,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
 
  FaVideo,
  FaCameraRetro,
  FaBullhorn,
} from "react-icons/fa";
import { SiAdobepremierepro, SiAdobeillustrator, SiGoogleads } from "react-icons/si";
import { DiPhotoshop } from "react-icons/di";

const techIcons = [
  { icon: <FaReact />, label: "React", color: "#61DBFB" },
  { icon: <FaNodeJs />, label: "Node.js", color: "#3C873A" },
  { icon: <FaDatabase />, label: "MongoDB", color: "#4DB33D" },
  { icon: <FaFigma />, label: "Figma", color: "#A259FF" },
  { icon: <FaAws />, label: "AWS", color: "#FF9900" },
  { icon: <FaHtml5 />, label: "HTML5", color: "#E34C26" },
  { icon: <FaCss3Alt />, label: "CSS3", color: "#264de4" },
  { icon: <FaJs />, label: "JavaScript", color: "#f0db4f" },
  { icon: <FaPython />, label: "Python", color: "#3776AB" },
  { icon: <FaGitAlt />, label: "Git", color: "#F1502F" },
  // Social Media Icons
  { icon: <FaInstagram />, label: "Instagram", color: "#E1306C" },
  { icon: <FaFacebookF />, label: "Facebook", color: "#1877F2" },
  { icon: <FaTwitter />, label: "Twitter", color: "#1DA1F2" },
  { icon: <FaLinkedinIn />, label: "LinkedIn", color: "#0A66C2" },
  { icon: <FaYoutube />, label: "YouTube", color: "#FF0000" },
  // Digital marketing
  { icon: <FaBullhorn />, label: "Marketing", color: "#F59E0B" },
  { icon: <SiGoogleads />, label: "Google Ads", color: "#4285F4" },
  // Photo/video editing
  { icon: <DiPhotoshop />, label: "Photoshop", color: "#31A8FF" },
  { icon: <SiAdobeillustrator />, label: "Illustrator", color: "#FF9A00" },
  { icon: <SiAdobepremierepro />, label: "Premiere Pro", color: "#9999FF" },
  { icon: <FaVideo />, label: "Video Editing", color: "#FF4500" },
  { icon: <FaCameraRetro />, label: "360 Photos", color: "#6B7280" },
];

const radius = 350;
const iconSize = 56;
const minDistance = 90;

function getRandomPoint(radius, padding = 40) {
  const angle = Math.random() * 2 * Math.PI;
  const r = (radius - padding) * Math.sqrt(Math.random());
  return {
    x: r * Math.cos(angle),
    y: r * Math.sin(angle),
  };
}

function distance(p1, p2) {
  return Math.sqrt((p1.x - p2.x) ** 2 + (p1.y - p2.y) ** 2);
}

function generatePositions(count, radius, minDist, padding = 40, maxRetries = 2000) {
  const positions = [];

  for (let i = 0; i < count; i++) {
    let pos;
    let tries = 0;

    do {
      pos = getRandomPoint(radius, padding);
      tries++;

      const tooClose = positions.some((p) => distance(p, pos) < minDist);
      if (!tooClose) {
        positions.push(pos);
        break;
      }
    } while (tries < maxRetries);

    if (tries === maxRetries) {
      positions.push(pos);
    }
  }

  return positions;
}

// Background floating shapes
const bgShapesCount = 10;
const bgShapeSizes = [25, 35, 45];
const bgShapeColors = [
  "rgba(255, 255, 255, 0.04)",
  "rgba(255, 255, 255, 0.07)",
  "rgba(255, 255, 255, 0.10)",
];

function generateBgShapes(radius, count) {
  return Array.from({ length: count }).map(() => {
    const pos = getRandomPoint(radius, 20);
    const size = bgShapeSizes[Math.floor(Math.random() * bgShapeSizes.length)];
    const color = bgShapeColors[Math.floor(Math.random() * bgShapeColors.length)];
    const shapeType = Math.random() > 0.5 ? "circle" : "square";

    const floatX = 5 + Math.random() * 6;
    const floatY = 4 + Math.random() * 4;
    const duration = 5 + Math.random() * 4;
    const delay = Math.random() * 5;

    return { pos, size, color, shapeType, floatX, floatY, duration, delay };
  });
}

const TechnologiesAndServices = () => {
  const positions = useMemo(() => generatePositions(techIcons.length, radius, minDistance), []);
  const bgShapes = useMemo(() => generateBgShapes(radius, bgShapesCount), []);

  return (
    <section className="min-h-screen bg-gradient-to-br from-black via-zinc-900 to-black flex flex-col items-center justify-center py-20 px-8 text-white relative overflow-visible">
      <h1 className="text-5xl font-extrabold mb-8 text-center tracking-wide select-none max-w-4xl">
        Our Technologies & Services
      </h1>
      <p className="text-center text-lg max-w-3xl mb-16 text-zinc-300">
        We combine cutting-edge technologies with expert digital marketing, creative media editing, and social media promotion to help your business thrive online.
      </p>

      <div
        className="relative rounded-full bg-gradient-to-tr from-zinc-900/70 via-zinc-800/50 to-zinc-900/70 shadow-2xl"
        style={{
          width: radius * 2 + iconSize,
          height: radius * 2 + iconSize,
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          border: "2px solid rgba(255, 255, 255, 0.1)",
          zIndex: 20,
        }}
      >
        {/* Background shapes */}
        {bgShapes.map(({ pos, size, color, shapeType, floatX, floatY, duration, delay }, i) => (
          <motion.div
            key={`bg-shape-${i}`}
            className="absolute"
            style={{
              left: `calc(50% + ${pos.x}px)`,
              top: `calc(50% + ${pos.y}px)`,
              translateX: "-50%",
              translateY: "-50%",
              width: size,
              height: size,
              backgroundColor: color,
              borderRadius: shapeType === "circle" ? "50%" : "16%",
              filter: "blur(3px)",
              zIndex: 0,
            }}
            animate={{
              x: [0, floatX, 0, -floatX, 0],
              y: [0, -floatY, 0, floatY, 0],
              rotate: [0, 7, 0, -7, 0],
            }}
            transition={{
              duration,
              delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Icons */}
        {techIcons.map((tech, i) => {
          const pos = positions[i];
          const floatX = 8 + Math.random() * 4;
          const floatY = 6 + Math.random() * 4;
          const duration = 3 + Math.random() * 2;
          const delay = Math.random() * 2;

          return (
            <motion.div
              key={tech.label}
              className="absolute flex flex-col items-center cursor-pointer select-none"
              style={{
                left: `calc(50% + ${pos.x}px)`,
                top: `calc(50% + ${pos.y}px)`,
                translateX: "-50%",
                translateY: "-50%",
                width: iconSize,
                height: iconSize + 24,
                zIndex: 10,
              }}
              animate={{
                x: [0, floatX, 0, -floatX, 0],
                y: [0, -floatY, 0, floatY, 0],
              }}
              transition={{
                duration,
                delay,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              whileHover={{ scale: 1.3, zIndex: 30 }}
            >
              <motion.div
                className="w-14 h-14 rounded-full border-2 border-gray-700 bg-black flex items-center justify-center filter grayscale shadow-md transition duration-300"
                style={{
                  color: tech.color,
                }}
                whileHover={{
                  filter: "grayscale(0%)",
                  boxShadow: `0 0 18px ${tech.color}`,
                }}
              >
                {tech.icon}
              </motion.div>

              <motion.span
                initial={{ opacity: 0, y: 8, scale: 0.9 }}
                whileHover={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.25 }}
                className="mt-2 text-xs font-semibold tracking-wide"
                style={{
                  color: tech.color,
                  textShadow: `0 0 10px ${tech.color}`,
                  whiteSpace: "nowrap",
                }}
              >
                {tech.label}
              </motion.span>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default TechnologiesAndServices;
