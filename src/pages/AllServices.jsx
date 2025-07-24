import React from 'react';
import servicesData from '../data/servicesData.json';

const AllServices = () => {
  return (
    <section className="py-24 bg-white min-h-screen">
      <div className="max-w-5xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-blue-700 mb-6 text-center">All IT Services</h1>
        <p className="text-lg text-gray-600 mb-12 text-center max-w-2xl mx-auto">{servicesData.description}</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-10">
          {servicesData.services.map((service, idx) => (
            <div key={idx} className="bg-blue-50 rounded-xl shadow-lg p-8 flex flex-col items-start hover:shadow-2xl transition-shadow duration-300">
              <div className="mb-4">
                <span className="inline-block bg-blue-100 text-blue-600 rounded-full px-4 py-2 text-sm font-semibold">
                  {service.icon}
                </span>
              </div>
              <h2 className="text-2xl font-semibold text-blue-700 mb-2">{service.title}</h2>
              <p className="text-gray-600 text-base">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllServices;
