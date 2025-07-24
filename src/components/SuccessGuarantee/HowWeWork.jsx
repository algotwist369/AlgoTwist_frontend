import React from 'react';
import howWeWorkData from '../../data/howWeWorkData.json';

const HowWeWork = () => {
  return (
    <section className="py-24 bg-white p-0 m-0">
      {/* <div className="w-full text-center p-0 m-0">
        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
          <span className="text-purple-600"> {howWeWorkData.title}</span>
        </h2>
        <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
          {howWeWorkData.description}
        </p>
      </div> */}
      <div className="w-11/12 mx-auto">
        <img
          src="https://nextinlabs.com/images/service/it-process.png"
          alt="How We Work Roadmap"
          className="w-full h-auto object-cover"
          style={{ maxHeight: '900vh', width: '100vw', objectFit: 'cover', display: 'block', margin: 0, padding: 0 }}
        />
      </div>
    </section>
  );
};

export default HowWeWork;