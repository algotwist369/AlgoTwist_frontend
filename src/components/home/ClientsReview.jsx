import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const reviews = [
  {
    name: "Karan Malhotra",
    review:
      "Algotwist helped streamline our internal processes with a custom software solution. Excellent support and delivery.",
  },
  {
    name: "Neha Rajput",
    review:
      "Super impressed with their web development team. The UI/UX was modern, clean, and exactly what we envisioned.",
  },
  {
    name: "Amit Kulkarni",
    review:
      "Their digital transformation strategies really helped our business grow online. Highly professional team.",
  },
  {
    name: "Tanvi Deshmukh",
    review:
      "Smooth onboarding, timely delivery, and great communication throughout the project. Kudos to the Algotwist team!",
  },
  {
    name: "Vikram Sinha",
    review:
      "We hired Algotwist for an e-commerce platform and they nailed it. Fast, responsive, and scalable tech stack.",
  },
  {
    name: "Ishita Bansal",
    review:
      "What stood out was their attention to detail and willingness to iterate till we were satisfied. Highly recommended!",
  },
];

const ClientsReview = () => {
  const [current, setCurrent] = useState(0);

  // Auto-change reviews every 4s
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % reviews.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.95,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
      scale: 0.95,
    }),
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-20 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-textPrimary">
        What Our Clients Say
      </h2>
      <p className="text-textSecondary text-md md:text-lg mb-10">
        Our clients love us! Here’s what they have to say.
      </p>

      <div className="relative w-full h-[250px] md:h-[220px] overflow-hidden">
        <AnimatePresence initial={false} custom={1}>
          <motion.div
            key={current}
            custom={1}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.4 },
            }}
            className="absolute w-full px-6"
          >
            <div className="bg-white shadow-lg border rounded-2xl p-6 md:p-8 mx-auto max-w-3xl text-center relative">
              <p className="text-gray-600 italic text-md md:text-lg">
                “{reviews[current].review}”
              </p>
              <h4 className="text-lg md:text-xl mt-4 font-semibold text-gray-900">
                - {reviews[current].name}
              </h4>
              <span className="absolute top-3 right-4 text-xs bg-green-100 text-green-600 px-2 py-1 rounded-full">
                Verified
              </span>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ClientsReview;
