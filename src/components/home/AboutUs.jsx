import React from "react";
import { motion } from "framer-motion";
import MouseGlowCard from "../common/MouseGlowCard";

const AboutUs = () => {
  // Disable copy/selection and right-click
  const noCopyStyle = {
    userSelect: "none",
    WebkitUserSelect: "none",
    MozUserSelect: "none",
    msUserSelect: "none",
  };

  return (
    <section
      className="relative bg-backgroundPrimary text-textPrimary py-20 px-4 md:px-16 overflow-hidden"
      style={noCopyStyle}
      onContextMenu={(e) => e.preventDefault()}
    >
      {/* Blurred Background Circles */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-accent/30 rounded-full blur-3xl opacity-40 -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-72 h-72 rounded-full blur-3xl opacity-40 translate-x-1/2 translate-y-1/2" />

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-2 items-center gap-16"
        style={noCopyStyle}
      >
        {/* Text Content */}
        <div>
          <motion.h2
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold leading-tight mb-6 text-textPrimary"
            style={noCopyStyle}
          >
            Who We Are
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-textSecondary text-lg mb-4"
            style={noCopyStyle}
          >
            AlgoTwist is a leading digital agency marketing powered by a team of{" "}
            <span className="text-accent font-semibold">MNC experts</span>,
            creative visionaries, and technology enthusiasts. We are recognized
            for delivering world-class digital solutions that drive real
            business growth.
          </motion.p>

          <MouseGlowCard>
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="p-5 shadow-[5px_5px_rgba(0,_98,_90,_0.4),_10px_10px_rgba(0,_98,_90,_0.3),_15px_15px_rgba(0,_98,_90,_0.2),_20px_20px_rgba(0,_98,_90,_0.1),_25px_25px_rgba(0,_98,_90,_0.05)]"
              style={noCopyStyle}
            >
              <h3 className="text-2xl font-semibold mb-2">Why Choose Us?</h3>
              <ul className="list-disc list-inside text-textSecondary text-md space-y-1">
                <li>
                  Our team consists of industry veterans with experience at top
                  MNCs and global brands.
                </li>
                <li>
                  We blend international standards with local insights for
                  maximum impact.
                </li>
                <li>
                  Proven track record of delivering high-performance websites,
                  apps, and digital campaigns.
                </li>
                <li>
                  Cutting-edge strategies in{" "}
                  <span className="text-accent">SEO</span>,{" "}
                  <span className="text-white">performance marketing</span>, and{" "}
                  <span className="text-accent">social media</span>.
                </li>
                <li>
                  Client-centric approach:{" "}
                  <span className="text-white">Your success is our mission.</span>
                </li>
              </ul>
            </motion.div>
          </MouseGlowCard>

          <motion.p
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="text-disabledText text-md mb-2"
            style={noCopyStyle}
          >
            Whether you're a startup aiming to disrupt the market or an
            enterprise scaling new heights, our tailored solutions ensure your
            digital presence stands out and delivers measurable results.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.1, duration: 0.8 }}
            className="text-white text-md font-semibold"
            style={noCopyStyle}
          >
            Partner with the best-partner with AlgoTwist. Experience the
            difference of working with true digital experts.
          </motion.p>
        </div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative rounded-xl overflow-hidden shadow-[5px_5px_rgba(0,_98,_90,_0.4),_10px_10px_rgba(0,_98,_90,_0.3),_15px_15px_rgba(0,_98,_90,_0.2),_20px_20px_rgba(0,_98,_90,_0.1),_25px_25px_rgba(0,_98,_90,_0.05)]"
          style={noCopyStyle}
        >
          <img
            src="https://res.cloudinary.com/djdrpfhdz/image/upload/v1753622172/ChatGPT_Image_Jul_27_2025_06_45_29_PM_x77udo.png"
            alt="Our Team"
            className="w-full h-full object-cover"
            draggable={false}
          />
          {/* Badge or overlay for credibility */}
          <div className="absolute bottom-4 left-4 bg-backgroundMuted/90 text-white px-4 py-1 rounded-full text-sm font-semibold shadow-md border border-white">
            MNC Experts
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AboutUs;
