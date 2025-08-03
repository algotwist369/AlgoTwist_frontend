import React, { useEffect } from "react";
import GoBack from "../../common/GoBack";
import Heading from "../../common/Heading";
import ProposalForm from "./ProposalForm";
import WhatsAppButton from "../../common/WhatsAppButton";
import ServicesSection from "./ServicesSection";
import AboutCompanySection from "./AboutCompanySection";
import IndustryServices from "./IndustryServices";
import Technologies from "./CoreTechnologies";
import OurClient from "../../client/OurClient";

const UiUxPage = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <div>
      <div className="max-w-[87rem] mx-auto px-4 py-10 text-textPrimary">
        <GoBack />

        <section className="flex flex-col lg:flex-row gap-14 py-10">
          <div className="w-full lg:w-1/2 space-y-4">
            <Heading
              children={`We Design for People - Not Just Screens`}
              style={""}
            />
            <p className="text-textSecondary leading-relaxed max-w-[550px]">
              At AlgoTwist, we believe a great website isn’t just about code or
              visuals - it’s about how it makes people feel. We design clean,
              intuitive, and accessible digital experiences that guide users
              effortlessly and leave a lasting impression. Whether it's a bold
              landing page or a full eCommerce journey, every layout, click, and
              scroll is intentional - built to delight users and meet business
              goals.
            </p>
            <div className="py-2"></div>
            <WhatsAppButton
              active={0}
              text={`Schedule your free consultation`}
            />
          </div>
          <ProposalForm />
        </section>
      </div>
      <AboutCompanySection />
      <OurClient />
    </div>
  );
};

export default UiUxPage;
