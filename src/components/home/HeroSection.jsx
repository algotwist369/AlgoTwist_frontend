import React from "react";
import { motion } from "framer-motion";
import WhatsAppButton from "../common/WhatsAppButton";

const heroSlide = {
  image:
    "https://res.cloudinary.com/djdrpfhdz/image/upload/v1751890178/computer-8779040_frd1az.jpg",
  title: "All-in-one IT services for the modern enterprise",
  description:
    "Empower your business with future-ready digital solutions. From automation to cloud integration, we deliver strategies that scale.",
  cta: { text: "Explore Solutions" },
};

const HeroSection = () => {
  return (
    <section
      className="relative w-full h-screen flex items-center justify-center bg-cover bg-center overflow-hidden"
      style={{
        backgroundImage: `url('${heroSlide.image}')`,
        /* Disable text selection */
        userSelect: "none",
        /* Disable touch callout on iOS */
        WebkitTouchCallout: "none",
        /* Disable context menu on right-click */
      }}
      onContextMenu={(e) => e.preventDefault()}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 z-10 bg-black/60 backdrop-blur-sm pointer-events-none" />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="relative z-20 w-full max-w-6xl mx-auto px-4 flex flex-col items-center justify-center text-center text-white"
        style={{
          userSelect: "none",
          WebkitUserSelect: "none",
          MozUserSelect: "none",
          msUserSelect: "none",
        }}
      >
        <motion.h1
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-[98px] font-extrabold mb-4 drop-shadow-lg"
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          {heroSlide.title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-base sm:text-xl md:text-2xl lg:text-[22px] max-w-2xl mb-8 drop-shadow-md text-gray-200"
          style={{ fontFamily: "'Roboto', sans-serif" }}
        >
          {heroSlide.description}
        </motion.p>

        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
        >
          <WhatsAppButton text={heroSlide.cta.text} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
