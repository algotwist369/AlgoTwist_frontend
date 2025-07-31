import React from "react";
import { motion } from "framer-motion";
import { FaTimes } from "react-icons/fa";
import { serviceTypes } from "../../data/pricingData.js";
import Button from "../common/Button.jsx";

const PricingForm = ({
  selectedService,
  formData,
  handleChange,
  handleSubmit,
  submitted,
  setShowForm,
}) => {
  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="bg-backgroundSecondary rounded-2xl p-6 md:p-8 w-full max-w-3xl max-h-[90vh]  border border-borderColor shadow-xl"
      >
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-2xl font-bold text-textPrimary">
            {submitted
              ? "Thank You!"
              : `Get Pricing for ${selectedService || "Your Business"}`}
          </h3>
          <button
            onClick={() => setShowForm(false)}
            className="p-2 hover:bg-backgroundHover rounded-full transition"
          >
            <FaTimes className="text-textPrimary" />
          </button>
        </div>

        {submitted ? (
          <div className="text-center py-8">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4"
            >
              <svg
                className="w-10 h-10 text-green-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
            </motion.div>
            <h4 className="text-xl font-semibold mb-2">Request Received!</h4>
            <p className="text-textPrimary">
              We'll analyze your requirements and send you a custom pricing
              proposal shortly.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-textPrimary mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Enter your name"
                  className="w-full bg-backgroundHover border border-borderColor rounded-lg px-4 py-3 text-textPrimary focus:outline-none focus:ring-2 focus:ring-highlightText/50"
                />
              </div>
              <div>
                <label className="block text-textPrimary mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="youremail@gmail.com"
                  className="w-full bg-backgroundHover border border-borderColor rounded-lg px-4 py-3 text-textPrimary focus:outline-none focus:ring-2 focus:ring-highlightText/50"
                />
              </div>
            </div>

            <div>
              <label className="block text-textPrimary mb-2">
                Phone (Optional)
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+91 91******18"
                className="w-full bg-backgroundHover border border-borderColor rounded-lg px-4 py-3 text-textPrimary focus:outline-none focus:ring-2 focus:ring-highlightText/50"
              />
            </div>

            <div>
              <label className="block text-textPrimary mb-2">
                Business Type
              </label>
              <select
                name="businessType"
                value={formData.businessType}
                onChange={handleChange}
                required
                className="w-full bg-backgroundHover border border-borderColor rounded-lg px-4 py-3 text-textPrimary focus:outline-none focus:ring-2 focus:ring-highlightText/50"
              >
                <option value="">Select your business type</option>
                {serviceTypes.map((type, index) => (
                  <option key={index} value={type.type}>
                    {type.type}
                  </option>
                ))}
                <option value="Other">Other (Please specify)</option>
              </select>
            </div>

            {formData.businessType && formData.businessType !== "Other" && (
              <div>
                <label className="block text-textPrimary mb-2">
                  Service Sub-Type
                </label>
                <select
                  name="subType"
                  value={formData.subType}
                  onChange={handleChange}
                  required
                  className="w-full bg-backgroundHover border border-borderColor rounded-lg px-4 py-3 text-textPrimary focus:outline-none focus:ring-2 focus:ring-highlightText/50"
                >
                  <option value="">Select service sub-type</option>
                  {serviceTypes
                    .find(type => type.type === formData.businessType)?.subType
                    .map((subType, index) => (
                      <option key={index} value={subType.type}>
                        {subType.type}
                      </option>
                    ))}
                </select>
              </div>
            )}

            <div>
              <label className="block text-textPrimary mb-2">
                Project Description
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                required
                rows="4"
                className="w-full bg-backgroundHover border border-borderColor rounded-lg px-4 py-3 text-textPrimary focus:outline-none focus:ring-2 focus:ring-highlightText/50"
                placeholder="Tell us about your project requirements..."
              ></textarea>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-textPrimary mb-2">
                  Budget Range
                </label>
                <select
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  required
                  className="w-full bg-backgroundHover border border-borderColor rounded-lg px-4 py-3 text-textPrimary focus:outline-none focus:ring-2 focus:ring-highlightText/50"
                >
                  <option value="">Select budget range</option>
                  <option value="₹5,000 - ₹15,000">₹5,000 - ₹15,000</option>
                  <option value="₹15,000 - ₹30,000">₹15,000 - ₹30,000</option>
                  <option value="₹30,000 - ₹50,000">₹30,000 - ₹50,000</option>
                  <option value="₹50,000 - ₹1,00,000">
                    ₹50,000 - ₹1,00,000
                  </option>
                  <option value="₹1,00,000+">₹1,00,000+</option>
                </select>
              </div>
              <div>
                <label className="block text-textPrimary mb-2">Timeline</label>
                <select
                  name="timeline"
                  value={formData.timeline}
                  onChange={handleChange}
                  required
                  className="w-full bg-backgroundHover border border-borderColor rounded-lg px-4 py-3 text-textPrimary focus:outline-none focus:ring-2 focus:ring-highlightText/50"
                >
                  <option value="">Select timeline</option>
                  <option value="Less than 2 weeks">Less than 2 weeks</option>
                  <option value="2-4 weeks">2-4 weeks</option>
                  <option value="1-2 months">1-2 months</option>
                  <option value="3+ months">3+ months</option>
                </select>
              </div>
            </div>
            <div className="pt-4">
              <Button type="submit" children={"Submit Request"} />
            </div>
          </form>
        )}
      </motion.div>
    </div>
  );
};

export default PricingForm;
