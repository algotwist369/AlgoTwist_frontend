import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const AboutCompanySection = () => {
  return (
    <div>
      <section className="py-16 px-6 bg-backgroundPrimary text-textPrimary">
        <div className="max-w-7xl mx-auto">
          {/* Top Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            {/* Image */}
            <div className="flex justify-center">
              <img
                src="https://res.cloudinary.com/dxpxcptn4/image/upload/v1754223164/5757453_xfgx1x.jpg"
                alt="Devices showing website"
                className="rounded-lg max-w-full h-auto"
              />
            </div>

            {/* Text Content */}
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-4">
                ALGOTWIST – Where Design Meets Digital Innovation
              </h2>
              <p className="text-textSecondary mb-6 leading-relaxed">
                At AlgoTwist, we don’t just build websites — we design
                meaningful digital experiences. By blending creativity,
                usability, and modern technology, we create interfaces that not
                only look stunning but work beautifully. Whether you're a
                growing startup or an established brand, we design platforms
                that feel effortless to use and impossible to forget. Let’s
                craft a website that tells your story, connects with users, and
                drives real growth.
              </p>

              <ul className="space-y-2 text-sm sm:text-base mb-6">
                {[
                  "Designed Around Your Vision",
                  "Driven by Creativity & Innovation",
                  "Solutions for Startups to Enterprises",
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
            <div className="grid grid-cols-2 gap-6">
              {[
                { value: "12+", label: "UI/UX Designer" },
                { value: "165+", label: "Projects Delivered" },
                // { value: "3+", label: "Years Of Experience" },
                { value: "64+", label: "Clients" },
              ].map((stat, idx) => (
                <div key={idx} className="text-center sm:text-left">
                  <h3 className="text-4xl font-extrabold text-highlightText mb-1">
                    {stat.value}
                  </h3>
                  <p className="text-textPrimary-700 text-lg font-semibold">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Collage Image */}
            <div className="flex justify-center">
              <img
                src="https://res.cloudinary.com/dxpxcptn4/image/upload/v1754223266/5815495_kvx2aq.jpg"
                alt="Work showcase"
                className="rounded-lg max-w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutCompanySection;
