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
import DigitalMarketingPricing from "../../pricing/DigitalMarketing";

const DigitalMarketingPage = () => {
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
              children={`Full-funnel digital strategies that maximize your brand's reach and ROI.`}
              style={""}
            />
            <p className="text-textSecondary leading-relaxed max-w-[550px]">
              At AlgoTwist, we go beyond vanity metrics to deliver real results. Our digital marketing services are designed to attract, engage, and convert your ideal audience. From SEO and PPC to content marketing and analytics, we craft data-driven strategies that fuel growth across every stage of the funnel. Whether you're launching a new product or scaling your online presence, we help your brand stay ahead in a competitive digital landscape.
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
      <DigitalMarketingPricing />
      <Technologies />
      {/* <OurClient /> */}
    </div>
  );
};

export default DigitalMarketingPage;
