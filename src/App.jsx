import React, { createContext, useContext, useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
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
import SeoServices from "./components/pricing/SeoServices";
import DigitalMarketing from "./components/pricing/DigitalMarketing";
import PerformanceMarketing from "./components/pricing/PerformanceMarketing";
import DigitalPR from "./components/pricing/DigitalPR";
import LeadGeneration from "./components/pricing/LeadGeneration";
import GraphicDesigning from "./components/pricing/GraphicDesigning ";
import Photography from "./components/pricing/Photography";
import SocialMediaMarketing from "./components/pricing/SocialMediaMarketing";
import UiUxDesign from "./components/pricing/UiUxDesign";

const AppContent = () => {
  return (
    <div className="min-h-screen bg-backgroundPrimary">
      <Navebar />
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
