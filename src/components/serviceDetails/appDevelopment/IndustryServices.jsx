import React from "react";
import Heading from "../../common/Heading";

const industries = [
  {
    title: "Healthcare",
    image:
      "https://res.cloudinary.com/dzkrytdjx/image/upload/v1754221603/healthcare_dra8pf.jpg", // Replace with your own
  },

  {
    title: "Retail & E-commerce",
    image:
      "https://res.cloudinary.com/dzkrytdjx/image/upload/v1754221630/Retails_ltvflj.jpg",
  },

  {
    title: "Education & E-Learning",
    image:
      "https://res.cloudinary.com/dzkrytdjx/image/upload/v1754222132/education_rilvrp.jpg",
  },
  {
    title: "Real Estate & PropTech",
    image:
      "https://res.cloudinary.com/dzkrytdjx/image/upload/v1754221609/realstates_bybqsa.jpg",
  },
  {
    title: "Manufacturing & Sales",
    image:
      "https://res.cloudinary.com/dzkrytdjx/image/upload/v1754221601/manufactures_no7hcg.jpg",
  },
  {
    title: "Logistics",
    image:
      "https://res.cloudinary.com/dzkrytdjx/image/upload/v1754221600/logistics_b4dr1z.jpg",
  },
  {
    title: "Finance & Banking",
    image:
      "https://res.cloudinary.com/dzkrytdjx/image/upload/v1754221604/bankingfinance_ougf0s.jpg",
  },
  {
    title: "Travel and Booking App",
    image:
      "https://res.cloudinary.com/dzkrytdjx/image/upload/v1754221599/travelui_hcmk0p.jpg",
  },
];

const IndustryServices = () => {
  return (
    <section className="max-w-[87rem] mx-auto py-16 px-4 text-center">
      <Heading children={`App Development Services for All Industries`} />
      <p className="max-w-3xl mx-auto text-textSecondary mb-12">
        We build custom mobile applications designed to meet the unique demands of your industry. Whether it’s healthcare, finance, education,
         retail, or logistics — our expert team delivers secure, high-performance apps that drive engagement, streamline operations, and scale
          with your business in today’s mobile-first world.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {industries.map((industry, i) => (
          <div key={i} className="">
            <img
              src={industry.image}
              alt={industry.title}
              className="w-full  object-cover text-textPrimary "
            />
            <div className="py-4 font-medium text-textPrimary bg-transparent">
              <h1 className="shadow-lg shadow-highlightText transition duration-300 border border-borderColor p-1 cursor-pointer hover:border-highlightText rounded-md">
                {industry.title}
              </h1>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default IndustryServices;
