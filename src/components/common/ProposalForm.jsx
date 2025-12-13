import React from "react";
import FormInput from "./FormInput";
import Button from "./Button";
import Heading from "./Heading";

const ProposalForm = ({ widh }) => {
  return (
    <div
      className={`${
        widh ? widh : "max-w-full lg:w-1/2 mx-auto"
      } bg-backgroundPrimary border border-borderColor p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300`}
    >
      <Heading
        children="Request a Proposal"
        style="text-2xl sm:text-[30px] font-bold mb-4 text-highlightText"
      />
      <p className="text-sm sm:text-base text-textSecondary mb-8 leading-relaxed">
        Fill out the form below and our team will get back to you within 24
        hours with a tailored proposal for your needs.
      </p>

      <form className="mt-6 space-y-6">
        {/* Name & Email */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <FormInput
            label="Name"
            placeholder="Enter your name"
            name="name"
            required
          />
          <FormInput
            label="Business Email"
            placeholder="example@company.com"
            type="email"
            name="email"
            required
          />
        </div>

        {/* Phone & Budget */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <FormInput
            label="Phone"
            placeholder="+91 1234567890"
            type="tel"
            name="phone"
            required
          />
          <div>
            <label className="block text-sm font-medium mb-2 text-textPrimary">
              Budget Range
            </label>
            <select
              name="budget"
              required
              className="w-full bg-backgroundSecondary border border-borderColor rounded-lg px-4 py-3 text-sm text-textPrimary focus:outline-none focus:ring-2 focus:ring-highlightText/50 transition-all duration-200"
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
          <label className="block text-sm font-medium mb-2 text-textPrimary">
            Project Description
          </label>
          <textarea
            name="description"
            required
            rows="5"
            className="w-full bg-backgroundSecondary border border-borderColor rounded-lg px-4 py-3 text-sm text-textPrimary focus:outline-none focus:ring-2 focus:ring-highlightText/50 resize-none transition-all duration-200"
            placeholder="Please share your detailed requirements..."
          />
        </div>

        {/* Submit Button */}
        <div className="pt-4">
          <Button
            children="Submit Proposal Request"
            className="w-full py-3 rounded-lg font-semibold bg-highlightText text-white hover:bg-highlightText/90 transition-all duration-300 shadow-md hover:shadow-lg"
          />
        </div>
      </form>
    </div>
  );
};

export default ProposalForm;
