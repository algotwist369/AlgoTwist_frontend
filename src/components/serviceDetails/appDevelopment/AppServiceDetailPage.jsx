import React, { useEffect } from "react";
import GoBack from "../../common/GoBack";
import Heading from "../../common/Heading";
import WhatsAppButton from "../../common/WhatsAppButton";
import ServicesSection from "./ServicesSection";
import AboutCompanySection from "./AboutCompanySection";
import IndustryServices from "./IndustryServices";
import Technologies from "./CoreTechnologies";
import OurClient from "../../client/OurClient";
import ProposalForm from "../../common/ProposalForm";

const AppServiceDetailPage = () => {
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
              children={`App Development that Delivers Impact`}
              style={""}
            />
            <p className="text-textSecondary leading-relaxed max-w-[550px]">
              At AlgoTwist, we create intuitive, high-performance mobile apps that bring your ideas to life. 
              From iOS to Android and cross-platform solutions, our apps are built for speed, security,
               and seamless user experience. Whether you're launching a startup or scaling your enterprise, 
               we develop smart, scalable apps that keep your users engaged and your business ahead.
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
      <div className="py-2"></div>
      <ServicesSection />
      <IndustryServices />
      <Technologies />
      <OurClient />
    </div>
  );
};

export default AppServiceDetailPage;
