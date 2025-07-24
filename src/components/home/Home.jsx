import React, { useEffect } from 'react';
import { ArrowRight, Award } from 'lucide-react';
import Services from '../services/Services';
import Projects from '../Projects/Projects';
import Certifications from '../Certifications/Certifications';
import Contact from '../Contact/Contact';
import SuccessGuarantee from '../SuccessGuarantee/SuccessGuarantee';
import Blog from '../Blog/Blog';

// Import data
import homeData from '../../data/homeData.json';
import servicesData from '../../data/servicesData.json';
import projectsData from '../../data/projectsData.json';
import certificationsData from '../../data/certificationsData.json';
import blogData from '../../data/blogData.json';
import successGuaranteeData from '../../data/successGuaranteeData.json';
import contactData from '../../data/contactData.json';
import HowWeWork from '../SuccessGuarantee/HowWeWork';
import HeroSection from './HeroSection';
import WhatDefineUS from '../SuccessGuarantee/WhatDefineUS';
import OurClient from '../client/OurClient';
import WorkflowSteps from "../ourWorkFlow/WorkflowSteps"

const Home = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, [])

  return (
    <div className="min-h-screen bg-background text-onBackground transition-colors duration-300">
      <HeroSection />

      {/* Services Section */}
      <div>
        <Services data={servicesData} />
      </div>

      {/* 30-Day Success Guarantee Section */}
      <div>
        <WhatDefineUS />
        <WorkflowSteps />
      </div>

      {/* how we work */}
      <div>
        <HowWeWork />
      </div>

      {/* our client section */}
      <OurClient />

      {/* Blog Section */}
      <div>
        <Blog data={blogData} />
      </div>


      {/* Projects Section */}
      {/* <div>
        <Projects data={projectsData} />
      </div> */}

      {/* Certifications Section */}
      {/* <div>
        <Certifications data={certificationsData} />
      </div> */}

      {/* Contact Section */}
      <div>
        <Contact data={contactData} />
      </div>
    </div>
  );
}

export default Home;