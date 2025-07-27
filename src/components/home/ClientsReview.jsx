import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const reviews = [
  {
    name: "Priya Sharma",
    review: "Amazing service! I felt truly relaxed and pampered. Highly recommended.",
  },
  {
    name: "Rahul Verma",
    review: "One of the best spa experiences I've ever had. Clean and professional.",
  },
  {
    name: "Sneha Patil",
    review: "The massage was rejuvenating. Definitely visiting again!",
  },
  {
    name: "Ankit Joshi",
    review: "Wonderful ambiance and expert staff. Loved it!",
  },
  {
    name: "Riya Mehta",
    review: "Great service and reasonable prices. A perfect weekend treat!",
  },
];

const ClientsReview = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % reviews.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // 3 reviews, rotated
  const visibleReviews = [
    reviews[index],
    reviews[(index + 1) % reviews.length],
    reviews[(index + 2) % reviews.length],
  ];

  const animationDirections = [
    { x: -50, opacity: 0 },
    { y: 50, opacity: 0 },
    { x: 50, opacity: 0 },
  ];

  return (
    <div className="max-w-6xl min-h-screen mx-auto py-16 px-4 text-center">
      <h2 className="text-3xl font-bold text-textPrimary mb-10">
        What Our Clients Say
      </h2>
      <p className="text-lg text-textSecondary mb-8">
        Our clients love us! Here's what they have to say about their experience.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {visibleReviews.map((review, idx) => (
          <AnimatePresence key={idx}>
            <motion.div
              key={review.name + index}
              initial={animationDirections[idx]}
              animate={{ x: 0, y: 0, opacity: 1 }}
              exit={animationDirections[idx]}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="bg-white rounded-2xl border shadow-xl p-6 text-textPrimary relative transform hover:scale-105 transition-all duration-300"
              style={{
                rotate: idx === 0 ? "-2deg" : idx === 2 ? "2deg" : "0deg",
                backgroundImage: "url('/assets/images/sticker-bg.png')",  
                backgroundSize: "cover",
              }}
            >
              <p className="italic text-textSecondary mb-4">"{review.review}"</p>
              <h4 className="text-lg font-semibold text-gray-900">- {review.name}</h4>
              <span className="absolute top-2 right-4 text-xs bg-pink-100 text-pink-600 px-2 py-1 rounded-full">
                Verified
              </span>
            </motion.div>
          </AnimatePresence>
        ))}
      </div>
    </div>
  );
};

export default ClientsReview;
