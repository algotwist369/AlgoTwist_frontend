import React, { useState } from "react";
import FormInput from "./FormInput";
import Button from "./Button";
import Heading from "./Heading";
import apiClient from "../../config/axios";

const ProposalForm = ({width}) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    budgetRange: "",
    projectDescription: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState({ type: "", text: "" });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage({ type: "", text: "" });

    try {
      const response = await apiClient.post('https://algotwist.onrender.com/api/send-email', formData);

      setMessage({ type: "success", text: response.data.message });
      // Reset form on success
      setFormData({
        name: "",
        email: "",
        phone: "",
        budgetRange: "",
        projectDescription: ""
      });
    } catch (error) {
      console.error('Submission error:', error);
      const errorMessage = error.response?.data?.message || "Network error. Please try again.";
      setMessage({ type: "error", text: errorMessage });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={`w-full ${width ?'w-full':'lg:w-1/2'}  bg-backgroundSecondary p-6 rounded-lg shadow-md`}>
      <Heading
        children={`Request for a proposal`}
        style={"md:text-[30px] mb-8"}
      />
      
      {/* Message Display */}
      {message.text && (
        <div className={`mb-4 p-3 rounded-md ${
          message.type === "success" 
            ? "bg-green-100 border border-green-400 text-green-700" 
            : "bg-red-100 border border-red-400 text-red-700"
        }`}>
          {message.text}
        </div>
      )}

      <form className="mt-6 space-y-6" onSubmit={handleSubmit}>
        {/* Name & Email */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <FormInput
            label="Name"
            placeholder="Enter your name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
          <FormInput
            label="Business Email"
            placeholder="example@company.com"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>

        {/* Phone & Budget */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <FormInput
            label="Phone"
            placeholder="+91 1234567890"
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            required
          />
          <div>
            <label className="block text-textPrimary text-sm font-medium mb-2">
              Budget Range
            </label>
            <select
              name="budgetRange"
              value={formData.budgetRange}
              onChange={handleInputChange}
              required
              className="w-full bg-backgroundHover border border-borderColor rounded-md px-4 py-3 text-sm text-textPrimary focus:outline-none focus:ring-2 focus:ring-highlightText/50"
            >
              <option value="">Select budget range</option>
              <option value="₹5,000 - ₹15,000">₹5,000 - ₹15,000</option>
              <option value="₹15,000 - ₹30,000">₹15,000 - ₹30,000</option>
              <option value="₹30,000 - ₹50,000">₹30,000 - ₹50,000</option>
              <option value="₹50,000 - ₹1,00,000">₹50,000 - ₹1,00,000</option>
              <option value="₹1,00,000+">₹1,00,000+</option>
            </select>
          </div>
        </div>

        {/* Project Description */}
        <div>
          <label className="block text-textPrimary text-sm font-medium mb-2">
            Project Description
          </label>
          <textarea
            name="projectDescription"
            value={formData.projectDescription}
            onChange={handleInputChange}
            required
            rows="5"
            className="w-full bg-backgroundHover border border-borderColor rounded-md px-4 py-3 text-sm text-textPrimary focus:outline-none focus:ring-2 focus:ring-highlightText/50"
            placeholder="Please share your detailed requirements..."
          />
        </div>

        {/* Submit Button */}
        <div>
          <Button 
            children={isSubmitting ? "Sending..." : "Submit Proposal Request"}
            disabled={isSubmitting}
            type="submit"
          />
        </div>
      </form>
    </div>
  );
};

export default ProposalForm;
