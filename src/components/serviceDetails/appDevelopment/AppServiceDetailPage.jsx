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
              children={`Web Development that Drives Results`}
              style={""}
            />
            <p className="text-textSecondary leading-relaxed max-w-[550px]">
              At AlgoTwist, we craft high-performing websites that help brands
              stand out online. Whether you need a sleek corporate presence, a
              dynamic eCommerce store, or a custom web solution, we build
              secure, scalable, and SEO-friendly platforms that grow with your
              business.
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
