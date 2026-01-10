import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const AboutCompanySection = () => {
  return (
    <div>
      <section className="py-16 px-6 bg-backgroundSecondary text-textPrimary">
        <div className="max-w-7xl mx-auto">
          {/* Top Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            {/* Image */}
            <div className="flex justify-center">
              <img
                src="https://res.cloudinary.com/dxpxcptn4/image/upload/v1754220904/5476534_row30j.jpg"
                alt="Devices showing website"
                className="rounded-lg max-w-[550px] max-h-[500px] h-full w-full object-cover"
              />
            </div>

            {/* Text Content */}
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-4">
                ALGOTWIST - Strategic Digital Marketing Company Fueling Online
                Growth
              </h2>
              <p className="text-textSecondary mb-6 leading-relaxed">
                At AlgoTwist, we combine strategy, creativity, and analytics to
                deliver digital marketing solutions that make an impact. From
                increasing visibility to driving conversions, our team builds
                custom strategies tailored to your brand’s goals. Whether you're
                a startup or a global brand, we help you dominate the digital
                landscape with campaigns that generate real, measurable results.
              </p>

              <ul className="space-y-2 text-sm sm:text-base mb-6">
                {[
                  "Tailored to Your Goals",
                  "Innovation-Driven",
                  "For All Businesses",
                ].map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-2 text-textSecondary"
                  >
                    <FaCheckCircle className="text-highlightText" />
                    {item}
                  </li>
                ))}
              </ul>

              <button className="bg-highlightText hover:bg-highlightTextSecondary text-textPrimary px-6 py-3 rounded-md text-sm sm:text-base font-medium transition">
                Schedule a Free Consultation
              </button>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Stats */}
            <div className="grid grid-cols-2 gap-3">
              {[
                { value: "32+", label: "Digital Marketing Specialist" },
                { value: "157+", label: "Projects Delivered" },
                { value: "98+", label: "Clients" },
              ].map((stat, idx) => (
                <div key={idx} className="text-center sm:text-left">
                  <h3 className="text-4xl font-extrabold text-highlightText mb-1">
                    {stat.value}
                  </h3>
                  <p className="text-textPrimary text-lg font-semibold">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Collage Image */}
            <div className="flex justify-center">
              <img
                src="https://res.cloudinary.com/dxpxcptn4/image/upload/v1754220905/29973_qgoipt.jpg"
                alt="Work showcase"
                className="rounded-lg max-w-[550px] max-h-[500px] h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutCompanySection;
