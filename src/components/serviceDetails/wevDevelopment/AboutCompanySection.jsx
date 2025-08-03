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
                src="https://img.freepik.com/premium-photo/tablet-laptop-mobile-phone-top-view-responsive-website-3d-rendering-wooden-desktop_72104-3750.jpg" 
                alt="Devices showing website"
                className="rounded-lg max-w-full h-auto"
              />
            </div>

            {/* Text Content */}
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-4">
                ALGOTWIST – Expert Website Development Company Driving Digital
                Innovation
              </h2>
              <p className="text-textSecondary mb-6 leading-relaxed">
                At AlgoTwist, we blend innovation, creativity, and advanced
                technology to craft high-performing websites aligned with your
                business objectives. Our focus goes beyond web development - we
                create powerful digital growth engines that drive success for
                startups, enterprises, and global brands. Partner with us to
                transform your online presence and achieve lasting digital
                impact.
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
            <div className="grid grid-cols-2 gap-6">
              {[
                { value: "15+", label: "Developers" },
                { value: "65+", label: "Projects Delivered" },
                { value: "3+", label: "Years Of Experience" },
                { value: "45+", label: "Clients" },
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
                src="https://sdlccorp-web-prod.blr1.digitaloceanspaces.com/wp-content/uploads/2025/05/16171834/Untitled-500-x-300-px.webp" // replace with your actual image path
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
