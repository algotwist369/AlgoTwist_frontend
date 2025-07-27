import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

/**
 * A wrapper that adds a mouse-following glow border effect to any card content.
 * @param {ReactNode} children - The card content inside.
 * @param {string} className - Extra class names for the container.
 */
const MouseGlowCard = ({ children, className = "" }) => {
  const cardRef = useRef(null);
  const [coords, setCoords] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e) => {
    const rect = cardRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setCoords({ x, y });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className={`relative group overflow-hidden ${className}`}
    >
      {/* Glow border effect */}
      <motion.div
        className="pointer-events-none absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-cyan-400 z-10"
        style={{
          background: `radial-gradient(circle at ${coords.x}% ${coords.y}%, rgba(0,255,255,0.2), transparent 60%)`,
          maskImage: "linear-gradient(white, white)",
          WebkitMaskImage: "linear-gradient(white, white)",
        }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.1 }}
      />

      {/* Inner content */}
      <div className="relative z-20">{children}</div>
    </div>
  );
};

export default MouseGlowCard;
