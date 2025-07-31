import React, { useEffect, useState } from "react";

const url1 =
  "https://res.cloudinary.com/djdrpfhdz/image/upload/v1753774027/ALGO_TWIST_fiprfh.png";

const StartAnimation = () => {
  const [animate, setAnimate] = useState(false);
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    // Generate random particles
    const particleArray = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 2,
      delay: Math.random() * 2,
      duration: Math.random() * 3 + 2,
    }));
    setParticles(particleArray);

    const timeout = setTimeout(() => {
      setAnimate(true);
    }, 200);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="h-screen w-full flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden relative">
      {/* Animated particles */}
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute rounded-full bg-gradient-to-r from-highlightText to-rgbHighlight opacity-70 animate-pulse"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            animationDelay: `${particle.delay}s`,
            animationDuration: `${particle.duration}s`,
          }}
        />
      ))}

      {/* Main logo with complex animation */}
      <div className="relative z-10">
        <img
          src={url1}
          alt="Logo"
          className={`
            h-20 sm:h-24 w-auto object-contain relative z-20
            ${animate ? "opacity-100 animate-bounce" : "opacity-0 scale-0"}
          `}
          style={{
            filter: "",
            animation: animate ? "zoomBounce 2s ease-out forwards" : "none",
          }}
        />

        <style jsx>{`
          @keyframes zoomBounce {
            0% {
              transform: scale(0) rotate(-180deg);
              opacity: 0;
            }
            50% {
              transform: scale(1.2) rotate(0deg);
              opacity: 1;
            }
            70% {
              transform: scale(0.9);
            }
            85% {
              transform: scale(1.1);
            }
            100% {
              transform: scale(1);
              opacity: 1;
            }
          }
        `}</style>
      </div>

      {/* Scanning line effect - removed */}
    </div>
  );
};

export default StartAnimation;
