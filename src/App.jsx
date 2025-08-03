import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import BlogPage from "./pages/BlogPage";
import BlogReadPage from "./pages/BlogReadPage";
import Navebar from "./components/common/Navebar";
import Footer from "./components/common/Footer";
import OurTeam from "./components/team/OurTeam";
import Projects from "./components/Projects/Projects";
import About from "./components/about/About";

// Pricing for the services
import WebDevelopment from "./components/pricing/WebDevelopment";
import DigitalServicesTable from "./components/pricing/DigitalServicesTable";
import AppDevelopment from "./components/pricing/AppDevelopment";
import DigitalMarketing from "./components/pricing/DigitalMarketing";

import GraphicDesigning from "./components/pricing/GraphicDesigning ";
import Photography from "./components/pricing/Photography";
import SocialMediaMarketing from "./components/pricing/SocialMediaMarketing";
import UiUxDesign from "./components/pricing/UiUxDesign";
import NotFound from "./components/common/NotFound";
import ServicePopup from "./components/pricing/common/ServicePopup";

//Service details page
import WedServiceDetailPage from "./components/serviceDetails/wevDevelopment/WedServiceDetailPage";
import AppServiceDetailPage from "./components/serviceDetails/appDevelopment/AppServiceDetailPage";

const AppContent = () => {
  return (
    <div className="bg-backgroundPrimary">
      <Navebar />
      {/* <ServicePopup /> */}
      <Routes>
        {/* Home and Main Pages */}
        <Route path="/" element={<HomePage />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/our-team" element={<OurTeam />} />
        <Route path="/projects" element={<Projects />} />

        {/* Blog Pages */}
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:slug" element={<BlogReadPage />} />
        <Route path="/blog/id/:id" element={<BlogReadPage />} />

        {/* Pricing/Service Pages (alphabetically) */}
        <Route path="/pricing/web-development" element={<WebDevelopment />} />
        <Route path="/pricing/app-development" element={<AppDevelopment />} />
        <Route
          path="/pricing/digital-marketing"
          element={<DigitalMarketing />}
        />
        <Route
          path="/pricing/graphic-designing"
          element={<GraphicDesigning />}
        />
        <Route path="/pricing/photography" element={<Photography />} />
        <Route
          path="/pricing/social-media-marketing"
          element={<SocialMediaMarketing />}
        />
        <Route path="/pricing/ui-ux-design" element={<UiUxDesign />} />
        <Route path="/pricing" element={<DigitalServicesTable />} />

        {/* Service Details route */}
        <Route path="/servie/web-development" element={<WedServiceDetailPage />} />
        <Route path="/servie/app-development" element={<AppServiceDetailPage />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;
