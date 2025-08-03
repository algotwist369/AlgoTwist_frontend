import React from "react";
import Heading from "../../common/Heading";

const industries = [
  {
    title: "Healthcare",
    image:
      "https://res.cloudinary.com/dxpxcptn4/image/upload/v1754132980/ChatGPT_Image_Aug_2_2025_04_37_08_PM_syogol.png", // Replace with your own
  },

  {
    title: "Retail & E-commerce",
    image:
      "https://res.cloudinary.com/dxpxcptn4/image/upload/v1754132980/ChatGPT_Image_Aug_2_2025_04_37_11_PM_jdgmzs.png",
  },

  {
    title: "Education & E-Learning",
    image:
      "https://res.cloudinary.com/dxpxcptn4/image/upload/v1754132979/ChatGPT_Image_Aug_2_2025_04_37_18_PM_jgfync.png",
  },
  {
    title: "Real Estate & PropTech",
    image:
      "https://res.cloudinary.com/dxpxcptn4/image/upload/v1754132980/ChatGPT_Image_Aug_2_2025_04_37_15_PM_eiqj2y.png",
  },
  {
    title: "Manufacturing & Sales",
    image:
      "https://res.cloudinary.com/dxpxcptn4/image/upload/v1754134586/ChatGPT_Image_Aug_2_2025_05_05_49_PM_qb5sty.png",
  },
  {
    title: "Logistics",
    image:
      "https://res.cloudinary.com/dxpxcptn4/image/upload/v1754134637/ChatGPT_Image_Aug_2_2025_05_06_55_PM_bvfbg0.png",
  },
  {
    title: "Finance & Banking",
    image:
      "https://res.cloudinary.com/dxpxcptn4/image/upload/v1754133826/ChatGPT_Image_Aug_2_2025_04_53_16_PM_zrgemq.png",
  },
  {
    title: "NGO",
    image:
      "https://res.cloudinary.com/dxpxcptn4/image/upload/v1754135161/ChatGPT_Image_Aug_2_2025_05_13_34_PM_tmxlwz.png",
  },
];

const IndustryServices = () => {
  return (
    <section className="max-w-[87rem] mx-auto py-16 px-4 text-center">
      <Heading children={`Web-Dev Services For All Industries`} />
      <p className="max-w-3xl mx-auto text-textSecondary mb-12">
        We deliver customized website development solutions tailored to your
        industry's unique needs. From healthcare to finance, retail to real
        estate, our expert developers ensure performance-driven, secure, and
        scalable websites that help your business grow and thrive online.
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
