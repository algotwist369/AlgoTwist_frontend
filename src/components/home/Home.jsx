import React, { useEffect } from "react";
import Services from "../services/Services";
import Contact from "../Contact/Contact";
import Blog from "../Blog/Blog";

// Import data
import blogData from "../../data/blogData.json";
import contactData from "../../data/contactData.json";
import HeroSection from "./HeroSection";
import OurClient from "../client/OurClient";
import WorkflowSteps from "../ourWorkFlow/WorkflowSteps";
import AboutUs from "./AboutUs";
import SocialMedia from "../social/SocialMedia";
import ClientsReview from "./ClientsReview";
import ProposalForm from "../common/ProposalForm";


const Home = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <div>
      <HeroSection />
      <AboutUs />
      <Services />
      <WorkflowSteps />
      <div className="max-w-7xl mx-auto">
        <ProposalForm widh={"max-w-7xl"} />
      </div>
      {/* <OurClient /> */}
      <SocialMedia />
      <Blog data={blogData} />
      <ClientsReview />
      <Contact data={contactData} />
    </div>
  );
};

export default Home;
