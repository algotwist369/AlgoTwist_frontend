import React from "react";
import FormInput from "../../common/FormInput";
import Button from "../../common/Button";
import Heading from "../../common/Heading";

const ProposalForm = () => {
  return (
    <div className="w-full lg:w-1/2 bg-backgroundSecondary p-6 rounded-lg shadow-md">
      <Heading
        children={`Request for a proposal`}
        style={"md:text-[30px] mb-8"}
      />
      <h1></h1>
      <form className="mt-6 space-y-6">
        {/* Name & Email */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <FormInput
            label="Phone"
            placeholder="+91 1234567890"
            type="tel"
            name="phone"
            required
          />
          <div>
            <label className="block text-sm font-medium mb-2">
              Budget Range
            </label>
            <select
              name="budget"
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
          <label className="block text-sm font-medium mb-2">
            Project Description
          </label>
          <textarea
            name="description"
            required
            rows="5"
            className="w-full bg-backgroundHover border border-borderColor rounded-md px-4 py-3 text-sm text-textPrimary focus:outline-none focus:ring-2 focus:ring-highlightText/50"
            placeholder="Please share your detailed requirements..."
          />
        </div>

        {/* Submit Button */}
        <div>
          <Button children={"Submit Proposal Request"} />
        </div>
      </form>
    </div>
  );
};

export default ProposalForm;
