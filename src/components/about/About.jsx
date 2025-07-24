import React from 'react';
import aboutData from '../../data/aboutData.json';

const bannerUrl =
  'https://png.pngtree.com/png-clipart/20220502/original/pngtree-teamwork-project-management-and-effective-cooperation-for-successful-business-solutions-symbols-png-image_7641976.png';

const About = () => {
  return (
    <section className="bg-background dark:bg-gray-900 min-h-screen pb-8">
      {/* Banner with overlayed title/subtitle */}
      <div className="relative w-full h-full md:h-72 flex items-center justify-center mb-12">
        <img
          src={bannerUrl}
          alt="About Banner"
          className="absolute inset-0 w-full h-full object-contain md:object-cover object-top rounded-b-3xl shadow-lg bg-background dark:bg-gray-900"
          style={{ maxHeight: '320px' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/60 via-blue-800/40 to-transparent rounded-b-3xl" />
        <div className="relative z-10 text-center w-full px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold text-onBackground drop-shadow mb-2">
            {aboutData.title}
          </h1>
          <h2 className="text-lg md:text-2xl text-blue-100 font-medium drop-shadow mb-2">
            {aboutData.subtitle}
          </h2>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-4 text-center">
        {/* Company Story / Introduction */}
        <div className="mb-10">
          <h3 className="text-2xl font-semibold text-blue-700 dark:text-blue-300 mb-3">Who We Are</h3>
          <p className="text-base md:text-lg text-onBackground dark:text-gray-200 mb-2">
            Founded in 2021, AlgoTwist is a passionate team of engineers, designers, and strategists dedicated to helping businesses thrive in the digital era. We believe in the power of technology to transform organizations and create lasting impact. Our team brings together decades of combined experience in software development, cloud solutions, and digital transformation for clients ranging from startups to Fortune 500 enterprises.
          </p>
        </div>
        <p className="text-lg text-onBackground dark:text-gray-200 mb-10">
          {aboutData.description}
        </p>
        <div className="grid md:grid-cols-2 gap-8 mb-10">
          <div className="bg-blue-50 dark:bg-blue-900 rounded-xl shadow-lg p-8 flex flex-col items-center">
            <h3 className="text-2xl font-semibold text-blue-700 dark:text-blue-300 mb-2">Our Mission</h3>
            <p className="text-onBackground dark:text-gray-200">{aboutData.mission}</p>
          </div>
          <div className="bg-blue-50 dark:bg-blue-900 rounded-xl shadow-lg p-8 flex flex-col items-center">
            <h3 className="text-2xl font-semibold text-blue-700 dark:text-blue-300 mb-2">Our Vision</h3>
            <p className="text-onBackground dark:text-gray-200">{aboutData.vision}</p>
          </div>
        </div>
        {/* Why Choose Us Section */}
        <div className="bg-blue-50 dark:bg-blue-900 rounded-xl shadow-lg p-8 mb-10">
          <h3 className="text-2xl font-semibold text-blue-700 dark:text-blue-300 mb-4">Why Choose AlgoTwist?</h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
            <li className="flex items-start gap-2"><span className="mt-1 w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full"></span>Proven track record with enterprise clients</li>
            <li className="flex items-start gap-2"><span className="mt-1 w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full"></span>End-to-end digital transformation expertise</li>
            <li className="flex items-start gap-2"><span className="mt-1 w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full"></span>Agile, transparent, and collaborative process</li>
            <li className="flex items-start gap-2"><span className="mt-1 w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full"></span>Dedicated support and long-term partnership</li>
          </ul>
        </div>
        <div className="bg-background dark:bg-gray-800 rounded-xl shadow p-8 mb-10">
          <h3 className="text-2xl font-semibold text-blue-700 dark:text-blue-300 mb-4">Our Core Values</h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {aboutData.values.map((value, idx) => (
              <li key={idx} className="text-onBackground dark:text-gray-200 text-base flex items-center gap-2">
                <span className="inline-block w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full"></span>
                {value}
              </li>
            ))}
          </ul>
        </div>
        {/* Call to Action */}
        <div className="mt-12">
          <h4 className="text-xl font-semibold text-blue-700 dark:text-blue-300 mb-2">Ready to transform your business?</h4>
          <p className="text-onBackground dark:text-gray-200 mb-4">Contact us today for a free consultation and discover how AlgoTwist can help you achieve your goals.</p>
          <a href="/contact" className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold shadow hover:bg-blue-700 transition-colors">Get in Touch</a>
        </div>
      </div>
    </section>
  );
};

export default About;
